import{S as Qi,i as Xi,s as el,e as r,k as u,w as b,t as a,M as tl,c as d,d as o,m as h,a as i,x as k,h as s,b as g,G as e,g as T,y,q as w,o as $,B as x,v as ol,L as me}from"../../chunks/vendor-hf-doc-builder.js";import{T as Tn}from"../../chunks/Tip-hf-doc-builder.js";import{D as G}from"../../chunks/Docstring-hf-doc-builder.js";import{C as X}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Je}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as he}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function nl(L){let l,v,m,p,_;return{c(){l=r("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,v),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function al(L){let l,v,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, LongT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),v=a("Example:"),m=u(),b(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Example:"),c.forEach(o),m=h(n),k(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,v),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function sl(L){let l,v,m,p,_;return{c(){l=r("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,v),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function rl(L){let l,v,m,p,_;return p=new X({props:{code:`from transformers import AutoTokenizer, LongT5ForConditionalGeneration

tokenizer = AutoTokenizer.from_pretrained("Stancld/longt5-tglobal-large-16384-pubmed-3k_steps")
model = LongT5ForConditionalGeneration.from_pretrained(
    "Stancld/longt5-tglobal-large-16384-pubmed-3k_steps"
)

# Let's try a very long input.
input_ids = tokenizer(
    "summarize: " + 100 * "studies have shown that owning a dog is good for you ", return_tensors="pt"
).input_ids  # Batch size 1

outputs = model.generate(input_ids)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Stancld/longt5-tglobal-large-16384-pubmed-3k_steps&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongT5ForConditionalGeneration.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Stancld/longt5-tglobal-large-16384-pubmed-3k_steps&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Let&#x27;s try a very long input.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: &quot;</span> + <span class="hljs-number">100</span> * <span class="hljs-string">&quot;studies have shown that owning a dog is good for you &quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
abstractthe aim of this article <span class="hljs-keyword">is</span> to summarize the studies have shown that owning a dog`}}),{c(){l=r("p"),v=a("Examples:"),m=u(),b(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Examples:"),c.forEach(o),m=h(n),k(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,v),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function dl(L){let l,v,m,p,_;return{c(){l=r("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,v),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function il(L){let l,v,m,p,_;return p=new X({props:{code:`from transformers import AutoTokenizer, LongT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),v=a("Example:"),m=u(),b(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Example:"),c.forEach(o),m=h(n),k(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,v),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function ll(L){let l,v,m,p,_;return{c(){l=r("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,v),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function cl(L){let l,v,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5Model

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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=r("p"),v=a("Example:"),m=u(),b(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Example:"),c.forEach(o),m=h(n),k(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,v),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function pl(L){let l,v,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("google/long-t5-local-base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=r("p"),v=a("Example:"),m=u(),b(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Example:"),c.forEach(o),m=h(n),k(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,v),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function ul(L){let l,v,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),v=a("Example:"),m=u(),b(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Example:"),c.forEach(o),m=h(n),k(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,v),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function hl(L){let l,v,m,p,_;return{c(){l=r("p"),v=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),p=a("Module"),_=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=d(c,"CODE",{});var z=i(m);p=s(z,"Module"),z.forEach(o),_=s(c,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),c.forEach(o)},m(n,c){T(n,l,c),e(l,v),e(l,m),e(m,p),e(l,_)},d(n){n&&o(l)}}}function ml(L){let l,v,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`}}),{c(){l=r("p"),v=a("Example:"),m=u(),b(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Example:"),c.forEach(o),m=h(n),k(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,v),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function gl(L){let l,v,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration

tokenizer = T5Tokenizer.from_pretrained("t5-base")
model = FlaxLongT5ForConditionalGeneration.from_pretrained("google/long-t5-local-base")

text = "My friends are cool but they eat too many carbs."
inputs = tokenizer(text, return_tensors="np")
encoder_outputs = model.encode(**inputs)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Tokenizer, FlaxLongT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = T5Tokenizer.from_pretrained(<span class="hljs-string">&quot;t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxLongT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/long-t5-local-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`}}),{c(){l=r("p"),v=a("Example:"),m=u(),b(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Example:"),c.forEach(o),m=h(n),k(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,v),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function fl(L){let l,v,m,p,_;return p=new X({props:{code:`from transformers import T5Tokenizer, FlaxLongT5ForConditionalGeneration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=r("p"),v=a("Example:"),m=u(),b(p.$$.fragment)},l(n){l=d(n,"P",{});var c=i(l);v=s(c,"Example:"),c.forEach(o),m=h(n),k(p.$$.fragment,n)},m(n,c){T(n,l,c),e(l,v),T(n,m,c),y(p,n,c),_=!0},p:me,i(n){_||(w(p.$$.fragment,n),_=!0)},o(n){$(p.$$.fragment,n),_=!1},d(n){n&&o(l),n&&o(m),x(p,n)}}}function _l(L){let l,v,m,p,_,n,c,z,la,vn,ee,ge,fo,Ke,ca,_o,pa,bn,fe,ua,Ze,ha,ma,kn,Vt,ga,yn,Yt,To,fa,wn,Rt,_a,$n,E,O,Jt,Ta,va,Kt,ba,ka,vo,ya,wa,bo,$a,xa,ko,La,za,yo,qa,Fa,ja,Qe,Ma,wo,Ca,Ea,Oa,Xe,Pa,$o,Ga,Sa,Aa,F,Na,xo,Ia,Da,Lo,Wa,Ba,zo,Ua,Ha,qo,Va,Ya,Fo,Ra,Ja,jo,Ka,Za,Qa,q,Mo,Xa,es,Co,ts,os,Eo,ns,as,Oo,ss,rs,Po,ds,is,Go,ls,cs,So,ps,us,hs,et,ms,tt,gs,fs,xn,ot,Ln,Q,_s,nt,Ts,vs,at,bs,ks,zn,te,_e,Ao,st,ys,No,ws,qn,K,rt,$s,Z,xs,Zt,Ls,zs,Qt,qs,Fs,dt,js,Ms,Cs,oe,Es,Xt,Os,Ps,eo,Gs,Ss,Fn,ne,Te,Io,it,As,Do,Ns,jn,j,lt,Is,Wo,Ds,Ws,ct,Bs,pt,Us,Hs,Vs,ut,Ys,to,Rs,Js,Ks,ht,Zs,mt,Qs,Xs,er,D,gt,tr,ae,or,oo,nr,ar,Bo,sr,rr,dr,ve,ir,be,Mn,se,ke,Uo,ft,lr,Ho,cr,Cn,M,_t,pr,Tt,ur,Vo,hr,mr,gr,vt,fr,bt,_r,Tr,vr,kt,br,no,kr,yr,wr,yt,$r,wt,xr,Lr,zr,W,$t,qr,re,Fr,ao,jr,Mr,Yo,Cr,Er,Or,ye,Pr,we,En,de,$e,Ro,xt,Gr,Jo,Sr,On,C,Lt,Ar,Ko,Nr,Ir,zt,Dr,qt,Wr,Br,Ur,Ft,Hr,so,Vr,Yr,Rr,jt,Jr,Mt,Kr,Zr,Qr,B,Ct,Xr,ie,ed,ro,td,od,Zo,nd,ad,sd,xe,rd,Le,Pn,le,ze,Qo,Et,dd,Xo,id,Gn,A,Ot,ld,U,Pt,cd,ce,pd,en,ud,hd,tn,md,gd,fd,qe,_d,Fe,Td,je,Gt,vd,Me,bd,Ce,St,kd,Ee,Sn,pe,Oe,on,At,yd,nn,wd,An,N,Nt,$d,H,It,xd,ue,Ld,an,zd,qd,sn,Fd,jd,Md,Pe,Cd,Ge,Ed,Se,Dt,Od,Ae,Pd,Ne,Wt,Gd,Ie,Nn;return n=new Je({}),Ke=new Je({}),ot=new X({props:{code:`import evaluate
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
<span class="hljs-meta">&gt;&gt;&gt; </span>rouge.compute(predictions=result[<span class="hljs-string">&quot;predicted_abstract&quot;</span>], references=result[<span class="hljs-string">&quot;abstract&quot;</span>])`}}),st=new Je({}),rt=new G({props:{name:"class transformers.LongT5Config",anchor:"transformers.LongT5Config",parameters:[{name:"vocab_size",val:" = 32128"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 2048"},{name:"num_layers",val:" = 6"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 8"},{name:"local_radius",val:" = 127"},{name:"global_block_size",val:" = 16"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'relu'"},{name:"is_encoder_decoder",val:" = True"},{name:"encoder_attention_type",val:" = 'local'"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongT5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32128) &#x2014;
Vocabulary size of the LongT5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Model">LongT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.LongT5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/configuration_longt5.py#L33"}}),it=new Je({}),lt=new G({props:{name:"class transformers.LongT5Model",anchor:"transformers.LongT5Model",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_longt5.py#L1725"}}),gt=new G({props:{name:"forward",anchor:"transformers.LongT5Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_longt5.py#L1775",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Config"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new Tn({props:{$$slots:{default:[nl]},$$scope:{ctx:L}}}),be=new he({props:{anchor:"transformers.LongT5Model.forward.example",$$slots:{default:[al]},$$scope:{ctx:L}}}),ft=new Je({}),_t=new G({props:{name:"class transformers.LongT5ForConditionalGeneration",anchor:"transformers.LongT5ForConditionalGeneration",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_longt5.py#L1878"}}),$t=new G({props:{name:"forward",anchor:"transformers.LongT5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.BoolTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.Tensor]]] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongT5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_longt5.py#L1931",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Config"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new Tn({props:{$$slots:{default:[sl]},$$scope:{ctx:L}}}),we=new he({props:{anchor:"transformers.LongT5ForConditionalGeneration.forward.example",$$slots:{default:[rl]},$$scope:{ctx:L}}}),xt=new Je({}),Lt=new G({props:{name:"class transformers.LongT5EncoderModel",anchor:"transformers.LongT5EncoderModel",parameters:[{name:"config",val:": LongT5Config"}],parametersDescription:[{anchor:"transformers.LongT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Config">LongT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_longt5.py#L2120"}}),Ct=new G({props:{name:"forward",anchor:"transformers.LongT5EncoderModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongT5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_longt5.py#L2155",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Config"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new Tn({props:{$$slots:{default:[dl]},$$scope:{ctx:L}}}),Le=new he({props:{anchor:"transformers.LongT5EncoderModel.forward.example",$$slots:{default:[il]},$$scope:{ctx:L}}}),Et=new Je({}),Ot=new G({props:{name:"class transformers.FlaxLongT5Model",anchor:"transformers.FlaxLongT5Model",parameters:[{name:"config",val:": LongT5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_flax_longt5.py#L2067"}}),Pt=new G({props:{name:"__call__",anchor:"transformers.FlaxLongT5Model.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_flax_longt5.py#L1695",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Config"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new Tn({props:{$$slots:{default:[ll]},$$scope:{ctx:L}}}),Fe=new he({props:{anchor:"transformers.FlaxLongT5Model.__call__.example",$$slots:{default:[cl]},$$scope:{ctx:L}}}),Gt=new G({props:{name:"encode",anchor:"transformers.FlaxLongT5Model.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_flax_longt5.py#L1781",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new he({props:{anchor:"transformers.FlaxLongT5Model.encode.example",$$slots:{default:[pl]},$$scope:{ctx:L}}}),St=new G({props:{name:"decode",anchor:"transformers.FlaxLongT5Model.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5Model.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_flax_longt5.py#L1839",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ee=new he({props:{anchor:"transformers.FlaxLongT5Model.decode.example",$$slots:{default:[ul]},$$scope:{ctx:L}}}),At=new Je({}),Nt=new G({props:{name:"class transformers.FlaxLongT5ForConditionalGeneration",anchor:"transformers.FlaxLongT5ForConditionalGeneration",parameters:[{name:"config",val:": LongT5Config"},{name:"input_shape",val:": typing.Tuple[int] = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_flax_longt5.py#L2208"}}),It=new G({props:{name:"__call__",anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_input_ids",val:": ndarray = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_flax_longt5.py#L1695",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Config"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pe=new Tn({props:{$$slots:{default:[hl]},$$scope:{ctx:L}}}),Ge=new he({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.__call__.example",$$slots:{default:[ml]},$$scope:{ctx:L}}}),Dt=new G({props:{name:"encode",anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": ndarray"},{name:"attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. LongT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_flax_longt5.py#L1781",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new he({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.encode.example",$$slots:{default:[gl]},$$scope:{ctx:L}}}),Wt=new G({props:{name:"decode",anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"decoder_attention_mask",val:": typing.Optional[jax._src.numpy.ndarray.ndarray] = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5Tokenizer">T5Tokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/longt5/modeling_flax_longt5.py#L2211",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new he({props:{anchor:"transformers.FlaxLongT5ForConditionalGeneration.decode.example",$$slots:{default:[fl]},$$scope:{ctx:L}}}),{c(){l=r("meta"),v=u(),m=r("h1"),p=r("a"),_=r("span"),b(n.$$.fragment),c=u(),z=r("span"),la=a("LongT5"),vn=u(),ee=r("h2"),ge=r("a"),fo=r("span"),b(Ke.$$.fragment),ca=u(),_o=r("span"),pa=a("Overview"),bn=u(),fe=r("p"),ua=a("The LongT5 model was proposed in "),Ze=r("a"),ha=a("LongT5: Efficient Text-To-Text Transformer for Long Sequences"),ma=a(`
by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an
encoder-decoder transformer pre-trained in a text-to-text denoising generative setting. LongT5 model is an extension of
T5 model, and it enables using one of the two different efficient attention mechanisms - (1) Local attention, or (2)
Transient-Global attention.`),kn=u(),Vt=r("p"),ga=a("The abstract from the paper is the following:"),yn=u(),Yt=r("p"),To=r("em"),fa=a(`Recent work has shown that either (1) increasing the input length or (2) increasing model size can improve the
performance of Transformer-based neural models. In this paper, we present a new model, called LongT5, with which we
explore the effects of scaling both the input length and model size at the same time. Specifically, we integrated
attention ideas from long-input transformers (ETC), and adopted pre-training strategies from summarization pre-training
(PEGASUS) into the scalable T5 architecture. The result is a new attention mechanism we call {\\em Transient Global}
(TGlobal), which mimics ETC\u2019s local/global attention mechanism, but without requiring additional side-inputs. We are
able to achieve state-of-the-art results on several summarization tasks and outperform the original T5 models on
question answering tasks.`),wn=u(),Rt=r("p"),_a=a("Tips:"),$n=u(),E=r("ul"),O=r("li"),Jt=r("a"),Ta=a("LongT5ForConditionalGeneration"),va=a(" is an extension of "),Kt=r("a"),ba=a("T5ForConditionalGeneration"),ka=a(` exchanging the traditional
encoder `),vo=r("em"),ya=a("self-attention"),wa=a(" layer with efficient either "),bo=r("em"),$a=a("local"),xa=a(" attention or "),ko=r("em"),La=a("transient-global"),za=a(" ("),yo=r("em"),qa=a("tglobal"),Fa=a(") attention."),ja=u(),Qe=r("li"),Ma=a(`Unlike the T5 model, LongT5 does not use a task prefix. Furthermore, it uses a different pre-training objective
inspired by the pre-training of `),wo=r("code"),Ca=a("[PegasusForConditionalGeneration]"),Ea=a("."),Oa=u(),Xe=r("li"),Pa=a("LongT5 model is designed to work efficiently and very well on long-range "),$o=r("em"),Ga=a("sequence-to-sequence"),Sa=a(` tasks where the
input sequence exceeds commonly used 512 tokens. It is capable of handling input sequences of a length up to 16,384 tokens.`),Aa=u(),F=r("li"),Na=a("For "),xo=r("em"),Ia=a("Local Attention"),Da=a(", the sparse sliding-window local attention operation allows a given token to attend only "),Lo=r("code"),Wa=a("r"),Ba=a(`
tokens to the left and right of it (with `),zo=r("code"),Ua=a("r=127"),Ha=a(" by default). "),qo=r("em"),Va=a("Local Attention"),Ya=a(` does not introduce any new parameters
to the model. The complexity of the mechanism is linear in input sequence length `),Fo=r("code"),Ra=a("l"),Ja=a(": "),jo=r("code"),Ka=a("O(l*r)"),Za=a("."),Qa=u(),q=r("li"),Mo=r("em"),Xa=a("Transient Global Attention"),es=a(" is an extension of the "),Co=r("em"),ts=a("Local Attention"),os=a(`. It, furthermore, allows each input token to
interact with all other tokens in the layer. This is achieved via splitting an input sequence into blocks of a fixed
length `),Eo=r("code"),ns=a("k"),as=a(" (with a default "),Oo=r("code"),ss=a("k=16"),rs=a(`). Then, a global token for such a block is obtained via summing and normalizing the embeddings of every token
in the block. Thanks to this, the attention allows each token to attend to both nearby tokens like in Local attention, and
also every global token like in the case of standard global attention (`),Po=r("em"),ds=a("transient"),is=a(` represents the fact the global tokens
are constructed dynamically within each attention operation).  As a consequence, `),Go=r("em"),ls=a("TGlobal"),cs=a(` attention introduces
a few new parameters \u2014 global relative position biases and a layer normalization for global token\u2019s embedding.
The complexity of this mechanism is `),So=r("code"),ps=a("O(l(r + l/k))"),us=a("."),hs=u(),et=r("li"),ms=a("An example showing how to evaluate a fine-tuned LongT5 model on the "),tt=r("a"),gs=a("pubmed dataset"),fs=a(" is below."),xn=u(),b(ot.$$.fragment),Ln=u(),Q=r("p"),_s=a("This model was contributed by "),nt=r("a"),Ts=a("stancld"),vs=a(`.
The original code can be found `),at=r("a"),bs=a("here"),ks=a("."),zn=u(),te=r("h2"),_e=r("a"),Ao=r("span"),b(st.$$.fragment),ys=u(),No=r("span"),ws=a("LongT5Config"),qn=u(),K=r("div"),b(rt.$$.fragment),$s=u(),Z=r("p"),xs=a("This is the configuration class to store the configuration of a "),Zt=r("a"),Ls=a("LongT5Model"),zs=a(" or a "),Qt=r("a"),qs=a("FlaxLongT5Model"),Fs=a(`. It is
used to instantiate a LongT5 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the LongT5
`),dt=r("a"),js=a("google/long-t5-local-base"),Ms=a(" architecture."),Cs=u(),oe=r("p"),Es=a("Configuration objects inherit from "),Xt=r("a"),Os=a("PretrainedConfig"),Ps=a(` and can be used to control the model outputs. Read the
documentation from `),eo=r("a"),Gs=a("PretrainedConfig"),Ss=a(" for more information."),Fn=u(),ne=r("h2"),Te=r("a"),Io=r("span"),b(it.$$.fragment),As=u(),Do=r("span"),Ns=a("LongT5Model"),jn=u(),j=r("div"),b(lt.$$.fragment),Is=u(),Wo=r("p"),Ds=a("The bare LONGT5 Model transformer outputting raw hidden-states without any specific head on top."),Ws=u(),ct=r("p"),Bs=a("The LongT5 model was proposed in "),pt=r("a"),Us=a(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Hs=a(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Vs=u(),ut=r("p"),Ys=a("This model inherits from "),to=r("a"),Rs=a("PreTrainedModel"),Js=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ks=u(),ht=r("p"),Zs=a("This model is also a PyTorch "),mt=r("a"),Qs=a("torch.nn.Module"),Xs=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),er=u(),D=r("div"),b(gt.$$.fragment),tr=u(),ae=r("p"),or=a("The "),oo=r("a"),nr=a("LongT5Model"),ar=a(" forward method, overrides the "),Bo=r("code"),sr=a("__call__"),rr=a(" special method."),dr=u(),b(ve.$$.fragment),ir=u(),b(be.$$.fragment),Mn=u(),se=r("h2"),ke=r("a"),Uo=r("span"),b(ft.$$.fragment),lr=u(),Ho=r("span"),cr=a("LongT5ForConditionalGeneration"),Cn=u(),M=r("div"),b(_t.$$.fragment),pr=u(),Tt=r("p"),ur=a("LONGT5 Model with a "),Vo=r("code"),hr=a("language modeling"),mr=a(" head on top."),gr=u(),vt=r("p"),fr=a("The LongT5 model was proposed in "),bt=r("a"),_r=a(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Tr=a(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),vr=u(),kt=r("p"),br=a("This model inherits from "),no=r("a"),kr=a("PreTrainedModel"),yr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr=u(),yt=r("p"),$r=a("This model is also a PyTorch "),wt=r("a"),xr=a("torch.nn.Module"),Lr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zr=u(),W=r("div"),b($t.$$.fragment),qr=u(),re=r("p"),Fr=a("The "),ao=r("a"),jr=a("LongT5ForConditionalGeneration"),Mr=a(" forward method, overrides the "),Yo=r("code"),Cr=a("__call__"),Er=a(" special method."),Or=u(),b(ye.$$.fragment),Pr=u(),b(we.$$.fragment),En=u(),de=r("h2"),$e=r("a"),Ro=r("span"),b(xt.$$.fragment),Gr=u(),Jo=r("span"),Sr=a("LongT5EncoderModel"),On=u(),C=r("div"),b(Lt.$$.fragment),Ar=u(),Ko=r("p"),Nr=a("The bare LONGT5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Ir=u(),zt=r("p"),Dr=a("The LongT5 model was proposed in "),qt=r("a"),Wr=a(`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Br=a(` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Ur=u(),Ft=r("p"),Hr=a("This model inherits from "),so=r("a"),Vr=a("PreTrainedModel"),Yr=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr=u(),jt=r("p"),Jr=a("This model is also a PyTorch "),Mt=r("a"),Kr=a("torch.nn.Module"),Zr=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qr=u(),B=r("div"),b(Ct.$$.fragment),Xr=u(),ie=r("p"),ed=a("The "),ro=r("a"),td=a("LongT5EncoderModel"),od=a(" forward method, overrides the "),Zo=r("code"),nd=a("__call__"),ad=a(" special method."),sd=u(),b(xe.$$.fragment),rd=u(),b(Le.$$.fragment),Pn=u(),le=r("h2"),ze=r("a"),Qo=r("span"),b(Et.$$.fragment),dd=u(),Xo=r("span"),id=a("FlaxLongT5Model"),Gn=u(),A=r("div"),b(Ot.$$.fragment),ld=u(),U=r("div"),b(Pt.$$.fragment),cd=u(),ce=r("p"),pd=a("The "),en=r("code"),ud=a("FlaxLongT5PreTrainedModel"),hd=a(" forward method, overrides the "),tn=r("code"),md=a("__call__"),gd=a(" special method."),fd=u(),b(qe.$$.fragment),_d=u(),b(Fe.$$.fragment),Td=u(),je=r("div"),b(Gt.$$.fragment),vd=u(),b(Me.$$.fragment),bd=u(),Ce=r("div"),b(St.$$.fragment),kd=u(),b(Ee.$$.fragment),Sn=u(),pe=r("h2"),Oe=r("a"),on=r("span"),b(At.$$.fragment),yd=u(),nn=r("span"),wd=a("FlaxLongT5ForConditionalGeneration"),An=u(),N=r("div"),b(Nt.$$.fragment),$d=u(),H=r("div"),b(It.$$.fragment),xd=u(),ue=r("p"),Ld=a("The "),an=r("code"),zd=a("FlaxLongT5PreTrainedModel"),qd=a(" forward method, overrides the "),sn=r("code"),Fd=a("__call__"),jd=a(" special method."),Md=u(),b(Pe.$$.fragment),Cd=u(),b(Ge.$$.fragment),Ed=u(),Se=r("div"),b(Dt.$$.fragment),Od=u(),b(Ae.$$.fragment),Pd=u(),Ne=r("div"),b(Wt.$$.fragment),Gd=u(),b(Ie.$$.fragment),this.h()},l(t){const f=tl('[data-svelte="svelte-1phssyn"]',document.head);l=d(f,"META",{name:!0,content:!0}),f.forEach(o),v=h(t),m=d(t,"H1",{class:!0});var Bt=i(m);p=d(Bt,"A",{id:!0,class:!0,href:!0});var rn=i(p);_=d(rn,"SPAN",{});var dn=i(_);k(n.$$.fragment,dn),dn.forEach(o),rn.forEach(o),c=h(Bt),z=d(Bt,"SPAN",{});var ln=i(z);la=s(ln,"LongT5"),ln.forEach(o),Bt.forEach(o),vn=h(t),ee=d(t,"H2",{class:!0});var Ut=i(ee);ge=d(Ut,"A",{id:!0,class:!0,href:!0});var cn=i(ge);fo=d(cn,"SPAN",{});var pn=i(fo);k(Ke.$$.fragment,pn),pn.forEach(o),cn.forEach(o),ca=h(Ut),_o=d(Ut,"SPAN",{});var un=i(_o);pa=s(un,"Overview"),un.forEach(o),Ut.forEach(o),bn=h(t),fe=d(t,"P",{});var Ht=i(fe);ua=s(Ht,"The LongT5 model was proposed in "),Ze=d(Ht,"A",{href:!0,rel:!0});var hn=i(Ze);ha=s(hn,"LongT5: Efficient Text-To-Text Transformer for Long Sequences"),hn.forEach(o),ma=s(Ht,`
by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an
encoder-decoder transformer pre-trained in a text-to-text denoising generative setting. LongT5 model is an extension of
T5 model, and it enables using one of the two different efficient attention mechanisms - (1) Local attention, or (2)
Transient-Global attention.`),Ht.forEach(o),kn=h(t),Vt=d(t,"P",{});var mn=i(Vt);ga=s(mn,"The abstract from the paper is the following:"),mn.forEach(o),yn=h(t),Yt=d(t,"P",{});var gn=i(Yt);To=d(gn,"EM",{});var fn=i(To);fa=s(fn,`Recent work has shown that either (1) increasing the input length or (2) increasing model size can improve the
performance of Transformer-based neural models. In this paper, we present a new model, called LongT5, with which we
explore the effects of scaling both the input length and model size at the same time. Specifically, we integrated
attention ideas from long-input transformers (ETC), and adopted pre-training strategies from summarization pre-training
(PEGASUS) into the scalable T5 architecture. The result is a new attention mechanism we call {\\em Transient Global}
(TGlobal), which mimics ETC\u2019s local/global attention mechanism, but without requiring additional side-inputs. We are
able to achieve state-of-the-art results on several summarization tasks and outperform the original T5 models on
question answering tasks.`),fn.forEach(o),gn.forEach(o),wn=h(t),Rt=d(t,"P",{});var _n=i(Rt);_a=s(_n,"Tips:"),_n.forEach(o),$n=h(t),E=d(t,"UL",{});var V=i(E);O=d(V,"LI",{});var I=i(O);Jt=d(I,"A",{href:!0});var Sd=i(Jt);Ta=s(Sd,"LongT5ForConditionalGeneration"),Sd.forEach(o),va=s(I," is an extension of "),Kt=d(I,"A",{href:!0});var Ad=i(Kt);ba=s(Ad,"T5ForConditionalGeneration"),Ad.forEach(o),ka=s(I,` exchanging the traditional
encoder `),vo=d(I,"EM",{});var Nd=i(vo);ya=s(Nd,"self-attention"),Nd.forEach(o),wa=s(I," layer with efficient either "),bo=d(I,"EM",{});var Id=i(bo);$a=s(Id,"local"),Id.forEach(o),xa=s(I," attention or "),ko=d(I,"EM",{});var Dd=i(ko);La=s(Dd,"transient-global"),Dd.forEach(o),za=s(I," ("),yo=d(I,"EM",{});var Wd=i(yo);qa=s(Wd,"tglobal"),Wd.forEach(o),Fa=s(I,") attention."),I.forEach(o),ja=h(V),Qe=d(V,"LI",{});var In=i(Qe);Ma=s(In,`Unlike the T5 model, LongT5 does not use a task prefix. Furthermore, it uses a different pre-training objective
inspired by the pre-training of `),wo=d(In,"CODE",{});var Bd=i(wo);Ca=s(Bd,"[PegasusForConditionalGeneration]"),Bd.forEach(o),Ea=s(In,"."),In.forEach(o),Oa=h(V),Xe=d(V,"LI",{});var Dn=i(Xe);Pa=s(Dn,"LongT5 model is designed to work efficiently and very well on long-range "),$o=d(Dn,"EM",{});var Ud=i($o);Ga=s(Ud,"sequence-to-sequence"),Ud.forEach(o),Sa=s(Dn,` tasks where the
input sequence exceeds commonly used 512 tokens. It is capable of handling input sequences of a length up to 16,384 tokens.`),Dn.forEach(o),Aa=h(V),F=d(V,"LI",{});var S=i(F);Na=s(S,"For "),xo=d(S,"EM",{});var Hd=i(xo);Ia=s(Hd,"Local Attention"),Hd.forEach(o),Da=s(S,", the sparse sliding-window local attention operation allows a given token to attend only "),Lo=d(S,"CODE",{});var Vd=i(Lo);Wa=s(Vd,"r"),Vd.forEach(o),Ba=s(S,`
tokens to the left and right of it (with `),zo=d(S,"CODE",{});var Yd=i(zo);Ua=s(Yd,"r=127"),Yd.forEach(o),Ha=s(S," by default). "),qo=d(S,"EM",{});var Rd=i(qo);Va=s(Rd,"Local Attention"),Rd.forEach(o),Ya=s(S,` does not introduce any new parameters
to the model. The complexity of the mechanism is linear in input sequence length `),Fo=d(S,"CODE",{});var Jd=i(Fo);Ra=s(Jd,"l"),Jd.forEach(o),Ja=s(S,": "),jo=d(S,"CODE",{});var Kd=i(jo);Ka=s(Kd,"O(l*r)"),Kd.forEach(o),Za=s(S,"."),S.forEach(o),Qa=h(V),q=d(V,"LI",{});var P=i(q);Mo=d(P,"EM",{});var Zd=i(Mo);Xa=s(Zd,"Transient Global Attention"),Zd.forEach(o),es=s(P," is an extension of the "),Co=d(P,"EM",{});var Qd=i(Co);ts=s(Qd,"Local Attention"),Qd.forEach(o),os=s(P,`. It, furthermore, allows each input token to
interact with all other tokens in the layer. This is achieved via splitting an input sequence into blocks of a fixed
length `),Eo=d(P,"CODE",{});var Xd=i(Eo);ns=s(Xd,"k"),Xd.forEach(o),as=s(P," (with a default "),Oo=d(P,"CODE",{});var ei=i(Oo);ss=s(ei,"k=16"),ei.forEach(o),rs=s(P,`). Then, a global token for such a block is obtained via summing and normalizing the embeddings of every token
in the block. Thanks to this, the attention allows each token to attend to both nearby tokens like in Local attention, and
also every global token like in the case of standard global attention (`),Po=d(P,"EM",{});var ti=i(Po);ds=s(ti,"transient"),ti.forEach(o),is=s(P,` represents the fact the global tokens
are constructed dynamically within each attention operation).  As a consequence, `),Go=d(P,"EM",{});var oi=i(Go);ls=s(oi,"TGlobal"),oi.forEach(o),cs=s(P,` attention introduces
a few new parameters \u2014 global relative position biases and a layer normalization for global token\u2019s embedding.
The complexity of this mechanism is `),So=d(P,"CODE",{});var ni=i(So);ps=s(ni,"O(l(r + l/k))"),ni.forEach(o),us=s(P,"."),P.forEach(o),hs=h(V),et=d(V,"LI",{});var Wn=i(et);ms=s(Wn,"An example showing how to evaluate a fine-tuned LongT5 model on the "),tt=d(Wn,"A",{href:!0,rel:!0});var ai=i(tt);gs=s(ai,"pubmed dataset"),ai.forEach(o),fs=s(Wn," is below."),Wn.forEach(o),V.forEach(o),xn=h(t),k(ot.$$.fragment,t),Ln=h(t),Q=d(t,"P",{});var io=i(Q);_s=s(io,"This model was contributed by "),nt=d(io,"A",{href:!0,rel:!0});var si=i(nt);Ts=s(si,"stancld"),si.forEach(o),vs=s(io,`.
The original code can be found `),at=d(io,"A",{href:!0,rel:!0});var ri=i(at);bs=s(ri,"here"),ri.forEach(o),ks=s(io,"."),io.forEach(o),zn=h(t),te=d(t,"H2",{class:!0});var Bn=i(te);_e=d(Bn,"A",{id:!0,class:!0,href:!0});var di=i(_e);Ao=d(di,"SPAN",{});var ii=i(Ao);k(st.$$.fragment,ii),ii.forEach(o),di.forEach(o),ys=h(Bn),No=d(Bn,"SPAN",{});var li=i(No);ws=s(li,"LongT5Config"),li.forEach(o),Bn.forEach(o),qn=h(t),K=d(t,"DIV",{class:!0});var lo=i(K);k(rt.$$.fragment,lo),$s=h(lo),Z=d(lo,"P",{});var De=i(Z);xs=s(De,"This is the configuration class to store the configuration of a "),Zt=d(De,"A",{href:!0});var ci=i(Zt);Ls=s(ci,"LongT5Model"),ci.forEach(o),zs=s(De," or a "),Qt=d(De,"A",{href:!0});var pi=i(Qt);qs=s(pi,"FlaxLongT5Model"),pi.forEach(o),Fs=s(De,`. It is
used to instantiate a LongT5 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the LongT5
`),dt=d(De,"A",{href:!0,rel:!0});var ui=i(dt);js=s(ui,"google/long-t5-local-base"),ui.forEach(o),Ms=s(De," architecture."),De.forEach(o),Cs=h(lo),oe=d(lo,"P",{});var co=i(oe);Es=s(co,"Configuration objects inherit from "),Xt=d(co,"A",{href:!0});var hi=i(Xt);Os=s(hi,"PretrainedConfig"),hi.forEach(o),Ps=s(co,` and can be used to control the model outputs. Read the
documentation from `),eo=d(co,"A",{href:!0});var mi=i(eo);Gs=s(mi,"PretrainedConfig"),mi.forEach(o),Ss=s(co," for more information."),co.forEach(o),lo.forEach(o),Fn=h(t),ne=d(t,"H2",{class:!0});var Un=i(ne);Te=d(Un,"A",{id:!0,class:!0,href:!0});var gi=i(Te);Io=d(gi,"SPAN",{});var fi=i(Io);k(it.$$.fragment,fi),fi.forEach(o),gi.forEach(o),As=h(Un),Do=d(Un,"SPAN",{});var _i=i(Do);Ns=s(_i,"LongT5Model"),_i.forEach(o),Un.forEach(o),jn=h(t),j=d(t,"DIV",{class:!0});var Y=i(j);k(lt.$$.fragment,Y),Is=h(Y),Wo=d(Y,"P",{});var Ti=i(Wo);Ds=s(Ti,"The bare LONGT5 Model transformer outputting raw hidden-states without any specific head on top."),Ti.forEach(o),Ws=h(Y),ct=d(Y,"P",{});var Hn=i(ct);Bs=s(Hn,"The LongT5 model was proposed in "),pt=d(Hn,"A",{href:!0,rel:!0});var vi=i(pt);Us=s(vi,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),vi.forEach(o),Hs=s(Hn,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Hn.forEach(o),Vs=h(Y),ut=d(Y,"P",{});var Vn=i(ut);Ys=s(Vn,"This model inherits from "),to=d(Vn,"A",{href:!0});var bi=i(to);Rs=s(bi,"PreTrainedModel"),bi.forEach(o),Js=s(Vn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vn.forEach(o),Ks=h(Y),ht=d(Y,"P",{});var Yn=i(ht);Zs=s(Yn,"This model is also a PyTorch "),mt=d(Yn,"A",{href:!0,rel:!0});var ki=i(mt);Qs=s(ki,"torch.nn.Module"),ki.forEach(o),Xs=s(Yn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yn.forEach(o),er=h(Y),D=d(Y,"DIV",{class:!0});var We=i(D);k(gt.$$.fragment,We),tr=h(We),ae=d(We,"P",{});var po=i(ae);or=s(po,"The "),oo=d(po,"A",{href:!0});var yi=i(oo);nr=s(yi,"LongT5Model"),yi.forEach(o),ar=s(po," forward method, overrides the "),Bo=d(po,"CODE",{});var wi=i(Bo);sr=s(wi,"__call__"),wi.forEach(o),rr=s(po," special method."),po.forEach(o),dr=h(We),k(ve.$$.fragment,We),ir=h(We),k(be.$$.fragment,We),We.forEach(o),Y.forEach(o),Mn=h(t),se=d(t,"H2",{class:!0});var Rn=i(se);ke=d(Rn,"A",{id:!0,class:!0,href:!0});var $i=i(ke);Uo=d($i,"SPAN",{});var xi=i(Uo);k(ft.$$.fragment,xi),xi.forEach(o),$i.forEach(o),lr=h(Rn),Ho=d(Rn,"SPAN",{});var Li=i(Ho);cr=s(Li,"LongT5ForConditionalGeneration"),Li.forEach(o),Rn.forEach(o),Cn=h(t),M=d(t,"DIV",{class:!0});var R=i(M);k(_t.$$.fragment,R),pr=h(R),Tt=d(R,"P",{});var Jn=i(Tt);ur=s(Jn,"LONGT5 Model with a "),Vo=d(Jn,"CODE",{});var zi=i(Vo);hr=s(zi,"language modeling"),zi.forEach(o),mr=s(Jn," head on top."),Jn.forEach(o),gr=h(R),vt=d(R,"P",{});var Kn=i(vt);fr=s(Kn,"The LongT5 model was proposed in "),bt=d(Kn,"A",{href:!0,rel:!0});var qi=i(bt);_r=s(qi,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),qi.forEach(o),Tr=s(Kn,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),Kn.forEach(o),vr=h(R),kt=d(R,"P",{});var Zn=i(kt);br=s(Zn,"This model inherits from "),no=d(Zn,"A",{href:!0});var Fi=i(no);kr=s(Fi,"PreTrainedModel"),Fi.forEach(o),yr=s(Zn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zn.forEach(o),wr=h(R),yt=d(R,"P",{});var Qn=i(yt);$r=s(Qn,"This model is also a PyTorch "),wt=d(Qn,"A",{href:!0,rel:!0});var ji=i(wt);xr=s(ji,"torch.nn.Module"),ji.forEach(o),Lr=s(Qn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qn.forEach(o),zr=h(R),W=d(R,"DIV",{class:!0});var Be=i(W);k($t.$$.fragment,Be),qr=h(Be),re=d(Be,"P",{});var uo=i(re);Fr=s(uo,"The "),ao=d(uo,"A",{href:!0});var Mi=i(ao);jr=s(Mi,"LongT5ForConditionalGeneration"),Mi.forEach(o),Mr=s(uo," forward method, overrides the "),Yo=d(uo,"CODE",{});var Ci=i(Yo);Cr=s(Ci,"__call__"),Ci.forEach(o),Er=s(uo," special method."),uo.forEach(o),Or=h(Be),k(ye.$$.fragment,Be),Pr=h(Be),k(we.$$.fragment,Be),Be.forEach(o),R.forEach(o),En=h(t),de=d(t,"H2",{class:!0});var Xn=i(de);$e=d(Xn,"A",{id:!0,class:!0,href:!0});var Ei=i($e);Ro=d(Ei,"SPAN",{});var Oi=i(Ro);k(xt.$$.fragment,Oi),Oi.forEach(o),Ei.forEach(o),Gr=h(Xn),Jo=d(Xn,"SPAN",{});var Pi=i(Jo);Sr=s(Pi,"LongT5EncoderModel"),Pi.forEach(o),Xn.forEach(o),On=h(t),C=d(t,"DIV",{class:!0});var J=i(C);k(Lt.$$.fragment,J),Ar=h(J),Ko=d(J,"P",{});var Gi=i(Ko);Nr=s(Gi,"The bare LONGT5 Model transformer outputting encoder\u2019s raw hidden-states without any specific head on top."),Gi.forEach(o),Ir=h(J),zt=d(J,"P",{});var ea=i(zt);Dr=s(ea,"The LongT5 model was proposed in "),qt=d(ea,"A",{href:!0,rel:!0});var Si=i(qt);Wr=s(Si,`LongT5: Efficient Text-To-Text Transformer for Long
Sequences`),Si.forEach(o),Br=s(ea,` by Mandy Guo, Joshua Ainslie, David Uthus, Santiago Ontanon, Jianmo
Ni, Yun-Hsuan Sung and Yinfei Yang. It\u2019s an encoder-decoder transformer pre-trained in a text-to-text denoising
generative setting. LongT5 model is an extension of T5 model, and it enables using one of the two different
efficient attention mechanisms - (1) Local attention, or (2) Transient-Global attention.`),ea.forEach(o),Ur=h(J),Ft=d(J,"P",{});var ta=i(Ft);Hr=s(ta,"This model inherits from "),so=d(ta,"A",{href:!0});var Ai=i(so);Vr=s(Ai,"PreTrainedModel"),Ai.forEach(o),Yr=s(ta,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ta.forEach(o),Rr=h(J),jt=d(J,"P",{});var oa=i(jt);Jr=s(oa,"This model is also a PyTorch "),Mt=d(oa,"A",{href:!0,rel:!0});var Ni=i(Mt);Kr=s(Ni,"torch.nn.Module"),Ni.forEach(o),Zr=s(oa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oa.forEach(o),Qr=h(J),B=d(J,"DIV",{class:!0});var Ue=i(B);k(Ct.$$.fragment,Ue),Xr=h(Ue),ie=d(Ue,"P",{});var ho=i(ie);ed=s(ho,"The "),ro=d(ho,"A",{href:!0});var Ii=i(ro);td=s(Ii,"LongT5EncoderModel"),Ii.forEach(o),od=s(ho," forward method, overrides the "),Zo=d(ho,"CODE",{});var Di=i(Zo);nd=s(Di,"__call__"),Di.forEach(o),ad=s(ho," special method."),ho.forEach(o),sd=h(Ue),k(xe.$$.fragment,Ue),rd=h(Ue),k(Le.$$.fragment,Ue),Ue.forEach(o),J.forEach(o),Pn=h(t),le=d(t,"H2",{class:!0});var na=i(le);ze=d(na,"A",{id:!0,class:!0,href:!0});var Wi=i(ze);Qo=d(Wi,"SPAN",{});var Bi=i(Qo);k(Et.$$.fragment,Bi),Bi.forEach(o),Wi.forEach(o),dd=h(na),Xo=d(na,"SPAN",{});var Ui=i(Xo);id=s(Ui,"FlaxLongT5Model"),Ui.forEach(o),na.forEach(o),Gn=h(t),A=d(t,"DIV",{class:!0});var He=i(A);k(Ot.$$.fragment,He),ld=h(He),U=d(He,"DIV",{class:!0});var Ve=i(U);k(Pt.$$.fragment,Ve),cd=h(Ve),ce=d(Ve,"P",{});var mo=i(ce);pd=s(mo,"The "),en=d(mo,"CODE",{});var Hi=i(en);ud=s(Hi,"FlaxLongT5PreTrainedModel"),Hi.forEach(o),hd=s(mo," forward method, overrides the "),tn=d(mo,"CODE",{});var Vi=i(tn);md=s(Vi,"__call__"),Vi.forEach(o),gd=s(mo," special method."),mo.forEach(o),fd=h(Ve),k(qe.$$.fragment,Ve),_d=h(Ve),k(Fe.$$.fragment,Ve),Ve.forEach(o),Td=h(He),je=d(He,"DIV",{class:!0});var aa=i(je);k(Gt.$$.fragment,aa),vd=h(aa),k(Me.$$.fragment,aa),aa.forEach(o),bd=h(He),Ce=d(He,"DIV",{class:!0});var sa=i(Ce);k(St.$$.fragment,sa),kd=h(sa),k(Ee.$$.fragment,sa),sa.forEach(o),He.forEach(o),Sn=h(t),pe=d(t,"H2",{class:!0});var ra=i(pe);Oe=d(ra,"A",{id:!0,class:!0,href:!0});var Yi=i(Oe);on=d(Yi,"SPAN",{});var Ri=i(on);k(At.$$.fragment,Ri),Ri.forEach(o),Yi.forEach(o),yd=h(ra),nn=d(ra,"SPAN",{});var Ji=i(nn);wd=s(Ji,"FlaxLongT5ForConditionalGeneration"),Ji.forEach(o),ra.forEach(o),An=h(t),N=d(t,"DIV",{class:!0});var Ye=i(N);k(Nt.$$.fragment,Ye),$d=h(Ye),H=d(Ye,"DIV",{class:!0});var Re=i(H);k(It.$$.fragment,Re),xd=h(Re),ue=d(Re,"P",{});var go=i(ue);Ld=s(go,"The "),an=d(go,"CODE",{});var Ki=i(an);zd=s(Ki,"FlaxLongT5PreTrainedModel"),Ki.forEach(o),qd=s(go," forward method, overrides the "),sn=d(go,"CODE",{});var Zi=i(sn);Fd=s(Zi,"__call__"),Zi.forEach(o),jd=s(go," special method."),go.forEach(o),Md=h(Re),k(Pe.$$.fragment,Re),Cd=h(Re),k(Ge.$$.fragment,Re),Re.forEach(o),Ed=h(Ye),Se=d(Ye,"DIV",{class:!0});var da=i(Se);k(Dt.$$.fragment,da),Od=h(da),k(Ae.$$.fragment,da),da.forEach(o),Pd=h(Ye),Ne=d(Ye,"DIV",{class:!0});var ia=i(Ne);k(Wt.$$.fragment,ia),Gd=h(ia),k(Ie.$$.fragment,ia),ia.forEach(o),Ye.forEach(o),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(Tl)),g(p,"id","longt5"),g(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(p,"href","#longt5"),g(m,"class","relative group"),g(ge,"id","overview"),g(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ge,"href","#overview"),g(ee,"class","relative group"),g(Ze,"href","https://arxiv.org/abs/2112.07916"),g(Ze,"rel","nofollow"),g(Jt,"href","/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5ForConditionalGeneration"),g(Kt,"href","/docs/transformers/v4.21.2/en/model_doc/t5#transformers.T5ForConditionalGeneration"),g(tt,"href","https://huggingface.co/datasets/scientific_papers"),g(tt,"rel","nofollow"),g(nt,"href","https://huggingface.co/stancld"),g(nt,"rel","nofollow"),g(at,"href","https://github.com/google-research/longt5"),g(at,"rel","nofollow"),g(_e,"id","transformers.LongT5Config"),g(_e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_e,"href","#transformers.LongT5Config"),g(te,"class","relative group"),g(Zt,"href","/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Model"),g(Qt,"href","/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.FlaxLongT5Model"),g(dt,"href","https://huggingface.co/google/long-t5-local-base"),g(dt,"rel","nofollow"),g(Xt,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),g(eo,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),g(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Te,"id","transformers.LongT5Model"),g(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Te,"href","#transformers.LongT5Model"),g(ne,"class","relative group"),g(pt,"href","https://arxiv.org/abs/2112.07916"),g(pt,"rel","nofollow"),g(to,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),g(mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(mt,"rel","nofollow"),g(oo,"href","/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5Model"),g(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ke,"id","transformers.LongT5ForConditionalGeneration"),g(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ke,"href","#transformers.LongT5ForConditionalGeneration"),g(se,"class","relative group"),g(bt,"href","https://arxiv.org/abs/2112.07916"),g(bt,"rel","nofollow"),g(no,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),g(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(wt,"rel","nofollow"),g(ao,"href","/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5ForConditionalGeneration"),g(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($e,"id","transformers.LongT5EncoderModel"),g($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g($e,"href","#transformers.LongT5EncoderModel"),g(de,"class","relative group"),g(qt,"href","https://arxiv.org/abs/2112.07916"),g(qt,"rel","nofollow"),g(so,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),g(Mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Mt,"rel","nofollow"),g(ro,"href","/docs/transformers/v4.21.2/en/model_doc/longt5#transformers.LongT5EncoderModel"),g(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ze,"id","transformers.FlaxLongT5Model"),g(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ze,"href","#transformers.FlaxLongT5Model"),g(le,"class","relative group"),g(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Oe,"id","transformers.FlaxLongT5ForConditionalGeneration"),g(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Oe,"href","#transformers.FlaxLongT5ForConditionalGeneration"),g(pe,"class","relative group"),g(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,l),T(t,v,f),T(t,m,f),e(m,p),e(p,_),y(n,_,null),e(m,c),e(m,z),e(z,la),T(t,vn,f),T(t,ee,f),e(ee,ge),e(ge,fo),y(Ke,fo,null),e(ee,ca),e(ee,_o),e(_o,pa),T(t,bn,f),T(t,fe,f),e(fe,ua),e(fe,Ze),e(Ze,ha),e(fe,ma),T(t,kn,f),T(t,Vt,f),e(Vt,ga),T(t,yn,f),T(t,Yt,f),e(Yt,To),e(To,fa),T(t,wn,f),T(t,Rt,f),e(Rt,_a),T(t,$n,f),T(t,E,f),e(E,O),e(O,Jt),e(Jt,Ta),e(O,va),e(O,Kt),e(Kt,ba),e(O,ka),e(O,vo),e(vo,ya),e(O,wa),e(O,bo),e(bo,$a),e(O,xa),e(O,ko),e(ko,La),e(O,za),e(O,yo),e(yo,qa),e(O,Fa),e(E,ja),e(E,Qe),e(Qe,Ma),e(Qe,wo),e(wo,Ca),e(Qe,Ea),e(E,Oa),e(E,Xe),e(Xe,Pa),e(Xe,$o),e($o,Ga),e(Xe,Sa),e(E,Aa),e(E,F),e(F,Na),e(F,xo),e(xo,Ia),e(F,Da),e(F,Lo),e(Lo,Wa),e(F,Ba),e(F,zo),e(zo,Ua),e(F,Ha),e(F,qo),e(qo,Va),e(F,Ya),e(F,Fo),e(Fo,Ra),e(F,Ja),e(F,jo),e(jo,Ka),e(F,Za),e(E,Qa),e(E,q),e(q,Mo),e(Mo,Xa),e(q,es),e(q,Co),e(Co,ts),e(q,os),e(q,Eo),e(Eo,ns),e(q,as),e(q,Oo),e(Oo,ss),e(q,rs),e(q,Po),e(Po,ds),e(q,is),e(q,Go),e(Go,ls),e(q,cs),e(q,So),e(So,ps),e(q,us),e(E,hs),e(E,et),e(et,ms),e(et,tt),e(tt,gs),e(et,fs),T(t,xn,f),y(ot,t,f),T(t,Ln,f),T(t,Q,f),e(Q,_s),e(Q,nt),e(nt,Ts),e(Q,vs),e(Q,at),e(at,bs),e(Q,ks),T(t,zn,f),T(t,te,f),e(te,_e),e(_e,Ao),y(st,Ao,null),e(te,ys),e(te,No),e(No,ws),T(t,qn,f),T(t,K,f),y(rt,K,null),e(K,$s),e(K,Z),e(Z,xs),e(Z,Zt),e(Zt,Ls),e(Z,zs),e(Z,Qt),e(Qt,qs),e(Z,Fs),e(Z,dt),e(dt,js),e(Z,Ms),e(K,Cs),e(K,oe),e(oe,Es),e(oe,Xt),e(Xt,Os),e(oe,Ps),e(oe,eo),e(eo,Gs),e(oe,Ss),T(t,Fn,f),T(t,ne,f),e(ne,Te),e(Te,Io),y(it,Io,null),e(ne,As),e(ne,Do),e(Do,Ns),T(t,jn,f),T(t,j,f),y(lt,j,null),e(j,Is),e(j,Wo),e(Wo,Ds),e(j,Ws),e(j,ct),e(ct,Bs),e(ct,pt),e(pt,Us),e(ct,Hs),e(j,Vs),e(j,ut),e(ut,Ys),e(ut,to),e(to,Rs),e(ut,Js),e(j,Ks),e(j,ht),e(ht,Zs),e(ht,mt),e(mt,Qs),e(ht,Xs),e(j,er),e(j,D),y(gt,D,null),e(D,tr),e(D,ae),e(ae,or),e(ae,oo),e(oo,nr),e(ae,ar),e(ae,Bo),e(Bo,sr),e(ae,rr),e(D,dr),y(ve,D,null),e(D,ir),y(be,D,null),T(t,Mn,f),T(t,se,f),e(se,ke),e(ke,Uo),y(ft,Uo,null),e(se,lr),e(se,Ho),e(Ho,cr),T(t,Cn,f),T(t,M,f),y(_t,M,null),e(M,pr),e(M,Tt),e(Tt,ur),e(Tt,Vo),e(Vo,hr),e(Tt,mr),e(M,gr),e(M,vt),e(vt,fr),e(vt,bt),e(bt,_r),e(vt,Tr),e(M,vr),e(M,kt),e(kt,br),e(kt,no),e(no,kr),e(kt,yr),e(M,wr),e(M,yt),e(yt,$r),e(yt,wt),e(wt,xr),e(yt,Lr),e(M,zr),e(M,W),y($t,W,null),e(W,qr),e(W,re),e(re,Fr),e(re,ao),e(ao,jr),e(re,Mr),e(re,Yo),e(Yo,Cr),e(re,Er),e(W,Or),y(ye,W,null),e(W,Pr),y(we,W,null),T(t,En,f),T(t,de,f),e(de,$e),e($e,Ro),y(xt,Ro,null),e(de,Gr),e(de,Jo),e(Jo,Sr),T(t,On,f),T(t,C,f),y(Lt,C,null),e(C,Ar),e(C,Ko),e(Ko,Nr),e(C,Ir),e(C,zt),e(zt,Dr),e(zt,qt),e(qt,Wr),e(zt,Br),e(C,Ur),e(C,Ft),e(Ft,Hr),e(Ft,so),e(so,Vr),e(Ft,Yr),e(C,Rr),e(C,jt),e(jt,Jr),e(jt,Mt),e(Mt,Kr),e(jt,Zr),e(C,Qr),e(C,B),y(Ct,B,null),e(B,Xr),e(B,ie),e(ie,ed),e(ie,ro),e(ro,td),e(ie,od),e(ie,Zo),e(Zo,nd),e(ie,ad),e(B,sd),y(xe,B,null),e(B,rd),y(Le,B,null),T(t,Pn,f),T(t,le,f),e(le,ze),e(ze,Qo),y(Et,Qo,null),e(le,dd),e(le,Xo),e(Xo,id),T(t,Gn,f),T(t,A,f),y(Ot,A,null),e(A,ld),e(A,U),y(Pt,U,null),e(U,cd),e(U,ce),e(ce,pd),e(ce,en),e(en,ud),e(ce,hd),e(ce,tn),e(tn,md),e(ce,gd),e(U,fd),y(qe,U,null),e(U,_d),y(Fe,U,null),e(A,Td),e(A,je),y(Gt,je,null),e(je,vd),y(Me,je,null),e(A,bd),e(A,Ce),y(St,Ce,null),e(Ce,kd),y(Ee,Ce,null),T(t,Sn,f),T(t,pe,f),e(pe,Oe),e(Oe,on),y(At,on,null),e(pe,yd),e(pe,nn),e(nn,wd),T(t,An,f),T(t,N,f),y(Nt,N,null),e(N,$d),e(N,H),y(It,H,null),e(H,xd),e(H,ue),e(ue,Ld),e(ue,an),e(an,zd),e(ue,qd),e(ue,sn),e(sn,Fd),e(ue,jd),e(H,Md),y(Pe,H,null),e(H,Cd),y(Ge,H,null),e(N,Ed),e(N,Se),y(Dt,Se,null),e(Se,Od),y(Ae,Se,null),e(N,Pd),e(N,Ne),y(Wt,Ne,null),e(Ne,Gd),y(Ie,Ne,null),Nn=!0},p(t,[f]){const Bt={};f&2&&(Bt.$$scope={dirty:f,ctx:t}),ve.$set(Bt);const rn={};f&2&&(rn.$$scope={dirty:f,ctx:t}),be.$set(rn);const dn={};f&2&&(dn.$$scope={dirty:f,ctx:t}),ye.$set(dn);const ln={};f&2&&(ln.$$scope={dirty:f,ctx:t}),we.$set(ln);const Ut={};f&2&&(Ut.$$scope={dirty:f,ctx:t}),xe.$set(Ut);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:t}),Le.$set(cn);const pn={};f&2&&(pn.$$scope={dirty:f,ctx:t}),qe.$set(pn);const un={};f&2&&(un.$$scope={dirty:f,ctx:t}),Fe.$set(un);const Ht={};f&2&&(Ht.$$scope={dirty:f,ctx:t}),Me.$set(Ht);const hn={};f&2&&(hn.$$scope={dirty:f,ctx:t}),Ee.$set(hn);const mn={};f&2&&(mn.$$scope={dirty:f,ctx:t}),Pe.$set(mn);const gn={};f&2&&(gn.$$scope={dirty:f,ctx:t}),Ge.$set(gn);const fn={};f&2&&(fn.$$scope={dirty:f,ctx:t}),Ae.$set(fn);const _n={};f&2&&(_n.$$scope={dirty:f,ctx:t}),Ie.$set(_n)},i(t){Nn||(w(n.$$.fragment,t),w(Ke.$$.fragment,t),w(ot.$$.fragment,t),w(st.$$.fragment,t),w(rt.$$.fragment,t),w(it.$$.fragment,t),w(lt.$$.fragment,t),w(gt.$$.fragment,t),w(ve.$$.fragment,t),w(be.$$.fragment,t),w(ft.$$.fragment,t),w(_t.$$.fragment,t),w($t.$$.fragment,t),w(ye.$$.fragment,t),w(we.$$.fragment,t),w(xt.$$.fragment,t),w(Lt.$$.fragment,t),w(Ct.$$.fragment,t),w(xe.$$.fragment,t),w(Le.$$.fragment,t),w(Et.$$.fragment,t),w(Ot.$$.fragment,t),w(Pt.$$.fragment,t),w(qe.$$.fragment,t),w(Fe.$$.fragment,t),w(Gt.$$.fragment,t),w(Me.$$.fragment,t),w(St.$$.fragment,t),w(Ee.$$.fragment,t),w(At.$$.fragment,t),w(Nt.$$.fragment,t),w(It.$$.fragment,t),w(Pe.$$.fragment,t),w(Ge.$$.fragment,t),w(Dt.$$.fragment,t),w(Ae.$$.fragment,t),w(Wt.$$.fragment,t),w(Ie.$$.fragment,t),Nn=!0)},o(t){$(n.$$.fragment,t),$(Ke.$$.fragment,t),$(ot.$$.fragment,t),$(st.$$.fragment,t),$(rt.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(gt.$$.fragment,t),$(ve.$$.fragment,t),$(be.$$.fragment,t),$(ft.$$.fragment,t),$(_t.$$.fragment,t),$($t.$$.fragment,t),$(ye.$$.fragment,t),$(we.$$.fragment,t),$(xt.$$.fragment,t),$(Lt.$$.fragment,t),$(Ct.$$.fragment,t),$(xe.$$.fragment,t),$(Le.$$.fragment,t),$(Et.$$.fragment,t),$(Ot.$$.fragment,t),$(Pt.$$.fragment,t),$(qe.$$.fragment,t),$(Fe.$$.fragment,t),$(Gt.$$.fragment,t),$(Me.$$.fragment,t),$(St.$$.fragment,t),$(Ee.$$.fragment,t),$(At.$$.fragment,t),$(Nt.$$.fragment,t),$(It.$$.fragment,t),$(Pe.$$.fragment,t),$(Ge.$$.fragment,t),$(Dt.$$.fragment,t),$(Ae.$$.fragment,t),$(Wt.$$.fragment,t),$(Ie.$$.fragment,t),Nn=!1},d(t){o(l),t&&o(v),t&&o(m),x(n),t&&o(vn),t&&o(ee),x(Ke),t&&o(bn),t&&o(fe),t&&o(kn),t&&o(Vt),t&&o(yn),t&&o(Yt),t&&o(wn),t&&o(Rt),t&&o($n),t&&o(E),t&&o(xn),x(ot,t),t&&o(Ln),t&&o(Q),t&&o(zn),t&&o(te),x(st),t&&o(qn),t&&o(K),x(rt),t&&o(Fn),t&&o(ne),x(it),t&&o(jn),t&&o(j),x(lt),x(gt),x(ve),x(be),t&&o(Mn),t&&o(se),x(ft),t&&o(Cn),t&&o(M),x(_t),x($t),x(ye),x(we),t&&o(En),t&&o(de),x(xt),t&&o(On),t&&o(C),x(Lt),x(Ct),x(xe),x(Le),t&&o(Pn),t&&o(le),x(Et),t&&o(Gn),t&&o(A),x(Ot),x(Pt),x(qe),x(Fe),x(Gt),x(Me),x(St),x(Ee),t&&o(Sn),t&&o(pe),x(At),t&&o(An),t&&o(N),x(Nt),x(It),x(Pe),x(Ge),x(Dt),x(Ae),x(Wt),x(Ie)}}}const Tl={local:"longt5",sections:[{local:"overview",title:"Overview"},{local:"transformers.LongT5Config",title:"LongT5Config"},{local:"transformers.LongT5Model",title:"LongT5Model"},{local:"transformers.LongT5ForConditionalGeneration",title:"LongT5ForConditionalGeneration"},{local:"transformers.LongT5EncoderModel",title:"LongT5EncoderModel"},{local:"transformers.FlaxLongT5Model",title:"FlaxLongT5Model"},{local:"transformers.FlaxLongT5ForConditionalGeneration",title:"FlaxLongT5ForConditionalGeneration"}],title:"LongT5"};function vl(L){return ol(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ll extends Qi{constructor(l){super();Xi(this,l,vl,_l,el,{})}}export{Ll as default,Tl as metadata};
