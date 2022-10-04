import{S as Qd,i as Xd,s as el,e as r,k as u,w as k,t as a,M as tl,c as i,d as o,m as h,a as d,x as y,h as s,b as g,G as e,g as T,y as v,q as w,o as $,B as x,v as ol,L as me}from"../../chunks/vendor-hf-doc-builder.js";import{T as Tn}from"../../chunks/Tip-hf-doc-builder.js";import{D as G}from"../../chunks/Docstring-hf-doc-builder.js";import{C as X}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ve}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nl(z){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(c,"CODE",{});var L=d(m);p=s(L,"Module"),L.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function al(z){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, LongT5Model

tokenizer = T5Tokenizer.from_pretrained("google/long-t5-local-base")
model = LongT5Model.from_pretrained("google/long-t5-local-base")

# Let's try a very long encoder input.
input_ids = tokenizer(
    100 * "Studies have been shown that owning a dog is good for you", return_tensors="pt"
).input_ids  # Batch size 1

decoder_input_ids = tokenizer("Studies show that", return_tensors="pt").input_ids  # Batch size 1

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, LongT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongT5Model.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Let&#x27;s try a very long encoder input.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-number">100</span> * <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Example:"),c.forEach(o),m=h(n),y(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),v(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function sl(z){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(c,"CODE",{});var L=d(m);p=s(L,"Module"),L.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function rl(z){let l,b,m,p,_;return p=new X({props:{code:`from transformers import AutoTokenizer, LongT5ForConditionalGeneration

tokenizer = AutoTokenizer.from_pretrained("Stancld/longt5-tglobal-large-16384-pubmed-3k_steps")
model = LongT5ForConditionalGeneration.from_pretrained(
    "Stancld/longt5-tglobal-large-16384-pubmed-3k_steps"
)

# Let's try a very long input.
inputs = tokenizer(100 * "studies have shown that owning a dog is good for you ", return_tensors="pt")
input_ids = inputs.input_ids

outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Stancld/longt5-tglobal-large-16384-pubmed-3k_steps&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongT5ForConditionalGeneration.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Stancld/longt5-tglobal-large-16384-pubmed-3k_steps&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Let&#x27;s try a very long input.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-number">100</span> * <span class="hljs-string">&quot;studies have shown that owning a dog is good for you &quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs.input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
abstractthe aim of this article <span class="hljs-keyword">is</span> to provide an overview of the literature on the role of dog`}}),{c(){l=r("p"),b=a("Examples:"),m=u(),k(p.$$.fragment)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Examples:"),c.forEach(o),m=h(n),y(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),v(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function il(z){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(c,"CODE",{});var L=d(m);p=s(L,"Module"),L.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function dl(z){let l,b,m,p,_;return p=new X({props:{code:`from transformers import AutoTokenizer, LongT5ForConditionalGeneration

tokenizer = AutoTokenizer.from_pretrained("google/long-t5-local-base")
model = LongT5EncoderModel.from_pretrained("google/long-t5-local-base")
input_ids = tokenizer(
    100 * "Studies have been shown that owning a dog is good for you ", return_tensors="pt"
).input_ids  # Batch size 1
outputs = model(input_ids=input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-number">100</span> * <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you &quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Example:"),c.forEach(o),m=h(n),y(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),v(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function ll(z){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(c,"CODE",{});var L=d(m);p=s(L,"Module"),L.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function cl(z){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5Model

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5Model.from_pretrained("google/long-t5-local-base")

input_ids = tokenizer(
    "Studies have been shown that owning a dog is good for you", return_tensors="np"
).input_ids
decoder_input_ids = tokenizer("Studies show that", return_tensors="np").input_ids

# forward pass
outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5Model.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>
<span class="hljs-meta">... </span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Example:"),c.forEach(o),m=h(n),y(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),v(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function pl(z){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("google/long-t5-local-base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Example:"),c.forEach(o),m=h(n),y(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),v(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function ul(z){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("google/long-t5-local-base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Example:"),c.forEach(o),m=h(n),y(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),v(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function hl(z){let l,b,m,p,_;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=i(c,"CODE",{});var L=d(m);p=s(L,"Module"),L.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,b),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function ml(z){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("google/long-t5-local-base")

ARTICLE_TO_SUMMARIZE = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors="np")

# Generate Summary
summary_ids = model.generate(inputs["input_ids"]).sequences
print(tokenizer.decode(summary_ids[0], skip_special_tokens=True, clean_up_tokenization_spaces=False))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Example:"),c.forEach(o),m=h(n),y(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),v(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function gl(z){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("google/long-t5-local-base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Example:"),c.forEach(o),m=h(n),y(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),v(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function fl(z){let l,b,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration
import jax.numpy as jnp

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("google/long-t5-local-base")

text = "summarize: My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)

decoder_start_token_id = model.config.decoder_start_token_id
decoder_input_ids = jnp.ones((inputs.input_ids.shape[0], 1), dtype="i4") * decoder_start_token_id

outputs = model.decode(decoder_input_ids, encoder_outputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;summarize: My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),b=a("Example:"),m=u(),k(p.$$.fragment)},l(n){l=i(n,"P",{});var c=d(l);b=s(c,"Example:"),c.forEach(o),m=h(n),y(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,b),T(n,m,c),v(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function _l(z){let l,b,m,p,_,n,c,L,la,bn,ee,ge,_o,Ke,ca,To,pa,kn,fe,ua,Ze,ha,ma,yn,Yt,ga,vn,Rt,bo,fa,wn,Jt,_a,$n,C,O,Vt,Ta,ba,Kt,ka,ya,ko,va,wa,yo,$a,xa,vo,za,La,wo,qa,ja,Fa,Qe,Ma,Zt,Ea,Ca,Oa,Xe,Pa,$o,Ga,Sa,Aa,j,Na,xo,Ia,Da,zo,Ba,Wa,Lo,Ua,Ha,qo,Ya,Ra,jo,Ja,Va,Fo,Ka,Za,Qa,q,Mo,Xa,es,Eo,ts,os,Co,ns,as,Oo,ss,rs,Po,is,ds,Go,ls,cs,So,ps,us,hs,et,ms,tt,gs,fs,xn,ot,zn,Q,_s,nt,Ts,bs,at,ks,ys,Ln,te,_e,Ao,st,vs,No,ws,qn,K,rt,$s,Z,xs,Qt,zs,Ls,Xt,qs,js,it,Fs,Ms,Es,oe,Cs,eo,Os,Ps,to,Gs,Ss,jn,ne,Te,Io,dt,As,Do,Ns,Fn,F,lt,Is,Bo,Ds,Bs,ct,Ws,pt,Us,Hs,Ys,ut,Rs,oo,Js,Vs,Ks,ht,Zs,mt,Qs,Xs,er,D,gt,tr,ae,or,no,nr,ar,Wo,sr,rr,ir,be,dr,ke,Mn,se,ye,Uo,ft,lr,Ho,cr,En,M,_t,pr,Tt,ur,Yo,hr,mr,gr,bt,fr,kt,_r,Tr,br,yt,kr,ao,yr,vr,wr,vt,$r,wt,xr,zr,Lr,B,$t,qr,re,jr,so,Fr,Mr,Ro,Er,Cr,Or,ve,Pr,we,Cn,ie,$e,Jo,xt,Gr,Vo,Sr,On,E,zt,Ar,Ko,Nr,Ir,Lt,Dr,qt,Br,Wr,Ur,jt,Hr,ro,Yr,Rr,Jr,Ft,Vr,Mt,Kr,Zr,Qr,W,Et,Xr,de,ei,io,ti,oi,Zo,ni,ai,si,xe,ri,ze,Pn,le,Le,Qo,Ct,ii,Xo,di,Gn,A,Ot,li,U,Pt,ci,ce,pi,en,ui,hi,tn,mi,gi,fi,qe,_i,je,Ti,Fe,Gt,bi,Me,ki,Ee,St,yi,Ce,Sn,pe,Oe,on,At,vi,nn,wi,An,N,Nt,$i,H,It,xi,ue,zi,an,Li,qi,sn,ji,Fi,Mi,Pe,Ei,Ge,Ci,Se,Dt,Oi,Ae,Pi,Ne,Bt,Gi,Ie,Nn;return n=new Ve({}),Ke=new Ve({}),ot=new X({props:{code:`import evaluate
from datasets import load_dataset
from transformers import AutoTokenizer, LongT5ForConditionalGeneration

dataset = load_dataset("scientific_papers", "pubmed", split="validation")
model = (
    LongT5ForConditionalGeneration.from_pretrained("Stancld/longt5-tglobal-large-16384-pubmed-3k_steps")
    .to("cuda")
    .half()
)
tokenizer = AutoTokenizer.from_pretrained("Stancld/longt5-tglobal-large-16384-pubmed-3k_steps")


def generate_answers(batch):
    inputs_dict = tokenizer(
        batch["article"], max_length=16384, padding="max_length", truncation=True, return_tensors="pt"
    )
    input_ids = inputs_dict.input_ids.to("cuda")
    attention_mask = inputs_dict.attention_mask.to("cuda")
    output_ids = model.generate(input_ids, attention_mask=attention_mask, max_length=512, num_beams=2)
    batch["predicted_abstract"] = tokenizer.batch_decode(output_ids, skip_special_tokens=True)
    return batch


result = dataset.map(generate_answer, batched=True, batch_size=2)
rouge = evaluate.load("rouge")
rouge.compute(predictions=result["predicted_abstract"], references=result["abstract"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> evaluate
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;scientific_papers&quot;</span>, <span class="hljs-string">&quot;pubmed&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = (
<span class="hljs-meta">... </span>    LongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Stancld/longt5-tglobal-large-16384-pubmed-3k_steps&quot;</span>)
<span class="hljs-meta">... </span>    .to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">... </span>    .half()
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Stancld/longt5-tglobal-large-16384-pubmed-3k_steps&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">generate_answers</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    inputs_dict = tokenizer(
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;article&quot;</span>], max_length=<span class="hljs-number">16384</span>, padding=<span class="hljs-string">&quot;max_length&quot;</span>, truncation=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>    input_ids = inputs_dict.input_ids.to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">... </span>    attention_mask = inputs_dict.attention_mask.to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">... </span>    output_ids = model.generate(input_ids, attention_mask=attention_mask, max_length=<span class="hljs-number">512</span>, num_beams=<span class="hljs-number">2</span>)
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;predicted_abstract&quot;</span>] = tokenizer.batch_decode(output_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>result = dataset.<span class="hljs-built_in">map</span>(generate_answer, batched=<span class="hljs-literal">True</span>, batch_size=<span class="hljs-number">2</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>rouge = evaluate.load(<span class="hljs-string">&quot;rouge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>rouge.compute(predictions=result[<span class="hljs-string">&quot;predicted_abstract&quot;</span>], references=result[<span class="hljs-string">&quot;abstract&quot;</span>])`}}),st=new Ve({}),rt=new G({props:{name:"class transformers.LongT5Config",anchor:"transformers.LongT5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"local_radius",val:" = 127"},{name:"global_block_size",val:" = 16"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"encoder_attention_type",val:" = 'local'"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongT5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the LongT5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Model">LongT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.LongT5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.LongT5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.LongT5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Size of the intermediate feed forward layer in each <code>LongT5Block</code>.`,name:"d_ff"},{anchor:"transformers.LongT5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.LongT5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.LongT5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.LongT5Config.local_radius",description:`<strong>local_radius</strong> (<code>int</code>, <em>optional</em>, defaults to 127) &#x2014;
Number of tokens to the left/right for each token to locally self-attend in a local attention mechanism.`,name:"local_radius"},{anchor:"transformers.LongT5Config.global_block_size",description:`<strong>global_block_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Lenght of blocks an input sequence is divided into for a global token representation. Used only for
<code>encoder_attention_type = &quot;transient-global&quot;</code>.`,name:"global_block_size"},{anchor:"transformers.LongT5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.LongT5Config.relative_attention_max_distance",description:`<strong>relative_attention_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum distance of the longer sequences for the bucket separation.`,name:"relative_attention_max_distance"},{anchor:"transformers.LongT5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.LongT5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LongT5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.LongT5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>. LongT5v1.1 uses the
<code>&quot;gated-gelu&quot;</code> feed forward projection. Original LongT5 implementation uses <code>&quot;gated-gelu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.LongT5Config.encoder_attention_type",description:`<strong>encoder_attention_type</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;local&quot;</code>) &#x2014;
Type of encoder attention to be used. Should be one of <code>&quot;local&quot;</code> or <code>&quot;transient-global&quot;</code>, which are
supported by LongT5 implementation.`,name:"encoder_attention_type"},{anchor:"transformers.LongT5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/configuration_longt5.py#L33"}}),dt=new Ve({}),lt=new G({props:{name:"class transformers.LongT5Model",anchor:"transformers.LongT5Model",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_longt5.py#L1745"}}),gt=new G({props:{name:"forward",anchor:"transformers.LongT5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.LongT5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongT5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>LONGT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./longt5#training">LONGT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.LongT5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.LongT5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongT5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongT5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LongT5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LongT5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LongT5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongT5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LongT5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LongT5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongT5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongT5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_longt5.py#L1795",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
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
`}}),be=new Tn({props:{$$slots:{default:[nl]},$$scope:{ctx:z}}}),ke=new he({props:{anchor:"transformers.LongT5Model.forward.example",$$slots:{default:[al]},$$scope:{ctx:z}}}),ft=new Ve({}),_t=new G({props:{name:"class transformers.LongT5ForConditionalGeneration",anchor:"transformers.LongT5ForConditionalGeneration",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_longt5.py#L1898"}}),$t=new G({props:{name:"forward",anchor:"transformers.LongT5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>LONGT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./longt5#training">LONGT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_longt5.py#L1951",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
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
`}}),ve=new Tn({props:{$$slots:{default:[sl]},$$scope:{ctx:z}}}),we=new he({props:{anchor:"transformers.LongT5ForConditionalGeneration.forward.example",$$slots:{default:[rl]},$$scope:{ctx:z}}}),xt=new Ve({}),zt=new G({props:{name:"class transformers.LongT5EncoderModel",anchor:"transformers.LongT5EncoderModel",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_longt5.py#L2139"}}),Et=new G({props:{name:"forward",anchor:"transformers.LongT5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.LongT5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongT5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongT5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongT5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongT5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongT5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_longt5.py#L2174",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
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
`}}),xe=new Tn({props:{$$slots:{default:[il]},$$scope:{ctx:z}}}),ze=new he({props:{anchor:"transformers.LongT5EncoderModel.forward.example",$$slots:{default:[dl]},$$scope:{ctx:z}}}),Ct=new Ve({}),Ot=new G({props:{name:"class transformers.FlaxLongT5Model",anchor:"transformers.FlaxLongT5Model",parameters:[{name:"config",val:": LongT5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_flax_longt5.py#L2108"}}),Pt=new G({props:{name:"__call__",anchor:"transformers.FlaxLongT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxLongT5Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxLongT5Model.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>LONGT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./longt5#training">LONGT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxLongT5Model.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxLongT5Model.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxLongT5Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_flax_longt5.py#L1725",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
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
`}}),qe=new Tn({props:{$$slots:{default:[ll]},$$scope:{ctx:z}}}),je=new he({props:{anchor:"transformers.FlaxLongT5Model.__call__.example",$$slots:{default:[cl]},$$scope:{ctx:z}}}),Gt=new G({props:{name:"encode",anchor:"transformers.FlaxLongT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxLongT5Model.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxLongT5Model.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxLongT5Model.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxLongT5Model.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_flax_longt5.py#L1811",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.longt5.configuration_longt5.LongT5Config'&gt;</code>) and inputs.</p>
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
`}}),Me=new he({props:{anchor:"transformers.FlaxLongT5Model.encode.example",$$slots:{default:[pl]},$$scope:{ctx:z}}}),St=new G({props:{name:"decode",anchor:"transformers.FlaxLongT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxLongT5Model.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxLongT5Model.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxLongT5Model.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxLongT5Model.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxLongT5Model.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxLongT5Model.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxLongT5Model.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_flax_longt5.py#L1869",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.longt5.configuration_longt5.LongT5Config'&gt;</code>) and inputs.</p>
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
`}}),Ce=new he({props:{anchor:"transformers.FlaxLongT5Model.decode.example",$$slots:{default:[ul]},$$scope:{ctx:z}}}),At=new Ve({}),Nt=new G({props:{name:"class transformers.FlaxLongT5ForConditionalGeneration",anchor:"transformers.FlaxLongT5ForConditionalGeneration",parameters:[{name:"config",val:": LongT5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_flax_longt5.py#L2254"}}),It=new G({props:{name:"__call__",anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>LONGT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./longt5#training">LONGT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_flax_longt5.py#L1725",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Config"
>LongT5Config</a>) and inputs.</p>
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
`}}),Pe=new Tn({props:{$$slots:{default:[hl]},$$scope:{ctx:z}}}),Ge=new he({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.example",$$slots:{default:[ml]},$$scope:{ctx:z}}}),Dt=new G({props:{name:"encode",anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./longt5#training">LONGT5
Training</a>.`,name:"input_ids"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_flax_longt5.py#L1811",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.longt5.configuration_longt5.LongT5Config'&gt;</code>) and inputs.</p>
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
`}}),Ae=new he({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.example",$$slots:{default:[gl]},$$scope:{ctx:z}}}),Bt=new G({props:{name:"decode",anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For training, <code>decoder_input_ids</code> should be provided.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/longt5/modeling_flax_longt5.py#L2257",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.longt5.configuration_longt5.LongT5Config'&gt;</code>) and inputs.</p>
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
`}}),Ie=new he({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.example",$$slots:{default:[fl]},$$scope:{ctx:z}}}),{c(){l=r("meta"),b=u(),m=r("h1"),p=r("a"),_=r("span"),k(n.$$.fragment),c=u(),L=r("span"),la=a("LongT5"),bn=u(),ee=r("h2"),ge=r("a"),_o=r("span"),k(Ke.$$.fragment),ca=u(),To=r("span"),pa=a("Overview"),kn=u(),fe=r("p"),ua=a("The LongT5 model was proposed in "),Ze=r("a"),ha=a("LongT5: Efficient Text-To-Text Transformer for Long Sequences"),ma=a(`
by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an
encoder-decoder transformer pre-trained in a text-to-text denoising generative setting. LongT5 model is an extension of
T5 model, and it enables using one of the two different efficient attention mechanisms - (1) Local attention, or (2)
Transient-Global attention.`),yn=u(),Yt=r("p"),ga=a("The abstract from the paper is the following:"),vn=u(),Rt=r("p"),bo=r("em"),fa=a(`Recent work has shown that either (1) increasing the input length or (2) increasing model size can improve the
performance of Transformer-based neural models. In this paper, we present a new model, called LongT5, with which we
explore the effects of scaling both the input length and model size at the same time. Specifically, we integrated
attention ideas from long-input transformers (ETC), and adopted pre-training strategies from summarization pre-training
(PEGASUS) into the scalable T5 architecture. The result is a new attention mechanism we call {\\em Transient Global}
(TGlobal), which mimics ETC\u2019s local/global attention mechanism, but without requiring additional side-inputs. We are
able to achieve state-of-the-art results on several summarization tasks and outperform the original T5 models on
question answering tasks.`),wn=u(),Jt=r("p"),_a=a("Tips:"),$n=u(),C=r("ul"),O=r("li"),Vt=r("a"),Ta=a("LongT5ForConditionalGeneration"),ba=a(" is an extension of "),Kt=r("a"),ka=a("T5ForConditionalGeneration"),ya=a(` exchanging the traditional
encoder `),ko=r("em"),va=a("self-attention"),wa=a(" layer with efficient either "),yo=r("em"),$a=a("local"),xa=a(" attention or "),vo=r("em"),za=a("transient-global"),La=a(" ("),wo=r("em"),qa=a("tglobal"),ja=a(") attention."),Fa=u(),Qe=r("li"),Ma=a(`Unlike the T5 model, LongT5 does not use a task prefix. Furthermore, it uses a different pre-training objective
inspired by the pre-training of `),Zt=r("a"),Ea=a("PegasusForConditionalGeneration"),Ca=a("."),Oa=u(),Xe=r("li"),Pa=a("LongT5 model is designed to work efficiently and very well on long-range "),$o=r("em"),Ga=a("sequence-to-sequence"),Sa=a(` tasks where the
input sequence exceeds commonly used 512 tokens. It is capable of handling input sequences of a length up to 16,384 tokens.`),Aa=u(),j=r("li"),Na=a("For "),xo=r("em"),Ia=a("Local Attention"),Da=a(", the sparse sliding-window local attention operation allows a given token to attend only "),zo=r("code"),Ba=a("r"),Wa=a(`
tokens to the left and right of it (with `),Lo=r("code"),Ua=a("r=127"),Ha=a(" by default). "),qo=r("em"),Ya=a("Local Attention"),Ra=a(` does not introduce any new parameters
to the model. The complexity of the mechanism is linear in input sequence length `),jo=r("code"),Ja=a("l"),Va=a(": "),Fo=r("code"),Ka=a("O(l*r)"),Za=a("."),Qa=u(),q=r("li"),Mo=r("em"),Xa=a("Transient Global Attention"),es=a(" is an extension of the "),Eo=r("em"),ts=a("Local Attention"),os=a(`. It, furthermore, allows each input token to
interact with all other tokens in the layer. This is achieved via splitting an input sequence into blocks of a fixed
length `),Co=r("code"),ns=a("k"),as=a(" (with a default "),Oo=r("code"),ss=a("k=16"),rs=a(`). Then, a global token for such a block is obtained via summing and normalizing the embeddings of every token
in the block. Thanks to this, the attention allows each token to attend to both nearby tokens like in Local attention, and
also every global token like in the case of standard global attention (`),Po=r("em"),is=a("transient"),ds=a(` represents the fact the global tokens
are constructed dynamically within each attention operation).  As a consequence, `),Go=r("em"),ls=a("TGlobal"),cs=a(` attention introduces
a few new parameters \u2014 global relative position biases and a layer normalization for global token\u2019s embedding.
The complexity of this mechanism is `),So=r("code"),ps=a("O(l(r + l/k))"),us=a("."),hs=u(),et=r("li"),ms=a("An example showing how to evaluate a fine-tuned LongT5 model on the "),tt=r("a"),gs=a("pubmed dataset"),fs=a(" is below."),xn=u(),k(ot.$$.fragment),zn=u(),Q=r("p"),_s=a("This model was contributed by "),nt=r("a"),Ts=a("stancld"),bs=a(`.
The original code can be found `),at=r("a"),ks=a("here"),ys=a("."),Ln=u(),te=r("h2"),_e=r("a"),Ao=r("span"),k(st.$$.fragment),vs=u(),No=r("span"),ws=a("LongT5Config"),qn=u(),K=r("div"),k(rt.$$.fragment),$s=u(),Z=r("p"),xs=a("This is the configuration class to store the configuration of a "),Qt=r("a"),zs=a("LongT5Model"),Ls=a(" or a "),Xt=r("a"),qs=a("FlaxLongT5Model"),js=a(`. It is
used to instantiate a LongT5 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the LongT5
`),it=r("a"),Fs=a("google/long-t5-local-base"),Ms=a(" architecture."),Es=u(),oe=r("p"),Cs=a("Configuration objects inherit from "),eo=r("a"),Os=a("PretrainedConfig"),Ps=a(` and can be used to control the model outputs. Read the
documentation from `),to=r("a"),Gs=a("PretrainedConfig"),Ss=a(" for more information."),jn=u(),ne=r("h2"),Te=r("a"),Io=r("span"),k(dt.$$.fragment),As=u(),Do=r("span"),Ns=a("LongT5Model"),Fn=u(),F=r("div"),k(lt.$$.fragment),Is=u(),Bo=r("p"),Ds=a("The bare LONGT5 Model transformer outputting raw hidden-states without any specific head on top."),Bs=u(),ct=r("p"),Ws=a("The LongT5 model was proposed in "),pt=r("a"),Us=a(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Hs=a(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Ys=u(),ut=r("p"),Rs=a("This model inherits from "),oo=r("a"),Js=a("PreTrainedModel"),Vs=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks=u(),ht=r("p"),Zs=a("This model is also a PyTorch "),mt=r("a"),Qs=a("torch.nn.Module"),Xs=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),er=u(),D=r("div"),k(gt.$$.fragment),tr=u(),ae=r("p"),or=a("The "),no=r("a"),nr=a("LongT5Model"),ar=a(" forward method, overrides the "),Wo=r("code"),sr=a("__call__"),rr=a(" special method."),ir=u(),k(be.$$.fragment),dr=u(),k(ke.$$.fragment),Mn=u(),se=r("h2"),ye=r("a"),Uo=r("span"),k(ft.$$.fragment),lr=u(),Ho=r("span"),cr=a("LongT5ForConditionalGeneration"),En=u(),M=r("div"),k(_t.$$.fragment),pr=u(),Tt=r("p"),ur=a("LONGT5 Model with a "),Yo=r("code"),hr=a("language modeling"),mr=a(" head on top."),gr=u(),bt=r("p"),fr=a("The LongT5 model was proposed in "),kt=r("a"),_r=a(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Tr=a(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),br=u(),yt=r("p"),kr=a("This model inherits from "),ao=r("a"),yr=a("PreTrainedModel"),vr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr=u(),vt=r("p"),$r=a("This model is also a PyTorch "),wt=r("a"),xr=a("torch.nn.Module"),zr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lr=u(),B=r("div"),k($t.$$.fragment),qr=u(),re=r("p"),jr=a("The "),so=r("a"),Fr=a("LongT5ForConditionalGeneration"),Mr=a(" forward method, overrides the "),Ro=r("code"),Er=a("__call__"),Cr=a(" special method."),Or=u(),k(ve.$$.fragment),Pr=u(),k(we.$$.fragment),Cn=u(),ie=r("h2"),$e=r("a"),Jo=r("span"),k(xt.$$.fragment),Gr=u(),Vo=r("span"),Sr=a("LongT5EncoderModel"),On=u(),E=r("div"),k(zt.$$.fragment),Ar=u(),Ko=r("p"),Nr=a("The bare LONGT5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Ir=u(),Lt=r("p"),Dr=a("The LongT5 model was proposed in "),qt=r("a"),Br=a(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Wr=a(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Ur=u(),jt=r("p"),Hr=a("This model inherits from "),ro=r("a"),Yr=a("PreTrainedModel"),Rr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jr=u(),Ft=r("p"),Vr=a("This model is also a PyTorch "),Mt=r("a"),Kr=a("torch.nn.Module"),Zr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qr=u(),W=r("div"),k(Et.$$.fragment),Xr=u(),de=r("p"),ei=a("The "),io=r("a"),ti=a("LongT5EncoderModel"),oi=a(" forward method, overrides the "),Zo=r("code"),ni=a("__call__"),ai=a(" special method."),si=u(),k(xe.$$.fragment),ri=u(),k(ze.$$.fragment),Pn=u(),le=r("h2"),Le=r("a"),Qo=r("span"),k(Ct.$$.fragment),ii=u(),Xo=r("span"),di=a("FlaxLongT5Model"),Gn=u(),A=r("div"),k(Ot.$$.fragment),li=u(),U=r("div"),k(Pt.$$.fragment),ci=u(),ce=r("p"),pi=a("The "),en=r("code"),ui=a("FlaxLongT5PreTrainedModel"),hi=a(" forward method, overrides the "),tn=r("code"),mi=a("__call__"),gi=a(" special method."),fi=u(),k(qe.$$.fragment),_i=u(),k(je.$$.fragment),Ti=u(),Fe=r("div"),k(Gt.$$.fragment),bi=u(),k(Me.$$.fragment),ki=u(),Ee=r("div"),k(St.$$.fragment),yi=u(),k(Ce.$$.fragment),Sn=u(),pe=r("h2"),Oe=r("a"),on=r("span"),k(At.$$.fragment),vi=u(),nn=r("span"),wi=a("FlaxLongT5ForConditionalGeneration"),An=u(),N=r("div"),k(Nt.$$.fragment),$i=u(),H=r("div"),k(It.$$.fragment),xi=u(),ue=r("p"),zi=a("The "),an=r("code"),Li=a("FlaxLongT5PreTrainedModel"),qi=a(" forward method, overrides the "),sn=r("code"),ji=a("__call__"),Fi=a(" special method."),Mi=u(),k(Pe.$$.fragment),Ei=u(),k(Ge.$$.fragment),Ci=u(),Se=r("div"),k(Dt.$$.fragment),Oi=u(),k(Ae.$$.fragment),Pi=u(),Ne=r("div"),k(Bt.$$.fragment),Gi=u(),k(Ie.$$.fragment),this.h()},l(t){const f=tl('[data-svelte="svelte-1phssyn"]',document.head);l=i(f,"META",{name:!0,content:!0}),f.forEach(o),b=h(t),m=i(t,"H1",{class:!0});var Wt=d(m);p=i(Wt,"A",{id:!0,class:!0,href:!0});var rn=d(p);_=i(rn,"SPAN",{});var dn=d(_);y(n.$$.fragment,dn),dn.forEach(o),rn.forEach(o),c=h(Wt),L=i(Wt,"SPAN",{});var ln=d(L);la=s(ln,"LongT5"),ln.forEach(o),Wt.forEach(o),bn=h(t),ee=i(t,"H2",{class:!0});var Ut=d(ee);ge=i(Ut,"A",{id:!0,class:!0,href:!0});var cn=d(ge);_o=i(cn,"SPAN",{});var pn=d(_o);y(Ke.$$.fragment,pn),pn.forEach(o),cn.forEach(o),ca=h(Ut),To=i(Ut,"SPAN",{});var un=d(To);pa=s(un,"Overview"),un.forEach(o),Ut.forEach(o),kn=h(t),fe=i(t,"P",{});var Ht=d(fe);ua=s(Ht,"The LongT5 model was proposed in "),Ze=i(Ht,"A",{href:!0,rel:!0});var hn=d(Ze);ha=s(hn,"LongT5: Efficient Text-To-Text Transformer for Long Sequences"),hn.forEach(o),ma=s(Ht,`
by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an
encoder-decoder transformer pre-trained in a text-to-text denoising generative setting. LongT5 model is an extension of
T5 model, and it enables using one of the two different efficient attention mechanisms - (1) Local attention, or (2)
Transient-Global attention.`),Ht.forEach(o),yn=h(t),Yt=i(t,"P",{});var mn=d(Yt);ga=s(mn,"The abstract from the paper is the following:"),mn.forEach(o),vn=h(t),Rt=i(t,"P",{});var gn=d(Rt);bo=i(gn,"EM",{});var fn=d(bo);fa=s(fn,`Recent work has shown that either (1) increasing the input length or (2) increasing model size can improve the
performance of Transformer-based neural models. In this paper, we present a new model, called LongT5, with which we
explore the effects of scaling both the input length and model size at the same time. Specifically, we integrated
attention ideas from long-input transformers (ETC), and adopted pre-training strategies from summarization pre-training
(PEGASUS) into the scalable T5 architecture. The result is a new attention mechanism we call {\\em Transient Global}
(TGlobal), which mimics ETC\u2019s local/global attention mechanism, but without requiring additional side-inputs. We are
able to achieve state-of-the-art results on several summarization tasks and outperform the original T5 models on
question answering tasks.`),fn.forEach(o),gn.forEach(o),wn=h(t),Jt=i(t,"P",{});var _n=d(Jt);_a=s(_n,"Tips:"),_n.forEach(o),$n=h(t),C=i(t,"UL",{});var Y=d(C);O=i(Y,"LI",{});var I=d(O);Vt=i(I,"A",{href:!0});var Si=d(Vt);Ta=s(Si,"LongT5ForConditionalGeneration"),Si.forEach(o),ba=s(I," is an extension of "),Kt=i(I,"A",{href:!0});var Ai=d(Kt);ka=s(Ai,"T5ForConditionalGeneration"),Ai.forEach(o),ya=s(I,` exchanging the traditional
encoder `),ko=i(I,"EM",{});var Ni=d(ko);va=s(Ni,"self-attention"),Ni.forEach(o),wa=s(I," layer with efficient either "),yo=i(I,"EM",{});var Ii=d(yo);$a=s(Ii,"local"),Ii.forEach(o),xa=s(I," attention or "),vo=i(I,"EM",{});var Di=d(vo);za=s(Di,"transient-global"),Di.forEach(o),La=s(I," ("),wo=i(I,"EM",{});var Bi=d(wo);qa=s(Bi,"tglobal"),Bi.forEach(o),ja=s(I,") attention."),I.forEach(o),Fa=h(Y),Qe=i(Y,"LI",{});var In=d(Qe);Ma=s(In,`Unlike the T5 model, LongT5 does not use a task prefix. Furthermore, it uses a different pre-training objective
inspired by the pre-training of `),Zt=i(In,"A",{href:!0});var Wi=d(Zt);Ea=s(Wi,"PegasusForConditionalGeneration"),Wi.forEach(o),Ca=s(In,"."),In.forEach(o),Oa=h(Y),Xe=i(Y,"LI",{});var Dn=d(Xe);Pa=s(Dn,"LongT5 model is designed to work efficiently and very well on long-range "),$o=i(Dn,"EM",{});var Ui=d($o);Ga=s(Ui,"sequence-to-sequence"),Ui.forEach(o),Sa=s(Dn,` tasks where the
input sequence exceeds commonly used 512 tokens. It is capable of handling input sequences of a length up to 16,384 tokens.`),Dn.forEach(o),Aa=h(Y),j=i(Y,"LI",{});var S=d(j);Na=s(S,"For "),xo=i(S,"EM",{});var Hi=d(xo);Ia=s(Hi,"Local Attention"),Hi.forEach(o),Da=s(S,", the sparse sliding-window local attention operation allows a given token to attend only "),zo=i(S,"CODE",{});var Yi=d(zo);Ba=s(Yi,"r"),Yi.forEach(o),Wa=s(S,`
tokens to the left and right of it (with `),Lo=i(S,"CODE",{});var Ri=d(Lo);Ua=s(Ri,"r=127"),Ri.forEach(o),Ha=s(S," by default). "),qo=i(S,"EM",{});var Ji=d(qo);Ya=s(Ji,"Local Attention"),Ji.forEach(o),Ra=s(S,` does not introduce any new parameters
to the model. The complexity of the mechanism is linear in input sequence length `),jo=i(S,"CODE",{});var Vi=d(jo);Ja=s(Vi,"l"),Vi.forEach(o),Va=s(S,": "),Fo=i(S,"CODE",{});var Ki=d(Fo);Ka=s(Ki,"O(l*r)"),Ki.forEach(o),Za=s(S,"."),S.forEach(o),Qa=h(Y),q=i(Y,"LI",{});var P=d(q);Mo=i(P,"EM",{});var Zi=d(Mo);Xa=s(Zi,"Transient Global Attention"),Zi.forEach(o),es=s(P," is an extension of the "),Eo=i(P,"EM",{});var Qi=d(Eo);ts=s(Qi,"Local Attention"),Qi.forEach(o),os=s(P,`. It, furthermore, allows each input token to
interact with all other tokens in the layer. This is achieved via splitting an input sequence into blocks of a fixed
length `),Co=i(P,"CODE",{});var Xi=d(Co);ns=s(Xi,"k"),Xi.forEach(o),as=s(P," (with a default "),Oo=i(P,"CODE",{});var ed=d(Oo);ss=s(ed,"k=16"),ed.forEach(o),rs=s(P,`). Then, a global token for such a block is obtained via summing and normalizing the embeddings of every token
in the block. Thanks to this, the attention allows each token to attend to both nearby tokens like in Local attention, and
also every global token like in the case of standard global attention (`),Po=i(P,"EM",{});var td=d(Po);is=s(td,"transient"),td.forEach(o),ds=s(P,` represents the fact the global tokens
are constructed dynamically within each attention operation).  As a consequence, `),Go=i(P,"EM",{});var od=d(Go);ls=s(od,"TGlobal"),od.forEach(o),cs=s(P,` attention introduces
a few new parameters \u2014 global relative position biases and a layer normalization for global token\u2019s embedding.
The complexity of this mechanism is `),So=i(P,"CODE",{});var nd=d(So);ps=s(nd,"O(l(r + l/k))"),nd.forEach(o),us=s(P,"."),P.forEach(o),hs=h(Y),et=i(Y,"LI",{});var Bn=d(et);ms=s(Bn,"An example showing how to evaluate a fine-tuned LongT5 model on the "),tt=i(Bn,"A",{href:!0,rel:!0});var ad=d(tt);gs=s(ad,"pubmed dataset"),ad.forEach(o),fs=s(Bn," is below."),Bn.forEach(o),Y.forEach(o),xn=h(t),y(ot.$$.fragment,t),zn=h(t),Q=i(t,"P",{});var lo=d(Q);_s=s(lo,"This model was contributed by "),nt=i(lo,"A",{href:!0,rel:!0});var sd=d(nt);Ts=s(sd,"stancld"),sd.forEach(o),bs=s(lo,`.
The original code can be found `),at=i(lo,"A",{href:!0,rel:!0});var rd=d(at);ks=s(rd,"here"),rd.forEach(o),ys=s(lo,"."),lo.forEach(o),Ln=h(t),te=i(t,"H2",{class:!0});var Wn=d(te);_e=i(Wn,"A",{id:!0,class:!0,href:!0});var id=d(_e);Ao=i(id,"SPAN",{});var dd=d(Ao);y(st.$$.fragment,dd),dd.forEach(o),id.forEach(o),vs=h(Wn),No=i(Wn,"SPAN",{});var ld=d(No);ws=s(ld,"LongT5Config"),ld.forEach(o),Wn.forEach(o),qn=h(t),K=i(t,"DIV",{class:!0});var co=d(K);y(rt.$$.fragment,co),$s=h(co),Z=i(co,"P",{});var De=d(Z);xs=s(De,"This is the configuration class to store the configuration of a "),Qt=i(De,"A",{href:!0});var cd=d(Qt);zs=s(cd,"LongT5Model"),cd.forEach(o),Ls=s(De," or a "),Xt=i(De,"A",{href:!0});var pd=d(Xt);qs=s(pd,"FlaxLongT5Model"),pd.forEach(o),js=s(De,`. It is
used to instantiate a LongT5 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the LongT5
`),it=i(De,"A",{href:!0,rel:!0});var ud=d(it);Fs=s(ud,"google/long-t5-local-base"),ud.forEach(o),Ms=s(De," architecture."),De.forEach(o),Es=h(co),oe=i(co,"P",{});var po=d(oe);Cs=s(po,"Configuration objects inherit from "),eo=i(po,"A",{href:!0});var hd=d(eo);Os=s(hd,"PretrainedConfig"),hd.forEach(o),Ps=s(po,` and can be used to control the model outputs. Read the
documentation from `),to=i(po,"A",{href:!0});var md=d(to);Gs=s(md,"PretrainedConfig"),md.forEach(o),Ss=s(po," for more information."),po.forEach(o),co.forEach(o),jn=h(t),ne=i(t,"H2",{class:!0});var Un=d(ne);Te=i(Un,"A",{id:!0,class:!0,href:!0});var gd=d(Te);Io=i(gd,"SPAN",{});var fd=d(Io);y(dt.$$.fragment,fd),fd.forEach(o),gd.forEach(o),As=h(Un),Do=i(Un,"SPAN",{});var _d=d(Do);Ns=s(_d,"LongT5Model"),_d.forEach(o),Un.forEach(o),Fn=h(t),F=i(t,"DIV",{class:!0});var R=d(F);y(lt.$$.fragment,R),Is=h(R),Bo=i(R,"P",{});var Td=d(Bo);Ds=s(Td,"The bare LONGT5 Model transformer outputting raw hidden-states without any specific head on top."),Td.forEach(o),Bs=h(R),ct=i(R,"P",{});var Hn=d(ct);Ws=s(Hn,"The LongT5 model was proposed in "),pt=i(Hn,"A",{href:!0,rel:!0});var bd=d(pt);Us=s(bd,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),bd.forEach(o),Hs=s(Hn,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Hn.forEach(o),Ys=h(R),ut=i(R,"P",{});var Yn=d(ut);Rs=s(Yn,"This model inherits from "),oo=i(Yn,"A",{href:!0});var kd=d(oo);Js=s(kd,"PreTrainedModel"),kd.forEach(o),Vs=s(Yn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yn.forEach(o),Ks=h(R),ht=i(R,"P",{});var Rn=d(ht);Zs=s(Rn,"This model is also a PyTorch "),mt=i(Rn,"A",{href:!0,rel:!0});var yd=d(mt);Qs=s(yd,"torch.nn.Module"),yd.forEach(o),Xs=s(Rn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rn.forEach(o),er=h(R),D=i(R,"DIV",{class:!0});var Be=d(D);y(gt.$$.fragment,Be),tr=h(Be),ae=i(Be,"P",{});var uo=d(ae);or=s(uo,"The "),no=i(uo,"A",{href:!0});var vd=d(no);nr=s(vd,"LongT5Model"),vd.forEach(o),ar=s(uo," forward method, overrides the "),Wo=i(uo,"CODE",{});var wd=d(Wo);sr=s(wd,"__call__"),wd.forEach(o),rr=s(uo," special method."),uo.forEach(o),ir=h(Be),y(be.$$.fragment,Be),dr=h(Be),y(ke.$$.fragment,Be),Be.forEach(o),R.forEach(o),Mn=h(t),se=i(t,"H2",{class:!0});var Jn=d(se);ye=i(Jn,"A",{id:!0,class:!0,href:!0});var $d=d(ye);Uo=i($d,"SPAN",{});var xd=d(Uo);y(ft.$$.fragment,xd),xd.forEach(o),$d.forEach(o),lr=h(Jn),Ho=i(Jn,"SPAN",{});var zd=d(Ho);cr=s(zd,"LongT5ForConditionalGeneration"),zd.forEach(o),Jn.forEach(o),En=h(t),M=i(t,"DIV",{class:!0});var J=d(M);y(_t.$$.fragment,J),pr=h(J),Tt=i(J,"P",{});var Vn=d(Tt);ur=s(Vn,"LONGT5 Model with a "),Yo=i(Vn,"CODE",{});var Ld=d(Yo);hr=s(Ld,"language modeling"),Ld.forEach(o),mr=s(Vn," head on top."),Vn.forEach(o),gr=h(J),bt=i(J,"P",{});var Kn=d(bt);fr=s(Kn,"The LongT5 model was proposed in "),kt=i(Kn,"A",{href:!0,rel:!0});var qd=d(kt);_r=s(qd,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),qd.forEach(o),Tr=s(Kn,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Kn.forEach(o),br=h(J),yt=i(J,"P",{});var Zn=d(yt);kr=s(Zn,"This model inherits from "),ao=i(Zn,"A",{href:!0});var jd=d(ao);yr=s(jd,"PreTrainedModel"),jd.forEach(o),vr=s(Zn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zn.forEach(o),wr=h(J),vt=i(J,"P",{});var Qn=d(vt);$r=s(Qn,"This model is also a PyTorch "),wt=i(Qn,"A",{href:!0,rel:!0});var Fd=d(wt);xr=s(Fd,"torch.nn.Module"),Fd.forEach(o),zr=s(Qn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn.forEach(o),Lr=h(J),B=i(J,"DIV",{class:!0});var We=d(B);y($t.$$.fragment,We),qr=h(We),re=i(We,"P",{});var ho=d(re);jr=s(ho,"The "),so=i(ho,"A",{href:!0});var Md=d(so);Fr=s(Md,"LongT5ForConditionalGeneration"),Md.forEach(o),Mr=s(ho," forward method, overrides the "),Ro=i(ho,"CODE",{});var Ed=d(Ro);Er=s(Ed,"__call__"),Ed.forEach(o),Cr=s(ho," special method."),ho.forEach(o),Or=h(We),y(ve.$$.fragment,We),Pr=h(We),y(we.$$.fragment,We),We.forEach(o),J.forEach(o),Cn=h(t),ie=i(t,"H2",{class:!0});var Xn=d(ie);$e=i(Xn,"A",{id:!0,class:!0,href:!0});var Cd=d($e);Jo=i(Cd,"SPAN",{});var Od=d(Jo);y(xt.$$.fragment,Od),Od.forEach(o),Cd.forEach(o),Gr=h(Xn),Vo=i(Xn,"SPAN",{});var Pd=d(Vo);Sr=s(Pd,"LongT5EncoderModel"),Pd.forEach(o),Xn.forEach(o),On=h(t),E=i(t,"DIV",{class:!0});var V=d(E);y(zt.$$.fragment,V),Ar=h(V),Ko=i(V,"P",{});var Gd=d(Ko);Nr=s(Gd,"The bare LONGT5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Gd.forEach(o),Ir=h(V),Lt=i(V,"P",{});var ea=d(Lt);Dr=s(ea,"The LongT5 model was proposed in "),qt=i(ea,"A",{href:!0,rel:!0});var Sd=d(qt);Br=s(Sd,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Sd.forEach(o),Wr=s(ea,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),ea.forEach(o),Ur=h(V),jt=i(V,"P",{});var ta=d(jt);Hr=s(ta,"This model inherits from "),ro=i(ta,"A",{href:!0});var Ad=d(ro);Yr=s(Ad,"PreTrainedModel"),Ad.forEach(o),Rr=s(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(o),Jr=h(V),Ft=i(V,"P",{});var oa=d(Ft);Vr=s(oa,"This model is also a PyTorch "),Mt=i(oa,"A",{href:!0,rel:!0});var Nd=d(Mt);Kr=s(Nd,"torch.nn.Module"),Nd.forEach(o),Zr=s(oa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oa.forEach(o),Qr=h(V),W=i(V,"DIV",{class:!0});var Ue=d(W);y(Et.$$.fragment,Ue),Xr=h(Ue),de=i(Ue,"P",{});var mo=d(de);ei=s(mo,"The "),io=i(mo,"A",{href:!0});var Id=d(io);ti=s(Id,"LongT5EncoderModel"),Id.forEach(o),oi=s(mo," forward method, overrides the "),Zo=i(mo,"CODE",{});var Dd=d(Zo);ni=s(Dd,"__call__"),Dd.forEach(o),ai=s(mo," special method."),mo.forEach(o),si=h(Ue),y(xe.$$.fragment,Ue),ri=h(Ue),y(ze.$$.fragment,Ue),Ue.forEach(o),V.forEach(o),Pn=h(t),le=i(t,"H2",{class:!0});var na=d(le);Le=i(na,"A",{id:!0,class:!0,href:!0});var Bd=d(Le);Qo=i(Bd,"SPAN",{});var Wd=d(Qo);y(Ct.$$.fragment,Wd),Wd.forEach(o),Bd.forEach(o),ii=h(na),Xo=i(na,"SPAN",{});var Ud=d(Xo);di=s(Ud,"FlaxLongT5Model"),Ud.forEach(o),na.forEach(o),Gn=h(t),A=i(t,"DIV",{class:!0});var He=d(A);y(Ot.$$.fragment,He),li=h(He),U=i(He,"DIV",{class:!0});var Ye=d(U);y(Pt.$$.fragment,Ye),ci=h(Ye),ce=i(Ye,"P",{});var go=d(ce);pi=s(go,"The "),en=i(go,"CODE",{});var Hd=d(en);ui=s(Hd,"FlaxLongT5PreTrainedModel"),Hd.forEach(o),hi=s(go," forward method, overrides the "),tn=i(go,"CODE",{});var Yd=d(tn);mi=s(Yd,"__call__"),Yd.forEach(o),gi=s(go," special method."),go.forEach(o),fi=h(Ye),y(qe.$$.fragment,Ye),_i=h(Ye),y(je.$$.fragment,Ye),Ye.forEach(o),Ti=h(He),Fe=i(He,"DIV",{class:!0});var aa=d(Fe);y(Gt.$$.fragment,aa),bi=h(aa),y(Me.$$.fragment,aa),aa.forEach(o),ki=h(He),Ee=i(He,"DIV",{class:!0});var sa=d(Ee);y(St.$$.fragment,sa),yi=h(sa),y(Ce.$$.fragment,sa),sa.forEach(o),He.forEach(o),Sn=h(t),pe=i(t,"H2",{class:!0});var ra=d(pe);Oe=i(ra,"A",{id:!0,class:!0,href:!0});var Rd=d(Oe);on=i(Rd,"SPAN",{});var Jd=d(on);y(At.$$.fragment,Jd),Jd.forEach(o),Rd.forEach(o),vi=h(ra),nn=i(ra,"SPAN",{});var Vd=d(nn);wi=s(Vd,"FlaxLongT5ForConditionalGeneration"),Vd.forEach(o),ra.forEach(o),An=h(t),N=i(t,"DIV",{class:!0});var Re=d(N);y(Nt.$$.fragment,Re),$i=h(Re),H=i(Re,"DIV",{class:!0});var Je=d(H);y(It.$$.fragment,Je),xi=h(Je),ue=i(Je,"P",{});var fo=d(ue);zi=s(fo,"The "),an=i(fo,"CODE",{});var Kd=d(an);Li=s(Kd,"FlaxLongT5PreTrainedModel"),Kd.forEach(o),qi=s(fo," forward method, overrides the "),sn=i(fo,"CODE",{});var Zd=d(sn);ji=s(Zd,"__call__"),Zd.forEach(o),Fi=s(fo," special method."),fo.forEach(o),Mi=h(Je),y(Pe.$$.fragment,Je),Ei=h(Je),y(Ge.$$.fragment,Je),Je.forEach(o),Ci=h(Re),Se=i(Re,"DIV",{class:!0});var ia=d(Se);y(Dt.$$.fragment,ia),Oi=h(ia),y(Ae.$$.fragment,ia),ia.forEach(o),Pi=h(Re),Ne=i(Re,"DIV",{class:!0});var da=d(Ne);y(Bt.$$.fragment,da),Gi=h(da),y(Ie.$$.fragment,da),da.forEach(o),Re.forEach(o),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(Tl)),g(p,"id","longt5"),g(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(p,"href","#longt5"),g(m,"class","relative group"),g(ge,"id","overview"),g(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ge,"href","#overview"),g(ee,"class","relative group"),g(Ze,"href","https://arxiv.org/abs/2112.07916"),g(Ze,"rel","nofollow"),g(Vt,"href","/docs/transformers/main/en/model_doc/longt5#transformers.LongT5ForConditionalGeneration"),g(Kt,"href","/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration"),g(Zt,"href","/docs/transformers/main/en/model_doc/pegasus#transformers.PegasusForConditionalGeneration"),g(tt,"href","https://huggingface.co/datasets/scientific_papers"),g(tt,"rel","nofollow"),g(nt,"href","https://huggingface.co/stancld"),g(nt,"rel","nofollow"),g(at,"href","https://github.com/google-research/longt5"),g(at,"rel","nofollow"),g(_e,"id","transformers.LongT5Config"),g(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_e,"href","#transformers.LongT5Config"),g(te,"class","relative group"),g(Qt,"href","/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Model"),g(Xt,"href","/docs/transformers/main/en/model_doc/longt5#transformers.FlaxLongT5Model"),g(it,"href","https://huggingface.co/google/long-t5-local-base"),g(it,"rel","nofollow"),g(eo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(to,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Te,"id","transformers.LongT5Model"),g(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Te,"href","#transformers.LongT5Model"),g(ne,"class","relative group"),g(pt,"href","https://arxiv.org/abs/2112.07916"),g(pt,"rel","nofollow"),g(oo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(mt,"rel","nofollow"),g(no,"href","/docs/transformers/main/en/model_doc/longt5#transformers.LongT5Model"),g(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ye,"id","transformers.LongT5ForConditionalGeneration"),g(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ye,"href","#transformers.LongT5ForConditionalGeneration"),g(se,"class","relative group"),g(kt,"href","https://arxiv.org/abs/2112.07916"),g(kt,"rel","nofollow"),g(ao,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(wt,"rel","nofollow"),g(so,"href","/docs/transformers/main/en/model_doc/longt5#transformers.LongT5ForConditionalGeneration"),g(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($e,"id","transformers.LongT5EncoderModel"),g($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g($e,"href","#transformers.LongT5EncoderModel"),g(ie,"class","relative group"),g(qt,"href","https://arxiv.org/abs/2112.07916"),g(qt,"rel","nofollow"),g(ro,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Mt,"rel","nofollow"),g(io,"href","/docs/transformers/main/en/model_doc/longt5#transformers.LongT5EncoderModel"),g(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Le,"id","transformers.FlaxLongT5Model"),g(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Le,"href","#transformers.FlaxLongT5Model"),g(le,"class","relative group"),g(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Oe,"id","transformers.FlaxLongT5ForConditionalGeneration"),g(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Oe,"href","#transformers.FlaxLongT5ForConditionalGeneration"),g(pe,"class","relative group"),g(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,l),T(t,b,f),T(t,m,f),e(m,p),e(p,_),v(n,_,null),e(m,c),e(m,L),e(L,la),T(t,bn,f),T(t,ee,f),e(ee,ge),e(ge,_o),v(Ke,_o,null),e(ee,ca),e(ee,To),e(To,pa),T(t,kn,f),T(t,fe,f),e(fe,ua),e(fe,Ze),e(Ze,ha),e(fe,ma),T(t,yn,f),T(t,Yt,f),e(Yt,ga),T(t,vn,f),T(t,Rt,f),e(Rt,bo),e(bo,fa),T(t,wn,f),T(t,Jt,f),e(Jt,_a),T(t,$n,f),T(t,C,f),e(C,O),e(O,Vt),e(Vt,Ta),e(O,ba),e(O,Kt),e(Kt,ka),e(O,ya),e(O,ko),e(ko,va),e(O,wa),e(O,yo),e(yo,$a),e(O,xa),e(O,vo),e(vo,za),e(O,La),e(O,wo),e(wo,qa),e(O,ja),e(C,Fa),e(C,Qe),e(Qe,Ma),e(Qe,Zt),e(Zt,Ea),e(Qe,Ca),e(C,Oa),e(C,Xe),e(Xe,Pa),e(Xe,$o),e($o,Ga),e(Xe,Sa),e(C,Aa),e(C,j),e(j,Na),e(j,xo),e(xo,Ia),e(j,Da),e(j,zo),e(zo,Ba),e(j,Wa),e(j,Lo),e(Lo,Ua),e(j,Ha),e(j,qo),e(qo,Ya),e(j,Ra),e(j,jo),e(jo,Ja),e(j,Va),e(j,Fo),e(Fo,Ka),e(j,Za),e(C,Qa),e(C,q),e(q,Mo),e(Mo,Xa),e(q,es),e(q,Eo),e(Eo,ts),e(q,os),e(q,Co),e(Co,ns),e(q,as),e(q,Oo),e(Oo,ss),e(q,rs),e(q,Po),e(Po,is),e(q,ds),e(q,Go),e(Go,ls),e(q,cs),e(q,So),e(So,ps),e(q,us),e(C,hs),e(C,et),e(et,ms),e(et,tt),e(tt,gs),e(et,fs),T(t,xn,f),v(ot,t,f),T(t,zn,f),T(t,Q,f),e(Q,_s),e(Q,nt),e(nt,Ts),e(Q,bs),e(Q,at),e(at,ks),e(Q,ys),T(t,Ln,f),T(t,te,f),e(te,_e),e(_e,Ao),v(st,Ao,null),e(te,vs),e(te,No),e(No,ws),T(t,qn,f),T(t,K,f),v(rt,K,null),e(K,$s),e(K,Z),e(Z,xs),e(Z,Qt),e(Qt,zs),e(Z,Ls),e(Z,Xt),e(Xt,qs),e(Z,js),e(Z,it),e(it,Fs),e(Z,Ms),e(K,Es),e(K,oe),e(oe,Cs),e(oe,eo),e(eo,Os),e(oe,Ps),e(oe,to),e(to,Gs),e(oe,Ss),T(t,jn,f),T(t,ne,f),e(ne,Te),e(Te,Io),v(dt,Io,null),e(ne,As),e(ne,Do),e(Do,Ns),T(t,Fn,f),T(t,F,f),v(lt,F,null),e(F,Is),e(F,Bo),e(Bo,Ds),e(F,Bs),e(F,ct),e(ct,Ws),e(ct,pt),e(pt,Us),e(ct,Hs),e(F,Ys),e(F,ut),e(ut,Rs),e(ut,oo),e(oo,Js),e(ut,Vs),e(F,Ks),e(F,ht),e(ht,Zs),e(ht,mt),e(mt,Qs),e(ht,Xs),e(F,er),e(F,D),v(gt,D,null),e(D,tr),e(D,ae),e(ae,or),e(ae,no),e(no,nr),e(ae,ar),e(ae,Wo),e(Wo,sr),e(ae,rr),e(D,ir),v(be,D,null),e(D,dr),v(ke,D,null),T(t,Mn,f),T(t,se,f),e(se,ye),e(ye,Uo),v(ft,Uo,null),e(se,lr),e(se,Ho),e(Ho,cr),T(t,En,f),T(t,M,f),v(_t,M,null),e(M,pr),e(M,Tt),e(Tt,ur),e(Tt,Yo),e(Yo,hr),e(Tt,mr),e(M,gr),e(M,bt),e(bt,fr),e(bt,kt),e(kt,_r),e(bt,Tr),e(M,br),e(M,yt),e(yt,kr),e(yt,ao),e(ao,yr),e(yt,vr),e(M,wr),e(M,vt),e(vt,$r),e(vt,wt),e(wt,xr),e(vt,zr),e(M,Lr),e(M,B),v($t,B,null),e(B,qr),e(B,re),e(re,jr),e(re,so),e(so,Fr),e(re,Mr),e(re,Ro),e(Ro,Er),e(re,Cr),e(B,Or),v(ve,B,null),e(B,Pr),v(we,B,null),T(t,Cn,f),T(t,ie,f),e(ie,$e),e($e,Jo),v(xt,Jo,null),e(ie,Gr),e(ie,Vo),e(Vo,Sr),T(t,On,f),T(t,E,f),v(zt,E,null),e(E,Ar),e(E,Ko),e(Ko,Nr),e(E,Ir),e(E,Lt),e(Lt,Dr),e(Lt,qt),e(qt,Br),e(Lt,Wr),e(E,Ur),e(E,jt),e(jt,Hr),e(jt,ro),e(ro,Yr),e(jt,Rr),e(E,Jr),e(E,Ft),e(Ft,Vr),e(Ft,Mt),e(Mt,Kr),e(Ft,Zr),e(E,Qr),e(E,W),v(Et,W,null),e(W,Xr),e(W,de),e(de,ei),e(de,io),e(io,ti),e(de,oi),e(de,Zo),e(Zo,ni),e(de,ai),e(W,si),v(xe,W,null),e(W,ri),v(ze,W,null),T(t,Pn,f),T(t,le,f),e(le,Le),e(Le,Qo),v(Ct,Qo,null),e(le,ii),e(le,Xo),e(Xo,di),T(t,Gn,f),T(t,A,f),v(Ot,A,null),e(A,li),e(A,U),v(Pt,U,null),e(U,ci),e(U,ce),e(ce,pi),e(ce,en),e(en,ui),e(ce,hi),e(ce,tn),e(tn,mi),e(ce,gi),e(U,fi),v(qe,U,null),e(U,_i),v(je,U,null),e(A,Ti),e(A,Fe),v(Gt,Fe,null),e(Fe,bi),v(Me,Fe,null),e(A,ki),e(A,Ee),v(St,Ee,null),e(Ee,yi),v(Ce,Ee,null),T(t,Sn,f),T(t,pe,f),e(pe,Oe),e(Oe,on),v(At,on,null),e(pe,vi),e(pe,nn),e(nn,wi),T(t,An,f),T(t,N,f),v(Nt,N,null),e(N,$i),e(N,H),v(It,H,null),e(H,xi),e(H,ue),e(ue,zi),e(ue,an),e(an,Li),e(ue,qi),e(ue,sn),e(sn,ji),e(ue,Fi),e(H,Mi),v(Pe,H,null),e(H,Ei),v(Ge,H,null),e(N,Ci),e(N,Se),v(Dt,Se,null),e(Se,Oi),v(Ae,Se,null),e(N,Pi),e(N,Ne),v(Bt,Ne,null),e(Ne,Gi),v(Ie,Ne,null),Nn=!0},p(t,[f]){const Wt={};f&2&&(Wt.$$scope={dirty:f,ctx:t}),be.$set(Wt);const rn={};f&2&&(rn.$$scope={dirty:f,ctx:t}),ke.$set(rn);const dn={};f&2&&(dn.$$scope={dirty:f,ctx:t}),ve.$set(dn);const ln={};f&2&&(ln.$$scope={dirty:f,ctx:t}),we.$set(ln);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:t}),xe.$set(Ut);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:t}),ze.$set(cn);const pn={};f&2&&(pn.$$scope={dirty:f,ctx:t}),qe.$set(pn);const un={};f&2&&(un.$$scope={dirty:f,ctx:t}),je.$set(un);const Ht={};f&2&&(Ht.$$scope={dirty:f,ctx:t}),Me.$set(Ht);const hn={};f&2&&(hn.$$scope={dirty:f,ctx:t}),Ce.$set(hn);const mn={};f&2&&(mn.$$scope={dirty:f,ctx:t}),Pe.$set(mn);const gn={};f&2&&(gn.$$scope={dirty:f,ctx:t}),Ge.$set(gn);const fn={};f&2&&(fn.$$scope={dirty:f,ctx:t}),Ae.$set(fn);const _n={};f&2&&(_n.$$scope={dirty:f,ctx:t}),Ie.$set(_n)},i(t){Nn||(w(n.$$.fragment,t),w(Ke.$$.fragment,t),w(ot.$$.fragment,t),w(st.$$.fragment,t),w(rt.$$.fragment,t),w(dt.$$.fragment,t),w(lt.$$.fragment,t),w(gt.$$.fragment,t),w(be.$$.fragment,t),w(ke.$$.fragment,t),w(ft.$$.fragment,t),w(_t.$$.fragment,t),w($t.$$.fragment,t),w(ve.$$.fragment,t),w(we.$$.fragment,t),w(xt.$$.fragment,t),w(zt.$$.fragment,t),w(Et.$$.fragment,t),w(xe.$$.fragment,t),w(ze.$$.fragment,t),w(Ct.$$.fragment,t),w(Ot.$$.fragment,t),w(Pt.$$.fragment,t),w(qe.$$.fragment,t),w(je.$$.fragment,t),w(Gt.$$.fragment,t),w(Me.$$.fragment,t),w(St.$$.fragment,t),w(Ce.$$.fragment,t),w(At.$$.fragment,t),w(Nt.$$.fragment,t),w(It.$$.fragment,t),w(Pe.$$.fragment,t),w(Ge.$$.fragment,t),w(Dt.$$.fragment,t),w(Ae.$$.fragment,t),w(Bt.$$.fragment,t),w(Ie.$$.fragment,t),Nn=!0)},o(t){$(n.$$.fragment,t),$(Ke.$$.fragment,t),$(ot.$$.fragment,t),$(st.$$.fragment,t),$(rt.$$.fragment,t),$(dt.$$.fragment,t),$(lt.$$.fragment,t),$(gt.$$.fragment,t),$(be.$$.fragment,t),$(ke.$$.fragment,t),$(ft.$$.fragment,t),$(_t.$$.fragment,t),$($t.$$.fragment,t),$(ve.$$.fragment,t),$(we.$$.fragment,t),$(xt.$$.fragment,t),$(zt.$$.fragment,t),$(Et.$$.fragment,t),$(xe.$$.fragment,t),$(ze.$$.fragment,t),$(Ct.$$.fragment,t),$(Ot.$$.fragment,t),$(Pt.$$.fragment,t),$(qe.$$.fragment,t),$(je.$$.fragment,t),$(Gt.$$.fragment,t),$(Me.$$.fragment,t),$(St.$$.fragment,t),$(Ce.$$.fragment,t),$(At.$$.fragment,t),$(Nt.$$.fragment,t),$(It.$$.fragment,t),$(Pe.$$.fragment,t),$(Ge.$$.fragment,t),$(Dt.$$.fragment,t),$(Ae.$$.fragment,t),$(Bt.$$.fragment,t),$(Ie.$$.fragment,t),Nn=!1},d(t){o(l),t&&o(b),t&&o(m),x(n),t&&o(bn),t&&o(ee),x(Ke),t&&o(kn),t&&o(fe),t&&o(yn),t&&o(Yt),t&&o(vn),t&&o(Rt),t&&o(wn),t&&o(Jt),t&&o($n),t&&o(C),t&&o(xn),x(ot,t),t&&o(zn),t&&o(Q),t&&o(Ln),t&&o(te),x(st),t&&o(qn),t&&o(K),x(rt),t&&o(jn),t&&o(ne),x(dt),t&&o(Fn),t&&o(F),x(lt),x(gt),x(be),x(ke),t&&o(Mn),t&&o(se),x(ft),t&&o(En),t&&o(M),x(_t),x($t),x(ve),x(we),t&&o(Cn),t&&o(ie),x(xt),t&&o(On),t&&o(E),x(zt),x(Et),x(xe),x(ze),t&&o(Pn),t&&o(le),x(Ct),t&&o(Gn),t&&o(A),x(Ot),x(Pt),x(qe),x(je),x(Gt),x(Me),x(St),x(Ce),t&&o(Sn),t&&o(pe),x(At),t&&o(An),t&&o(N),x(Nt),x(It),x(Pe),x(Ge),x(Dt),x(Ae),x(Bt),x(Ie)}}}const Tl={local:"longt5",sections:[{local:"overview",title:"Overview"},{local:"transformers.LongT5Config",title:"LongT5Config"},{local:"transformers.LongT5Model",title:"LongT5Model"},{local:"transformers.LongT5ForConditionalGeneration",title:"LongT5ForConditionalGeneration"},{local:"transformers.LongT5EncoderModel",title:"LongT5EncoderModel"},{local:"transformers.FlaxLongT5Model",title:"FlaxLongT5Model"},{local:"transformers.FlaxLongT5ForConditionalGeneration",title:"FlaxLongT5ForConditionalGeneration"}],title:"LongT5"};function bl(z){return ol(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class zl extends Qd{constructor(l){super();Xd(this,l,bl,_l,el,{})}}export{zl as default,Tl as metadata};
