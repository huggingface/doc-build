import{S as Uc,i as Kc,s as Rc,e as a,k as c,w as b,t as o,M as Vc,c as i,d as t,m as p,a as r,x as v,h as s,b as d,G as e,g as _,y as T,q as w,o as L,B as E,v as Hc,L as Qo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ho}from"../../chunks/Tip-hf-doc-builder.js";import{D as S}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Wn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Te}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Yo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Yc(z){let h,y,g,f,k;return f=new Wn({props:{code:`from transformers import LukeConfig, LukeModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function Qc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=i(u,"CODE",{});var $=r(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function Gc(z){let h,y,g,f,k;return f=new Wn({props:{code:`from transformers import LukeTokenizer, LukeModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function Jc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=i(u,"CODE",{});var $=r(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function Xc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=i(u,"CODE",{});var $=r(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function Zc(z){let h,y,g,f,k;return f=new Wn({props:{code:`from transformers import LukeTokenizer, LukeForEntityClassification

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
Predicted <span class="hljs-keyword">class</span>: person`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function ep(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=i(u,"CODE",{});var $=r(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function tp(z){let h,y,g,f,k;return f=new Wn({props:{code:`from transformers import LukeTokenizer, LukeForEntityPairClassification

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
Predicted <span class="hljs-keyword">class</span>: per:cities_of_residence`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function np(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=i(u,"CODE",{});var $=r(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function op(z){let h,y,g,f,k;return f=new Wn({props:{code:`from transformers import LukeTokenizer, LukeForEntitySpanClassification

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
Los Angeles LOC`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=i(l,"P",{});var u=r(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function sp(z){let h,y,g,f,k,l,u,$,Bs,Go,se,we,Bn,Xe,Us,Un,Ks,Jo,Le,Rs,Ze,Vs,Hs,Xo,Xt,Ys,Zo,Zt,Kn,Qs,es,en,Gs,ts,W,Rn,et,Js,tn,Xs,Zs,ea,Vn,q,ta,Hn,na,oa,Yn,sa,aa,Qn,ia,ra,Gn,la,da,nn,ca,pa,ha,tt,B,on,ua,ma,Jn,fa,ga,Xn,_a,ka,Zn,ya,ba,va,nt,sn,eo,Ta,wa,La,an,to,Ea,za,$a,N,no,xa,Ca,ae,Ee,rn,qa,Fa,ot,Ma,ja,Pa,ze,ln,Aa,Ia,st,Oa,Sa,Na,dn,cn,Da,Wa,Ba,O,pn,Ua,Ka,oo,Ra,Va,so,Ha,Ya,ao,Qa,Ga,io,Ja,Xa,Za,ie,ei,hn,ti,ni,at,oi,si,ai,it,ii,rt,ri,li,ns,un,di,os,lt,ss,U,ci,dt,pi,hi,ct,ui,mi,pt,fi,gi,as,re,$e,ro,ht,_i,lo,ki,is,D,ut,yi,le,bi,mn,vi,Ti,mt,wi,Li,Ei,de,zi,fn,$i,xi,gn,Ci,qi,Fi,xe,rs,ce,Ce,co,ft,Mi,po,ji,ls,F,gt,Pi,ho,Ai,Ii,x,Oi,_n,Si,Ni,kn,Di,Wi,yn,Bi,Ui,uo,Ki,Ri,mo,Vi,Hi,fo,Yi,Qi,go,Gi,Ji,Xi,qe,_t,Zi,_o,er,tr,bn,kt,ds,pe,Fe,ko,yt,nr,yo,or,cs,M,bt,sr,bo,ar,ir,vt,rr,vn,lr,dr,cr,Tt,pr,wt,hr,ur,mr,K,Lt,fr,he,gr,Tn,_r,kr,vo,yr,br,vr,Me,Tr,je,ps,ue,Pe,To,Et,wr,wo,Lr,hs,j,zt,Er,Lo,zr,$r,$t,xr,wn,Cr,qr,Fr,xt,Mr,Ct,jr,Pr,Ar,G,qt,Ir,me,Or,Ln,Sr,Nr,Eo,Dr,Wr,Br,Ae,us,fe,Ie,zo,Ft,Ur,$o,Kr,ms,P,Mt,Rr,xo,Vr,Hr,jt,Yr,En,Qr,Gr,Jr,Pt,Xr,At,Zr,el,tl,R,It,nl,ge,ol,zn,sl,al,Co,il,rl,ll,Oe,dl,Se,fs,_e,Ne,qo,Ot,cl,Fo,pl,gs,A,St,hl,Mo,ul,ml,Nt,fl,$n,gl,_l,kl,Dt,yl,Wt,bl,vl,Tl,V,Bt,wl,ke,Ll,xn,El,zl,jo,$l,xl,Cl,De,ql,We,_s,ye,Be,Po,Ut,Fl,Ao,Ml,ks,I,Kt,jl,Io,Pl,Al,Rt,Il,Cn,Ol,Sl,Nl,Vt,Dl,Ht,Wl,Bl,Ul,H,Yt,Kl,be,Rl,qn,Vl,Hl,Oo,Yl,Ql,Gl,Ue,Jl,Ke,ys;return l=new Te({}),Xe=new Te({}),lt=new Wn({props:{code:`from transformers import LukeTokenizer, LukeModel, LukeForEntityPairClassification

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),ht=new Te({}),ut=new S({props:{name:"class transformers.LukeConfig",anchor:"transformers.LukeConfig",parameters:[{name:"vocab_size",val:" = 50267"},{name:"entity_vocab_size",val:" = 500000"},{name:"hidden_size",val:" = 768"},{name:"entity_emb_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_entity_aware_attention",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
al.)</a>.`,name:"use_entity_aware_attention"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/configuration_luke.py#L29"}}),xe=new Yo({props:{anchor:"transformers.LukeConfig.example",$$slots:{default:[Yc]},$$scope:{ctx:z}}}),ft=new Te({}),gt=new S({props:{name:"class transformers.LukeTokenizer",anchor:"transformers.LukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"entity_vocab_file",val:""},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"entity_unk_token",val:" = '[UNK]'"},{name:"entity_pad_token",val:" = '[PAD]'"},{name:"entity_mask_token",val:" = '[MASK]'"},{name:"entity_mask2_token",val:" = '[MASK2]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<code>task</code> is set to <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_2"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/tokenization_luke.py#L152"}}),_t=new S({props:{name:"__call__",anchor:"transformers.LukeTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"entity_spans",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entity_spans_pair",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entities",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"entities_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_entity_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": typing.Optional[bool] = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
`}}),kt=new S({props:{name:"save_vocabulary",anchor:"transformers.LukeTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/tokenization_luke.py#L1381"}}),yt=new Te({}),bt=new S({props:{name:"class transformers.LukeModel",anchor:"transformers.LukeModel",parameters:[{name:"config",val:": LukeConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.LukeModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L881"}}),Lt=new S({props:{name:"forward",anchor:"transformers.LukeModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeModel.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L913",returnDescription:`
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
`}}),Me=new Ho({props:{$$slots:{default:[Qc]},$$scope:{ctx:z}}}),je=new Yo({props:{anchor:"transformers.LukeModel.forward.example",$$slots:{default:[Gc]},$$scope:{ctx:z}}}),Et=new Te({}),zt=new S({props:{name:"class transformers.LukeForMaskedLM",anchor:"transformers.LukeForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1134"}}),qt=new S({props:{name:"forward",anchor:"transformers.LukeForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"entity_labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1170",returnDescription:`
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
`}}),Ae=new Ho({props:{$$slots:{default:[Jc]},$$scope:{ctx:z}}}),Ft=new Te({}),Mt=new S({props:{name:"class transformers.LukeForEntityClassification",anchor:"transformers.LukeForEntityClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1272"}}),It=new S({props:{name:"forward",anchor:"transformers.LukeForEntityClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1285",returnDescription:`
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
`}}),Oe=new Ho({props:{$$slots:{default:[Xc]},$$scope:{ctx:z}}}),Se=new Yo({props:{anchor:"transformers.LukeForEntityClassification.forward.example",$$slots:{default:[Zc]},$$scope:{ctx:z}}}),Ot=new Te({}),St=new S({props:{name:"class transformers.LukeForEntityPairClassification",anchor:"transformers.LukeForEntityPairClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1387"}}),Bt=new S({props:{name:"forward",anchor:"transformers.LukeForEntityPairClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1400",returnDescription:`
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
`}}),De=new Ho({props:{$$slots:{default:[ep]},$$scope:{ctx:z}}}),We=new Yo({props:{anchor:"transformers.LukeForEntityPairClassification.forward.example",$$slots:{default:[tp]},$$scope:{ctx:z}}}),Ut=new Te({}),Kt=new S({props:{name:"class transformers.LukeForEntitySpanClassification",anchor:"transformers.LukeForEntitySpanClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1507"}}),Yt=new S({props:{name:"forward",anchor:"transformers.LukeForEntitySpanClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
labels should only contain <code>[0, 1]</code>, where 0 and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1520",returnDescription:`
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
`}}),Ue=new Ho({props:{$$slots:{default:[np]},$$scope:{ctx:z}}}),Ke=new Yo({props:{anchor:"transformers.LukeForEntitySpanClassification.forward.example",$$slots:{default:[op]},$$scope:{ctx:z}}}),{c(){h=a("meta"),y=c(),g=a("h1"),f=a("a"),k=a("span"),b(l.$$.fragment),u=c(),$=a("span"),Bs=o("LUKE"),Go=c(),se=a("h2"),we=a("a"),Bn=a("span"),b(Xe.$$.fragment),Us=c(),Un=a("span"),Ks=o("Overview"),Jo=c(),Le=a("p"),Rs=o("The LUKE model was proposed in "),Ze=a("a"),Vs=o("LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),Hs=o(` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`),Xo=c(),Xt=a("p"),Ys=o("The abstract from the paper is the following:"),Zo=c(),Zt=a("p"),Kn=a("em"),Qs=o(`Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).`),es=c(),en=a("p"),Gs=o("Tips:"),ts=c(),W=a("ul"),Rn=a("li"),et=a("p"),Js=o("This implementation is the same as "),tn=a("a"),Xs=o("RobertaModel"),Zs=o(` with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),ea=c(),Vn=a("li"),q=a("p"),ta=o("LUKE treats entities as input tokens; therefore, it takes "),Hn=a("code"),na=o("entity_ids"),oa=o(", "),Yn=a("code"),sa=o("entity_attention_mask"),aa=o(`,
`),Qn=a("code"),ia=o("entity_token_type_ids"),ra=o(" and "),Gn=a("code"),la=o("entity_position_ids"),da=o(` as extra input. You can obtain those using
`),nn=a("a"),ca=o("LukeTokenizer"),pa=o("."),ha=c(),tt=a("li"),B=a("p"),on=a("a"),ua=o("LukeTokenizer"),ma=o(" takes "),Jn=a("code"),fa=o("entities"),ga=o(" and "),Xn=a("code"),_a=o("entity_spans"),ka=o(` (character-based start and end
positions of the entities in the input text) as extra input. `),Zn=a("code"),ya=o("entities"),ba=o(` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),va=c(),nt=a("ul"),sn=a("li"),eo=a("em"),Ta=o("Inputting [MASK] entities to compute entity representations"),wa=o(`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),La=c(),an=a("li"),to=a("em"),Ea=o("Inputting Wikipedia entities to compute knowledge-enhanced token representations"),za=o(`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),$a=c(),N=a("li"),no=a("p"),xa=o("There are three head models for the former use case:"),Ca=c(),ae=a("ul"),Ee=a("li"),rn=a("a"),qa=o("LukeForEntityClassification"),Fa=o(`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),ot=a("a"),Ma=o("Open Entity dataset"),ja=o(`.
This model places a linear head on top of the output entity representation.`),Pa=c(),ze=a("li"),ln=a("a"),Aa=o("LukeForEntityPairClassification"),Ia=o(`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),st=a("a"),Oa=o("TACRED dataset"),Sa=o(`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),Na=c(),dn=a("li"),cn=a("a"),Da=o("LukeForEntitySpanClassification"),Wa=o(`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),Ba=c(),O=a("p"),pn=a("a"),Ua=o("LukeTokenizer"),Ka=o(" has a "),oo=a("code"),Ra=o("task"),Va=o(` argument, which enables you to easily create an input to these
head models by specifying `),so=a("code"),Ha=o('task="entity_classification"'),Ya=o(", "),ao=a("code"),Qa=o('task="entity_pair_classification"'),Ga=o(`, or
`),io=a("code"),Ja=o('task="entity_span_classification"'),Xa=o(". Please refer to the example code of each head models."),Za=c(),ie=a("p"),ei=o("A demo notebook on how to fine-tune "),hn=a("a"),ti=o("LukeForEntityPairClassification"),ni=o(` for relation
classification can be found `),at=a("a"),oi=o("here"),si=o("."),ai=c(),it=a("p"),ii=o(`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),rt=a("a"),ri=o("here"),li=o("."),ns=c(),un=a("p"),di=o("Example:"),os=c(),b(lt.$$.fragment),ss=c(),U=a("p"),ci=o("This model was contributed by "),dt=a("a"),pi=o("ikuyamada"),hi=o(" and "),ct=a("a"),ui=o("nielsr"),mi=o(". The original code can be found "),pt=a("a"),fi=o("here"),gi=o("."),as=c(),re=a("h2"),$e=a("a"),ro=a("span"),b(ht.$$.fragment),_i=c(),lo=a("span"),ki=o("LukeConfig"),is=c(),D=a("div"),b(ut.$$.fragment),yi=c(),le=a("p"),bi=o("This is the configuration class to store the configuration of a "),mn=a("a"),vi=o("LukeModel"),Ti=o(`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LUKE
`),mt=a("a"),wi=o("studio-ousia/luke-base"),Li=o(" architecture."),Ei=c(),de=a("p"),zi=o("Configuration objects inherit from "),fn=a("a"),$i=o("PretrainedConfig"),xi=o(` and can be used to control the model outputs. Read the
documentation from `),gn=a("a"),Ci=o("PretrainedConfig"),qi=o(" for more information."),Fi=c(),b(xe.$$.fragment),rs=c(),ce=a("h2"),Ce=a("a"),co=a("span"),b(ft.$$.fragment),Mi=c(),po=a("span"),ji=o("LukeTokenizer"),ls=c(),F=a("div"),b(gt.$$.fragment),Pi=c(),ho=a("p"),Ai=o("Construct a LUKE tokenizer."),Ii=c(),x=a("p"),Oi=o("This tokenizer inherits from "),_n=a("a"),Si=o("RobertaTokenizer"),Ni=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),kn=a("a"),Di=o("RobertaTokenizer"),Wi=o(", "),yn=a("a"),Bi=o("LukeTokenizer"),Ui=o(`
also creates entity sequences, namely `),uo=a("code"),Ki=o("entity_ids"),Ri=o(", "),mo=a("code"),Vi=o("entity_attention_mask"),Hi=o(", "),fo=a("code"),Yi=o("entity_token_type_ids"),Qi=o(`, and
`),go=a("code"),Gi=o("entity_position_ids"),Ji=o(" to be used by the LUKE model."),Xi=c(),qe=a("div"),b(_t.$$.fragment),Zi=c(),_o=a("p"),er=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),tr=c(),bn=a("div"),b(kt.$$.fragment),ds=c(),pe=a("h2"),Fe=a("a"),ko=a("span"),b(yt.$$.fragment),nr=c(),yo=a("span"),or=o("LukeModel"),cs=c(),M=a("div"),b(bt.$$.fragment),sr=c(),bo=a("p"),ar=o("The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),ir=c(),vt=a("p"),rr=o("This model inherits from "),vn=a("a"),lr=o("PreTrainedModel"),dr=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cr=c(),Tt=a("p"),pr=o("This model is also a PyTorch "),wt=a("a"),hr=o("torch.nn.Module"),ur=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mr=c(),K=a("div"),b(Lt.$$.fragment),fr=c(),he=a("p"),gr=o("The "),Tn=a("a"),_r=o("LukeModel"),kr=o(" forward method, overrides the "),vo=a("code"),yr=o("__call__"),br=o(" special method."),vr=c(),b(Me.$$.fragment),Tr=c(),b(je.$$.fragment),ps=c(),ue=a("h2"),Pe=a("a"),To=a("span"),b(Et.$$.fragment),wr=c(),wo=a("span"),Lr=o("LukeForMaskedLM"),hs=c(),j=a("div"),b(zt.$$.fragment),Er=c(),Lo=a("p"),zr=o(`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),$r=c(),$t=a("p"),xr=o("This model inherits from "),wn=a("a"),Cr=o("PreTrainedModel"),qr=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fr=c(),xt=a("p"),Mr=o("This model is also a PyTorch "),Ct=a("a"),jr=o("torch.nn.Module"),Pr=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ar=c(),G=a("div"),b(qt.$$.fragment),Ir=c(),me=a("p"),Or=o("The "),Ln=a("a"),Sr=o("LukeForMaskedLM"),Nr=o(" forward method, overrides the "),Eo=a("code"),Dr=o("__call__"),Wr=o(" special method."),Br=c(),b(Ae.$$.fragment),us=c(),fe=a("h2"),Ie=a("a"),zo=a("span"),b(Ft.$$.fragment),Ur=c(),$o=a("span"),Kr=o("LukeForEntityClassification"),ms=c(),P=a("div"),b(Mt.$$.fragment),Rr=c(),xo=a("p"),Vr=o(`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),Hr=c(),jt=a("p"),Yr=o("This model inherits from "),En=a("a"),Qr=o("PreTrainedModel"),Gr=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jr=c(),Pt=a("p"),Xr=o("This model is also a PyTorch "),At=a("a"),Zr=o("torch.nn.Module"),el=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tl=c(),R=a("div"),b(It.$$.fragment),nl=c(),ge=a("p"),ol=o("The "),zn=a("a"),sl=o("LukeForEntityClassification"),al=o(" forward method, overrides the "),Co=a("code"),il=o("__call__"),rl=o(" special method."),ll=c(),b(Oe.$$.fragment),dl=c(),b(Se.$$.fragment),fs=c(),_e=a("h2"),Ne=a("a"),qo=a("span"),b(Ot.$$.fragment),cl=c(),Fo=a("span"),pl=o("LukeForEntityPairClassification"),gs=c(),A=a("div"),b(St.$$.fragment),hl=c(),Mo=a("p"),ul=o(`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),ml=c(),Nt=a("p"),fl=o("This model inherits from "),$n=a("a"),gl=o("PreTrainedModel"),_l=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl=c(),Dt=a("p"),yl=o("This model is also a PyTorch "),Wt=a("a"),bl=o("torch.nn.Module"),vl=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tl=c(),V=a("div"),b(Bt.$$.fragment),wl=c(),ke=a("p"),Ll=o("The "),xn=a("a"),El=o("LukeForEntityPairClassification"),zl=o(" forward method, overrides the "),jo=a("code"),$l=o("__call__"),xl=o(" special method."),Cl=c(),b(De.$$.fragment),ql=c(),b(We.$$.fragment),_s=c(),ye=a("h2"),Be=a("a"),Po=a("span"),b(Ut.$$.fragment),Fl=c(),Ao=a("span"),Ml=o("LukeForEntitySpanClassification"),ks=c(),I=a("div"),b(Kt.$$.fragment),jl=c(),Io=a("p"),Pl=o(`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),Al=c(),Rt=a("p"),Il=o("This model inherits from "),Cn=a("a"),Ol=o("PreTrainedModel"),Sl=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl=c(),Vt=a("p"),Dl=o("This model is also a PyTorch "),Ht=a("a"),Wl=o("torch.nn.Module"),Bl=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ul=c(),H=a("div"),b(Yt.$$.fragment),Kl=c(),be=a("p"),Rl=o("The "),qn=a("a"),Vl=o("LukeForEntitySpanClassification"),Hl=o(" forward method, overrides the "),Oo=a("code"),Yl=o("__call__"),Ql=o(" special method."),Gl=c(),b(Ue.$$.fragment),Jl=c(),b(Ke.$$.fragment),this.h()},l(n){const m=Vc('[data-svelte="svelte-1phssyn"]',document.head);h=i(m,"META",{name:!0,content:!0}),m.forEach(t),y=p(n),g=i(n,"H1",{class:!0});var Qt=r(g);f=i(Qt,"A",{id:!0,class:!0,href:!0});var So=r(f);k=i(So,"SPAN",{});var No=r(k);v(l.$$.fragment,No),No.forEach(t),So.forEach(t),u=p(Qt),$=i(Qt,"SPAN",{});var Do=r($);Bs=s(Do,"LUKE"),Do.forEach(t),Qt.forEach(t),Go=p(n),se=i(n,"H2",{class:!0});var Gt=r(se);we=i(Gt,"A",{id:!0,class:!0,href:!0});var Wo=r(we);Bn=i(Wo,"SPAN",{});var Bo=r(Bn);v(Xe.$$.fragment,Bo),Bo.forEach(t),Wo.forEach(t),Us=p(Gt),Un=i(Gt,"SPAN",{});var Uo=r(Un);Ks=s(Uo,"Overview"),Uo.forEach(t),Gt.forEach(t),Jo=p(n),Le=i(n,"P",{});var Jt=r(Le);Rs=s(Jt,"The LUKE model was proposed in "),Ze=i(Jt,"A",{href:!0,rel:!0});var Ko=r(Ze);Vs=s(Ko,"LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),Ko.forEach(t),Hs=s(Jt,` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`),Jt.forEach(t),Xo=p(n),Xt=i(n,"P",{});var td=r(Xt);Ys=s(td,"The abstract from the paper is the following:"),td.forEach(t),Zo=p(n),Zt=i(n,"P",{});var nd=r(Zt);Kn=i(nd,"EM",{});var od=r(Kn);Qs=s(od,`Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).`),od.forEach(t),nd.forEach(t),es=p(n),en=i(n,"P",{});var sd=r(en);Gs=s(sd,"Tips:"),sd.forEach(t),ts=p(n),W=i(n,"UL",{});var Re=r(W);Rn=i(Re,"LI",{});var ad=r(Rn);et=i(ad,"P",{});var bs=r(et);Js=s(bs,"This implementation is the same as "),tn=i(bs,"A",{href:!0});var id=r(tn);Xs=s(id,"RobertaModel"),id.forEach(t),Zs=s(bs,` with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),bs.forEach(t),ad.forEach(t),ea=p(Re),Vn=i(Re,"LI",{});var rd=r(Vn);q=i(rd,"P",{});var Y=r(q);ta=s(Y,"LUKE treats entities as input tokens; therefore, it takes "),Hn=i(Y,"CODE",{});var ld=r(Hn);na=s(ld,"entity_ids"),ld.forEach(t),oa=s(Y,", "),Yn=i(Y,"CODE",{});var dd=r(Yn);sa=s(dd,"entity_attention_mask"),dd.forEach(t),aa=s(Y,`,
`),Qn=i(Y,"CODE",{});var cd=r(Qn);ia=s(cd,"entity_token_type_ids"),cd.forEach(t),ra=s(Y," and "),Gn=i(Y,"CODE",{});var pd=r(Gn);la=s(pd,"entity_position_ids"),pd.forEach(t),da=s(Y,` as extra input. You can obtain those using
`),nn=i(Y,"A",{href:!0});var hd=r(nn);ca=s(hd,"LukeTokenizer"),hd.forEach(t),pa=s(Y,"."),Y.forEach(t),rd.forEach(t),ha=p(Re),tt=i(Re,"LI",{});var vs=r(tt);B=i(vs,"P",{});var ve=r(B);on=i(ve,"A",{href:!0});var ud=r(on);ua=s(ud,"LukeTokenizer"),ud.forEach(t),ma=s(ve," takes "),Jn=i(ve,"CODE",{});var md=r(Jn);fa=s(md,"entities"),md.forEach(t),ga=s(ve," and "),Xn=i(ve,"CODE",{});var fd=r(Xn);_a=s(fd,"entity_spans"),fd.forEach(t),ka=s(ve,` (character-based start and end
positions of the entities in the input text) as extra input. `),Zn=i(ve,"CODE",{});var gd=r(Zn);ya=s(gd,"entities"),gd.forEach(t),ba=s(ve,` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),ve.forEach(t),va=p(vs),nt=i(vs,"UL",{});var Ts=r(nt);sn=i(Ts,"LI",{});var Xl=r(sn);eo=i(Xl,"EM",{});var _d=r(eo);Ta=s(_d,"Inputting [MASK] entities to compute entity representations"),_d.forEach(t),wa=s(Xl,`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),Xl.forEach(t),La=p(Ts),an=i(Ts,"LI",{});var Zl=r(an);to=i(Zl,"EM",{});var kd=r(to);Ea=s(kd,"Inputting Wikipedia entities to compute knowledge-enhanced token representations"),kd.forEach(t),za=s(Zl,`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),Zl.forEach(t),Ts.forEach(t),vs.forEach(t),$a=p(Re),N=i(Re,"LI",{});var J=r(N);no=i(J,"P",{});var yd=r(no);xa=s(yd,"There are three head models for the former use case:"),yd.forEach(t),Ca=p(J),ae=i(J,"UL",{});var Fn=r(ae);Ee=i(Fn,"LI",{});var Ro=r(Ee);rn=i(Ro,"A",{href:!0});var bd=r(rn);qa=s(bd,"LukeForEntityClassification"),bd.forEach(t),Fa=s(Ro,`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),ot=i(Ro,"A",{href:!0,rel:!0});var vd=r(ot);Ma=s(vd,"Open Entity dataset"),vd.forEach(t),ja=s(Ro,`.
This model places a linear head on top of the output entity representation.`),Ro.forEach(t),Pa=p(Fn),ze=i(Fn,"LI",{});var Vo=r(ze);ln=i(Vo,"A",{href:!0});var Td=r(ln);Aa=s(Td,"LukeForEntityPairClassification"),Td.forEach(t),Ia=s(Vo,`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),st=i(Vo,"A",{href:!0,rel:!0});var wd=r(st);Oa=s(wd,"TACRED dataset"),wd.forEach(t),Sa=s(Vo,`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),Vo.forEach(t),Na=p(Fn),dn=i(Fn,"LI",{});var ed=r(dn);cn=i(ed,"A",{href:!0});var Ld=r(cn);Da=s(Ld,"LukeForEntitySpanClassification"),Ld.forEach(t),Wa=s(ed,`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),ed.forEach(t),Fn.forEach(t),Ba=p(J),O=i(J,"P",{});var Q=r(O);pn=i(Q,"A",{href:!0});var Ed=r(pn);Ua=s(Ed,"LukeTokenizer"),Ed.forEach(t),Ka=s(Q," has a "),oo=i(Q,"CODE",{});var zd=r(oo);Ra=s(zd,"task"),zd.forEach(t),Va=s(Q,` argument, which enables you to easily create an input to these
head models by specifying `),so=i(Q,"CODE",{});var $d=r(so);Ha=s($d,'task="entity_classification"'),$d.forEach(t),Ya=s(Q,", "),ao=i(Q,"CODE",{});var xd=r(ao);Qa=s(xd,'task="entity_pair_classification"'),xd.forEach(t),Ga=s(Q,`, or
`),io=i(Q,"CODE",{});var Cd=r(io);Ja=s(Cd,'task="entity_span_classification"'),Cd.forEach(t),Xa=s(Q,". Please refer to the example code of each head models."),Q.forEach(t),Za=p(J),ie=i(J,"P",{});var Mn=r(ie);ei=s(Mn,"A demo notebook on how to fine-tune "),hn=i(Mn,"A",{href:!0});var qd=r(hn);ti=s(qd,"LukeForEntityPairClassification"),qd.forEach(t),ni=s(Mn,` for relation
classification can be found `),at=i(Mn,"A",{href:!0,rel:!0});var Fd=r(at);oi=s(Fd,"here"),Fd.forEach(t),si=s(Mn,"."),Mn.forEach(t),ai=p(J),it=i(J,"P",{});var ws=r(it);ii=s(ws,`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),rt=i(ws,"A",{href:!0,rel:!0});var Md=r(rt);ri=s(Md,"here"),Md.forEach(t),li=s(ws,"."),ws.forEach(t),J.forEach(t),Re.forEach(t),ns=p(n),un=i(n,"P",{});var jd=r(un);di=s(jd,"Example:"),jd.forEach(t),os=p(n),v(lt.$$.fragment,n),ss=p(n),U=i(n,"P",{});var Ve=r(U);ci=s(Ve,"This model was contributed by "),dt=i(Ve,"A",{href:!0,rel:!0});var Pd=r(dt);pi=s(Pd,"ikuyamada"),Pd.forEach(t),hi=s(Ve," and "),ct=i(Ve,"A",{href:!0,rel:!0});var Ad=r(ct);ui=s(Ad,"nielsr"),Ad.forEach(t),mi=s(Ve,". The original code can be found "),pt=i(Ve,"A",{href:!0,rel:!0});var Id=r(pt);fi=s(Id,"here"),Id.forEach(t),gi=s(Ve,"."),Ve.forEach(t),as=p(n),re=i(n,"H2",{class:!0});var Ls=r(re);$e=i(Ls,"A",{id:!0,class:!0,href:!0});var Od=r($e);ro=i(Od,"SPAN",{});var Sd=r(ro);v(ht.$$.fragment,Sd),Sd.forEach(t),Od.forEach(t),_i=p(Ls),lo=i(Ls,"SPAN",{});var Nd=r(lo);ki=s(Nd,"LukeConfig"),Nd.forEach(t),Ls.forEach(t),is=p(n),D=i(n,"DIV",{class:!0});var He=r(D);v(ut.$$.fragment,He),yi=p(He),le=i(He,"P",{});var jn=r(le);bi=s(jn,"This is the configuration class to store the configuration of a "),mn=i(jn,"A",{href:!0});var Dd=r(mn);vi=s(Dd,"LukeModel"),Dd.forEach(t),Ti=s(jn,`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LUKE
`),mt=i(jn,"A",{href:!0,rel:!0});var Wd=r(mt);wi=s(Wd,"studio-ousia/luke-base"),Wd.forEach(t),Li=s(jn," architecture."),jn.forEach(t),Ei=p(He),de=i(He,"P",{});var Pn=r(de);zi=s(Pn,"Configuration objects inherit from "),fn=i(Pn,"A",{href:!0});var Bd=r(fn);$i=s(Bd,"PretrainedConfig"),Bd.forEach(t),xi=s(Pn,` and can be used to control the model outputs. Read the
documentation from `),gn=i(Pn,"A",{href:!0});var Ud=r(gn);Ci=s(Ud,"PretrainedConfig"),Ud.forEach(t),qi=s(Pn," for more information."),Pn.forEach(t),Fi=p(He),v(xe.$$.fragment,He),He.forEach(t),rs=p(n),ce=i(n,"H2",{class:!0});var Es=r(ce);Ce=i(Es,"A",{id:!0,class:!0,href:!0});var Kd=r(Ce);co=i(Kd,"SPAN",{});var Rd=r(co);v(ft.$$.fragment,Rd),Rd.forEach(t),Kd.forEach(t),Mi=p(Es),po=i(Es,"SPAN",{});var Vd=r(po);ji=s(Vd,"LukeTokenizer"),Vd.forEach(t),Es.forEach(t),ls=p(n),F=i(n,"DIV",{class:!0});var X=r(F);v(gt.$$.fragment,X),Pi=p(X),ho=i(X,"P",{});var Hd=r(ho);Ai=s(Hd,"Construct a LUKE tokenizer."),Hd.forEach(t),Ii=p(X),x=i(X,"P",{});var C=r(x);Oi=s(C,"This tokenizer inherits from "),_n=i(C,"A",{href:!0});var Yd=r(_n);Si=s(Yd,"RobertaTokenizer"),Yd.forEach(t),Ni=s(C,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),kn=i(C,"A",{href:!0});var Qd=r(kn);Di=s(Qd,"RobertaTokenizer"),Qd.forEach(t),Wi=s(C,", "),yn=i(C,"A",{href:!0});var Gd=r(yn);Bi=s(Gd,"LukeTokenizer"),Gd.forEach(t),Ui=s(C,`
also creates entity sequences, namely `),uo=i(C,"CODE",{});var Jd=r(uo);Ki=s(Jd,"entity_ids"),Jd.forEach(t),Ri=s(C,", "),mo=i(C,"CODE",{});var Xd=r(mo);Vi=s(Xd,"entity_attention_mask"),Xd.forEach(t),Hi=s(C,", "),fo=i(C,"CODE",{});var Zd=r(fo);Yi=s(Zd,"entity_token_type_ids"),Zd.forEach(t),Qi=s(C,`, and
`),go=i(C,"CODE",{});var ec=r(go);Gi=s(ec,"entity_position_ids"),ec.forEach(t),Ji=s(C," to be used by the LUKE model."),C.forEach(t),Xi=p(X),qe=i(X,"DIV",{class:!0});var zs=r(qe);v(_t.$$.fragment,zs),Zi=p(zs),_o=i(zs,"P",{});var tc=r(_o);er=s(tc,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),tc.forEach(t),zs.forEach(t),tr=p(X),bn=i(X,"DIV",{class:!0});var nc=r(bn);v(kt.$$.fragment,nc),nc.forEach(t),X.forEach(t),ds=p(n),pe=i(n,"H2",{class:!0});var $s=r(pe);Fe=i($s,"A",{id:!0,class:!0,href:!0});var oc=r(Fe);ko=i(oc,"SPAN",{});var sc=r(ko);v(yt.$$.fragment,sc),sc.forEach(t),oc.forEach(t),nr=p($s),yo=i($s,"SPAN",{});var ac=r(yo);or=s(ac,"LukeModel"),ac.forEach(t),$s.forEach(t),cs=p(n),M=i(n,"DIV",{class:!0});var Z=r(M);v(bt.$$.fragment,Z),sr=p(Z),bo=i(Z,"P",{});var ic=r(bo);ar=s(ic,"The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),ic.forEach(t),ir=p(Z),vt=i(Z,"P",{});var xs=r(vt);rr=s(xs,"This model inherits from "),vn=i(xs,"A",{href:!0});var rc=r(vn);lr=s(rc,"PreTrainedModel"),rc.forEach(t),dr=s(xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xs.forEach(t),cr=p(Z),Tt=i(Z,"P",{});var Cs=r(Tt);pr=s(Cs,"This model is also a PyTorch "),wt=i(Cs,"A",{href:!0,rel:!0});var lc=r(wt);hr=s(lc,"torch.nn.Module"),lc.forEach(t),ur=s(Cs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cs.forEach(t),mr=p(Z),K=i(Z,"DIV",{class:!0});var Ye=r(K);v(Lt.$$.fragment,Ye),fr=p(Ye),he=i(Ye,"P",{});var An=r(he);gr=s(An,"The "),Tn=i(An,"A",{href:!0});var dc=r(Tn);_r=s(dc,"LukeModel"),dc.forEach(t),kr=s(An," forward method, overrides the "),vo=i(An,"CODE",{});var cc=r(vo);yr=s(cc,"__call__"),cc.forEach(t),br=s(An," special method."),An.forEach(t),vr=p(Ye),v(Me.$$.fragment,Ye),Tr=p(Ye),v(je.$$.fragment,Ye),Ye.forEach(t),Z.forEach(t),ps=p(n),ue=i(n,"H2",{class:!0});var qs=r(ue);Pe=i(qs,"A",{id:!0,class:!0,href:!0});var pc=r(Pe);To=i(pc,"SPAN",{});var hc=r(To);v(Et.$$.fragment,hc),hc.forEach(t),pc.forEach(t),wr=p(qs),wo=i(qs,"SPAN",{});var uc=r(wo);Lr=s(uc,"LukeForMaskedLM"),uc.forEach(t),qs.forEach(t),hs=p(n),j=i(n,"DIV",{class:!0});var ee=r(j);v(zt.$$.fragment,ee),Er=p(ee),Lo=i(ee,"P",{});var mc=r(Lo);zr=s(mc,`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),mc.forEach(t),$r=p(ee),$t=i(ee,"P",{});var Fs=r($t);xr=s(Fs,"This model inherits from "),wn=i(Fs,"A",{href:!0});var fc=r(wn);Cr=s(fc,"PreTrainedModel"),fc.forEach(t),qr=s(Fs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fs.forEach(t),Fr=p(ee),xt=i(ee,"P",{});var Ms=r(xt);Mr=s(Ms,"This model is also a PyTorch "),Ct=i(Ms,"A",{href:!0,rel:!0});var gc=r(Ct);jr=s(gc,"torch.nn.Module"),gc.forEach(t),Pr=s(Ms,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ms.forEach(t),Ar=p(ee),G=i(ee,"DIV",{class:!0});var In=r(G);v(qt.$$.fragment,In),Ir=p(In),me=i(In,"P",{});var On=r(me);Or=s(On,"The "),Ln=i(On,"A",{href:!0});var _c=r(Ln);Sr=s(_c,"LukeForMaskedLM"),_c.forEach(t),Nr=s(On," forward method, overrides the "),Eo=i(On,"CODE",{});var kc=r(Eo);Dr=s(kc,"__call__"),kc.forEach(t),Wr=s(On," special method."),On.forEach(t),Br=p(In),v(Ae.$$.fragment,In),In.forEach(t),ee.forEach(t),us=p(n),fe=i(n,"H2",{class:!0});var js=r(fe);Ie=i(js,"A",{id:!0,class:!0,href:!0});var yc=r(Ie);zo=i(yc,"SPAN",{});var bc=r(zo);v(Ft.$$.fragment,bc),bc.forEach(t),yc.forEach(t),Ur=p(js),$o=i(js,"SPAN",{});var vc=r($o);Kr=s(vc,"LukeForEntityClassification"),vc.forEach(t),js.forEach(t),ms=p(n),P=i(n,"DIV",{class:!0});var te=r(P);v(Mt.$$.fragment,te),Rr=p(te),xo=i(te,"P",{});var Tc=r(xo);Vr=s(Tc,`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),Tc.forEach(t),Hr=p(te),jt=i(te,"P",{});var Ps=r(jt);Yr=s(Ps,"This model inherits from "),En=i(Ps,"A",{href:!0});var wc=r(En);Qr=s(wc,"PreTrainedModel"),wc.forEach(t),Gr=s(Ps,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ps.forEach(t),Jr=p(te),Pt=i(te,"P",{});var As=r(Pt);Xr=s(As,"This model is also a PyTorch "),At=i(As,"A",{href:!0,rel:!0});var Lc=r(At);Zr=s(Lc,"torch.nn.Module"),Lc.forEach(t),el=s(As,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),As.forEach(t),tl=p(te),R=i(te,"DIV",{class:!0});var Qe=r(R);v(It.$$.fragment,Qe),nl=p(Qe),ge=i(Qe,"P",{});var Sn=r(ge);ol=s(Sn,"The "),zn=i(Sn,"A",{href:!0});var Ec=r(zn);sl=s(Ec,"LukeForEntityClassification"),Ec.forEach(t),al=s(Sn," forward method, overrides the "),Co=i(Sn,"CODE",{});var zc=r(Co);il=s(zc,"__call__"),zc.forEach(t),rl=s(Sn," special method."),Sn.forEach(t),ll=p(Qe),v(Oe.$$.fragment,Qe),dl=p(Qe),v(Se.$$.fragment,Qe),Qe.forEach(t),te.forEach(t),fs=p(n),_e=i(n,"H2",{class:!0});var Is=r(_e);Ne=i(Is,"A",{id:!0,class:!0,href:!0});var $c=r(Ne);qo=i($c,"SPAN",{});var xc=r(qo);v(Ot.$$.fragment,xc),xc.forEach(t),$c.forEach(t),cl=p(Is),Fo=i(Is,"SPAN",{});var Cc=r(Fo);pl=s(Cc,"LukeForEntityPairClassification"),Cc.forEach(t),Is.forEach(t),gs=p(n),A=i(n,"DIV",{class:!0});var ne=r(A);v(St.$$.fragment,ne),hl=p(ne),Mo=i(ne,"P",{});var qc=r(Mo);ul=s(qc,`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),qc.forEach(t),ml=p(ne),Nt=i(ne,"P",{});var Os=r(Nt);fl=s(Os,"This model inherits from "),$n=i(Os,"A",{href:!0});var Fc=r($n);gl=s(Fc,"PreTrainedModel"),Fc.forEach(t),_l=s(Os,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Os.forEach(t),kl=p(ne),Dt=i(ne,"P",{});var Ss=r(Dt);yl=s(Ss,"This model is also a PyTorch "),Wt=i(Ss,"A",{href:!0,rel:!0});var Mc=r(Wt);bl=s(Mc,"torch.nn.Module"),Mc.forEach(t),vl=s(Ss,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ss.forEach(t),Tl=p(ne),V=i(ne,"DIV",{class:!0});var Ge=r(V);v(Bt.$$.fragment,Ge),wl=p(Ge),ke=i(Ge,"P",{});var Nn=r(ke);Ll=s(Nn,"The "),xn=i(Nn,"A",{href:!0});var jc=r(xn);El=s(jc,"LukeForEntityPairClassification"),jc.forEach(t),zl=s(Nn," forward method, overrides the "),jo=i(Nn,"CODE",{});var Pc=r(jo);$l=s(Pc,"__call__"),Pc.forEach(t),xl=s(Nn," special method."),Nn.forEach(t),Cl=p(Ge),v(De.$$.fragment,Ge),ql=p(Ge),v(We.$$.fragment,Ge),Ge.forEach(t),ne.forEach(t),_s=p(n),ye=i(n,"H2",{class:!0});var Ns=r(ye);Be=i(Ns,"A",{id:!0,class:!0,href:!0});var Ac=r(Be);Po=i(Ac,"SPAN",{});var Ic=r(Po);v(Ut.$$.fragment,Ic),Ic.forEach(t),Ac.forEach(t),Fl=p(Ns),Ao=i(Ns,"SPAN",{});var Oc=r(Ao);Ml=s(Oc,"LukeForEntitySpanClassification"),Oc.forEach(t),Ns.forEach(t),ks=p(n),I=i(n,"DIV",{class:!0});var oe=r(I);v(Kt.$$.fragment,oe),jl=p(oe),Io=i(oe,"P",{});var Sc=r(Io);Pl=s(Sc,`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),Sc.forEach(t),Al=p(oe),Rt=i(oe,"P",{});var Ds=r(Rt);Il=s(Ds,"This model inherits from "),Cn=i(Ds,"A",{href:!0});var Nc=r(Cn);Ol=s(Nc,"PreTrainedModel"),Nc.forEach(t),Sl=s(Ds,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ds.forEach(t),Nl=p(oe),Vt=i(oe,"P",{});var Ws=r(Vt);Dl=s(Ws,"This model is also a PyTorch "),Ht=i(Ws,"A",{href:!0,rel:!0});var Dc=r(Ht);Wl=s(Dc,"torch.nn.Module"),Dc.forEach(t),Bl=s(Ws,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ws.forEach(t),Ul=p(oe),H=i(oe,"DIV",{class:!0});var Je=r(H);v(Yt.$$.fragment,Je),Kl=p(Je),be=i(Je,"P",{});var Dn=r(be);Rl=s(Dn,"The "),qn=i(Dn,"A",{href:!0});var Wc=r(qn);Vl=s(Wc,"LukeForEntitySpanClassification"),Wc.forEach(t),Hl=s(Dn," forward method, overrides the "),Oo=i(Dn,"CODE",{});var Bc=r(Oo);Yl=s(Bc,"__call__"),Bc.forEach(t),Ql=s(Dn," special method."),Dn.forEach(t),Gl=p(Je),v(Ue.$$.fragment,Je),Jl=p(Je),v(Ke.$$.fragment,Je),Je.forEach(t),oe.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(ap)),d(f,"id","luke"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#luke"),d(g,"class","relative group"),d(we,"id","overview"),d(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(we,"href","#overview"),d(se,"class","relative group"),d(Ze,"href","https://arxiv.org/abs/2010.01057"),d(Ze,"rel","nofollow"),d(tn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),d(nn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer"),d(on,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer"),d(rn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityClassification"),d(ot,"href","https://www.cs.utexas.edu/~eunsol/html_pages/open_entity.html"),d(ot,"rel","nofollow"),d(ln,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityPairClassification"),d(st,"href","https://nlp.stanford.edu/projects/tacred/"),d(st,"rel","nofollow"),d(cn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),d(pn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer"),d(hn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityPairClassification"),d(at,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LUKE"),d(at,"rel","nofollow"),d(rt,"href","https://github.com/studio-ousia/luke/tree/master/notebooks"),d(rt,"rel","nofollow"),d(dt,"href","https://huggingface.co/ikuyamada"),d(dt,"rel","nofollow"),d(ct,"href","https://huggingface.co/nielsr"),d(ct,"rel","nofollow"),d(pt,"href","https://github.com/studio-ousia/luke"),d(pt,"rel","nofollow"),d($e,"id","transformers.LukeConfig"),d($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($e,"href","#transformers.LukeConfig"),d(re,"class","relative group"),d(mn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeModel"),d(mt,"href","https://huggingface.co/studio-ousia/luke-base"),d(mt,"rel","nofollow"),d(fn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(gn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ce,"id","transformers.LukeTokenizer"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#transformers.LukeTokenizer"),d(ce,"class","relative group"),d(_n,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),d(kn,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),d(yn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer"),d(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.LukeModel"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.LukeModel"),d(pe,"class","relative group"),d(vn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(wt,"rel","nofollow"),d(Tn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeModel"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pe,"id","transformers.LukeForMaskedLM"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#transformers.LukeForMaskedLM"),d(ue,"class","relative group"),d(wn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Ct,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ct,"rel","nofollow"),d(Ln,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForMaskedLM"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ie,"id","transformers.LukeForEntityClassification"),d(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ie,"href","#transformers.LukeForEntityClassification"),d(fe,"class","relative group"),d(En,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(At,"rel","nofollow"),d(zn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityClassification"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ne,"id","transformers.LukeForEntityPairClassification"),d(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ne,"href","#transformers.LukeForEntityPairClassification"),d(_e,"class","relative group"),d($n,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Wt,"rel","nofollow"),d(xn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityPairClassification"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Be,"id","transformers.LukeForEntitySpanClassification"),d(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Be,"href","#transformers.LukeForEntitySpanClassification"),d(ye,"class","relative group"),d(Cn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),d(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ht,"rel","nofollow"),d(qn,"href","/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,m){e(document.head,h),_(n,y,m),_(n,g,m),e(g,f),e(f,k),T(l,k,null),e(g,u),e(g,$),e($,Bs),_(n,Go,m),_(n,se,m),e(se,we),e(we,Bn),T(Xe,Bn,null),e(se,Us),e(se,Un),e(Un,Ks),_(n,Jo,m),_(n,Le,m),e(Le,Rs),e(Le,Ze),e(Ze,Vs),e(Le,Hs),_(n,Xo,m),_(n,Xt,m),e(Xt,Ys),_(n,Zo,m),_(n,Zt,m),e(Zt,Kn),e(Kn,Qs),_(n,es,m),_(n,en,m),e(en,Gs),_(n,ts,m),_(n,W,m),e(W,Rn),e(Rn,et),e(et,Js),e(et,tn),e(tn,Xs),e(et,Zs),e(W,ea),e(W,Vn),e(Vn,q),e(q,ta),e(q,Hn),e(Hn,na),e(q,oa),e(q,Yn),e(Yn,sa),e(q,aa),e(q,Qn),e(Qn,ia),e(q,ra),e(q,Gn),e(Gn,la),e(q,da),e(q,nn),e(nn,ca),e(q,pa),e(W,ha),e(W,tt),e(tt,B),e(B,on),e(on,ua),e(B,ma),e(B,Jn),e(Jn,fa),e(B,ga),e(B,Xn),e(Xn,_a),e(B,ka),e(B,Zn),e(Zn,ya),e(B,ba),e(tt,va),e(tt,nt),e(nt,sn),e(sn,eo),e(eo,Ta),e(sn,wa),e(nt,La),e(nt,an),e(an,to),e(to,Ea),e(an,za),e(W,$a),e(W,N),e(N,no),e(no,xa),e(N,Ca),e(N,ae),e(ae,Ee),e(Ee,rn),e(rn,qa),e(Ee,Fa),e(Ee,ot),e(ot,Ma),e(Ee,ja),e(ae,Pa),e(ae,ze),e(ze,ln),e(ln,Aa),e(ze,Ia),e(ze,st),e(st,Oa),e(ze,Sa),e(ae,Na),e(ae,dn),e(dn,cn),e(cn,Da),e(dn,Wa),e(N,Ba),e(N,O),e(O,pn),e(pn,Ua),e(O,Ka),e(O,oo),e(oo,Ra),e(O,Va),e(O,so),e(so,Ha),e(O,Ya),e(O,ao),e(ao,Qa),e(O,Ga),e(O,io),e(io,Ja),e(O,Xa),e(N,Za),e(N,ie),e(ie,ei),e(ie,hn),e(hn,ti),e(ie,ni),e(ie,at),e(at,oi),e(ie,si),e(N,ai),e(N,it),e(it,ii),e(it,rt),e(rt,ri),e(it,li),_(n,ns,m),_(n,un,m),e(un,di),_(n,os,m),T(lt,n,m),_(n,ss,m),_(n,U,m),e(U,ci),e(U,dt),e(dt,pi),e(U,hi),e(U,ct),e(ct,ui),e(U,mi),e(U,pt),e(pt,fi),e(U,gi),_(n,as,m),_(n,re,m),e(re,$e),e($e,ro),T(ht,ro,null),e(re,_i),e(re,lo),e(lo,ki),_(n,is,m),_(n,D,m),T(ut,D,null),e(D,yi),e(D,le),e(le,bi),e(le,mn),e(mn,vi),e(le,Ti),e(le,mt),e(mt,wi),e(le,Li),e(D,Ei),e(D,de),e(de,zi),e(de,fn),e(fn,$i),e(de,xi),e(de,gn),e(gn,Ci),e(de,qi),e(D,Fi),T(xe,D,null),_(n,rs,m),_(n,ce,m),e(ce,Ce),e(Ce,co),T(ft,co,null),e(ce,Mi),e(ce,po),e(po,ji),_(n,ls,m),_(n,F,m),T(gt,F,null),e(F,Pi),e(F,ho),e(ho,Ai),e(F,Ii),e(F,x),e(x,Oi),e(x,_n),e(_n,Si),e(x,Ni),e(x,kn),e(kn,Di),e(x,Wi),e(x,yn),e(yn,Bi),e(x,Ui),e(x,uo),e(uo,Ki),e(x,Ri),e(x,mo),e(mo,Vi),e(x,Hi),e(x,fo),e(fo,Yi),e(x,Qi),e(x,go),e(go,Gi),e(x,Ji),e(F,Xi),e(F,qe),T(_t,qe,null),e(qe,Zi),e(qe,_o),e(_o,er),e(F,tr),e(F,bn),T(kt,bn,null),_(n,ds,m),_(n,pe,m),e(pe,Fe),e(Fe,ko),T(yt,ko,null),e(pe,nr),e(pe,yo),e(yo,or),_(n,cs,m),_(n,M,m),T(bt,M,null),e(M,sr),e(M,bo),e(bo,ar),e(M,ir),e(M,vt),e(vt,rr),e(vt,vn),e(vn,lr),e(vt,dr),e(M,cr),e(M,Tt),e(Tt,pr),e(Tt,wt),e(wt,hr),e(Tt,ur),e(M,mr),e(M,K),T(Lt,K,null),e(K,fr),e(K,he),e(he,gr),e(he,Tn),e(Tn,_r),e(he,kr),e(he,vo),e(vo,yr),e(he,br),e(K,vr),T(Me,K,null),e(K,Tr),T(je,K,null),_(n,ps,m),_(n,ue,m),e(ue,Pe),e(Pe,To),T(Et,To,null),e(ue,wr),e(ue,wo),e(wo,Lr),_(n,hs,m),_(n,j,m),T(zt,j,null),e(j,Er),e(j,Lo),e(Lo,zr),e(j,$r),e(j,$t),e($t,xr),e($t,wn),e(wn,Cr),e($t,qr),e(j,Fr),e(j,xt),e(xt,Mr),e(xt,Ct),e(Ct,jr),e(xt,Pr),e(j,Ar),e(j,G),T(qt,G,null),e(G,Ir),e(G,me),e(me,Or),e(me,Ln),e(Ln,Sr),e(me,Nr),e(me,Eo),e(Eo,Dr),e(me,Wr),e(G,Br),T(Ae,G,null),_(n,us,m),_(n,fe,m),e(fe,Ie),e(Ie,zo),T(Ft,zo,null),e(fe,Ur),e(fe,$o),e($o,Kr),_(n,ms,m),_(n,P,m),T(Mt,P,null),e(P,Rr),e(P,xo),e(xo,Vr),e(P,Hr),e(P,jt),e(jt,Yr),e(jt,En),e(En,Qr),e(jt,Gr),e(P,Jr),e(P,Pt),e(Pt,Xr),e(Pt,At),e(At,Zr),e(Pt,el),e(P,tl),e(P,R),T(It,R,null),e(R,nl),e(R,ge),e(ge,ol),e(ge,zn),e(zn,sl),e(ge,al),e(ge,Co),e(Co,il),e(ge,rl),e(R,ll),T(Oe,R,null),e(R,dl),T(Se,R,null),_(n,fs,m),_(n,_e,m),e(_e,Ne),e(Ne,qo),T(Ot,qo,null),e(_e,cl),e(_e,Fo),e(Fo,pl),_(n,gs,m),_(n,A,m),T(St,A,null),e(A,hl),e(A,Mo),e(Mo,ul),e(A,ml),e(A,Nt),e(Nt,fl),e(Nt,$n),e($n,gl),e(Nt,_l),e(A,kl),e(A,Dt),e(Dt,yl),e(Dt,Wt),e(Wt,bl),e(Dt,vl),e(A,Tl),e(A,V),T(Bt,V,null),e(V,wl),e(V,ke),e(ke,Ll),e(ke,xn),e(xn,El),e(ke,zl),e(ke,jo),e(jo,$l),e(ke,xl),e(V,Cl),T(De,V,null),e(V,ql),T(We,V,null),_(n,_s,m),_(n,ye,m),e(ye,Be),e(Be,Po),T(Ut,Po,null),e(ye,Fl),e(ye,Ao),e(Ao,Ml),_(n,ks,m),_(n,I,m),T(Kt,I,null),e(I,jl),e(I,Io),e(Io,Pl),e(I,Al),e(I,Rt),e(Rt,Il),e(Rt,Cn),e(Cn,Ol),e(Rt,Sl),e(I,Nl),e(I,Vt),e(Vt,Dl),e(Vt,Ht),e(Ht,Wl),e(Vt,Bl),e(I,Ul),e(I,H),T(Yt,H,null),e(H,Kl),e(H,be),e(be,Rl),e(be,qn),e(qn,Vl),e(be,Hl),e(be,Oo),e(Oo,Yl),e(be,Ql),e(H,Gl),T(Ue,H,null),e(H,Jl),T(Ke,H,null),ys=!0},p(n,[m]){const Qt={};m&2&&(Qt.$$scope={dirty:m,ctx:n}),xe.$set(Qt);const So={};m&2&&(So.$$scope={dirty:m,ctx:n}),Me.$set(So);const No={};m&2&&(No.$$scope={dirty:m,ctx:n}),je.$set(No);const Do={};m&2&&(Do.$$scope={dirty:m,ctx:n}),Ae.$set(Do);const Gt={};m&2&&(Gt.$$scope={dirty:m,ctx:n}),Oe.$set(Gt);const Wo={};m&2&&(Wo.$$scope={dirty:m,ctx:n}),Se.$set(Wo);const Bo={};m&2&&(Bo.$$scope={dirty:m,ctx:n}),De.$set(Bo);const Uo={};m&2&&(Uo.$$scope={dirty:m,ctx:n}),We.$set(Uo);const Jt={};m&2&&(Jt.$$scope={dirty:m,ctx:n}),Ue.$set(Jt);const Ko={};m&2&&(Ko.$$scope={dirty:m,ctx:n}),Ke.$set(Ko)},i(n){ys||(w(l.$$.fragment,n),w(Xe.$$.fragment,n),w(lt.$$.fragment,n),w(ht.$$.fragment,n),w(ut.$$.fragment,n),w(xe.$$.fragment,n),w(ft.$$.fragment,n),w(gt.$$.fragment,n),w(_t.$$.fragment,n),w(kt.$$.fragment,n),w(yt.$$.fragment,n),w(bt.$$.fragment,n),w(Lt.$$.fragment,n),w(Me.$$.fragment,n),w(je.$$.fragment,n),w(Et.$$.fragment,n),w(zt.$$.fragment,n),w(qt.$$.fragment,n),w(Ae.$$.fragment,n),w(Ft.$$.fragment,n),w(Mt.$$.fragment,n),w(It.$$.fragment,n),w(Oe.$$.fragment,n),w(Se.$$.fragment,n),w(Ot.$$.fragment,n),w(St.$$.fragment,n),w(Bt.$$.fragment,n),w(De.$$.fragment,n),w(We.$$.fragment,n),w(Ut.$$.fragment,n),w(Kt.$$.fragment,n),w(Yt.$$.fragment,n),w(Ue.$$.fragment,n),w(Ke.$$.fragment,n),ys=!0)},o(n){L(l.$$.fragment,n),L(Xe.$$.fragment,n),L(lt.$$.fragment,n),L(ht.$$.fragment,n),L(ut.$$.fragment,n),L(xe.$$.fragment,n),L(ft.$$.fragment,n),L(gt.$$.fragment,n),L(_t.$$.fragment,n),L(kt.$$.fragment,n),L(yt.$$.fragment,n),L(bt.$$.fragment,n),L(Lt.$$.fragment,n),L(Me.$$.fragment,n),L(je.$$.fragment,n),L(Et.$$.fragment,n),L(zt.$$.fragment,n),L(qt.$$.fragment,n),L(Ae.$$.fragment,n),L(Ft.$$.fragment,n),L(Mt.$$.fragment,n),L(It.$$.fragment,n),L(Oe.$$.fragment,n),L(Se.$$.fragment,n),L(Ot.$$.fragment,n),L(St.$$.fragment,n),L(Bt.$$.fragment,n),L(De.$$.fragment,n),L(We.$$.fragment,n),L(Ut.$$.fragment,n),L(Kt.$$.fragment,n),L(Yt.$$.fragment,n),L(Ue.$$.fragment,n),L(Ke.$$.fragment,n),ys=!1},d(n){t(h),n&&t(y),n&&t(g),E(l),n&&t(Go),n&&t(se),E(Xe),n&&t(Jo),n&&t(Le),n&&t(Xo),n&&t(Xt),n&&t(Zo),n&&t(Zt),n&&t(es),n&&t(en),n&&t(ts),n&&t(W),n&&t(ns),n&&t(un),n&&t(os),E(lt,n),n&&t(ss),n&&t(U),n&&t(as),n&&t(re),E(ht),n&&t(is),n&&t(D),E(ut),E(xe),n&&t(rs),n&&t(ce),E(ft),n&&t(ls),n&&t(F),E(gt),E(_t),E(kt),n&&t(ds),n&&t(pe),E(yt),n&&t(cs),n&&t(M),E(bt),E(Lt),E(Me),E(je),n&&t(ps),n&&t(ue),E(Et),n&&t(hs),n&&t(j),E(zt),E(qt),E(Ae),n&&t(us),n&&t(fe),E(Ft),n&&t(ms),n&&t(P),E(Mt),E(It),E(Oe),E(Se),n&&t(fs),n&&t(_e),E(Ot),n&&t(gs),n&&t(A),E(St),E(Bt),E(De),E(We),n&&t(_s),n&&t(ye),E(Ut),n&&t(ks),n&&t(I),E(Kt),E(Yt),E(Ue),E(Ke)}}}const ap={local:"luke",sections:[{local:"overview",title:"Overview"},{local:"transformers.LukeConfig",title:"LukeConfig"},{local:"transformers.LukeTokenizer",title:"LukeTokenizer"},{local:"transformers.LukeModel",title:"LukeModel"},{local:"transformers.LukeForMaskedLM",title:"LukeForMaskedLM"},{local:"transformers.LukeForEntityClassification",title:"LukeForEntityClassification"},{local:"transformers.LukeForEntityPairClassification",title:"LukeForEntityPairClassification"},{local:"transformers.LukeForEntitySpanClassification",title:"LukeForEntitySpanClassification"}],title:"LUKE"};function ip(z){return Hc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class up extends Uc{constructor(h){super();Kc(this,h,ip,sp,Rc,{})}}export{up as default,ap as metadata};
