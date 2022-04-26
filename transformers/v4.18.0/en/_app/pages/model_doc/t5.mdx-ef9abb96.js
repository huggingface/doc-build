import{S as Jy,i as Xy,s as Qy,e as o,k as l,w as b,t as r,M as e5,c as s,d as t,m as c,a,x as k,h as i,b as h,F as e,g as f,y,q as w,o as $,B as x,v as t5,L as fe}from"../../chunks/vendor-6b77c823.js";import{T as zt}from"../../chunks/Tip-39098574.js";import{D as C}from"../../chunks/Docstring-1088f2fb.js";import{C as B}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ke}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as me}from"../../chunks/ExampleCodeBlock-5212b321.js";function n5(q){let p,v,g,u,T;return{c(){p=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,p,m),e(p,v),e(p,g),e(g,u),e(p,T)},d(d){d&&t(p)}}}function o5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, T5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function s5(q){let p,v,g,u,T;return u=new B({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function a5(q){let p,v,g,u,T;return u=new B({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function r5(q){let p,v,g,u,T;return{c(){p=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,p,m),e(p,v),e(p,g),e(g,u),e(p,T)},d(d){d&&t(p)}}}function i5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),{c(){p=o("p"),v=r("Examples:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Examples:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function d5(q){let p,v,g,u,T;return u=new B({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function l5(q){let p,v,g,u,T;return u=new B({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function c5(q){let p,v,g,u,T;return{c(){p=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,p,m),e(p,v),e(p,g),e(g,u),e(p,T)},d(d){d&&t(p)}}}function p5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function h5(q){let p,v,g,u,T;return u=new B({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function u5(q){let p,v,g,u,T;return u=new B({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function m5(q){let p,v,g,u,T,d,m,E,je,oe,j,ee,S,se,Fe,G,Me,ye,U,A,ae,pe,M,N,he,K,we,ue,W,Ce,$e,P,Pe,H,V,_e,O,Ne,ge,I,Oe,R,Le;return{c(){p=o("p"),v=r("TF 2.0 models accepts two formats as inputs:"),g=l(),u=o("ul"),T=o("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),E=o("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=l(),j=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),Me=r("model(inputs)"),ye=r("."),U=l(),A=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=l(),M=o("ul"),N=o("li"),he=r("a single Tensor with "),K=o("code"),we=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Ce=r("model(inputs_ids)"),$e=l(),P=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),_e=r(" or "),O=o("code"),Ne=r("model([input_ids, attention_mask, token_type_ids])"),ge=l(),I=o("li"),Oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Le=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=s(z,"P",{});var F=a(p);v=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=s(z,"UL",{});var te=a(u);T=s(te,"LI",{});var Ue=a(T);d=i(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),m=c(te),E=s(te,"LI",{});var ot=a(E);je=i(ot,"having all inputs as a list, tuple or dict in the first positional arguments."),ot.forEach(t),te.forEach(t),oe=c(z),j=s(z,"P",{});var D=a(j);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var We=a(S);se=i(We,"tf.keras.Model.fit"),We.forEach(t),Fe=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);Me=i(ne,"model(inputs)"),ne.forEach(t),ye=i(D,"."),D.forEach(t),U=c(z),A=s(z,"P",{});var st=a(A);ae=i(st,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),st.forEach(t),pe=c(z),M=s(z,"UL",{});var L=a(M);N=s(L,"LI",{});var Y=a(N);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var at=a(K);we=i(at,"input_ids"),at.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Ae=a(W);Ce=i(Ae,"model(inputs_ids)"),Ae.forEach(t),Y.forEach(t),$e=c(L),P=s(L,"LI",{});var Z=a(P);Pe=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var rt=a(H);V=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),_e=i(Z," or "),O=s(Z,"CODE",{});var Ie=a(O);Ne=i(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),Z.forEach(t),ge=c(L),I=s(L,"LI",{});var De=a(I);Oe=i(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s(De,"CODE",{});var it=a(R);Le=i(it,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),it.forEach(t),De.forEach(t),L.forEach(t)},m(z,F){f(z,p,F),e(p,v),f(z,g,F),f(z,u,F),e(u,T),e(T,d),e(u,m),e(u,E),e(E,je),f(z,oe,F),f(z,j,F),e(j,ee),e(j,S),e(S,se),e(j,Fe),e(j,G),e(G,Me),e(j,ye),f(z,U,F),f(z,A,F),e(A,ae),f(z,pe,F),f(z,M,F),e(M,N),e(N,he),e(N,K),e(K,we),e(N,ue),e(N,W),e(W,Ce),e(M,$e),e(M,P),e(P,Pe),e(P,H),e(H,V),e(P,_e),e(P,O),e(O,Ne),e(M,ge),e(M,I),e(I,Oe),e(I,R),e(R,Le)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(oe),z&&t(j),z&&t(U),z&&t(A),z&&t(pe),z&&t(M)}}}function f5(q){let p,v,g,u,T;return{c(){p=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,p,m),e(p,v),e(p,g),e(g,u),e(p,T)},d(d){d&&t(p)}}}function _5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, TFT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("p"),v=r("Examples:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Examples:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function g5(q){let p,v,g,u,T,d,m,E,je,oe,j,ee,S,se,Fe,G,Me,ye,U,A,ae,pe,M,N,he,K,we,ue,W,Ce,$e,P,Pe,H,V,_e,O,Ne,ge,I,Oe,R,Le;return{c(){p=o("p"),v=r("TF 2.0 models accepts two formats as inputs:"),g=l(),u=o("ul"),T=o("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),E=o("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=l(),j=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),Me=r("model(inputs)"),ye=r("."),U=l(),A=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=l(),M=o("ul"),N=o("li"),he=r("a single Tensor with "),K=o("code"),we=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Ce=r("model(inputs_ids)"),$e=l(),P=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),_e=r(" or "),O=o("code"),Ne=r("model([input_ids, attention_mask, token_type_ids])"),ge=l(),I=o("li"),Oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Le=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=s(z,"P",{});var F=a(p);v=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=s(z,"UL",{});var te=a(u);T=s(te,"LI",{});var Ue=a(T);d=i(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),m=c(te),E=s(te,"LI",{});var ot=a(E);je=i(ot,"having all inputs as a list, tuple or dict in the first positional arguments."),ot.forEach(t),te.forEach(t),oe=c(z),j=s(z,"P",{});var D=a(j);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var We=a(S);se=i(We,"tf.keras.Model.fit"),We.forEach(t),Fe=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);Me=i(ne,"model(inputs)"),ne.forEach(t),ye=i(D,"."),D.forEach(t),U=c(z),A=s(z,"P",{});var st=a(A);ae=i(st,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),st.forEach(t),pe=c(z),M=s(z,"UL",{});var L=a(M);N=s(L,"LI",{});var Y=a(N);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var at=a(K);we=i(at,"input_ids"),at.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Ae=a(W);Ce=i(Ae,"model(inputs_ids)"),Ae.forEach(t),Y.forEach(t),$e=c(L),P=s(L,"LI",{});var Z=a(P);Pe=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var rt=a(H);V=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),_e=i(Z," or "),O=s(Z,"CODE",{});var Ie=a(O);Ne=i(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),Z.forEach(t),ge=c(L),I=s(L,"LI",{});var De=a(I);Oe=i(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s(De,"CODE",{});var it=a(R);Le=i(it,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),it.forEach(t),De.forEach(t),L.forEach(t)},m(z,F){f(z,p,F),e(p,v),f(z,g,F),f(z,u,F),e(u,T),e(T,d),e(u,m),e(u,E),e(E,je),f(z,oe,F),f(z,j,F),e(j,ee),e(j,S),e(S,se),e(j,Fe),e(j,G),e(G,Me),e(j,ye),f(z,U,F),f(z,A,F),e(A,ae),f(z,pe,F),f(z,M,F),e(M,N),e(N,he),e(N,K),e(K,we),e(N,ue),e(N,W),e(W,Ce),e(M,$e),e(M,P),e(P,Pe),e(P,H),e(H,V),e(P,_e),e(P,O),e(O,Ne),e(M,ge),e(M,I),e(I,Oe),e(I,R),e(R,Le)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(oe),z&&t(j),z&&t(U),z&&t(A),z&&t(pe),z&&t(M)}}}function T5(q){let p,v,g,u,T;return{c(){p=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,p,m),e(p,v),e(p,g),e(g,u),e(p,T)},d(d){d&&t(p)}}}function v5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),{c(){p=o("p"),v=r("Examples:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Examples:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function b5(q){let p,v,g,u,T,d,m,E,je,oe,j,ee,S,se,Fe,G,Me,ye,U,A,ae,pe,M,N,he,K,we,ue,W,Ce,$e,P,Pe,H,V,_e,O,Ne,ge,I,Oe,R,Le;return{c(){p=o("p"),v=r("TF 2.0 models accepts two formats as inputs:"),g=l(),u=o("ul"),T=o("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),m=l(),E=o("li"),je=r("having all inputs as a list, tuple or dict in the first positional arguments."),oe=l(),j=o("p"),ee=r("This second option is useful when using "),S=o("code"),se=r("tf.keras.Model.fit"),Fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),G=o("code"),Me=r("model(inputs)"),ye=r("."),U=l(),A=o("p"),ae=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),pe=l(),M=o("ul"),N=o("li"),he=r("a single Tensor with "),K=o("code"),we=r("input_ids"),ue=r(" only and nothing else: "),W=o("code"),Ce=r("model(inputs_ids)"),$e=l(),P=o("li"),Pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=o("code"),V=r("model([input_ids, attention_mask])"),_e=r(" or "),O=o("code"),Ne=r("model([input_ids, attention_mask, token_type_ids])"),ge=l(),I=o("li"),Oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),Le=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(z){p=s(z,"P",{});var F=a(p);v=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=c(z),u=s(z,"UL",{});var te=a(u);T=s(te,"LI",{});var Ue=a(T);d=i(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),m=c(te),E=s(te,"LI",{});var ot=a(E);je=i(ot,"having all inputs as a list, tuple or dict in the first positional arguments."),ot.forEach(t),te.forEach(t),oe=c(z),j=s(z,"P",{});var D=a(j);ee=i(D,"This second option is useful when using "),S=s(D,"CODE",{});var We=a(S);se=i(We,"tf.keras.Model.fit"),We.forEach(t),Fe=i(D,` method which currently requires having all the
tensors in the first argument of the model call function: `),G=s(D,"CODE",{});var ne=a(G);Me=i(ne,"model(inputs)"),ne.forEach(t),ye=i(D,"."),D.forEach(t),U=c(z),A=s(z,"P",{});var st=a(A);ae=i(st,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),st.forEach(t),pe=c(z),M=s(z,"UL",{});var L=a(M);N=s(L,"LI",{});var Y=a(N);he=i(Y,"a single Tensor with "),K=s(Y,"CODE",{});var at=a(K);we=i(at,"input_ids"),at.forEach(t),ue=i(Y," only and nothing else: "),W=s(Y,"CODE",{});var Ae=a(W);Ce=i(Ae,"model(inputs_ids)"),Ae.forEach(t),Y.forEach(t),$e=c(L),P=s(L,"LI",{});var Z=a(P);Pe=i(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),H=s(Z,"CODE",{});var rt=a(H);V=i(rt,"model([input_ids, attention_mask])"),rt.forEach(t),_e=i(Z," or "),O=s(Z,"CODE",{});var Ie=a(O);Ne=i(Ie,"model([input_ids, attention_mask, token_type_ids])"),Ie.forEach(t),Z.forEach(t),ge=c(L),I=s(L,"LI",{});var De=a(I);Oe=i(De,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=s(De,"CODE",{});var it=a(R);Le=i(it,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),it.forEach(t),De.forEach(t),L.forEach(t)},m(z,F){f(z,p,F),e(p,v),f(z,g,F),f(z,u,F),e(u,T),e(T,d),e(u,m),e(u,E),e(E,je),f(z,oe,F),f(z,j,F),e(j,ee),e(j,S),e(S,se),e(j,Fe),e(j,G),e(G,Me),e(j,ye),f(z,U,F),f(z,A,F),e(A,ae),f(z,pe,F),f(z,M,F),e(M,N),e(N,he),e(N,K),e(K,we),e(N,ue),e(N,W),e(W,Ce),e(M,$e),e(M,P),e(P,Pe),e(P,H),e(H,V),e(P,_e),e(P,O),e(O,Ne),e(M,ge),e(M,I),e(I,Oe),e(I,R),e(R,Le)},d(z){z&&t(p),z&&t(g),z&&t(u),z&&t(oe),z&&t(j),z&&t(U),z&&t(A),z&&t(pe),z&&t(M)}}}function k5(q){let p,v,g,u,T;return{c(){p=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,p,m),e(p,v),e(p,g),e(g,u),e(p,T)},d(d){d&&t(p)}}}function y5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){p=o("p"),v=r("Examples:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Examples:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function w5(q){let p,v,g,u,T;return{c(){p=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,p,m),e(p,v),e(p,g),e(g,u),e(p,T)},d(d){d&&t(p)}}}function $5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function x5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function z5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function q5(q){let p,v,g,u,T;return{c(){p=o("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=o("code"),u=r("Module"),T=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=s(m,"CODE",{});var E=a(g);u=i(E,"Module"),E.forEach(t),T=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){f(d,p,m),e(p,v),e(p,g),e(g,u),e(p,T)},d(d){d&&t(p)}}}function E5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function j5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function F5(q){let p,v,g,u,T;return u=new B({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=o("p"),v=r("Example:"),g=l(),b(u.$$.fragment)},l(d){p=s(d,"P",{});var m=a(p);v=i(m,"Example:"),m.forEach(t),g=c(d),k(u.$$.fragment,d)},m(d,m){f(d,p,m),e(p,v),f(d,g,m),y(u,d,m),T=!0},p:fe,i(d){T||(w(u.$$.fragment,d),T=!0)},o(d){$(u.$$.fragment,d),T=!1},d(d){d&&t(p),d&&t(g),x(u,d)}}}function M5(q){let p,v,g,u,T,d,m,E,je,oe,j,ee,S,se,Fe,G,Me,ye,U,A,ae,pe,M,N,he,K,we,ue,W,Ce,$e,P,Pe,H,V,_e,O,Ne,ge,I,Oe,R,Le,z,F,te,Ue,ot,D,We,ne,st,L,Y,at,Ae,Z,rt,Ie,De,it,Gl,Qa,Ap,Ul,Re,ri,ii,Ao,Ip,Dp,di,li,Io,Sp,Gp,ci,pi,Do,Up,Wp,hi,ui,So,Rp,Bp,mi,er,Go,Hp,Vp,Wl,tr,Kp,Rl,qt,fi,fn,_i,Yp,Zp,nr,Jp,Xp,Qp,gi,_n,Ti,eh,th,or,nh,oh,sh,vi,gn,bi,ah,rh,sr,ih,dh,Bl,Tn,lh,Uo,ch,ph,Hl,Et,hh,Wo,uh,mh,Ro,fh,_h,Vl,ar,Kl,It,vn,ki,Bo,gh,yi,Th,Yl,dt,vh,wi,bh,kh,$i,yh,wh,xi,$h,xh,Zl,bn,zh,rr,qh,Eh,Jl,kn,Qe,zi,jh,Fh,Te,Mh,qi,Ch,Ph,Ei,Nh,Oh,ji,Lh,Ah,Fi,Ih,Dh,Mi,Sh,Gh,ir,Uh,Wh,Rh,Ci,Bh,Hh,Ho,Vh,Vo,Kh,Ko,Yh,Zh,Jh,ve,Pi,Xh,Qh,Ni,eu,tu,Yo,nu,re,ou,Oi,su,au,Li,ru,iu,Ai,du,lu,Ii,cu,pu,Di,hu,uu,Si,mu,fu,Gi,_u,gu,Tu,Dt,vu,Ui,bu,ku,Wi,yu,wu,$u,be,xu,Ri,zu,qu,Bi,Eu,ju,Hi,Fu,Mu,Vi,Cu,Pu,Zo,Nu,Ou,Ki,Lu,Au,Iu,Jo,Xl,dr,Du,Ql,jt,Yi,Xo,Su,Zi,Gu,Uu,Wu,Ji,St,Ru,Qo,Bu,Hu,es,Vu,Ku,Yu,Xi,ts,Zu,Qi,Ju,Xu,ec,lr,tc,Gt,yn,ed,ns,Qu,td,em,nc,lt,tm,cr,nm,om,os,sm,am,ss,rm,im,oc,as,sc,Be,dm,nd,lm,cm,od,pm,hm,pr,um,mm,sd,fm,_m,ac,hr,gm,rc,rs,ic,ur,dc,Ut,wn,ad,is,Tm,rd,vm,lc,ct,bm,ds,km,ym,id,wm,$m,dd,xm,zm,cc,Wt,$n,ld,ls,qm,cd,Em,pc,mr,jm,hc,xn,pd,Rt,Fm,cs,Mm,Cm,ps,Pm,Nm,Om,hd,Se,Lm,hs,Am,Im,us,Dm,Sm,ms,Gm,Um,fs,Wm,Rm,_s,Bm,Hm,uc,Bt,zn,ud,gs,Vm,md,Km,mc,wt,Ts,Ym,$t,Zm,fr,Jm,Xm,_r,Qm,ef,vs,tf,nf,of,Ht,sf,gr,af,rf,Tr,df,lf,fc,Vt,qn,fd,bs,cf,_d,pf,_c,ie,ks,hf,ys,uf,ws,mf,ff,_f,$s,gf,vr,Tf,vf,bf,Ft,xs,kf,gd,yf,wf,zs,br,$f,Td,xf,zf,kr,qf,vd,Ef,jf,En,qs,Ff,Es,Mf,bd,Cf,Pf,Nf,jn,js,Of,kd,Lf,Af,yr,Fs,gc,Kt,Fn,yd,Ms,If,wd,Df,Tc,Ge,Cs,Sf,Yt,Gf,$d,Uf,Wf,Ps,Rf,Bf,Hf,Ns,Vf,wr,Kf,Yf,Zf,Mt,Os,Jf,xd,Xf,Qf,Ls,$r,e_,zd,t_,n_,xr,o_,qd,s_,a_,Mn,As,r_,Ed,i_,vc,Zt,Cn,jd,Is,d_,Fd,l_,bc,J,Ds,c_,Md,p_,h_,Ss,u_,Gs,m_,f_,__,Us,g_,zr,T_,v_,b_,Ws,k_,Rs,y_,w_,$_,pt,Bs,x_,Jt,z_,qr,q_,E_,Cd,j_,F_,M_,Pn,C_,Nn,P_,ht,Hs,N_,Pd,O_,L_,Nd,A_,I_,On,D_,Ct,Vs,S_,Od,G_,U_,Ln,kc,Xt,An,Ld,Ks,W_,Ad,R_,yc,X,Ys,B_,Zs,H_,Id,V_,K_,Y_,Js,Z_,Xs,J_,X_,Q_,Qs,eg,Er,tg,ng,og,ea,sg,ta,ag,rg,ig,ut,na,dg,Qt,lg,jr,cg,pg,Dd,hg,ug,mg,In,fg,Dn,_g,mt,oa,gg,Sd,Tg,vg,Gd,bg,kg,Sn,yg,Pt,sa,wg,Ud,$g,xg,Gn,wc,en,Un,Wd,aa,zg,Rd,qg,$c,Q,ra,Eg,Bd,jg,Fg,ia,Mg,da,Cg,Pg,Ng,la,Og,Fr,Lg,Ag,Ig,ca,Dg,pa,Sg,Gg,Ug,ft,ha,Wg,tn,Rg,Mr,Bg,Hg,Hd,Vg,Kg,Yg,Wn,Zg,Rn,Jg,_t,ua,Xg,Vd,Qg,eT,Kd,tT,nT,Bn,oT,Nt,ma,sT,Yd,aT,rT,Hn,xc,nn,Vn,Zd,fa,iT,Jd,dT,zc,de,_a,lT,Xd,cT,pT,ga,hT,Ta,uT,mT,fT,va,_T,Cr,gT,TT,vT,ba,bT,ka,kT,yT,wT,Kn,$T,gt,ya,xT,on,zT,Pr,qT,ET,Qd,jT,FT,MT,Yn,CT,Zn,qc,sn,Jn,el,wa,PT,tl,NT,Ec,le,$a,OT,xa,LT,nl,AT,IT,DT,za,ST,qa,GT,UT,WT,Ea,RT,Nr,BT,HT,VT,ja,KT,Fa,YT,ZT,JT,Xn,XT,Tt,Ma,QT,an,ev,Or,tv,nv,ol,ov,sv,av,Qn,rv,eo,jc,rn,to,sl,Ca,iv,al,dv,Fc,ce,Pa,lv,rl,cv,pv,Na,hv,Oa,uv,mv,fv,La,_v,Lr,gv,Tv,vv,Aa,bv,Ia,kv,yv,wv,no,$v,vt,Da,xv,dn,zv,Ar,qv,Ev,il,jv,Fv,Mv,oo,Cv,so,Mc,ln,ao,dl,Sa,Pv,ll,Nv,Cc,et,Ga,Ov,bt,Ua,Lv,cn,Av,cl,Iv,Dv,pl,Sv,Gv,Uv,ro,Wv,io,Rv,lo,Wa,Bv,co,Hv,po,Ra,Vv,ho,Pc,pn,uo,hl,Ba,Kv,ul,Yv,Nc,tt,Ha,Zv,kt,Va,Jv,hn,Xv,ml,Qv,eb,fl,tb,nb,ob,mo,sb,fo,ab,_o,Ka,rb,go,ib,To,Ya,db,vo,Oc;return d=new ke({}),se=new ke({}),Bo=new ke({}),Ho=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("The <extra_id_0> walks in <extra_id_1> park", return_tensors="pt").input_ids
labels = tokenizer("<extra_id_0> cute dog <extra_id_1> the <extra_id_2>", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),Yo=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
labels = tokenizer("Das Haus ist wunderbar.", return_tensors="pt").input_ids
# the forward function automatically creates the correct decoder_input_ids
loss = model(input_ids=input_ids, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
labels = tokenizer(<span class="hljs-string">&quot;Das Haus ist wunderbar.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-comment"># the forward function automatically creates the correct decoder_input_ids</span>
loss = model(input_ids=input_ids, labels=labels).loss`}}),Jo=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
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

# replace padding token id's of the labels by -100
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -100

# forward pass
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration
<span class="hljs-keyword">import</span> torch

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># the following 2 hyperparameters are task-specific</span>
max_source_length = <span class="hljs-number">512</span>
max_target_length = <span class="hljs-number">128</span>

<span class="hljs-comment"># Suppose we have the following 2 training examples:</span>
input_sequence_1 = <span class="hljs-string">&quot;Welcome to NYC&quot;</span>
output_sequence_1 = <span class="hljs-string">&quot;Bienvenue \xE0 NYC&quot;</span>

input_sequence_2 = <span class="hljs-string">&quot;HuggingFace is a company&quot;</span>
output_sequence_2 = <span class="hljs-string">&quot;HuggingFace est une entreprise&quot;</span>

<span class="hljs-comment"># encode the inputs</span>
task_prefix = <span class="hljs-string">&quot;translate English to French: &quot;</span>
input_sequences = [input_sequence_1, input_sequence_2]
encoding = tokenizer(
    [task_prefix + sequence <span class="hljs-keyword">for</span> sequence <span class="hljs-keyword">in</span> input_sequences],
    padding=<span class="hljs-string">&quot;longest&quot;</span>,
    max_length=max_source_length,
    truncation=<span class="hljs-literal">True</span>,
    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
)
input_ids, attention_mask = encoding.input_ids, encoding.attention_mask

<span class="hljs-comment"># encode the targets</span>
target_encoding = tokenizer(
    [output_sequence_1, output_sequence_2], padding=<span class="hljs-string">&quot;longest&quot;</span>, max_length=max_target_length, truncation=<span class="hljs-literal">True</span>
)
labels = target_encoding.input_ids

<span class="hljs-comment"># replace padding token id&#x27;s of the labels by -100</span>
labels = torch.tensor(labels)
labels[labels == tokenizer.pad_token_id] = -<span class="hljs-number">100</span>

<span class="hljs-comment"># forward pass</span>
loss = model(input_ids=input_ids, attention_mask=attention_mask, labels=labels).loss`}}),ns=new ke({}),as=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

input_ids = tokenizer("translate English to German: The house is wonderful.", return_tensors="pt").input_ids
outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
# Das Haus ist wunderbar.`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

input_ids = tokenizer(<span class="hljs-string">&quot;translate English to German: The house is wonderful.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
outputs = model.generate(input_ids)
<span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-comment"># Das Haus ist wunderbar.</span>`}}),rs=new B({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = T5ForConditionalGeneration.from_pretrained("t5-small")

# when generating, we will use the logits of right-most token to predict the next token
# so the padding should be on the left
tokenizer.padding_side = "left"
tokenizer.pad_token = tokenizer.eos_token  # to avoid an error

task_prefix = "translate English to German: "
sentences = ["The house is wonderful.", "I like to work in NYC."]  # use different length sentences to test batching
inputs = tokenizer([task_prefix + sentence for sentence in sentences], return_tensors="pt", padding=True)

output_sequences = model.generate(
    input_ids=inputs["input_ids"],
    attention_mask=inputs["attention_mask"],
    do_sample=False,  # disable sampling to test if batching affects output
)

print(tokenizer.batch_decode(output_sequences, skip_special_tokens=True))

# ['Das Haus ist wunderbar.', 'Ich arbeite gerne in NYC.']`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, T5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># when generating, we will use the logits of right-most token to predict the next token</span>
<span class="hljs-comment"># so the padding should be on the left</span>
tokenizer.padding_side = <span class="hljs-string">&quot;left&quot;</span>
tokenizer.pad_token = tokenizer.eos_token  <span class="hljs-comment"># to avoid an error</span>

task_prefix = <span class="hljs-string">&quot;translate English to German: &quot;</span>
sentences = [<span class="hljs-string">&quot;The house is wonderful.&quot;</span>, <span class="hljs-string">&quot;I like to work in NYC.&quot;</span>]  <span class="hljs-comment"># use different length sentences to test batching</span>
inputs = tokenizer([task_prefix + sentence <span class="hljs-keyword">for</span> sentence <span class="hljs-keyword">in</span> sentences], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

output_sequences = model.generate(
    input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>],
    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
    do_sample=<span class="hljs-literal">False</span>,  <span class="hljs-comment"># disable sampling to test if batching affects output</span>
)

<span class="hljs-built_in">print</span>(tokenizer.batch_decode(output_sequences, skip_special_tokens=<span class="hljs-literal">True</span>))

<span class="hljs-comment"># [&#x27;Das Haus ist wunderbar.&#x27;, &#x27;Ich arbeite gerne in NYC.&#x27;]</span>`}}),is=new ke({}),ls=new ke({}),gs=new ke({}),Ts=new C({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.T5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/configuration_t5.py#L34"}}),bs=new ke({}),ks=new C({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/tokenization_t5.py#L53"}}),xs=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/tokenization_t5.py#L223",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),qs=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/tokenization_t5.py#L163",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),js=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/tokenization_t5.py#L201",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fs=new C({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/tokenization_t5.py#L298"}}),Ms=new ke({}),Cs=new C({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/tokenization_t5_fast.py#L62"}}),Os=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/tokenization_t5_fast.py#L165",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),As=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/tokenization_t5_fast.py#L191",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Is=new ke({}),Ds=new C({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1267"}}),Bs=new C({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1343",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pn=new zt({props:{$$slots:{default:[n5]},$$scope:{ctx:q}}}),Nn=new me({props:{anchor:"transformers.T5Model.forward.example",$$slots:{default:[o5]},$$scope:{ctx:q}}}),Hs=new C({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1299"}}),On=new me({props:{anchor:"transformers.T5Model.parallelize.example",$$slots:{default:[s5]},$$scope:{ctx:q}}}),Vs=new C({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1311"}}),Ln=new me({props:{anchor:"transformers.T5Model.deparallelize.example",$$slots:{default:[a5]},$$scope:{ctx:q}}}),Ks=new ke({}),Ys=new C({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1456"}}),na=new C({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.T5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1537",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new zt({props:{$$slots:{default:[r5]},$$scope:{ctx:q}}}),Dn=new me({props:{anchor:"transformers.T5ForConditionalGeneration.forward.example",$$slots:{default:[i5]},$$scope:{ctx:q}}}),oa=new C({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1493"}}),Sn=new me({props:{anchor:"transformers.T5ForConditionalGeneration.parallelize.example",$$slots:{default:[d5]},$$scope:{ctx:q}}}),sa=new C({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1506"}}),Gn=new me({props:{anchor:"transformers.T5ForConditionalGeneration.deparallelize.example",$$slots:{default:[l5]},$$scope:{ctx:q}}}),aa=new ke({}),ra=new C({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1750"}}),ha=new C({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1808",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wn=new zt({props:{$$slots:{default:[c5]},$$scope:{ctx:q}}}),Rn=new me({props:{anchor:"transformers.T5EncoderModel.forward.example",$$slots:{default:[p5]},$$scope:{ctx:q}}}),ua=new C({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1771"}}),Bn=new me({props:{anchor:"transformers.T5EncoderModel.parallelize.example",$$slots:{default:[h5]},$$scope:{ctx:q}}}),ma=new C({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_t5.py#L1782"}}),Hn=new me({props:{anchor:"transformers.T5EncoderModel.deparallelize.example",$$slots:{default:[u5]},$$scope:{ctx:q}}}),fa=new ke({}),_a=new C({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_tf_t5.py#L1108"}}),Kn=new zt({props:{$$slots:{default:[m5]},$$scope:{ctx:q}}}),ya=new C({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_tf_t5.py#L1134",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yn=new zt({props:{$$slots:{default:[f5]},$$scope:{ctx:q}}}),Zn=new me({props:{anchor:"transformers.TFT5Model.call.example",$$slots:{default:[_5]},$$scope:{ctx:q}}}),wa=new ke({}),$a=new C({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_tf_t5.py#L1254"}}),Xn=new zt({props:{$$slots:{default:[g5]},$$scope:{ctx:q}}}),Ma=new C({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFT5ForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFT5ForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_tf_t5.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new zt({props:{$$slots:{default:[T5]},$$scope:{ctx:q}}}),eo=new me({props:{anchor:"transformers.TFT5ForConditionalGeneration.call.example",$$slots:{default:[v5]},$$scope:{ctx:q}}}),Ca=new ke({}),Pa=new C({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_tf_t5.py#L1596"}}),no=new zt({props:{$$slots:{default:[b5]},$$scope:{ctx:q}}}),Da=new C({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFT5EncoderModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_tf_t5.py#L1618",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),oo=new zt({props:{$$slots:{default:[k5]},$$scope:{ctx:q}}}),so=new me({props:{anchor:"transformers.TFT5EncoderModel.call.example",$$slots:{default:[y5]},$$scope:{ctx:q}}}),Sa=new ke({}),Ga=new C({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_flax_t5.py#L1314"}}),Ua=new C({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_flax_t5.py#L946",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new zt({props:{$$slots:{default:[w5]},$$scope:{ctx:q}}}),io=new me({props:{anchor:"transformers.FlaxT5Model.__call__.example",$$slots:{default:[$5]},$$scope:{ctx:q}}}),Wa=new C({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_flax_t5.py#L1031",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new me({props:{anchor:"transformers.FlaxT5Model.encode.example",$$slots:{default:[x5]},$$scope:{ctx:q}}}),Ra=new C({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_flax_t5.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new me({props:{anchor:"transformers.FlaxT5Model.decode.example",$$slots:{default:[z5]},$$scope:{ctx:q}}}),Ba=new ke({}),Ha=new C({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_flax_t5.py#L1454"}}),Va=new C({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_flax_t5.py#L946",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Config"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new zt({props:{$$slots:{default:[q5]},$$scope:{ctx:q}}}),fo=new me({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.example",$$slots:{default:[E5]},$$scope:{ctx:q}}}),Ka=new C({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_flax_t5.py#L1031",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new me({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.example",$$slots:{default:[j5]},$$scope:{ctx:q}}}),Ya=new C({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/t5/modeling_flax_t5.py#L1457",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new me({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.example",$$slots:{default:[F5]},$$scope:{ctx:q}}}),{c(){p=o("meta"),v=l(),g=o("h1"),u=o("a"),T=o("span"),b(d.$$.fragment),m=l(),E=o("span"),je=r("T5"),oe=l(),j=o("h2"),ee=o("a"),S=o("span"),b(se.$$.fragment),Fe=l(),G=o("span"),Me=r("Overview"),ye=l(),U=o("p"),A=r("The T5 model was presented in "),ae=o("a"),pe=r("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),M=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),N=l(),he=o("p"),K=r("The abstract from the paper is the following:"),we=l(),ue=o("p"),W=o("em"),Ce=r(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),$e=l(),P=o("p"),Pe=r("Tips:"),H=l(),V=o("ul"),_e=o("li"),O=o("p"),Ne=r(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ge=o("em"),I=r("translate English to German: \u2026"),Oe=r(`,
for summarization: `),R=o("em"),Le=r("summarize: \u2026"),z=r("."),F=l(),te=o("li"),Ue=o("p"),ot=r("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),D=l(),We=o("li"),ne=o("p"),st=r("See the "),L=o("a"),Y=r("training"),at=r(", "),Ae=o("a"),Z=r("inference"),rt=r(" and "),Ie=o("a"),De=r("scripts"),it=r(" sections below for all details regarding usage."),Gl=l(),Qa=o("p"),Ap=r("T5 comes in different sizes:"),Ul=l(),Re=o("ul"),ri=o("li"),ii=o("p"),Ao=o("a"),Ip=r("t5-small"),Dp=l(),di=o("li"),li=o("p"),Io=o("a"),Sp=r("t5-base"),Gp=l(),ci=o("li"),pi=o("p"),Do=o("a"),Up=r("t5-large"),Wp=l(),hi=o("li"),ui=o("p"),So=o("a"),Rp=r("t5-3b"),Bp=l(),mi=o("li"),er=o("p"),Go=o("a"),Hp=r("t5-11b"),Vp=r("."),Wl=l(),tr=o("p"),Kp=r("Based on the original T5 model, Google has released some follow-up works:"),Rl=l(),qt=o("ul"),fi=o("li"),fn=o("p"),_i=o("strong"),Yp=r("T5v1.1"),Zp=r(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),nr=o("a"),Jp=r("here"),Xp=r("."),Qp=l(),gi=o("li"),_n=o("p"),Ti=o("strong"),eh=r("mT5"),th=r(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),or=o("a"),nh=r("here"),oh=r("."),sh=l(),vi=o("li"),gn=o("p"),bi=o("strong"),ah=r("byT5"),rh=r(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),sr=o("a"),ih=r("here"),dh=r("."),Bl=l(),Tn=o("p"),lh=r("All checkpoints can be found on the "),Uo=o("a"),ch=r("hub"),ph=r("."),Hl=l(),Et=o("p"),hh=r("This model was contributed by "),Wo=o("a"),uh=r("thomwolf"),mh=r(". The original code can be found "),Ro=o("a"),fh=r("here"),_h=r("."),Vl=l(),ar=o("a"),Kl=l(),It=o("h2"),vn=o("a"),ki=o("span"),b(Bo.$$.fragment),gh=l(),yi=o("span"),Th=r("Training"),Yl=l(),dt=o("p"),vh=r(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),wi=o("code"),bh=r("input_ids"),kh=r(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),$i=o("code"),yh=r("decoder_input_ids"),wh=r(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),xi=o("code"),$h=r("labels"),xh=r(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Zl=l(),bn=o("p"),zh=r("One can use "),rr=o("a"),qh=r("T5ForConditionalGeneration"),Eh=r(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Jl=l(),kn=o("ul"),Qe=o("li"),zi=o("p"),jh=r("Unsupervised denoising training"),Fh=l(),Te=o("p"),Mh=r("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),qi=o("em"),Ch=r("a.k.a"),Ph=r(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Ei=o("em"),Nh=r("real"),Oh=r(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),ji=o("code"),Lh=r("<extra_id_0>"),Ah=r(`,
`),Fi=o("code"),Ih=r("<extra_id_1>"),Dh=r(", \u2026 up to "),Mi=o("code"),Sh=r("<extra_id_99>"),Gh=r(`. As a default, 100 sentinel tokens are available in
`),ir=o("a"),Uh=r("T5Tokenizer"),Wh=r("."),Rh=l(),Ci=o("p"),Bh=r(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Hh=l(),b(Ho.$$.fragment),Vh=l(),Vo=o("p"),Kh=r("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Ko=o("a"),Yh=r("run_t5_mlm_flax.py"),Zh=r(` script in the Examples
directory.`),Jh=l(),ve=o("li"),Pi=o("p"),Xh=r("Supervised training"),Qh=l(),Ni=o("p"),eu=r(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),tu=l(),b(Yo.$$.fragment),nu=l(),re=o("p"),ou=r("As you can see, only 2 inputs are required for the model in order to compute a loss: "),Oi=o("code"),su=r("input_ids"),au=r(` (which are the
`),Li=o("code"),ru=r("input_ids"),iu=r(" of the encoded input sequence) and "),Ai=o("code"),du=r("labels"),lu=r(" (which are the "),Ii=o("code"),cu=r("input_ids"),pu=r(` of the encoded
target sequence). The model will automatically create the `),Di=o("code"),hu=r("decoder_input_ids"),uu=r(" based on the "),Si=o("code"),mu=r("labels"),fu=r(`, by
shifting them one position to the right and prepending the `),Gi=o("code"),_u=r("config.decoder_start_token_id"),gu=r(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),Tu=l(),Dt=o("p"),vu=r(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ui=o("code"),bu=r("max_source_length"),ku=r(" and "),Wi=o("code"),yu=r("max_target_length"),wu=r(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),$u=l(),be=o("p"),xu=r("In addition, we must make sure that padding token id\u2019s of the "),Ri=o("code"),zu=r("labels"),qu=r(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Bi=o("code"),Eu=r("ignore_index"),ju=r(`
of the `),Hi=o("code"),Fu=r("CrossEntropyLoss"),Mu=r(". In Flax, one can use the "),Vi=o("code"),Cu=r("decoder_attention_mask"),Pu=r(` to ignore padded tokens from
the loss (see the `),Zo=o("a"),Nu=r("Flax summarization script"),Ou=r(` for details). We also pass
`),Ki=o("code"),Lu=r("attention_mask"),Au=r(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Iu=l(),b(Jo.$$.fragment),Xl=l(),dr=o("p"),Du=r("Additional training tips:"),Ql=l(),jt=o("ul"),Yi=o("li"),Xo=o("p"),Su=r("T5 models need a slightly higher learning rate than the default one set in the "),Zi=o("code"),Gu=r("Trainer"),Uu=r(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Wu=l(),Ji=o("li"),St=o("p"),Ru=r("According to "),Qo=o("a"),Bu=r("this forum post"),Hu=r(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),es=o("a"),Vu=r("paper"),Ku=r(` for the task prefixes
used).`),Yu=l(),Xi=o("li"),ts=o("p"),Zu=r(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Qi=o("em"),Ju=r("pad_to_multiple_of"),Xu=r(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),ec=l(),lr=o("a"),tc=l(),Gt=o("h2"),yn=o("a"),ed=o("span"),b(ns.$$.fragment),Qu=l(),td=o("span"),em=r("Inference"),nc=l(),lt=o("p"),tm=r("At inference time, it is recommended to use "),cr=o("a"),nm=r("generate()"),om=r(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),os=o("a"),sm=r("this blog post"),am=r(` to know all the details about generating text with Transformers.
There\u2019s also `),ss=o("a"),rm=r("this blog post"),im=r(` which explains how
generation works in general in encoder-decoder models.`),oc=l(),b(as.$$.fragment),sc=l(),Be=o("p"),dm=r("Note that T5 uses the "),nd=o("code"),lm=r("pad_token_id"),cm=r(" as the "),od=o("code"),pm=r("decoder_start_token_id"),hm=r(`, so when doing generation without using
`),pr=o("a"),um=r("generate()"),mm=r(", make sure you start it with the "),sd=o("code"),fm=r("pad_token_id"),_m=r("."),ac=l(),hr=o("p"),gm=r("The example above only shows a single example. You can also do batched inference, like so:"),rc=l(),b(rs.$$.fragment),ic=l(),ur=o("a"),dc=l(),Ut=o("h2"),wn=o("a"),ad=o("span"),b(is.$$.fragment),Tm=l(),rd=o("span"),vm=r("Performance"),lc=l(),ct=o("p"),bm=r("If you\u2019d like a faster training and inference performance, install "),ds=o("a"),km=r("apex"),ym=r(" and then the model will automatically use "),id=o("code"),wm=r("apex.normalization.FusedRMSNorm"),$m=r(" instead of "),dd=o("code"),xm=r("T5LayerNorm"),zm=r(". The former uses an optimized fused kernel which is several times faster than the latter."),cc=l(),Wt=o("h2"),$n=o("a"),ld=o("span"),b(ls.$$.fragment),qm=l(),cd=o("span"),Em=r("Example scripts"),pc=l(),mr=o("p"),jm=r("T5 is supported by several example scripts, both for pre-training and fine-tuning."),hc=l(),xn=o("ul"),pd=o("li"),Rt=o("p"),Fm=r("pre-training: the "),cs=o("a"),Mm=r("run_t5_mlm_flax.py"),Cm=r(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),ps=o("a"),Pm=r("t5_tokenizer_model.py"),Nm=r(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Om=l(),hd=o("li"),Se=o("p"),Lm=r("fine-tuning: T5 is supported by the official summarization scripts ("),hs=o("a"),Am=r("PyTorch"),Im=r(", "),us=o("a"),Dm=r("Tensorflow"),Sm=r(", and "),ms=o("a"),Gm=r("Flax"),Um=r(`) and translation scripts
(`),fs=o("a"),Wm=r("PyTorch"),Rm=r(" and "),_s=o("a"),Bm=r("Tensorflow"),Hm=r(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),uc=l(),Bt=o("h2"),zn=o("a"),ud=o("span"),b(gs.$$.fragment),Vm=l(),md=o("span"),Km=r("T5Config"),mc=l(),wt=o("div"),b(Ts.$$.fragment),Ym=l(),$t=o("p"),Zm=r("This is the configuration class to store the configuration of a "),fr=o("a"),Jm=r("T5Model"),Xm=r(" or a "),_r=o("a"),Qm=r("TFT5Model"),ef=r(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),vs=o("a"),tf=r("t5-small"),nf=r(" architecture."),of=l(),Ht=o("p"),sf=r("Configuration objects inherit from "),gr=o("a"),af=r("PretrainedConfig"),rf=r(` and can be used to control the model outputs. Read the
documentation from `),Tr=o("a"),df=r("PretrainedConfig"),lf=r(" for more information."),fc=l(),Vt=o("h2"),qn=o("a"),fd=o("span"),b(bs.$$.fragment),cf=l(),_d=o("span"),pf=r("T5Tokenizer"),_c=l(),ie=o("div"),b(ks.$$.fragment),hf=l(),ys=o("p"),uf=r("Construct a T5 tokenizer. Based on "),ws=o("a"),mf=r("SentencePiece"),ff=r("."),_f=l(),$s=o("p"),gf=r("This tokenizer inherits from "),vr=o("a"),Tf=r("PreTrainedTokenizer"),vf=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),bf=l(),Ft=o("div"),b(xs.$$.fragment),kf=l(),gd=o("p"),yf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),wf=l(),zs=o("ul"),br=o("li"),$f=r("single sequence: "),Td=o("code"),xf=r("X </s>"),zf=l(),kr=o("li"),qf=r("pair of sequences: "),vd=o("code"),Ef=r("A </s> B </s>"),jf=l(),En=o("div"),b(qs.$$.fragment),Ff=l(),Es=o("p"),Mf=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),bd=o("code"),Cf=r("prepare_for_model"),Pf=r(" method."),Nf=l(),jn=o("div"),b(js.$$.fragment),Of=l(),kd=o("p"),Lf=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Af=l(),yr=o("div"),b(Fs.$$.fragment),gc=l(),Kt=o("h2"),Fn=o("a"),yd=o("span"),b(Ms.$$.fragment),If=l(),wd=o("span"),Df=r("T5TokenizerFast"),Tc=l(),Ge=o("div"),b(Cs.$$.fragment),Sf=l(),Yt=o("p"),Gf=r("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),$d=o("em"),Uf=r("tokenizers"),Wf=r(` library). Based on
`),Ps=o("a"),Rf=r("Unigram"),Bf=r("."),Hf=l(),Ns=o("p"),Vf=r("This tokenizer inherits from "),wr=o("a"),Kf=r("PreTrainedTokenizerFast"),Yf=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Zf=l(),Mt=o("div"),b(Os.$$.fragment),Jf=l(),xd=o("p"),Xf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Qf=l(),Ls=o("ul"),$r=o("li"),e_=r("single sequence: "),zd=o("code"),t_=r("X </s>"),n_=l(),xr=o("li"),o_=r("pair of sequences: "),qd=o("code"),s_=r("A </s> B </s>"),a_=l(),Mn=o("div"),b(As.$$.fragment),r_=l(),Ed=o("p"),i_=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),vc=l(),Zt=o("h2"),Cn=o("a"),jd=o("span"),b(Is.$$.fragment),d_=l(),Fd=o("span"),l_=r("T5Model"),bc=l(),J=o("div"),b(Ds.$$.fragment),c_=l(),Md=o("p"),p_=r("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),h_=l(),Ss=o("p"),u_=r("The T5 model was proposed in "),Gs=o("a"),m_=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),f_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),__=l(),Us=o("p"),g_=r("This model inherits from "),zr=o("a"),T_=r("PreTrainedModel"),v_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),b_=l(),Ws=o("p"),k_=r("This model is also a PyTorch "),Rs=o("a"),y_=r("torch.nn.Module"),w_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$_=l(),pt=o("div"),b(Bs.$$.fragment),x_=l(),Jt=o("p"),z_=r("The "),qr=o("a"),q_=r("T5Model"),E_=r(" forward method, overrides the "),Cd=o("code"),j_=r("__call__"),F_=r(" special method."),M_=l(),b(Pn.$$.fragment),C_=l(),b(Nn.$$.fragment),P_=l(),ht=o("div"),b(Hs.$$.fragment),N_=l(),Pd=o("p"),O_=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),L_=l(),Nd=o("p"),A_=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),I_=l(),b(On.$$.fragment),D_=l(),Ct=o("div"),b(Vs.$$.fragment),S_=l(),Od=o("p"),G_=r("Moves the model to cpu from a model parallel state."),U_=l(),b(Ln.$$.fragment),kc=l(),Xt=o("h2"),An=o("a"),Ld=o("span"),b(Ks.$$.fragment),W_=l(),Ad=o("span"),R_=r("T5ForConditionalGeneration"),yc=l(),X=o("div"),b(Ys.$$.fragment),B_=l(),Zs=o("p"),H_=r("T5 Model with a "),Id=o("code"),V_=r("language modeling"),K_=r(" head on top."),Y_=l(),Js=o("p"),Z_=r("The T5 model was proposed in "),Xs=o("a"),J_=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),X_=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Q_=l(),Qs=o("p"),eg=r("This model inherits from "),Er=o("a"),tg=r("PreTrainedModel"),ng=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),og=l(),ea=o("p"),sg=r("This model is also a PyTorch "),ta=o("a"),ag=r("torch.nn.Module"),rg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ig=l(),ut=o("div"),b(na.$$.fragment),dg=l(),Qt=o("p"),lg=r("The "),jr=o("a"),cg=r("T5ForConditionalGeneration"),pg=r(" forward method, overrides the "),Dd=o("code"),hg=r("__call__"),ug=r(" special method."),mg=l(),b(In.$$.fragment),fg=l(),b(Dn.$$.fragment),_g=l(),mt=o("div"),b(oa.$$.fragment),gg=l(),Sd=o("p"),Tg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),vg=l(),Gd=o("p"),bg=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),kg=l(),b(Sn.$$.fragment),yg=l(),Pt=o("div"),b(sa.$$.fragment),wg=l(),Ud=o("p"),$g=r("Moves the model to cpu from a model parallel state."),xg=l(),b(Gn.$$.fragment),wc=l(),en=o("h2"),Un=o("a"),Wd=o("span"),b(aa.$$.fragment),zg=l(),Rd=o("span"),qg=r("T5EncoderModel"),$c=l(),Q=o("div"),b(ra.$$.fragment),Eg=l(),Bd=o("p"),jg=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Fg=l(),ia=o("p"),Mg=r("The T5 model was proposed in "),da=o("a"),Cg=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Pg=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Ng=l(),la=o("p"),Og=r("This model inherits from "),Fr=o("a"),Lg=r("PreTrainedModel"),Ag=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ig=l(),ca=o("p"),Dg=r("This model is also a PyTorch "),pa=o("a"),Sg=r("torch.nn.Module"),Gg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ug=l(),ft=o("div"),b(ha.$$.fragment),Wg=l(),tn=o("p"),Rg=r("The "),Mr=o("a"),Bg=r("T5EncoderModel"),Hg=r(" forward method, overrides the "),Hd=o("code"),Vg=r("__call__"),Kg=r(" special method."),Yg=l(),b(Wn.$$.fragment),Zg=l(),b(Rn.$$.fragment),Jg=l(),_t=o("div"),b(ua.$$.fragment),Xg=l(),Vd=o("p"),Qg=r("This is an experimental feature and is a subject to change at a moment\u2019s notice."),eT=l(),Kd=o("p"),tT=r(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),nT=l(),b(Bn.$$.fragment),oT=l(),Nt=o("div"),b(ma.$$.fragment),sT=l(),Yd=o("p"),aT=r("Moves the model to cpu from a model parallel state."),rT=l(),b(Hn.$$.fragment),xc=l(),nn=o("h2"),Vn=o("a"),Zd=o("span"),b(fa.$$.fragment),iT=l(),Jd=o("span"),dT=r("TFT5Model"),zc=l(),de=o("div"),b(_a.$$.fragment),lT=l(),Xd=o("p"),cT=r("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),pT=l(),ga=o("p"),hT=r("The T5 model was proposed in "),Ta=o("a"),uT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),mT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),fT=l(),va=o("p"),_T=r("This model inherits from "),Cr=o("a"),gT=r("TFPreTrainedModel"),TT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vT=l(),ba=o("p"),bT=r("This model is also a "),ka=o("a"),kT=r("tf.keras.Model"),yT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wT=l(),b(Kn.$$.fragment),$T=l(),gt=o("div"),b(ya.$$.fragment),xT=l(),on=o("p"),zT=r("The "),Pr=o("a"),qT=r("TFT5Model"),ET=r(" forward method, overrides the "),Qd=o("code"),jT=r("__call__"),FT=r(" special method."),MT=l(),b(Yn.$$.fragment),CT=l(),b(Zn.$$.fragment),qc=l(),sn=o("h2"),Jn=o("a"),el=o("span"),b(wa.$$.fragment),PT=l(),tl=o("span"),NT=r("TFT5ForConditionalGeneration"),Ec=l(),le=o("div"),b($a.$$.fragment),OT=l(),xa=o("p"),LT=r("T5 Model with a "),nl=o("code"),AT=r("language modeling"),IT=r(" head on top."),DT=l(),za=o("p"),ST=r("The T5 model was proposed in "),qa=o("a"),GT=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),UT=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),WT=l(),Ea=o("p"),RT=r("This model inherits from "),Nr=o("a"),BT=r("TFPreTrainedModel"),HT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),VT=l(),ja=o("p"),KT=r("This model is also a "),Fa=o("a"),YT=r("tf.keras.Model"),ZT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),JT=l(),b(Xn.$$.fragment),XT=l(),Tt=o("div"),b(Ma.$$.fragment),QT=l(),an=o("p"),ev=r("The "),Or=o("a"),tv=r("TFT5ForConditionalGeneration"),nv=r(" forward method, overrides the "),ol=o("code"),ov=r("__call__"),sv=r(" special method."),av=l(),b(Qn.$$.fragment),rv=l(),b(eo.$$.fragment),jc=l(),rn=o("h2"),to=o("a"),sl=o("span"),b(Ca.$$.fragment),iv=l(),al=o("span"),dv=r("TFT5EncoderModel"),Fc=l(),ce=o("div"),b(Pa.$$.fragment),lv=l(),rl=o("p"),cv=r("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),pv=l(),Na=o("p"),hv=r("The T5 model was proposed in "),Oa=o("a"),uv=r(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),mv=r(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),fv=l(),La=o("p"),_v=r("This model inherits from "),Lr=o("a"),gv=r("TFPreTrainedModel"),Tv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv=l(),Aa=o("p"),bv=r("This model is also a "),Ia=o("a"),kv=r("tf.keras.Model"),yv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wv=l(),b(no.$$.fragment),$v=l(),vt=o("div"),b(Da.$$.fragment),xv=l(),dn=o("p"),zv=r("The "),Ar=o("a"),qv=r("TFT5EncoderModel"),Ev=r(" forward method, overrides the "),il=o("code"),jv=r("__call__"),Fv=r(" special method."),Mv=l(),b(oo.$$.fragment),Cv=l(),b(so.$$.fragment),Mc=l(),ln=o("h2"),ao=o("a"),dl=o("span"),b(Sa.$$.fragment),Pv=l(),ll=o("span"),Nv=r("FlaxT5Model"),Cc=l(),et=o("div"),b(Ga.$$.fragment),Ov=l(),bt=o("div"),b(Ua.$$.fragment),Lv=l(),cn=o("p"),Av=r("The "),cl=o("code"),Iv=r("FlaxT5PreTrainedModel"),Dv=r(" forward method, overrides the "),pl=o("code"),Sv=r("__call__"),Gv=r(" special method."),Uv=l(),b(ro.$$.fragment),Wv=l(),b(io.$$.fragment),Rv=l(),lo=o("div"),b(Wa.$$.fragment),Bv=l(),b(co.$$.fragment),Hv=l(),po=o("div"),b(Ra.$$.fragment),Vv=l(),b(ho.$$.fragment),Pc=l(),pn=o("h2"),uo=o("a"),hl=o("span"),b(Ba.$$.fragment),Kv=l(),ul=o("span"),Yv=r("FlaxT5ForConditionalGeneration"),Nc=l(),tt=o("div"),b(Ha.$$.fragment),Zv=l(),kt=o("div"),b(Va.$$.fragment),Jv=l(),hn=o("p"),Xv=r("The "),ml=o("code"),Qv=r("FlaxT5PreTrainedModel"),eb=r(" forward method, overrides the "),fl=o("code"),tb=r("__call__"),nb=r(" special method."),ob=l(),b(mo.$$.fragment),sb=l(),b(fo.$$.fragment),ab=l(),_o=o("div"),b(Ka.$$.fragment),rb=l(),b(go.$$.fragment),ib=l(),To=o("div"),b(Ya.$$.fragment),db=l(),b(vo.$$.fragment),this.h()},l(n){const _=e5('[data-svelte="svelte-1phssyn"]',document.head);p=s(_,"META",{name:!0,content:!0}),_.forEach(t),v=c(n),g=s(n,"H1",{class:!0});var Za=a(g);u=s(Za,"A",{id:!0,class:!0,href:!0});var _l=a(u);T=s(_l,"SPAN",{});var gl=a(T);k(d.$$.fragment,gl),gl.forEach(t),_l.forEach(t),m=c(Za),E=s(Za,"SPAN",{});var Tl=a(E);je=i(Tl,"T5"),Tl.forEach(t),Za.forEach(t),oe=c(n),j=s(n,"H2",{class:!0});var Ja=a(j);ee=s(Ja,"A",{id:!0,class:!0,href:!0});var vl=a(ee);S=s(vl,"SPAN",{});var bl=a(S);k(se.$$.fragment,bl),bl.forEach(t),vl.forEach(t),Fe=c(Ja),G=s(Ja,"SPAN",{});var kl=a(G);Me=i(kl,"Overview"),kl.forEach(t),Ja.forEach(t),ye=c(n),U=s(n,"P",{});var Xa=a(U);A=i(Xa,"The T5 model was presented in "),ae=s(Xa,"A",{href:!0,rel:!0});var yl=a(ae);pe=i(yl,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),yl.forEach(t),M=i(Xa,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Xa.forEach(t),N=c(n),he=s(n,"P",{});var wl=a(he);K=i(wl,"The abstract from the paper is the following:"),wl.forEach(t),we=c(n),ue=s(n,"P",{});var $l=a(ue);W=s($l,"EM",{});var xl=a(W);Ce=i(xl,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),xl.forEach(t),$l.forEach(t),$e=c(n),P=s(n,"P",{});var zl=a(P);Pe=i(zl,"Tips:"),zl.forEach(t),H=c(n),V=s(n,"UL",{});var un=a(V);_e=s(un,"LI",{});var ql=a(_e);O=s(ql,"P",{});var mn=a(O);Ne=i(mn,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),ge=s(mn,"EM",{});var El=a(ge);I=i(El,"translate English to German: \u2026"),El.forEach(t),Oe=i(mn,`,
for summarization: `),R=s(mn,"EM",{});var jl=a(R);Le=i(jl,"summarize: \u2026"),jl.forEach(t),z=i(mn,"."),mn.forEach(t),ql.forEach(t),F=c(un),te=s(un,"LI",{});var Fl=a(te);Ue=s(Fl,"P",{});var Ml=a(Ue);ot=i(Ml,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Ml.forEach(t),Fl.forEach(t),D=c(un),We=s(un,"LI",{});var Cl=a(We);ne=s(Cl,"P",{});var xt=a(ne);st=i(xt,"See the "),L=s(xt,"A",{href:!0});var Pl=a(L);Y=i(Pl,"training"),Pl.forEach(t),at=i(xt,", "),Ae=s(xt,"A",{href:!0});var Nl=a(Ae);Z=i(Nl,"inference"),Nl.forEach(t),rt=i(xt," and "),Ie=s(xt,"A",{href:!0});var Ol=a(Ie);De=i(Ol,"scripts"),Ol.forEach(t),it=i(xt," sections below for all details regarding usage."),xt.forEach(t),Cl.forEach(t),un.forEach(t),Gl=c(n),Qa=s(n,"P",{});var Ll=a(Qa);Ap=i(Ll,"T5 comes in different sizes:"),Ll.forEach(t),Ul=c(n),Re=s(n,"UL",{});var nt=a(Re);ri=s(nt,"LI",{});var Al=a(ri);ii=s(Al,"P",{});var mb=a(ii);Ao=s(mb,"A",{href:!0,rel:!0});var fb=a(Ao);Ip=i(fb,"t5-small"),fb.forEach(t),mb.forEach(t),Al.forEach(t),Dp=c(nt),di=s(nt,"LI",{});var _b=a(di);li=s(_b,"P",{});var gb=a(li);Io=s(gb,"A",{href:!0,rel:!0});var Tb=a(Io);Sp=i(Tb,"t5-base"),Tb.forEach(t),gb.forEach(t),_b.forEach(t),Gp=c(nt),ci=s(nt,"LI",{});var vb=a(ci);pi=s(vb,"P",{});var bb=a(pi);Do=s(bb,"A",{href:!0,rel:!0});var kb=a(Do);Up=i(kb,"t5-large"),kb.forEach(t),bb.forEach(t),vb.forEach(t),Wp=c(nt),hi=s(nt,"LI",{});var yb=a(hi);ui=s(yb,"P",{});var wb=a(ui);So=s(wb,"A",{href:!0,rel:!0});var $b=a(So);Rp=i($b,"t5-3b"),$b.forEach(t),wb.forEach(t),yb.forEach(t),Bp=c(nt),mi=s(nt,"LI",{});var xb=a(mi);er=s(xb,"P",{});var lb=a(er);Go=s(lb,"A",{href:!0,rel:!0});var zb=a(Go);Hp=i(zb,"t5-11b"),zb.forEach(t),Vp=i(lb,"."),lb.forEach(t),xb.forEach(t),nt.forEach(t),Wl=c(n),tr=s(n,"P",{});var qb=a(tr);Kp=i(qb,"Based on the original T5 model, Google has released some follow-up works:"),qb.forEach(t),Rl=c(n),qt=s(n,"UL",{});var Ir=a(qt);fi=s(Ir,"LI",{});var Eb=a(fi);fn=s(Eb,"P",{});var Il=a(fn);_i=s(Il,"STRONG",{});var jb=a(_i);Yp=i(jb,"T5v1.1"),jb.forEach(t),Zp=i(Il,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),nr=s(Il,"A",{href:!0});var Fb=a(nr);Jp=i(Fb,"here"),Fb.forEach(t),Xp=i(Il,"."),Il.forEach(t),Eb.forEach(t),Qp=c(Ir),gi=s(Ir,"LI",{});var Mb=a(gi);_n=s(Mb,"P",{});var Dl=a(_n);Ti=s(Dl,"STRONG",{});var Cb=a(Ti);eh=i(Cb,"mT5"),Cb.forEach(t),th=i(Dl,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),or=s(Dl,"A",{href:!0});var Pb=a(or);nh=i(Pb,"here"),Pb.forEach(t),oh=i(Dl,"."),Dl.forEach(t),Mb.forEach(t),sh=c(Ir),vi=s(Ir,"LI",{});var Nb=a(vi);gn=s(Nb,"P",{});var Sl=a(gn);bi=s(Sl,"STRONG",{});var Ob=a(bi);ah=i(Ob,"byT5"),Ob.forEach(t),rh=i(Sl,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),sr=s(Sl,"A",{href:!0});var Lb=a(sr);ih=i(Lb,"here"),Lb.forEach(t),dh=i(Sl,"."),Sl.forEach(t),Nb.forEach(t),Ir.forEach(t),Bl=c(n),Tn=s(n,"P",{});var Lc=a(Tn);lh=i(Lc,"All checkpoints can be found on the "),Uo=s(Lc,"A",{href:!0,rel:!0});var Ab=a(Uo);ch=i(Ab,"hub"),Ab.forEach(t),ph=i(Lc,"."),Lc.forEach(t),Hl=c(n),Et=s(n,"P",{});var Dr=a(Et);hh=i(Dr,"This model was contributed by "),Wo=s(Dr,"A",{href:!0,rel:!0});var Ib=a(Wo);uh=i(Ib,"thomwolf"),Ib.forEach(t),mh=i(Dr,". The original code can be found "),Ro=s(Dr,"A",{href:!0,rel:!0});var Db=a(Ro);fh=i(Db,"here"),Db.forEach(t),_h=i(Dr,"."),Dr.forEach(t),Vl=c(n),ar=s(n,"A",{id:!0}),a(ar).forEach(t),Kl=c(n),It=s(n,"H2",{class:!0});var Ac=a(It);vn=s(Ac,"A",{id:!0,class:!0,href:!0});var Sb=a(vn);ki=s(Sb,"SPAN",{});var Gb=a(ki);k(Bo.$$.fragment,Gb),Gb.forEach(t),Sb.forEach(t),gh=c(Ac),yi=s(Ac,"SPAN",{});var Ub=a(yi);Th=i(Ub,"Training"),Ub.forEach(t),Ac.forEach(t),Yl=c(n),dt=s(n,"P",{});var bo=a(dt);vh=i(bo,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),wi=s(bo,"CODE",{});var Wb=a(wi);bh=i(Wb,"input_ids"),Wb.forEach(t),kh=i(bo,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),$i=s(bo,"CODE",{});var Rb=a($i);yh=i(Rb,"decoder_input_ids"),Rb.forEach(t),wh=i(bo,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),xi=s(bo,"CODE",{});var Bb=a(xi);$h=i(Bb,"labels"),Bb.forEach(t),xh=i(bo,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),bo.forEach(t),Zl=c(n),bn=s(n,"P",{});var Ic=a(bn);zh=i(Ic,"One can use "),rr=s(Ic,"A",{href:!0});var Hb=a(rr);qh=i(Hb,"T5ForConditionalGeneration"),Hb.forEach(t),Eh=i(Ic,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Ic.forEach(t),Jl=c(n),kn=s(n,"UL",{});var Dc=a(kn);Qe=s(Dc,"LI",{});var Ot=a(Qe);zi=s(Ot,"P",{});var Vb=a(zi);jh=i(Vb,"Unsupervised denoising training"),Vb.forEach(t),Fh=c(Ot),Te=s(Ot,"P",{});var He=a(Te);Mh=i(He,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),qi=s(He,"EM",{});var Kb=a(qi);Ch=i(Kb,"a.k.a"),Kb.forEach(t),Ph=i(He,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Ei=s(He,"EM",{});var Yb=a(Ei);Nh=i(Yb,"real"),Yb.forEach(t),Oh=i(He,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),ji=s(He,"CODE",{});var Zb=a(ji);Lh=i(Zb,"<extra_id_0>"),Zb.forEach(t),Ah=i(He,`,
`),Fi=s(He,"CODE",{});var Jb=a(Fi);Ih=i(Jb,"<extra_id_1>"),Jb.forEach(t),Dh=i(He,", \u2026 up to "),Mi=s(He,"CODE",{});var Xb=a(Mi);Sh=i(Xb,"<extra_id_99>"),Xb.forEach(t),Gh=i(He,`. As a default, 100 sentinel tokens are available in
`),ir=s(He,"A",{href:!0});var Qb=a(ir);Uh=i(Qb,"T5Tokenizer"),Qb.forEach(t),Wh=i(He,"."),He.forEach(t),Rh=c(Ot),Ci=s(Ot,"P",{});var ek=a(Ci);Bh=i(ek,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),ek.forEach(t),Hh=c(Ot),k(Ho.$$.fragment,Ot),Vh=c(Ot),Vo=s(Ot,"P",{});var Sc=a(Vo);Kh=i(Sc,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),Ko=s(Sc,"A",{href:!0,rel:!0});var tk=a(Ko);Yh=i(tk,"run_t5_mlm_flax.py"),tk.forEach(t),Zh=i(Sc,` script in the Examples
directory.`),Sc.forEach(t),Ot.forEach(t),Jh=c(Dc),ve=s(Dc,"LI",{});var Ve=a(ve);Pi=s(Ve,"P",{});var nk=a(Pi);Xh=i(nk,"Supervised training"),nk.forEach(t),Qh=c(Ve),Ni=s(Ve,"P",{});var ok=a(Ni);eu=i(ok,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),ok.forEach(t),tu=c(Ve),k(Yo.$$.fragment,Ve),nu=c(Ve),re=s(Ve,"P",{});var xe=a(re);ou=i(xe,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),Oi=s(xe,"CODE",{});var sk=a(Oi);su=i(sk,"input_ids"),sk.forEach(t),au=i(xe,` (which are the
`),Li=s(xe,"CODE",{});var ak=a(Li);ru=i(ak,"input_ids"),ak.forEach(t),iu=i(xe," of the encoded input sequence) and "),Ai=s(xe,"CODE",{});var rk=a(Ai);du=i(rk,"labels"),rk.forEach(t),lu=i(xe," (which are the "),Ii=s(xe,"CODE",{});var ik=a(Ii);cu=i(ik,"input_ids"),ik.forEach(t),pu=i(xe,` of the encoded
target sequence). The model will automatically create the `),Di=s(xe,"CODE",{});var dk=a(Di);hu=i(dk,"decoder_input_ids"),dk.forEach(t),uu=i(xe," based on the "),Si=s(xe,"CODE",{});var lk=a(Si);mu=i(lk,"labels"),lk.forEach(t),fu=i(xe,`, by
shifting them one position to the right and prepending the `),Gi=s(xe,"CODE",{});var ck=a(Gi);_u=i(ck,"config.decoder_start_token_id"),ck.forEach(t),gu=i(xe,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),xe.forEach(t),Tu=c(Ve),Dt=s(Ve,"P",{});var Sr=a(Dt);vu=i(Sr,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),Ui=s(Sr,"CODE",{});var pk=a(Ui);bu=i(pk,"max_source_length"),pk.forEach(t),ku=i(Sr," and "),Wi=s(Sr,"CODE",{});var hk=a(Wi);yu=i(hk,"max_target_length"),hk.forEach(t),wu=i(Sr,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),Sr.forEach(t),$u=c(Ve),be=s(Ve,"P",{});var Ke=a(be);xu=i(Ke,"In addition, we must make sure that padding token id\u2019s of the "),Ri=s(Ke,"CODE",{});var uk=a(Ri);zu=i(uk,"labels"),uk.forEach(t),qu=i(Ke,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),Bi=s(Ke,"CODE",{});var mk=a(Bi);Eu=i(mk,"ignore_index"),mk.forEach(t),ju=i(Ke,`
of the `),Hi=s(Ke,"CODE",{});var fk=a(Hi);Fu=i(fk,"CrossEntropyLoss"),fk.forEach(t),Mu=i(Ke,". In Flax, one can use the "),Vi=s(Ke,"CODE",{});var _k=a(Vi);Cu=i(_k,"decoder_attention_mask"),_k.forEach(t),Pu=i(Ke,` to ignore padded tokens from
the loss (see the `),Zo=s(Ke,"A",{href:!0,rel:!0});var gk=a(Zo);Nu=i(gk,"Flax summarization script"),gk.forEach(t),Ou=i(Ke,` for details). We also pass
`),Ki=s(Ke,"CODE",{});var Tk=a(Ki);Lu=i(Tk,"attention_mask"),Tk.forEach(t),Au=i(Ke,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),Ke.forEach(t),Iu=c(Ve),k(Jo.$$.fragment,Ve),Ve.forEach(t),Dc.forEach(t),Xl=c(n),dr=s(n,"P",{});var vk=a(dr);Du=i(vk,"Additional training tips:"),vk.forEach(t),Ql=c(n),jt=s(n,"UL",{});var Gr=a(jt);Yi=s(Gr,"LI",{});var bk=a(Yi);Xo=s(bk,"P",{});var Gc=a(Xo);Su=i(Gc,"T5 models need a slightly higher learning rate than the default one set in the "),Zi=s(Gc,"CODE",{});var kk=a(Zi);Gu=i(kk,"Trainer"),kk.forEach(t),Uu=i(Gc,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Gc.forEach(t),bk.forEach(t),Wu=c(Gr),Ji=s(Gr,"LI",{});var yk=a(Ji);St=s(yk,"P",{});var Ur=a(St);Ru=i(Ur,"According to "),Qo=s(Ur,"A",{href:!0,rel:!0});var wk=a(Qo);Bu=i(wk,"this forum post"),wk.forEach(t),Hu=i(Ur,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),es=s(Ur,"A",{href:!0,rel:!0});var $k=a(es);Vu=i($k,"paper"),$k.forEach(t),Ku=i(Ur,` for the task prefixes
used).`),Ur.forEach(t),yk.forEach(t),Yu=c(Gr),Xi=s(Gr,"LI",{});var xk=a(Xi);ts=s(xk,"P",{});var Uc=a(ts);Zu=i(Uc,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Qi=s(Uc,"EM",{});var zk=a(Qi);Ju=i(zk,"pad_to_multiple_of"),zk.forEach(t),Xu=i(Uc,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Uc.forEach(t),xk.forEach(t),Gr.forEach(t),ec=c(n),lr=s(n,"A",{id:!0}),a(lr).forEach(t),tc=c(n),Gt=s(n,"H2",{class:!0});var Wc=a(Gt);yn=s(Wc,"A",{id:!0,class:!0,href:!0});var qk=a(yn);ed=s(qk,"SPAN",{});var Ek=a(ed);k(ns.$$.fragment,Ek),Ek.forEach(t),qk.forEach(t),Qu=c(Wc),td=s(Wc,"SPAN",{});var jk=a(td);em=i(jk,"Inference"),jk.forEach(t),Wc.forEach(t),nc=c(n),lt=s(n,"P",{});var ko=a(lt);tm=i(ko,"At inference time, it is recommended to use "),cr=s(ko,"A",{href:!0});var Fk=a(cr);nm=i(Fk,"generate()"),Fk.forEach(t),om=i(ko,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),os=s(ko,"A",{href:!0,rel:!0});var Mk=a(os);sm=i(Mk,"this blog post"),Mk.forEach(t),am=i(ko,` to know all the details about generating text with Transformers.
There\u2019s also `),ss=s(ko,"A",{href:!0,rel:!0});var Ck=a(ss);rm=i(Ck,"this blog post"),Ck.forEach(t),im=i(ko,` which explains how
generation works in general in encoder-decoder models.`),ko.forEach(t),oc=c(n),k(as.$$.fragment,n),sc=c(n),Be=s(n,"P",{});var Lt=a(Be);dm=i(Lt,"Note that T5 uses the "),nd=s(Lt,"CODE",{});var Pk=a(nd);lm=i(Pk,"pad_token_id"),Pk.forEach(t),cm=i(Lt," as the "),od=s(Lt,"CODE",{});var Nk=a(od);pm=i(Nk,"decoder_start_token_id"),Nk.forEach(t),hm=i(Lt,`, so when doing generation without using
`),pr=s(Lt,"A",{href:!0});var Ok=a(pr);um=i(Ok,"generate()"),Ok.forEach(t),mm=i(Lt,", make sure you start it with the "),sd=s(Lt,"CODE",{});var Lk=a(sd);fm=i(Lk,"pad_token_id"),Lk.forEach(t),_m=i(Lt,"."),Lt.forEach(t),ac=c(n),hr=s(n,"P",{});var Ak=a(hr);gm=i(Ak,"The example above only shows a single example. You can also do batched inference, like so:"),Ak.forEach(t),rc=c(n),k(rs.$$.fragment,n),ic=c(n),ur=s(n,"A",{id:!0}),a(ur).forEach(t),dc=c(n),Ut=s(n,"H2",{class:!0});var Rc=a(Ut);wn=s(Rc,"A",{id:!0,class:!0,href:!0});var Ik=a(wn);ad=s(Ik,"SPAN",{});var Dk=a(ad);k(is.$$.fragment,Dk),Dk.forEach(t),Ik.forEach(t),Tm=c(Rc),rd=s(Rc,"SPAN",{});var Sk=a(rd);vm=i(Sk,"Performance"),Sk.forEach(t),Rc.forEach(t),lc=c(n),ct=s(n,"P",{});var yo=a(ct);bm=i(yo,"If you\u2019d like a faster training and inference performance, install "),ds=s(yo,"A",{href:!0,rel:!0});var Gk=a(ds);km=i(Gk,"apex"),Gk.forEach(t),ym=i(yo," and then the model will automatically use "),id=s(yo,"CODE",{});var Uk=a(id);wm=i(Uk,"apex.normalization.FusedRMSNorm"),Uk.forEach(t),$m=i(yo," instead of "),dd=s(yo,"CODE",{});var Wk=a(dd);xm=i(Wk,"T5LayerNorm"),Wk.forEach(t),zm=i(yo,". The former uses an optimized fused kernel which is several times faster than the latter."),yo.forEach(t),cc=c(n),Wt=s(n,"H2",{class:!0});var Bc=a(Wt);$n=s(Bc,"A",{id:!0,class:!0,href:!0});var Rk=a($n);ld=s(Rk,"SPAN",{});var Bk=a(ld);k(ls.$$.fragment,Bk),Bk.forEach(t),Rk.forEach(t),qm=c(Bc),cd=s(Bc,"SPAN",{});var Hk=a(cd);Em=i(Hk,"Example scripts"),Hk.forEach(t),Bc.forEach(t),pc=c(n),mr=s(n,"P",{});var Vk=a(mr);jm=i(Vk,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),Vk.forEach(t),hc=c(n),xn=s(n,"UL",{});var Hc=a(xn);pd=s(Hc,"LI",{});var Kk=a(pd);Rt=s(Kk,"P",{});var Wr=a(Rt);Fm=i(Wr,"pre-training: the "),cs=s(Wr,"A",{href:!0,rel:!0});var Yk=a(cs);Mm=i(Yk,"run_t5_mlm_flax.py"),Yk.forEach(t),Cm=i(Wr,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),ps=s(Wr,"A",{href:!0,rel:!0});var Zk=a(ps);Pm=i(Zk,"t5_tokenizer_model.py"),Zk.forEach(t),Nm=i(Wr,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Wr.forEach(t),Kk.forEach(t),Om=c(Hc),hd=s(Hc,"LI",{});var Jk=a(hd);Se=s(Jk,"P",{});var yt=a(Se);Lm=i(yt,"fine-tuning: T5 is supported by the official summarization scripts ("),hs=s(yt,"A",{href:!0,rel:!0});var Xk=a(hs);Am=i(Xk,"PyTorch"),Xk.forEach(t),Im=i(yt,", "),us=s(yt,"A",{href:!0,rel:!0});var Qk=a(us);Dm=i(Qk,"Tensorflow"),Qk.forEach(t),Sm=i(yt,", and "),ms=s(yt,"A",{href:!0,rel:!0});var e1=a(ms);Gm=i(e1,"Flax"),e1.forEach(t),Um=i(yt,`) and translation scripts
(`),fs=s(yt,"A",{href:!0,rel:!0});var t1=a(fs);Wm=i(t1,"PyTorch"),t1.forEach(t),Rm=i(yt," and "),_s=s(yt,"A",{href:!0,rel:!0});var n1=a(_s);Bm=i(n1,"Tensorflow"),n1.forEach(t),Hm=i(yt,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),yt.forEach(t),Jk.forEach(t),Hc.forEach(t),uc=c(n),Bt=s(n,"H2",{class:!0});var Vc=a(Bt);zn=s(Vc,"A",{id:!0,class:!0,href:!0});var o1=a(zn);ud=s(o1,"SPAN",{});var s1=a(ud);k(gs.$$.fragment,s1),s1.forEach(t),o1.forEach(t),Vm=c(Vc),md=s(Vc,"SPAN",{});var a1=a(md);Km=i(a1,"T5Config"),a1.forEach(t),Vc.forEach(t),mc=c(n),wt=s(n,"DIV",{class:!0});var Rr=a(wt);k(Ts.$$.fragment,Rr),Ym=c(Rr),$t=s(Rr,"P",{});var wo=a($t);Zm=i(wo,"This is the configuration class to store the configuration of a "),fr=s(wo,"A",{href:!0});var r1=a(fr);Jm=i(r1,"T5Model"),r1.forEach(t),Xm=i(wo," or a "),_r=s(wo,"A",{href:!0});var i1=a(_r);Qm=i(i1,"TFT5Model"),i1.forEach(t),ef=i(wo,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),vs=s(wo,"A",{href:!0,rel:!0});var d1=a(vs);tf=i(d1,"t5-small"),d1.forEach(t),nf=i(wo," architecture."),wo.forEach(t),of=c(Rr),Ht=s(Rr,"P",{});var Br=a(Ht);sf=i(Br,"Configuration objects inherit from "),gr=s(Br,"A",{href:!0});var l1=a(gr);af=i(l1,"PretrainedConfig"),l1.forEach(t),rf=i(Br,` and can be used to control the model outputs. Read the
documentation from `),Tr=s(Br,"A",{href:!0});var c1=a(Tr);df=i(c1,"PretrainedConfig"),c1.forEach(t),lf=i(Br," for more information."),Br.forEach(t),Rr.forEach(t),fc=c(n),Vt=s(n,"H2",{class:!0});var Kc=a(Vt);qn=s(Kc,"A",{id:!0,class:!0,href:!0});var p1=a(qn);fd=s(p1,"SPAN",{});var h1=a(fd);k(bs.$$.fragment,h1),h1.forEach(t),p1.forEach(t),cf=c(Kc),_d=s(Kc,"SPAN",{});var u1=a(_d);pf=i(u1,"T5Tokenizer"),u1.forEach(t),Kc.forEach(t),_c=c(n),ie=s(n,"DIV",{class:!0});var Ye=a(ie);k(ks.$$.fragment,Ye),hf=c(Ye),ys=s(Ye,"P",{});var Yc=a(ys);uf=i(Yc,"Construct a T5 tokenizer. Based on "),ws=s(Yc,"A",{href:!0,rel:!0});var m1=a(ws);mf=i(m1,"SentencePiece"),m1.forEach(t),ff=i(Yc,"."),Yc.forEach(t),_f=c(Ye),$s=s(Ye,"P",{});var Zc=a($s);gf=i(Zc,"This tokenizer inherits from "),vr=s(Zc,"A",{href:!0});var f1=a(vr);Tf=i(f1,"PreTrainedTokenizer"),f1.forEach(t),vf=i(Zc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Zc.forEach(t),bf=c(Ye),Ft=s(Ye,"DIV",{class:!0});var Hr=a(Ft);k(xs.$$.fragment,Hr),kf=c(Hr),gd=s(Hr,"P",{});var _1=a(gd);yf=i(_1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),_1.forEach(t),wf=c(Hr),zs=s(Hr,"UL",{});var Jc=a(zs);br=s(Jc,"LI",{});var cb=a(br);$f=i(cb,"single sequence: "),Td=s(cb,"CODE",{});var g1=a(Td);xf=i(g1,"X </s>"),g1.forEach(t),cb.forEach(t),zf=c(Jc),kr=s(Jc,"LI",{});var pb=a(kr);qf=i(pb,"pair of sequences: "),vd=s(pb,"CODE",{});var T1=a(vd);Ef=i(T1,"A </s> B </s>"),T1.forEach(t),pb.forEach(t),Jc.forEach(t),Hr.forEach(t),jf=c(Ye),En=s(Ye,"DIV",{class:!0});var Xc=a(En);k(qs.$$.fragment,Xc),Ff=c(Xc),Es=s(Xc,"P",{});var Qc=a(Es);Mf=i(Qc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),bd=s(Qc,"CODE",{});var v1=a(bd);Cf=i(v1,"prepare_for_model"),v1.forEach(t),Pf=i(Qc," method."),Qc.forEach(t),Xc.forEach(t),Nf=c(Ye),jn=s(Ye,"DIV",{class:!0});var ep=a(jn);k(js.$$.fragment,ep),Of=c(ep),kd=s(ep,"P",{});var b1=a(kd);Lf=i(b1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),b1.forEach(t),ep.forEach(t),Af=c(Ye),yr=s(Ye,"DIV",{class:!0});var k1=a(yr);k(Fs.$$.fragment,k1),k1.forEach(t),Ye.forEach(t),gc=c(n),Kt=s(n,"H2",{class:!0});var tp=a(Kt);Fn=s(tp,"A",{id:!0,class:!0,href:!0});var y1=a(Fn);yd=s(y1,"SPAN",{});var w1=a(yd);k(Ms.$$.fragment,w1),w1.forEach(t),y1.forEach(t),If=c(tp),wd=s(tp,"SPAN",{});var $1=a(wd);Df=i($1,"T5TokenizerFast"),$1.forEach(t),tp.forEach(t),Tc=c(n),Ge=s(n,"DIV",{class:!0});var At=a(Ge);k(Cs.$$.fragment,At),Sf=c(At),Yt=s(At,"P",{});var Vr=a(Yt);Gf=i(Vr,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),$d=s(Vr,"EM",{});var x1=a($d);Uf=i(x1,"tokenizers"),x1.forEach(t),Wf=i(Vr,` library). Based on
`),Ps=s(Vr,"A",{href:!0,rel:!0});var z1=a(Ps);Rf=i(z1,"Unigram"),z1.forEach(t),Bf=i(Vr,"."),Vr.forEach(t),Hf=c(At),Ns=s(At,"P",{});var np=a(Ns);Vf=i(np,"This tokenizer inherits from "),wr=s(np,"A",{href:!0});var q1=a(wr);Kf=i(q1,"PreTrainedTokenizerFast"),q1.forEach(t),Yf=i(np,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),np.forEach(t),Zf=c(At),Mt=s(At,"DIV",{class:!0});var Kr=a(Mt);k(Os.$$.fragment,Kr),Jf=c(Kr),xd=s(Kr,"P",{});var E1=a(xd);Xf=i(E1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),E1.forEach(t),Qf=c(Kr),Ls=s(Kr,"UL",{});var op=a(Ls);$r=s(op,"LI",{});var hb=a($r);e_=i(hb,"single sequence: "),zd=s(hb,"CODE",{});var j1=a(zd);t_=i(j1,"X </s>"),j1.forEach(t),hb.forEach(t),n_=c(op),xr=s(op,"LI",{});var ub=a(xr);o_=i(ub,"pair of sequences: "),qd=s(ub,"CODE",{});var F1=a(qd);s_=i(F1,"A </s> B </s>"),F1.forEach(t),ub.forEach(t),op.forEach(t),Kr.forEach(t),a_=c(At),Mn=s(At,"DIV",{class:!0});var sp=a(Mn);k(As.$$.fragment,sp),r_=c(sp),Ed=s(sp,"P",{});var M1=a(Ed);i_=i(M1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),M1.forEach(t),sp.forEach(t),At.forEach(t),vc=c(n),Zt=s(n,"H2",{class:!0});var ap=a(Zt);Cn=s(ap,"A",{id:!0,class:!0,href:!0});var C1=a(Cn);jd=s(C1,"SPAN",{});var P1=a(jd);k(Is.$$.fragment,P1),P1.forEach(t),C1.forEach(t),d_=c(ap),Fd=s(ap,"SPAN",{});var N1=a(Fd);l_=i(N1,"T5Model"),N1.forEach(t),ap.forEach(t),bc=c(n),J=s(n,"DIV",{class:!0});var ze=a(J);k(Ds.$$.fragment,ze),c_=c(ze),Md=s(ze,"P",{});var O1=a(Md);p_=i(O1,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),O1.forEach(t),h_=c(ze),Ss=s(ze,"P",{});var rp=a(Ss);u_=i(rp,"The T5 model was proposed in "),Gs=s(rp,"A",{href:!0,rel:!0});var L1=a(Gs);m_=i(L1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),L1.forEach(t),f_=i(rp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),rp.forEach(t),__=c(ze),Us=s(ze,"P",{});var ip=a(Us);g_=i(ip,"This model inherits from "),zr=s(ip,"A",{href:!0});var A1=a(zr);T_=i(A1,"PreTrainedModel"),A1.forEach(t),v_=i(ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ip.forEach(t),b_=c(ze),Ws=s(ze,"P",{});var dp=a(Ws);k_=i(dp,"This model is also a PyTorch "),Rs=s(dp,"A",{href:!0,rel:!0});var I1=a(Rs);y_=i(I1,"torch.nn.Module"),I1.forEach(t),w_=i(dp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dp.forEach(t),$_=c(ze),pt=s(ze,"DIV",{class:!0});var $o=a(pt);k(Bs.$$.fragment,$o),x_=c($o),Jt=s($o,"P",{});var Yr=a(Jt);z_=i(Yr,"The "),qr=s(Yr,"A",{href:!0});var D1=a(qr);q_=i(D1,"T5Model"),D1.forEach(t),E_=i(Yr," forward method, overrides the "),Cd=s(Yr,"CODE",{});var S1=a(Cd);j_=i(S1,"__call__"),S1.forEach(t),F_=i(Yr," special method."),Yr.forEach(t),M_=c($o),k(Pn.$$.fragment,$o),C_=c($o),k(Nn.$$.fragment,$o),$o.forEach(t),P_=c(ze),ht=s(ze,"DIV",{class:!0});var xo=a(ht);k(Hs.$$.fragment,xo),N_=c(xo),Pd=s(xo,"P",{});var G1=a(Pd);O_=i(G1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),G1.forEach(t),L_=c(xo),Nd=s(xo,"P",{});var U1=a(Nd);A_=i(U1,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),U1.forEach(t),I_=c(xo),k(On.$$.fragment,xo),xo.forEach(t),D_=c(ze),Ct=s(ze,"DIV",{class:!0});var Zr=a(Ct);k(Vs.$$.fragment,Zr),S_=c(Zr),Od=s(Zr,"P",{});var W1=a(Od);G_=i(W1,"Moves the model to cpu from a model parallel state."),W1.forEach(t),U_=c(Zr),k(Ln.$$.fragment,Zr),Zr.forEach(t),ze.forEach(t),kc=c(n),Xt=s(n,"H2",{class:!0});var lp=a(Xt);An=s(lp,"A",{id:!0,class:!0,href:!0});var R1=a(An);Ld=s(R1,"SPAN",{});var B1=a(Ld);k(Ks.$$.fragment,B1),B1.forEach(t),R1.forEach(t),W_=c(lp),Ad=s(lp,"SPAN",{});var H1=a(Ad);R_=i(H1,"T5ForConditionalGeneration"),H1.forEach(t),lp.forEach(t),yc=c(n),X=s(n,"DIV",{class:!0});var qe=a(X);k(Ys.$$.fragment,qe),B_=c(qe),Zs=s(qe,"P",{});var cp=a(Zs);H_=i(cp,"T5 Model with a "),Id=s(cp,"CODE",{});var V1=a(Id);V_=i(V1,"language modeling"),V1.forEach(t),K_=i(cp," head on top."),cp.forEach(t),Y_=c(qe),Js=s(qe,"P",{});var pp=a(Js);Z_=i(pp,"The T5 model was proposed in "),Xs=s(pp,"A",{href:!0,rel:!0});var K1=a(Xs);J_=i(K1,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),K1.forEach(t),X_=i(pp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),pp.forEach(t),Q_=c(qe),Qs=s(qe,"P",{});var hp=a(Qs);eg=i(hp,"This model inherits from "),Er=s(hp,"A",{href:!0});var Y1=a(Er);tg=i(Y1,"PreTrainedModel"),Y1.forEach(t),ng=i(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),og=c(qe),ea=s(qe,"P",{});var up=a(ea);sg=i(up,"This model is also a PyTorch "),ta=s(up,"A",{href:!0,rel:!0});var Z1=a(ta);ag=i(Z1,"torch.nn.Module"),Z1.forEach(t),rg=i(up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up.forEach(t),ig=c(qe),ut=s(qe,"DIV",{class:!0});var zo=a(ut);k(na.$$.fragment,zo),dg=c(zo),Qt=s(zo,"P",{});var Jr=a(Qt);lg=i(Jr,"The "),jr=s(Jr,"A",{href:!0});var J1=a(jr);cg=i(J1,"T5ForConditionalGeneration"),J1.forEach(t),pg=i(Jr," forward method, overrides the "),Dd=s(Jr,"CODE",{});var X1=a(Dd);hg=i(X1,"__call__"),X1.forEach(t),ug=i(Jr," special method."),Jr.forEach(t),mg=c(zo),k(In.$$.fragment,zo),fg=c(zo),k(Dn.$$.fragment,zo),zo.forEach(t),_g=c(qe),mt=s(qe,"DIV",{class:!0});var qo=a(mt);k(oa.$$.fragment,qo),gg=c(qo),Sd=s(qo,"P",{});var Q1=a(Sd);Tg=i(Q1,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Q1.forEach(t),vg=c(qo),Gd=s(qo,"P",{});var ey=a(Gd);bg=i(ey,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ey.forEach(t),kg=c(qo),k(Sn.$$.fragment,qo),qo.forEach(t),yg=c(qe),Pt=s(qe,"DIV",{class:!0});var Xr=a(Pt);k(sa.$$.fragment,Xr),wg=c(Xr),Ud=s(Xr,"P",{});var ty=a(Ud);$g=i(ty,"Moves the model to cpu from a model parallel state."),ty.forEach(t),xg=c(Xr),k(Gn.$$.fragment,Xr),Xr.forEach(t),qe.forEach(t),wc=c(n),en=s(n,"H2",{class:!0});var mp=a(en);Un=s(mp,"A",{id:!0,class:!0,href:!0});var ny=a(Un);Wd=s(ny,"SPAN",{});var oy=a(Wd);k(aa.$$.fragment,oy),oy.forEach(t),ny.forEach(t),zg=c(mp),Rd=s(mp,"SPAN",{});var sy=a(Rd);qg=i(sy,"T5EncoderModel"),sy.forEach(t),mp.forEach(t),$c=c(n),Q=s(n,"DIV",{class:!0});var Ee=a(Q);k(ra.$$.fragment,Ee),Eg=c(Ee),Bd=s(Ee,"P",{});var ay=a(Bd);jg=i(ay,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),ay.forEach(t),Fg=c(Ee),ia=s(Ee,"P",{});var fp=a(ia);Mg=i(fp,"The T5 model was proposed in "),da=s(fp,"A",{href:!0,rel:!0});var ry=a(da);Cg=i(ry,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),ry.forEach(t),Pg=i(fp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),fp.forEach(t),Ng=c(Ee),la=s(Ee,"P",{});var _p=a(la);Og=i(_p,"This model inherits from "),Fr=s(_p,"A",{href:!0});var iy=a(Fr);Lg=i(iy,"PreTrainedModel"),iy.forEach(t),Ag=i(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(t),Ig=c(Ee),ca=s(Ee,"P",{});var gp=a(ca);Dg=i(gp,"This model is also a PyTorch "),pa=s(gp,"A",{href:!0,rel:!0});var dy=a(pa);Sg=i(dy,"torch.nn.Module"),dy.forEach(t),Gg=i(gp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gp.forEach(t),Ug=c(Ee),ft=s(Ee,"DIV",{class:!0});var Eo=a(ft);k(ha.$$.fragment,Eo),Wg=c(Eo),tn=s(Eo,"P",{});var Qr=a(tn);Rg=i(Qr,"The "),Mr=s(Qr,"A",{href:!0});var ly=a(Mr);Bg=i(ly,"T5EncoderModel"),ly.forEach(t),Hg=i(Qr," forward method, overrides the "),Hd=s(Qr,"CODE",{});var cy=a(Hd);Vg=i(cy,"__call__"),cy.forEach(t),Kg=i(Qr," special method."),Qr.forEach(t),Yg=c(Eo),k(Wn.$$.fragment,Eo),Zg=c(Eo),k(Rn.$$.fragment,Eo),Eo.forEach(t),Jg=c(Ee),_t=s(Ee,"DIV",{class:!0});var jo=a(_t);k(ua.$$.fragment,jo),Xg=c(jo),Vd=s(jo,"P",{});var py=a(Vd);Qg=i(py,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),py.forEach(t),eT=c(jo),Kd=s(jo,"P",{});var hy=a(Kd);tT=i(hy,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),hy.forEach(t),nT=c(jo),k(Bn.$$.fragment,jo),jo.forEach(t),oT=c(Ee),Nt=s(Ee,"DIV",{class:!0});var ei=a(Nt);k(ma.$$.fragment,ei),sT=c(ei),Yd=s(ei,"P",{});var uy=a(Yd);aT=i(uy,"Moves the model to cpu from a model parallel state."),uy.forEach(t),rT=c(ei),k(Hn.$$.fragment,ei),ei.forEach(t),Ee.forEach(t),xc=c(n),nn=s(n,"H2",{class:!0});var Tp=a(nn);Vn=s(Tp,"A",{id:!0,class:!0,href:!0});var my=a(Vn);Zd=s(my,"SPAN",{});var fy=a(Zd);k(fa.$$.fragment,fy),fy.forEach(t),my.forEach(t),iT=c(Tp),Jd=s(Tp,"SPAN",{});var _y=a(Jd);dT=i(_y,"TFT5Model"),_y.forEach(t),Tp.forEach(t),zc=c(n),de=s(n,"DIV",{class:!0});var Ze=a(de);k(_a.$$.fragment,Ze),lT=c(Ze),Xd=s(Ze,"P",{});var gy=a(Xd);cT=i(gy,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),gy.forEach(t),pT=c(Ze),ga=s(Ze,"P",{});var vp=a(ga);hT=i(vp,"The T5 model was proposed in "),Ta=s(vp,"A",{href:!0,rel:!0});var Ty=a(Ta);uT=i(Ty,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ty.forEach(t),mT=i(vp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),vp.forEach(t),fT=c(Ze),va=s(Ze,"P",{});var bp=a(va);_T=i(bp,"This model inherits from "),Cr=s(bp,"A",{href:!0});var vy=a(Cr);gT=i(vy,"TFPreTrainedModel"),vy.forEach(t),TT=i(bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp.forEach(t),vT=c(Ze),ba=s(Ze,"P",{});var kp=a(ba);bT=i(kp,"This model is also a "),ka=s(kp,"A",{href:!0,rel:!0});var by=a(ka);kT=i(by,"tf.keras.Model"),by.forEach(t),yT=i(kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kp.forEach(t),wT=c(Ze),k(Kn.$$.fragment,Ze),$T=c(Ze),gt=s(Ze,"DIV",{class:!0});var Fo=a(gt);k(ya.$$.fragment,Fo),xT=c(Fo),on=s(Fo,"P",{});var ti=a(on);zT=i(ti,"The "),Pr=s(ti,"A",{href:!0});var ky=a(Pr);qT=i(ky,"TFT5Model"),ky.forEach(t),ET=i(ti," forward method, overrides the "),Qd=s(ti,"CODE",{});var yy=a(Qd);jT=i(yy,"__call__"),yy.forEach(t),FT=i(ti," special method."),ti.forEach(t),MT=c(Fo),k(Yn.$$.fragment,Fo),CT=c(Fo),k(Zn.$$.fragment,Fo),Fo.forEach(t),Ze.forEach(t),qc=c(n),sn=s(n,"H2",{class:!0});var yp=a(sn);Jn=s(yp,"A",{id:!0,class:!0,href:!0});var wy=a(Jn);el=s(wy,"SPAN",{});var $y=a(el);k(wa.$$.fragment,$y),$y.forEach(t),wy.forEach(t),PT=c(yp),tl=s(yp,"SPAN",{});var xy=a(tl);NT=i(xy,"TFT5ForConditionalGeneration"),xy.forEach(t),yp.forEach(t),Ec=c(n),le=s(n,"DIV",{class:!0});var Je=a(le);k($a.$$.fragment,Je),OT=c(Je),xa=s(Je,"P",{});var wp=a(xa);LT=i(wp,"T5 Model with a "),nl=s(wp,"CODE",{});var zy=a(nl);AT=i(zy,"language modeling"),zy.forEach(t),IT=i(wp," head on top."),wp.forEach(t),DT=c(Je),za=s(Je,"P",{});var $p=a(za);ST=i($p,"The T5 model was proposed in "),qa=s($p,"A",{href:!0,rel:!0});var qy=a(qa);GT=i(qy,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),qy.forEach(t),UT=i($p,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),$p.forEach(t),WT=c(Je),Ea=s(Je,"P",{});var xp=a(Ea);RT=i(xp,"This model inherits from "),Nr=s(xp,"A",{href:!0});var Ey=a(Nr);BT=i(Ey,"TFPreTrainedModel"),Ey.forEach(t),HT=i(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp.forEach(t),VT=c(Je),ja=s(Je,"P",{});var zp=a(ja);KT=i(zp,"This model is also a "),Fa=s(zp,"A",{href:!0,rel:!0});var jy=a(Fa);YT=i(jy,"tf.keras.Model"),jy.forEach(t),ZT=i(zp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zp.forEach(t),JT=c(Je),k(Xn.$$.fragment,Je),XT=c(Je),Tt=s(Je,"DIV",{class:!0});var Mo=a(Tt);k(Ma.$$.fragment,Mo),QT=c(Mo),an=s(Mo,"P",{});var ni=a(an);ev=i(ni,"The "),Or=s(ni,"A",{href:!0});var Fy=a(Or);tv=i(Fy,"TFT5ForConditionalGeneration"),Fy.forEach(t),nv=i(ni," forward method, overrides the "),ol=s(ni,"CODE",{});var My=a(ol);ov=i(My,"__call__"),My.forEach(t),sv=i(ni," special method."),ni.forEach(t),av=c(Mo),k(Qn.$$.fragment,Mo),rv=c(Mo),k(eo.$$.fragment,Mo),Mo.forEach(t),Je.forEach(t),jc=c(n),rn=s(n,"H2",{class:!0});var qp=a(rn);to=s(qp,"A",{id:!0,class:!0,href:!0});var Cy=a(to);sl=s(Cy,"SPAN",{});var Py=a(sl);k(Ca.$$.fragment,Py),Py.forEach(t),Cy.forEach(t),iv=c(qp),al=s(qp,"SPAN",{});var Ny=a(al);dv=i(Ny,"TFT5EncoderModel"),Ny.forEach(t),qp.forEach(t),Fc=c(n),ce=s(n,"DIV",{class:!0});var Xe=a(ce);k(Pa.$$.fragment,Xe),lv=c(Xe),rl=s(Xe,"P",{});var Oy=a(rl);cv=i(Oy,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Oy.forEach(t),pv=c(Xe),Na=s(Xe,"P",{});var Ep=a(Na);hv=i(Ep,"The T5 model was proposed in "),Oa=s(Ep,"A",{href:!0,rel:!0});var Ly=a(Oa);uv=i(Ly,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ly.forEach(t),mv=i(Ep,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Ep.forEach(t),fv=c(Xe),La=s(Xe,"P",{});var jp=a(La);_v=i(jp,"This model inherits from "),Lr=s(jp,"A",{href:!0});var Ay=a(Lr);gv=i(Ay,"TFPreTrainedModel"),Ay.forEach(t),Tv=i(jp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jp.forEach(t),vv=c(Xe),Aa=s(Xe,"P",{});var Fp=a(Aa);bv=i(Fp,"This model is also a "),Ia=s(Fp,"A",{href:!0,rel:!0});var Iy=a(Ia);kv=i(Iy,"tf.keras.Model"),Iy.forEach(t),yv=i(Fp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fp.forEach(t),wv=c(Xe),k(no.$$.fragment,Xe),$v=c(Xe),vt=s(Xe,"DIV",{class:!0});var Co=a(vt);k(Da.$$.fragment,Co),xv=c(Co),dn=s(Co,"P",{});var oi=a(dn);zv=i(oi,"The "),Ar=s(oi,"A",{href:!0});var Dy=a(Ar);qv=i(Dy,"TFT5EncoderModel"),Dy.forEach(t),Ev=i(oi," forward method, overrides the "),il=s(oi,"CODE",{});var Sy=a(il);jv=i(Sy,"__call__"),Sy.forEach(t),Fv=i(oi," special method."),oi.forEach(t),Mv=c(Co),k(oo.$$.fragment,Co),Cv=c(Co),k(so.$$.fragment,Co),Co.forEach(t),Xe.forEach(t),Mc=c(n),ln=s(n,"H2",{class:!0});var Mp=a(ln);ao=s(Mp,"A",{id:!0,class:!0,href:!0});var Gy=a(ao);dl=s(Gy,"SPAN",{});var Uy=a(dl);k(Sa.$$.fragment,Uy),Uy.forEach(t),Gy.forEach(t),Pv=c(Mp),ll=s(Mp,"SPAN",{});var Wy=a(ll);Nv=i(Wy,"FlaxT5Model"),Wy.forEach(t),Mp.forEach(t),Cc=c(n),et=s(n,"DIV",{class:!0});var Po=a(et);k(Ga.$$.fragment,Po),Ov=c(Po),bt=s(Po,"DIV",{class:!0});var No=a(bt);k(Ua.$$.fragment,No),Lv=c(No),cn=s(No,"P",{});var si=a(cn);Av=i(si,"The "),cl=s(si,"CODE",{});var Ry=a(cl);Iv=i(Ry,"FlaxT5PreTrainedModel"),Ry.forEach(t),Dv=i(si," forward method, overrides the "),pl=s(si,"CODE",{});var By=a(pl);Sv=i(By,"__call__"),By.forEach(t),Gv=i(si," special method."),si.forEach(t),Uv=c(No),k(ro.$$.fragment,No),Wv=c(No),k(io.$$.fragment,No),No.forEach(t),Rv=c(Po),lo=s(Po,"DIV",{class:!0});var Cp=a(lo);k(Wa.$$.fragment,Cp),Bv=c(Cp),k(co.$$.fragment,Cp),Cp.forEach(t),Hv=c(Po),po=s(Po,"DIV",{class:!0});var Pp=a(po);k(Ra.$$.fragment,Pp),Vv=c(Pp),k(ho.$$.fragment,Pp),Pp.forEach(t),Po.forEach(t),Pc=c(n),pn=s(n,"H2",{class:!0});var Np=a(pn);uo=s(Np,"A",{id:!0,class:!0,href:!0});var Hy=a(uo);hl=s(Hy,"SPAN",{});var Vy=a(hl);k(Ba.$$.fragment,Vy),Vy.forEach(t),Hy.forEach(t),Kv=c(Np),ul=s(Np,"SPAN",{});var Ky=a(ul);Yv=i(Ky,"FlaxT5ForConditionalGeneration"),Ky.forEach(t),Np.forEach(t),Nc=c(n),tt=s(n,"DIV",{class:!0});var Oo=a(tt);k(Ha.$$.fragment,Oo),Zv=c(Oo),kt=s(Oo,"DIV",{class:!0});var Lo=a(kt);k(Va.$$.fragment,Lo),Jv=c(Lo),hn=s(Lo,"P",{});var ai=a(hn);Xv=i(ai,"The "),ml=s(ai,"CODE",{});var Yy=a(ml);Qv=i(Yy,"FlaxT5PreTrainedModel"),Yy.forEach(t),eb=i(ai," forward method, overrides the "),fl=s(ai,"CODE",{});var Zy=a(fl);tb=i(Zy,"__call__"),Zy.forEach(t),nb=i(ai," special method."),ai.forEach(t),ob=c(Lo),k(mo.$$.fragment,Lo),sb=c(Lo),k(fo.$$.fragment,Lo),Lo.forEach(t),ab=c(Oo),_o=s(Oo,"DIV",{class:!0});var Op=a(_o);k(Ka.$$.fragment,Op),rb=c(Op),k(go.$$.fragment,Op),Op.forEach(t),ib=c(Oo),To=s(Oo,"DIV",{class:!0});var Lp=a(To);k(Ya.$$.fragment,Lp),db=c(Lp),k(vo.$$.fragment,Lp),Lp.forEach(t),Oo.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(C5)),h(u,"id","t5"),h(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(u,"href","#t5"),h(g,"class","relative group"),h(ee,"id","overview"),h(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ee,"href","#overview"),h(j,"class","relative group"),h(ae,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(ae,"rel","nofollow"),h(L,"href","#training"),h(Ae,"href","#inference"),h(Ie,"href","#scripts"),h(Ao,"href","https://huggingface.co/t5-small"),h(Ao,"rel","nofollow"),h(Io,"href","https://huggingface.co/t5-base"),h(Io,"rel","nofollow"),h(Do,"href","https://huggingface.co/t5-large"),h(Do,"rel","nofollow"),h(So,"href","https://huggingface.co/t5-3b"),h(So,"rel","nofollow"),h(Go,"href","https://huggingface.co/t5-11b"),h(Go,"rel","nofollow"),h(nr,"href","t5v1.1"),h(or,"href","mt5"),h(sr,"href","byt5"),h(Uo,"href","https://huggingface.co/models?search=t5"),h(Uo,"rel","nofollow"),h(Wo,"href","https://huggingface.co/thomwolf"),h(Wo,"rel","nofollow"),h(Ro,"href","https://github.com/google-research/text-to-text-transfer-transformer"),h(Ro,"rel","nofollow"),h(ar,"id","training"),h(vn,"id","training"),h(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vn,"href","#training"),h(It,"class","relative group"),h(rr,"href","/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(ir,"href","/docs/transformers/v4.18.0/en/model_doc/mt5#transformers.T5Tokenizer"),h(Ko,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),h(Ko,"rel","nofollow"),h(Zo,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(Zo,"rel","nofollow"),h(Qo,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),h(Qo,"rel","nofollow"),h(es,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(es,"rel","nofollow"),h(lr,"id","inference"),h(yn,"id","inference"),h(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yn,"href","#inference"),h(Gt,"class","relative group"),h(cr,"href","/docs/transformers/v4.18.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(os,"href","https://huggingface.co/blog/how-to-generate"),h(os,"rel","nofollow"),h(ss,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),h(ss,"rel","nofollow"),h(pr,"href","/docs/transformers/v4.18.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(ur,"id","scripts"),h(wn,"id","performance"),h(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(wn,"href","#performance"),h(Ut,"class","relative group"),h(ds,"href","https://github.com/NVIDIA/apex#quick-start"),h(ds,"rel","nofollow"),h($n,"id","example-scripts"),h($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($n,"href","#example-scripts"),h(Wt,"class","relative group"),h(cs,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/run_t5_mlm_flax.py"),h(cs,"rel","nofollow"),h(ps,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/t5_tokenizer_model.py"),h(ps,"rel","nofollow"),h(hs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),h(hs,"rel","nofollow"),h(us,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),h(us,"rel","nofollow"),h(ms,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(ms,"rel","nofollow"),h(fs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),h(fs,"rel","nofollow"),h(_s,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),h(_s,"rel","nofollow"),h(zn,"id","transformers.T5Config"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#transformers.T5Config"),h(Bt,"class","relative group"),h(fr,"href","/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Model"),h(_r,"href","/docs/transformers/v4.18.0/en/model_doc/t5#transformers.TFT5Model"),h(vs,"href","https://huggingface.co/t5-small"),h(vs,"rel","nofollow"),h(gr,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(Tr,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qn,"id","transformers.T5Tokenizer"),h(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qn,"href","#transformers.T5Tokenizer"),h(Vt,"class","relative group"),h(ws,"href","https://github.com/google/sentencepiece"),h(ws,"rel","nofollow"),h(vr,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(yr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fn,"id","transformers.T5TokenizerFast"),h(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fn,"href","#transformers.T5TokenizerFast"),h(Kt,"class","relative group"),h(Ps,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),h(Ps,"rel","nofollow"),h(wr,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Cn,"id","transformers.T5Model"),h(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Cn,"href","#transformers.T5Model"),h(Zt,"class","relative group"),h(Gs,"href","https://arxiv.org/abs/1910.10683"),h(Gs,"rel","nofollow"),h(zr,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(Rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Rs,"rel","nofollow"),h(qr,"href","/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5Model"),h(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(An,"id","transformers.T5ForConditionalGeneration"),h(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(An,"href","#transformers.T5ForConditionalGeneration"),h(Xt,"class","relative group"),h(Xs,"href","https://arxiv.org/abs/1910.10683"),h(Xs,"rel","nofollow"),h(Er,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ta,"rel","nofollow"),h(jr,"href","/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Un,"id","transformers.T5EncoderModel"),h(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Un,"href","#transformers.T5EncoderModel"),h(en,"class","relative group"),h(da,"href","https://arxiv.org/abs/1910.10683"),h(da,"rel","nofollow"),h(Fr,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(pa,"rel","nofollow"),h(Mr,"href","/docs/transformers/v4.18.0/en/model_doc/t5#transformers.T5EncoderModel"),h(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vn,"id","transformers.TFT5Model"),h(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Vn,"href","#transformers.TFT5Model"),h(nn,"class","relative group"),h(Ta,"href","https://arxiv.org/abs/1910.10683"),h(Ta,"rel","nofollow"),h(Cr,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(ka,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(ka,"rel","nofollow"),h(Pr,"href","/docs/transformers/v4.18.0/en/model_doc/t5#transformers.TFT5Model"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jn,"id","transformers.TFT5ForConditionalGeneration"),h(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jn,"href","#transformers.TFT5ForConditionalGeneration"),h(sn,"class","relative group"),h(qa,"href","https://arxiv.org/abs/1910.10683"),h(qa,"rel","nofollow"),h(Nr,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Fa,"rel","nofollow"),h(Or,"href","/docs/transformers/v4.18.0/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),h(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(to,"id","transformers.TFT5EncoderModel"),h(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(to,"href","#transformers.TFT5EncoderModel"),h(rn,"class","relative group"),h(Oa,"href","https://arxiv.org/abs/1910.10683"),h(Oa,"rel","nofollow"),h(Lr,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ia,"rel","nofollow"),h(Ar,"href","/docs/transformers/v4.18.0/en/model_doc/t5#transformers.TFT5EncoderModel"),h(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ao,"id","transformers.FlaxT5Model"),h(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ao,"href","#transformers.FlaxT5Model"),h(ln,"class","relative group"),h(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(uo,"id","transformers.FlaxT5ForConditionalGeneration"),h(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(uo,"href","#transformers.FlaxT5ForConditionalGeneration"),h(pn,"class","relative group"),h(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,_){e(document.head,p),f(n,v,_),f(n,g,_),e(g,u),e(u,T),y(d,T,null),e(g,m),e(g,E),e(E,je),f(n,oe,_),f(n,j,_),e(j,ee),e(ee,S),y(se,S,null),e(j,Fe),e(j,G),e(G,Me),f(n,ye,_),f(n,U,_),e(U,A),e(U,ae),e(ae,pe),e(U,M),f(n,N,_),f(n,he,_),e(he,K),f(n,we,_),f(n,ue,_),e(ue,W),e(W,Ce),f(n,$e,_),f(n,P,_),e(P,Pe),f(n,H,_),f(n,V,_),e(V,_e),e(_e,O),e(O,Ne),e(O,ge),e(ge,I),e(O,Oe),e(O,R),e(R,Le),e(O,z),e(V,F),e(V,te),e(te,Ue),e(Ue,ot),e(V,D),e(V,We),e(We,ne),e(ne,st),e(ne,L),e(L,Y),e(ne,at),e(ne,Ae),e(Ae,Z),e(ne,rt),e(ne,Ie),e(Ie,De),e(ne,it),f(n,Gl,_),f(n,Qa,_),e(Qa,Ap),f(n,Ul,_),f(n,Re,_),e(Re,ri),e(ri,ii),e(ii,Ao),e(Ao,Ip),e(Re,Dp),e(Re,di),e(di,li),e(li,Io),e(Io,Sp),e(Re,Gp),e(Re,ci),e(ci,pi),e(pi,Do),e(Do,Up),e(Re,Wp),e(Re,hi),e(hi,ui),e(ui,So),e(So,Rp),e(Re,Bp),e(Re,mi),e(mi,er),e(er,Go),e(Go,Hp),e(er,Vp),f(n,Wl,_),f(n,tr,_),e(tr,Kp),f(n,Rl,_),f(n,qt,_),e(qt,fi),e(fi,fn),e(fn,_i),e(_i,Yp),e(fn,Zp),e(fn,nr),e(nr,Jp),e(fn,Xp),e(qt,Qp),e(qt,gi),e(gi,_n),e(_n,Ti),e(Ti,eh),e(_n,th),e(_n,or),e(or,nh),e(_n,oh),e(qt,sh),e(qt,vi),e(vi,gn),e(gn,bi),e(bi,ah),e(gn,rh),e(gn,sr),e(sr,ih),e(gn,dh),f(n,Bl,_),f(n,Tn,_),e(Tn,lh),e(Tn,Uo),e(Uo,ch),e(Tn,ph),f(n,Hl,_),f(n,Et,_),e(Et,hh),e(Et,Wo),e(Wo,uh),e(Et,mh),e(Et,Ro),e(Ro,fh),e(Et,_h),f(n,Vl,_),f(n,ar,_),f(n,Kl,_),f(n,It,_),e(It,vn),e(vn,ki),y(Bo,ki,null),e(It,gh),e(It,yi),e(yi,Th),f(n,Yl,_),f(n,dt,_),e(dt,vh),e(dt,wi),e(wi,bh),e(dt,kh),e(dt,$i),e($i,yh),e(dt,wh),e(dt,xi),e(xi,$h),e(dt,xh),f(n,Zl,_),f(n,bn,_),e(bn,zh),e(bn,rr),e(rr,qh),e(bn,Eh),f(n,Jl,_),f(n,kn,_),e(kn,Qe),e(Qe,zi),e(zi,jh),e(Qe,Fh),e(Qe,Te),e(Te,Mh),e(Te,qi),e(qi,Ch),e(Te,Ph),e(Te,Ei),e(Ei,Nh),e(Te,Oh),e(Te,ji),e(ji,Lh),e(Te,Ah),e(Te,Fi),e(Fi,Ih),e(Te,Dh),e(Te,Mi),e(Mi,Sh),e(Te,Gh),e(Te,ir),e(ir,Uh),e(Te,Wh),e(Qe,Rh),e(Qe,Ci),e(Ci,Bh),e(Qe,Hh),y(Ho,Qe,null),e(Qe,Vh),e(Qe,Vo),e(Vo,Kh),e(Vo,Ko),e(Ko,Yh),e(Vo,Zh),e(kn,Jh),e(kn,ve),e(ve,Pi),e(Pi,Xh),e(ve,Qh),e(ve,Ni),e(Ni,eu),e(ve,tu),y(Yo,ve,null),e(ve,nu),e(ve,re),e(re,ou),e(re,Oi),e(Oi,su),e(re,au),e(re,Li),e(Li,ru),e(re,iu),e(re,Ai),e(Ai,du),e(re,lu),e(re,Ii),e(Ii,cu),e(re,pu),e(re,Di),e(Di,hu),e(re,uu),e(re,Si),e(Si,mu),e(re,fu),e(re,Gi),e(Gi,_u),e(re,gu),e(ve,Tu),e(ve,Dt),e(Dt,vu),e(Dt,Ui),e(Ui,bu),e(Dt,ku),e(Dt,Wi),e(Wi,yu),e(Dt,wu),e(ve,$u),e(ve,be),e(be,xu),e(be,Ri),e(Ri,zu),e(be,qu),e(be,Bi),e(Bi,Eu),e(be,ju),e(be,Hi),e(Hi,Fu),e(be,Mu),e(be,Vi),e(Vi,Cu),e(be,Pu),e(be,Zo),e(Zo,Nu),e(be,Ou),e(be,Ki),e(Ki,Lu),e(be,Au),e(ve,Iu),y(Jo,ve,null),f(n,Xl,_),f(n,dr,_),e(dr,Du),f(n,Ql,_),f(n,jt,_),e(jt,Yi),e(Yi,Xo),e(Xo,Su),e(Xo,Zi),e(Zi,Gu),e(Xo,Uu),e(jt,Wu),e(jt,Ji),e(Ji,St),e(St,Ru),e(St,Qo),e(Qo,Bu),e(St,Hu),e(St,es),e(es,Vu),e(St,Ku),e(jt,Yu),e(jt,Xi),e(Xi,ts),e(ts,Zu),e(ts,Qi),e(Qi,Ju),e(ts,Xu),f(n,ec,_),f(n,lr,_),f(n,tc,_),f(n,Gt,_),e(Gt,yn),e(yn,ed),y(ns,ed,null),e(Gt,Qu),e(Gt,td),e(td,em),f(n,nc,_),f(n,lt,_),e(lt,tm),e(lt,cr),e(cr,nm),e(lt,om),e(lt,os),e(os,sm),e(lt,am),e(lt,ss),e(ss,rm),e(lt,im),f(n,oc,_),y(as,n,_),f(n,sc,_),f(n,Be,_),e(Be,dm),e(Be,nd),e(nd,lm),e(Be,cm),e(Be,od),e(od,pm),e(Be,hm),e(Be,pr),e(pr,um),e(Be,mm),e(Be,sd),e(sd,fm),e(Be,_m),f(n,ac,_),f(n,hr,_),e(hr,gm),f(n,rc,_),y(rs,n,_),f(n,ic,_),f(n,ur,_),f(n,dc,_),f(n,Ut,_),e(Ut,wn),e(wn,ad),y(is,ad,null),e(Ut,Tm),e(Ut,rd),e(rd,vm),f(n,lc,_),f(n,ct,_),e(ct,bm),e(ct,ds),e(ds,km),e(ct,ym),e(ct,id),e(id,wm),e(ct,$m),e(ct,dd),e(dd,xm),e(ct,zm),f(n,cc,_),f(n,Wt,_),e(Wt,$n),e($n,ld),y(ls,ld,null),e(Wt,qm),e(Wt,cd),e(cd,Em),f(n,pc,_),f(n,mr,_),e(mr,jm),f(n,hc,_),f(n,xn,_),e(xn,pd),e(pd,Rt),e(Rt,Fm),e(Rt,cs),e(cs,Mm),e(Rt,Cm),e(Rt,ps),e(ps,Pm),e(Rt,Nm),e(xn,Om),e(xn,hd),e(hd,Se),e(Se,Lm),e(Se,hs),e(hs,Am),e(Se,Im),e(Se,us),e(us,Dm),e(Se,Sm),e(Se,ms),e(ms,Gm),e(Se,Um),e(Se,fs),e(fs,Wm),e(Se,Rm),e(Se,_s),e(_s,Bm),e(Se,Hm),f(n,uc,_),f(n,Bt,_),e(Bt,zn),e(zn,ud),y(gs,ud,null),e(Bt,Vm),e(Bt,md),e(md,Km),f(n,mc,_),f(n,wt,_),y(Ts,wt,null),e(wt,Ym),e(wt,$t),e($t,Zm),e($t,fr),e(fr,Jm),e($t,Xm),e($t,_r),e(_r,Qm),e($t,ef),e($t,vs),e(vs,tf),e($t,nf),e(wt,of),e(wt,Ht),e(Ht,sf),e(Ht,gr),e(gr,af),e(Ht,rf),e(Ht,Tr),e(Tr,df),e(Ht,lf),f(n,fc,_),f(n,Vt,_),e(Vt,qn),e(qn,fd),y(bs,fd,null),e(Vt,cf),e(Vt,_d),e(_d,pf),f(n,_c,_),f(n,ie,_),y(ks,ie,null),e(ie,hf),e(ie,ys),e(ys,uf),e(ys,ws),e(ws,mf),e(ys,ff),e(ie,_f),e(ie,$s),e($s,gf),e($s,vr),e(vr,Tf),e($s,vf),e(ie,bf),e(ie,Ft),y(xs,Ft,null),e(Ft,kf),e(Ft,gd),e(gd,yf),e(Ft,wf),e(Ft,zs),e(zs,br),e(br,$f),e(br,Td),e(Td,xf),e(zs,zf),e(zs,kr),e(kr,qf),e(kr,vd),e(vd,Ef),e(ie,jf),e(ie,En),y(qs,En,null),e(En,Ff),e(En,Es),e(Es,Mf),e(Es,bd),e(bd,Cf),e(Es,Pf),e(ie,Nf),e(ie,jn),y(js,jn,null),e(jn,Of),e(jn,kd),e(kd,Lf),e(ie,Af),e(ie,yr),y(Fs,yr,null),f(n,gc,_),f(n,Kt,_),e(Kt,Fn),e(Fn,yd),y(Ms,yd,null),e(Kt,If),e(Kt,wd),e(wd,Df),f(n,Tc,_),f(n,Ge,_),y(Cs,Ge,null),e(Ge,Sf),e(Ge,Yt),e(Yt,Gf),e(Yt,$d),e($d,Uf),e(Yt,Wf),e(Yt,Ps),e(Ps,Rf),e(Yt,Bf),e(Ge,Hf),e(Ge,Ns),e(Ns,Vf),e(Ns,wr),e(wr,Kf),e(Ns,Yf),e(Ge,Zf),e(Ge,Mt),y(Os,Mt,null),e(Mt,Jf),e(Mt,xd),e(xd,Xf),e(Mt,Qf),e(Mt,Ls),e(Ls,$r),e($r,e_),e($r,zd),e(zd,t_),e(Ls,n_),e(Ls,xr),e(xr,o_),e(xr,qd),e(qd,s_),e(Ge,a_),e(Ge,Mn),y(As,Mn,null),e(Mn,r_),e(Mn,Ed),e(Ed,i_),f(n,vc,_),f(n,Zt,_),e(Zt,Cn),e(Cn,jd),y(Is,jd,null),e(Zt,d_),e(Zt,Fd),e(Fd,l_),f(n,bc,_),f(n,J,_),y(Ds,J,null),e(J,c_),e(J,Md),e(Md,p_),e(J,h_),e(J,Ss),e(Ss,u_),e(Ss,Gs),e(Gs,m_),e(Ss,f_),e(J,__),e(J,Us),e(Us,g_),e(Us,zr),e(zr,T_),e(Us,v_),e(J,b_),e(J,Ws),e(Ws,k_),e(Ws,Rs),e(Rs,y_),e(Ws,w_),e(J,$_),e(J,pt),y(Bs,pt,null),e(pt,x_),e(pt,Jt),e(Jt,z_),e(Jt,qr),e(qr,q_),e(Jt,E_),e(Jt,Cd),e(Cd,j_),e(Jt,F_),e(pt,M_),y(Pn,pt,null),e(pt,C_),y(Nn,pt,null),e(J,P_),e(J,ht),y(Hs,ht,null),e(ht,N_),e(ht,Pd),e(Pd,O_),e(ht,L_),e(ht,Nd),e(Nd,A_),e(ht,I_),y(On,ht,null),e(J,D_),e(J,Ct),y(Vs,Ct,null),e(Ct,S_),e(Ct,Od),e(Od,G_),e(Ct,U_),y(Ln,Ct,null),f(n,kc,_),f(n,Xt,_),e(Xt,An),e(An,Ld),y(Ks,Ld,null),e(Xt,W_),e(Xt,Ad),e(Ad,R_),f(n,yc,_),f(n,X,_),y(Ys,X,null),e(X,B_),e(X,Zs),e(Zs,H_),e(Zs,Id),e(Id,V_),e(Zs,K_),e(X,Y_),e(X,Js),e(Js,Z_),e(Js,Xs),e(Xs,J_),e(Js,X_),e(X,Q_),e(X,Qs),e(Qs,eg),e(Qs,Er),e(Er,tg),e(Qs,ng),e(X,og),e(X,ea),e(ea,sg),e(ea,ta),e(ta,ag),e(ea,rg),e(X,ig),e(X,ut),y(na,ut,null),e(ut,dg),e(ut,Qt),e(Qt,lg),e(Qt,jr),e(jr,cg),e(Qt,pg),e(Qt,Dd),e(Dd,hg),e(Qt,ug),e(ut,mg),y(In,ut,null),e(ut,fg),y(Dn,ut,null),e(X,_g),e(X,mt),y(oa,mt,null),e(mt,gg),e(mt,Sd),e(Sd,Tg),e(mt,vg),e(mt,Gd),e(Gd,bg),e(mt,kg),y(Sn,mt,null),e(X,yg),e(X,Pt),y(sa,Pt,null),e(Pt,wg),e(Pt,Ud),e(Ud,$g),e(Pt,xg),y(Gn,Pt,null),f(n,wc,_),f(n,en,_),e(en,Un),e(Un,Wd),y(aa,Wd,null),e(en,zg),e(en,Rd),e(Rd,qg),f(n,$c,_),f(n,Q,_),y(ra,Q,null),e(Q,Eg),e(Q,Bd),e(Bd,jg),e(Q,Fg),e(Q,ia),e(ia,Mg),e(ia,da),e(da,Cg),e(ia,Pg),e(Q,Ng),e(Q,la),e(la,Og),e(la,Fr),e(Fr,Lg),e(la,Ag),e(Q,Ig),e(Q,ca),e(ca,Dg),e(ca,pa),e(pa,Sg),e(ca,Gg),e(Q,Ug),e(Q,ft),y(ha,ft,null),e(ft,Wg),e(ft,tn),e(tn,Rg),e(tn,Mr),e(Mr,Bg),e(tn,Hg),e(tn,Hd),e(Hd,Vg),e(tn,Kg),e(ft,Yg),y(Wn,ft,null),e(ft,Zg),y(Rn,ft,null),e(Q,Jg),e(Q,_t),y(ua,_t,null),e(_t,Xg),e(_t,Vd),e(Vd,Qg),e(_t,eT),e(_t,Kd),e(Kd,tT),e(_t,nT),y(Bn,_t,null),e(Q,oT),e(Q,Nt),y(ma,Nt,null),e(Nt,sT),e(Nt,Yd),e(Yd,aT),e(Nt,rT),y(Hn,Nt,null),f(n,xc,_),f(n,nn,_),e(nn,Vn),e(Vn,Zd),y(fa,Zd,null),e(nn,iT),e(nn,Jd),e(Jd,dT),f(n,zc,_),f(n,de,_),y(_a,de,null),e(de,lT),e(de,Xd),e(Xd,cT),e(de,pT),e(de,ga),e(ga,hT),e(ga,Ta),e(Ta,uT),e(ga,mT),e(de,fT),e(de,va),e(va,_T),e(va,Cr),e(Cr,gT),e(va,TT),e(de,vT),e(de,ba),e(ba,bT),e(ba,ka),e(ka,kT),e(ba,yT),e(de,wT),y(Kn,de,null),e(de,$T),e(de,gt),y(ya,gt,null),e(gt,xT),e(gt,on),e(on,zT),e(on,Pr),e(Pr,qT),e(on,ET),e(on,Qd),e(Qd,jT),e(on,FT),e(gt,MT),y(Yn,gt,null),e(gt,CT),y(Zn,gt,null),f(n,qc,_),f(n,sn,_),e(sn,Jn),e(Jn,el),y(wa,el,null),e(sn,PT),e(sn,tl),e(tl,NT),f(n,Ec,_),f(n,le,_),y($a,le,null),e(le,OT),e(le,xa),e(xa,LT),e(xa,nl),e(nl,AT),e(xa,IT),e(le,DT),e(le,za),e(za,ST),e(za,qa),e(qa,GT),e(za,UT),e(le,WT),e(le,Ea),e(Ea,RT),e(Ea,Nr),e(Nr,BT),e(Ea,HT),e(le,VT),e(le,ja),e(ja,KT),e(ja,Fa),e(Fa,YT),e(ja,ZT),e(le,JT),y(Xn,le,null),e(le,XT),e(le,Tt),y(Ma,Tt,null),e(Tt,QT),e(Tt,an),e(an,ev),e(an,Or),e(Or,tv),e(an,nv),e(an,ol),e(ol,ov),e(an,sv),e(Tt,av),y(Qn,Tt,null),e(Tt,rv),y(eo,Tt,null),f(n,jc,_),f(n,rn,_),e(rn,to),e(to,sl),y(Ca,sl,null),e(rn,iv),e(rn,al),e(al,dv),f(n,Fc,_),f(n,ce,_),y(Pa,ce,null),e(ce,lv),e(ce,rl),e(rl,cv),e(ce,pv),e(ce,Na),e(Na,hv),e(Na,Oa),e(Oa,uv),e(Na,mv),e(ce,fv),e(ce,La),e(La,_v),e(La,Lr),e(Lr,gv),e(La,Tv),e(ce,vv),e(ce,Aa),e(Aa,bv),e(Aa,Ia),e(Ia,kv),e(Aa,yv),e(ce,wv),y(no,ce,null),e(ce,$v),e(ce,vt),y(Da,vt,null),e(vt,xv),e(vt,dn),e(dn,zv),e(dn,Ar),e(Ar,qv),e(dn,Ev),e(dn,il),e(il,jv),e(dn,Fv),e(vt,Mv),y(oo,vt,null),e(vt,Cv),y(so,vt,null),f(n,Mc,_),f(n,ln,_),e(ln,ao),e(ao,dl),y(Sa,dl,null),e(ln,Pv),e(ln,ll),e(ll,Nv),f(n,Cc,_),f(n,et,_),y(Ga,et,null),e(et,Ov),e(et,bt),y(Ua,bt,null),e(bt,Lv),e(bt,cn),e(cn,Av),e(cn,cl),e(cl,Iv),e(cn,Dv),e(cn,pl),e(pl,Sv),e(cn,Gv),e(bt,Uv),y(ro,bt,null),e(bt,Wv),y(io,bt,null),e(et,Rv),e(et,lo),y(Wa,lo,null),e(lo,Bv),y(co,lo,null),e(et,Hv),e(et,po),y(Ra,po,null),e(po,Vv),y(ho,po,null),f(n,Pc,_),f(n,pn,_),e(pn,uo),e(uo,hl),y(Ba,hl,null),e(pn,Kv),e(pn,ul),e(ul,Yv),f(n,Nc,_),f(n,tt,_),y(Ha,tt,null),e(tt,Zv),e(tt,kt),y(Va,kt,null),e(kt,Jv),e(kt,hn),e(hn,Xv),e(hn,ml),e(ml,Qv),e(hn,eb),e(hn,fl),e(fl,tb),e(hn,nb),e(kt,ob),y(mo,kt,null),e(kt,sb),y(fo,kt,null),e(tt,ab),e(tt,_o),y(Ka,_o,null),e(_o,rb),y(go,_o,null),e(tt,ib),e(tt,To),y(Ya,To,null),e(To,db),y(vo,To,null),Oc=!0},p(n,[_]){const Za={};_&2&&(Za.$$scope={dirty:_,ctx:n}),Pn.$set(Za);const _l={};_&2&&(_l.$$scope={dirty:_,ctx:n}),Nn.$set(_l);const gl={};_&2&&(gl.$$scope={dirty:_,ctx:n}),On.$set(gl);const Tl={};_&2&&(Tl.$$scope={dirty:_,ctx:n}),Ln.$set(Tl);const Ja={};_&2&&(Ja.$$scope={dirty:_,ctx:n}),In.$set(Ja);const vl={};_&2&&(vl.$$scope={dirty:_,ctx:n}),Dn.$set(vl);const bl={};_&2&&(bl.$$scope={dirty:_,ctx:n}),Sn.$set(bl);const kl={};_&2&&(kl.$$scope={dirty:_,ctx:n}),Gn.$set(kl);const Xa={};_&2&&(Xa.$$scope={dirty:_,ctx:n}),Wn.$set(Xa);const yl={};_&2&&(yl.$$scope={dirty:_,ctx:n}),Rn.$set(yl);const wl={};_&2&&(wl.$$scope={dirty:_,ctx:n}),Bn.$set(wl);const $l={};_&2&&($l.$$scope={dirty:_,ctx:n}),Hn.$set($l);const xl={};_&2&&(xl.$$scope={dirty:_,ctx:n}),Kn.$set(xl);const zl={};_&2&&(zl.$$scope={dirty:_,ctx:n}),Yn.$set(zl);const un={};_&2&&(un.$$scope={dirty:_,ctx:n}),Zn.$set(un);const ql={};_&2&&(ql.$$scope={dirty:_,ctx:n}),Xn.$set(ql);const mn={};_&2&&(mn.$$scope={dirty:_,ctx:n}),Qn.$set(mn);const El={};_&2&&(El.$$scope={dirty:_,ctx:n}),eo.$set(El);const jl={};_&2&&(jl.$$scope={dirty:_,ctx:n}),no.$set(jl);const Fl={};_&2&&(Fl.$$scope={dirty:_,ctx:n}),oo.$set(Fl);const Ml={};_&2&&(Ml.$$scope={dirty:_,ctx:n}),so.$set(Ml);const Cl={};_&2&&(Cl.$$scope={dirty:_,ctx:n}),ro.$set(Cl);const xt={};_&2&&(xt.$$scope={dirty:_,ctx:n}),io.$set(xt);const Pl={};_&2&&(Pl.$$scope={dirty:_,ctx:n}),co.$set(Pl);const Nl={};_&2&&(Nl.$$scope={dirty:_,ctx:n}),ho.$set(Nl);const Ol={};_&2&&(Ol.$$scope={dirty:_,ctx:n}),mo.$set(Ol);const Ll={};_&2&&(Ll.$$scope={dirty:_,ctx:n}),fo.$set(Ll);const nt={};_&2&&(nt.$$scope={dirty:_,ctx:n}),go.$set(nt);const Al={};_&2&&(Al.$$scope={dirty:_,ctx:n}),vo.$set(Al)},i(n){Oc||(w(d.$$.fragment,n),w(se.$$.fragment,n),w(Bo.$$.fragment,n),w(Ho.$$.fragment,n),w(Yo.$$.fragment,n),w(Jo.$$.fragment,n),w(ns.$$.fragment,n),w(as.$$.fragment,n),w(rs.$$.fragment,n),w(is.$$.fragment,n),w(ls.$$.fragment,n),w(gs.$$.fragment,n),w(Ts.$$.fragment,n),w(bs.$$.fragment,n),w(ks.$$.fragment,n),w(xs.$$.fragment,n),w(qs.$$.fragment,n),w(js.$$.fragment,n),w(Fs.$$.fragment,n),w(Ms.$$.fragment,n),w(Cs.$$.fragment,n),w(Os.$$.fragment,n),w(As.$$.fragment,n),w(Is.$$.fragment,n),w(Ds.$$.fragment,n),w(Bs.$$.fragment,n),w(Pn.$$.fragment,n),w(Nn.$$.fragment,n),w(Hs.$$.fragment,n),w(On.$$.fragment,n),w(Vs.$$.fragment,n),w(Ln.$$.fragment,n),w(Ks.$$.fragment,n),w(Ys.$$.fragment,n),w(na.$$.fragment,n),w(In.$$.fragment,n),w(Dn.$$.fragment,n),w(oa.$$.fragment,n),w(Sn.$$.fragment,n),w(sa.$$.fragment,n),w(Gn.$$.fragment,n),w(aa.$$.fragment,n),w(ra.$$.fragment,n),w(ha.$$.fragment,n),w(Wn.$$.fragment,n),w(Rn.$$.fragment,n),w(ua.$$.fragment,n),w(Bn.$$.fragment,n),w(ma.$$.fragment,n),w(Hn.$$.fragment,n),w(fa.$$.fragment,n),w(_a.$$.fragment,n),w(Kn.$$.fragment,n),w(ya.$$.fragment,n),w(Yn.$$.fragment,n),w(Zn.$$.fragment,n),w(wa.$$.fragment,n),w($a.$$.fragment,n),w(Xn.$$.fragment,n),w(Ma.$$.fragment,n),w(Qn.$$.fragment,n),w(eo.$$.fragment,n),w(Ca.$$.fragment,n),w(Pa.$$.fragment,n),w(no.$$.fragment,n),w(Da.$$.fragment,n),w(oo.$$.fragment,n),w(so.$$.fragment,n),w(Sa.$$.fragment,n),w(Ga.$$.fragment,n),w(Ua.$$.fragment,n),w(ro.$$.fragment,n),w(io.$$.fragment,n),w(Wa.$$.fragment,n),w(co.$$.fragment,n),w(Ra.$$.fragment,n),w(ho.$$.fragment,n),w(Ba.$$.fragment,n),w(Ha.$$.fragment,n),w(Va.$$.fragment,n),w(mo.$$.fragment,n),w(fo.$$.fragment,n),w(Ka.$$.fragment,n),w(go.$$.fragment,n),w(Ya.$$.fragment,n),w(vo.$$.fragment,n),Oc=!0)},o(n){$(d.$$.fragment,n),$(se.$$.fragment,n),$(Bo.$$.fragment,n),$(Ho.$$.fragment,n),$(Yo.$$.fragment,n),$(Jo.$$.fragment,n),$(ns.$$.fragment,n),$(as.$$.fragment,n),$(rs.$$.fragment,n),$(is.$$.fragment,n),$(ls.$$.fragment,n),$(gs.$$.fragment,n),$(Ts.$$.fragment,n),$(bs.$$.fragment,n),$(ks.$$.fragment,n),$(xs.$$.fragment,n),$(qs.$$.fragment,n),$(js.$$.fragment,n),$(Fs.$$.fragment,n),$(Ms.$$.fragment,n),$(Cs.$$.fragment,n),$(Os.$$.fragment,n),$(As.$$.fragment,n),$(Is.$$.fragment,n),$(Ds.$$.fragment,n),$(Bs.$$.fragment,n),$(Pn.$$.fragment,n),$(Nn.$$.fragment,n),$(Hs.$$.fragment,n),$(On.$$.fragment,n),$(Vs.$$.fragment,n),$(Ln.$$.fragment,n),$(Ks.$$.fragment,n),$(Ys.$$.fragment,n),$(na.$$.fragment,n),$(In.$$.fragment,n),$(Dn.$$.fragment,n),$(oa.$$.fragment,n),$(Sn.$$.fragment,n),$(sa.$$.fragment,n),$(Gn.$$.fragment,n),$(aa.$$.fragment,n),$(ra.$$.fragment,n),$(ha.$$.fragment,n),$(Wn.$$.fragment,n),$(Rn.$$.fragment,n),$(ua.$$.fragment,n),$(Bn.$$.fragment,n),$(ma.$$.fragment,n),$(Hn.$$.fragment,n),$(fa.$$.fragment,n),$(_a.$$.fragment,n),$(Kn.$$.fragment,n),$(ya.$$.fragment,n),$(Yn.$$.fragment,n),$(Zn.$$.fragment,n),$(wa.$$.fragment,n),$($a.$$.fragment,n),$(Xn.$$.fragment,n),$(Ma.$$.fragment,n),$(Qn.$$.fragment,n),$(eo.$$.fragment,n),$(Ca.$$.fragment,n),$(Pa.$$.fragment,n),$(no.$$.fragment,n),$(Da.$$.fragment,n),$(oo.$$.fragment,n),$(so.$$.fragment,n),$(Sa.$$.fragment,n),$(Ga.$$.fragment,n),$(Ua.$$.fragment,n),$(ro.$$.fragment,n),$(io.$$.fragment,n),$(Wa.$$.fragment,n),$(co.$$.fragment,n),$(Ra.$$.fragment,n),$(ho.$$.fragment,n),$(Ba.$$.fragment,n),$(Ha.$$.fragment,n),$(Va.$$.fragment,n),$(mo.$$.fragment,n),$(fo.$$.fragment,n),$(Ka.$$.fragment,n),$(go.$$.fragment,n),$(Ya.$$.fragment,n),$(vo.$$.fragment,n),Oc=!1},d(n){t(p),n&&t(v),n&&t(g),x(d),n&&t(oe),n&&t(j),x(se),n&&t(ye),n&&t(U),n&&t(N),n&&t(he),n&&t(we),n&&t(ue),n&&t($e),n&&t(P),n&&t(H),n&&t(V),n&&t(Gl),n&&t(Qa),n&&t(Ul),n&&t(Re),n&&t(Wl),n&&t(tr),n&&t(Rl),n&&t(qt),n&&t(Bl),n&&t(Tn),n&&t(Hl),n&&t(Et),n&&t(Vl),n&&t(ar),n&&t(Kl),n&&t(It),x(Bo),n&&t(Yl),n&&t(dt),n&&t(Zl),n&&t(bn),n&&t(Jl),n&&t(kn),x(Ho),x(Yo),x(Jo),n&&t(Xl),n&&t(dr),n&&t(Ql),n&&t(jt),n&&t(ec),n&&t(lr),n&&t(tc),n&&t(Gt),x(ns),n&&t(nc),n&&t(lt),n&&t(oc),x(as,n),n&&t(sc),n&&t(Be),n&&t(ac),n&&t(hr),n&&t(rc),x(rs,n),n&&t(ic),n&&t(ur),n&&t(dc),n&&t(Ut),x(is),n&&t(lc),n&&t(ct),n&&t(cc),n&&t(Wt),x(ls),n&&t(pc),n&&t(mr),n&&t(hc),n&&t(xn),n&&t(uc),n&&t(Bt),x(gs),n&&t(mc),n&&t(wt),x(Ts),n&&t(fc),n&&t(Vt),x(bs),n&&t(_c),n&&t(ie),x(ks),x(xs),x(qs),x(js),x(Fs),n&&t(gc),n&&t(Kt),x(Ms),n&&t(Tc),n&&t(Ge),x(Cs),x(Os),x(As),n&&t(vc),n&&t(Zt),x(Is),n&&t(bc),n&&t(J),x(Ds),x(Bs),x(Pn),x(Nn),x(Hs),x(On),x(Vs),x(Ln),n&&t(kc),n&&t(Xt),x(Ks),n&&t(yc),n&&t(X),x(Ys),x(na),x(In),x(Dn),x(oa),x(Sn),x(sa),x(Gn),n&&t(wc),n&&t(en),x(aa),n&&t($c),n&&t(Q),x(ra),x(ha),x(Wn),x(Rn),x(ua),x(Bn),x(ma),x(Hn),n&&t(xc),n&&t(nn),x(fa),n&&t(zc),n&&t(de),x(_a),x(Kn),x(ya),x(Yn),x(Zn),n&&t(qc),n&&t(sn),x(wa),n&&t(Ec),n&&t(le),x($a),x(Xn),x(Ma),x(Qn),x(eo),n&&t(jc),n&&t(rn),x(Ca),n&&t(Fc),n&&t(ce),x(Pa),x(no),x(Da),x(oo),x(so),n&&t(Mc),n&&t(ln),x(Sa),n&&t(Cc),n&&t(et),x(Ga),x(Ua),x(ro),x(io),x(Wa),x(co),x(Ra),x(ho),n&&t(Pc),n&&t(pn),x(Ba),n&&t(Nc),n&&t(tt),x(Ha),x(Va),x(mo),x(fo),x(Ka),x(go),x(Ya),x(vo)}}}const C5={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"}],title:"T5"};function P5(q){return t5(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class S5 extends Jy{constructor(p){super();Xy(this,p,P5,M5,Qy,{})}}export{S5 as default,C5 as metadata};
