import{S as qw,i as Fw,s as Mw,e as a,k as d,w as k,t as o,M as Cw,c as r,d as t,m as c,a as i,x as v,h as s,b as h,G as e,g as m,y,q as w,o as $,B as x,v as Pw,L as ve}from"../../chunks/vendor-hf-doc-builder.js";import{T as Dt}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as H}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as be}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ke}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ow(j){let p,b,g,_,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){m(l,p,u),e(p,b),e(p,g),e(g,_),e(p,T)},d(l){l&&t(p)}}}function Nw(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, T5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Aw(j){let p,b,g,_,T;return _=new H({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Lw(j){let p,b,g,_,T;return _=new H({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Iw(j){let p,b,g,_,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){m(l,p,u),e(p,b),e(p,g),e(g,_),e(p,T)},d(l){l&&t(p)}}}function Dw(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),{c(){p=a("p"),b=o("Examples:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Examples:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Sw(j){let p,b,g,_,T;return _=new H({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Gw(j){let p,b,g,_,T;return _=new H({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Uw(j){let p,b,g,_,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){m(l,p,u),e(p,b),e(p,g),e(g,_),e(p,T)},d(l){l&&t(p)}}}function Ww(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Bw(j){let p,b,g,_,T;return _=new H({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Rw(j){let p,b,g,_,T;return _=new H({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Hw(j){let p,b,g,_,T,l,u,q,Ge,qe,S,re,ie,E,Ue,K,We,Fe,G,Be,de,J,Re,Me,U,He,Ce,W,ye,Ke,ce,C,O,Pe,D,we,X,Q,$e,Ve,N,xe,ee,Ye,Ze,V,ze,Je,B,je,I,Xe,te,A,Qe,L,et,tt;return{c(){p=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),_=o("transformers"),T=o(" accept two formats as input:"),l=d(),u=a("ul"),q=a("li"),Ge=o("having all inputs as keyword arguments (like PyTorch models), or"),qe=d(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ie=d(),E=a("p"),Ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),We=o("model.fit()"),Fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Be=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Re=o("fit()"),Me=o(" and "),U=a("code"),He=o("predict()"),Ce=o(`, such as when creating your own layers or models with
the Keras `),W=a("code"),ye=o("Functional"),Ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ce=d(),C=a("ul"),O=a("li"),Pe=o("a single Tensor with "),D=a("code"),we=o("input_ids"),X=o(" only and nothing else: "),Q=a("code"),$e=o("model(input_ids)"),Ve=d(),N=a("li"),xe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=a("code"),Ye=o("model([input_ids, attention_mask])"),Ze=o(" or "),V=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Je=d(),B=a("li"),je=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=d(),A=a("p"),Qe=o(`Note that when creating models and layers with
`),L=a("a"),et=o("subclassing"),tt=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){p=r(z,"P",{});var F=i(p);b=s(F,"TensorFlow models and layers in "),g=r(F,"CODE",{});var bt=i(g);_=s(bt,"transformers"),bt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=c(z),u=r(z,"UL",{});var pe=i(u);q=r(pe,"LI",{});var nt=i(q);Ge=s(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),qe=c(pe),S=r(pe,"LI",{});var kt=i(S);re=s(kt,"having all inputs as a list, tuple or dict in the first positional argument."),kt.forEach(t),pe.forEach(t),ie=c(z),E=r(z,"P",{});var M=i(E);Ue=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(M,"CODE",{});var Y=i(K);We=s(Y,"model.fit()"),Y.forEach(t),Fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(M,"CODE",{});var at=i(G);Be=s(at,"model.fit()"),at.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(M,"CODE",{});var rt=i(J);Re=s(rt,"fit()"),rt.forEach(t),Me=s(M," and "),U=r(M,"CODE",{});var Oe=i(U);He=s(Oe,"predict()"),Oe.forEach(t),Ce=s(M,`, such as when creating your own layers or models with
the Keras `),W=r(M,"CODE",{});var vt=i(W);ye=s(vt,"Functional"),vt.forEach(t),Ke=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ce=c(z),C=r(z,"UL",{});var R=i(C);O=r(R,"LI",{});var Z=i(O);Pe=s(Z,"a single Tensor with "),D=r(Z,"CODE",{});var it=i(D);we=s(it,"input_ids"),it.forEach(t),X=s(Z," only and nothing else: "),Q=r(Z,"CODE",{});var Ne=i(Q);$e=s(Ne,"model(input_ids)"),Ne.forEach(t),Z.forEach(t),Ve=c(R),N=r(R,"LI",{});var ne=i(N);xe=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(ne,"CODE",{});var yt=i(ee);Ye=s(yt,"model([input_ids, attention_mask])"),yt.forEach(t),Ze=s(ne," or "),V=r(ne,"CODE",{});var lt=i(V);ze=s(lt,"model([input_ids, attention_mask, token_type_ids])"),lt.forEach(t),ne.forEach(t),Je=c(R),B=r(R,"LI",{});var Ee=i(B);je=s(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Ee,"CODE",{});var Ae=i(I);Xe=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ee.forEach(t),R.forEach(t),te=c(z),A=r(z,"P",{});var _e=i(A);Qe=s(_e,`Note that when creating models and layers with
`),L=r(_e,"A",{href:!0,rel:!0});var wt=i(L);et=s(wt,"subclassing"),wt.forEach(t),tt=s(_e,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),_e.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(z,F){m(z,p,F),e(p,b),e(p,g),e(g,_),e(p,T),m(z,l,F),m(z,u,F),e(u,q),e(q,Ge),e(u,qe),e(u,S),e(S,re),m(z,ie,F),m(z,E,F),e(E,Ue),e(E,K),e(K,We),e(E,Fe),e(E,G),e(G,Be),e(E,de),e(E,J),e(J,Re),e(E,Me),e(E,U),e(U,He),e(E,Ce),e(E,W),e(W,ye),e(E,Ke),m(z,ce,F),m(z,C,F),e(C,O),e(O,Pe),e(O,D),e(D,we),e(O,X),e(O,Q),e(Q,$e),e(C,Ve),e(C,N),e(N,xe),e(N,ee),e(ee,Ye),e(N,Ze),e(N,V),e(V,ze),e(C,Je),e(C,B),e(B,je),e(B,I),e(I,Xe),m(z,te,F),m(z,A,F),e(A,Qe),e(A,L),e(L,et),e(A,tt)},d(z){z&&t(p),z&&t(l),z&&t(u),z&&t(ie),z&&t(E),z&&t(ce),z&&t(C),z&&t(te),z&&t(A)}}}function Kw(j){let p,b,g,_,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){m(l,p,u),e(p,b),e(p,g),e(g,_),e(p,T)},d(l){l&&t(p)}}}function Vw(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, TFT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),b=o("Examples:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Examples:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Yw(j){let p,b,g,_,T,l,u,q,Ge,qe,S,re,ie,E,Ue,K,We,Fe,G,Be,de,J,Re,Me,U,He,Ce,W,ye,Ke,ce,C,O,Pe,D,we,X,Q,$e,Ve,N,xe,ee,Ye,Ze,V,ze,Je,B,je,I,Xe,te,A,Qe,L,et,tt;return{c(){p=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),_=o("transformers"),T=o(" accept two formats as input:"),l=d(),u=a("ul"),q=a("li"),Ge=o("having all inputs as keyword arguments (like PyTorch models), or"),qe=d(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ie=d(),E=a("p"),Ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),We=o("model.fit()"),Fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Be=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Re=o("fit()"),Me=o(" and "),U=a("code"),He=o("predict()"),Ce=o(`, such as when creating your own layers or models with
the Keras `),W=a("code"),ye=o("Functional"),Ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ce=d(),C=a("ul"),O=a("li"),Pe=o("a single Tensor with "),D=a("code"),we=o("input_ids"),X=o(" only and nothing else: "),Q=a("code"),$e=o("model(input_ids)"),Ve=d(),N=a("li"),xe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=a("code"),Ye=o("model([input_ids, attention_mask])"),Ze=o(" or "),V=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Je=d(),B=a("li"),je=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=d(),A=a("p"),Qe=o(`Note that when creating models and layers with
`),L=a("a"),et=o("subclassing"),tt=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){p=r(z,"P",{});var F=i(p);b=s(F,"TensorFlow models and layers in "),g=r(F,"CODE",{});var bt=i(g);_=s(bt,"transformers"),bt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=c(z),u=r(z,"UL",{});var pe=i(u);q=r(pe,"LI",{});var nt=i(q);Ge=s(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),qe=c(pe),S=r(pe,"LI",{});var kt=i(S);re=s(kt,"having all inputs as a list, tuple or dict in the first positional argument."),kt.forEach(t),pe.forEach(t),ie=c(z),E=r(z,"P",{});var M=i(E);Ue=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(M,"CODE",{});var Y=i(K);We=s(Y,"model.fit()"),Y.forEach(t),Fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(M,"CODE",{});var at=i(G);Be=s(at,"model.fit()"),at.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(M,"CODE",{});var rt=i(J);Re=s(rt,"fit()"),rt.forEach(t),Me=s(M," and "),U=r(M,"CODE",{});var Oe=i(U);He=s(Oe,"predict()"),Oe.forEach(t),Ce=s(M,`, such as when creating your own layers or models with
the Keras `),W=r(M,"CODE",{});var vt=i(W);ye=s(vt,"Functional"),vt.forEach(t),Ke=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ce=c(z),C=r(z,"UL",{});var R=i(C);O=r(R,"LI",{});var Z=i(O);Pe=s(Z,"a single Tensor with "),D=r(Z,"CODE",{});var it=i(D);we=s(it,"input_ids"),it.forEach(t),X=s(Z," only and nothing else: "),Q=r(Z,"CODE",{});var Ne=i(Q);$e=s(Ne,"model(input_ids)"),Ne.forEach(t),Z.forEach(t),Ve=c(R),N=r(R,"LI",{});var ne=i(N);xe=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(ne,"CODE",{});var yt=i(ee);Ye=s(yt,"model([input_ids, attention_mask])"),yt.forEach(t),Ze=s(ne," or "),V=r(ne,"CODE",{});var lt=i(V);ze=s(lt,"model([input_ids, attention_mask, token_type_ids])"),lt.forEach(t),ne.forEach(t),Je=c(R),B=r(R,"LI",{});var Ee=i(B);je=s(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Ee,"CODE",{});var Ae=i(I);Xe=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ee.forEach(t),R.forEach(t),te=c(z),A=r(z,"P",{});var _e=i(A);Qe=s(_e,`Note that when creating models and layers with
`),L=r(_e,"A",{href:!0,rel:!0});var wt=i(L);et=s(wt,"subclassing"),wt.forEach(t),tt=s(_e,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),_e.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(z,F){m(z,p,F),e(p,b),e(p,g),e(g,_),e(p,T),m(z,l,F),m(z,u,F),e(u,q),e(q,Ge),e(u,qe),e(u,S),e(S,re),m(z,ie,F),m(z,E,F),e(E,Ue),e(E,K),e(K,We),e(E,Fe),e(E,G),e(G,Be),e(E,de),e(E,J),e(J,Re),e(E,Me),e(E,U),e(U,He),e(E,Ce),e(E,W),e(W,ye),e(E,Ke),m(z,ce,F),m(z,C,F),e(C,O),e(O,Pe),e(O,D),e(D,we),e(O,X),e(O,Q),e(Q,$e),e(C,Ve),e(C,N),e(N,xe),e(N,ee),e(ee,Ye),e(N,Ze),e(N,V),e(V,ze),e(C,Je),e(C,B),e(B,je),e(B,I),e(I,Xe),m(z,te,F),m(z,A,F),e(A,Qe),e(A,L),e(L,et),e(A,tt)},d(z){z&&t(p),z&&t(l),z&&t(u),z&&t(ie),z&&t(E),z&&t(ce),z&&t(C),z&&t(te),z&&t(A)}}}function Zw(j){let p,b,g,_,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){m(l,p,u),e(p,b),e(p,g),e(g,_),e(p,T)},d(l){l&&t(p)}}}function Jw(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),{c(){p=a("p"),b=o("Examples:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Examples:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function Xw(j){let p,b,g,_,T,l,u,q,Ge,qe,S,re,ie,E,Ue,K,We,Fe,G,Be,de,J,Re,Me,U,He,Ce,W,ye,Ke,ce,C,O,Pe,D,we,X,Q,$e,Ve,N,xe,ee,Ye,Ze,V,ze,Je,B,je,I,Xe,te,A,Qe,L,et,tt;return{c(){p=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),_=o("transformers"),T=o(" accept two formats as input:"),l=d(),u=a("ul"),q=a("li"),Ge=o("having all inputs as keyword arguments (like PyTorch models), or"),qe=d(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ie=d(),E=a("p"),Ue=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),We=o("model.fit()"),Fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Be=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Re=o("fit()"),Me=o(" and "),U=a("code"),He=o("predict()"),Ce=o(`, such as when creating your own layers or models with
the Keras `),W=a("code"),ye=o("Functional"),Ke=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ce=d(),C=a("ul"),O=a("li"),Pe=o("a single Tensor with "),D=a("code"),we=o("input_ids"),X=o(" only and nothing else: "),Q=a("code"),$e=o("model(input_ids)"),Ve=d(),N=a("li"),xe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=a("code"),Ye=o("model([input_ids, attention_mask])"),Ze=o(" or "),V=a("code"),ze=o("model([input_ids, attention_mask, token_type_ids])"),Je=d(),B=a("li"),je=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=d(),A=a("p"),Qe=o(`Note that when creating models and layers with
`),L=a("a"),et=o("subclassing"),tt=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){p=r(z,"P",{});var F=i(p);b=s(F,"TensorFlow models and layers in "),g=r(F,"CODE",{});var bt=i(g);_=s(bt,"transformers"),bt.forEach(t),T=s(F," accept two formats as input:"),F.forEach(t),l=c(z),u=r(z,"UL",{});var pe=i(u);q=r(pe,"LI",{});var nt=i(q);Ge=s(nt,"having all inputs as keyword arguments (like PyTorch models), or"),nt.forEach(t),qe=c(pe),S=r(pe,"LI",{});var kt=i(S);re=s(kt,"having all inputs as a list, tuple or dict in the first positional argument."),kt.forEach(t),pe.forEach(t),ie=c(z),E=r(z,"P",{});var M=i(E);Ue=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(M,"CODE",{});var Y=i(K);We=s(Y,"model.fit()"),Y.forEach(t),Fe=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(M,"CODE",{});var at=i(G);Be=s(at,"model.fit()"),at.forEach(t),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(M,"CODE",{});var rt=i(J);Re=s(rt,"fit()"),rt.forEach(t),Me=s(M," and "),U=r(M,"CODE",{});var Oe=i(U);He=s(Oe,"predict()"),Oe.forEach(t),Ce=s(M,`, such as when creating your own layers or models with
the Keras `),W=r(M,"CODE",{});var vt=i(W);ye=s(vt,"Functional"),vt.forEach(t),Ke=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),ce=c(z),C=r(z,"UL",{});var R=i(C);O=r(R,"LI",{});var Z=i(O);Pe=s(Z,"a single Tensor with "),D=r(Z,"CODE",{});var it=i(D);we=s(it,"input_ids"),it.forEach(t),X=s(Z," only and nothing else: "),Q=r(Z,"CODE",{});var Ne=i(Q);$e=s(Ne,"model(input_ids)"),Ne.forEach(t),Z.forEach(t),Ve=c(R),N=r(R,"LI",{});var ne=i(N);xe=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(ne,"CODE",{});var yt=i(ee);Ye=s(yt,"model([input_ids, attention_mask])"),yt.forEach(t),Ze=s(ne," or "),V=r(ne,"CODE",{});var lt=i(V);ze=s(lt,"model([input_ids, attention_mask, token_type_ids])"),lt.forEach(t),ne.forEach(t),Je=c(R),B=r(R,"LI",{});var Ee=i(B);je=s(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(Ee,"CODE",{});var Ae=i(I);Xe=s(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),Ee.forEach(t),R.forEach(t),te=c(z),A=r(z,"P",{});var _e=i(A);Qe=s(_e,`Note that when creating models and layers with
`),L=r(_e,"A",{href:!0,rel:!0});var wt=i(L);et=s(wt,"subclassing"),wt.forEach(t),tt=s(_e,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),_e.forEach(t),this.h()},h(){h(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),h(L,"rel","nofollow")},m(z,F){m(z,p,F),e(p,b),e(p,g),e(g,_),e(p,T),m(z,l,F),m(z,u,F),e(u,q),e(q,Ge),e(u,qe),e(u,S),e(S,re),m(z,ie,F),m(z,E,F),e(E,Ue),e(E,K),e(K,We),e(E,Fe),e(E,G),e(G,Be),e(E,de),e(E,J),e(J,Re),e(E,Me),e(E,U),e(U,He),e(E,Ce),e(E,W),e(W,ye),e(E,Ke),m(z,ce,F),m(z,C,F),e(C,O),e(O,Pe),e(O,D),e(D,we),e(O,X),e(O,Q),e(Q,$e),e(C,Ve),e(C,N),e(N,xe),e(N,ee),e(ee,Ye),e(N,Ze),e(N,V),e(V,ze),e(C,Je),e(C,B),e(B,je),e(B,I),e(I,Xe),m(z,te,F),m(z,A,F),e(A,Qe),e(A,L),e(L,et),e(A,tt)},d(z){z&&t(p),z&&t(l),z&&t(u),z&&t(ie),z&&t(E),z&&t(ce),z&&t(C),z&&t(te),z&&t(A)}}}function Qw(j){let p,b,g,_,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){m(l,p,u),e(p,b),e(p,g),e(g,_),e(p,T)},d(l){l&&t(p)}}}function e1(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){p=a("p"),b=o("Examples:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Examples:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function t1(j){let p,b,g,_,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){m(l,p,u),e(p,b),e(p,g),e(g,_),e(p,T)},d(l){l&&t(p)}}}function n1(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function o1(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function s1(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function a1(j){let p,b,g,_,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){m(l,p,u),e(p,b),e(p,g),e(g,_),e(p,T)},d(l){l&&t(p)}}}function r1(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function i1(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function l1(j){let p,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Example:"),u.forEach(t),g=c(l),v(_.$$.fragment,l)},m(l,u){m(l,p,u),e(p,b),m(l,g,u),y(_,l,u),T=!0},p:ve,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&t(p),l&&t(g),x(_,l)}}}function d1(j){let p,b,g,_,T;return{c(){p=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){p=r(l,"P",{});var u=i(p);b=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(t),T=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){m(l,p,u),e(p,b),e(p,g),e(g,_),e(p,T)},d(l){l&&t(p)}}}function c1(j){let p,b,g,_,T,l,u,q,Ge,qe,S,re,ie,E,Ue,K,We,Fe,G,Be,de,J,Re,Me,U,He,Ce,W,ye,Ke,ce,C,O,Pe,D,we,X,Q,$e,Ve,N,xe,ee,Ye,Ze,V,ze,Je,B,je,I,Xe,te,A,Qe,L,et,tt,z,F,bt,pe,nt,kt,M,Y,at,rt,Oe,vt,R,Z,it,Ne,ne,yt,lt,Ee,Ae,_e,wt,Pi,Oi,ss,bh,kh,Ni,br,as,vh,yh,ic,kr,wh,lc,Wt,Ai,Pn,Li,$h,xh,vr,zh,jh,Eh,Ii,On,Di,qh,Fh,yr,Mh,Ch,Ph,Si,Nn,Gi,Oh,Nh,wr,Ah,Lh,dc,An,Ih,rs,Dh,Sh,cc,Bt,Gh,is,Uh,Wh,ls,Bh,Rh,pc,$r,hc,tn,Ln,Ui,ds,Hh,Wi,Kh,uc,$t,Vh,Bi,Yh,Zh,Ri,Jh,Xh,Hi,Qh,eu,mc,In,tu,xr,nu,ou,fc,zr,Ki,su,_c,ge,au,Vi,ru,iu,Yi,lu,du,Zi,cu,pu,Ji,hu,uu,Xi,mu,fu,jr,_u,gu,gc,Er,Tu,Tc,cs,bc,Dn,bu,ps,ku,vu,kc,qr,Qi,yu,vc,Fr,wu,yc,hs,wc,le,$u,el,xu,zu,tl,ju,Eu,nl,qu,Fu,ol,Mu,Cu,sl,Pu,Ou,al,Nu,Au,rl,Lu,Iu,$c,Rt,Du,il,Su,Gu,ll,Uu,Wu,xc,Te,Bu,dl,Ru,Hu,cl,Ku,Vu,pl,Yu,Zu,hl,Ju,Xu,us,Qu,em,ul,tm,nm,zc,ms,jc,Mr,om,Ec,Cr,fs,sm,ml,am,rm,qc,Ht,im,_s,lm,dm,gs,cm,pm,Fc,Sn,hm,fl,um,mm,Mc,Pr,Cc,nn,Gn,_l,Ts,fm,gl,_m,Pc,xt,gm,Or,Tm,bm,bs,km,vm,ks,ym,wm,Oc,vs,Nc,dt,$m,Tl,xm,zm,bl,jm,Em,Nr,qm,Fm,kl,Mm,Cm,Ac,Ar,Pm,Lc,ys,Ic,Lr,Om,Dc,ws,Sc,Ir,Gc,on,Un,vl,$s,Nm,yl,Am,Uc,zt,Lm,xs,Im,Dm,wl,Sm,Gm,$l,Um,Wm,Wc,sn,Wn,xl,zs,Bm,zl,Rm,Bc,Dr,Hm,Rc,Bn,jl,an,Km,js,Vm,Ym,Es,Zm,Jm,Xm,El,ot,Qm,qs,ef,tf,Fs,nf,of,Ms,sf,af,Cs,rf,lf,Ps,df,cf,Hc,rn,Rn,ql,Os,pf,Fl,hf,Kc,St,Ns,uf,Gt,mf,Sr,ff,_f,Gr,gf,Tf,As,bf,kf,vf,ln,yf,Ur,wf,$f,Wr,xf,zf,Vc,dn,Hn,Ml,Ls,jf,Cl,Ef,Yc,he,Is,qf,Ds,Ff,Ss,Mf,Cf,Pf,Gs,Of,Br,Nf,Af,Lf,Kt,Us,If,Pl,Df,Sf,Ws,Rr,Gf,Ol,Uf,Wf,Hr,Bf,Nl,Rf,Hf,Kn,Bs,Kf,Rs,Vf,Al,Yf,Zf,Jf,Vn,Hs,Xf,Ll,Qf,e_,Kr,Ks,Zc,cn,Yn,Il,Vs,t_,Dl,n_,Jc,st,Ys,o_,pn,s_,Sl,a_,r_,Zs,i_,l_,d_,Js,c_,Vr,p_,h_,u_,Vt,Xs,m_,Gl,f_,__,Qs,Yr,g_,Ul,T_,b_,Zr,k_,Wl,v_,y_,Zn,ea,w_,Bl,$_,Xc,hn,Jn,Rl,ta,x_,Hl,z_,Qc,oe,na,j_,Kl,E_,q_,oa,F_,sa,M_,C_,P_,aa,O_,Jr,N_,A_,L_,ra,I_,ia,D_,S_,G_,jt,la,U_,un,W_,Xr,B_,R_,Vl,H_,K_,V_,Xn,Y_,Qn,Z_,Et,da,J_,Yl,X_,Q_,Zl,eg,tg,eo,ng,Yt,ca,og,Jl,sg,ag,to,ep,mn,no,Xl,pa,rg,Ql,ig,tp,se,ha,lg,ua,dg,ed,cg,pg,hg,ma,ug,fa,mg,fg,_g,_a,gg,Qr,Tg,bg,kg,ga,vg,Ta,yg,wg,$g,qt,ba,xg,fn,zg,ei,jg,Eg,td,qg,Fg,Mg,oo,Cg,so,Pg,Ft,ka,Og,nd,Ng,Ag,od,Lg,Ig,ao,Dg,Zt,va,Sg,sd,Gg,Ug,ro,np,_n,io,ad,ya,Wg,rd,Bg,op,ae,wa,Rg,id,Hg,Kg,$a,Vg,xa,Yg,Zg,Jg,za,Xg,ti,Qg,eT,tT,ja,nT,Ea,oT,sT,aT,Mt,qa,rT,gn,iT,ni,lT,dT,ld,cT,pT,hT,lo,uT,co,mT,Ct,Fa,fT,dd,_T,gT,cd,TT,bT,po,kT,Jt,Ma,vT,pd,yT,wT,ho,sp,Tn,uo,hd,Ca,$T,ud,xT,ap,ue,Pa,zT,md,jT,ET,Oa,qT,Na,FT,MT,CT,Aa,PT,oi,OT,NT,AT,La,LT,Ia,IT,DT,ST,mo,GT,Pt,Da,UT,bn,WT,si,BT,RT,fd,HT,KT,VT,fo,YT,_o,rp,kn,go,_d,Sa,ZT,gd,JT,ip,me,Ga,XT,Ua,QT,Td,eb,tb,nb,Wa,ob,Ba,sb,ab,rb,Ra,ib,ai,lb,db,cb,Ha,pb,Ka,hb,ub,mb,To,fb,Ot,Va,_b,vn,gb,ri,Tb,bb,bd,kb,vb,yb,bo,wb,ko,lp,yn,vo,kd,Ya,$b,vd,xb,dp,fe,Za,zb,yd,jb,Eb,Ja,qb,Xa,Fb,Mb,Cb,Qa,Pb,ii,Ob,Nb,Ab,er,Lb,tr,Ib,Db,Sb,yo,Gb,Nt,nr,Ub,wn,Wb,li,Bb,Rb,wd,Hb,Kb,Vb,wo,Yb,$o,cp,$n,xo,$d,or,Zb,xd,Jb,pp,_t,sr,Xb,At,ar,Qb,xn,ek,zd,tk,nk,jd,ok,sk,ak,zo,rk,jo,ik,Eo,rr,lk,qo,dk,Fo,ir,ck,Mo,hp,zn,Co,Ed,lr,pk,qd,hk,up,gt,dr,uk,Lt,cr,mk,jn,fk,Fd,_k,gk,Md,Tk,bk,kk,Po,vk,Oo,yk,No,pr,wk,Ao,$k,Lo,hr,xk,Io,mp,En,Do,Cd,ur,zk,Pd,jk,fp,qn,mr,Ek,Xt,fr,qk,Fn,Fk,di,Mk,Ck,Od,Pk,Ok,Nk,So,_p;return l=new be({}),E=new be({}),ds=new be({}),cs=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-number">0.188</span>`}}),Ts=new be({}),vs=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
[<span class="hljs-string">&#x27;&lt;pad&gt; &lt;extra_id_0&gt; park offers&lt;extra_id_1&gt; the&lt;extra_id_2&gt; park.&lt;/s&gt;&#x27;</span>]`}}),$s=new be({}),zs=new be({}),Os=new be({}),Ns=new P({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/configuration_t5.py#L34"}}),Ls=new be({}),Is=new P({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L55"}}),Us=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bs=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L188",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hs=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L227",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ks=new P({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L324"}}),Vs=new be({}),Ys=new P({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L65"}}),Xs=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L191",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ea=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L217",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ta=new be({}),na=new P({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1274"}}),la=new P({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Xn=new Dt({props:{$$slots:{default:[Ow]},$$scope:{ctx:j}}}),Qn=new ke({props:{anchor:"transformers.T5Model.forward.example",$$slots:{default:[Nw]},$$scope:{ctx:j}}}),da=new P({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1306"}}),eo=new ke({props:{anchor:"transformers.T5Model.parallelize.example",$$slots:{default:[Aw]},$$scope:{ctx:j}}}),ca=new P({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1318"}}),to=new ke({props:{anchor:"transformers.T5Model.deparallelize.example",$$slots:{default:[Lw]},$$scope:{ctx:j}}}),pa=new be({}),ha=new P({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1466"}}),ba=new P({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),oo=new Dt({props:{$$slots:{default:[Iw]},$$scope:{ctx:j}}}),so=new ke({props:{anchor:"transformers.T5ForConditionalGeneration.forward.example",$$slots:{default:[Dw]},$$scope:{ctx:j}}}),ka=new P({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1503"}}),ao=new ke({props:{anchor:"transformers.T5ForConditionalGeneration.parallelize.example",$$slots:{default:[Sw]},$$scope:{ctx:j}}}),va=new P({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1516"}}),ro=new ke({props:{anchor:"transformers.T5ForConditionalGeneration.deparallelize.example",$$slots:{default:[Gw]},$$scope:{ctx:j}}}),ya=new be({}),wa=new P({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1760"}}),qa=new P({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
`}}),lo=new Dt({props:{$$slots:{default:[Uw]},$$scope:{ctx:j}}}),co=new ke({props:{anchor:"transformers.T5EncoderModel.forward.example",$$slots:{default:[Ww]},$$scope:{ctx:j}}}),Fa=new P({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1781"}}),po=new ke({props:{anchor:"transformers.T5EncoderModel.parallelize.example",$$slots:{default:[Bw]},$$scope:{ctx:j}}}),Ma=new P({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1792"}}),ho=new ke({props:{anchor:"transformers.T5EncoderModel.deparallelize.example",$$slots:{default:[Rw]},$$scope:{ctx:j}}}),Ca=new be({}),Pa=new P({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1123"}}),mo=new Dt({props:{$$slots:{default:[Hw]},$$scope:{ctx:j}}}),Da=new P({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1151",returnDescription:`
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
`}}),fo=new Dt({props:{$$slots:{default:[Kw]},$$scope:{ctx:j}}}),_o=new ke({props:{anchor:"transformers.TFT5Model.call.example",$$slots:{default:[Vw]},$$scope:{ctx:j}}}),Sa=new be({}),Ga=new P({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1275"}}),To=new Dt({props:{$$slots:{default:[Yw]},$$scope:{ctx:j}}}),Va=new P({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1331",returnDescription:`
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
`}}),bo=new Dt({props:{$$slots:{default:[Zw]},$$scope:{ctx:j}}}),ko=new ke({props:{anchor:"transformers.TFT5ForConditionalGeneration.call.example",$$slots:{default:[Jw]},$$scope:{ctx:j}}}),Ya=new be({}),Za=new P({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1554"}}),yo=new Dt({props:{$$slots:{default:[Xw]},$$scope:{ctx:j}}}),nr=new P({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1578",returnDescription:`
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
`}}),wo=new Dt({props:{$$slots:{default:[Qw]},$$scope:{ctx:j}}}),$o=new ke({props:{anchor:"transformers.TFT5EncoderModel.call.example",$$slots:{default:[e1]},$$scope:{ctx:j}}}),or=new be({}),sr=new P({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1367"}}),ar=new P({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),zo=new Dt({props:{$$slots:{default:[t1]},$$scope:{ctx:j}}}),jo=new ke({props:{anchor:"transformers.FlaxT5Model.__call__.example",$$slots:{default:[n1]},$$scope:{ctx:j}}}),rr=new P({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
`}}),qo=new ke({props:{anchor:"transformers.FlaxT5Model.encode.example",$$slots:{default:[o1]},$$scope:{ctx:j}}}),ir=new P({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Mo=new ke({props:{anchor:"transformers.FlaxT5Model.decode.example",$$slots:{default:[s1]},$$scope:{ctx:j}}}),lr=new be({}),dr=new P({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1606"}}),cr=new P({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Po=new Dt({props:{$$slots:{default:[a1]},$$scope:{ctx:j}}}),Oo=new ke({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.example",$$slots:{default:[r1]},$$scope:{ctx:j}}}),pr=new P({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
`}}),Ao=new ke({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.example",$$slots:{default:[i1]},$$scope:{ctx:j}}}),hr=new P({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Io=new ke({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.example",$$slots:{default:[l1]},$$scope:{ctx:j}}}),ur=new be({}),mr=new P({props:{name:"class transformers.FlaxT5EncoderModel",anchor:"transformers.FlaxT5EncoderModel",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1456"}}),fr=new P({props:{name:"__call__",anchor:"transformers.FlaxT5EncoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5EncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1459"}}),So=new Dt({props:{$$slots:{default:[d1]},$$scope:{ctx:j}}}),{c(){p=a("meta"),b=d(),g=a("h1"),_=a("a"),T=a("span"),k(l.$$.fragment),u=d(),q=a("span"),Ge=o("T5"),qe=d(),S=a("h2"),re=a("a"),ie=a("span"),k(E.$$.fragment),Ue=d(),K=a("span"),We=o("Overview"),Fe=d(),G=a("p"),Be=o("The T5 model was presented in "),de=a("a"),J=o("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Re=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Me=d(),U=a("p"),He=o("The abstract from the paper is the following:"),Ce=d(),W=a("p"),ye=a("em"),Ke=o(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),ce=d(),C=a("p"),O=o("Tips:"),Pe=d(),D=a("ul"),we=a("li"),X=a("p"),Q=o(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),$e=a("em"),Ve=o("translate English to German: \u2026"),N=o(`,
for summarization: `),xe=a("em"),ee=o("summarize: \u2026"),Ye=o("."),Ze=d(),V=a("li"),ze=a("p"),Je=o("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),B=d(),je=a("li"),I=a("p"),Xe=o("See the "),te=a("a"),A=o("training"),Qe=o(", "),L=a("a"),et=o("inference"),tt=o(" and "),z=a("a"),F=o("scripts"),bt=o(" sections below for all details regarding usage."),pe=d(),nt=a("p"),kt=o("T5 comes in different sizes:"),M=d(),Y=a("ul"),at=a("li"),rt=a("p"),Oe=a("a"),vt=o("t5-small"),R=d(),Z=a("li"),it=a("p"),Ne=a("a"),ne=o("t5-base"),yt=d(),lt=a("li"),Ee=a("p"),Ae=a("a"),_e=o("t5-large"),wt=d(),Pi=a("li"),Oi=a("p"),ss=a("a"),bh=o("t5-3b"),kh=d(),Ni=a("li"),br=a("p"),as=a("a"),vh=o("t5-11b"),yh=o("."),ic=d(),kr=a("p"),wh=o("Based on the original T5 model, Google has released some follow-up works:"),lc=d(),Wt=a("ul"),Ai=a("li"),Pn=a("p"),Li=a("strong"),$h=o("T5v1.1"),xh=o(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),vr=a("a"),zh=o("here"),jh=o("."),Eh=d(),Ii=a("li"),On=a("p"),Di=a("strong"),qh=o("mT5"),Fh=o(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),yr=a("a"),Mh=o("here"),Ch=o("."),Ph=d(),Si=a("li"),Nn=a("p"),Gi=a("strong"),Oh=o("byT5"),Nh=o(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),wr=a("a"),Ah=o("here"),Lh=o("."),dc=d(),An=a("p"),Ih=o("All checkpoints can be found on the "),rs=a("a"),Dh=o("hub"),Sh=o("."),cc=d(),Bt=a("p"),Gh=o("This model was contributed by "),is=a("a"),Uh=o("thomwolf"),Wh=o(". The original code can be found "),ls=a("a"),Bh=o("here"),Rh=o("."),pc=d(),$r=a("a"),hc=d(),tn=a("h2"),Ln=a("a"),Ui=a("span"),k(ds.$$.fragment),Hh=d(),Wi=a("span"),Kh=o("Training"),uc=d(),$t=a("p"),Vh=o(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),Bi=a("code"),Yh=o("input_ids"),Zh=o(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Ri=a("code"),Jh=o("decoder_input_ids"),Xh=o(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Hi=a("code"),Qh=o("labels"),eu=o(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),mc=d(),In=a("p"),tu=o("One can use "),xr=a("a"),nu=o("T5ForConditionalGeneration"),ou=o(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),fc=d(),zr=a("ul"),Ki=a("li"),su=o("Unsupervised denoising training"),_c=d(),ge=a("p"),au=o("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Vi=a("em"),ru=o("a.k.a"),iu=o(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Yi=a("em"),lu=o("real"),du=o(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Zi=a("code"),cu=o("<extra_id_0>"),pu=o(`,
`),Ji=a("code"),hu=o("<extra_id_1>"),uu=o(", \u2026 up to "),Xi=a("code"),mu=o("<extra_id_99>"),fu=o(`. As a default, 100 sentinel tokens are available in
`),jr=a("a"),_u=o("T5Tokenizer"),gu=o("."),gc=d(),Er=a("p"),Tu=o(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),Tc=d(),k(cs.$$.fragment),bc=d(),Dn=a("p"),bu=o("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),ps=a("a"),ku=o("run_t5_mlm_flax.py"),vu=o(` script in the Examples
directory.`),kc=d(),qr=a("ul"),Qi=a("li"),yu=o("Supervised training"),vc=d(),Fr=a("p"),wu=o(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),yc=d(),k(hs.$$.fragment),wc=d(),le=a("p"),$u=o("As you can see, only 2 inputs are required for the model in order to compute a loss: "),el=a("code"),xu=o("input_ids"),zu=o(` (which are the
`),tl=a("code"),ju=o("input_ids"),Eu=o(" of the encoded input sequence) and "),nl=a("code"),qu=o("labels"),Fu=o(" (which are the "),ol=a("code"),Mu=o("input_ids"),Cu=o(` of the encoded
target sequence). The model will automatically create the `),sl=a("code"),Pu=o("decoder_input_ids"),Ou=o(" based on the "),al=a("code"),Nu=o("labels"),Au=o(`, by
shifting them one position to the right and prepending the `),rl=a("code"),Lu=o("config.decoder_start_token_id"),Iu=o(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),$c=d(),Rt=a("p"),Du=o(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),il=a("code"),Su=o("max_source_length"),Gu=o(" and "),ll=a("code"),Uu=o("max_target_length"),Wu=o(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),xc=d(),Te=a("p"),Bu=o("In addition, we must make sure that padding token id\u2019s of the "),dl=a("code"),Ru=o("labels"),Hu=o(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),cl=a("code"),Ku=o("ignore_index"),Vu=o(`
of the `),pl=a("code"),Yu=o("CrossEntropyLoss"),Zu=o(". In Flax, one can use the "),hl=a("code"),Ju=o("decoder_attention_mask"),Xu=o(` to ignore padded tokens from
the loss (see the `),us=a("a"),Qu=o("Flax summarization script"),em=o(` for details). We also pass
`),ul=a("code"),tm=o("attention_mask"),nm=o(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),zc=d(),k(ms.$$.fragment),jc=d(),Mr=a("p"),om=o("Additional training tips:"),Ec=d(),Cr=a("ul"),fs=a("li"),sm=o("T5 models need a slightly higher learning rate than the default one set in the "),ml=a("code"),am=o("Trainer"),rm=o(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),qc=d(),Ht=a("p"),im=o("According to "),_s=a("a"),lm=o("this forum post"),dm=o(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),gs=a("a"),cm=o("paper"),pm=o(` for the task prefixes
used).`),Fc=d(),Sn=a("p"),hm=o(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),fl=a("em"),um=o("pad_to_multiple_of"),mm=o(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Mc=d(),Pr=a("a"),Cc=d(),nn=a("h2"),Gn=a("a"),_l=a("span"),k(Ts.$$.fragment),fm=d(),gl=a("span"),_m=o("Inference"),Pc=d(),xt=a("p"),gm=o("At inference time, it is recommended to use "),Or=a("a"),Tm=o("generate()"),bm=o(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),bs=a("a"),km=o("this blog post"),vm=o(` to know all the details about generating text with Transformers.
There\u2019s also `),ks=a("a"),ym=o("this blog post"),wm=o(` which explains how
generation works in general in encoder-decoder models.`),Oc=d(),k(vs.$$.fragment),Nc=d(),dt=a("p"),$m=o("Note that T5 uses the "),Tl=a("code"),xm=o("pad_token_id"),zm=o(" as the "),bl=a("code"),jm=o("decoder_start_token_id"),Em=o(`, so when doing generation without using
`),Nr=a("a"),qm=o("generate()"),Fm=o(", make sure you start it with the "),kl=a("code"),Mm=o("pad_token_id"),Cm=o("."),Ac=d(),Ar=a("p"),Pm=o("The example above only shows a single example. You can also do batched inference, like so:"),Lc=d(),k(ys.$$.fragment),Ic=d(),Lr=a("p"),Om=o(`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),Dc=d(),k(ws.$$.fragment),Sc=d(),Ir=a("a"),Gc=d(),on=a("h2"),Un=a("a"),vl=a("span"),k($s.$$.fragment),Nm=d(),yl=a("span"),Am=o("Performance"),Uc=d(),zt=a("p"),Lm=o("If you\u2019d like a faster training and inference performance, install "),xs=a("a"),Im=o("apex"),Dm=o(" and then the model will automatically use "),wl=a("code"),Sm=o("apex.normalization.FusedRMSNorm"),Gm=o(" instead of "),$l=a("code"),Um=o("T5LayerNorm"),Wm=o(". The former uses an optimized fused kernel which is several times faster than the latter."),Wc=d(),sn=a("h2"),Wn=a("a"),xl=a("span"),k(zs.$$.fragment),Bm=d(),zl=a("span"),Rm=o("Example scripts"),Bc=d(),Dr=a("p"),Hm=o("T5 is supported by several example scripts, both for pre-training and fine-tuning."),Rc=d(),Bn=a("ul"),jl=a("li"),an=a("p"),Km=o("pre-training: the "),js=a("a"),Vm=o("run_t5_mlm_flax.py"),Ym=o(`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Es=a("a"),Zm=o("t5_tokenizer_model.py"),Jm=o(`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),Xm=d(),El=a("li"),ot=a("p"),Qm=o("fine-tuning: T5 is supported by the official summarization scripts ("),qs=a("a"),ef=o("PyTorch"),tf=o(", "),Fs=a("a"),nf=o("Tensorflow"),of=o(", and "),Ms=a("a"),sf=o("Flax"),af=o(`) and translation scripts
(`),Cs=a("a"),rf=o("PyTorch"),lf=o(" and "),Ps=a("a"),df=o("Tensorflow"),cf=o(`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),Hc=d(),rn=a("h2"),Rn=a("a"),ql=a("span"),k(Os.$$.fragment),pf=d(),Fl=a("span"),hf=o("T5Config"),Kc=d(),St=a("div"),k(Ns.$$.fragment),uf=d(),Gt=a("p"),mf=o("This is the configuration class to store the configuration of a "),Sr=a("a"),ff=o("T5Model"),_f=o(" or a "),Gr=a("a"),gf=o("TFT5Model"),Tf=o(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),As=a("a"),bf=o("t5-small"),kf=o(" architecture."),vf=d(),ln=a("p"),yf=o("Configuration objects inherit from "),Ur=a("a"),wf=o("PretrainedConfig"),$f=o(` and can be used to control the model outputs. Read the
documentation from `),Wr=a("a"),xf=o("PretrainedConfig"),zf=o(" for more information."),Vc=d(),dn=a("h2"),Hn=a("a"),Ml=a("span"),k(Ls.$$.fragment),jf=d(),Cl=a("span"),Ef=o("T5Tokenizer"),Yc=d(),he=a("div"),k(Is.$$.fragment),qf=d(),Ds=a("p"),Ff=o("Construct a T5 tokenizer. Based on "),Ss=a("a"),Mf=o("SentencePiece"),Cf=o("."),Pf=d(),Gs=a("p"),Of=o("This tokenizer inherits from "),Br=a("a"),Nf=o("PreTrainedTokenizer"),Af=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Lf=d(),Kt=a("div"),k(Us.$$.fragment),If=d(),Pl=a("p"),Df=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Sf=d(),Ws=a("ul"),Rr=a("li"),Gf=o("single sequence: "),Ol=a("code"),Uf=o("X </s>"),Wf=d(),Hr=a("li"),Bf=o("pair of sequences: "),Nl=a("code"),Rf=o("A </s> B </s>"),Hf=d(),Kn=a("div"),k(Bs.$$.fragment),Kf=d(),Rs=a("p"),Vf=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Al=a("code"),Yf=o("prepare_for_model"),Zf=o(" method."),Jf=d(),Vn=a("div"),k(Hs.$$.fragment),Xf=d(),Ll=a("p"),Qf=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),e_=d(),Kr=a("div"),k(Ks.$$.fragment),Zc=d(),cn=a("h2"),Yn=a("a"),Il=a("span"),k(Vs.$$.fragment),t_=d(),Dl=a("span"),n_=o("T5TokenizerFast"),Jc=d(),st=a("div"),k(Ys.$$.fragment),o_=d(),pn=a("p"),s_=o("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),Sl=a("em"),a_=o("tokenizers"),r_=o(` library). Based on
`),Zs=a("a"),i_=o("Unigram"),l_=o("."),d_=d(),Js=a("p"),c_=o("This tokenizer inherits from "),Vr=a("a"),p_=o("PreTrainedTokenizerFast"),h_=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),u_=d(),Vt=a("div"),k(Xs.$$.fragment),m_=d(),Gl=a("p"),f_=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),__=d(),Qs=a("ul"),Yr=a("li"),g_=o("single sequence: "),Ul=a("code"),T_=o("X </s>"),b_=d(),Zr=a("li"),k_=o("pair of sequences: "),Wl=a("code"),v_=o("A </s> B </s>"),y_=d(),Zn=a("div"),k(ea.$$.fragment),w_=d(),Bl=a("p"),$_=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Xc=d(),hn=a("h2"),Jn=a("a"),Rl=a("span"),k(ta.$$.fragment),x_=d(),Hl=a("span"),z_=o("T5Model"),Qc=d(),oe=a("div"),k(na.$$.fragment),j_=d(),Kl=a("p"),E_=o("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),q_=d(),oa=a("p"),F_=o("The T5 model was proposed in "),sa=a("a"),M_=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),C_=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),P_=d(),aa=a("p"),O_=o("This model inherits from "),Jr=a("a"),N_=o("PreTrainedModel"),A_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),L_=d(),ra=a("p"),I_=o("This model is also a PyTorch "),ia=a("a"),D_=o("torch.nn.Module"),S_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),G_=d(),jt=a("div"),k(la.$$.fragment),U_=d(),un=a("p"),W_=o("The "),Xr=a("a"),B_=o("T5Model"),R_=o(" forward method, overrides the "),Vl=a("code"),H_=o("__call__"),K_=o(" special method."),V_=d(),k(Xn.$$.fragment),Y_=d(),k(Qn.$$.fragment),Z_=d(),Et=a("div"),k(da.$$.fragment),J_=d(),Yl=a("p"),X_=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Q_=d(),Zl=a("p"),eg=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),tg=d(),k(eo.$$.fragment),ng=d(),Yt=a("div"),k(ca.$$.fragment),og=d(),Jl=a("p"),sg=o("Moves the model to cpu from a model parallel state."),ag=d(),k(to.$$.fragment),ep=d(),mn=a("h2"),no=a("a"),Xl=a("span"),k(pa.$$.fragment),rg=d(),Ql=a("span"),ig=o("T5ForConditionalGeneration"),tp=d(),se=a("div"),k(ha.$$.fragment),lg=d(),ua=a("p"),dg=o("T5 Model with a "),ed=a("code"),cg=o("language modeling"),pg=o(" head on top."),hg=d(),ma=a("p"),ug=o("The T5 model was proposed in "),fa=a("a"),mg=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),fg=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),_g=d(),_a=a("p"),gg=o("This model inherits from "),Qr=a("a"),Tg=o("PreTrainedModel"),bg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kg=d(),ga=a("p"),vg=o("This model is also a PyTorch "),Ta=a("a"),yg=o("torch.nn.Module"),wg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$g=d(),qt=a("div"),k(ba.$$.fragment),xg=d(),fn=a("p"),zg=o("The "),ei=a("a"),jg=o("T5ForConditionalGeneration"),Eg=o(" forward method, overrides the "),td=a("code"),qg=o("__call__"),Fg=o(" special method."),Mg=d(),k(oo.$$.fragment),Cg=d(),k(so.$$.fragment),Pg=d(),Ft=a("div"),k(ka.$$.fragment),Og=d(),nd=a("p"),Ng=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Ag=d(),od=a("p"),Lg=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Ig=d(),k(ao.$$.fragment),Dg=d(),Zt=a("div"),k(va.$$.fragment),Sg=d(),sd=a("p"),Gg=o("Moves the model to cpu from a model parallel state."),Ug=d(),k(ro.$$.fragment),np=d(),_n=a("h2"),io=a("a"),ad=a("span"),k(ya.$$.fragment),Wg=d(),rd=a("span"),Bg=o("T5EncoderModel"),op=d(),ae=a("div"),k(wa.$$.fragment),Rg=d(),id=a("p"),Hg=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Kg=d(),$a=a("p"),Vg=o("The T5 model was proposed in "),xa=a("a"),Yg=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Zg=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Jg=d(),za=a("p"),Xg=o("This model inherits from "),ti=a("a"),Qg=o("PreTrainedModel"),eT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tT=d(),ja=a("p"),nT=o("This model is also a PyTorch "),Ea=a("a"),oT=o("torch.nn.Module"),sT=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aT=d(),Mt=a("div"),k(qa.$$.fragment),rT=d(),gn=a("p"),iT=o("The "),ni=a("a"),lT=o("T5EncoderModel"),dT=o(" forward method, overrides the "),ld=a("code"),cT=o("__call__"),pT=o(" special method."),hT=d(),k(lo.$$.fragment),uT=d(),k(co.$$.fragment),mT=d(),Ct=a("div"),k(Fa.$$.fragment),fT=d(),dd=a("p"),_T=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),gT=d(),cd=a("p"),TT=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),bT=d(),k(po.$$.fragment),kT=d(),Jt=a("div"),k(Ma.$$.fragment),vT=d(),pd=a("p"),yT=o("Moves the model to cpu from a model parallel state."),wT=d(),k(ho.$$.fragment),sp=d(),Tn=a("h2"),uo=a("a"),hd=a("span"),k(Ca.$$.fragment),$T=d(),ud=a("span"),xT=o("TFT5Model"),ap=d(),ue=a("div"),k(Pa.$$.fragment),zT=d(),md=a("p"),jT=o("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),ET=d(),Oa=a("p"),qT=o("The T5 model was proposed in "),Na=a("a"),FT=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),MT=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),CT=d(),Aa=a("p"),PT=o("This model inherits from "),oi=a("a"),OT=o("TFPreTrainedModel"),NT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),AT=d(),La=a("p"),LT=o("This model is also a "),Ia=a("a"),IT=o("tf.keras.Model"),DT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST=d(),k(mo.$$.fragment),GT=d(),Pt=a("div"),k(Da.$$.fragment),UT=d(),bn=a("p"),WT=o("The "),si=a("a"),BT=o("TFT5Model"),RT=o(" forward method, overrides the "),fd=a("code"),HT=o("__call__"),KT=o(" special method."),VT=d(),k(fo.$$.fragment),YT=d(),k(_o.$$.fragment),rp=d(),kn=a("h2"),go=a("a"),_d=a("span"),k(Sa.$$.fragment),ZT=d(),gd=a("span"),JT=o("TFT5ForConditionalGeneration"),ip=d(),me=a("div"),k(Ga.$$.fragment),XT=d(),Ua=a("p"),QT=o("T5 Model with a "),Td=a("code"),eb=o("language modeling"),tb=o(" head on top."),nb=d(),Wa=a("p"),ob=o("The T5 model was proposed in "),Ba=a("a"),sb=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),ab=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),rb=d(),Ra=a("p"),ib=o("This model inherits from "),ai=a("a"),lb=o("TFPreTrainedModel"),db=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cb=d(),Ha=a("p"),pb=o("This model is also a "),Ka=a("a"),hb=o("tf.keras.Model"),ub=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mb=d(),k(To.$$.fragment),fb=d(),Ot=a("div"),k(Va.$$.fragment),_b=d(),vn=a("p"),gb=o("The "),ri=a("a"),Tb=o("TFT5ForConditionalGeneration"),bb=o(" forward method, overrides the "),bd=a("code"),kb=o("__call__"),vb=o(" special method."),yb=d(),k(bo.$$.fragment),wb=d(),k(ko.$$.fragment),lp=d(),yn=a("h2"),vo=a("a"),kd=a("span"),k(Ya.$$.fragment),$b=d(),vd=a("span"),xb=o("TFT5EncoderModel"),dp=d(),fe=a("div"),k(Za.$$.fragment),zb=d(),yd=a("p"),jb=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),Eb=d(),Ja=a("p"),qb=o("The T5 model was proposed in "),Xa=a("a"),Fb=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Mb=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Cb=d(),Qa=a("p"),Pb=o("This model inherits from "),ii=a("a"),Ob=o("TFPreTrainedModel"),Nb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ab=d(),er=a("p"),Lb=o("This model is also a "),tr=a("a"),Ib=o("tf.keras.Model"),Db=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sb=d(),k(yo.$$.fragment),Gb=d(),Nt=a("div"),k(nr.$$.fragment),Ub=d(),wn=a("p"),Wb=o("The "),li=a("a"),Bb=o("TFT5EncoderModel"),Rb=o(" forward method, overrides the "),wd=a("code"),Hb=o("__call__"),Kb=o(" special method."),Vb=d(),k(wo.$$.fragment),Yb=d(),k($o.$$.fragment),cp=d(),$n=a("h2"),xo=a("a"),$d=a("span"),k(or.$$.fragment),Zb=d(),xd=a("span"),Jb=o("FlaxT5Model"),pp=d(),_t=a("div"),k(sr.$$.fragment),Xb=d(),At=a("div"),k(ar.$$.fragment),Qb=d(),xn=a("p"),ek=o("The "),zd=a("code"),tk=o("FlaxT5PreTrainedModel"),nk=o(" forward method, overrides the "),jd=a("code"),ok=o("__call__"),sk=o(" special method."),ak=d(),k(zo.$$.fragment),rk=d(),k(jo.$$.fragment),ik=d(),Eo=a("div"),k(rr.$$.fragment),lk=d(),k(qo.$$.fragment),dk=d(),Fo=a("div"),k(ir.$$.fragment),ck=d(),k(Mo.$$.fragment),hp=d(),zn=a("h2"),Co=a("a"),Ed=a("span"),k(lr.$$.fragment),pk=d(),qd=a("span"),hk=o("FlaxT5ForConditionalGeneration"),up=d(),gt=a("div"),k(dr.$$.fragment),uk=d(),Lt=a("div"),k(cr.$$.fragment),mk=d(),jn=a("p"),fk=o("The "),Fd=a("code"),_k=o("FlaxT5PreTrainedModel"),gk=o(" forward method, overrides the "),Md=a("code"),Tk=o("__call__"),bk=o(" special method."),kk=d(),k(Po.$$.fragment),vk=d(),k(Oo.$$.fragment),yk=d(),No=a("div"),k(pr.$$.fragment),wk=d(),k(Ao.$$.fragment),$k=d(),Lo=a("div"),k(hr.$$.fragment),xk=d(),k(Io.$$.fragment),mp=d(),En=a("h2"),Do=a("a"),Cd=a("span"),k(ur.$$.fragment),zk=d(),Pd=a("span"),jk=o("FlaxT5EncoderModel"),fp=d(),qn=a("div"),k(mr.$$.fragment),Ek=d(),Xt=a("div"),k(fr.$$.fragment),qk=d(),Fn=a("p"),Fk=o("The "),di=a("a"),Mk=o("FlaxT5EncoderModel"),Ck=o(" forward method, overrides the "),Od=a("code"),Pk=o("__call__"),Ok=o(" special method."),Nk=d(),k(So.$$.fragment),this.h()},l(n){const f=Cw('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),b=c(n),g=r(n,"H1",{class:!0});var _r=i(g);_=r(_r,"A",{id:!0,class:!0,href:!0});var Nd=i(_);T=r(Nd,"SPAN",{});var Ad=i(T);v(l.$$.fragment,Ad),Ad.forEach(t),Nd.forEach(t),u=c(_r),q=r(_r,"SPAN",{});var Ld=i(q);Ge=s(Ld,"T5"),Ld.forEach(t),_r.forEach(t),qe=c(n),S=r(n,"H2",{class:!0});var gr=i(S);re=r(gr,"A",{id:!0,class:!0,href:!0});var Id=i(re);ie=r(Id,"SPAN",{});var Dd=i(ie);v(E.$$.fragment,Dd),Dd.forEach(t),Id.forEach(t),Ue=c(gr),K=r(gr,"SPAN",{});var Sd=i(K);We=s(Sd,"Overview"),Sd.forEach(t),gr.forEach(t),Fe=c(n),G=r(n,"P",{});var Tr=i(G);Be=s(Tr,"The T5 model was presented in "),de=r(Tr,"A",{href:!0,rel:!0});var Gd=i(de);J=s(Gd,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Gd.forEach(t),Re=s(Tr,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Tr.forEach(t),Me=c(n),U=r(n,"P",{});var Ud=i(U);He=s(Ud,"The abstract from the paper is the following:"),Ud.forEach(t),Ce=c(n),W=r(n,"P",{});var Wd=i(W);ye=r(Wd,"EM",{});var Bd=i(ye);Ke=s(Bd,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Bd.forEach(t),Wd.forEach(t),ce=c(n),C=r(n,"P",{});var Rd=i(C);O=s(Rd,"Tips:"),Rd.forEach(t),Pe=c(n),D=r(n,"UL",{});var Mn=i(D);we=r(Mn,"LI",{});var Hd=i(we);X=r(Hd,"P",{});var Cn=i(X);Q=s(Cn,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),$e=r(Cn,"EM",{});var Kd=i($e);Ve=s(Kd,"translate English to German: \u2026"),Kd.forEach(t),N=s(Cn,`,
for summarization: `),xe=r(Cn,"EM",{});var Vd=i(xe);ee=s(Vd,"summarize: \u2026"),Vd.forEach(t),Ye=s(Cn,"."),Cn.forEach(t),Hd.forEach(t),Ze=c(Mn),V=r(Mn,"LI",{});var Yd=i(V);ze=r(Yd,"P",{});var Zd=i(ze);Je=s(Zd,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Zd.forEach(t),Yd.forEach(t),B=c(Mn),je=r(Mn,"LI",{});var Jd=i(je);I=r(Jd,"P",{});var Ut=i(I);Xe=s(Ut,"See the "),te=r(Ut,"A",{href:!0});var Xd=i(te);A=s(Xd,"training"),Xd.forEach(t),Qe=s(Ut,", "),L=r(Ut,"A",{href:!0});var Qd=i(L);et=s(Qd,"inference"),Qd.forEach(t),tt=s(Ut," and "),z=r(Ut,"A",{href:!0});var ec=i(z);F=s(ec,"scripts"),ec.forEach(t),bt=s(Ut," sections below for all details regarding usage."),Ut.forEach(t),Jd.forEach(t),Mn.forEach(t),pe=c(n),nt=r(n,"P",{});var tc=i(nt);kt=s(tc,"T5 comes in different sizes:"),tc.forEach(t),M=c(n),Y=r(n,"UL",{});var Tt=i(Y);at=r(Tt,"LI",{});var nc=i(at);rt=r(nc,"P",{});var oc=i(rt);Oe=r(oc,"A",{href:!0,rel:!0});var Gk=i(Oe);vt=s(Gk,"t5-small"),Gk.forEach(t),oc.forEach(t),nc.forEach(t),R=c(Tt),Z=r(Tt,"LI",{});var Uk=i(Z);it=r(Uk,"P",{});var Wk=i(it);Ne=r(Wk,"A",{href:!0,rel:!0});var Bk=i(Ne);ne=s(Bk,"t5-base"),Bk.forEach(t),Wk.forEach(t),Uk.forEach(t),yt=c(Tt),lt=r(Tt,"LI",{});var Rk=i(lt);Ee=r(Rk,"P",{});var Hk=i(Ee);Ae=r(Hk,"A",{href:!0,rel:!0});var Kk=i(Ae);_e=s(Kk,"t5-large"),Kk.forEach(t),Hk.forEach(t),Rk.forEach(t),wt=c(Tt),Pi=r(Tt,"LI",{});var Vk=i(Pi);Oi=r(Vk,"P",{});var Yk=i(Oi);ss=r(Yk,"A",{href:!0,rel:!0});var Zk=i(ss);bh=s(Zk,"t5-3b"),Zk.forEach(t),Yk.forEach(t),Vk.forEach(t),kh=c(Tt),Ni=r(Tt,"LI",{});var Jk=i(Ni);br=r(Jk,"P",{});var Ak=i(br);as=r(Ak,"A",{href:!0,rel:!0});var Xk=i(as);vh=s(Xk,"t5-11b"),Xk.forEach(t),yh=s(Ak,"."),Ak.forEach(t),Jk.forEach(t),Tt.forEach(t),ic=c(n),kr=r(n,"P",{});var Qk=i(kr);wh=s(Qk,"Based on the original T5 model, Google has released some follow-up works:"),Qk.forEach(t),lc=c(n),Wt=r(n,"UL",{});var ci=i(Wt);Ai=r(ci,"LI",{});var ev=i(Ai);Pn=r(ev,"P",{});var sc=i(Pn);Li=r(sc,"STRONG",{});var tv=i(Li);$h=s(tv,"T5v1.1"),tv.forEach(t),xh=s(sc,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),vr=r(sc,"A",{href:!0});var nv=i(vr);zh=s(nv,"here"),nv.forEach(t),jh=s(sc,"."),sc.forEach(t),ev.forEach(t),Eh=c(ci),Ii=r(ci,"LI",{});var ov=i(Ii);On=r(ov,"P",{});var ac=i(On);Di=r(ac,"STRONG",{});var sv=i(Di);qh=s(sv,"mT5"),sv.forEach(t),Fh=s(ac,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),yr=r(ac,"A",{href:!0});var av=i(yr);Mh=s(av,"here"),av.forEach(t),Ch=s(ac,"."),ac.forEach(t),ov.forEach(t),Ph=c(ci),Si=r(ci,"LI",{});var rv=i(Si);Nn=r(rv,"P",{});var rc=i(Nn);Gi=r(rc,"STRONG",{});var iv=i(Gi);Oh=s(iv,"byT5"),iv.forEach(t),Nh=s(rc,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),wr=r(rc,"A",{href:!0});var lv=i(wr);Ah=s(lv,"here"),lv.forEach(t),Lh=s(rc,"."),rc.forEach(t),rv.forEach(t),ci.forEach(t),dc=c(n),An=r(n,"P",{});var gp=i(An);Ih=s(gp,"All checkpoints can be found on the "),rs=r(gp,"A",{href:!0,rel:!0});var dv=i(rs);Dh=s(dv,"hub"),dv.forEach(t),Sh=s(gp,"."),gp.forEach(t),cc=c(n),Bt=r(n,"P",{});var pi=i(Bt);Gh=s(pi,"This model was contributed by "),is=r(pi,"A",{href:!0,rel:!0});var cv=i(is);Uh=s(cv,"thomwolf"),cv.forEach(t),Wh=s(pi,". The original code can be found "),ls=r(pi,"A",{href:!0,rel:!0});var pv=i(ls);Bh=s(pv,"here"),pv.forEach(t),Rh=s(pi,"."),pi.forEach(t),pc=c(n),$r=r(n,"A",{id:!0}),i($r).forEach(t),hc=c(n),tn=r(n,"H2",{class:!0});var Tp=i(tn);Ln=r(Tp,"A",{id:!0,class:!0,href:!0});var hv=i(Ln);Ui=r(hv,"SPAN",{});var uv=i(Ui);v(ds.$$.fragment,uv),uv.forEach(t),hv.forEach(t),Hh=c(Tp),Wi=r(Tp,"SPAN",{});var mv=i(Wi);Kh=s(mv,"Training"),mv.forEach(t),Tp.forEach(t),uc=c(n),$t=r(n,"P",{});var Go=i($t);Vh=s(Go,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),Bi=r(Go,"CODE",{});var fv=i(Bi);Yh=s(fv,"input_ids"),fv.forEach(t),Zh=s(Go,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Ri=r(Go,"CODE",{});var _v=i(Ri);Jh=s(_v,"decoder_input_ids"),_v.forEach(t),Xh=s(Go,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Hi=r(Go,"CODE",{});var gv=i(Hi);Qh=s(gv,"labels"),gv.forEach(t),eu=s(Go,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Go.forEach(t),mc=c(n),In=r(n,"P",{});var bp=i(In);tu=s(bp,"One can use "),xr=r(bp,"A",{href:!0});var Tv=i(xr);nu=s(Tv,"T5ForConditionalGeneration"),Tv.forEach(t),ou=s(bp,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),bp.forEach(t),fc=c(n),zr=r(n,"UL",{});var bv=i(zr);Ki=r(bv,"LI",{});var kv=i(Ki);su=s(kv,"Unsupervised denoising training"),kv.forEach(t),bv.forEach(t),_c=c(n),ge=r(n,"P",{});var ct=i(ge);au=s(ct,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Vi=r(ct,"EM",{});var vv=i(Vi);ru=s(vv,"a.k.a"),vv.forEach(t),iu=s(ct,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Yi=r(ct,"EM",{});var yv=i(Yi);lu=s(yv,"real"),yv.forEach(t),du=s(ct,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Zi=r(ct,"CODE",{});var wv=i(Zi);cu=s(wv,"<extra_id_0>"),wv.forEach(t),pu=s(ct,`,
`),Ji=r(ct,"CODE",{});var $v=i(Ji);hu=s($v,"<extra_id_1>"),$v.forEach(t),uu=s(ct,", \u2026 up to "),Xi=r(ct,"CODE",{});var xv=i(Xi);mu=s(xv,"<extra_id_99>"),xv.forEach(t),fu=s(ct,`. As a default, 100 sentinel tokens are available in
`),jr=r(ct,"A",{href:!0});var zv=i(jr);_u=s(zv,"T5Tokenizer"),zv.forEach(t),gu=s(ct,"."),ct.forEach(t),gc=c(n),Er=r(n,"P",{});var jv=i(Er);Tu=s(jv,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),jv.forEach(t),Tc=c(n),v(cs.$$.fragment,n),bc=c(n),Dn=r(n,"P",{});var kp=i(Dn);bu=s(kp,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),ps=r(kp,"A",{href:!0,rel:!0});var Ev=i(ps);ku=s(Ev,"run_t5_mlm_flax.py"),Ev.forEach(t),vu=s(kp,` script in the Examples
directory.`),kp.forEach(t),kc=c(n),qr=r(n,"UL",{});var qv=i(qr);Qi=r(qv,"LI",{});var Fv=i(Qi);yu=s(Fv,"Supervised training"),Fv.forEach(t),qv.forEach(t),vc=c(n),Fr=r(n,"P",{});var Mv=i(Fr);wu=s(Mv,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),Mv.forEach(t),yc=c(n),v(hs.$$.fragment,n),wc=c(n),le=r(n,"P",{});var Le=i(le);$u=s(Le,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),el=r(Le,"CODE",{});var Cv=i(el);xu=s(Cv,"input_ids"),Cv.forEach(t),zu=s(Le,` (which are the
`),tl=r(Le,"CODE",{});var Pv=i(tl);ju=s(Pv,"input_ids"),Pv.forEach(t),Eu=s(Le," of the encoded input sequence) and "),nl=r(Le,"CODE",{});var Ov=i(nl);qu=s(Ov,"labels"),Ov.forEach(t),Fu=s(Le," (which are the "),ol=r(Le,"CODE",{});var Nv=i(ol);Mu=s(Nv,"input_ids"),Nv.forEach(t),Cu=s(Le,` of the encoded
target sequence). The model will automatically create the `),sl=r(Le,"CODE",{});var Av=i(sl);Pu=s(Av,"decoder_input_ids"),Av.forEach(t),Ou=s(Le," based on the "),al=r(Le,"CODE",{});var Lv=i(al);Nu=s(Lv,"labels"),Lv.forEach(t),Au=s(Le,`, by
shifting them one position to the right and prepending the `),rl=r(Le,"CODE",{});var Iv=i(rl);Lu=s(Iv,"config.decoder_start_token_id"),Iv.forEach(t),Iu=s(Le,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),Le.forEach(t),$c=c(n),Rt=r(n,"P",{});var hi=i(Rt);Du=s(hi,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),il=r(hi,"CODE",{});var Dv=i(il);Su=s(Dv,"max_source_length"),Dv.forEach(t),Gu=s(hi," and "),ll=r(hi,"CODE",{});var Sv=i(ll);Uu=s(Sv,"max_target_length"),Sv.forEach(t),Wu=s(hi,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),hi.forEach(t),xc=c(n),Te=r(n,"P",{});var pt=i(Te);Bu=s(pt,"In addition, we must make sure that padding token id\u2019s of the "),dl=r(pt,"CODE",{});var Gv=i(dl);Ru=s(Gv,"labels"),Gv.forEach(t),Hu=s(pt,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),cl=r(pt,"CODE",{});var Uv=i(cl);Ku=s(Uv,"ignore_index"),Uv.forEach(t),Vu=s(pt,`
of the `),pl=r(pt,"CODE",{});var Wv=i(pl);Yu=s(Wv,"CrossEntropyLoss"),Wv.forEach(t),Zu=s(pt,". In Flax, one can use the "),hl=r(pt,"CODE",{});var Bv=i(hl);Ju=s(Bv,"decoder_attention_mask"),Bv.forEach(t),Xu=s(pt,` to ignore padded tokens from
the loss (see the `),us=r(pt,"A",{href:!0,rel:!0});var Rv=i(us);Qu=s(Rv,"Flax summarization script"),Rv.forEach(t),em=s(pt,` for details). We also pass
`),ul=r(pt,"CODE",{});var Hv=i(ul);tm=s(Hv,"attention_mask"),Hv.forEach(t),nm=s(pt,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),pt.forEach(t),zc=c(n),v(ms.$$.fragment,n),jc=c(n),Mr=r(n,"P",{});var Kv=i(Mr);om=s(Kv,"Additional training tips:"),Kv.forEach(t),Ec=c(n),Cr=r(n,"UL",{});var Vv=i(Cr);fs=r(Vv,"LI",{});var vp=i(fs);sm=s(vp,"T5 models need a slightly higher learning rate than the default one set in the "),ml=r(vp,"CODE",{});var Yv=i(ml);am=s(Yv,"Trainer"),Yv.forEach(t),rm=s(vp,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),vp.forEach(t),Vv.forEach(t),qc=c(n),Ht=r(n,"P",{});var ui=i(Ht);im=s(ui,"According to "),_s=r(ui,"A",{href:!0,rel:!0});var Zv=i(_s);lm=s(Zv,"this forum post"),Zv.forEach(t),dm=s(ui,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),gs=r(ui,"A",{href:!0,rel:!0});var Jv=i(gs);cm=s(Jv,"paper"),Jv.forEach(t),pm=s(ui,` for the task prefixes
used).`),ui.forEach(t),Fc=c(n),Sn=r(n,"P",{});var yp=i(Sn);hm=s(yp,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),fl=r(yp,"EM",{});var Xv=i(fl);um=s(Xv,"pad_to_multiple_of"),Xv.forEach(t),mm=s(yp,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),yp.forEach(t),Mc=c(n),Pr=r(n,"A",{id:!0}),i(Pr).forEach(t),Cc=c(n),nn=r(n,"H2",{class:!0});var wp=i(nn);Gn=r(wp,"A",{id:!0,class:!0,href:!0});var Qv=i(Gn);_l=r(Qv,"SPAN",{});var ey=i(_l);v(Ts.$$.fragment,ey),ey.forEach(t),Qv.forEach(t),fm=c(wp),gl=r(wp,"SPAN",{});var ty=i(gl);_m=s(ty,"Inference"),ty.forEach(t),wp.forEach(t),Pc=c(n),xt=r(n,"P",{});var Uo=i(xt);gm=s(Uo,"At inference time, it is recommended to use "),Or=r(Uo,"A",{href:!0});var ny=i(Or);Tm=s(ny,"generate()"),ny.forEach(t),bm=s(Uo,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),bs=r(Uo,"A",{href:!0,rel:!0});var oy=i(bs);km=s(oy,"this blog post"),oy.forEach(t),vm=s(Uo,` to know all the details about generating text with Transformers.
There\u2019s also `),ks=r(Uo,"A",{href:!0,rel:!0});var sy=i(ks);ym=s(sy,"this blog post"),sy.forEach(t),wm=s(Uo,` which explains how
generation works in general in encoder-decoder models.`),Uo.forEach(t),Oc=c(n),v(vs.$$.fragment,n),Nc=c(n),dt=r(n,"P",{});var Qt=i(dt);$m=s(Qt,"Note that T5 uses the "),Tl=r(Qt,"CODE",{});var ay=i(Tl);xm=s(ay,"pad_token_id"),ay.forEach(t),zm=s(Qt," as the "),bl=r(Qt,"CODE",{});var ry=i(bl);jm=s(ry,"decoder_start_token_id"),ry.forEach(t),Em=s(Qt,`, so when doing generation without using
`),Nr=r(Qt,"A",{href:!0});var iy=i(Nr);qm=s(iy,"generate()"),iy.forEach(t),Fm=s(Qt,", make sure you start it with the "),kl=r(Qt,"CODE",{});var ly=i(kl);Mm=s(ly,"pad_token_id"),ly.forEach(t),Cm=s(Qt,"."),Qt.forEach(t),Ac=c(n),Ar=r(n,"P",{});var dy=i(Ar);Pm=s(dy,"The example above only shows a single example. You can also do batched inference, like so:"),dy.forEach(t),Lc=c(n),v(ys.$$.fragment,n),Ic=c(n),Lr=r(n,"P",{});var cy=i(Lr);Om=s(cy,`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),cy.forEach(t),Dc=c(n),v(ws.$$.fragment,n),Sc=c(n),Ir=r(n,"A",{id:!0}),i(Ir).forEach(t),Gc=c(n),on=r(n,"H2",{class:!0});var $p=i(on);Un=r($p,"A",{id:!0,class:!0,href:!0});var py=i(Un);vl=r(py,"SPAN",{});var hy=i(vl);v($s.$$.fragment,hy),hy.forEach(t),py.forEach(t),Nm=c($p),yl=r($p,"SPAN",{});var uy=i(yl);Am=s(uy,"Performance"),uy.forEach(t),$p.forEach(t),Uc=c(n),zt=r(n,"P",{});var Wo=i(zt);Lm=s(Wo,"If you\u2019d like a faster training and inference performance, install "),xs=r(Wo,"A",{href:!0,rel:!0});var my=i(xs);Im=s(my,"apex"),my.forEach(t),Dm=s(Wo," and then the model will automatically use "),wl=r(Wo,"CODE",{});var fy=i(wl);Sm=s(fy,"apex.normalization.FusedRMSNorm"),fy.forEach(t),Gm=s(Wo," instead of "),$l=r(Wo,"CODE",{});var _y=i($l);Um=s(_y,"T5LayerNorm"),_y.forEach(t),Wm=s(Wo,". The former uses an optimized fused kernel which is several times faster than the latter."),Wo.forEach(t),Wc=c(n),sn=r(n,"H2",{class:!0});var xp=i(sn);Wn=r(xp,"A",{id:!0,class:!0,href:!0});var gy=i(Wn);xl=r(gy,"SPAN",{});var Ty=i(xl);v(zs.$$.fragment,Ty),Ty.forEach(t),gy.forEach(t),Bm=c(xp),zl=r(xp,"SPAN",{});var by=i(zl);Rm=s(by,"Example scripts"),by.forEach(t),xp.forEach(t),Bc=c(n),Dr=r(n,"P",{});var ky=i(Dr);Hm=s(ky,"T5 is supported by several example scripts, both for pre-training and fine-tuning."),ky.forEach(t),Rc=c(n),Bn=r(n,"UL",{});var zp=i(Bn);jl=r(zp,"LI",{});var vy=i(jl);an=r(vy,"P",{});var mi=i(an);Km=s(mi,"pre-training: the "),js=r(mi,"A",{href:!0,rel:!0});var yy=i(js);Vm=s(yy,"run_t5_mlm_flax.py"),yy.forEach(t),Ym=s(mi,`
script allows you to further pre-train T5 or pre-train T5 from scratch on your own data. The `),Es=r(mi,"A",{href:!0,rel:!0});var wy=i(Es);Zm=s(wy,"t5_tokenizer_model.py"),wy.forEach(t),Jm=s(mi,`
script allows you to further train a T5 tokenizer or train a T5 Tokenizer from scratch on your own data. Note that
Flax (a neural network library on top of JAX) is particularly useful to train on TPU hardware.`),mi.forEach(t),vy.forEach(t),Xm=c(zp),El=r(zp,"LI",{});var $y=i(El);ot=r($y,"P",{});var It=i(ot);Qm=s(It,"fine-tuning: T5 is supported by the official summarization scripts ("),qs=r(It,"A",{href:!0,rel:!0});var xy=i(qs);ef=s(xy,"PyTorch"),xy.forEach(t),tf=s(It,", "),Fs=r(It,"A",{href:!0,rel:!0});var zy=i(Fs);nf=s(zy,"Tensorflow"),zy.forEach(t),of=s(It,", and "),Ms=r(It,"A",{href:!0,rel:!0});var jy=i(Ms);sf=s(jy,"Flax"),jy.forEach(t),af=s(It,`) and translation scripts
(`),Cs=r(It,"A",{href:!0,rel:!0});var Ey=i(Cs);rf=s(Ey,"PyTorch"),Ey.forEach(t),lf=s(It," and "),Ps=r(It,"A",{href:!0,rel:!0});var qy=i(Ps);df=s(qy,"Tensorflow"),qy.forEach(t),cf=s(It,`). These scripts allow
you to easily fine-tune T5 on custom data for summarization/translation.`),It.forEach(t),$y.forEach(t),zp.forEach(t),Hc=c(n),rn=r(n,"H2",{class:!0});var jp=i(rn);Rn=r(jp,"A",{id:!0,class:!0,href:!0});var Fy=i(Rn);ql=r(Fy,"SPAN",{});var My=i(ql);v(Os.$$.fragment,My),My.forEach(t),Fy.forEach(t),pf=c(jp),Fl=r(jp,"SPAN",{});var Cy=i(Fl);hf=s(Cy,"T5Config"),Cy.forEach(t),jp.forEach(t),Kc=c(n),St=r(n,"DIV",{class:!0});var fi=i(St);v(Ns.$$.fragment,fi),uf=c(fi),Gt=r(fi,"P",{});var Bo=i(Gt);mf=s(Bo,"This is the configuration class to store the configuration of a "),Sr=r(Bo,"A",{href:!0});var Py=i(Sr);ff=s(Py,"T5Model"),Py.forEach(t),_f=s(Bo," or a "),Gr=r(Bo,"A",{href:!0});var Oy=i(Gr);gf=s(Oy,"TFT5Model"),Oy.forEach(t),Tf=s(Bo,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),As=r(Bo,"A",{href:!0,rel:!0});var Ny=i(As);bf=s(Ny,"t5-small"),Ny.forEach(t),kf=s(Bo," architecture."),Bo.forEach(t),vf=c(fi),ln=r(fi,"P",{});var _i=i(ln);yf=s(_i,"Configuration objects inherit from "),Ur=r(_i,"A",{href:!0});var Ay=i(Ur);wf=s(Ay,"PretrainedConfig"),Ay.forEach(t),$f=s(_i,` and can be used to control the model outputs. Read the
documentation from `),Wr=r(_i,"A",{href:!0});var Ly=i(Wr);xf=s(Ly,"PretrainedConfig"),Ly.forEach(t),zf=s(_i," for more information."),_i.forEach(t),fi.forEach(t),Vc=c(n),dn=r(n,"H2",{class:!0});var Ep=i(dn);Hn=r(Ep,"A",{id:!0,class:!0,href:!0});var Iy=i(Hn);Ml=r(Iy,"SPAN",{});var Dy=i(Ml);v(Ls.$$.fragment,Dy),Dy.forEach(t),Iy.forEach(t),jf=c(Ep),Cl=r(Ep,"SPAN",{});var Sy=i(Cl);Ef=s(Sy,"T5Tokenizer"),Sy.forEach(t),Ep.forEach(t),Yc=c(n),he=r(n,"DIV",{class:!0});var ht=i(he);v(Is.$$.fragment,ht),qf=c(ht),Ds=r(ht,"P",{});var qp=i(Ds);Ff=s(qp,"Construct a T5 tokenizer. Based on "),Ss=r(qp,"A",{href:!0,rel:!0});var Gy=i(Ss);Mf=s(Gy,"SentencePiece"),Gy.forEach(t),Cf=s(qp,"."),qp.forEach(t),Pf=c(ht),Gs=r(ht,"P",{});var Fp=i(Gs);Of=s(Fp,"This tokenizer inherits from "),Br=r(Fp,"A",{href:!0});var Uy=i(Br);Nf=s(Uy,"PreTrainedTokenizer"),Uy.forEach(t),Af=s(Fp,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Fp.forEach(t),Lf=c(ht),Kt=r(ht,"DIV",{class:!0});var gi=i(Kt);v(Us.$$.fragment,gi),If=c(gi),Pl=r(gi,"P",{});var Wy=i(Pl);Df=s(Wy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),Wy.forEach(t),Sf=c(gi),Ws=r(gi,"UL",{});var Mp=i(Ws);Rr=r(Mp,"LI",{});var Lk=i(Rr);Gf=s(Lk,"single sequence: "),Ol=r(Lk,"CODE",{});var By=i(Ol);Uf=s(By,"X </s>"),By.forEach(t),Lk.forEach(t),Wf=c(Mp),Hr=r(Mp,"LI",{});var Ik=i(Hr);Bf=s(Ik,"pair of sequences: "),Nl=r(Ik,"CODE",{});var Ry=i(Nl);Rf=s(Ry,"A </s> B </s>"),Ry.forEach(t),Ik.forEach(t),Mp.forEach(t),gi.forEach(t),Hf=c(ht),Kn=r(ht,"DIV",{class:!0});var Cp=i(Kn);v(Bs.$$.fragment,Cp),Kf=c(Cp),Rs=r(Cp,"P",{});var Pp=i(Rs);Vf=s(Pp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Al=r(Pp,"CODE",{});var Hy=i(Al);Yf=s(Hy,"prepare_for_model"),Hy.forEach(t),Zf=s(Pp," method."),Pp.forEach(t),Cp.forEach(t),Jf=c(ht),Vn=r(ht,"DIV",{class:!0});var Op=i(Vn);v(Hs.$$.fragment,Op),Xf=c(Op),Ll=r(Op,"P",{});var Ky=i(Ll);Qf=s(Ky,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),Ky.forEach(t),Op.forEach(t),e_=c(ht),Kr=r(ht,"DIV",{class:!0});var Vy=i(Kr);v(Ks.$$.fragment,Vy),Vy.forEach(t),ht.forEach(t),Zc=c(n),cn=r(n,"H2",{class:!0});var Np=i(cn);Yn=r(Np,"A",{id:!0,class:!0,href:!0});var Yy=i(Yn);Il=r(Yy,"SPAN",{});var Zy=i(Il);v(Vs.$$.fragment,Zy),Zy.forEach(t),Yy.forEach(t),t_=c(Np),Dl=r(Np,"SPAN",{});var Jy=i(Dl);n_=s(Jy,"T5TokenizerFast"),Jy.forEach(t),Np.forEach(t),Jc=c(n),st=r(n,"DIV",{class:!0});var en=i(st);v(Ys.$$.fragment,en),o_=c(en),pn=r(en,"P",{});var Ti=i(pn);s_=s(Ti,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),Sl=r(Ti,"EM",{});var Xy=i(Sl);a_=s(Xy,"tokenizers"),Xy.forEach(t),r_=s(Ti,` library). Based on
`),Zs=r(Ti,"A",{href:!0,rel:!0});var Qy=i(Zs);i_=s(Qy,"Unigram"),Qy.forEach(t),l_=s(Ti,"."),Ti.forEach(t),d_=c(en),Js=r(en,"P",{});var Ap=i(Js);c_=s(Ap,"This tokenizer inherits from "),Vr=r(Ap,"A",{href:!0});var e5=i(Vr);p_=s(e5,"PreTrainedTokenizerFast"),e5.forEach(t),h_=s(Ap,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ap.forEach(t),u_=c(en),Vt=r(en,"DIV",{class:!0});var bi=i(Vt);v(Xs.$$.fragment,bi),m_=c(bi),Gl=r(bi,"P",{});var t5=i(Gl);f_=s(t5,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),t5.forEach(t),__=c(bi),Qs=r(bi,"UL",{});var Lp=i(Qs);Yr=r(Lp,"LI",{});var Dk=i(Yr);g_=s(Dk,"single sequence: "),Ul=r(Dk,"CODE",{});var n5=i(Ul);T_=s(n5,"X </s>"),n5.forEach(t),Dk.forEach(t),b_=c(Lp),Zr=r(Lp,"LI",{});var Sk=i(Zr);k_=s(Sk,"pair of sequences: "),Wl=r(Sk,"CODE",{});var o5=i(Wl);v_=s(o5,"A </s> B </s>"),o5.forEach(t),Sk.forEach(t),Lp.forEach(t),bi.forEach(t),y_=c(en),Zn=r(en,"DIV",{class:!0});var Ip=i(Zn);v(ea.$$.fragment,Ip),w_=c(Ip),Bl=r(Ip,"P",{});var s5=i(Bl);$_=s(s5,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),s5.forEach(t),Ip.forEach(t),en.forEach(t),Xc=c(n),hn=r(n,"H2",{class:!0});var Dp=i(hn);Jn=r(Dp,"A",{id:!0,class:!0,href:!0});var a5=i(Jn);Rl=r(a5,"SPAN",{});var r5=i(Rl);v(ta.$$.fragment,r5),r5.forEach(t),a5.forEach(t),x_=c(Dp),Hl=r(Dp,"SPAN",{});var i5=i(Hl);z_=s(i5,"T5Model"),i5.forEach(t),Dp.forEach(t),Qc=c(n),oe=r(n,"DIV",{class:!0});var Ie=i(oe);v(na.$$.fragment,Ie),j_=c(Ie),Kl=r(Ie,"P",{});var l5=i(Kl);E_=s(l5,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),l5.forEach(t),q_=c(Ie),oa=r(Ie,"P",{});var Sp=i(oa);F_=s(Sp,"The T5 model was proposed in "),sa=r(Sp,"A",{href:!0,rel:!0});var d5=i(sa);M_=s(d5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),d5.forEach(t),C_=s(Sp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Sp.forEach(t),P_=c(Ie),aa=r(Ie,"P",{});var Gp=i(aa);O_=s(Gp,"This model inherits from "),Jr=r(Gp,"A",{href:!0});var c5=i(Jr);N_=s(c5,"PreTrainedModel"),c5.forEach(t),A_=s(Gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp.forEach(t),L_=c(Ie),ra=r(Ie,"P",{});var Up=i(ra);I_=s(Up,"This model is also a PyTorch "),ia=r(Up,"A",{href:!0,rel:!0});var p5=i(ia);D_=s(p5,"torch.nn.Module"),p5.forEach(t),S_=s(Up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Up.forEach(t),G_=c(Ie),jt=r(Ie,"DIV",{class:!0});var Ro=i(jt);v(la.$$.fragment,Ro),U_=c(Ro),un=r(Ro,"P",{});var ki=i(un);W_=s(ki,"The "),Xr=r(ki,"A",{href:!0});var h5=i(Xr);B_=s(h5,"T5Model"),h5.forEach(t),R_=s(ki," forward method, overrides the "),Vl=r(ki,"CODE",{});var u5=i(Vl);H_=s(u5,"__call__"),u5.forEach(t),K_=s(ki," special method."),ki.forEach(t),V_=c(Ro),v(Xn.$$.fragment,Ro),Y_=c(Ro),v(Qn.$$.fragment,Ro),Ro.forEach(t),Z_=c(Ie),Et=r(Ie,"DIV",{class:!0});var Ho=i(Et);v(da.$$.fragment,Ho),J_=c(Ho),Yl=r(Ho,"P",{});var m5=i(Yl);X_=s(m5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),m5.forEach(t),Q_=c(Ho),Zl=r(Ho,"P",{});var f5=i(Zl);eg=s(f5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),f5.forEach(t),tg=c(Ho),v(eo.$$.fragment,Ho),Ho.forEach(t),ng=c(Ie),Yt=r(Ie,"DIV",{class:!0});var vi=i(Yt);v(ca.$$.fragment,vi),og=c(vi),Jl=r(vi,"P",{});var _5=i(Jl);sg=s(_5,"Moves the model to cpu from a model parallel state."),_5.forEach(t),ag=c(vi),v(to.$$.fragment,vi),vi.forEach(t),Ie.forEach(t),ep=c(n),mn=r(n,"H2",{class:!0});var Wp=i(mn);no=r(Wp,"A",{id:!0,class:!0,href:!0});var g5=i(no);Xl=r(g5,"SPAN",{});var T5=i(Xl);v(pa.$$.fragment,T5),T5.forEach(t),g5.forEach(t),rg=c(Wp),Ql=r(Wp,"SPAN",{});var b5=i(Ql);ig=s(b5,"T5ForConditionalGeneration"),b5.forEach(t),Wp.forEach(t),tp=c(n),se=r(n,"DIV",{class:!0});var De=i(se);v(ha.$$.fragment,De),lg=c(De),ua=r(De,"P",{});var Bp=i(ua);dg=s(Bp,"T5 Model with a "),ed=r(Bp,"CODE",{});var k5=i(ed);cg=s(k5,"language modeling"),k5.forEach(t),pg=s(Bp," head on top."),Bp.forEach(t),hg=c(De),ma=r(De,"P",{});var Rp=i(ma);ug=s(Rp,"The T5 model was proposed in "),fa=r(Rp,"A",{href:!0,rel:!0});var v5=i(fa);mg=s(v5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),v5.forEach(t),fg=s(Rp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Rp.forEach(t),_g=c(De),_a=r(De,"P",{});var Hp=i(_a);gg=s(Hp,"This model inherits from "),Qr=r(Hp,"A",{href:!0});var y5=i(Qr);Tg=s(y5,"PreTrainedModel"),y5.forEach(t),bg=s(Hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hp.forEach(t),kg=c(De),ga=r(De,"P",{});var Kp=i(ga);vg=s(Kp,"This model is also a PyTorch "),Ta=r(Kp,"A",{href:!0,rel:!0});var w5=i(Ta);yg=s(w5,"torch.nn.Module"),w5.forEach(t),wg=s(Kp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kp.forEach(t),$g=c(De),qt=r(De,"DIV",{class:!0});var Ko=i(qt);v(ba.$$.fragment,Ko),xg=c(Ko),fn=r(Ko,"P",{});var yi=i(fn);zg=s(yi,"The "),ei=r(yi,"A",{href:!0});var $5=i(ei);jg=s($5,"T5ForConditionalGeneration"),$5.forEach(t),Eg=s(yi," forward method, overrides the "),td=r(yi,"CODE",{});var x5=i(td);qg=s(x5,"__call__"),x5.forEach(t),Fg=s(yi," special method."),yi.forEach(t),Mg=c(Ko),v(oo.$$.fragment,Ko),Cg=c(Ko),v(so.$$.fragment,Ko),Ko.forEach(t),Pg=c(De),Ft=r(De,"DIV",{class:!0});var Vo=i(Ft);v(ka.$$.fragment,Vo),Og=c(Vo),nd=r(Vo,"P",{});var z5=i(nd);Ng=s(z5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),z5.forEach(t),Ag=c(Vo),od=r(Vo,"P",{});var j5=i(od);Lg=s(j5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),j5.forEach(t),Ig=c(Vo),v(ao.$$.fragment,Vo),Vo.forEach(t),Dg=c(De),Zt=r(De,"DIV",{class:!0});var wi=i(Zt);v(va.$$.fragment,wi),Sg=c(wi),sd=r(wi,"P",{});var E5=i(sd);Gg=s(E5,"Moves the model to cpu from a model parallel state."),E5.forEach(t),Ug=c(wi),v(ro.$$.fragment,wi),wi.forEach(t),De.forEach(t),np=c(n),_n=r(n,"H2",{class:!0});var Vp=i(_n);io=r(Vp,"A",{id:!0,class:!0,href:!0});var q5=i(io);ad=r(q5,"SPAN",{});var F5=i(ad);v(ya.$$.fragment,F5),F5.forEach(t),q5.forEach(t),Wg=c(Vp),rd=r(Vp,"SPAN",{});var M5=i(rd);Bg=s(M5,"T5EncoderModel"),M5.forEach(t),Vp.forEach(t),op=c(n),ae=r(n,"DIV",{class:!0});var Se=i(ae);v(wa.$$.fragment,Se),Rg=c(Se),id=r(Se,"P",{});var C5=i(id);Hg=s(C5,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),C5.forEach(t),Kg=c(Se),$a=r(Se,"P",{});var Yp=i($a);Vg=s(Yp,"The T5 model was proposed in "),xa=r(Yp,"A",{href:!0,rel:!0});var P5=i(xa);Yg=s(P5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),P5.forEach(t),Zg=s(Yp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Yp.forEach(t),Jg=c(Se),za=r(Se,"P",{});var Zp=i(za);Xg=s(Zp,"This model inherits from "),ti=r(Zp,"A",{href:!0});var O5=i(ti);Qg=s(O5,"PreTrainedModel"),O5.forEach(t),eT=s(Zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zp.forEach(t),tT=c(Se),ja=r(Se,"P",{});var Jp=i(ja);nT=s(Jp,"This model is also a PyTorch "),Ea=r(Jp,"A",{href:!0,rel:!0});var N5=i(Ea);oT=s(N5,"torch.nn.Module"),N5.forEach(t),sT=s(Jp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jp.forEach(t),aT=c(Se),Mt=r(Se,"DIV",{class:!0});var Yo=i(Mt);v(qa.$$.fragment,Yo),rT=c(Yo),gn=r(Yo,"P",{});var $i=i(gn);iT=s($i,"The "),ni=r($i,"A",{href:!0});var A5=i(ni);lT=s(A5,"T5EncoderModel"),A5.forEach(t),dT=s($i," forward method, overrides the "),ld=r($i,"CODE",{});var L5=i(ld);cT=s(L5,"__call__"),L5.forEach(t),pT=s($i," special method."),$i.forEach(t),hT=c(Yo),v(lo.$$.fragment,Yo),uT=c(Yo),v(co.$$.fragment,Yo),Yo.forEach(t),mT=c(Se),Ct=r(Se,"DIV",{class:!0});var Zo=i(Ct);v(Fa.$$.fragment,Zo),fT=c(Zo),dd=r(Zo,"P",{});var I5=i(dd);_T=s(I5,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),I5.forEach(t),gT=c(Zo),cd=r(Zo,"P",{});var D5=i(cd);TT=s(D5,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),D5.forEach(t),bT=c(Zo),v(po.$$.fragment,Zo),Zo.forEach(t),kT=c(Se),Jt=r(Se,"DIV",{class:!0});var xi=i(Jt);v(Ma.$$.fragment,xi),vT=c(xi),pd=r(xi,"P",{});var S5=i(pd);yT=s(S5,"Moves the model to cpu from a model parallel state."),S5.forEach(t),wT=c(xi),v(ho.$$.fragment,xi),xi.forEach(t),Se.forEach(t),sp=c(n),Tn=r(n,"H2",{class:!0});var Xp=i(Tn);uo=r(Xp,"A",{id:!0,class:!0,href:!0});var G5=i(uo);hd=r(G5,"SPAN",{});var U5=i(hd);v(Ca.$$.fragment,U5),U5.forEach(t),G5.forEach(t),$T=c(Xp),ud=r(Xp,"SPAN",{});var W5=i(ud);xT=s(W5,"TFT5Model"),W5.forEach(t),Xp.forEach(t),ap=c(n),ue=r(n,"DIV",{class:!0});var ut=i(ue);v(Pa.$$.fragment,ut),zT=c(ut),md=r(ut,"P",{});var B5=i(md);jT=s(B5,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),B5.forEach(t),ET=c(ut),Oa=r(ut,"P",{});var Qp=i(Oa);qT=s(Qp,"The T5 model was proposed in "),Na=r(Qp,"A",{href:!0,rel:!0});var R5=i(Na);FT=s(R5,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),R5.forEach(t),MT=s(Qp,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Qp.forEach(t),CT=c(ut),Aa=r(ut,"P",{});var eh=i(Aa);PT=s(eh,"This model inherits from "),oi=r(eh,"A",{href:!0});var H5=i(oi);OT=s(H5,"TFPreTrainedModel"),H5.forEach(t),NT=s(eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh.forEach(t),AT=c(ut),La=r(ut,"P",{});var th=i(La);LT=s(th,"This model is also a "),Ia=r(th,"A",{href:!0,rel:!0});var K5=i(Ia);IT=s(K5,"tf.keras.Model"),K5.forEach(t),DT=s(th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),th.forEach(t),ST=c(ut),v(mo.$$.fragment,ut),GT=c(ut),Pt=r(ut,"DIV",{class:!0});var Jo=i(Pt);v(Da.$$.fragment,Jo),UT=c(Jo),bn=r(Jo,"P",{});var zi=i(bn);WT=s(zi,"The "),si=r(zi,"A",{href:!0});var V5=i(si);BT=s(V5,"TFT5Model"),V5.forEach(t),RT=s(zi," forward method, overrides the "),fd=r(zi,"CODE",{});var Y5=i(fd);HT=s(Y5,"__call__"),Y5.forEach(t),KT=s(zi," special method."),zi.forEach(t),VT=c(Jo),v(fo.$$.fragment,Jo),YT=c(Jo),v(_o.$$.fragment,Jo),Jo.forEach(t),ut.forEach(t),rp=c(n),kn=r(n,"H2",{class:!0});var nh=i(kn);go=r(nh,"A",{id:!0,class:!0,href:!0});var Z5=i(go);_d=r(Z5,"SPAN",{});var J5=i(_d);v(Sa.$$.fragment,J5),J5.forEach(t),Z5.forEach(t),ZT=c(nh),gd=r(nh,"SPAN",{});var X5=i(gd);JT=s(X5,"TFT5ForConditionalGeneration"),X5.forEach(t),nh.forEach(t),ip=c(n),me=r(n,"DIV",{class:!0});var mt=i(me);v(Ga.$$.fragment,mt),XT=c(mt),Ua=r(mt,"P",{});var oh=i(Ua);QT=s(oh,"T5 Model with a "),Td=r(oh,"CODE",{});var Q5=i(Td);eb=s(Q5,"language modeling"),Q5.forEach(t),tb=s(oh," head on top."),oh.forEach(t),nb=c(mt),Wa=r(mt,"P",{});var sh=i(Wa);ob=s(sh,"The T5 model was proposed in "),Ba=r(sh,"A",{href:!0,rel:!0});var ew=i(Ba);sb=s(ew,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),ew.forEach(t),ab=s(sh,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),sh.forEach(t),rb=c(mt),Ra=r(mt,"P",{});var ah=i(Ra);ib=s(ah,"This model inherits from "),ai=r(ah,"A",{href:!0});var tw=i(ai);lb=s(tw,"TFPreTrainedModel"),tw.forEach(t),db=s(ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ah.forEach(t),cb=c(mt),Ha=r(mt,"P",{});var rh=i(Ha);pb=s(rh,"This model is also a "),Ka=r(rh,"A",{href:!0,rel:!0});var nw=i(Ka);hb=s(nw,"tf.keras.Model"),nw.forEach(t),ub=s(rh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rh.forEach(t),mb=c(mt),v(To.$$.fragment,mt),fb=c(mt),Ot=r(mt,"DIV",{class:!0});var Xo=i(Ot);v(Va.$$.fragment,Xo),_b=c(Xo),vn=r(Xo,"P",{});var ji=i(vn);gb=s(ji,"The "),ri=r(ji,"A",{href:!0});var ow=i(ri);Tb=s(ow,"TFT5ForConditionalGeneration"),ow.forEach(t),bb=s(ji," forward method, overrides the "),bd=r(ji,"CODE",{});var sw=i(bd);kb=s(sw,"__call__"),sw.forEach(t),vb=s(ji," special method."),ji.forEach(t),yb=c(Xo),v(bo.$$.fragment,Xo),wb=c(Xo),v(ko.$$.fragment,Xo),Xo.forEach(t),mt.forEach(t),lp=c(n),yn=r(n,"H2",{class:!0});var ih=i(yn);vo=r(ih,"A",{id:!0,class:!0,href:!0});var aw=i(vo);kd=r(aw,"SPAN",{});var rw=i(kd);v(Ya.$$.fragment,rw),rw.forEach(t),aw.forEach(t),$b=c(ih),vd=r(ih,"SPAN",{});var iw=i(vd);xb=s(iw,"TFT5EncoderModel"),iw.forEach(t),ih.forEach(t),dp=c(n),fe=r(n,"DIV",{class:!0});var ft=i(fe);v(Za.$$.fragment,ft),zb=c(ft),yd=r(ft,"P",{});var lw=i(yd);jb=s(lw,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),lw.forEach(t),Eb=c(ft),Ja=r(ft,"P",{});var lh=i(Ja);qb=s(lh,"The T5 model was proposed in "),Xa=r(lh,"A",{href:!0,rel:!0});var dw=i(Xa);Fb=s(dw,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),dw.forEach(t),Mb=s(lh,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),lh.forEach(t),Cb=c(ft),Qa=r(ft,"P",{});var dh=i(Qa);Pb=s(dh,"This model inherits from "),ii=r(dh,"A",{href:!0});var cw=i(ii);Ob=s(cw,"TFPreTrainedModel"),cw.forEach(t),Nb=s(dh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dh.forEach(t),Ab=c(ft),er=r(ft,"P",{});var ch=i(er);Lb=s(ch,"This model is also a "),tr=r(ch,"A",{href:!0,rel:!0});var pw=i(tr);Ib=s(pw,"tf.keras.Model"),pw.forEach(t),Db=s(ch,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ch.forEach(t),Sb=c(ft),v(yo.$$.fragment,ft),Gb=c(ft),Nt=r(ft,"DIV",{class:!0});var Qo=i(Nt);v(nr.$$.fragment,Qo),Ub=c(Qo),wn=r(Qo,"P",{});var Ei=i(wn);Wb=s(Ei,"The "),li=r(Ei,"A",{href:!0});var hw=i(li);Bb=s(hw,"TFT5EncoderModel"),hw.forEach(t),Rb=s(Ei," forward method, overrides the "),wd=r(Ei,"CODE",{});var uw=i(wd);Hb=s(uw,"__call__"),uw.forEach(t),Kb=s(Ei," special method."),Ei.forEach(t),Vb=c(Qo),v(wo.$$.fragment,Qo),Yb=c(Qo),v($o.$$.fragment,Qo),Qo.forEach(t),ft.forEach(t),cp=c(n),$n=r(n,"H2",{class:!0});var ph=i($n);xo=r(ph,"A",{id:!0,class:!0,href:!0});var mw=i(xo);$d=r(mw,"SPAN",{});var fw=i($d);v(or.$$.fragment,fw),fw.forEach(t),mw.forEach(t),Zb=c(ph),xd=r(ph,"SPAN",{});var _w=i(xd);Jb=s(_w,"FlaxT5Model"),_w.forEach(t),ph.forEach(t),pp=c(n),_t=r(n,"DIV",{class:!0});var es=i(_t);v(sr.$$.fragment,es),Xb=c(es),At=r(es,"DIV",{class:!0});var ts=i(At);v(ar.$$.fragment,ts),Qb=c(ts),xn=r(ts,"P",{});var qi=i(xn);ek=s(qi,"The "),zd=r(qi,"CODE",{});var gw=i(zd);tk=s(gw,"FlaxT5PreTrainedModel"),gw.forEach(t),nk=s(qi," forward method, overrides the "),jd=r(qi,"CODE",{});var Tw=i(jd);ok=s(Tw,"__call__"),Tw.forEach(t),sk=s(qi," special method."),qi.forEach(t),ak=c(ts),v(zo.$$.fragment,ts),rk=c(ts),v(jo.$$.fragment,ts),ts.forEach(t),ik=c(es),Eo=r(es,"DIV",{class:!0});var hh=i(Eo);v(rr.$$.fragment,hh),lk=c(hh),v(qo.$$.fragment,hh),hh.forEach(t),dk=c(es),Fo=r(es,"DIV",{class:!0});var uh=i(Fo);v(ir.$$.fragment,uh),ck=c(uh),v(Mo.$$.fragment,uh),uh.forEach(t),es.forEach(t),hp=c(n),zn=r(n,"H2",{class:!0});var mh=i(zn);Co=r(mh,"A",{id:!0,class:!0,href:!0});var bw=i(Co);Ed=r(bw,"SPAN",{});var kw=i(Ed);v(lr.$$.fragment,kw),kw.forEach(t),bw.forEach(t),pk=c(mh),qd=r(mh,"SPAN",{});var vw=i(qd);hk=s(vw,"FlaxT5ForConditionalGeneration"),vw.forEach(t),mh.forEach(t),up=c(n),gt=r(n,"DIV",{class:!0});var ns=i(gt);v(dr.$$.fragment,ns),uk=c(ns),Lt=r(ns,"DIV",{class:!0});var os=i(Lt);v(cr.$$.fragment,os),mk=c(os),jn=r(os,"P",{});var Fi=i(jn);fk=s(Fi,"The "),Fd=r(Fi,"CODE",{});var yw=i(Fd);_k=s(yw,"FlaxT5PreTrainedModel"),yw.forEach(t),gk=s(Fi," forward method, overrides the "),Md=r(Fi,"CODE",{});var ww=i(Md);Tk=s(ww,"__call__"),ww.forEach(t),bk=s(Fi," special method."),Fi.forEach(t),kk=c(os),v(Po.$$.fragment,os),vk=c(os),v(Oo.$$.fragment,os),os.forEach(t),yk=c(ns),No=r(ns,"DIV",{class:!0});var fh=i(No);v(pr.$$.fragment,fh),wk=c(fh),v(Ao.$$.fragment,fh),fh.forEach(t),$k=c(ns),Lo=r(ns,"DIV",{class:!0});var _h=i(Lo);v(hr.$$.fragment,_h),xk=c(_h),v(Io.$$.fragment,_h),_h.forEach(t),ns.forEach(t),mp=c(n),En=r(n,"H2",{class:!0});var gh=i(En);Do=r(gh,"A",{id:!0,class:!0,href:!0});var $w=i(Do);Cd=r($w,"SPAN",{});var xw=i(Cd);v(ur.$$.fragment,xw),xw.forEach(t),$w.forEach(t),zk=c(gh),Pd=r(gh,"SPAN",{});var zw=i(Pd);jk=s(zw,"FlaxT5EncoderModel"),zw.forEach(t),gh.forEach(t),fp=c(n),qn=r(n,"DIV",{class:!0});var Th=i(qn);v(mr.$$.fragment,Th),Ek=c(Th),Xt=r(Th,"DIV",{class:!0});var Mi=i(Xt);v(fr.$$.fragment,Mi),qk=c(Mi),Fn=r(Mi,"P",{});var Ci=i(Fn);Fk=s(Ci,"The "),di=r(Ci,"A",{href:!0});var jw=i(di);Mk=s(jw,"FlaxT5EncoderModel"),jw.forEach(t),Ck=s(Ci," forward method, overrides the "),Od=r(Ci,"CODE",{});var Ew=i(Od);Pk=s(Ew,"__call__"),Ew.forEach(t),Ok=s(Ci," special method."),Ci.forEach(t),Nk=c(Mi),v(So.$$.fragment,Mi),Mi.forEach(t),Th.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(p1)),h(_,"id","t5"),h(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_,"href","#t5"),h(g,"class","relative group"),h(re,"id","overview"),h(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(re,"href","#overview"),h(S,"class","relative group"),h(de,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(de,"rel","nofollow"),h(te,"href","#training"),h(L,"href","#inference"),h(z,"href","#scripts"),h(Oe,"href","https://huggingface.co/t5-small"),h(Oe,"rel","nofollow"),h(Ne,"href","https://huggingface.co/t5-base"),h(Ne,"rel","nofollow"),h(Ae,"href","https://huggingface.co/t5-large"),h(Ae,"rel","nofollow"),h(ss,"href","https://huggingface.co/t5-3b"),h(ss,"rel","nofollow"),h(as,"href","https://huggingface.co/t5-11b"),h(as,"rel","nofollow"),h(vr,"href","t5v1.1"),h(yr,"href","mt5"),h(wr,"href","byt5"),h(rs,"href","https://huggingface.co/models?search=t5"),h(rs,"rel","nofollow"),h(is,"href","https://huggingface.co/thomwolf"),h(is,"rel","nofollow"),h(ls,"href","https://github.com/google-research/text-to-text-transfer-transformer"),h(ls,"rel","nofollow"),h($r,"id","training"),h(Ln,"id","training"),h(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Ln,"href","#training"),h(tn,"class","relative group"),h(xr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(jr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Tokenizer"),h(ps,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),h(ps,"rel","nofollow"),h(us,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(us,"rel","nofollow"),h(_s,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),h(_s,"rel","nofollow"),h(gs,"href","https://arxiv.org/pdf/1910.10683.pdf"),h(gs,"rel","nofollow"),h(Pr,"id","inference"),h(Gn,"id","inference"),h(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gn,"href","#inference"),h(nn,"class","relative group"),h(Or,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(bs,"href","https://huggingface.co/blog/how-to-generate"),h(bs,"rel","nofollow"),h(ks,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),h(ks,"rel","nofollow"),h(Nr,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),h(Ir,"id","scripts"),h(Un,"id","performance"),h(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Un,"href","#performance"),h(on,"class","relative group"),h(xs,"href","https://github.com/NVIDIA/apex#quick-start"),h(xs,"rel","nofollow"),h(Wn,"id","example-scripts"),h(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wn,"href","#example-scripts"),h(sn,"class","relative group"),h(js,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/run_t5_mlm_flax.py"),h(js,"rel","nofollow"),h(Es,"href","https://github.com/huggingface/transformers/blob/main/examples/flax/language-modeling/t5_tokenizer_model.py"),h(Es,"rel","nofollow"),h(qs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),h(qs,"rel","nofollow"),h(Fs,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),h(Fs,"rel","nofollow"),h(Ms,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),h(Ms,"rel","nofollow"),h(Cs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),h(Cs,"rel","nofollow"),h(Ps,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),h(Ps,"rel","nofollow"),h(Rn,"id","transformers.T5Config"),h(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Rn,"href","#transformers.T5Config"),h(rn,"class","relative group"),h(Sr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),h(Gr,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),h(As,"href","https://huggingface.co/t5-small"),h(As,"rel","nofollow"),h(Ur,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Wr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Hn,"id","transformers.T5Tokenizer"),h(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Hn,"href","#transformers.T5Tokenizer"),h(dn,"class","relative group"),h(Ss,"href","https://github.com/google/sentencepiece"),h(Ss,"rel","nofollow"),h(Br,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Kr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yn,"id","transformers.T5TokenizerFast"),h(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yn,"href","#transformers.T5TokenizerFast"),h(cn,"class","relative group"),h(Zs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),h(Zs,"rel","nofollow"),h(Vr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jn,"id","transformers.T5Model"),h(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Jn,"href","#transformers.T5Model"),h(hn,"class","relative group"),h(sa,"href","https://arxiv.org/abs/1910.10683"),h(sa,"rel","nofollow"),h(Jr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(ia,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(ia,"rel","nofollow"),h(Xr,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),h(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(no,"id","transformers.T5ForConditionalGeneration"),h(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(no,"href","#transformers.T5ForConditionalGeneration"),h(mn,"class","relative group"),h(fa,"href","https://arxiv.org/abs/1910.10683"),h(fa,"rel","nofollow"),h(Qr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ta,"rel","nofollow"),h(ei,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),h(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(io,"id","transformers.T5EncoderModel"),h(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(io,"href","#transformers.T5EncoderModel"),h(_n,"class","relative group"),h(xa,"href","https://arxiv.org/abs/1910.10683"),h(xa,"rel","nofollow"),h(ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Ea,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ea,"rel","nofollow"),h(ni,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5EncoderModel"),h(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(uo,"id","transformers.TFT5Model"),h(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(uo,"href","#transformers.TFT5Model"),h(Tn,"class","relative group"),h(Na,"href","https://arxiv.org/abs/1910.10683"),h(Na,"rel","nofollow"),h(oi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ia,"rel","nofollow"),h(si,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),h(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(go,"id","transformers.TFT5ForConditionalGeneration"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.TFT5ForConditionalGeneration"),h(kn,"class","relative group"),h(Ba,"href","https://arxiv.org/abs/1910.10683"),h(Ba,"rel","nofollow"),h(ai,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ka,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ka,"rel","nofollow"),h(ri,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),h(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(vo,"id","transformers.TFT5EncoderModel"),h(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(vo,"href","#transformers.TFT5EncoderModel"),h(yn,"class","relative group"),h(Xa,"href","https://arxiv.org/abs/1910.10683"),h(Xa,"rel","nofollow"),h(ii,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(tr,"rel","nofollow"),h(li,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5EncoderModel"),h(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(xo,"id","transformers.FlaxT5Model"),h(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xo,"href","#transformers.FlaxT5Model"),h($n,"class","relative group"),h(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Co,"id","transformers.FlaxT5ForConditionalGeneration"),h(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Co,"href","#transformers.FlaxT5ForConditionalGeneration"),h(zn,"class","relative group"),h(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Do,"id","transformers.FlaxT5EncoderModel"),h(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Do,"href","#transformers.FlaxT5EncoderModel"),h(En,"class","relative group"),h(di,"href","/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5EncoderModel"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,f){e(document.head,p),m(n,b,f),m(n,g,f),e(g,_),e(_,T),y(l,T,null),e(g,u),e(g,q),e(q,Ge),m(n,qe,f),m(n,S,f),e(S,re),e(re,ie),y(E,ie,null),e(S,Ue),e(S,K),e(K,We),m(n,Fe,f),m(n,G,f),e(G,Be),e(G,de),e(de,J),e(G,Re),m(n,Me,f),m(n,U,f),e(U,He),m(n,Ce,f),m(n,W,f),e(W,ye),e(ye,Ke),m(n,ce,f),m(n,C,f),e(C,O),m(n,Pe,f),m(n,D,f),e(D,we),e(we,X),e(X,Q),e(X,$e),e($e,Ve),e(X,N),e(X,xe),e(xe,ee),e(X,Ye),e(D,Ze),e(D,V),e(V,ze),e(ze,Je),e(D,B),e(D,je),e(je,I),e(I,Xe),e(I,te),e(te,A),e(I,Qe),e(I,L),e(L,et),e(I,tt),e(I,z),e(z,F),e(I,bt),m(n,pe,f),m(n,nt,f),e(nt,kt),m(n,M,f),m(n,Y,f),e(Y,at),e(at,rt),e(rt,Oe),e(Oe,vt),e(Y,R),e(Y,Z),e(Z,it),e(it,Ne),e(Ne,ne),e(Y,yt),e(Y,lt),e(lt,Ee),e(Ee,Ae),e(Ae,_e),e(Y,wt),e(Y,Pi),e(Pi,Oi),e(Oi,ss),e(ss,bh),e(Y,kh),e(Y,Ni),e(Ni,br),e(br,as),e(as,vh),e(br,yh),m(n,ic,f),m(n,kr,f),e(kr,wh),m(n,lc,f),m(n,Wt,f),e(Wt,Ai),e(Ai,Pn),e(Pn,Li),e(Li,$h),e(Pn,xh),e(Pn,vr),e(vr,zh),e(Pn,jh),e(Wt,Eh),e(Wt,Ii),e(Ii,On),e(On,Di),e(Di,qh),e(On,Fh),e(On,yr),e(yr,Mh),e(On,Ch),e(Wt,Ph),e(Wt,Si),e(Si,Nn),e(Nn,Gi),e(Gi,Oh),e(Nn,Nh),e(Nn,wr),e(wr,Ah),e(Nn,Lh),m(n,dc,f),m(n,An,f),e(An,Ih),e(An,rs),e(rs,Dh),e(An,Sh),m(n,cc,f),m(n,Bt,f),e(Bt,Gh),e(Bt,is),e(is,Uh),e(Bt,Wh),e(Bt,ls),e(ls,Bh),e(Bt,Rh),m(n,pc,f),m(n,$r,f),m(n,hc,f),m(n,tn,f),e(tn,Ln),e(Ln,Ui),y(ds,Ui,null),e(tn,Hh),e(tn,Wi),e(Wi,Kh),m(n,uc,f),m(n,$t,f),e($t,Vh),e($t,Bi),e(Bi,Yh),e($t,Zh),e($t,Ri),e(Ri,Jh),e($t,Xh),e($t,Hi),e(Hi,Qh),e($t,eu),m(n,mc,f),m(n,In,f),e(In,tu),e(In,xr),e(xr,nu),e(In,ou),m(n,fc,f),m(n,zr,f),e(zr,Ki),e(Ki,su),m(n,_c,f),m(n,ge,f),e(ge,au),e(ge,Vi),e(Vi,ru),e(ge,iu),e(ge,Yi),e(Yi,lu),e(ge,du),e(ge,Zi),e(Zi,cu),e(ge,pu),e(ge,Ji),e(Ji,hu),e(ge,uu),e(ge,Xi),e(Xi,mu),e(ge,fu),e(ge,jr),e(jr,_u),e(ge,gu),m(n,gc,f),m(n,Er,f),e(Er,Tu),m(n,Tc,f),y(cs,n,f),m(n,bc,f),m(n,Dn,f),e(Dn,bu),e(Dn,ps),e(ps,ku),e(Dn,vu),m(n,kc,f),m(n,qr,f),e(qr,Qi),e(Qi,yu),m(n,vc,f),m(n,Fr,f),e(Fr,wu),m(n,yc,f),y(hs,n,f),m(n,wc,f),m(n,le,f),e(le,$u),e(le,el),e(el,xu),e(le,zu),e(le,tl),e(tl,ju),e(le,Eu),e(le,nl),e(nl,qu),e(le,Fu),e(le,ol),e(ol,Mu),e(le,Cu),e(le,sl),e(sl,Pu),e(le,Ou),e(le,al),e(al,Nu),e(le,Au),e(le,rl),e(rl,Lu),e(le,Iu),m(n,$c,f),m(n,Rt,f),e(Rt,Du),e(Rt,il),e(il,Su),e(Rt,Gu),e(Rt,ll),e(ll,Uu),e(Rt,Wu),m(n,xc,f),m(n,Te,f),e(Te,Bu),e(Te,dl),e(dl,Ru),e(Te,Hu),e(Te,cl),e(cl,Ku),e(Te,Vu),e(Te,pl),e(pl,Yu),e(Te,Zu),e(Te,hl),e(hl,Ju),e(Te,Xu),e(Te,us),e(us,Qu),e(Te,em),e(Te,ul),e(ul,tm),e(Te,nm),m(n,zc,f),y(ms,n,f),m(n,jc,f),m(n,Mr,f),e(Mr,om),m(n,Ec,f),m(n,Cr,f),e(Cr,fs),e(fs,sm),e(fs,ml),e(ml,am),e(fs,rm),m(n,qc,f),m(n,Ht,f),e(Ht,im),e(Ht,_s),e(_s,lm),e(Ht,dm),e(Ht,gs),e(gs,cm),e(Ht,pm),m(n,Fc,f),m(n,Sn,f),e(Sn,hm),e(Sn,fl),e(fl,um),e(Sn,mm),m(n,Mc,f),m(n,Pr,f),m(n,Cc,f),m(n,nn,f),e(nn,Gn),e(Gn,_l),y(Ts,_l,null),e(nn,fm),e(nn,gl),e(gl,_m),m(n,Pc,f),m(n,xt,f),e(xt,gm),e(xt,Or),e(Or,Tm),e(xt,bm),e(xt,bs),e(bs,km),e(xt,vm),e(xt,ks),e(ks,ym),e(xt,wm),m(n,Oc,f),y(vs,n,f),m(n,Nc,f),m(n,dt,f),e(dt,$m),e(dt,Tl),e(Tl,xm),e(dt,zm),e(dt,bl),e(bl,jm),e(dt,Em),e(dt,Nr),e(Nr,qm),e(dt,Fm),e(dt,kl),e(kl,Mm),e(dt,Cm),m(n,Ac,f),m(n,Ar,f),e(Ar,Pm),m(n,Lc,f),y(ys,n,f),m(n,Ic,f),m(n,Lr,f),e(Lr,Om),m(n,Dc,f),y(ws,n,f),m(n,Sc,f),m(n,Ir,f),m(n,Gc,f),m(n,on,f),e(on,Un),e(Un,vl),y($s,vl,null),e(on,Nm),e(on,yl),e(yl,Am),m(n,Uc,f),m(n,zt,f),e(zt,Lm),e(zt,xs),e(xs,Im),e(zt,Dm),e(zt,wl),e(wl,Sm),e(zt,Gm),e(zt,$l),e($l,Um),e(zt,Wm),m(n,Wc,f),m(n,sn,f),e(sn,Wn),e(Wn,xl),y(zs,xl,null),e(sn,Bm),e(sn,zl),e(zl,Rm),m(n,Bc,f),m(n,Dr,f),e(Dr,Hm),m(n,Rc,f),m(n,Bn,f),e(Bn,jl),e(jl,an),e(an,Km),e(an,js),e(js,Vm),e(an,Ym),e(an,Es),e(Es,Zm),e(an,Jm),e(Bn,Xm),e(Bn,El),e(El,ot),e(ot,Qm),e(ot,qs),e(qs,ef),e(ot,tf),e(ot,Fs),e(Fs,nf),e(ot,of),e(ot,Ms),e(Ms,sf),e(ot,af),e(ot,Cs),e(Cs,rf),e(ot,lf),e(ot,Ps),e(Ps,df),e(ot,cf),m(n,Hc,f),m(n,rn,f),e(rn,Rn),e(Rn,ql),y(Os,ql,null),e(rn,pf),e(rn,Fl),e(Fl,hf),m(n,Kc,f),m(n,St,f),y(Ns,St,null),e(St,uf),e(St,Gt),e(Gt,mf),e(Gt,Sr),e(Sr,ff),e(Gt,_f),e(Gt,Gr),e(Gr,gf),e(Gt,Tf),e(Gt,As),e(As,bf),e(Gt,kf),e(St,vf),e(St,ln),e(ln,yf),e(ln,Ur),e(Ur,wf),e(ln,$f),e(ln,Wr),e(Wr,xf),e(ln,zf),m(n,Vc,f),m(n,dn,f),e(dn,Hn),e(Hn,Ml),y(Ls,Ml,null),e(dn,jf),e(dn,Cl),e(Cl,Ef),m(n,Yc,f),m(n,he,f),y(Is,he,null),e(he,qf),e(he,Ds),e(Ds,Ff),e(Ds,Ss),e(Ss,Mf),e(Ds,Cf),e(he,Pf),e(he,Gs),e(Gs,Of),e(Gs,Br),e(Br,Nf),e(Gs,Af),e(he,Lf),e(he,Kt),y(Us,Kt,null),e(Kt,If),e(Kt,Pl),e(Pl,Df),e(Kt,Sf),e(Kt,Ws),e(Ws,Rr),e(Rr,Gf),e(Rr,Ol),e(Ol,Uf),e(Ws,Wf),e(Ws,Hr),e(Hr,Bf),e(Hr,Nl),e(Nl,Rf),e(he,Hf),e(he,Kn),y(Bs,Kn,null),e(Kn,Kf),e(Kn,Rs),e(Rs,Vf),e(Rs,Al),e(Al,Yf),e(Rs,Zf),e(he,Jf),e(he,Vn),y(Hs,Vn,null),e(Vn,Xf),e(Vn,Ll),e(Ll,Qf),e(he,e_),e(he,Kr),y(Ks,Kr,null),m(n,Zc,f),m(n,cn,f),e(cn,Yn),e(Yn,Il),y(Vs,Il,null),e(cn,t_),e(cn,Dl),e(Dl,n_),m(n,Jc,f),m(n,st,f),y(Ys,st,null),e(st,o_),e(st,pn),e(pn,s_),e(pn,Sl),e(Sl,a_),e(pn,r_),e(pn,Zs),e(Zs,i_),e(pn,l_),e(st,d_),e(st,Js),e(Js,c_),e(Js,Vr),e(Vr,p_),e(Js,h_),e(st,u_),e(st,Vt),y(Xs,Vt,null),e(Vt,m_),e(Vt,Gl),e(Gl,f_),e(Vt,__),e(Vt,Qs),e(Qs,Yr),e(Yr,g_),e(Yr,Ul),e(Ul,T_),e(Qs,b_),e(Qs,Zr),e(Zr,k_),e(Zr,Wl),e(Wl,v_),e(st,y_),e(st,Zn),y(ea,Zn,null),e(Zn,w_),e(Zn,Bl),e(Bl,$_),m(n,Xc,f),m(n,hn,f),e(hn,Jn),e(Jn,Rl),y(ta,Rl,null),e(hn,x_),e(hn,Hl),e(Hl,z_),m(n,Qc,f),m(n,oe,f),y(na,oe,null),e(oe,j_),e(oe,Kl),e(Kl,E_),e(oe,q_),e(oe,oa),e(oa,F_),e(oa,sa),e(sa,M_),e(oa,C_),e(oe,P_),e(oe,aa),e(aa,O_),e(aa,Jr),e(Jr,N_),e(aa,A_),e(oe,L_),e(oe,ra),e(ra,I_),e(ra,ia),e(ia,D_),e(ra,S_),e(oe,G_),e(oe,jt),y(la,jt,null),e(jt,U_),e(jt,un),e(un,W_),e(un,Xr),e(Xr,B_),e(un,R_),e(un,Vl),e(Vl,H_),e(un,K_),e(jt,V_),y(Xn,jt,null),e(jt,Y_),y(Qn,jt,null),e(oe,Z_),e(oe,Et),y(da,Et,null),e(Et,J_),e(Et,Yl),e(Yl,X_),e(Et,Q_),e(Et,Zl),e(Zl,eg),e(Et,tg),y(eo,Et,null),e(oe,ng),e(oe,Yt),y(ca,Yt,null),e(Yt,og),e(Yt,Jl),e(Jl,sg),e(Yt,ag),y(to,Yt,null),m(n,ep,f),m(n,mn,f),e(mn,no),e(no,Xl),y(pa,Xl,null),e(mn,rg),e(mn,Ql),e(Ql,ig),m(n,tp,f),m(n,se,f),y(ha,se,null),e(se,lg),e(se,ua),e(ua,dg),e(ua,ed),e(ed,cg),e(ua,pg),e(se,hg),e(se,ma),e(ma,ug),e(ma,fa),e(fa,mg),e(ma,fg),e(se,_g),e(se,_a),e(_a,gg),e(_a,Qr),e(Qr,Tg),e(_a,bg),e(se,kg),e(se,ga),e(ga,vg),e(ga,Ta),e(Ta,yg),e(ga,wg),e(se,$g),e(se,qt),y(ba,qt,null),e(qt,xg),e(qt,fn),e(fn,zg),e(fn,ei),e(ei,jg),e(fn,Eg),e(fn,td),e(td,qg),e(fn,Fg),e(qt,Mg),y(oo,qt,null),e(qt,Cg),y(so,qt,null),e(se,Pg),e(se,Ft),y(ka,Ft,null),e(Ft,Og),e(Ft,nd),e(nd,Ng),e(Ft,Ag),e(Ft,od),e(od,Lg),e(Ft,Ig),y(ao,Ft,null),e(se,Dg),e(se,Zt),y(va,Zt,null),e(Zt,Sg),e(Zt,sd),e(sd,Gg),e(Zt,Ug),y(ro,Zt,null),m(n,np,f),m(n,_n,f),e(_n,io),e(io,ad),y(ya,ad,null),e(_n,Wg),e(_n,rd),e(rd,Bg),m(n,op,f),m(n,ae,f),y(wa,ae,null),e(ae,Rg),e(ae,id),e(id,Hg),e(ae,Kg),e(ae,$a),e($a,Vg),e($a,xa),e(xa,Yg),e($a,Zg),e(ae,Jg),e(ae,za),e(za,Xg),e(za,ti),e(ti,Qg),e(za,eT),e(ae,tT),e(ae,ja),e(ja,nT),e(ja,Ea),e(Ea,oT),e(ja,sT),e(ae,aT),e(ae,Mt),y(qa,Mt,null),e(Mt,rT),e(Mt,gn),e(gn,iT),e(gn,ni),e(ni,lT),e(gn,dT),e(gn,ld),e(ld,cT),e(gn,pT),e(Mt,hT),y(lo,Mt,null),e(Mt,uT),y(co,Mt,null),e(ae,mT),e(ae,Ct),y(Fa,Ct,null),e(Ct,fT),e(Ct,dd),e(dd,_T),e(Ct,gT),e(Ct,cd),e(cd,TT),e(Ct,bT),y(po,Ct,null),e(ae,kT),e(ae,Jt),y(Ma,Jt,null),e(Jt,vT),e(Jt,pd),e(pd,yT),e(Jt,wT),y(ho,Jt,null),m(n,sp,f),m(n,Tn,f),e(Tn,uo),e(uo,hd),y(Ca,hd,null),e(Tn,$T),e(Tn,ud),e(ud,xT),m(n,ap,f),m(n,ue,f),y(Pa,ue,null),e(ue,zT),e(ue,md),e(md,jT),e(ue,ET),e(ue,Oa),e(Oa,qT),e(Oa,Na),e(Na,FT),e(Oa,MT),e(ue,CT),e(ue,Aa),e(Aa,PT),e(Aa,oi),e(oi,OT),e(Aa,NT),e(ue,AT),e(ue,La),e(La,LT),e(La,Ia),e(Ia,IT),e(La,DT),e(ue,ST),y(mo,ue,null),e(ue,GT),e(ue,Pt),y(Da,Pt,null),e(Pt,UT),e(Pt,bn),e(bn,WT),e(bn,si),e(si,BT),e(bn,RT),e(bn,fd),e(fd,HT),e(bn,KT),e(Pt,VT),y(fo,Pt,null),e(Pt,YT),y(_o,Pt,null),m(n,rp,f),m(n,kn,f),e(kn,go),e(go,_d),y(Sa,_d,null),e(kn,ZT),e(kn,gd),e(gd,JT),m(n,ip,f),m(n,me,f),y(Ga,me,null),e(me,XT),e(me,Ua),e(Ua,QT),e(Ua,Td),e(Td,eb),e(Ua,tb),e(me,nb),e(me,Wa),e(Wa,ob),e(Wa,Ba),e(Ba,sb),e(Wa,ab),e(me,rb),e(me,Ra),e(Ra,ib),e(Ra,ai),e(ai,lb),e(Ra,db),e(me,cb),e(me,Ha),e(Ha,pb),e(Ha,Ka),e(Ka,hb),e(Ha,ub),e(me,mb),y(To,me,null),e(me,fb),e(me,Ot),y(Va,Ot,null),e(Ot,_b),e(Ot,vn),e(vn,gb),e(vn,ri),e(ri,Tb),e(vn,bb),e(vn,bd),e(bd,kb),e(vn,vb),e(Ot,yb),y(bo,Ot,null),e(Ot,wb),y(ko,Ot,null),m(n,lp,f),m(n,yn,f),e(yn,vo),e(vo,kd),y(Ya,kd,null),e(yn,$b),e(yn,vd),e(vd,xb),m(n,dp,f),m(n,fe,f),y(Za,fe,null),e(fe,zb),e(fe,yd),e(yd,jb),e(fe,Eb),e(fe,Ja),e(Ja,qb),e(Ja,Xa),e(Xa,Fb),e(Ja,Mb),e(fe,Cb),e(fe,Qa),e(Qa,Pb),e(Qa,ii),e(ii,Ob),e(Qa,Nb),e(fe,Ab),e(fe,er),e(er,Lb),e(er,tr),e(tr,Ib),e(er,Db),e(fe,Sb),y(yo,fe,null),e(fe,Gb),e(fe,Nt),y(nr,Nt,null),e(Nt,Ub),e(Nt,wn),e(wn,Wb),e(wn,li),e(li,Bb),e(wn,Rb),e(wn,wd),e(wd,Hb),e(wn,Kb),e(Nt,Vb),y(wo,Nt,null),e(Nt,Yb),y($o,Nt,null),m(n,cp,f),m(n,$n,f),e($n,xo),e(xo,$d),y(or,$d,null),e($n,Zb),e($n,xd),e(xd,Jb),m(n,pp,f),m(n,_t,f),y(sr,_t,null),e(_t,Xb),e(_t,At),y(ar,At,null),e(At,Qb),e(At,xn),e(xn,ek),e(xn,zd),e(zd,tk),e(xn,nk),e(xn,jd),e(jd,ok),e(xn,sk),e(At,ak),y(zo,At,null),e(At,rk),y(jo,At,null),e(_t,ik),e(_t,Eo),y(rr,Eo,null),e(Eo,lk),y(qo,Eo,null),e(_t,dk),e(_t,Fo),y(ir,Fo,null),e(Fo,ck),y(Mo,Fo,null),m(n,hp,f),m(n,zn,f),e(zn,Co),e(Co,Ed),y(lr,Ed,null),e(zn,pk),e(zn,qd),e(qd,hk),m(n,up,f),m(n,gt,f),y(dr,gt,null),e(gt,uk),e(gt,Lt),y(cr,Lt,null),e(Lt,mk),e(Lt,jn),e(jn,fk),e(jn,Fd),e(Fd,_k),e(jn,gk),e(jn,Md),e(Md,Tk),e(jn,bk),e(Lt,kk),y(Po,Lt,null),e(Lt,vk),y(Oo,Lt,null),e(gt,yk),e(gt,No),y(pr,No,null),e(No,wk),y(Ao,No,null),e(gt,$k),e(gt,Lo),y(hr,Lo,null),e(Lo,xk),y(Io,Lo,null),m(n,mp,f),m(n,En,f),e(En,Do),e(Do,Cd),y(ur,Cd,null),e(En,zk),e(En,Pd),e(Pd,jk),m(n,fp,f),m(n,qn,f),y(mr,qn,null),e(qn,Ek),e(qn,Xt),y(fr,Xt,null),e(Xt,qk),e(Xt,Fn),e(Fn,Fk),e(Fn,di),e(di,Mk),e(Fn,Ck),e(Fn,Od),e(Od,Pk),e(Fn,Ok),e(Xt,Nk),y(So,Xt,null),_p=!0},p(n,[f]){const _r={};f&2&&(_r.$$scope={dirty:f,ctx:n}),Xn.$set(_r);const Nd={};f&2&&(Nd.$$scope={dirty:f,ctx:n}),Qn.$set(Nd);const Ad={};f&2&&(Ad.$$scope={dirty:f,ctx:n}),eo.$set(Ad);const Ld={};f&2&&(Ld.$$scope={dirty:f,ctx:n}),to.$set(Ld);const gr={};f&2&&(gr.$$scope={dirty:f,ctx:n}),oo.$set(gr);const Id={};f&2&&(Id.$$scope={dirty:f,ctx:n}),so.$set(Id);const Dd={};f&2&&(Dd.$$scope={dirty:f,ctx:n}),ao.$set(Dd);const Sd={};f&2&&(Sd.$$scope={dirty:f,ctx:n}),ro.$set(Sd);const Tr={};f&2&&(Tr.$$scope={dirty:f,ctx:n}),lo.$set(Tr);const Gd={};f&2&&(Gd.$$scope={dirty:f,ctx:n}),co.$set(Gd);const Ud={};f&2&&(Ud.$$scope={dirty:f,ctx:n}),po.$set(Ud);const Wd={};f&2&&(Wd.$$scope={dirty:f,ctx:n}),ho.$set(Wd);const Bd={};f&2&&(Bd.$$scope={dirty:f,ctx:n}),mo.$set(Bd);const Rd={};f&2&&(Rd.$$scope={dirty:f,ctx:n}),fo.$set(Rd);const Mn={};f&2&&(Mn.$$scope={dirty:f,ctx:n}),_o.$set(Mn);const Hd={};f&2&&(Hd.$$scope={dirty:f,ctx:n}),To.$set(Hd);const Cn={};f&2&&(Cn.$$scope={dirty:f,ctx:n}),bo.$set(Cn);const Kd={};f&2&&(Kd.$$scope={dirty:f,ctx:n}),ko.$set(Kd);const Vd={};f&2&&(Vd.$$scope={dirty:f,ctx:n}),yo.$set(Vd);const Yd={};f&2&&(Yd.$$scope={dirty:f,ctx:n}),wo.$set(Yd);const Zd={};f&2&&(Zd.$$scope={dirty:f,ctx:n}),$o.$set(Zd);const Jd={};f&2&&(Jd.$$scope={dirty:f,ctx:n}),zo.$set(Jd);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:n}),jo.$set(Ut);const Xd={};f&2&&(Xd.$$scope={dirty:f,ctx:n}),qo.$set(Xd);const Qd={};f&2&&(Qd.$$scope={dirty:f,ctx:n}),Mo.$set(Qd);const ec={};f&2&&(ec.$$scope={dirty:f,ctx:n}),Po.$set(ec);const tc={};f&2&&(tc.$$scope={dirty:f,ctx:n}),Oo.$set(tc);const Tt={};f&2&&(Tt.$$scope={dirty:f,ctx:n}),Ao.$set(Tt);const nc={};f&2&&(nc.$$scope={dirty:f,ctx:n}),Io.$set(nc);const oc={};f&2&&(oc.$$scope={dirty:f,ctx:n}),So.$set(oc)},i(n){_p||(w(l.$$.fragment,n),w(E.$$.fragment,n),w(ds.$$.fragment,n),w(cs.$$.fragment,n),w(hs.$$.fragment,n),w(ms.$$.fragment,n),w(Ts.$$.fragment,n),w(vs.$$.fragment,n),w(ys.$$.fragment,n),w(ws.$$.fragment,n),w($s.$$.fragment,n),w(zs.$$.fragment,n),w(Os.$$.fragment,n),w(Ns.$$.fragment,n),w(Ls.$$.fragment,n),w(Is.$$.fragment,n),w(Us.$$.fragment,n),w(Bs.$$.fragment,n),w(Hs.$$.fragment,n),w(Ks.$$.fragment,n),w(Vs.$$.fragment,n),w(Ys.$$.fragment,n),w(Xs.$$.fragment,n),w(ea.$$.fragment,n),w(ta.$$.fragment,n),w(na.$$.fragment,n),w(la.$$.fragment,n),w(Xn.$$.fragment,n),w(Qn.$$.fragment,n),w(da.$$.fragment,n),w(eo.$$.fragment,n),w(ca.$$.fragment,n),w(to.$$.fragment,n),w(pa.$$.fragment,n),w(ha.$$.fragment,n),w(ba.$$.fragment,n),w(oo.$$.fragment,n),w(so.$$.fragment,n),w(ka.$$.fragment,n),w(ao.$$.fragment,n),w(va.$$.fragment,n),w(ro.$$.fragment,n),w(ya.$$.fragment,n),w(wa.$$.fragment,n),w(qa.$$.fragment,n),w(lo.$$.fragment,n),w(co.$$.fragment,n),w(Fa.$$.fragment,n),w(po.$$.fragment,n),w(Ma.$$.fragment,n),w(ho.$$.fragment,n),w(Ca.$$.fragment,n),w(Pa.$$.fragment,n),w(mo.$$.fragment,n),w(Da.$$.fragment,n),w(fo.$$.fragment,n),w(_o.$$.fragment,n),w(Sa.$$.fragment,n),w(Ga.$$.fragment,n),w(To.$$.fragment,n),w(Va.$$.fragment,n),w(bo.$$.fragment,n),w(ko.$$.fragment,n),w(Ya.$$.fragment,n),w(Za.$$.fragment,n),w(yo.$$.fragment,n),w(nr.$$.fragment,n),w(wo.$$.fragment,n),w($o.$$.fragment,n),w(or.$$.fragment,n),w(sr.$$.fragment,n),w(ar.$$.fragment,n),w(zo.$$.fragment,n),w(jo.$$.fragment,n),w(rr.$$.fragment,n),w(qo.$$.fragment,n),w(ir.$$.fragment,n),w(Mo.$$.fragment,n),w(lr.$$.fragment,n),w(dr.$$.fragment,n),w(cr.$$.fragment,n),w(Po.$$.fragment,n),w(Oo.$$.fragment,n),w(pr.$$.fragment,n),w(Ao.$$.fragment,n),w(hr.$$.fragment,n),w(Io.$$.fragment,n),w(ur.$$.fragment,n),w(mr.$$.fragment,n),w(fr.$$.fragment,n),w(So.$$.fragment,n),_p=!0)},o(n){$(l.$$.fragment,n),$(E.$$.fragment,n),$(ds.$$.fragment,n),$(cs.$$.fragment,n),$(hs.$$.fragment,n),$(ms.$$.fragment,n),$(Ts.$$.fragment,n),$(vs.$$.fragment,n),$(ys.$$.fragment,n),$(ws.$$.fragment,n),$($s.$$.fragment,n),$(zs.$$.fragment,n),$(Os.$$.fragment,n),$(Ns.$$.fragment,n),$(Ls.$$.fragment,n),$(Is.$$.fragment,n),$(Us.$$.fragment,n),$(Bs.$$.fragment,n),$(Hs.$$.fragment,n),$(Ks.$$.fragment,n),$(Vs.$$.fragment,n),$(Ys.$$.fragment,n),$(Xs.$$.fragment,n),$(ea.$$.fragment,n),$(ta.$$.fragment,n),$(na.$$.fragment,n),$(la.$$.fragment,n),$(Xn.$$.fragment,n),$(Qn.$$.fragment,n),$(da.$$.fragment,n),$(eo.$$.fragment,n),$(ca.$$.fragment,n),$(to.$$.fragment,n),$(pa.$$.fragment,n),$(ha.$$.fragment,n),$(ba.$$.fragment,n),$(oo.$$.fragment,n),$(so.$$.fragment,n),$(ka.$$.fragment,n),$(ao.$$.fragment,n),$(va.$$.fragment,n),$(ro.$$.fragment,n),$(ya.$$.fragment,n),$(wa.$$.fragment,n),$(qa.$$.fragment,n),$(lo.$$.fragment,n),$(co.$$.fragment,n),$(Fa.$$.fragment,n),$(po.$$.fragment,n),$(Ma.$$.fragment,n),$(ho.$$.fragment,n),$(Ca.$$.fragment,n),$(Pa.$$.fragment,n),$(mo.$$.fragment,n),$(Da.$$.fragment,n),$(fo.$$.fragment,n),$(_o.$$.fragment,n),$(Sa.$$.fragment,n),$(Ga.$$.fragment,n),$(To.$$.fragment,n),$(Va.$$.fragment,n),$(bo.$$.fragment,n),$(ko.$$.fragment,n),$(Ya.$$.fragment,n),$(Za.$$.fragment,n),$(yo.$$.fragment,n),$(nr.$$.fragment,n),$(wo.$$.fragment,n),$($o.$$.fragment,n),$(or.$$.fragment,n),$(sr.$$.fragment,n),$(ar.$$.fragment,n),$(zo.$$.fragment,n),$(jo.$$.fragment,n),$(rr.$$.fragment,n),$(qo.$$.fragment,n),$(ir.$$.fragment,n),$(Mo.$$.fragment,n),$(lr.$$.fragment,n),$(dr.$$.fragment,n),$(cr.$$.fragment,n),$(Po.$$.fragment,n),$(Oo.$$.fragment,n),$(pr.$$.fragment,n),$(Ao.$$.fragment,n),$(hr.$$.fragment,n),$(Io.$$.fragment,n),$(ur.$$.fragment,n),$(mr.$$.fragment,n),$(fr.$$.fragment,n),$(So.$$.fragment,n),_p=!1},d(n){t(p),n&&t(b),n&&t(g),x(l),n&&t(qe),n&&t(S),x(E),n&&t(Fe),n&&t(G),n&&t(Me),n&&t(U),n&&t(Ce),n&&t(W),n&&t(ce),n&&t(C),n&&t(Pe),n&&t(D),n&&t(pe),n&&t(nt),n&&t(M),n&&t(Y),n&&t(ic),n&&t(kr),n&&t(lc),n&&t(Wt),n&&t(dc),n&&t(An),n&&t(cc),n&&t(Bt),n&&t(pc),n&&t($r),n&&t(hc),n&&t(tn),x(ds),n&&t(uc),n&&t($t),n&&t(mc),n&&t(In),n&&t(fc),n&&t(zr),n&&t(_c),n&&t(ge),n&&t(gc),n&&t(Er),n&&t(Tc),x(cs,n),n&&t(bc),n&&t(Dn),n&&t(kc),n&&t(qr),n&&t(vc),n&&t(Fr),n&&t(yc),x(hs,n),n&&t(wc),n&&t(le),n&&t($c),n&&t(Rt),n&&t(xc),n&&t(Te),n&&t(zc),x(ms,n),n&&t(jc),n&&t(Mr),n&&t(Ec),n&&t(Cr),n&&t(qc),n&&t(Ht),n&&t(Fc),n&&t(Sn),n&&t(Mc),n&&t(Pr),n&&t(Cc),n&&t(nn),x(Ts),n&&t(Pc),n&&t(xt),n&&t(Oc),x(vs,n),n&&t(Nc),n&&t(dt),n&&t(Ac),n&&t(Ar),n&&t(Lc),x(ys,n),n&&t(Ic),n&&t(Lr),n&&t(Dc),x(ws,n),n&&t(Sc),n&&t(Ir),n&&t(Gc),n&&t(on),x($s),n&&t(Uc),n&&t(zt),n&&t(Wc),n&&t(sn),x(zs),n&&t(Bc),n&&t(Dr),n&&t(Rc),n&&t(Bn),n&&t(Hc),n&&t(rn),x(Os),n&&t(Kc),n&&t(St),x(Ns),n&&t(Vc),n&&t(dn),x(Ls),n&&t(Yc),n&&t(he),x(Is),x(Us),x(Bs),x(Hs),x(Ks),n&&t(Zc),n&&t(cn),x(Vs),n&&t(Jc),n&&t(st),x(Ys),x(Xs),x(ea),n&&t(Xc),n&&t(hn),x(ta),n&&t(Qc),n&&t(oe),x(na),x(la),x(Xn),x(Qn),x(da),x(eo),x(ca),x(to),n&&t(ep),n&&t(mn),x(pa),n&&t(tp),n&&t(se),x(ha),x(ba),x(oo),x(so),x(ka),x(ao),x(va),x(ro),n&&t(np),n&&t(_n),x(ya),n&&t(op),n&&t(ae),x(wa),x(qa),x(lo),x(co),x(Fa),x(po),x(Ma),x(ho),n&&t(sp),n&&t(Tn),x(Ca),n&&t(ap),n&&t(ue),x(Pa),x(mo),x(Da),x(fo),x(_o),n&&t(rp),n&&t(kn),x(Sa),n&&t(ip),n&&t(me),x(Ga),x(To),x(Va),x(bo),x(ko),n&&t(lp),n&&t(yn),x(Ya),n&&t(dp),n&&t(fe),x(Za),x(yo),x(nr),x(wo),x($o),n&&t(cp),n&&t($n),x(or),n&&t(pp),n&&t(_t),x(sr),x(ar),x(zo),x(jo),x(rr),x(qo),x(ir),x(Mo),n&&t(hp),n&&t(zn),x(lr),n&&t(up),n&&t(gt),x(dr),x(cr),x(Po),x(Oo),x(pr),x(Ao),x(hr),x(Io),n&&t(mp),n&&t(En),x(ur),n&&t(fp),n&&t(qn),x(mr),x(fr),x(So)}}}const p1={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"example-scripts",title:"Example scripts"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"},{local:"transformers.FlaxT5EncoderModel",title:"FlaxT5EncoderModel"}],title:"T5"};function h1(j){return Pw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class b1 extends qw{constructor(p){super();Fw(this,p,h1,c1,Mw,{})}}export{b1 as default,p1 as metadata};
