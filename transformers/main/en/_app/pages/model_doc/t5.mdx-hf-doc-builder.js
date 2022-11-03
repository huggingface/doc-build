import{S as S$,i as G$,s as U$,e as a,k as d,w as k,t as o,M as B$,c as r,d as n,m as c,a as i,x as v,h as s,b as p,G as e,g as m,y,q as w,o as $,B as x,v as W$,L as ye}from"../../chunks/vendor-hf-doc-builder.js";import{T as St}from"../../chunks/Tip-hf-doc-builder.js";import{D as P}from"../../chunks/Docstring-hf-doc-builder.js";import{C as H}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ke}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ve}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";import{P as ci}from"../../chunks/PipelineTag-hf-doc-builder.js";function R$(E){let h,b,g,_,T;return{c(){h=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(f,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(n),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(n)},m(l,f){m(l,h,f),e(h,b),e(h,g),e(g,_),e(h,T)},d(l){l&&n(h)}}}function H$(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, T5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function K$(E){let h,b,g,_,T;return _=new H({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function V$(E){let h,b,g,_,T;return _=new H({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function Y$(E){let h,b,g,_,T;return{c(){h=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(f,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(n),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(n)},m(l,f){m(l,h,f),e(h,b),e(h,g),e(g,_),e(h,T)},d(l){l&&n(h)}}}function Z$(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`}}),{c(){h=a("p"),b=o("Examples:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Examples:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function J$(E){let h,b,g,_,T;return _=new H({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function X$(E){let h,b,g,_,T;return _=new H({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function Q$(E){let h,b,g,_,T;return{c(){h=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(f,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(n),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(n)},m(l,f){m(l,h,f),e(h,b),e(h,g),e(g,_),e(h,T)},d(l){l&&n(h)}}}function e0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, T5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function t0(E){let h,b,g,_,T;return _=new H({props:{code:`# Here is an example of a device map on a machine with 4 GPUs using t5-3b, which has a total of 24 attention modules:
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
model.parallelize(device_map)`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function n0(E){let h,b,g,_,T;return _=new H({props:{code:`# On a 4 GPU machine with t5-3b:
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
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function o0(E){let h,b,g,_,T,l,f,q,Ue,Fe,S,re,ie,j,Be,K,We,Me,G,Re,de,J,He,Ce,U,Ke,Pe,B,we,Ve,ce,C,A,Ae,D,$e,X,Q,xe,Ye,O,ze,ee,Ze,Je,V,Ee,Xe,W,je,I,Qe,te,N,et,L,tt,nt;return{c(){h=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),_=o("transformers"),T=o(" accept two formats as input:"),l=d(),f=a("ul"),q=a("li"),Ue=o("having all inputs as keyword arguments (like PyTorch models), or"),Fe=d(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ie=d(),j=a("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),We=o("model.fit()"),Me=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Re=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),He=o("fit()"),Ce=o(" and "),U=a("code"),Ke=o("predict()"),Pe=o(`, such as when creating your own layers or models with
the Keras `),B=a("code"),we=o("Functional"),Ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ce=d(),C=a("ul"),A=a("li"),Ae=o("a single Tensor with "),D=a("code"),$e=o("input_ids"),X=o(" only and nothing else: "),Q=a("code"),xe=o("model(input_ids)"),Ye=d(),O=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=a("code"),Ze=o("model([input_ids, attention_mask])"),Je=o(" or "),V=a("code"),Ee=o("model([input_ids, attention_mask, token_type_ids])"),Xe=d(),W=a("li"),je=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Qe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=d(),N=a("p"),et=o(`Note that when creating models and layers with
`),L=a("a"),tt=o("subclassing"),nt=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){h=r(z,"P",{});var F=i(h);b=s(F,"TensorFlow models and layers in "),g=r(F,"CODE",{});var kt=i(g);_=s(kt,"transformers"),kt.forEach(n),T=s(F," accept two formats as input:"),F.forEach(n),l=c(z),f=r(z,"UL",{});var pe=i(f);q=r(pe,"LI",{});var ot=i(q);Ue=s(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(n),Fe=c(pe),S=r(pe,"LI",{});var vt=i(S);re=s(vt,"having all inputs as a list, tuple or dict in the first positional argument."),vt.forEach(n),pe.forEach(n),ie=c(z),j=r(z,"P",{});var M=i(j);Be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(M,"CODE",{});var Y=i(K);We=s(Y,"model.fit()"),Y.forEach(n),Me=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(M,"CODE",{});var at=i(G);Re=s(at,"model.fit()"),at.forEach(n),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(M,"CODE",{});var rt=i(J);He=s(rt,"fit()"),rt.forEach(n),Ce=s(M," and "),U=r(M,"CODE",{});var Oe=i(U);Ke=s(Oe,"predict()"),Oe.forEach(n),Pe=s(M,`, such as when creating your own layers or models with
the Keras `),B=r(M,"CODE",{});var yt=i(B);we=s(yt,"Functional"),yt.forEach(n),Ve=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(n),ce=c(z),C=r(z,"UL",{});var R=i(C);A=r(R,"LI",{});var Z=i(A);Ae=s(Z,"a single Tensor with "),D=r(Z,"CODE",{});var it=i(D);$e=s(it,"input_ids"),it.forEach(n),X=s(Z," only and nothing else: "),Q=r(Z,"CODE",{});var Ne=i(Q);xe=s(Ne,"model(input_ids)"),Ne.forEach(n),Z.forEach(n),Ye=c(R),O=r(R,"LI",{});var ne=i(O);ze=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(ne,"CODE",{});var wt=i(ee);Ze=s(wt,"model([input_ids, attention_mask])"),wt.forEach(n),Je=s(ne," or "),V=r(ne,"CODE",{});var lt=i(V);Ee=s(lt,"model([input_ids, attention_mask, token_type_ids])"),lt.forEach(n),ne.forEach(n),Xe=c(R),W=r(R,"LI",{});var qe=i(W);je=s(qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(qe,"CODE",{});var Le=i(I);Qe=s(Le,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Le.forEach(n),qe.forEach(n),R.forEach(n),te=c(z),N=r(z,"P",{});var _e=i(N);et=s(_e,`Note that when creating models and layers with
`),L=r(_e,"A",{href:!0,rel:!0});var $t=i(L);tt=s($t,"subclassing"),$t.forEach(n),nt=s(_e,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),_e.forEach(n),this.h()},h(){p(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),p(L,"rel","nofollow")},m(z,F){m(z,h,F),e(h,b),e(h,g),e(g,_),e(h,T),m(z,l,F),m(z,f,F),e(f,q),e(q,Ue),e(f,Fe),e(f,S),e(S,re),m(z,ie,F),m(z,j,F),e(j,Be),e(j,K),e(K,We),e(j,Me),e(j,G),e(G,Re),e(j,de),e(j,J),e(J,He),e(j,Ce),e(j,U),e(U,Ke),e(j,Pe),e(j,B),e(B,we),e(j,Ve),m(z,ce,F),m(z,C,F),e(C,A),e(A,Ae),e(A,D),e(D,$e),e(A,X),e(A,Q),e(Q,xe),e(C,Ye),e(C,O),e(O,ze),e(O,ee),e(ee,Ze),e(O,Je),e(O,V),e(V,Ee),e(C,Xe),e(C,W),e(W,je),e(W,I),e(I,Qe),m(z,te,F),m(z,N,F),e(N,et),e(N,L),e(L,tt),e(N,nt)},d(z){z&&n(h),z&&n(l),z&&n(f),z&&n(ie),z&&n(j),z&&n(ce),z&&n(C),z&&n(te),z&&n(N)}}}function s0(E){let h,b,g,_,T;return{c(){h=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(f,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(n),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(n)},m(l,f){m(l,h,f),e(h,b),e(h,g),e(g,_),e(h,T)},d(l){l&&n(h)}}}function a0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, TFT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=a("p"),b=o("Examples:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Examples:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function r0(E){let h,b,g,_,T,l,f,q,Ue,Fe,S,re,ie,j,Be,K,We,Me,G,Re,de,J,He,Ce,U,Ke,Pe,B,we,Ve,ce,C,A,Ae,D,$e,X,Q,xe,Ye,O,ze,ee,Ze,Je,V,Ee,Xe,W,je,I,Qe,te,N,et,L,tt,nt;return{c(){h=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),_=o("transformers"),T=o(" accept two formats as input:"),l=d(),f=a("ul"),q=a("li"),Ue=o("having all inputs as keyword arguments (like PyTorch models), or"),Fe=d(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ie=d(),j=a("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),We=o("model.fit()"),Me=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Re=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),He=o("fit()"),Ce=o(" and "),U=a("code"),Ke=o("predict()"),Pe=o(`, such as when creating your own layers or models with
the Keras `),B=a("code"),we=o("Functional"),Ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ce=d(),C=a("ul"),A=a("li"),Ae=o("a single Tensor with "),D=a("code"),$e=o("input_ids"),X=o(" only and nothing else: "),Q=a("code"),xe=o("model(input_ids)"),Ye=d(),O=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=a("code"),Ze=o("model([input_ids, attention_mask])"),Je=o(" or "),V=a("code"),Ee=o("model([input_ids, attention_mask, token_type_ids])"),Xe=d(),W=a("li"),je=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Qe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=d(),N=a("p"),et=o(`Note that when creating models and layers with
`),L=a("a"),tt=o("subclassing"),nt=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){h=r(z,"P",{});var F=i(h);b=s(F,"TensorFlow models and layers in "),g=r(F,"CODE",{});var kt=i(g);_=s(kt,"transformers"),kt.forEach(n),T=s(F," accept two formats as input:"),F.forEach(n),l=c(z),f=r(z,"UL",{});var pe=i(f);q=r(pe,"LI",{});var ot=i(q);Ue=s(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(n),Fe=c(pe),S=r(pe,"LI",{});var vt=i(S);re=s(vt,"having all inputs as a list, tuple or dict in the first positional argument."),vt.forEach(n),pe.forEach(n),ie=c(z),j=r(z,"P",{});var M=i(j);Be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(M,"CODE",{});var Y=i(K);We=s(Y,"model.fit()"),Y.forEach(n),Me=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(M,"CODE",{});var at=i(G);Re=s(at,"model.fit()"),at.forEach(n),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(M,"CODE",{});var rt=i(J);He=s(rt,"fit()"),rt.forEach(n),Ce=s(M," and "),U=r(M,"CODE",{});var Oe=i(U);Ke=s(Oe,"predict()"),Oe.forEach(n),Pe=s(M,`, such as when creating your own layers or models with
the Keras `),B=r(M,"CODE",{});var yt=i(B);we=s(yt,"Functional"),yt.forEach(n),Ve=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(n),ce=c(z),C=r(z,"UL",{});var R=i(C);A=r(R,"LI",{});var Z=i(A);Ae=s(Z,"a single Tensor with "),D=r(Z,"CODE",{});var it=i(D);$e=s(it,"input_ids"),it.forEach(n),X=s(Z," only and nothing else: "),Q=r(Z,"CODE",{});var Ne=i(Q);xe=s(Ne,"model(input_ids)"),Ne.forEach(n),Z.forEach(n),Ye=c(R),O=r(R,"LI",{});var ne=i(O);ze=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(ne,"CODE",{});var wt=i(ee);Ze=s(wt,"model([input_ids, attention_mask])"),wt.forEach(n),Je=s(ne," or "),V=r(ne,"CODE",{});var lt=i(V);Ee=s(lt,"model([input_ids, attention_mask, token_type_ids])"),lt.forEach(n),ne.forEach(n),Xe=c(R),W=r(R,"LI",{});var qe=i(W);je=s(qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(qe,"CODE",{});var Le=i(I);Qe=s(Le,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Le.forEach(n),qe.forEach(n),R.forEach(n),te=c(z),N=r(z,"P",{});var _e=i(N);et=s(_e,`Note that when creating models and layers with
`),L=r(_e,"A",{href:!0,rel:!0});var $t=i(L);tt=s($t,"subclassing"),$t.forEach(n),nt=s(_e,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),_e.forEach(n),this.h()},h(){p(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),p(L,"rel","nofollow")},m(z,F){m(z,h,F),e(h,b),e(h,g),e(g,_),e(h,T),m(z,l,F),m(z,f,F),e(f,q),e(q,Ue),e(f,Fe),e(f,S),e(S,re),m(z,ie,F),m(z,j,F),e(j,Be),e(j,K),e(K,We),e(j,Me),e(j,G),e(G,Re),e(j,de),e(j,J),e(J,He),e(j,Ce),e(j,U),e(U,Ke),e(j,Pe),e(j,B),e(B,we),e(j,Ve),m(z,ce,F),m(z,C,F),e(C,A),e(A,Ae),e(A,D),e(D,$e),e(A,X),e(A,Q),e(Q,xe),e(C,Ye),e(C,O),e(O,ze),e(O,ee),e(ee,Ze),e(O,Je),e(O,V),e(V,Ee),e(C,Xe),e(C,W),e(W,je),e(W,I),e(I,Qe),m(z,te,F),m(z,N,F),e(N,et),e(N,L),e(L,tt),e(N,nt)},d(z){z&&n(h),z&&n(l),z&&n(f),z&&n(ie),z&&n(j),z&&n(ce),z&&n(C),z&&n(te),z&&n(N)}}}function i0(E){let h,b,g,_,T;return{c(){h=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(f,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(n),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(n)},m(l,f){m(l,h,f),e(h,b),e(h,g),e(g,_),e(h,T)},d(l){l&&n(h)}}}function l0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, TFT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you</span>`}}),{c(){h=a("p"),b=o("Examples:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Examples:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function d0(E){let h,b,g,_,T,l,f,q,Ue,Fe,S,re,ie,j,Be,K,We,Me,G,Re,de,J,He,Ce,U,Ke,Pe,B,we,Ve,ce,C,A,Ae,D,$e,X,Q,xe,Ye,O,ze,ee,Ze,Je,V,Ee,Xe,W,je,I,Qe,te,N,et,L,tt,nt;return{c(){h=a("p"),b=o("TensorFlow models and layers in "),g=a("code"),_=o("transformers"),T=o(" accept two formats as input:"),l=d(),f=a("ul"),q=a("li"),Ue=o("having all inputs as keyword arguments (like PyTorch models), or"),Fe=d(),S=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ie=d(),j=a("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a("code"),We=o("model.fit()"),Me=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=a("code"),Re=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),He=o("fit()"),Ce=o(" and "),U=a("code"),Ke=o("predict()"),Pe=o(`, such as when creating your own layers or models with
the Keras `),B=a("code"),we=o("Functional"),Ve=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ce=d(),C=a("ul"),A=a("li"),Ae=o("a single Tensor with "),D=a("code"),$e=o("input_ids"),X=o(" only and nothing else: "),Q=a("code"),xe=o("model(input_ids)"),Ye=d(),O=a("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=a("code"),Ze=o("model([input_ids, attention_mask])"),Je=o(" or "),V=a("code"),Ee=o("model([input_ids, attention_mask, token_type_ids])"),Xe=d(),W=a("li"),je=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a("code"),Qe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=d(),N=a("p"),et=o(`Note that when creating models and layers with
`),L=a("a"),tt=o("subclassing"),nt=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(z){h=r(z,"P",{});var F=i(h);b=s(F,"TensorFlow models and layers in "),g=r(F,"CODE",{});var kt=i(g);_=s(kt,"transformers"),kt.forEach(n),T=s(F," accept two formats as input:"),F.forEach(n),l=c(z),f=r(z,"UL",{});var pe=i(f);q=r(pe,"LI",{});var ot=i(q);Ue=s(ot,"having all inputs as keyword arguments (like PyTorch models), or"),ot.forEach(n),Fe=c(pe),S=r(pe,"LI",{});var vt=i(S);re=s(vt,"having all inputs as a list, tuple or dict in the first positional argument."),vt.forEach(n),pe.forEach(n),ie=c(z),j=r(z,"P",{});var M=i(j);Be=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r(M,"CODE",{});var Y=i(K);We=s(Y,"model.fit()"),Y.forEach(n),Me=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),G=r(M,"CODE",{});var at=i(G);Re=s(at,"model.fit()"),at.forEach(n),de=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(M,"CODE",{});var rt=i(J);He=s(rt,"fit()"),rt.forEach(n),Ce=s(M," and "),U=r(M,"CODE",{});var Oe=i(U);Ke=s(Oe,"predict()"),Oe.forEach(n),Pe=s(M,`, such as when creating your own layers or models with
the Keras `),B=r(M,"CODE",{});var yt=i(B);we=s(yt,"Functional"),yt.forEach(n),Ve=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(n),ce=c(z),C=r(z,"UL",{});var R=i(C);A=r(R,"LI",{});var Z=i(A);Ae=s(Z,"a single Tensor with "),D=r(Z,"CODE",{});var it=i(D);$e=s(it,"input_ids"),it.forEach(n),X=s(Z," only and nothing else: "),Q=r(Z,"CODE",{});var Ne=i(Q);xe=s(Ne,"model(input_ids)"),Ne.forEach(n),Z.forEach(n),Ye=c(R),O=r(R,"LI",{});var ne=i(O);ze=s(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),ee=r(ne,"CODE",{});var wt=i(ee);Ze=s(wt,"model([input_ids, attention_mask])"),wt.forEach(n),Je=s(ne," or "),V=r(ne,"CODE",{});var lt=i(V);Ee=s(lt,"model([input_ids, attention_mask, token_type_ids])"),lt.forEach(n),ne.forEach(n),Xe=c(R),W=r(R,"LI",{});var qe=i(W);je=s(qe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r(qe,"CODE",{});var Le=i(I);Qe=s(Le,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Le.forEach(n),qe.forEach(n),R.forEach(n),te=c(z),N=r(z,"P",{});var _e=i(N);et=s(_e,`Note that when creating models and layers with
`),L=r(_e,"A",{href:!0,rel:!0});var $t=i(L);tt=s($t,"subclassing"),$t.forEach(n),nt=s(_e,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),_e.forEach(n),this.h()},h(){p(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),p(L,"rel","nofollow")},m(z,F){m(z,h,F),e(h,b),e(h,g),e(g,_),e(h,T),m(z,l,F),m(z,f,F),e(f,q),e(q,Ue),e(f,Fe),e(f,S),e(S,re),m(z,ie,F),m(z,j,F),e(j,Be),e(j,K),e(K,We),e(j,Me),e(j,G),e(G,Re),e(j,de),e(j,J),e(J,He),e(j,Ce),e(j,U),e(U,Ke),e(j,Pe),e(j,B),e(B,we),e(j,Ve),m(z,ce,F),m(z,C,F),e(C,A),e(A,Ae),e(A,D),e(D,$e),e(A,X),e(A,Q),e(Q,xe),e(C,Ye),e(C,O),e(O,ze),e(O,ee),e(ee,Ze),e(O,Je),e(O,V),e(V,Ee),e(C,Xe),e(C,W),e(W,je),e(W,I),e(I,Qe),m(z,te,F),m(z,N,F),e(N,et),e(N,L),e(L,tt),e(N,nt)},d(z){z&&n(h),z&&n(l),z&&n(f),z&&n(ie),z&&n(j),z&&n(ce),z&&n(C),z&&n(te),z&&n(N)}}}function c0(E){let h,b,g,_,T;return{c(){h=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(f,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(n),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(n)},m(l,f){m(l,h,f),e(h,b),e(h,g),e(g,_),e(h,T)},d(l){l&&n(h)}}}function p0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, TFT5EncoderModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`}}),{c(){h=a("p"),b=o("Examples:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Examples:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function h0(E){let h,b,g,_,T;return{c(){h=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(f,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(n),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(n)},m(l,f){m(l,h,f),e(h,b),e(h,g),e(g,_),e(h,T)},d(l){l&&n(h)}}}function u0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function m0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function f0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function _0(E){let h,b,g,_,T;return{c(){h=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(f,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(n),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(n)},m(l,f){m(l,h,f),e(h,b),e(h,g),e(g,_),e(h,T)},d(l){l&&n(h)}}}function g0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function T0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-small")
model = FlaxT5ForConditionalGeneration.from_pretrained("t5-small")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function b0(E){let h,b,g,_,T;return _=new H({props:{code:`from transformers import T5Tokenizer, FlaxT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){h=a("p"),b=o("Example:"),g=d(),k(_.$$.fragment)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Example:"),f.forEach(n),g=c(l),v(_.$$.fragment,l)},m(l,f){m(l,h,f),e(h,b),m(l,g,f),y(_,l,f),T=!0},p:ye,i(l){T||(w(_.$$.fragment,l),T=!0)},o(l){$(_.$$.fragment,l),T=!1},d(l){l&&n(h),l&&n(g),x(_,l)}}}function k0(E){let h,b,g,_,T;return{c(){h=a("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),_=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var f=i(h);b=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(f,"CODE",{});var q=i(g);_=s(q,"Module"),q.forEach(n),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(n)},m(l,f){m(l,h,f),e(h,b),e(h,g),e(g,_),e(h,T)},d(l){l&&n(h)}}}function v0(E){let h,b,g,_,T,l,f,q,Ue,Fe,S,re,ie,j,Be,K,We,Me,G,Re,de,J,He,Ce,U,Ke,Pe,B,we,Ve,ce,C,A,Ae,D,$e,X,Q,xe,Ye,O,ze,ee,Ze,Je,V,Ee,Xe,W,je,I,Qe,te,N,et,L,tt,nt,z,F,kt,pe,ot,vt,M,Y,at,rt,Oe,yt,R,Z,it,Ne,ne,wt,lt,qe,Le,_e,$t,Nl,Ll,hs,Yu,Zu,Il,pi,us,Ju,Xu,cp,hi,Qu,pp,Wt,Dl,In,Sl,em,tm,ui,nm,om,sm,Gl,Dn,Ul,am,rm,mi,im,lm,dm,Bl,Sn,Wl,cm,pm,fi,hm,um,hp,Gn,mm,ms,fm,_m,up,Rt,gm,fs,Tm,bm,_s,km,vm,mp,_i,fp,rn,Un,Rl,gs,ym,Hl,wm,_p,xt,$m,Kl,xm,zm,Vl,Em,jm,Yl,qm,Fm,gp,Bn,Mm,gi,Cm,Pm,Tp,Ti,Zl,Am,bp,ge,Om,Jl,Nm,Lm,Xl,Im,Dm,Ql,Sm,Gm,ed,Um,Bm,td,Wm,Rm,bi,Hm,Km,kp,ki,Vm,vp,Ts,yp,Wn,Ym,bs,Zm,Jm,wp,vi,nd,Xm,$p,yi,Qm,xp,ks,zp,le,ef,od,tf,nf,sd,of,sf,ad,af,rf,rd,lf,df,id,cf,pf,ld,hf,uf,dd,mf,ff,Ep,Ht,_f,cd,gf,Tf,pd,bf,kf,jp,Te,vf,hd,yf,wf,ud,$f,xf,md,zf,Ef,fd,jf,qf,vs,Ff,Mf,_d,Cf,Pf,qp,ys,Fp,wi,Af,Mp,$i,ws,Of,gd,Nf,Lf,Cp,Kt,If,$s,Df,Sf,xs,Gf,Uf,Pp,Rn,Bf,Td,Wf,Rf,Ap,xi,Op,ln,Hn,bd,zs,Hf,kd,Kf,Np,zt,Vf,zi,Yf,Zf,Es,Jf,Xf,js,Qf,e_,Lp,qs,Ip,dt,t_,vd,n_,o_,yd,s_,a_,Ei,r_,i_,wd,l_,d_,Dp,ji,c_,Sp,Fs,Gp,qi,p_,Up,Ms,Bp,Fi,Wp,dn,Kn,$d,Cs,h_,xd,u_,Rp,Et,m_,Ps,f_,__,zd,g_,T_,Ed,b_,k_,Hp,cn,Vn,jd,As,v_,qd,y_,Kp,Mi,w_,Vp,Os,Yp,Yn,Ns,$_,Ls,x_,z_,E_,Is,j_,Ds,q_,F_,Zp,Ss,Jp,Ci,Gs,M_,Us,C_,P_,Xp,Bs,Qp,Pi,Ws,A_,Rs,O_,N_,eh,Hs,th,be,Ks,L_,Vs,I_,D_,S_,Ys,G_,Zs,U_,B_,W_,Js,R_,Xs,H_,K_,V_,Vt,Ai,Y_,Z_,Qs,J_,X_,ea,Q_,eg,tg,Yt,Oi,ng,og,ta,sg,ag,na,rg,ig,lg,Zn,Ni,dg,cg,oa,pg,hg,ug,Li,sa,mg,fg,nh,aa,oh,Ii,jt,Di,_g,gg,ra,Tg,bg,Si,kg,vg,ia,yg,wg,sh,la,ah,Jn,Zt,Gi,$g,xg,da,zg,Eg,ca,jg,qg,Fg,Jt,Ui,Mg,Cg,pa,Pg,Ag,ha,Og,Ng,rh,ua,ih,Xn,ma,Lg,fa,Ig,Dg,Sg,_a,Gg,ga,Ug,Bg,lh,Ta,Wg,Fd,Rg,dh,Bi,ba,Hg,ka,Kg,Vg,ch,pn,Qn,Md,va,Yg,Cd,Zg,ph,Gt,ya,Jg,Ut,Xg,Wi,Qg,eT,Ri,tT,nT,wa,oT,sT,aT,hn,rT,Hi,iT,lT,Ki,dT,cT,hh,un,eo,Pd,$a,pT,Ad,hT,uh,he,xa,uT,za,mT,Ea,fT,_T,gT,ja,TT,Vi,bT,kT,vT,Xt,qa,yT,Od,wT,$T,Fa,Yi,xT,Nd,zT,ET,Zi,jT,Ld,qT,FT,to,Ma,MT,Ca,CT,Id,PT,AT,OT,no,Pa,NT,Dd,LT,IT,Ji,Aa,mh,mn,oo,Sd,Oa,DT,Gd,ST,fh,st,Na,GT,fn,UT,Ud,BT,WT,La,RT,HT,KT,Ia,VT,Xi,YT,ZT,JT,Qt,Da,XT,Bd,QT,eb,Sa,Qi,tb,Wd,nb,ob,el,sb,Rd,ab,rb,so,Ga,ib,Hd,lb,_h,_n,ao,Kd,Ua,db,Vd,cb,gh,oe,Ba,pb,Yd,hb,ub,Wa,mb,Ra,fb,_b,gb,Ha,Tb,tl,bb,kb,vb,Ka,yb,Va,wb,$b,xb,qt,Ya,zb,gn,Eb,nl,jb,qb,Zd,Fb,Mb,Cb,ro,Pb,io,Ab,Ft,Za,Ob,Jd,Nb,Lb,Xd,Ib,Db,lo,Sb,en,Ja,Gb,Qd,Ub,Bb,co,Th,Tn,po,ec,Xa,Wb,tc,Rb,bh,se,Qa,Hb,er,Kb,nc,Vb,Yb,Zb,tr,Jb,nr,Xb,Qb,ek,or,tk,ol,nk,ok,sk,sr,ak,ar,rk,ik,lk,Mt,rr,dk,bn,ck,sl,pk,hk,oc,uk,mk,fk,ho,_k,uo,gk,Ct,ir,Tk,sc,bk,kk,ac,vk,yk,mo,wk,tn,lr,$k,rc,xk,zk,fo,kh,kn,_o,ic,dr,Ek,lc,jk,vh,ae,cr,qk,dc,Fk,Mk,pr,Ck,hr,Pk,Ak,Ok,ur,Nk,al,Lk,Ik,Dk,mr,Sk,fr,Gk,Uk,Bk,Pt,_r,Wk,vn,Rk,rl,Hk,Kk,cc,Vk,Yk,Zk,go,Jk,To,Xk,At,gr,Qk,pc,ev,tv,hc,nv,ov,bo,sv,nn,Tr,av,uc,rv,iv,ko,yh,yn,vo,mc,br,lv,fc,dv,wh,ue,kr,cv,_c,pv,hv,vr,uv,yr,mv,fv,_v,wr,gv,il,Tv,bv,kv,$r,vv,xr,yv,wv,$v,yo,xv,Ot,zr,zv,wn,Ev,ll,jv,qv,gc,Fv,Mv,Cv,wo,Pv,$o,$h,$n,xo,Tc,Er,Av,bc,Ov,xh,me,jr,Nv,qr,Lv,kc,Iv,Dv,Sv,Fr,Gv,Mr,Uv,Bv,Wv,Cr,Rv,dl,Hv,Kv,Vv,Pr,Yv,Ar,Zv,Jv,Xv,zo,Qv,Nt,Or,ey,xn,ty,cl,ny,oy,vc,sy,ay,ry,Eo,iy,jo,zh,zn,qo,yc,Nr,ly,wc,dy,Eh,fe,Lr,cy,$c,py,hy,Ir,uy,Dr,my,fy,_y,Sr,gy,pl,Ty,by,ky,Gr,vy,Ur,yy,wy,$y,Fo,xy,Lt,Br,zy,En,Ey,hl,jy,qy,xc,Fy,My,Cy,Mo,Py,Co,jh,jn,Po,zc,Wr,Ay,Ec,Oy,qh,gt,Rr,Ny,It,Hr,Ly,qn,Iy,jc,Dy,Sy,qc,Gy,Uy,By,Ao,Wy,Oo,Ry,No,Kr,Hy,Lo,Ky,Io,Vr,Vy,Do,Fh,Fn,So,Fc,Yr,Yy,Mc,Zy,Mh,Tt,Zr,Jy,Dt,Jr,Xy,Mn,Qy,Cc,e5,t5,Pc,n5,o5,s5,Go,a5,Uo,r5,Bo,Xr,i5,Wo,l5,Ro,Qr,d5,Ho,Ch,Cn,Ko,Ac,ei,c5,Oc,p5,Ph,Pn,ti,h5,on,ni,u5,An,m5,ul,f5,_5,Nc,g5,T5,b5,Vo,Ah;return l=new ke({}),j=new ke({}),gs=new ke({}),Ts=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-number">3.7837</span>`}}),ks=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
<span class="hljs-number">0.2542</span>`}}),ys=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration
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
<span class="hljs-number">0.188</span>`}}),zs=new ke({}),qs=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
Das Haus ist wunderbar.`}}),Fs=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
[<span class="hljs-string">&#x27;Das Haus ist wunderbar.&#x27;</span>, <span class="hljs-string">&#x27;Ich arbeite gerne in NYC.&#x27;</span>]`}}),Ms=new H({props:{code:`from transformers import T5Tokenizer, T5ForConditionalGeneration

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
[<span class="hljs-string">&#x27;&lt;pad&gt;&lt;extra_id_0&gt; park offers&lt;extra_id_1&gt; the&lt;extra_id_2&gt; park.&lt;/s&gt;&#x27;</span>]`}}),Cs=new ke({}),As=new ke({}),Os=new ci({props:{pipeline:"text-classification"}}),Ss=new ci({props:{pipeline:"token-classification"}}),Bs=new ci({props:{pipeline:"text-generation"}}),Hs=new ci({props:{pipeline:"summarization"}}),aa=new ci({props:{pipeline:"fill-mask"}}),la=new ci({props:{pipeline:"translation"}}),ua=new ci({props:{pipeline:"question-answering"}}),va=new ke({}),ya=new P({props:{name:"class transformers.T5Config",anchor:"transformers.T5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/configuration_t5.py#L34"}}),$a=new ke({}),xa=new P({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L55"}}),qa=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ma=new P({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L188",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pa=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L227",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Aa=new P({props:{name:"save_vocabulary",anchor:"transformers.T5Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L329"}}),Oa=new ke({}),Na=new P({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L65"}}),Da=new P({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L191",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ga=new P({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L217",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ua=new ke({}),Ba=new P({props:{name:"class transformers.T5Model",anchor:"transformers.T5Model",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1274"}}),Ya=new P({props:{name:"forward",anchor:"transformers.T5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ro=new St({props:{$$slots:{default:[R$]},$$scope:{ctx:E}}}),io=new ve({props:{anchor:"transformers.T5Model.forward.example",$$slots:{default:[H$]},$$scope:{ctx:E}}}),Za=new P({props:{name:"parallelize",anchor:"transformers.T5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1306"}}),lo=new ve({props:{anchor:"transformers.T5Model.parallelize.example",$$slots:{default:[K$]},$$scope:{ctx:E}}}),Ja=new P({props:{name:"deparallelize",anchor:"transformers.T5Model.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1318"}}),co=new ve({props:{anchor:"transformers.T5Model.deparallelize.example",$$slots:{default:[V$]},$$scope:{ctx:E}}}),Xa=new ke({}),Qa=new P({props:{name:"class transformers.T5ForConditionalGeneration",anchor:"transformers.T5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1466"}}),rr=new P({props:{name:"forward",anchor:"transformers.T5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.T5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.T5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ho=new St({props:{$$slots:{default:[Y$]},$$scope:{ctx:E}}}),uo=new ve({props:{anchor:"transformers.T5ForConditionalGeneration.forward.example",$$slots:{default:[Z$]},$$scope:{ctx:E}}}),ir=new P({props:{name:"parallelize",anchor:"transformers.T5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1503"}}),mo=new ve({props:{anchor:"transformers.T5ForConditionalGeneration.parallelize.example",$$slots:{default:[J$]},$$scope:{ctx:E}}}),lr=new P({props:{name:"deparallelize",anchor:"transformers.T5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1516"}}),fo=new ve({props:{anchor:"transformers.T5ForConditionalGeneration.deparallelize.example",$$slots:{default:[X$]},$$scope:{ctx:E}}}),dr=new ke({}),cr=new P({props:{name:"class transformers.T5EncoderModel",anchor:"transformers.T5EncoderModel",parameters:[{name:"config",val:": T5Config"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1760"}}),_r=new P({props:{name:"forward",anchor:"transformers.T5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
`}}),go=new St({props:{$$slots:{default:[Q$]},$$scope:{ctx:E}}}),To=new ve({props:{anchor:"transformers.T5EncoderModel.forward.example",$$slots:{default:[e0]},$$scope:{ctx:E}}}),gr=new P({props:{name:"parallelize",anchor:"transformers.T5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.T5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
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
</ul>`,name:"device_map"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1781"}}),bo=new ve({props:{anchor:"transformers.T5EncoderModel.parallelize.example",$$slots:{default:[t0]},$$scope:{ctx:E}}}),Tr=new P({props:{name:"deparallelize",anchor:"transformers.T5EncoderModel.deparallelize",parameters:[],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_t5.py#L1792"}}),ko=new ve({props:{anchor:"transformers.T5EncoderModel.deparallelize.example",$$slots:{default:[n0]},$$scope:{ctx:E}}}),br=new ke({}),kr=new P({props:{name:"class transformers.TFT5Model",anchor:"transformers.TFT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1130"}}),yo=new St({props:{$$slots:{default:[o0]},$$scope:{ctx:E}}}),zr=new P({props:{name:"call",anchor:"transformers.TFT5Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5Model.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1158",returnDescription:`
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
`}}),wo=new St({props:{$$slots:{default:[s0]},$$scope:{ctx:E}}}),$o=new ve({props:{anchor:"transformers.TFT5Model.call.example",$$slots:{default:[a0]},$$scope:{ctx:E}}}),Er=new ke({}),jr=new P({props:{name:"class transformers.TFT5ForConditionalGeneration",anchor:"transformers.TFT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1282"}}),zo=new St({props:{$$slots:{default:[r0]},$$scope:{ctx:E}}}),Or=new P({props:{name:"call",anchor:"transformers.TFT5ForConditionalGeneration.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5ForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1337",returnDescription:`
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
`}}),Eo=new St({props:{$$slots:{default:[i0]},$$scope:{ctx:E}}}),jo=new ve({props:{anchor:"transformers.TFT5ForConditionalGeneration.call.example",$$slots:{default:[l0]},$$scope:{ctx:E}}}),Nr=new ke({}),Lr=new P({props:{name:"class transformers.TFT5EncoderModel",anchor:"transformers.TFT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Config">T5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1560"}}),Fo=new St({props:{$$slots:{default:[d0]},$$scope:{ctx:E}}}),Br=new P({props:{name:"call",anchor:"transformers.TFT5EncoderModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFT5EncoderModel.call.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on the right or the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_tf_t5.py#L1583",returnDescription:`
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
`}}),Mo=new St({props:{$$slots:{default:[c0]},$$scope:{ctx:E}}}),Co=new ve({props:{anchor:"transformers.TFT5EncoderModel.call.example",$$slots:{default:[p0]},$$scope:{ctx:E}}}),Wr=new ke({}),Rr=new P({props:{name:"class transformers.FlaxT5Model",anchor:"transformers.FlaxT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1367"}}),Hr=new P({props:{name:"__call__",anchor:"transformers.FlaxT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ao=new St({props:{$$slots:{default:[h0]},$$scope:{ctx:E}}}),Oo=new ve({props:{anchor:"transformers.FlaxT5Model.__call__.example",$$slots:{default:[u0]},$$scope:{ctx:E}}}),Kr=new P({props:{name:"encode",anchor:"transformers.FlaxT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
`}}),Lo=new ve({props:{anchor:"transformers.FlaxT5Model.encode.example",$$slots:{default:[m0]},$$scope:{ctx:E}}}),Vr=new P({props:{name:"decode",anchor:"transformers.FlaxT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Do=new ve({props:{anchor:"transformers.FlaxT5Model.decode.example",$$slots:{default:[f0]},$$scope:{ctx:E}}}),Yr=new ke({}),Zr=new P({props:{name:"class transformers.FlaxT5ForConditionalGeneration",anchor:"transformers.FlaxT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1606"}}),Jr=new P({props:{name:"__call__",anchor:"transformers.FlaxT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./t5#training">T5 Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Go=new St({props:{$$slots:{default:[_0]},$$scope:{ctx:E}}}),Uo=new ve({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.__call__.example",$$slots:{default:[g0]},$$scope:{ctx:E}}}),Xr=new P({props:{name:"encode",anchor:"transformers.FlaxT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
`}}),Wo=new ve({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.encode.example",$$slots:{default:[T0]},$$scope:{ctx:E}}}),Qr=new P({props:{name:"decode",anchor:"transformers.FlaxT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Ho=new ve({props:{anchor:"transformers.FlaxT5ForConditionalGeneration.decode.example",$$slots:{default:[b0]},$$scope:{ctx:E}}}),ei=new ke({}),ti=new P({props:{name:"class transformers.FlaxT5EncoderModel",anchor:"transformers.FlaxT5EncoderModel",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1456"}}),ni=new P({props:{name:"__call__",anchor:"transformers.FlaxT5EncoderModel.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxT5EncoderModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. T5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/t5/modeling_flax_t5.py#L1459"}}),Vo=new St({props:{$$slots:{default:[k0]},$$scope:{ctx:E}}}),{c(){h=a("meta"),b=d(),g=a("h1"),_=a("a"),T=a("span"),k(l.$$.fragment),f=d(),q=a("span"),Ue=o("T5"),Fe=d(),S=a("h2"),re=a("a"),ie=a("span"),k(j.$$.fragment),Be=d(),K=a("span"),We=o("Overview"),Me=d(),G=a("p"),Re=o("The T5 model was presented in "),de=a("a"),J=o("Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),He=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),Ce=d(),U=a("p"),Ke=o("The abstract from the paper is the following:"),Pe=d(),B=a("p"),we=a("em"),Ve=o(`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),ce=d(),C=a("p"),A=o("Tips:"),Ae=d(),D=a("ul"),$e=a("li"),X=a("p"),Q=o(`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),xe=a("em"),Ye=o("translate English to German: \u2026"),O=o(`,
for summarization: `),ze=a("em"),ee=o("summarize: \u2026"),Ze=o("."),Je=d(),V=a("li"),Ee=a("p"),Xe=o("T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),W=d(),je=a("li"),I=a("p"),Qe=o("See the "),te=a("a"),N=o("training"),et=o(", "),L=a("a"),tt=o("inference"),nt=o(" and "),z=a("a"),F=o("scripts"),kt=o(" sections below for all details regarding usage."),pe=d(),ot=a("p"),vt=o("T5 comes in different sizes:"),M=d(),Y=a("ul"),at=a("li"),rt=a("p"),Oe=a("a"),yt=o("t5-small"),R=d(),Z=a("li"),it=a("p"),Ne=a("a"),ne=o("t5-base"),wt=d(),lt=a("li"),qe=a("p"),Le=a("a"),_e=o("t5-large"),$t=d(),Nl=a("li"),Ll=a("p"),hs=a("a"),Yu=o("t5-3b"),Zu=d(),Il=a("li"),pi=a("p"),us=a("a"),Ju=o("t5-11b"),Xu=o("."),cp=d(),hi=a("p"),Qu=o("Based on the original T5 model, Google has released some follow-up works:"),pp=d(),Wt=a("ul"),Dl=a("li"),In=a("p"),Sl=a("strong"),em=o("T5v1.1"),tm=o(`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),ui=a("a"),nm=o("here"),om=o("."),sm=d(),Gl=a("li"),Dn=a("p"),Ul=a("strong"),am=o("mT5"),rm=o(`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),mi=a("a"),im=o("here"),lm=o("."),dm=d(),Bl=a("li"),Sn=a("p"),Wl=a("strong"),cm=o("byT5"),pm=o(`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),fi=a("a"),hm=o("here"),um=o("."),hp=d(),Gn=a("p"),mm=o("All checkpoints can be found on the "),ms=a("a"),fm=o("hub"),_m=o("."),up=d(),Rt=a("p"),gm=o("This model was contributed by "),fs=a("a"),Tm=o("thomwolf"),bm=o(". The original code can be found "),_s=a("a"),km=o("here"),vm=o("."),mp=d(),_i=a("a"),fp=d(),rn=a("h2"),Un=a("a"),Rl=a("span"),k(gs.$$.fragment),ym=d(),Hl=a("span"),wm=o("Training"),_p=d(),xt=a("p"),$m=o(`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),Kl=a("code"),xm=o("input_ids"),zm=o(`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Vl=a("code"),Em=o("decoder_input_ids"),jm=o(`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Yl=a("code"),qm=o("labels"),Fm=o(`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),gp=d(),Bn=a("p"),Mm=o("One can use "),gi=a("a"),Cm=o("T5ForConditionalGeneration"),Pm=o(` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Tp=d(),Ti=a("ul"),Zl=a("li"),Am=o("Unsupervised denoising training"),bp=d(),ge=a("p"),Om=o("In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Jl=a("em"),Nm=o("a.k.a"),Lm=o(` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Xl=a("em"),Im=o("real"),Dm=o(` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Ql=a("code"),Sm=o("<extra_id_0>"),Gm=o(`,
`),ed=a("code"),Um=o("<extra_id_1>"),Bm=o(", \u2026 up to "),td=a("code"),Wm=o("<extra_id_99>"),Rm=o(`. As a default, 100 sentinel tokens are available in
`),bi=a("a"),Hm=o("T5Tokenizer"),Km=o("."),kp=d(),ki=a("p"),Vm=o(`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),vp=d(),k(Ts.$$.fragment),yp=d(),Wn=a("p"),Ym=o("If you\u2019re interested in pre-training T5 on a new corpus, check out the "),bs=a("a"),Zm=o("run_t5_mlm_flax.py"),Jm=o(` script in the Examples
directory.`),wp=d(),vi=a("ul"),nd=a("li"),Xm=o("Supervised training"),$p=d(),yi=a("p"),Qm=o(`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),xp=d(),k(ks.$$.fragment),zp=d(),le=a("p"),ef=o("As you can see, only 2 inputs are required for the model in order to compute a loss: "),od=a("code"),tf=o("input_ids"),nf=o(` (which are the
`),sd=a("code"),of=o("input_ids"),sf=o(" of the encoded input sequence) and "),ad=a("code"),af=o("labels"),rf=o(" (which are the "),rd=a("code"),lf=o("input_ids"),df=o(` of the encoded
target sequence). The model will automatically create the `),id=a("code"),cf=o("decoder_input_ids"),pf=o(" based on the "),ld=a("code"),hf=o("labels"),uf=o(`, by
shifting them one position to the right and prepending the `),dd=a("code"),mf=o("config.decoder_start_token_id"),ff=o(`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),Ep=d(),Ht=a("p"),_f=o(`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),cd=a("code"),gf=o("max_source_length"),Tf=o(" and "),pd=a("code"),bf=o("max_target_length"),kf=o(`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),jp=d(),Te=a("p"),vf=o("In addition, we must make sure that padding token id\u2019s of the "),hd=a("code"),yf=o("labels"),wf=o(` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),ud=a("code"),$f=o("ignore_index"),xf=o(`
of the `),md=a("code"),zf=o("CrossEntropyLoss"),Ef=o(". In Flax, one can use the "),fd=a("code"),jf=o("decoder_attention_mask"),qf=o(` to ignore padded tokens from
the loss (see the `),vs=a("a"),Ff=o("Flax summarization script"),Mf=o(` for details). We also pass
`),_d=a("code"),Cf=o("attention_mask"),Pf=o(` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),qp=d(),k(ys.$$.fragment),Fp=d(),wi=a("p"),Af=o("Additional training tips:"),Mp=d(),$i=a("ul"),ws=a("li"),Of=o("T5 models need a slightly higher learning rate than the default one set in the "),gd=a("code"),Nf=o("Trainer"),Lf=o(` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Cp=d(),Kt=a("p"),If=o("According to "),$s=a("a"),Df=o("this forum post"),Sf=o(`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),xs=a("a"),Gf=o("paper"),Uf=o(` for the task prefixes
used).`),Pp=d(),Rn=a("p"),Bf=o(`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Td=a("em"),Wf=o("pad_to_multiple_of"),Rf=o(` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Ap=d(),xi=a("a"),Op=d(),ln=a("h2"),Hn=a("a"),bd=a("span"),k(zs.$$.fragment),Hf=d(),kd=a("span"),Kf=o("Inference"),Np=d(),zt=a("p"),Vf=o("At inference time, it is recommended to use "),zi=a("a"),Yf=o("generate()"),Zf=o(`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Es=a("a"),Jf=o("this blog post"),Xf=o(` to know all the details about generating text with Transformers.
There\u2019s also `),js=a("a"),Qf=o("this blog post"),e_=o(` which explains how
generation works in general in encoder-decoder models.`),Lp=d(),k(qs.$$.fragment),Ip=d(),dt=a("p"),t_=o("Note that T5 uses the "),vd=a("code"),n_=o("pad_token_id"),o_=o(" as the "),yd=a("code"),s_=o("decoder_start_token_id"),a_=o(`, so when doing generation without using
`),Ei=a("a"),r_=o("generate()"),i_=o(", make sure you start it with the "),wd=a("code"),l_=o("pad_token_id"),d_=o("."),Dp=d(),ji=a("p"),c_=o("The example above only shows a single example. You can also do batched inference, like so:"),Sp=d(),k(Fs.$$.fragment),Gp=d(),qi=a("p"),p_=o(`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),Up=d(),k(Ms.$$.fragment),Bp=d(),Fi=a("a"),Wp=d(),dn=a("h2"),Kn=a("a"),$d=a("span"),k(Cs.$$.fragment),h_=d(),xd=a("span"),u_=o("Performance"),Rp=d(),Et=a("p"),m_=o("If you\u2019d like a faster training and inference performance, install "),Ps=a("a"),f_=o("apex"),__=o(" and then the model will automatically use "),zd=a("code"),g_=o("apex.normalization.FusedRMSNorm"),T_=o(" instead of "),Ed=a("code"),b_=o("T5LayerNorm"),k_=o(". The former uses an optimized fused kernel which is several times faster than the latter."),Hp=d(),cn=a("h2"),Vn=a("a"),jd=a("span"),k(As.$$.fragment),v_=d(),qd=a("span"),y_=o("Resources"),Kp=d(),Mi=a("p"),w_=o("A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with T5. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),Vp=d(),k(Os.$$.fragment),Yp=d(),Yn=a("ul"),Ns=a("li"),$_=o("A notebook for how to "),Ls=a("a"),x_=o("finetune T5 for classification and multiple choice"),z_=o("."),E_=d(),Is=a("li"),j_=o("A notebook for how to "),Ds=a("a"),q_=o("finetune T5 for sentiment span extraction"),F_=o(". \u{1F30E}"),Zp=d(),k(Ss.$$.fragment),Jp=d(),Ci=a("ul"),Gs=a("li"),M_=o("A notebook for how to "),Us=a("a"),C_=o("finetune T5 for named entity recognition"),P_=o(". \u{1F30E}"),Xp=d(),k(Bs.$$.fragment),Qp=d(),Pi=a("ul"),Ws=a("li"),A_=o("A notebook for "),Rs=a("a"),O_=o("Finetuning CodeT5 for generating docstrings from Ruby code"),N_=o("."),eh=d(),k(Hs.$$.fragment),th=d(),be=a("ul"),Ks=a("li"),L_=o("A notebook to "),Vs=a("a"),I_=o("Finetune T5-base-dutch to perform Dutch abstractive summarization on a TPU"),D_=o("."),S_=d(),Ys=a("li"),G_=o("A notebook for how to "),Zs=a("a"),U_=o("finetune T5 for summarization in PyTorch and track experiments with WandB"),B_=o(". \u{1F30E}"),W_=d(),Js=a("li"),R_=o("A blog post on "),Xs=a("a"),H_=o("Distributed Training: Train BART/T5 for Summarization using \u{1F917} Transformers and Amazon SageMaker"),K_=o("."),V_=d(),Vt=a("li"),Ai=a("a"),Y_=o("T5ForConditionalGeneration"),Z_=o(" is supported by this "),Qs=a("a"),J_=o("example script"),X_=o(" and "),ea=a("a"),Q_=o("noteboook"),eg=o("."),tg=d(),Yt=a("li"),Oi=a("a"),ng=o("TFT5ForConditionalGeneration"),og=o(" is supported by this "),ta=a("a"),sg=o("example script"),ag=o(" and "),na=a("a"),rg=o("notebook"),ig=o("."),lg=d(),Zn=a("li"),Ni=a("a"),dg=o("FlaxT5ForConditionalGeneration"),cg=o(" is supported by this "),oa=a("a"),pg=o("example script"),hg=o("."),ug=d(),Li=a("li"),sa=a("a"),mg=o("Summarization"),fg=o(" chapter of the \u{1F917} Hugging Face course."),nh=d(),k(aa.$$.fragment),oh=d(),Ii=a("ul"),jt=a("li"),Di=a("a"),_g=o("FlaxT5ForConditionalGeneration"),gg=o(" is supported by this "),ra=a("a"),Tg=o("example script"),bg=o(" for training T5 with a span-masked language model objective. The script also shows how to train a T5 tokenizer. "),Si=a("a"),kg=o("FlaxT5ForConditionalGeneration"),vg=o(" is also supported by this "),ia=a("a"),yg=o("notebook"),wg=o("."),sh=d(),k(la.$$.fragment),ah=d(),Jn=a("ul"),Zt=a("li"),Gi=a("a"),$g=o("T5ForConditionalGeneration"),xg=o(" is supported by this "),da=a("a"),zg=o("example script"),Eg=o(" and "),ca=a("a"),jg=o("notebook"),qg=o("."),Fg=d(),Jt=a("li"),Ui=a("a"),Mg=o("TFT5ForConditionalGeneration"),Cg=o(" is supported by this "),pa=a("a"),Pg=o("example script"),Ag=o(" and "),ha=a("a"),Og=o("notebook"),Ng=o("."),rh=d(),k(ua.$$.fragment),ih=d(),Xn=a("ul"),ma=a("li"),Lg=o("A notebook on how to "),fa=a("a"),Ig=o("finetune T5 for question answering with TensorFlow 2"),Dg=o(". \u{1F30E}"),Sg=d(),_a=a("li"),Gg=o("A notebook on how to "),ga=a("a"),Ug=o("finetune T5 for question answering on a TPU"),Bg=o("."),lh=d(),Ta=a("p"),Wg=o("\u{1F680} "),Fd=a("strong"),Rg=o("Deploy"),dh=d(),Bi=a("ul"),ba=a("li"),Hg=o("A blog post on how to deploy "),ka=a("a"),Kg=o("T5 11B for inference for less than $500"),Vg=o("."),ch=d(),pn=a("h2"),Qn=a("a"),Md=a("span"),k(va.$$.fragment),Yg=d(),Cd=a("span"),Zg=o("T5Config"),ph=d(),Gt=a("div"),k(ya.$$.fragment),Jg=d(),Ut=a("p"),Xg=o("This is the configuration class to store the configuration of a "),Wi=a("a"),Qg=o("T5Model"),eT=o(" or a "),Ri=a("a"),tT=o("TFT5Model"),nT=o(`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),wa=a("a"),oT=o("t5-small"),sT=o(" architecture."),aT=d(),hn=a("p"),rT=o("Configuration objects inherit from "),Hi=a("a"),iT=o("PretrainedConfig"),lT=o(` and can be used to control the model outputs. Read the
documentation from `),Ki=a("a"),dT=o("PretrainedConfig"),cT=o(" for more information."),hh=d(),un=a("h2"),eo=a("a"),Pd=a("span"),k($a.$$.fragment),pT=d(),Ad=a("span"),hT=o("T5Tokenizer"),uh=d(),he=a("div"),k(xa.$$.fragment),uT=d(),za=a("p"),mT=o("Construct a T5 tokenizer. Based on "),Ea=a("a"),fT=o("SentencePiece"),_T=o("."),gT=d(),ja=a("p"),TT=o("This tokenizer inherits from "),Vi=a("a"),bT=o("PreTrainedTokenizer"),kT=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vT=d(),Xt=a("div"),k(qa.$$.fragment),yT=d(),Od=a("p"),wT=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),$T=d(),Fa=a("ul"),Yi=a("li"),xT=o("single sequence: "),Nd=a("code"),zT=o("X </s>"),ET=d(),Zi=a("li"),jT=o("pair of sequences: "),Ld=a("code"),qT=o("A </s> B </s>"),FT=d(),to=a("div"),k(Ma.$$.fragment),MT=d(),Ca=a("p"),CT=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Id=a("code"),PT=o("prepare_for_model"),AT=o(" method."),OT=d(),no=a("div"),k(Pa.$$.fragment),NT=d(),Dd=a("p"),LT=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),IT=d(),Ji=a("div"),k(Aa.$$.fragment),mh=d(),mn=a("h2"),oo=a("a"),Sd=a("span"),k(Oa.$$.fragment),DT=d(),Gd=a("span"),ST=o("T5TokenizerFast"),fh=d(),st=a("div"),k(Na.$$.fragment),GT=d(),fn=a("p"),UT=o("Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),Ud=a("em"),BT=o("tokenizers"),WT=o(` library). Based on
`),La=a("a"),RT=o("Unigram"),HT=o("."),KT=d(),Ia=a("p"),VT=o("This tokenizer inherits from "),Xi=a("a"),YT=o("PreTrainedTokenizerFast"),ZT=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),JT=d(),Qt=a("div"),k(Da.$$.fragment),XT=d(),Bd=a("p"),QT=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),eb=d(),Sa=a("ul"),Qi=a("li"),tb=o("single sequence: "),Wd=a("code"),nb=o("X </s>"),ob=d(),el=a("li"),sb=o("pair of sequences: "),Rd=a("code"),ab=o("A </s> B </s>"),rb=d(),so=a("div"),k(Ga.$$.fragment),ib=d(),Hd=a("p"),lb=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),_h=d(),_n=a("h2"),ao=a("a"),Kd=a("span"),k(Ua.$$.fragment),db=d(),Vd=a("span"),cb=o("T5Model"),gh=d(),oe=a("div"),k(Ba.$$.fragment),pb=d(),Yd=a("p"),hb=o("The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),ub=d(),Wa=a("p"),mb=o("The T5 model was proposed in "),Ra=a("a"),fb=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),_b=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),gb=d(),Ha=a("p"),Tb=o("This model inherits from "),tl=a("a"),bb=o("PreTrainedModel"),kb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vb=d(),Ka=a("p"),yb=o("This model is also a PyTorch "),Va=a("a"),wb=o("torch.nn.Module"),$b=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xb=d(),qt=a("div"),k(Ya.$$.fragment),zb=d(),gn=a("p"),Eb=o("The "),nl=a("a"),jb=o("T5Model"),qb=o(" forward method, overrides the "),Zd=a("code"),Fb=o("__call__"),Mb=o(" special method."),Cb=d(),k(ro.$$.fragment),Pb=d(),k(io.$$.fragment),Ab=d(),Ft=a("div"),k(Za.$$.fragment),Ob=d(),Jd=a("p"),Nb=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),Lb=d(),Xd=a("p"),Ib=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Db=d(),k(lo.$$.fragment),Sb=d(),en=a("div"),k(Ja.$$.fragment),Gb=d(),Qd=a("p"),Ub=o("Moves the model to cpu from a model parallel state."),Bb=d(),k(co.$$.fragment),Th=d(),Tn=a("h2"),po=a("a"),ec=a("span"),k(Xa.$$.fragment),Wb=d(),tc=a("span"),Rb=o("T5ForConditionalGeneration"),bh=d(),se=a("div"),k(Qa.$$.fragment),Hb=d(),er=a("p"),Kb=o("T5 Model with a "),nc=a("code"),Vb=o("language modeling"),Yb=o(" head on top."),Zb=d(),tr=a("p"),Jb=o("The T5 model was proposed in "),nr=a("a"),Xb=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Qb=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),ek=d(),or=a("p"),tk=o("This model inherits from "),ol=a("a"),nk=o("PreTrainedModel"),ok=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sk=d(),sr=a("p"),ak=o("This model is also a PyTorch "),ar=a("a"),rk=o("torch.nn.Module"),ik=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lk=d(),Mt=a("div"),k(rr.$$.fragment),dk=d(),bn=a("p"),ck=o("The "),sl=a("a"),pk=o("T5ForConditionalGeneration"),hk=o(" forward method, overrides the "),oc=a("code"),uk=o("__call__"),mk=o(" special method."),fk=d(),k(ho.$$.fragment),_k=d(),k(uo.$$.fragment),gk=d(),Ct=a("div"),k(ir.$$.fragment),Tk=d(),sc=a("p"),bk=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),kk=d(),ac=a("p"),vk=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),yk=d(),k(mo.$$.fragment),wk=d(),tn=a("div"),k(lr.$$.fragment),$k=d(),rc=a("p"),xk=o("Moves the model to cpu from a model parallel state."),zk=d(),k(fo.$$.fragment),kh=d(),kn=a("h2"),_o=a("a"),ic=a("span"),k(dr.$$.fragment),Ek=d(),lc=a("span"),jk=o("T5EncoderModel"),vh=d(),ae=a("div"),k(cr.$$.fragment),qk=d(),dc=a("p"),Fk=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Mk=d(),pr=a("p"),Ck=o("The T5 model was proposed in "),hr=a("a"),Pk=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Ak=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Ok=d(),ur=a("p"),Nk=o("This model inherits from "),al=a("a"),Lk=o("PreTrainedModel"),Ik=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dk=d(),mr=a("p"),Sk=o("This model is also a PyTorch "),fr=a("a"),Gk=o("torch.nn.Module"),Uk=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bk=d(),Pt=a("div"),k(_r.$$.fragment),Wk=d(),vn=a("p"),Rk=o("The "),rl=a("a"),Hk=o("T5EncoderModel"),Kk=o(" forward method, overrides the "),cc=a("code"),Vk=o("__call__"),Yk=o(" special method."),Zk=d(),k(go.$$.fragment),Jk=d(),k(To.$$.fragment),Xk=d(),At=a("div"),k(gr.$$.fragment),Qk=d(),pc=a("p"),ev=o("This is an experimental feature and is a subject to change at a moment\u2019s notice."),tv=d(),hc=a("p"),nv=o(`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),ov=d(),k(bo.$$.fragment),sv=d(),nn=a("div"),k(Tr.$$.fragment),av=d(),uc=a("p"),rv=o("Moves the model to cpu from a model parallel state."),iv=d(),k(ko.$$.fragment),yh=d(),yn=a("h2"),vo=a("a"),mc=a("span"),k(br.$$.fragment),lv=d(),fc=a("span"),dv=o("TFT5Model"),wh=d(),ue=a("div"),k(kr.$$.fragment),cv=d(),_c=a("p"),pv=o("The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),hv=d(),vr=a("p"),uv=o("The T5 model was proposed in "),yr=a("a"),mv=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),fv=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),_v=d(),wr=a("p"),gv=o("This model inherits from "),il=a("a"),Tv=o("TFPreTrainedModel"),bv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kv=d(),$r=a("p"),vv=o("This model is also a "),xr=a("a"),yv=o("tf.keras.Model"),wv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$v=d(),k(yo.$$.fragment),xv=d(),Ot=a("div"),k(zr.$$.fragment),zv=d(),wn=a("p"),Ev=o("The "),ll=a("a"),jv=o("TFT5Model"),qv=o(" forward method, overrides the "),gc=a("code"),Fv=o("__call__"),Mv=o(" special method."),Cv=d(),k(wo.$$.fragment),Pv=d(),k($o.$$.fragment),$h=d(),$n=a("h2"),xo=a("a"),Tc=a("span"),k(Er.$$.fragment),Av=d(),bc=a("span"),Ov=o("TFT5ForConditionalGeneration"),xh=d(),me=a("div"),k(jr.$$.fragment),Nv=d(),qr=a("p"),Lv=o("T5 Model with a "),kc=a("code"),Iv=o("language modeling"),Dv=o(" head on top."),Sv=d(),Fr=a("p"),Gv=o("The T5 model was proposed in "),Mr=a("a"),Uv=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),Bv=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Wv=d(),Cr=a("p"),Rv=o("This model inherits from "),dl=a("a"),Hv=o("TFPreTrainedModel"),Kv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vv=d(),Pr=a("p"),Yv=o("This model is also a "),Ar=a("a"),Zv=o("tf.keras.Model"),Jv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xv=d(),k(zo.$$.fragment),Qv=d(),Nt=a("div"),k(Or.$$.fragment),ey=d(),xn=a("p"),ty=o("The "),cl=a("a"),ny=o("TFT5ForConditionalGeneration"),oy=o(" forward method, overrides the "),vc=a("code"),sy=o("__call__"),ay=o(" special method."),ry=d(),k(Eo.$$.fragment),iy=d(),k(jo.$$.fragment),zh=d(),zn=a("h2"),qo=a("a"),yc=a("span"),k(Nr.$$.fragment),ly=d(),wc=a("span"),dy=o("TFT5EncoderModel"),Eh=d(),fe=a("div"),k(Lr.$$.fragment),cy=d(),$c=a("p"),py=o("The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),hy=d(),Ir=a("p"),uy=o("The T5 model was proposed in "),Dr=a("a"),my=o(`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),fy=o(` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),_y=d(),Sr=a("p"),gy=o("This model inherits from "),pl=a("a"),Ty=o("TFPreTrainedModel"),by=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ky=d(),Gr=a("p"),vy=o("This model is also a "),Ur=a("a"),yy=o("tf.keras.Model"),wy=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$y=d(),k(Fo.$$.fragment),xy=d(),Lt=a("div"),k(Br.$$.fragment),zy=d(),En=a("p"),Ey=o("The "),hl=a("a"),jy=o("TFT5EncoderModel"),qy=o(" forward method, overrides the "),xc=a("code"),Fy=o("__call__"),My=o(" special method."),Cy=d(),k(Mo.$$.fragment),Py=d(),k(Co.$$.fragment),jh=d(),jn=a("h2"),Po=a("a"),zc=a("span"),k(Wr.$$.fragment),Ay=d(),Ec=a("span"),Oy=o("FlaxT5Model"),qh=d(),gt=a("div"),k(Rr.$$.fragment),Ny=d(),It=a("div"),k(Hr.$$.fragment),Ly=d(),qn=a("p"),Iy=o("The "),jc=a("code"),Dy=o("FlaxT5PreTrainedModel"),Sy=o(" forward method, overrides the "),qc=a("code"),Gy=o("__call__"),Uy=o(" special method."),By=d(),k(Ao.$$.fragment),Wy=d(),k(Oo.$$.fragment),Ry=d(),No=a("div"),k(Kr.$$.fragment),Hy=d(),k(Lo.$$.fragment),Ky=d(),Io=a("div"),k(Vr.$$.fragment),Vy=d(),k(Do.$$.fragment),Fh=d(),Fn=a("h2"),So=a("a"),Fc=a("span"),k(Yr.$$.fragment),Yy=d(),Mc=a("span"),Zy=o("FlaxT5ForConditionalGeneration"),Mh=d(),Tt=a("div"),k(Zr.$$.fragment),Jy=d(),Dt=a("div"),k(Jr.$$.fragment),Xy=d(),Mn=a("p"),Qy=o("The "),Cc=a("code"),e5=o("FlaxT5PreTrainedModel"),t5=o(" forward method, overrides the "),Pc=a("code"),n5=o("__call__"),o5=o(" special method."),s5=d(),k(Go.$$.fragment),a5=d(),k(Uo.$$.fragment),r5=d(),Bo=a("div"),k(Xr.$$.fragment),i5=d(),k(Wo.$$.fragment),l5=d(),Ro=a("div"),k(Qr.$$.fragment),d5=d(),k(Ho.$$.fragment),Ch=d(),Cn=a("h2"),Ko=a("a"),Ac=a("span"),k(ei.$$.fragment),c5=d(),Oc=a("span"),p5=o("FlaxT5EncoderModel"),Ph=d(),Pn=a("div"),k(ti.$$.fragment),h5=d(),on=a("div"),k(ni.$$.fragment),u5=d(),An=a("p"),m5=o("The "),ul=a("a"),f5=o("FlaxT5EncoderModel"),_5=o(" forward method, overrides the "),Nc=a("code"),g5=o("__call__"),T5=o(" special method."),b5=d(),k(Vo.$$.fragment),this.h()},l(t){const u=B$('[data-svelte="svelte-1phssyn"]',document.head);h=r(u,"META",{name:!0,content:!0}),u.forEach(n),b=c(t),g=r(t,"H1",{class:!0});var oi=i(g);_=r(oi,"A",{id:!0,class:!0,href:!0});var Lc=i(_);T=r(Lc,"SPAN",{});var Ic=i(T);v(l.$$.fragment,Ic),Ic.forEach(n),Lc.forEach(n),f=c(oi),q=r(oi,"SPAN",{});var Dc=i(q);Ue=s(Dc,"T5"),Dc.forEach(n),oi.forEach(n),Fe=c(t),S=r(t,"H2",{class:!0});var si=i(S);re=r(si,"A",{id:!0,class:!0,href:!0});var Sc=i(re);ie=r(Sc,"SPAN",{});var Gc=i(ie);v(j.$$.fragment,Gc),Gc.forEach(n),Sc.forEach(n),Be=c(si),K=r(si,"SPAN",{});var Uc=i(K);We=s(Uc,"Overview"),Uc.forEach(n),si.forEach(n),Me=c(t),G=r(t,"P",{});var ai=i(G);Re=s(ai,"The T5 model was presented in "),de=r(ai,"A",{href:!0,rel:!0});var Bc=i(de);J=s(Bc,"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer"),Bc.forEach(n),He=s(ai,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan Narang,
Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu.`),ai.forEach(n),Ce=c(t),U=r(t,"P",{});var Wc=i(U);Ke=s(Wc,"The abstract from the paper is the following:"),Wc.forEach(n),Pe=c(t),B=r(t,"P",{});var Rc=i(B);we=r(Rc,"EM",{});var Hc=i(we);Ve=s(Hc,`Transfer learning, where a model is first pre-trained on a data-rich task before being fine-tuned on a downstream
task, has emerged as a powerful technique in natural language processing (NLP). The effectiveness of transfer learning
has given rise to a diversity of approaches, methodology, and practice. In this paper, we explore the landscape of
transfer learning techniques for NLP by introducing a unified framework that converts every language problem into a
text-to-text format. Our systematic study compares pretraining objectives, architectures, unlabeled datasets, transfer
approaches, and other factors on dozens of language understanding tasks. By combining the insights from our exploration
with scale and our new \u201CColossal Clean Crawled Corpus\u201D, we achieve state-of-the-art results on many benchmarks covering
summarization, question answering, text classification, and more. To facilitate future work on transfer learning for
NLP, we release our dataset, pre-trained models, and code.`),Hc.forEach(n),Rc.forEach(n),ce=c(t),C=r(t,"P",{});var Kc=i(C);A=s(Kc,"Tips:"),Kc.forEach(n),Ae=c(t),D=r(t,"UL",{});var On=i(D);$e=r(On,"LI",{});var Vc=i($e);X=r(Vc,"P",{});var Nn=i(X);Q=s(Nn,`T5 is an encoder-decoder model pre-trained on a multi-task mixture of unsupervised and supervised tasks and for which
each task is converted into a text-to-text format. T5 works well on a variety of tasks out-of-the-box by prepending a
different prefix to the input corresponding to each task, e.g., for translation: `),xe=r(Nn,"EM",{});var Yc=i(xe);Ye=s(Yc,"translate English to German: \u2026"),Yc.forEach(n),O=s(Nn,`,
for summarization: `),ze=r(Nn,"EM",{});var Zc=i(ze);ee=s(Zc,"summarize: \u2026"),Zc.forEach(n),Ze=s(Nn,"."),Nn.forEach(n),Vc.forEach(n),Je=c(On),V=r(On,"LI",{});var Jc=i(V);Ee=r(Jc,"P",{});var Xc=i(Ee);Xe=s(Xc,"T5 uses relative scalar embeddings. Encoder input padding can be done on the left and on the right."),Xc.forEach(n),Jc.forEach(n),W=c(On),je=r(On,"LI",{});var Qc=i(je);I=r(Qc,"P",{});var Bt=i(I);Qe=s(Bt,"See the "),te=r(Bt,"A",{href:!0});var ep=i(te);N=s(ep,"training"),ep.forEach(n),et=s(Bt,", "),L=r(Bt,"A",{href:!0});var tp=i(L);tt=s(tp,"inference"),tp.forEach(n),nt=s(Bt," and "),z=r(Bt,"A",{href:!0});var np=i(z);F=s(np,"scripts"),np.forEach(n),kt=s(Bt," sections below for all details regarding usage."),Bt.forEach(n),Qc.forEach(n),On.forEach(n),pe=c(t),ot=r(t,"P",{});var op=i(ot);vt=s(op,"T5 comes in different sizes:"),op.forEach(n),M=c(t),Y=r(t,"UL",{});var bt=i(Y);at=r(bt,"LI",{});var sp=i(at);rt=r(sp,"P",{});var ap=i(rt);Oe=r(ap,"A",{href:!0,rel:!0});var E5=i(Oe);yt=s(E5,"t5-small"),E5.forEach(n),ap.forEach(n),sp.forEach(n),R=c(bt),Z=r(bt,"LI",{});var j5=i(Z);it=r(j5,"P",{});var q5=i(it);Ne=r(q5,"A",{href:!0,rel:!0});var F5=i(Ne);ne=s(F5,"t5-base"),F5.forEach(n),q5.forEach(n),j5.forEach(n),wt=c(bt),lt=r(bt,"LI",{});var M5=i(lt);qe=r(M5,"P",{});var C5=i(qe);Le=r(C5,"A",{href:!0,rel:!0});var P5=i(Le);_e=s(P5,"t5-large"),P5.forEach(n),C5.forEach(n),M5.forEach(n),$t=c(bt),Nl=r(bt,"LI",{});var A5=i(Nl);Ll=r(A5,"P",{});var O5=i(Ll);hs=r(O5,"A",{href:!0,rel:!0});var N5=i(hs);Yu=s(N5,"t5-3b"),N5.forEach(n),O5.forEach(n),A5.forEach(n),Zu=c(bt),Il=r(bt,"LI",{});var L5=i(Il);pi=r(L5,"P",{});var k5=i(pi);us=r(k5,"A",{href:!0,rel:!0});var I5=i(us);Ju=s(I5,"t5-11b"),I5.forEach(n),Xu=s(k5,"."),k5.forEach(n),L5.forEach(n),bt.forEach(n),cp=c(t),hi=r(t,"P",{});var D5=i(hi);Qu=s(D5,"Based on the original T5 model, Google has released some follow-up works:"),D5.forEach(n),pp=c(t),Wt=r(t,"UL",{});var ml=i(Wt);Dl=r(ml,"LI",{});var S5=i(Dl);In=r(S5,"P",{});var rp=i(In);Sl=r(rp,"STRONG",{});var G5=i(Sl);em=s(G5,"T5v1.1"),G5.forEach(n),tm=s(rp,`: T5v1.1 is an improved version of T5 with some architectural tweaks, and is pre-trained on C4 only without
mixing in the supervised tasks. Refer to the documentation of T5v1.1 which can be found `),ui=r(rp,"A",{href:!0});var U5=i(ui);nm=s(U5,"here"),U5.forEach(n),om=s(rp,"."),rp.forEach(n),S5.forEach(n),sm=c(ml),Gl=r(ml,"LI",{});var B5=i(Gl);Dn=r(B5,"P",{});var ip=i(Dn);Ul=r(ip,"STRONG",{});var W5=i(Ul);am=s(W5,"mT5"),W5.forEach(n),rm=s(ip,`: mT5 is a multilingual T5 model. It is pre-trained on the mC4 corpus, which includes 101 languages. Refer to
the documentation of mT5 which can be found `),mi=r(ip,"A",{href:!0});var R5=i(mi);im=s(R5,"here"),R5.forEach(n),lm=s(ip,"."),ip.forEach(n),B5.forEach(n),dm=c(ml),Bl=r(ml,"LI",{});var H5=i(Bl);Sn=r(H5,"P",{});var lp=i(Sn);Wl=r(lp,"STRONG",{});var K5=i(Wl);cm=s(K5,"byT5"),K5.forEach(n),pm=s(lp,`: byT5 is a T5 model pre-trained on byte sequences rather than SentencePiece subword token sequences. Refer
to the documentation of byT5 which can be found `),fi=r(lp,"A",{href:!0});var V5=i(fi);hm=s(V5,"here"),V5.forEach(n),um=s(lp,"."),lp.forEach(n),H5.forEach(n),ml.forEach(n),hp=c(t),Gn=r(t,"P",{});var Oh=i(Gn);mm=s(Oh,"All checkpoints can be found on the "),ms=r(Oh,"A",{href:!0,rel:!0});var Y5=i(ms);fm=s(Y5,"hub"),Y5.forEach(n),_m=s(Oh,"."),Oh.forEach(n),up=c(t),Rt=r(t,"P",{});var fl=i(Rt);gm=s(fl,"This model was contributed by "),fs=r(fl,"A",{href:!0,rel:!0});var Z5=i(fs);Tm=s(Z5,"thomwolf"),Z5.forEach(n),bm=s(fl,". The original code can be found "),_s=r(fl,"A",{href:!0,rel:!0});var J5=i(_s);km=s(J5,"here"),J5.forEach(n),vm=s(fl,"."),fl.forEach(n),mp=c(t),_i=r(t,"A",{id:!0}),i(_i).forEach(n),fp=c(t),rn=r(t,"H2",{class:!0});var Nh=i(rn);Un=r(Nh,"A",{id:!0,class:!0,href:!0});var X5=i(Un);Rl=r(X5,"SPAN",{});var Q5=i(Rl);v(gs.$$.fragment,Q5),Q5.forEach(n),X5.forEach(n),ym=c(Nh),Hl=r(Nh,"SPAN",{});var ew=i(Hl);wm=s(ew,"Training"),ew.forEach(n),Nh.forEach(n),_p=c(t),xt=r(t,"P",{});var Yo=i(xt);$m=s(Yo,`T5 is an encoder-decoder model and converts all NLP problems into a text-to-text format. It is trained using teacher
forcing. This means that for training, we always need an input sequence and a corresponding target sequence. The input
sequence is fed to the model using `),Kl=r(Yo,"CODE",{});var tw=i(Kl);xm=s(tw,"input_ids"),tw.forEach(n),zm=s(Yo,`. The target sequence is shifted to the right, i.e., prepended by a
start-sequence token and fed to the decoder using the `),Vl=r(Yo,"CODE",{});var nw=i(Vl);Em=s(nw,"decoder_input_ids"),nw.forEach(n),jm=s(Yo,`. In teacher-forcing style, the target
sequence is then appended by the EOS token and corresponds to the `),Yl=r(Yo,"CODE",{});var ow=i(Yl);qm=s(ow,"labels"),ow.forEach(n),Fm=s(Yo,`. The PAD token is hereby used as the
start-sequence token. T5 can be trained / fine-tuned both in a supervised and unsupervised fashion.`),Yo.forEach(n),gp=c(t),Bn=r(t,"P",{});var Lh=i(Bn);Mm=s(Lh,"One can use "),gi=r(Lh,"A",{href:!0});var sw=i(gi);Cm=s(sw,"T5ForConditionalGeneration"),sw.forEach(n),Pm=s(Lh,` (or the Tensorflow/Flax variant), which includes the
language modeling head on top of the decoder.`),Lh.forEach(n),Tp=c(t),Ti=r(t,"UL",{});var aw=i(Ti);Zl=r(aw,"LI",{});var rw=i(Zl);Am=s(rw,"Unsupervised denoising training"),rw.forEach(n),aw.forEach(n),bp=c(t),ge=r(t,"P",{});var ct=i(ge);Om=s(ct,"In this setup, spans of the input sequence are masked by so-called sentinel tokens ("),Jl=r(ct,"EM",{});var iw=i(Jl);Nm=s(iw,"a.k.a"),iw.forEach(n),Lm=s(ct,` unique mask tokens) and
the output sequence is formed as a concatenation of the same sentinel tokens and the `),Xl=r(ct,"EM",{});var lw=i(Xl);Im=s(lw,"real"),lw.forEach(n),Dm=s(ct,` masked tokens. Each
sentinel token represents a unique mask token for this sentence and should start with `),Ql=r(ct,"CODE",{});var dw=i(Ql);Sm=s(dw,"<extra_id_0>"),dw.forEach(n),Gm=s(ct,`,
`),ed=r(ct,"CODE",{});var cw=i(ed);Um=s(cw,"<extra_id_1>"),cw.forEach(n),Bm=s(ct,", \u2026 up to "),td=r(ct,"CODE",{});var pw=i(td);Wm=s(pw,"<extra_id_99>"),pw.forEach(n),Rm=s(ct,`. As a default, 100 sentinel tokens are available in
`),bi=r(ct,"A",{href:!0});var hw=i(bi);Hm=s(hw,"T5Tokenizer"),hw.forEach(n),Km=s(ct,"."),ct.forEach(n),kp=c(t),ki=r(t,"P",{});var uw=i(ki);Vm=s(uw,`For instance, the sentence \u201CThe cute dog walks in the park\u201D with the masks put on \u201Ccute dog\u201D and \u201Cthe\u201D should be
processed as follows:`),uw.forEach(n),vp=c(t),v(Ts.$$.fragment,t),yp=c(t),Wn=r(t,"P",{});var Ih=i(Wn);Ym=s(Ih,"If you\u2019re interested in pre-training T5 on a new corpus, check out the "),bs=r(Ih,"A",{href:!0,rel:!0});var mw=i(bs);Zm=s(mw,"run_t5_mlm_flax.py"),mw.forEach(n),Jm=s(Ih,` script in the Examples
directory.`),Ih.forEach(n),wp=c(t),vi=r(t,"UL",{});var fw=i(vi);nd=r(fw,"LI",{});var _w=i(nd);Xm=s(_w,"Supervised training"),_w.forEach(n),fw.forEach(n),$p=c(t),yi=r(t,"P",{});var gw=i(yi);Qm=s(gw,`In this setup, the input sequence and output sequence are a standard sequence-to-sequence input-output mapping.
Suppose that we want to fine-tune the model for translation for example, and we have a training example: the input
sequence \u201CThe house is wonderful.\u201D and output sequence \u201CDas Haus ist wunderbar.\u201D, then they should be prepared for
the model as follows:`),gw.forEach(n),xp=c(t),v(ks.$$.fragment,t),zp=c(t),le=r(t,"P",{});var Ie=i(le);ef=s(Ie,"As you can see, only 2 inputs are required for the model in order to compute a loss: "),od=r(Ie,"CODE",{});var Tw=i(od);tf=s(Tw,"input_ids"),Tw.forEach(n),nf=s(Ie,` (which are the
`),sd=r(Ie,"CODE",{});var bw=i(sd);of=s(bw,"input_ids"),bw.forEach(n),sf=s(Ie," of the encoded input sequence) and "),ad=r(Ie,"CODE",{});var kw=i(ad);af=s(kw,"labels"),kw.forEach(n),rf=s(Ie," (which are the "),rd=r(Ie,"CODE",{});var vw=i(rd);lf=s(vw,"input_ids"),vw.forEach(n),df=s(Ie,` of the encoded
target sequence). The model will automatically create the `),id=r(Ie,"CODE",{});var yw=i(id);cf=s(yw,"decoder_input_ids"),yw.forEach(n),pf=s(Ie," based on the "),ld=r(Ie,"CODE",{});var ww=i(ld);hf=s(ww,"labels"),ww.forEach(n),uf=s(Ie,`, by
shifting them one position to the right and prepending the `),dd=r(Ie,"CODE",{});var $w=i(dd);mf=s($w,"config.decoder_start_token_id"),$w.forEach(n),ff=s(Ie,`, which for T5 is
equal to 0 (i.e. the id of the pad token). Also note the task prefix: we prepend the input sequence with \u2018translate
English to German: \u2019 before encoding it. This will help in improving the performance, as this task prefix was used
during T5\u2019s pre-training.`),Ie.forEach(n),Ep=c(t),Ht=r(t,"P",{});var _l=i(Ht);_f=s(_l,`However, the example above only shows a single training example. In practice, one trains deep learning models in
batches. This entails that we must pad/truncate examples to the same length. For encoder-decoder models, one
typically defines a `),cd=r(_l,"CODE",{});var xw=i(cd);gf=s(xw,"max_source_length"),xw.forEach(n),Tf=s(_l," and "),pd=r(_l,"CODE",{});var zw=i(pd);bf=s(zw,"max_target_length"),zw.forEach(n),kf=s(_l,`, which determine the maximum length of the
input and output sequences respectively (otherwise they are truncated). These should be carefully set depending on
the task.`),_l.forEach(n),jp=c(t),Te=r(t,"P",{});var pt=i(Te);vf=s(pt,"In addition, we must make sure that padding token id\u2019s of the "),hd=r(pt,"CODE",{});var Ew=i(hd);yf=s(Ew,"labels"),Ew.forEach(n),wf=s(pt,` are not taken into account by the loss
function. In PyTorch and Tensorflow, this can be done by replacing them with -100, which is the `),ud=r(pt,"CODE",{});var jw=i(ud);$f=s(jw,"ignore_index"),jw.forEach(n),xf=s(pt,`
of the `),md=r(pt,"CODE",{});var qw=i(md);zf=s(qw,"CrossEntropyLoss"),qw.forEach(n),Ef=s(pt,". In Flax, one can use the "),fd=r(pt,"CODE",{});var Fw=i(fd);jf=s(Fw,"decoder_attention_mask"),Fw.forEach(n),qf=s(pt,` to ignore padded tokens from
the loss (see the `),vs=r(pt,"A",{href:!0,rel:!0});var Mw=i(vs);Ff=s(Mw,"Flax summarization script"),Mw.forEach(n),Mf=s(pt,` for details). We also pass
`),_d=r(pt,"CODE",{});var Cw=i(_d);Cf=s(Cw,"attention_mask"),Cw.forEach(n),Pf=s(pt,` as additional input to the model, which makes sure that padding tokens of the inputs are
ignored. The code example below illustrates all of this.`),pt.forEach(n),qp=c(t),v(ys.$$.fragment,t),Fp=c(t),wi=r(t,"P",{});var Pw=i(wi);Af=s(Pw,"Additional training tips:"),Pw.forEach(n),Mp=c(t),$i=r(t,"UL",{});var Aw=i($i);ws=r(Aw,"LI",{});var Dh=i(ws);Of=s(Dh,"T5 models need a slightly higher learning rate than the default one set in the "),gd=r(Dh,"CODE",{});var Ow=i(gd);Nf=s(Ow,"Trainer"),Ow.forEach(n),Lf=s(Dh,` when using the AdamW
optimizer. Typically, 1e-4 and 3e-4 work well for most problems (classification, summarization, translation, question
answering, question generation). Note that T5 was pre-trained using the AdaFactor optimizer.`),Dh.forEach(n),Aw.forEach(n),Cp=c(t),Kt=r(t,"P",{});var gl=i(Kt);If=s(gl,"According to "),$s=r(gl,"A",{href:!0,rel:!0});var Nw=i($s);Df=s(Nw,"this forum post"),Nw.forEach(n),Sf=s(gl,`, task prefixes matter when
(1) doing multi-task training (2) your task is similar or related to one of the supervised tasks used in T5\u2019s
pre-training mixture (see Appendix D of the `),xs=r(gl,"A",{href:!0,rel:!0});var Lw=i(xs);Gf=s(Lw,"paper"),Lw.forEach(n),Uf=s(gl,` for the task prefixes
used).`),gl.forEach(n),Pp=c(t),Rn=r(t,"P",{});var Sh=i(Rn);Bf=s(Sh,`If training on TPU, it is recommended to pad all examples of the dataset to the same length or make use of
`),Td=r(Sh,"EM",{});var Iw=i(Td);Wf=s(Iw,"pad_to_multiple_of"),Iw.forEach(n),Rf=s(Sh,` to have a small number of predefined bucket sizes to fit all examples in. Dynamically padding
batches to the longest example is not recommended on TPU as it triggers a recompilation for every batch shape that is
encountered during training thus significantly slowing down the training. only padding up to the longest example in a
batch) leads to very slow training on TPU.`),Sh.forEach(n),Ap=c(t),xi=r(t,"A",{id:!0}),i(xi).forEach(n),Op=c(t),ln=r(t,"H2",{class:!0});var Gh=i(ln);Hn=r(Gh,"A",{id:!0,class:!0,href:!0});var Dw=i(Hn);bd=r(Dw,"SPAN",{});var Sw=i(bd);v(zs.$$.fragment,Sw),Sw.forEach(n),Dw.forEach(n),Hf=c(Gh),kd=r(Gh,"SPAN",{});var Gw=i(kd);Kf=s(Gw,"Inference"),Gw.forEach(n),Gh.forEach(n),Np=c(t),zt=r(t,"P",{});var Zo=i(zt);Vf=s(Zo,"At inference time, it is recommended to use "),zi=r(Zo,"A",{href:!0});var Uw=i(zi);Yf=s(Uw,"generate()"),Uw.forEach(n),Zf=s(Zo,`. This
method takes care of encoding the input and feeding the encoded hidden states via cross-attention layers to the decoder
and auto-regressively generates the decoder output. Check out `),Es=r(Zo,"A",{href:!0,rel:!0});var Bw=i(Es);Jf=s(Bw,"this blog post"),Bw.forEach(n),Xf=s(Zo,` to know all the details about generating text with Transformers.
There\u2019s also `),js=r(Zo,"A",{href:!0,rel:!0});var Ww=i(js);Qf=s(Ww,"this blog post"),Ww.forEach(n),e_=s(Zo,` which explains how
generation works in general in encoder-decoder models.`),Zo.forEach(n),Lp=c(t),v(qs.$$.fragment,t),Ip=c(t),dt=r(t,"P",{});var sn=i(dt);t_=s(sn,"Note that T5 uses the "),vd=r(sn,"CODE",{});var Rw=i(vd);n_=s(Rw,"pad_token_id"),Rw.forEach(n),o_=s(sn," as the "),yd=r(sn,"CODE",{});var Hw=i(yd);s_=s(Hw,"decoder_start_token_id"),Hw.forEach(n),a_=s(sn,`, so when doing generation without using
`),Ei=r(sn,"A",{href:!0});var Kw=i(Ei);r_=s(Kw,"generate()"),Kw.forEach(n),i_=s(sn,", make sure you start it with the "),wd=r(sn,"CODE",{});var Vw=i(wd);l_=s(Vw,"pad_token_id"),Vw.forEach(n),d_=s(sn,"."),sn.forEach(n),Dp=c(t),ji=r(t,"P",{});var Yw=i(ji);c_=s(Yw,"The example above only shows a single example. You can also do batched inference, like so:"),Yw.forEach(n),Sp=c(t),v(Fs.$$.fragment,t),Gp=c(t),qi=r(t,"P",{});var Zw=i(qi);p_=s(Zw,`Because T5 has been trained with the span-mask denoising objective,
it can be used to predict the sentinel (masked-out) tokens during inference.
The predicted tokens will then be placed between the sentinel tokens.`),Zw.forEach(n),Up=c(t),v(Ms.$$.fragment,t),Bp=c(t),Fi=r(t,"A",{id:!0}),i(Fi).forEach(n),Wp=c(t),dn=r(t,"H2",{class:!0});var Uh=i(dn);Kn=r(Uh,"A",{id:!0,class:!0,href:!0});var Jw=i(Kn);$d=r(Jw,"SPAN",{});var Xw=i($d);v(Cs.$$.fragment,Xw),Xw.forEach(n),Jw.forEach(n),h_=c(Uh),xd=r(Uh,"SPAN",{});var Qw=i(xd);u_=s(Qw,"Performance"),Qw.forEach(n),Uh.forEach(n),Rp=c(t),Et=r(t,"P",{});var Jo=i(Et);m_=s(Jo,"If you\u2019d like a faster training and inference performance, install "),Ps=r(Jo,"A",{href:!0,rel:!0});var e1=i(Ps);f_=s(e1,"apex"),e1.forEach(n),__=s(Jo," and then the model will automatically use "),zd=r(Jo,"CODE",{});var t1=i(zd);g_=s(t1,"apex.normalization.FusedRMSNorm"),t1.forEach(n),T_=s(Jo," instead of "),Ed=r(Jo,"CODE",{});var n1=i(Ed);b_=s(n1,"T5LayerNorm"),n1.forEach(n),k_=s(Jo,". The former uses an optimized fused kernel which is several times faster than the latter."),Jo.forEach(n),Hp=c(t),cn=r(t,"H2",{class:!0});var Bh=i(cn);Vn=r(Bh,"A",{id:!0,class:!0,href:!0});var o1=i(Vn);jd=r(o1,"SPAN",{});var s1=i(jd);v(As.$$.fragment,s1),s1.forEach(n),o1.forEach(n),v_=c(Bh),qd=r(Bh,"SPAN",{});var a1=i(qd);y_=s(a1,"Resources"),a1.forEach(n),Bh.forEach(n),Kp=c(t),Mi=r(t,"P",{});var r1=i(Mi);w_=s(r1,"A list of official Hugging Face and community (indicated by \u{1F30E}) resources to help you get started with T5. If you\u2019re interested in submitting a resource to be included here, please feel free to open a Pull Request and we\u2019ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource."),r1.forEach(n),Vp=c(t),v(Os.$$.fragment,t),Yp=c(t),Yn=r(t,"UL",{});var Wh=i(Yn);Ns=r(Wh,"LI",{});var Rh=i(Ns);$_=s(Rh,"A notebook for how to "),Ls=r(Rh,"A",{href:!0,rel:!0});var i1=i(Ls);x_=s(i1,"finetune T5 for classification and multiple choice"),i1.forEach(n),z_=s(Rh,"."),Rh.forEach(n),E_=c(Wh),Is=r(Wh,"LI",{});var Hh=i(Is);j_=s(Hh,"A notebook for how to "),Ds=r(Hh,"A",{href:!0,rel:!0});var l1=i(Ds);q_=s(l1,"finetune T5 for sentiment span extraction"),l1.forEach(n),F_=s(Hh,". \u{1F30E}"),Hh.forEach(n),Wh.forEach(n),Zp=c(t),v(Ss.$$.fragment,t),Jp=c(t),Ci=r(t,"UL",{});var d1=i(Ci);Gs=r(d1,"LI",{});var Kh=i(Gs);M_=s(Kh,"A notebook for how to "),Us=r(Kh,"A",{href:!0,rel:!0});var c1=i(Us);C_=s(c1,"finetune T5 for named entity recognition"),c1.forEach(n),P_=s(Kh,". \u{1F30E}"),Kh.forEach(n),d1.forEach(n),Xp=c(t),v(Bs.$$.fragment,t),Qp=c(t),Pi=r(t,"UL",{});var p1=i(Pi);Ws=r(p1,"LI",{});var Vh=i(Ws);A_=s(Vh,"A notebook for "),Rs=r(Vh,"A",{href:!0,rel:!0});var h1=i(Rs);O_=s(h1,"Finetuning CodeT5 for generating docstrings from Ruby code"),h1.forEach(n),N_=s(Vh,"."),Vh.forEach(n),p1.forEach(n),eh=c(t),v(Hs.$$.fragment,t),th=c(t),be=r(t,"UL",{});var ht=i(be);Ks=r(ht,"LI",{});var Yh=i(Ks);L_=s(Yh,"A notebook to "),Vs=r(Yh,"A",{href:!0,rel:!0});var u1=i(Vs);I_=s(u1,"Finetune T5-base-dutch to perform Dutch abstractive summarization on a TPU"),u1.forEach(n),D_=s(Yh,"."),Yh.forEach(n),S_=c(ht),Ys=r(ht,"LI",{});var Zh=i(Ys);G_=s(Zh,"A notebook for how to "),Zs=r(Zh,"A",{href:!0,rel:!0});var m1=i(Zs);U_=s(m1,"finetune T5 for summarization in PyTorch and track experiments with WandB"),m1.forEach(n),B_=s(Zh,". \u{1F30E}"),Zh.forEach(n),W_=c(ht),Js=r(ht,"LI",{});var Jh=i(Js);R_=s(Jh,"A blog post on "),Xs=r(Jh,"A",{href:!0,rel:!0});var f1=i(Xs);H_=s(f1,"Distributed Training: Train BART/T5 for Summarization using \u{1F917} Transformers and Amazon SageMaker"),f1.forEach(n),K_=s(Jh,"."),Jh.forEach(n),V_=c(ht),Vt=r(ht,"LI",{});var ri=i(Vt);Ai=r(ri,"A",{href:!0});var _1=i(Ai);Y_=s(_1,"T5ForConditionalGeneration"),_1.forEach(n),Z_=s(ri," is supported by this "),Qs=r(ri,"A",{href:!0,rel:!0});var g1=i(Qs);J_=s(g1,"example script"),g1.forEach(n),X_=s(ri," and "),ea=r(ri,"A",{href:!0,rel:!0});var T1=i(ea);Q_=s(T1,"noteboook"),T1.forEach(n),eg=s(ri,"."),ri.forEach(n),tg=c(ht),Yt=r(ht,"LI",{});var ii=i(Yt);Oi=r(ii,"A",{href:!0});var b1=i(Oi);ng=s(b1,"TFT5ForConditionalGeneration"),b1.forEach(n),og=s(ii," is supported by this "),ta=r(ii,"A",{href:!0,rel:!0});var k1=i(ta);sg=s(k1,"example script"),k1.forEach(n),ag=s(ii," and "),na=r(ii,"A",{href:!0,rel:!0});var v1=i(na);rg=s(v1,"notebook"),v1.forEach(n),ig=s(ii,"."),ii.forEach(n),lg=c(ht),Zn=r(ht,"LI",{});var dp=i(Zn);Ni=r(dp,"A",{href:!0});var y1=i(Ni);dg=s(y1,"FlaxT5ForConditionalGeneration"),y1.forEach(n),cg=s(dp," is supported by this "),oa=r(dp,"A",{href:!0,rel:!0});var w1=i(oa);pg=s(w1,"example script"),w1.forEach(n),hg=s(dp,"."),dp.forEach(n),ug=c(ht),Li=r(ht,"LI",{});var v5=i(Li);sa=r(v5,"A",{href:!0,rel:!0});var $1=i(sa);mg=s($1,"Summarization"),$1.forEach(n),fg=s(v5," chapter of the \u{1F917} Hugging Face course."),v5.forEach(n),ht.forEach(n),nh=c(t),v(aa.$$.fragment,t),oh=c(t),Ii=r(t,"UL",{});var x1=i(Ii);jt=r(x1,"LI",{});var Ln=i(jt);Di=r(Ln,"A",{href:!0});var z1=i(Di);_g=s(z1,"FlaxT5ForConditionalGeneration"),z1.forEach(n),gg=s(Ln," is supported by this "),ra=r(Ln,"A",{href:!0,rel:!0});var E1=i(ra);Tg=s(E1,"example script"),E1.forEach(n),bg=s(Ln," for training T5 with a span-masked language model objective. The script also shows how to train a T5 tokenizer. "),Si=r(Ln,"A",{href:!0});var j1=i(Si);kg=s(j1,"FlaxT5ForConditionalGeneration"),j1.forEach(n),vg=s(Ln," is also supported by this "),ia=r(Ln,"A",{href:!0,rel:!0});var q1=i(ia);yg=s(q1,"notebook"),q1.forEach(n),wg=s(Ln,"."),Ln.forEach(n),x1.forEach(n),sh=c(t),v(la.$$.fragment,t),ah=c(t),Jn=r(t,"UL",{});var Xh=i(Jn);Zt=r(Xh,"LI",{});var li=i(Zt);Gi=r(li,"A",{href:!0});var F1=i(Gi);$g=s(F1,"T5ForConditionalGeneration"),F1.forEach(n),xg=s(li," is supported by this "),da=r(li,"A",{href:!0,rel:!0});var M1=i(da);zg=s(M1,"example script"),M1.forEach(n),Eg=s(li," and "),ca=r(li,"A",{href:!0,rel:!0});var C1=i(ca);jg=s(C1,"notebook"),C1.forEach(n),qg=s(li,"."),li.forEach(n),Fg=c(Xh),Jt=r(Xh,"LI",{});var di=i(Jt);Ui=r(di,"A",{href:!0});var P1=i(Ui);Mg=s(P1,"TFT5ForConditionalGeneration"),P1.forEach(n),Cg=s(di," is supported by this "),pa=r(di,"A",{href:!0,rel:!0});var A1=i(pa);Pg=s(A1,"example script"),A1.forEach(n),Ag=s(di," and "),ha=r(di,"A",{href:!0,rel:!0});var O1=i(ha);Og=s(O1,"notebook"),O1.forEach(n),Ng=s(di,"."),di.forEach(n),Xh.forEach(n),rh=c(t),v(ua.$$.fragment,t),ih=c(t),Xn=r(t,"UL",{});var Qh=i(Xn);ma=r(Qh,"LI",{});var eu=i(ma);Lg=s(eu,"A notebook on how to "),fa=r(eu,"A",{href:!0,rel:!0});var N1=i(fa);Ig=s(N1,"finetune T5 for question answering with TensorFlow 2"),N1.forEach(n),Dg=s(eu,". \u{1F30E}"),eu.forEach(n),Sg=c(Qh),_a=r(Qh,"LI",{});var tu=i(_a);Gg=s(tu,"A notebook on how to "),ga=r(tu,"A",{href:!0,rel:!0});var L1=i(ga);Ug=s(L1,"finetune T5 for question answering on a TPU"),L1.forEach(n),Bg=s(tu,"."),tu.forEach(n),Qh.forEach(n),lh=c(t),Ta=r(t,"P",{});var y5=i(Ta);Wg=s(y5,"\u{1F680} "),Fd=r(y5,"STRONG",{});var I1=i(Fd);Rg=s(I1,"Deploy"),I1.forEach(n),y5.forEach(n),dh=c(t),Bi=r(t,"UL",{});var D1=i(Bi);ba=r(D1,"LI",{});var nu=i(ba);Hg=s(nu,"A blog post on how to deploy "),ka=r(nu,"A",{href:!0,rel:!0});var S1=i(ka);Kg=s(S1,"T5 11B for inference for less than $500"),S1.forEach(n),Vg=s(nu,"."),nu.forEach(n),D1.forEach(n),ch=c(t),pn=r(t,"H2",{class:!0});var ou=i(pn);Qn=r(ou,"A",{id:!0,class:!0,href:!0});var G1=i(Qn);Md=r(G1,"SPAN",{});var U1=i(Md);v(va.$$.fragment,U1),U1.forEach(n),G1.forEach(n),Yg=c(ou),Cd=r(ou,"SPAN",{});var B1=i(Cd);Zg=s(B1,"T5Config"),B1.forEach(n),ou.forEach(n),ph=c(t),Gt=r(t,"DIV",{class:!0});var Tl=i(Gt);v(ya.$$.fragment,Tl),Jg=c(Tl),Ut=r(Tl,"P",{});var Xo=i(Ut);Xg=s(Xo,"This is the configuration class to store the configuration of a "),Wi=r(Xo,"A",{href:!0});var W1=i(Wi);Qg=s(W1,"T5Model"),W1.forEach(n),eT=s(Xo," or a "),Ri=r(Xo,"A",{href:!0});var R1=i(Ri);tT=s(R1,"TFT5Model"),R1.forEach(n),nT=s(Xo,`. It is used to
instantiate a T5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the T5
`),wa=r(Xo,"A",{href:!0,rel:!0});var H1=i(wa);oT=s(H1,"t5-small"),H1.forEach(n),sT=s(Xo," architecture."),Xo.forEach(n),aT=c(Tl),hn=r(Tl,"P",{});var bl=i(hn);rT=s(bl,"Configuration objects inherit from "),Hi=r(bl,"A",{href:!0});var K1=i(Hi);iT=s(K1,"PretrainedConfig"),K1.forEach(n),lT=s(bl,` and can be used to control the model outputs. Read the
documentation from `),Ki=r(bl,"A",{href:!0});var V1=i(Ki);dT=s(V1,"PretrainedConfig"),V1.forEach(n),cT=s(bl," for more information."),bl.forEach(n),Tl.forEach(n),hh=c(t),un=r(t,"H2",{class:!0});var su=i(un);eo=r(su,"A",{id:!0,class:!0,href:!0});var Y1=i(eo);Pd=r(Y1,"SPAN",{});var Z1=i(Pd);v($a.$$.fragment,Z1),Z1.forEach(n),Y1.forEach(n),pT=c(su),Ad=r(su,"SPAN",{});var J1=i(Ad);hT=s(J1,"T5Tokenizer"),J1.forEach(n),su.forEach(n),uh=c(t),he=r(t,"DIV",{class:!0});var ut=i(he);v(xa.$$.fragment,ut),uT=c(ut),za=r(ut,"P",{});var au=i(za);mT=s(au,"Construct a T5 tokenizer. Based on "),Ea=r(au,"A",{href:!0,rel:!0});var X1=i(Ea);fT=s(X1,"SentencePiece"),X1.forEach(n),_T=s(au,"."),au.forEach(n),gT=c(ut),ja=r(ut,"P",{});var ru=i(ja);TT=s(ru,"This tokenizer inherits from "),Vi=r(ru,"A",{href:!0});var Q1=i(Vi);bT=s(Q1,"PreTrainedTokenizer"),Q1.forEach(n),kT=s(ru,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ru.forEach(n),vT=c(ut),Xt=r(ut,"DIV",{class:!0});var kl=i(Xt);v(qa.$$.fragment,kl),yT=c(kl),Od=r(kl,"P",{});var e2=i(Od);wT=s(e2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),e2.forEach(n),$T=c(kl),Fa=r(kl,"UL",{});var iu=i(Fa);Yi=r(iu,"LI",{});var w5=i(Yi);xT=s(w5,"single sequence: "),Nd=r(w5,"CODE",{});var t2=i(Nd);zT=s(t2,"X </s>"),t2.forEach(n),w5.forEach(n),ET=c(iu),Zi=r(iu,"LI",{});var $5=i(Zi);jT=s($5,"pair of sequences: "),Ld=r($5,"CODE",{});var n2=i(Ld);qT=s(n2,"A </s> B </s>"),n2.forEach(n),$5.forEach(n),iu.forEach(n),kl.forEach(n),FT=c(ut),to=r(ut,"DIV",{class:!0});var lu=i(to);v(Ma.$$.fragment,lu),MT=c(lu),Ca=r(lu,"P",{});var du=i(Ca);CT=s(du,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Id=r(du,"CODE",{});var o2=i(Id);PT=s(o2,"prepare_for_model"),o2.forEach(n),AT=s(du," method."),du.forEach(n),lu.forEach(n),OT=c(ut),no=r(ut,"DIV",{class:!0});var cu=i(no);v(Pa.$$.fragment,cu),NT=c(cu),Dd=r(cu,"P",{});var s2=i(Dd);LT=s(s2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),s2.forEach(n),cu.forEach(n),IT=c(ut),Ji=r(ut,"DIV",{class:!0});var a2=i(Ji);v(Aa.$$.fragment,a2),a2.forEach(n),ut.forEach(n),mh=c(t),mn=r(t,"H2",{class:!0});var pu=i(mn);oo=r(pu,"A",{id:!0,class:!0,href:!0});var r2=i(oo);Sd=r(r2,"SPAN",{});var i2=i(Sd);v(Oa.$$.fragment,i2),i2.forEach(n),r2.forEach(n),DT=c(pu),Gd=r(pu,"SPAN",{});var l2=i(Gd);ST=s(l2,"T5TokenizerFast"),l2.forEach(n),pu.forEach(n),fh=c(t),st=r(t,"DIV",{class:!0});var an=i(st);v(Na.$$.fragment,an),GT=c(an),fn=r(an,"P",{});var vl=i(fn);UT=s(vl,"Construct a \u201Cfast\u201D T5 tokenizer (backed by HuggingFace\u2019s "),Ud=r(vl,"EM",{});var d2=i(Ud);BT=s(d2,"tokenizers"),d2.forEach(n),WT=s(vl,` library). Based on
`),La=r(vl,"A",{href:!0,rel:!0});var c2=i(La);RT=s(c2,"Unigram"),c2.forEach(n),HT=s(vl,"."),vl.forEach(n),KT=c(an),Ia=r(an,"P",{});var hu=i(Ia);VT=s(hu,"This tokenizer inherits from "),Xi=r(hu,"A",{href:!0});var p2=i(Xi);YT=s(p2,"PreTrainedTokenizerFast"),p2.forEach(n),ZT=s(hu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),hu.forEach(n),JT=c(an),Qt=r(an,"DIV",{class:!0});var yl=i(Qt);v(Da.$$.fragment,yl),XT=c(yl),Bd=r(yl,"P",{});var h2=i(Bd);QT=s(h2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`),h2.forEach(n),eb=c(yl),Sa=r(yl,"UL",{});var uu=i(Sa);Qi=r(uu,"LI",{});var x5=i(Qi);tb=s(x5,"single sequence: "),Wd=r(x5,"CODE",{});var u2=i(Wd);nb=s(u2,"X </s>"),u2.forEach(n),x5.forEach(n),ob=c(uu),el=r(uu,"LI",{});var z5=i(el);sb=s(z5,"pair of sequences: "),Rd=r(z5,"CODE",{});var m2=i(Rd);ab=s(m2,"A </s> B </s>"),m2.forEach(n),z5.forEach(n),uu.forEach(n),yl.forEach(n),rb=c(an),so=r(an,"DIV",{class:!0});var mu=i(so);v(Ga.$$.fragment,mu),ib=c(mu),Hd=r(mu,"P",{});var f2=i(Hd);lb=s(f2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`),f2.forEach(n),mu.forEach(n),an.forEach(n),_h=c(t),_n=r(t,"H2",{class:!0});var fu=i(_n);ao=r(fu,"A",{id:!0,class:!0,href:!0});var _2=i(ao);Kd=r(_2,"SPAN",{});var g2=i(Kd);v(Ua.$$.fragment,g2),g2.forEach(n),_2.forEach(n),db=c(fu),Vd=r(fu,"SPAN",{});var T2=i(Vd);cb=s(T2,"T5Model"),T2.forEach(n),fu.forEach(n),gh=c(t),oe=r(t,"DIV",{class:!0});var De=i(oe);v(Ba.$$.fragment,De),pb=c(De),Yd=r(De,"P",{});var b2=i(Yd);hb=s(b2,"The bare T5 Model transformer outputting raw hidden-states without any specific head on top."),b2.forEach(n),ub=c(De),Wa=r(De,"P",{});var _u=i(Wa);mb=s(_u,"The T5 model was proposed in "),Ra=r(_u,"A",{href:!0,rel:!0});var k2=i(Ra);fb=s(k2,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),k2.forEach(n),_b=s(_u,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),_u.forEach(n),gb=c(De),Ha=r(De,"P",{});var gu=i(Ha);Tb=s(gu,"This model inherits from "),tl=r(gu,"A",{href:!0});var v2=i(tl);bb=s(v2,"PreTrainedModel"),v2.forEach(n),kb=s(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gu.forEach(n),vb=c(De),Ka=r(De,"P",{});var Tu=i(Ka);yb=s(Tu,"This model is also a PyTorch "),Va=r(Tu,"A",{href:!0,rel:!0});var y2=i(Va);wb=s(y2,"torch.nn.Module"),y2.forEach(n),$b=s(Tu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu.forEach(n),xb=c(De),qt=r(De,"DIV",{class:!0});var Qo=i(qt);v(Ya.$$.fragment,Qo),zb=c(Qo),gn=r(Qo,"P",{});var wl=i(gn);Eb=s(wl,"The "),nl=r(wl,"A",{href:!0});var w2=i(nl);jb=s(w2,"T5Model"),w2.forEach(n),qb=s(wl," forward method, overrides the "),Zd=r(wl,"CODE",{});var $2=i(Zd);Fb=s($2,"__call__"),$2.forEach(n),Mb=s(wl," special method."),wl.forEach(n),Cb=c(Qo),v(ro.$$.fragment,Qo),Pb=c(Qo),v(io.$$.fragment,Qo),Qo.forEach(n),Ab=c(De),Ft=r(De,"DIV",{class:!0});var es=i(Ft);v(Za.$$.fragment,es),Ob=c(es),Jd=r(es,"P",{});var x2=i(Jd);Nb=s(x2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),x2.forEach(n),Lb=c(es),Xd=r(es,"P",{});var z2=i(Xd);Ib=s(z2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),z2.forEach(n),Db=c(es),v(lo.$$.fragment,es),es.forEach(n),Sb=c(De),en=r(De,"DIV",{class:!0});var $l=i(en);v(Ja.$$.fragment,$l),Gb=c($l),Qd=r($l,"P",{});var E2=i(Qd);Ub=s(E2,"Moves the model to cpu from a model parallel state."),E2.forEach(n),Bb=c($l),v(co.$$.fragment,$l),$l.forEach(n),De.forEach(n),Th=c(t),Tn=r(t,"H2",{class:!0});var bu=i(Tn);po=r(bu,"A",{id:!0,class:!0,href:!0});var j2=i(po);ec=r(j2,"SPAN",{});var q2=i(ec);v(Xa.$$.fragment,q2),q2.forEach(n),j2.forEach(n),Wb=c(bu),tc=r(bu,"SPAN",{});var F2=i(tc);Rb=s(F2,"T5ForConditionalGeneration"),F2.forEach(n),bu.forEach(n),bh=c(t),se=r(t,"DIV",{class:!0});var Se=i(se);v(Qa.$$.fragment,Se),Hb=c(Se),er=r(Se,"P",{});var ku=i(er);Kb=s(ku,"T5 Model with a "),nc=r(ku,"CODE",{});var M2=i(nc);Vb=s(M2,"language modeling"),M2.forEach(n),Yb=s(ku," head on top."),ku.forEach(n),Zb=c(Se),tr=r(Se,"P",{});var vu=i(tr);Jb=s(vu,"The T5 model was proposed in "),nr=r(vu,"A",{href:!0,rel:!0});var C2=i(nr);Xb=s(C2,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),C2.forEach(n),Qb=s(vu,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),vu.forEach(n),ek=c(Se),or=r(Se,"P",{});var yu=i(or);tk=s(yu,"This model inherits from "),ol=r(yu,"A",{href:!0});var P2=i(ol);nk=s(P2,"PreTrainedModel"),P2.forEach(n),ok=s(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(n),sk=c(Se),sr=r(Se,"P",{});var wu=i(sr);ak=s(wu,"This model is also a PyTorch "),ar=r(wu,"A",{href:!0,rel:!0});var A2=i(ar);rk=s(A2,"torch.nn.Module"),A2.forEach(n),ik=s(wu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu.forEach(n),lk=c(Se),Mt=r(Se,"DIV",{class:!0});var ts=i(Mt);v(rr.$$.fragment,ts),dk=c(ts),bn=r(ts,"P",{});var xl=i(bn);ck=s(xl,"The "),sl=r(xl,"A",{href:!0});var O2=i(sl);pk=s(O2,"T5ForConditionalGeneration"),O2.forEach(n),hk=s(xl," forward method, overrides the "),oc=r(xl,"CODE",{});var N2=i(oc);uk=s(N2,"__call__"),N2.forEach(n),mk=s(xl," special method."),xl.forEach(n),fk=c(ts),v(ho.$$.fragment,ts),_k=c(ts),v(uo.$$.fragment,ts),ts.forEach(n),gk=c(Se),Ct=r(Se,"DIV",{class:!0});var ns=i(Ct);v(ir.$$.fragment,ns),Tk=c(ns),sc=r(ns,"P",{});var L2=i(sc);bk=s(L2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),L2.forEach(n),kk=c(ns),ac=r(ns,"P",{});var I2=i(ac);vk=s(I2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),I2.forEach(n),yk=c(ns),v(mo.$$.fragment,ns),ns.forEach(n),wk=c(Se),tn=r(Se,"DIV",{class:!0});var zl=i(tn);v(lr.$$.fragment,zl),$k=c(zl),rc=r(zl,"P",{});var D2=i(rc);xk=s(D2,"Moves the model to cpu from a model parallel state."),D2.forEach(n),zk=c(zl),v(fo.$$.fragment,zl),zl.forEach(n),Se.forEach(n),kh=c(t),kn=r(t,"H2",{class:!0});var $u=i(kn);_o=r($u,"A",{id:!0,class:!0,href:!0});var S2=i(_o);ic=r(S2,"SPAN",{});var G2=i(ic);v(dr.$$.fragment,G2),G2.forEach(n),S2.forEach(n),Ek=c($u),lc=r($u,"SPAN",{});var U2=i(lc);jk=s(U2,"T5EncoderModel"),U2.forEach(n),$u.forEach(n),vh=c(t),ae=r(t,"DIV",{class:!0});var Ge=i(ae);v(cr.$$.fragment,Ge),qk=c(Ge),dc=r(Ge,"P",{});var B2=i(dc);Fk=s(B2,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),B2.forEach(n),Mk=c(Ge),pr=r(Ge,"P",{});var xu=i(pr);Ck=s(xu,"The T5 model was proposed in "),hr=r(xu,"A",{href:!0,rel:!0});var W2=i(hr);Pk=s(W2,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),W2.forEach(n),Ak=s(xu,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),xu.forEach(n),Ok=c(Ge),ur=r(Ge,"P",{});var zu=i(ur);Nk=s(zu,"This model inherits from "),al=r(zu,"A",{href:!0});var R2=i(al);Lk=s(R2,"PreTrainedModel"),R2.forEach(n),Ik=s(zu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zu.forEach(n),Dk=c(Ge),mr=r(Ge,"P",{});var Eu=i(mr);Sk=s(Eu,"This model is also a PyTorch "),fr=r(Eu,"A",{href:!0,rel:!0});var H2=i(fr);Gk=s(H2,"torch.nn.Module"),H2.forEach(n),Uk=s(Eu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eu.forEach(n),Bk=c(Ge),Pt=r(Ge,"DIV",{class:!0});var os=i(Pt);v(_r.$$.fragment,os),Wk=c(os),vn=r(os,"P",{});var El=i(vn);Rk=s(El,"The "),rl=r(El,"A",{href:!0});var K2=i(rl);Hk=s(K2,"T5EncoderModel"),K2.forEach(n),Kk=s(El," forward method, overrides the "),cc=r(El,"CODE",{});var V2=i(cc);Vk=s(V2,"__call__"),V2.forEach(n),Yk=s(El," special method."),El.forEach(n),Zk=c(os),v(go.$$.fragment,os),Jk=c(os),v(To.$$.fragment,os),os.forEach(n),Xk=c(Ge),At=r(Ge,"DIV",{class:!0});var ss=i(At);v(gr.$$.fragment,ss),Qk=c(ss),pc=r(ss,"P",{});var Y2=i(pc);ev=s(Y2,"This is an experimental feature and is a subject to change at a moment\u2019s notice."),Y2.forEach(n),tv=c(ss),hc=r(ss,"P",{});var Z2=i(hc);nv=s(Z2,`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`),Z2.forEach(n),ov=c(ss),v(bo.$$.fragment,ss),ss.forEach(n),sv=c(Ge),nn=r(Ge,"DIV",{class:!0});var jl=i(nn);v(Tr.$$.fragment,jl),av=c(jl),uc=r(jl,"P",{});var J2=i(uc);rv=s(J2,"Moves the model to cpu from a model parallel state."),J2.forEach(n),iv=c(jl),v(ko.$$.fragment,jl),jl.forEach(n),Ge.forEach(n),yh=c(t),yn=r(t,"H2",{class:!0});var ju=i(yn);vo=r(ju,"A",{id:!0,class:!0,href:!0});var X2=i(vo);mc=r(X2,"SPAN",{});var Q2=i(mc);v(br.$$.fragment,Q2),Q2.forEach(n),X2.forEach(n),lv=c(ju),fc=r(ju,"SPAN",{});var e$=i(fc);dv=s(e$,"TFT5Model"),e$.forEach(n),ju.forEach(n),wh=c(t),ue=r(t,"DIV",{class:!0});var mt=i(ue);v(kr.$$.fragment,mt),cv=c(mt),_c=r(mt,"P",{});var t$=i(_c);pv=s(t$,"The bare T5 Model transformer outputting raw hidden-stateswithout any specific head on top."),t$.forEach(n),hv=c(mt),vr=r(mt,"P",{});var qu=i(vr);uv=s(qu,"The T5 model was proposed in "),yr=r(qu,"A",{href:!0,rel:!0});var n$=i(yr);mv=s(n$,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),n$.forEach(n),fv=s(qu,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),qu.forEach(n),_v=c(mt),wr=r(mt,"P",{});var Fu=i(wr);gv=s(Fu,"This model inherits from "),il=r(Fu,"A",{href:!0});var o$=i(il);Tv=s(o$,"TFPreTrainedModel"),o$.forEach(n),bv=s(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(n),kv=c(mt),$r=r(mt,"P",{});var Mu=i($r);vv=s(Mu,"This model is also a "),xr=r(Mu,"A",{href:!0,rel:!0});var s$=i(xr);yv=s(s$,"tf.keras.Model"),s$.forEach(n),wv=s(Mu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mu.forEach(n),$v=c(mt),v(yo.$$.fragment,mt),xv=c(mt),Ot=r(mt,"DIV",{class:!0});var as=i(Ot);v(zr.$$.fragment,as),zv=c(as),wn=r(as,"P",{});var ql=i(wn);Ev=s(ql,"The "),ll=r(ql,"A",{href:!0});var a$=i(ll);jv=s(a$,"TFT5Model"),a$.forEach(n),qv=s(ql," forward method, overrides the "),gc=r(ql,"CODE",{});var r$=i(gc);Fv=s(r$,"__call__"),r$.forEach(n),Mv=s(ql," special method."),ql.forEach(n),Cv=c(as),v(wo.$$.fragment,as),Pv=c(as),v($o.$$.fragment,as),as.forEach(n),mt.forEach(n),$h=c(t),$n=r(t,"H2",{class:!0});var Cu=i($n);xo=r(Cu,"A",{id:!0,class:!0,href:!0});var i$=i(xo);Tc=r(i$,"SPAN",{});var l$=i(Tc);v(Er.$$.fragment,l$),l$.forEach(n),i$.forEach(n),Av=c(Cu),bc=r(Cu,"SPAN",{});var d$=i(bc);Ov=s(d$,"TFT5ForConditionalGeneration"),d$.forEach(n),Cu.forEach(n),xh=c(t),me=r(t,"DIV",{class:!0});var ft=i(me);v(jr.$$.fragment,ft),Nv=c(ft),qr=r(ft,"P",{});var Pu=i(qr);Lv=s(Pu,"T5 Model with a "),kc=r(Pu,"CODE",{});var c$=i(kc);Iv=s(c$,"language modeling"),c$.forEach(n),Dv=s(Pu," head on top."),Pu.forEach(n),Sv=c(ft),Fr=r(ft,"P",{});var Au=i(Fr);Gv=s(Au,"The T5 model was proposed in "),Mr=r(Au,"A",{href:!0,rel:!0});var p$=i(Mr);Uv=s(p$,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),p$.forEach(n),Bv=s(Au,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Au.forEach(n),Wv=c(ft),Cr=r(ft,"P",{});var Ou=i(Cr);Rv=s(Ou,"This model inherits from "),dl=r(Ou,"A",{href:!0});var h$=i(dl);Hv=s(h$,"TFPreTrainedModel"),h$.forEach(n),Kv=s(Ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ou.forEach(n),Vv=c(ft),Pr=r(ft,"P",{});var Nu=i(Pr);Yv=s(Nu,"This model is also a "),Ar=r(Nu,"A",{href:!0,rel:!0});var u$=i(Ar);Zv=s(u$,"tf.keras.Model"),u$.forEach(n),Jv=s(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(n),Xv=c(ft),v(zo.$$.fragment,ft),Qv=c(ft),Nt=r(ft,"DIV",{class:!0});var rs=i(Nt);v(Or.$$.fragment,rs),ey=c(rs),xn=r(rs,"P",{});var Fl=i(xn);ty=s(Fl,"The "),cl=r(Fl,"A",{href:!0});var m$=i(cl);ny=s(m$,"TFT5ForConditionalGeneration"),m$.forEach(n),oy=s(Fl," forward method, overrides the "),vc=r(Fl,"CODE",{});var f$=i(vc);sy=s(f$,"__call__"),f$.forEach(n),ay=s(Fl," special method."),Fl.forEach(n),ry=c(rs),v(Eo.$$.fragment,rs),iy=c(rs),v(jo.$$.fragment,rs),rs.forEach(n),ft.forEach(n),zh=c(t),zn=r(t,"H2",{class:!0});var Lu=i(zn);qo=r(Lu,"A",{id:!0,class:!0,href:!0});var _$=i(qo);yc=r(_$,"SPAN",{});var g$=i(yc);v(Nr.$$.fragment,g$),g$.forEach(n),_$.forEach(n),ly=c(Lu),wc=r(Lu,"SPAN",{});var T$=i(wc);dy=s(T$,"TFT5EncoderModel"),T$.forEach(n),Lu.forEach(n),Eh=c(t),fe=r(t,"DIV",{class:!0});var _t=i(fe);v(Lr.$$.fragment,_t),cy=c(_t),$c=r(_t,"P",{});var b$=i($c);py=s(b$,"The bare T5 Model transformer outputting encoder\u2019s raw hidden-stateswithout any specific head on top."),b$.forEach(n),hy=c(_t),Ir=r(_t,"P",{});var Iu=i(Ir);uy=s(Iu,"The T5 model was proposed in "),Dr=r(Iu,"A",{href:!0,rel:!0});var k$=i(Dr);my=s(k$,`Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer`),k$.forEach(n),fy=s(Iu,` by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It\u2019s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`),Iu.forEach(n),_y=c(_t),Sr=r(_t,"P",{});var Du=i(Sr);gy=s(Du,"This model inherits from "),pl=r(Du,"A",{href:!0});var v$=i(pl);Ty=s(v$,"TFPreTrainedModel"),v$.forEach(n),by=s(Du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du.forEach(n),ky=c(_t),Gr=r(_t,"P",{});var Su=i(Gr);vy=s(Su,"This model is also a "),Ur=r(Su,"A",{href:!0,rel:!0});var y$=i(Ur);yy=s(y$,"tf.keras.Model"),y$.forEach(n),wy=s(Su,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su.forEach(n),$y=c(_t),v(Fo.$$.fragment,_t),xy=c(_t),Lt=r(_t,"DIV",{class:!0});var is=i(Lt);v(Br.$$.fragment,is),zy=c(is),En=r(is,"P",{});var Ml=i(En);Ey=s(Ml,"The "),hl=r(Ml,"A",{href:!0});var w$=i(hl);jy=s(w$,"TFT5EncoderModel"),w$.forEach(n),qy=s(Ml," forward method, overrides the "),xc=r(Ml,"CODE",{});var $$=i(xc);Fy=s($$,"__call__"),$$.forEach(n),My=s(Ml," special method."),Ml.forEach(n),Cy=c(is),v(Mo.$$.fragment,is),Py=c(is),v(Co.$$.fragment,is),is.forEach(n),_t.forEach(n),jh=c(t),jn=r(t,"H2",{class:!0});var Gu=i(jn);Po=r(Gu,"A",{id:!0,class:!0,href:!0});var x$=i(Po);zc=r(x$,"SPAN",{});var z$=i(zc);v(Wr.$$.fragment,z$),z$.forEach(n),x$.forEach(n),Ay=c(Gu),Ec=r(Gu,"SPAN",{});var E$=i(Ec);Oy=s(E$,"FlaxT5Model"),E$.forEach(n),Gu.forEach(n),qh=c(t),gt=r(t,"DIV",{class:!0});var ls=i(gt);v(Rr.$$.fragment,ls),Ny=c(ls),It=r(ls,"DIV",{class:!0});var ds=i(It);v(Hr.$$.fragment,ds),Ly=c(ds),qn=r(ds,"P",{});var Cl=i(qn);Iy=s(Cl,"The "),jc=r(Cl,"CODE",{});var j$=i(jc);Dy=s(j$,"FlaxT5PreTrainedModel"),j$.forEach(n),Sy=s(Cl," forward method, overrides the "),qc=r(Cl,"CODE",{});var q$=i(qc);Gy=s(q$,"__call__"),q$.forEach(n),Uy=s(Cl," special method."),Cl.forEach(n),By=c(ds),v(Ao.$$.fragment,ds),Wy=c(ds),v(Oo.$$.fragment,ds),ds.forEach(n),Ry=c(ls),No=r(ls,"DIV",{class:!0});var Uu=i(No);v(Kr.$$.fragment,Uu),Hy=c(Uu),v(Lo.$$.fragment,Uu),Uu.forEach(n),Ky=c(ls),Io=r(ls,"DIV",{class:!0});var Bu=i(Io);v(Vr.$$.fragment,Bu),Vy=c(Bu),v(Do.$$.fragment,Bu),Bu.forEach(n),ls.forEach(n),Fh=c(t),Fn=r(t,"H2",{class:!0});var Wu=i(Fn);So=r(Wu,"A",{id:!0,class:!0,href:!0});var F$=i(So);Fc=r(F$,"SPAN",{});var M$=i(Fc);v(Yr.$$.fragment,M$),M$.forEach(n),F$.forEach(n),Yy=c(Wu),Mc=r(Wu,"SPAN",{});var C$=i(Mc);Zy=s(C$,"FlaxT5ForConditionalGeneration"),C$.forEach(n),Wu.forEach(n),Mh=c(t),Tt=r(t,"DIV",{class:!0});var cs=i(Tt);v(Zr.$$.fragment,cs),Jy=c(cs),Dt=r(cs,"DIV",{class:!0});var ps=i(Dt);v(Jr.$$.fragment,ps),Xy=c(ps),Mn=r(ps,"P",{});var Pl=i(Mn);Qy=s(Pl,"The "),Cc=r(Pl,"CODE",{});var P$=i(Cc);e5=s(P$,"FlaxT5PreTrainedModel"),P$.forEach(n),t5=s(Pl," forward method, overrides the "),Pc=r(Pl,"CODE",{});var A$=i(Pc);n5=s(A$,"__call__"),A$.forEach(n),o5=s(Pl," special method."),Pl.forEach(n),s5=c(ps),v(Go.$$.fragment,ps),a5=c(ps),v(Uo.$$.fragment,ps),ps.forEach(n),r5=c(cs),Bo=r(cs,"DIV",{class:!0});var Ru=i(Bo);v(Xr.$$.fragment,Ru),i5=c(Ru),v(Wo.$$.fragment,Ru),Ru.forEach(n),l5=c(cs),Ro=r(cs,"DIV",{class:!0});var Hu=i(Ro);v(Qr.$$.fragment,Hu),d5=c(Hu),v(Ho.$$.fragment,Hu),Hu.forEach(n),cs.forEach(n),Ch=c(t),Cn=r(t,"H2",{class:!0});var Ku=i(Cn);Ko=r(Ku,"A",{id:!0,class:!0,href:!0});var O$=i(Ko);Ac=r(O$,"SPAN",{});var N$=i(Ac);v(ei.$$.fragment,N$),N$.forEach(n),O$.forEach(n),c5=c(Ku),Oc=r(Ku,"SPAN",{});var L$=i(Oc);p5=s(L$,"FlaxT5EncoderModel"),L$.forEach(n),Ku.forEach(n),Ph=c(t),Pn=r(t,"DIV",{class:!0});var Vu=i(Pn);v(ti.$$.fragment,Vu),h5=c(Vu),on=r(Vu,"DIV",{class:!0});var Al=i(on);v(ni.$$.fragment,Al),u5=c(Al),An=r(Al,"P",{});var Ol=i(An);m5=s(Ol,"The "),ul=r(Ol,"A",{href:!0});var I$=i(ul);f5=s(I$,"FlaxT5EncoderModel"),I$.forEach(n),_5=s(Ol," forward method, overrides the "),Nc=r(Ol,"CODE",{});var D$=i(Nc);g5=s(D$,"__call__"),D$.forEach(n),T5=s(Ol," special method."),Ol.forEach(n),b5=c(Al),v(Vo.$$.fragment,Al),Al.forEach(n),Vu.forEach(n),this.h()},h(){p(h,"name","hf:doc:metadata"),p(h,"content",JSON.stringify(y0)),p(_,"id","t5"),p(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_,"href","#t5"),p(g,"class","relative group"),p(re,"id","overview"),p(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(re,"href","#overview"),p(S,"class","relative group"),p(de,"href","https://arxiv.org/pdf/1910.10683.pdf"),p(de,"rel","nofollow"),p(te,"href","#training"),p(L,"href","#inference"),p(z,"href","#scripts"),p(Oe,"href","https://huggingface.co/t5-small"),p(Oe,"rel","nofollow"),p(Ne,"href","https://huggingface.co/t5-base"),p(Ne,"rel","nofollow"),p(Le,"href","https://huggingface.co/t5-large"),p(Le,"rel","nofollow"),p(hs,"href","https://huggingface.co/t5-3b"),p(hs,"rel","nofollow"),p(us,"href","https://huggingface.co/t5-11b"),p(us,"rel","nofollow"),p(ui,"href","t5v1.1"),p(mi,"href","mt5"),p(fi,"href","byt5"),p(ms,"href","https://huggingface.co/models?search=t5"),p(ms,"rel","nofollow"),p(fs,"href","https://huggingface.co/thomwolf"),p(fs,"rel","nofollow"),p(_s,"href","https://github.com/google-research/text-to-text-transfer-transformer"),p(_s,"rel","nofollow"),p(_i,"id","training"),p(Un,"id","training"),p(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Un,"href","#training"),p(rn,"class","relative group"),p(gi,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),p(bi,"href","/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer"),p(bs,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling"),p(bs,"rel","nofollow"),p(vs,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),p(vs,"rel","nofollow"),p($s,"href","https://discuss.huggingface.co/t/t5-finetuning-tips/684"),p($s,"rel","nofollow"),p(xs,"href","https://arxiv.org/pdf/1910.10683.pdf"),p(xs,"rel","nofollow"),p(xi,"id","inference"),p(Hn,"id","inference"),p(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Hn,"href","#inference"),p(ln,"class","relative group"),p(zi,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),p(Es,"href","https://huggingface.co/blog/how-to-generate"),p(Es,"rel","nofollow"),p(js,"href","https://huggingface.co/blog/encoder-decoder#encoder-decoder"),p(js,"rel","nofollow"),p(Ei,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),p(Fi,"id","scripts"),p(Kn,"id","performance"),p(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Kn,"href","#performance"),p(dn,"class","relative group"),p(Ps,"href","https://github.com/NVIDIA/apex#quick-start"),p(Ps,"rel","nofollow"),p(Vn,"id","resources"),p(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Vn,"href","#resources"),p(cn,"class","relative group"),p(Ls,"href","https://colab.research.google.com/github/patil-suraj/exploring-T5/blob/master/t5_fine_tuning.ipynb"),p(Ls,"rel","nofollow"),p(Ds,"href","https://colab.research.google.com/github/enzoampil/t5-intro/blob/master/t5_qa_training_pytorch_span_extraction.ipynb"),p(Ds,"rel","nofollow"),p(Us,"href","https://colab.research.google.com/drive/1obr78FY_cBmWY5ODViCmzdY6O1KB65Vc?usp=sharing"),p(Us,"rel","nofollow"),p(Rs,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/T5/Fine_tune_CodeT5_for_generating_docstrings_from_Ruby_code.ipynb"),p(Rs,"rel","nofollow"),p(Vs,"href","https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/T5/Fine_tuning_Dutch_T5_base_on_CNN_Daily_Mail_for_summarization_(on_TPU_using_HuggingFace_Accelerate).ipynb"),p(Vs,"rel","nofollow"),p(Zs,"href","https://colab.research.google.com/github/abhimishra91/transformers-tutorials/blob/master/transformers_summarization_wandb.ipynb#scrollTo=OKRpFvYhBauC"),p(Zs,"rel","nofollow"),p(Xs,"href","https://huggingface.co/blog/sagemaker-distributed-training-seq2seq"),p(Xs,"rel","nofollow"),p(Ai,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),p(Qs,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization"),p(Qs,"rel","nofollow"),p(ea,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization.ipynb"),p(ea,"rel","nofollow"),p(Oi,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),p(ta,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/summarization"),p(ta,"rel","nofollow"),p(na,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization-tf.ipynb"),p(na,"rel","nofollow"),p(Ni,"href","/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5ForConditionalGeneration"),p(oa,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/summarization"),p(oa,"rel","nofollow"),p(sa,"href","https://huggingface.co/course/chapter7/5?fw=pt#summarization"),p(sa,"rel","nofollow"),p(Di,"href","/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5ForConditionalGeneration"),p(ra,"href","https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#t5-like-span-masked-language-modeling"),p(ra,"rel","nofollow"),p(Si,"href","/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5ForConditionalGeneration"),p(ia,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/masked_language_modeling_flax.ipynb"),p(ia,"rel","nofollow"),p(Gi,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),p(da,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch/translation"),p(da,"rel","nofollow"),p(ca,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation.ipynb"),p(ca,"rel","nofollow"),p(Ui,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),p(pa,"href","https://github.com/huggingface/transformers/tree/main/examples/tensorflow/translation"),p(pa,"rel","nofollow"),p(ha,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/translation-tf.ipynb"),p(ha,"rel","nofollow"),p(fa,"href","https://colab.research.google.com/github/snapthat/TF-T5-text-to-text/blob/master/snapthatT5/notebooks/TF-T5-Datasets%20Training.ipynb"),p(fa,"rel","nofollow"),p(ga,"href","https://colab.research.google.com/github/patil-suraj/exploring-T5/blob/master/T5_on_TPU.ipynb#scrollTo=QLGiFCDqvuil"),p(ga,"rel","nofollow"),p(ka,"href","https://www.philschmid.de/deploy-t5-11b"),p(ka,"rel","nofollow"),p(Qn,"id","transformers.T5Config"),p(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Qn,"href","#transformers.T5Config"),p(pn,"class","relative group"),p(Wi,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),p(Ri,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),p(wa,"href","https://huggingface.co/t5-small"),p(wa,"rel","nofollow"),p(Hi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(Ki,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),p(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(eo,"id","transformers.T5Tokenizer"),p(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(eo,"href","#transformers.T5Tokenizer"),p(un,"class","relative group"),p(Ea,"href","https://github.com/google/sentencepiece"),p(Ea,"rel","nofollow"),p(Vi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ji,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(oo,"id","transformers.T5TokenizerFast"),p(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(oo,"href","#transformers.T5TokenizerFast"),p(mn,"class","relative group"),p(La,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),p(La,"rel","nofollow"),p(Xi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),p(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ao,"id","transformers.T5Model"),p(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ao,"href","#transformers.T5Model"),p(_n,"class","relative group"),p(Ra,"href","https://arxiv.org/abs/1910.10683"),p(Ra,"rel","nofollow"),p(tl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(Va,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Va,"rel","nofollow"),p(nl,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5Model"),p(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(en,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(po,"id","transformers.T5ForConditionalGeneration"),p(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(po,"href","#transformers.T5ForConditionalGeneration"),p(Tn,"class","relative group"),p(nr,"href","https://arxiv.org/abs/1910.10683"),p(nr,"rel","nofollow"),p(ol,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(ar,"rel","nofollow"),p(sl,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),p(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(_o,"id","transformers.T5EncoderModel"),p(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(_o,"href","#transformers.T5EncoderModel"),p(kn,"class","relative group"),p(hr,"href","https://arxiv.org/abs/1910.10683"),p(hr,"rel","nofollow"),p(al,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),p(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(fr,"rel","nofollow"),p(rl,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5EncoderModel"),p(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(vo,"id","transformers.TFT5Model"),p(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(vo,"href","#transformers.TFT5Model"),p(yn,"class","relative group"),p(yr,"href","https://arxiv.org/abs/1910.10683"),p(yr,"rel","nofollow"),p(il,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),p(xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(xr,"rel","nofollow"),p(ll,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model"),p(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(xo,"id","transformers.TFT5ForConditionalGeneration"),p(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(xo,"href","#transformers.TFT5ForConditionalGeneration"),p($n,"class","relative group"),p(Mr,"href","https://arxiv.org/abs/1910.10683"),p(Mr,"rel","nofollow"),p(dl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),p(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Ar,"rel","nofollow"),p(cl,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration"),p(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(qo,"id","transformers.TFT5EncoderModel"),p(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(qo,"href","#transformers.TFT5EncoderModel"),p(zn,"class","relative group"),p(Dr,"href","https://arxiv.org/abs/1910.10683"),p(Dr,"rel","nofollow"),p(pl,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),p(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Ur,"rel","nofollow"),p(hl,"href","/docs/transformers/main/en/model_doc/t5#transformers.TFT5EncoderModel"),p(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Po,"id","transformers.FlaxT5Model"),p(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Po,"href","#transformers.FlaxT5Model"),p(jn,"class","relative group"),p(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(So,"id","transformers.FlaxT5ForConditionalGeneration"),p(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(So,"href","#transformers.FlaxT5ForConditionalGeneration"),p(Fn,"class","relative group"),p(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Ko,"id","transformers.FlaxT5EncoderModel"),p(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ko,"href","#transformers.FlaxT5EncoderModel"),p(Cn,"class","relative group"),p(ul,"href","/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5EncoderModel"),p(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(Pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,h),m(t,b,u),m(t,g,u),e(g,_),e(_,T),y(l,T,null),e(g,f),e(g,q),e(q,Ue),m(t,Fe,u),m(t,S,u),e(S,re),e(re,ie),y(j,ie,null),e(S,Be),e(S,K),e(K,We),m(t,Me,u),m(t,G,u),e(G,Re),e(G,de),e(de,J),e(G,He),m(t,Ce,u),m(t,U,u),e(U,Ke),m(t,Pe,u),m(t,B,u),e(B,we),e(we,Ve),m(t,ce,u),m(t,C,u),e(C,A),m(t,Ae,u),m(t,D,u),e(D,$e),e($e,X),e(X,Q),e(X,xe),e(xe,Ye),e(X,O),e(X,ze),e(ze,ee),e(X,Ze),e(D,Je),e(D,V),e(V,Ee),e(Ee,Xe),e(D,W),e(D,je),e(je,I),e(I,Qe),e(I,te),e(te,N),e(I,et),e(I,L),e(L,tt),e(I,nt),e(I,z),e(z,F),e(I,kt),m(t,pe,u),m(t,ot,u),e(ot,vt),m(t,M,u),m(t,Y,u),e(Y,at),e(at,rt),e(rt,Oe),e(Oe,yt),e(Y,R),e(Y,Z),e(Z,it),e(it,Ne),e(Ne,ne),e(Y,wt),e(Y,lt),e(lt,qe),e(qe,Le),e(Le,_e),e(Y,$t),e(Y,Nl),e(Nl,Ll),e(Ll,hs),e(hs,Yu),e(Y,Zu),e(Y,Il),e(Il,pi),e(pi,us),e(us,Ju),e(pi,Xu),m(t,cp,u),m(t,hi,u),e(hi,Qu),m(t,pp,u),m(t,Wt,u),e(Wt,Dl),e(Dl,In),e(In,Sl),e(Sl,em),e(In,tm),e(In,ui),e(ui,nm),e(In,om),e(Wt,sm),e(Wt,Gl),e(Gl,Dn),e(Dn,Ul),e(Ul,am),e(Dn,rm),e(Dn,mi),e(mi,im),e(Dn,lm),e(Wt,dm),e(Wt,Bl),e(Bl,Sn),e(Sn,Wl),e(Wl,cm),e(Sn,pm),e(Sn,fi),e(fi,hm),e(Sn,um),m(t,hp,u),m(t,Gn,u),e(Gn,mm),e(Gn,ms),e(ms,fm),e(Gn,_m),m(t,up,u),m(t,Rt,u),e(Rt,gm),e(Rt,fs),e(fs,Tm),e(Rt,bm),e(Rt,_s),e(_s,km),e(Rt,vm),m(t,mp,u),m(t,_i,u),m(t,fp,u),m(t,rn,u),e(rn,Un),e(Un,Rl),y(gs,Rl,null),e(rn,ym),e(rn,Hl),e(Hl,wm),m(t,_p,u),m(t,xt,u),e(xt,$m),e(xt,Kl),e(Kl,xm),e(xt,zm),e(xt,Vl),e(Vl,Em),e(xt,jm),e(xt,Yl),e(Yl,qm),e(xt,Fm),m(t,gp,u),m(t,Bn,u),e(Bn,Mm),e(Bn,gi),e(gi,Cm),e(Bn,Pm),m(t,Tp,u),m(t,Ti,u),e(Ti,Zl),e(Zl,Am),m(t,bp,u),m(t,ge,u),e(ge,Om),e(ge,Jl),e(Jl,Nm),e(ge,Lm),e(ge,Xl),e(Xl,Im),e(ge,Dm),e(ge,Ql),e(Ql,Sm),e(ge,Gm),e(ge,ed),e(ed,Um),e(ge,Bm),e(ge,td),e(td,Wm),e(ge,Rm),e(ge,bi),e(bi,Hm),e(ge,Km),m(t,kp,u),m(t,ki,u),e(ki,Vm),m(t,vp,u),y(Ts,t,u),m(t,yp,u),m(t,Wn,u),e(Wn,Ym),e(Wn,bs),e(bs,Zm),e(Wn,Jm),m(t,wp,u),m(t,vi,u),e(vi,nd),e(nd,Xm),m(t,$p,u),m(t,yi,u),e(yi,Qm),m(t,xp,u),y(ks,t,u),m(t,zp,u),m(t,le,u),e(le,ef),e(le,od),e(od,tf),e(le,nf),e(le,sd),e(sd,of),e(le,sf),e(le,ad),e(ad,af),e(le,rf),e(le,rd),e(rd,lf),e(le,df),e(le,id),e(id,cf),e(le,pf),e(le,ld),e(ld,hf),e(le,uf),e(le,dd),e(dd,mf),e(le,ff),m(t,Ep,u),m(t,Ht,u),e(Ht,_f),e(Ht,cd),e(cd,gf),e(Ht,Tf),e(Ht,pd),e(pd,bf),e(Ht,kf),m(t,jp,u),m(t,Te,u),e(Te,vf),e(Te,hd),e(hd,yf),e(Te,wf),e(Te,ud),e(ud,$f),e(Te,xf),e(Te,md),e(md,zf),e(Te,Ef),e(Te,fd),e(fd,jf),e(Te,qf),e(Te,vs),e(vs,Ff),e(Te,Mf),e(Te,_d),e(_d,Cf),e(Te,Pf),m(t,qp,u),y(ys,t,u),m(t,Fp,u),m(t,wi,u),e(wi,Af),m(t,Mp,u),m(t,$i,u),e($i,ws),e(ws,Of),e(ws,gd),e(gd,Nf),e(ws,Lf),m(t,Cp,u),m(t,Kt,u),e(Kt,If),e(Kt,$s),e($s,Df),e(Kt,Sf),e(Kt,xs),e(xs,Gf),e(Kt,Uf),m(t,Pp,u),m(t,Rn,u),e(Rn,Bf),e(Rn,Td),e(Td,Wf),e(Rn,Rf),m(t,Ap,u),m(t,xi,u),m(t,Op,u),m(t,ln,u),e(ln,Hn),e(Hn,bd),y(zs,bd,null),e(ln,Hf),e(ln,kd),e(kd,Kf),m(t,Np,u),m(t,zt,u),e(zt,Vf),e(zt,zi),e(zi,Yf),e(zt,Zf),e(zt,Es),e(Es,Jf),e(zt,Xf),e(zt,js),e(js,Qf),e(zt,e_),m(t,Lp,u),y(qs,t,u),m(t,Ip,u),m(t,dt,u),e(dt,t_),e(dt,vd),e(vd,n_),e(dt,o_),e(dt,yd),e(yd,s_),e(dt,a_),e(dt,Ei),e(Ei,r_),e(dt,i_),e(dt,wd),e(wd,l_),e(dt,d_),m(t,Dp,u),m(t,ji,u),e(ji,c_),m(t,Sp,u),y(Fs,t,u),m(t,Gp,u),m(t,qi,u),e(qi,p_),m(t,Up,u),y(Ms,t,u),m(t,Bp,u),m(t,Fi,u),m(t,Wp,u),m(t,dn,u),e(dn,Kn),e(Kn,$d),y(Cs,$d,null),e(dn,h_),e(dn,xd),e(xd,u_),m(t,Rp,u),m(t,Et,u),e(Et,m_),e(Et,Ps),e(Ps,f_),e(Et,__),e(Et,zd),e(zd,g_),e(Et,T_),e(Et,Ed),e(Ed,b_),e(Et,k_),m(t,Hp,u),m(t,cn,u),e(cn,Vn),e(Vn,jd),y(As,jd,null),e(cn,v_),e(cn,qd),e(qd,y_),m(t,Kp,u),m(t,Mi,u),e(Mi,w_),m(t,Vp,u),y(Os,t,u),m(t,Yp,u),m(t,Yn,u),e(Yn,Ns),e(Ns,$_),e(Ns,Ls),e(Ls,x_),e(Ns,z_),e(Yn,E_),e(Yn,Is),e(Is,j_),e(Is,Ds),e(Ds,q_),e(Is,F_),m(t,Zp,u),y(Ss,t,u),m(t,Jp,u),m(t,Ci,u),e(Ci,Gs),e(Gs,M_),e(Gs,Us),e(Us,C_),e(Gs,P_),m(t,Xp,u),y(Bs,t,u),m(t,Qp,u),m(t,Pi,u),e(Pi,Ws),e(Ws,A_),e(Ws,Rs),e(Rs,O_),e(Ws,N_),m(t,eh,u),y(Hs,t,u),m(t,th,u),m(t,be,u),e(be,Ks),e(Ks,L_),e(Ks,Vs),e(Vs,I_),e(Ks,D_),e(be,S_),e(be,Ys),e(Ys,G_),e(Ys,Zs),e(Zs,U_),e(Ys,B_),e(be,W_),e(be,Js),e(Js,R_),e(Js,Xs),e(Xs,H_),e(Js,K_),e(be,V_),e(be,Vt),e(Vt,Ai),e(Ai,Y_),e(Vt,Z_),e(Vt,Qs),e(Qs,J_),e(Vt,X_),e(Vt,ea),e(ea,Q_),e(Vt,eg),e(be,tg),e(be,Yt),e(Yt,Oi),e(Oi,ng),e(Yt,og),e(Yt,ta),e(ta,sg),e(Yt,ag),e(Yt,na),e(na,rg),e(Yt,ig),e(be,lg),e(be,Zn),e(Zn,Ni),e(Ni,dg),e(Zn,cg),e(Zn,oa),e(oa,pg),e(Zn,hg),e(be,ug),e(be,Li),e(Li,sa),e(sa,mg),e(Li,fg),m(t,nh,u),y(aa,t,u),m(t,oh,u),m(t,Ii,u),e(Ii,jt),e(jt,Di),e(Di,_g),e(jt,gg),e(jt,ra),e(ra,Tg),e(jt,bg),e(jt,Si),e(Si,kg),e(jt,vg),e(jt,ia),e(ia,yg),e(jt,wg),m(t,sh,u),y(la,t,u),m(t,ah,u),m(t,Jn,u),e(Jn,Zt),e(Zt,Gi),e(Gi,$g),e(Zt,xg),e(Zt,da),e(da,zg),e(Zt,Eg),e(Zt,ca),e(ca,jg),e(Zt,qg),e(Jn,Fg),e(Jn,Jt),e(Jt,Ui),e(Ui,Mg),e(Jt,Cg),e(Jt,pa),e(pa,Pg),e(Jt,Ag),e(Jt,ha),e(ha,Og),e(Jt,Ng),m(t,rh,u),y(ua,t,u),m(t,ih,u),m(t,Xn,u),e(Xn,ma),e(ma,Lg),e(ma,fa),e(fa,Ig),e(ma,Dg),e(Xn,Sg),e(Xn,_a),e(_a,Gg),e(_a,ga),e(ga,Ug),e(_a,Bg),m(t,lh,u),m(t,Ta,u),e(Ta,Wg),e(Ta,Fd),e(Fd,Rg),m(t,dh,u),m(t,Bi,u),e(Bi,ba),e(ba,Hg),e(ba,ka),e(ka,Kg),e(ba,Vg),m(t,ch,u),m(t,pn,u),e(pn,Qn),e(Qn,Md),y(va,Md,null),e(pn,Yg),e(pn,Cd),e(Cd,Zg),m(t,ph,u),m(t,Gt,u),y(ya,Gt,null),e(Gt,Jg),e(Gt,Ut),e(Ut,Xg),e(Ut,Wi),e(Wi,Qg),e(Ut,eT),e(Ut,Ri),e(Ri,tT),e(Ut,nT),e(Ut,wa),e(wa,oT),e(Ut,sT),e(Gt,aT),e(Gt,hn),e(hn,rT),e(hn,Hi),e(Hi,iT),e(hn,lT),e(hn,Ki),e(Ki,dT),e(hn,cT),m(t,hh,u),m(t,un,u),e(un,eo),e(eo,Pd),y($a,Pd,null),e(un,pT),e(un,Ad),e(Ad,hT),m(t,uh,u),m(t,he,u),y(xa,he,null),e(he,uT),e(he,za),e(za,mT),e(za,Ea),e(Ea,fT),e(za,_T),e(he,gT),e(he,ja),e(ja,TT),e(ja,Vi),e(Vi,bT),e(ja,kT),e(he,vT),e(he,Xt),y(qa,Xt,null),e(Xt,yT),e(Xt,Od),e(Od,wT),e(Xt,$T),e(Xt,Fa),e(Fa,Yi),e(Yi,xT),e(Yi,Nd),e(Nd,zT),e(Fa,ET),e(Fa,Zi),e(Zi,jT),e(Zi,Ld),e(Ld,qT),e(he,FT),e(he,to),y(Ma,to,null),e(to,MT),e(to,Ca),e(Ca,CT),e(Ca,Id),e(Id,PT),e(Ca,AT),e(he,OT),e(he,no),y(Pa,no,null),e(no,NT),e(no,Dd),e(Dd,LT),e(he,IT),e(he,Ji),y(Aa,Ji,null),m(t,mh,u),m(t,mn,u),e(mn,oo),e(oo,Sd),y(Oa,Sd,null),e(mn,DT),e(mn,Gd),e(Gd,ST),m(t,fh,u),m(t,st,u),y(Na,st,null),e(st,GT),e(st,fn),e(fn,UT),e(fn,Ud),e(Ud,BT),e(fn,WT),e(fn,La),e(La,RT),e(fn,HT),e(st,KT),e(st,Ia),e(Ia,VT),e(Ia,Xi),e(Xi,YT),e(Ia,ZT),e(st,JT),e(st,Qt),y(Da,Qt,null),e(Qt,XT),e(Qt,Bd),e(Bd,QT),e(Qt,eb),e(Qt,Sa),e(Sa,Qi),e(Qi,tb),e(Qi,Wd),e(Wd,nb),e(Sa,ob),e(Sa,el),e(el,sb),e(el,Rd),e(Rd,ab),e(st,rb),e(st,so),y(Ga,so,null),e(so,ib),e(so,Hd),e(Hd,lb),m(t,_h,u),m(t,_n,u),e(_n,ao),e(ao,Kd),y(Ua,Kd,null),e(_n,db),e(_n,Vd),e(Vd,cb),m(t,gh,u),m(t,oe,u),y(Ba,oe,null),e(oe,pb),e(oe,Yd),e(Yd,hb),e(oe,ub),e(oe,Wa),e(Wa,mb),e(Wa,Ra),e(Ra,fb),e(Wa,_b),e(oe,gb),e(oe,Ha),e(Ha,Tb),e(Ha,tl),e(tl,bb),e(Ha,kb),e(oe,vb),e(oe,Ka),e(Ka,yb),e(Ka,Va),e(Va,wb),e(Ka,$b),e(oe,xb),e(oe,qt),y(Ya,qt,null),e(qt,zb),e(qt,gn),e(gn,Eb),e(gn,nl),e(nl,jb),e(gn,qb),e(gn,Zd),e(Zd,Fb),e(gn,Mb),e(qt,Cb),y(ro,qt,null),e(qt,Pb),y(io,qt,null),e(oe,Ab),e(oe,Ft),y(Za,Ft,null),e(Ft,Ob),e(Ft,Jd),e(Jd,Nb),e(Ft,Lb),e(Ft,Xd),e(Xd,Ib),e(Ft,Db),y(lo,Ft,null),e(oe,Sb),e(oe,en),y(Ja,en,null),e(en,Gb),e(en,Qd),e(Qd,Ub),e(en,Bb),y(co,en,null),m(t,Th,u),m(t,Tn,u),e(Tn,po),e(po,ec),y(Xa,ec,null),e(Tn,Wb),e(Tn,tc),e(tc,Rb),m(t,bh,u),m(t,se,u),y(Qa,se,null),e(se,Hb),e(se,er),e(er,Kb),e(er,nc),e(nc,Vb),e(er,Yb),e(se,Zb),e(se,tr),e(tr,Jb),e(tr,nr),e(nr,Xb),e(tr,Qb),e(se,ek),e(se,or),e(or,tk),e(or,ol),e(ol,nk),e(or,ok),e(se,sk),e(se,sr),e(sr,ak),e(sr,ar),e(ar,rk),e(sr,ik),e(se,lk),e(se,Mt),y(rr,Mt,null),e(Mt,dk),e(Mt,bn),e(bn,ck),e(bn,sl),e(sl,pk),e(bn,hk),e(bn,oc),e(oc,uk),e(bn,mk),e(Mt,fk),y(ho,Mt,null),e(Mt,_k),y(uo,Mt,null),e(se,gk),e(se,Ct),y(ir,Ct,null),e(Ct,Tk),e(Ct,sc),e(sc,bk),e(Ct,kk),e(Ct,ac),e(ac,vk),e(Ct,yk),y(mo,Ct,null),e(se,wk),e(se,tn),y(lr,tn,null),e(tn,$k),e(tn,rc),e(rc,xk),e(tn,zk),y(fo,tn,null),m(t,kh,u),m(t,kn,u),e(kn,_o),e(_o,ic),y(dr,ic,null),e(kn,Ek),e(kn,lc),e(lc,jk),m(t,vh,u),m(t,ae,u),y(cr,ae,null),e(ae,qk),e(ae,dc),e(dc,Fk),e(ae,Mk),e(ae,pr),e(pr,Ck),e(pr,hr),e(hr,Pk),e(pr,Ak),e(ae,Ok),e(ae,ur),e(ur,Nk),e(ur,al),e(al,Lk),e(ur,Ik),e(ae,Dk),e(ae,mr),e(mr,Sk),e(mr,fr),e(fr,Gk),e(mr,Uk),e(ae,Bk),e(ae,Pt),y(_r,Pt,null),e(Pt,Wk),e(Pt,vn),e(vn,Rk),e(vn,rl),e(rl,Hk),e(vn,Kk),e(vn,cc),e(cc,Vk),e(vn,Yk),e(Pt,Zk),y(go,Pt,null),e(Pt,Jk),y(To,Pt,null),e(ae,Xk),e(ae,At),y(gr,At,null),e(At,Qk),e(At,pc),e(pc,ev),e(At,tv),e(At,hc),e(hc,nv),e(At,ov),y(bo,At,null),e(ae,sv),e(ae,nn),y(Tr,nn,null),e(nn,av),e(nn,uc),e(uc,rv),e(nn,iv),y(ko,nn,null),m(t,yh,u),m(t,yn,u),e(yn,vo),e(vo,mc),y(br,mc,null),e(yn,lv),e(yn,fc),e(fc,dv),m(t,wh,u),m(t,ue,u),y(kr,ue,null),e(ue,cv),e(ue,_c),e(_c,pv),e(ue,hv),e(ue,vr),e(vr,uv),e(vr,yr),e(yr,mv),e(vr,fv),e(ue,_v),e(ue,wr),e(wr,gv),e(wr,il),e(il,Tv),e(wr,bv),e(ue,kv),e(ue,$r),e($r,vv),e($r,xr),e(xr,yv),e($r,wv),e(ue,$v),y(yo,ue,null),e(ue,xv),e(ue,Ot),y(zr,Ot,null),e(Ot,zv),e(Ot,wn),e(wn,Ev),e(wn,ll),e(ll,jv),e(wn,qv),e(wn,gc),e(gc,Fv),e(wn,Mv),e(Ot,Cv),y(wo,Ot,null),e(Ot,Pv),y($o,Ot,null),m(t,$h,u),m(t,$n,u),e($n,xo),e(xo,Tc),y(Er,Tc,null),e($n,Av),e($n,bc),e(bc,Ov),m(t,xh,u),m(t,me,u),y(jr,me,null),e(me,Nv),e(me,qr),e(qr,Lv),e(qr,kc),e(kc,Iv),e(qr,Dv),e(me,Sv),e(me,Fr),e(Fr,Gv),e(Fr,Mr),e(Mr,Uv),e(Fr,Bv),e(me,Wv),e(me,Cr),e(Cr,Rv),e(Cr,dl),e(dl,Hv),e(Cr,Kv),e(me,Vv),e(me,Pr),e(Pr,Yv),e(Pr,Ar),e(Ar,Zv),e(Pr,Jv),e(me,Xv),y(zo,me,null),e(me,Qv),e(me,Nt),y(Or,Nt,null),e(Nt,ey),e(Nt,xn),e(xn,ty),e(xn,cl),e(cl,ny),e(xn,oy),e(xn,vc),e(vc,sy),e(xn,ay),e(Nt,ry),y(Eo,Nt,null),e(Nt,iy),y(jo,Nt,null),m(t,zh,u),m(t,zn,u),e(zn,qo),e(qo,yc),y(Nr,yc,null),e(zn,ly),e(zn,wc),e(wc,dy),m(t,Eh,u),m(t,fe,u),y(Lr,fe,null),e(fe,cy),e(fe,$c),e($c,py),e(fe,hy),e(fe,Ir),e(Ir,uy),e(Ir,Dr),e(Dr,my),e(Ir,fy),e(fe,_y),e(fe,Sr),e(Sr,gy),e(Sr,pl),e(pl,Ty),e(Sr,by),e(fe,ky),e(fe,Gr),e(Gr,vy),e(Gr,Ur),e(Ur,yy),e(Gr,wy),e(fe,$y),y(Fo,fe,null),e(fe,xy),e(fe,Lt),y(Br,Lt,null),e(Lt,zy),e(Lt,En),e(En,Ey),e(En,hl),e(hl,jy),e(En,qy),e(En,xc),e(xc,Fy),e(En,My),e(Lt,Cy),y(Mo,Lt,null),e(Lt,Py),y(Co,Lt,null),m(t,jh,u),m(t,jn,u),e(jn,Po),e(Po,zc),y(Wr,zc,null),e(jn,Ay),e(jn,Ec),e(Ec,Oy),m(t,qh,u),m(t,gt,u),y(Rr,gt,null),e(gt,Ny),e(gt,It),y(Hr,It,null),e(It,Ly),e(It,qn),e(qn,Iy),e(qn,jc),e(jc,Dy),e(qn,Sy),e(qn,qc),e(qc,Gy),e(qn,Uy),e(It,By),y(Ao,It,null),e(It,Wy),y(Oo,It,null),e(gt,Ry),e(gt,No),y(Kr,No,null),e(No,Hy),y(Lo,No,null),e(gt,Ky),e(gt,Io),y(Vr,Io,null),e(Io,Vy),y(Do,Io,null),m(t,Fh,u),m(t,Fn,u),e(Fn,So),e(So,Fc),y(Yr,Fc,null),e(Fn,Yy),e(Fn,Mc),e(Mc,Zy),m(t,Mh,u),m(t,Tt,u),y(Zr,Tt,null),e(Tt,Jy),e(Tt,Dt),y(Jr,Dt,null),e(Dt,Xy),e(Dt,Mn),e(Mn,Qy),e(Mn,Cc),e(Cc,e5),e(Mn,t5),e(Mn,Pc),e(Pc,n5),e(Mn,o5),e(Dt,s5),y(Go,Dt,null),e(Dt,a5),y(Uo,Dt,null),e(Tt,r5),e(Tt,Bo),y(Xr,Bo,null),e(Bo,i5),y(Wo,Bo,null),e(Tt,l5),e(Tt,Ro),y(Qr,Ro,null),e(Ro,d5),y(Ho,Ro,null),m(t,Ch,u),m(t,Cn,u),e(Cn,Ko),e(Ko,Ac),y(ei,Ac,null),e(Cn,c5),e(Cn,Oc),e(Oc,p5),m(t,Ph,u),m(t,Pn,u),y(ti,Pn,null),e(Pn,h5),e(Pn,on),y(ni,on,null),e(on,u5),e(on,An),e(An,m5),e(An,ul),e(ul,f5),e(An,_5),e(An,Nc),e(Nc,g5),e(An,T5),e(on,b5),y(Vo,on,null),Ah=!0},p(t,[u]){const oi={};u&2&&(oi.$$scope={dirty:u,ctx:t}),ro.$set(oi);const Lc={};u&2&&(Lc.$$scope={dirty:u,ctx:t}),io.$set(Lc);const Ic={};u&2&&(Ic.$$scope={dirty:u,ctx:t}),lo.$set(Ic);const Dc={};u&2&&(Dc.$$scope={dirty:u,ctx:t}),co.$set(Dc);const si={};u&2&&(si.$$scope={dirty:u,ctx:t}),ho.$set(si);const Sc={};u&2&&(Sc.$$scope={dirty:u,ctx:t}),uo.$set(Sc);const Gc={};u&2&&(Gc.$$scope={dirty:u,ctx:t}),mo.$set(Gc);const Uc={};u&2&&(Uc.$$scope={dirty:u,ctx:t}),fo.$set(Uc);const ai={};u&2&&(ai.$$scope={dirty:u,ctx:t}),go.$set(ai);const Bc={};u&2&&(Bc.$$scope={dirty:u,ctx:t}),To.$set(Bc);const Wc={};u&2&&(Wc.$$scope={dirty:u,ctx:t}),bo.$set(Wc);const Rc={};u&2&&(Rc.$$scope={dirty:u,ctx:t}),ko.$set(Rc);const Hc={};u&2&&(Hc.$$scope={dirty:u,ctx:t}),yo.$set(Hc);const Kc={};u&2&&(Kc.$$scope={dirty:u,ctx:t}),wo.$set(Kc);const On={};u&2&&(On.$$scope={dirty:u,ctx:t}),$o.$set(On);const Vc={};u&2&&(Vc.$$scope={dirty:u,ctx:t}),zo.$set(Vc);const Nn={};u&2&&(Nn.$$scope={dirty:u,ctx:t}),Eo.$set(Nn);const Yc={};u&2&&(Yc.$$scope={dirty:u,ctx:t}),jo.$set(Yc);const Zc={};u&2&&(Zc.$$scope={dirty:u,ctx:t}),Fo.$set(Zc);const Jc={};u&2&&(Jc.$$scope={dirty:u,ctx:t}),Mo.$set(Jc);const Xc={};u&2&&(Xc.$$scope={dirty:u,ctx:t}),Co.$set(Xc);const Qc={};u&2&&(Qc.$$scope={dirty:u,ctx:t}),Ao.$set(Qc);const Bt={};u&2&&(Bt.$$scope={dirty:u,ctx:t}),Oo.$set(Bt);const ep={};u&2&&(ep.$$scope={dirty:u,ctx:t}),Lo.$set(ep);const tp={};u&2&&(tp.$$scope={dirty:u,ctx:t}),Do.$set(tp);const np={};u&2&&(np.$$scope={dirty:u,ctx:t}),Go.$set(np);const op={};u&2&&(op.$$scope={dirty:u,ctx:t}),Uo.$set(op);const bt={};u&2&&(bt.$$scope={dirty:u,ctx:t}),Wo.$set(bt);const sp={};u&2&&(sp.$$scope={dirty:u,ctx:t}),Ho.$set(sp);const ap={};u&2&&(ap.$$scope={dirty:u,ctx:t}),Vo.$set(ap)},i(t){Ah||(w(l.$$.fragment,t),w(j.$$.fragment,t),w(gs.$$.fragment,t),w(Ts.$$.fragment,t),w(ks.$$.fragment,t),w(ys.$$.fragment,t),w(zs.$$.fragment,t),w(qs.$$.fragment,t),w(Fs.$$.fragment,t),w(Ms.$$.fragment,t),w(Cs.$$.fragment,t),w(As.$$.fragment,t),w(Os.$$.fragment,t),w(Ss.$$.fragment,t),w(Bs.$$.fragment,t),w(Hs.$$.fragment,t),w(aa.$$.fragment,t),w(la.$$.fragment,t),w(ua.$$.fragment,t),w(va.$$.fragment,t),w(ya.$$.fragment,t),w($a.$$.fragment,t),w(xa.$$.fragment,t),w(qa.$$.fragment,t),w(Ma.$$.fragment,t),w(Pa.$$.fragment,t),w(Aa.$$.fragment,t),w(Oa.$$.fragment,t),w(Na.$$.fragment,t),w(Da.$$.fragment,t),w(Ga.$$.fragment,t),w(Ua.$$.fragment,t),w(Ba.$$.fragment,t),w(Ya.$$.fragment,t),w(ro.$$.fragment,t),w(io.$$.fragment,t),w(Za.$$.fragment,t),w(lo.$$.fragment,t),w(Ja.$$.fragment,t),w(co.$$.fragment,t),w(Xa.$$.fragment,t),w(Qa.$$.fragment,t),w(rr.$$.fragment,t),w(ho.$$.fragment,t),w(uo.$$.fragment,t),w(ir.$$.fragment,t),w(mo.$$.fragment,t),w(lr.$$.fragment,t),w(fo.$$.fragment,t),w(dr.$$.fragment,t),w(cr.$$.fragment,t),w(_r.$$.fragment,t),w(go.$$.fragment,t),w(To.$$.fragment,t),w(gr.$$.fragment,t),w(bo.$$.fragment,t),w(Tr.$$.fragment,t),w(ko.$$.fragment,t),w(br.$$.fragment,t),w(kr.$$.fragment,t),w(yo.$$.fragment,t),w(zr.$$.fragment,t),w(wo.$$.fragment,t),w($o.$$.fragment,t),w(Er.$$.fragment,t),w(jr.$$.fragment,t),w(zo.$$.fragment,t),w(Or.$$.fragment,t),w(Eo.$$.fragment,t),w(jo.$$.fragment,t),w(Nr.$$.fragment,t),w(Lr.$$.fragment,t),w(Fo.$$.fragment,t),w(Br.$$.fragment,t),w(Mo.$$.fragment,t),w(Co.$$.fragment,t),w(Wr.$$.fragment,t),w(Rr.$$.fragment,t),w(Hr.$$.fragment,t),w(Ao.$$.fragment,t),w(Oo.$$.fragment,t),w(Kr.$$.fragment,t),w(Lo.$$.fragment,t),w(Vr.$$.fragment,t),w(Do.$$.fragment,t),w(Yr.$$.fragment,t),w(Zr.$$.fragment,t),w(Jr.$$.fragment,t),w(Go.$$.fragment,t),w(Uo.$$.fragment,t),w(Xr.$$.fragment,t),w(Wo.$$.fragment,t),w(Qr.$$.fragment,t),w(Ho.$$.fragment,t),w(ei.$$.fragment,t),w(ti.$$.fragment,t),w(ni.$$.fragment,t),w(Vo.$$.fragment,t),Ah=!0)},o(t){$(l.$$.fragment,t),$(j.$$.fragment,t),$(gs.$$.fragment,t),$(Ts.$$.fragment,t),$(ks.$$.fragment,t),$(ys.$$.fragment,t),$(zs.$$.fragment,t),$(qs.$$.fragment,t),$(Fs.$$.fragment,t),$(Ms.$$.fragment,t),$(Cs.$$.fragment,t),$(As.$$.fragment,t),$(Os.$$.fragment,t),$(Ss.$$.fragment,t),$(Bs.$$.fragment,t),$(Hs.$$.fragment,t),$(aa.$$.fragment,t),$(la.$$.fragment,t),$(ua.$$.fragment,t),$(va.$$.fragment,t),$(ya.$$.fragment,t),$($a.$$.fragment,t),$(xa.$$.fragment,t),$(qa.$$.fragment,t),$(Ma.$$.fragment,t),$(Pa.$$.fragment,t),$(Aa.$$.fragment,t),$(Oa.$$.fragment,t),$(Na.$$.fragment,t),$(Da.$$.fragment,t),$(Ga.$$.fragment,t),$(Ua.$$.fragment,t),$(Ba.$$.fragment,t),$(Ya.$$.fragment,t),$(ro.$$.fragment,t),$(io.$$.fragment,t),$(Za.$$.fragment,t),$(lo.$$.fragment,t),$(Ja.$$.fragment,t),$(co.$$.fragment,t),$(Xa.$$.fragment,t),$(Qa.$$.fragment,t),$(rr.$$.fragment,t),$(ho.$$.fragment,t),$(uo.$$.fragment,t),$(ir.$$.fragment,t),$(mo.$$.fragment,t),$(lr.$$.fragment,t),$(fo.$$.fragment,t),$(dr.$$.fragment,t),$(cr.$$.fragment,t),$(_r.$$.fragment,t),$(go.$$.fragment,t),$(To.$$.fragment,t),$(gr.$$.fragment,t),$(bo.$$.fragment,t),$(Tr.$$.fragment,t),$(ko.$$.fragment,t),$(br.$$.fragment,t),$(kr.$$.fragment,t),$(yo.$$.fragment,t),$(zr.$$.fragment,t),$(wo.$$.fragment,t),$($o.$$.fragment,t),$(Er.$$.fragment,t),$(jr.$$.fragment,t),$(zo.$$.fragment,t),$(Or.$$.fragment,t),$(Eo.$$.fragment,t),$(jo.$$.fragment,t),$(Nr.$$.fragment,t),$(Lr.$$.fragment,t),$(Fo.$$.fragment,t),$(Br.$$.fragment,t),$(Mo.$$.fragment,t),$(Co.$$.fragment,t),$(Wr.$$.fragment,t),$(Rr.$$.fragment,t),$(Hr.$$.fragment,t),$(Ao.$$.fragment,t),$(Oo.$$.fragment,t),$(Kr.$$.fragment,t),$(Lo.$$.fragment,t),$(Vr.$$.fragment,t),$(Do.$$.fragment,t),$(Yr.$$.fragment,t),$(Zr.$$.fragment,t),$(Jr.$$.fragment,t),$(Go.$$.fragment,t),$(Uo.$$.fragment,t),$(Xr.$$.fragment,t),$(Wo.$$.fragment,t),$(Qr.$$.fragment,t),$(Ho.$$.fragment,t),$(ei.$$.fragment,t),$(ti.$$.fragment,t),$(ni.$$.fragment,t),$(Vo.$$.fragment,t),Ah=!1},d(t){n(h),t&&n(b),t&&n(g),x(l),t&&n(Fe),t&&n(S),x(j),t&&n(Me),t&&n(G),t&&n(Ce),t&&n(U),t&&n(Pe),t&&n(B),t&&n(ce),t&&n(C),t&&n(Ae),t&&n(D),t&&n(pe),t&&n(ot),t&&n(M),t&&n(Y),t&&n(cp),t&&n(hi),t&&n(pp),t&&n(Wt),t&&n(hp),t&&n(Gn),t&&n(up),t&&n(Rt),t&&n(mp),t&&n(_i),t&&n(fp),t&&n(rn),x(gs),t&&n(_p),t&&n(xt),t&&n(gp),t&&n(Bn),t&&n(Tp),t&&n(Ti),t&&n(bp),t&&n(ge),t&&n(kp),t&&n(ki),t&&n(vp),x(Ts,t),t&&n(yp),t&&n(Wn),t&&n(wp),t&&n(vi),t&&n($p),t&&n(yi),t&&n(xp),x(ks,t),t&&n(zp),t&&n(le),t&&n(Ep),t&&n(Ht),t&&n(jp),t&&n(Te),t&&n(qp),x(ys,t),t&&n(Fp),t&&n(wi),t&&n(Mp),t&&n($i),t&&n(Cp),t&&n(Kt),t&&n(Pp),t&&n(Rn),t&&n(Ap),t&&n(xi),t&&n(Op),t&&n(ln),x(zs),t&&n(Np),t&&n(zt),t&&n(Lp),x(qs,t),t&&n(Ip),t&&n(dt),t&&n(Dp),t&&n(ji),t&&n(Sp),x(Fs,t),t&&n(Gp),t&&n(qi),t&&n(Up),x(Ms,t),t&&n(Bp),t&&n(Fi),t&&n(Wp),t&&n(dn),x(Cs),t&&n(Rp),t&&n(Et),t&&n(Hp),t&&n(cn),x(As),t&&n(Kp),t&&n(Mi),t&&n(Vp),x(Os,t),t&&n(Yp),t&&n(Yn),t&&n(Zp),x(Ss,t),t&&n(Jp),t&&n(Ci),t&&n(Xp),x(Bs,t),t&&n(Qp),t&&n(Pi),t&&n(eh),x(Hs,t),t&&n(th),t&&n(be),t&&n(nh),x(aa,t),t&&n(oh),t&&n(Ii),t&&n(sh),x(la,t),t&&n(ah),t&&n(Jn),t&&n(rh),x(ua,t),t&&n(ih),t&&n(Xn),t&&n(lh),t&&n(Ta),t&&n(dh),t&&n(Bi),t&&n(ch),t&&n(pn),x(va),t&&n(ph),t&&n(Gt),x(ya),t&&n(hh),t&&n(un),x($a),t&&n(uh),t&&n(he),x(xa),x(qa),x(Ma),x(Pa),x(Aa),t&&n(mh),t&&n(mn),x(Oa),t&&n(fh),t&&n(st),x(Na),x(Da),x(Ga),t&&n(_h),t&&n(_n),x(Ua),t&&n(gh),t&&n(oe),x(Ba),x(Ya),x(ro),x(io),x(Za),x(lo),x(Ja),x(co),t&&n(Th),t&&n(Tn),x(Xa),t&&n(bh),t&&n(se),x(Qa),x(rr),x(ho),x(uo),x(ir),x(mo),x(lr),x(fo),t&&n(kh),t&&n(kn),x(dr),t&&n(vh),t&&n(ae),x(cr),x(_r),x(go),x(To),x(gr),x(bo),x(Tr),x(ko),t&&n(yh),t&&n(yn),x(br),t&&n(wh),t&&n(ue),x(kr),x(yo),x(zr),x(wo),x($o),t&&n($h),t&&n($n),x(Er),t&&n(xh),t&&n(me),x(jr),x(zo),x(Or),x(Eo),x(jo),t&&n(zh),t&&n(zn),x(Nr),t&&n(Eh),t&&n(fe),x(Lr),x(Fo),x(Br),x(Mo),x(Co),t&&n(jh),t&&n(jn),x(Wr),t&&n(qh),t&&n(gt),x(Rr),x(Hr),x(Ao),x(Oo),x(Kr),x(Lo),x(Vr),x(Do),t&&n(Fh),t&&n(Fn),x(Yr),t&&n(Mh),t&&n(Tt),x(Zr),x(Jr),x(Go),x(Uo),x(Xr),x(Wo),x(Qr),x(Ho),t&&n(Ch),t&&n(Cn),x(ei),t&&n(Ph),t&&n(Pn),x(ti),x(ni),x(Vo)}}}const y0={local:"t5",sections:[{local:"overview",title:"Overview"},{local:"training",title:"Training"},{local:"inference",title:"Inference"},{local:"performance",title:"Performance"},{local:"resources",title:"Resources"},{local:"transformers.T5Config",title:"T5Config"},{local:"transformers.T5Tokenizer",title:"T5Tokenizer"},{local:"transformers.T5TokenizerFast",title:"T5TokenizerFast"},{local:"transformers.T5Model",title:"T5Model"},{local:"transformers.T5ForConditionalGeneration",title:"T5ForConditionalGeneration"},{local:"transformers.T5EncoderModel",title:"T5EncoderModel"},{local:"transformers.TFT5Model",title:"TFT5Model"},{local:"transformers.TFT5ForConditionalGeneration",title:"TFT5ForConditionalGeneration"},{local:"transformers.TFT5EncoderModel",title:"TFT5EncoderModel"},{local:"transformers.FlaxT5Model",title:"FlaxT5Model"},{local:"transformers.FlaxT5ForConditionalGeneration",title:"FlaxT5ForConditionalGeneration"},{local:"transformers.FlaxT5EncoderModel",title:"FlaxT5EncoderModel"}],title:"T5"};function w0(E){return W$(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class M0 extends S${constructor(h){super();G$(this,h,w0,v0,U$,{})}}export{M0 as default,y0 as metadata};
