import{S as Bc,i as Kc,s as Rc,e as a,k as c,w as b,t as o,M as Hc,c as r,d as t,m as p,a as i,x as v,h as s,b as d,G as e,g as _,y as T,q as w,o as L,B as E,v as Vc,L as Qo}from"../../chunks/vendor-hf-doc-builder.js";import{T as Vo}from"../../chunks/Tip-hf-doc-builder.js";import{D as S}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Wn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Te}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Yo}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Yc(z){let h,y,g,f,k;return f=new Wn({props:{code:`from transformers import LukeConfig, LukeModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function Qc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function Jc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function Xc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
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
Predicted <span class="hljs-keyword">class</span>: person`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function ep(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
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
Predicted <span class="hljs-keyword">class</span>: per:cities_of_residence`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function np(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
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
Los Angeles LOC`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Qo,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function sp(z){let h,y,g,f,k,l,u,$,Us,Go,se,we,Un,Xe,Bs,Bn,Ks,Jo,Le,Rs,Ze,Hs,Vs,Xo,Xt,Ys,Zo,Zt,Kn,Qs,es,en,Gs,ts,W,Rn,et,Js,tn,Xs,Zs,ea,Hn,q,ta,Vn,na,oa,Yn,sa,aa,Qn,ra,ia,Gn,la,da,nn,ca,pa,ha,tt,U,on,ua,ma,Jn,fa,ga,Xn,_a,ka,Zn,ya,ba,va,nt,sn,eo,Ta,wa,La,an,to,Ea,za,$a,N,no,xa,Fa,ae,Ee,rn,qa,Ca,ot,Ma,Pa,ja,ze,ln,Aa,Ia,st,Oa,Sa,Na,dn,cn,Da,Wa,Ua,O,pn,Ba,Ka,oo,Ra,Ha,so,Va,Ya,ao,Qa,Ga,ro,Ja,Xa,Za,re,er,hn,tr,nr,at,or,sr,ar,rt,rr,it,ir,lr,ns,un,dr,os,lt,ss,B,cr,dt,pr,hr,ct,ur,mr,pt,fr,gr,as,ie,$e,io,ht,_r,lo,kr,rs,D,ut,yr,le,br,mn,vr,Tr,mt,wr,Lr,Er,de,zr,fn,$r,xr,gn,Fr,qr,Cr,xe,is,ce,Fe,co,ft,Mr,po,Pr,ls,C,gt,jr,ho,Ar,Ir,x,Or,_n,Sr,Nr,kn,Dr,Wr,yn,Ur,Br,uo,Kr,Rr,mo,Hr,Vr,fo,Yr,Qr,go,Gr,Jr,Xr,qe,_t,Zr,_o,ei,ti,bn,kt,ds,pe,Ce,ko,yt,ni,yo,oi,cs,M,bt,si,bo,ai,ri,vt,ii,vn,li,di,ci,Tt,pi,wt,hi,ui,mi,K,Lt,fi,he,gi,Tn,_i,ki,vo,yi,bi,vi,Me,Ti,Pe,ps,ue,je,To,Et,wi,wo,Li,hs,P,zt,Ei,Lo,zi,$i,$t,xi,wn,Fi,qi,Ci,xt,Mi,Ft,Pi,ji,Ai,G,qt,Ii,me,Oi,Ln,Si,Ni,Eo,Di,Wi,Ui,Ae,us,fe,Ie,zo,Ct,Bi,$o,Ki,ms,j,Mt,Ri,xo,Hi,Vi,Pt,Yi,En,Qi,Gi,Ji,jt,Xi,At,Zi,el,tl,R,It,nl,ge,ol,zn,sl,al,Fo,rl,il,ll,Oe,dl,Se,fs,_e,Ne,qo,Ot,cl,Co,pl,gs,A,St,hl,Mo,ul,ml,Nt,fl,$n,gl,_l,kl,Dt,yl,Wt,bl,vl,Tl,H,Ut,wl,ke,Ll,xn,El,zl,Po,$l,xl,Fl,De,ql,We,_s,ye,Ue,jo,Bt,Cl,Ao,Ml,ks,I,Kt,Pl,Io,jl,Al,Rt,Il,Fn,Ol,Sl,Nl,Ht,Dl,Vt,Wl,Ul,Bl,V,Yt,Kl,be,Rl,qn,Hl,Vl,Oo,Yl,Ql,Gl,Be,Jl,Ke,ys;return l=new Te({}),Xe=new Te({}),lt=new Wn({props:{code:`from transformers import LukeTokenizer, LukeModel, LukeForEntityPairClassification

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
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"vocab_size"},{anchor:"transformers.LukeConfig.entity_vocab_size",description:`<strong>entity_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 500000) &#x2014;
Entity vocabulary size of the LUKE model. Defines the number of different entities that can be represented
by the <code>entity_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"entity_vocab_size"},{anchor:"transformers.LukeConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LukeConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LukeConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LukeConfig.use_entity_aware_attention",description:`<strong>use_entity_aware_attention</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether or not the model should use the entity-aware self-attention mechanism proposed in <a href="https://arxiv.org/abs/2010.01057" rel="nofollow">LUKE: Deep
Contextualized Entity Representations with Entity-aware Self-attention (Yamada et
al.)</a>.`,name:"use_entity_aware_attention"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/configuration_luke.py#L29"}}),xe=new Yo({props:{anchor:"transformers.LukeConfig.example",$$slots:{default:[Yc]},$$scope:{ctx:z}}}),ft=new Te({}),gt=new S({props:{name:"class transformers.LukeTokenizer",anchor:"transformers.LukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"entity_vocab_file",val:""},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"entity_unk_token",val:" = '[UNK]'"},{name:"entity_pad_token",val:" = '[PAD]'"},{name:"entity_mask_token",val:" = '[MASK]'"},{name:"entity_mask2_token",val:" = '[MASK2]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<code>task</code> is set to <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_2"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/tokenization_luke.py#L152"}}),_t=new S({props:{name:"__call__",anchor:"transformers.LukeTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"entity_spans",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entity_spans_pair",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entities",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"entities_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_entity_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": typing.Optional[bool] = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LukeTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LukeTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LukeTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.1/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LukeTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LukeTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/tokenization_luke.py#L262",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),kt=new S({props:{name:"save_vocabulary",anchor:"transformers.LukeTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/tokenization_luke.py#L1381"}}),yt=new Te({}),bt=new S({props:{name:"class transformers.LukeModel",anchor:"transformers.LukeModel",parameters:[{name:"config",val:": LukeConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.LukeModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L881"}}),Lt=new S({props:{name:"forward",anchor:"transformers.LukeModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeModel.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L913",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.BaseLukeModelOutputWithPooling</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Me=new Vo({props:{$$slots:{default:[Qc]},$$scope:{ctx:z}}}),Pe=new Yo({props:{anchor:"transformers.LukeModel.forward.example",$$slots:{default:[Gc]},$$scope:{ctx:z}}}),Et=new Te({}),zt=new S({props:{name:"class transformers.LukeForMaskedLM",anchor:"transformers.LukeForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L1134"}}),qt=new S({props:{name:"forward",anchor:"transformers.LukeForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LukeForMaskedLM.forward.entity_labels",description:`<strong>entity_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"entity_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L1170",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeMaskedLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Ae=new Vo({props:{$$slots:{default:[Jc]},$$scope:{ctx:z}}}),Ct=new Te({}),Mt=new S({props:{name:"class transformers.LukeForEntityClassification",anchor:"transformers.LukeForEntityClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L1272"}}),It=new S({props:{name:"forward",anchor:"transformers.LukeForEntityClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L1285",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntityClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Oe=new Vo({props:{$$slots:{default:[Xc]},$$scope:{ctx:z}}}),Se=new Yo({props:{anchor:"transformers.LukeForEntityClassification.forward.example",$$slots:{default:[Zc]},$$scope:{ctx:z}}}),Ot=new Te({}),St=new S({props:{name:"class transformers.LukeForEntityPairClassification",anchor:"transformers.LukeForEntityPairClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L1387"}}),Ut=new S({props:{name:"forward",anchor:"transformers.LukeForEntityPairClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityPairClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L1400",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntityPairClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),De=new Vo({props:{$$slots:{default:[ep]},$$scope:{ctx:z}}}),We=new Yo({props:{anchor:"transformers.LukeForEntityPairClassification.forward.example",$$slots:{default:[tp]},$$scope:{ctx:z}}}),Bt=new Te({}),Kt=new S({props:{name:"class transformers.LukeForEntitySpanClassification",anchor:"transformers.LukeForEntitySpanClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L1507"}}),Yt=new S({props:{name:"forward",anchor:"transformers.LukeForEntitySpanClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_start_positions",description:`<strong>entity_start_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The start positions of entities in the word token sequence.`,name:"entity_start_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_end_positions",description:`<strong>entity_end_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The end positions of entities in the word token sequence.`,name:"entity_end_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code> or <code>(batch_size, entity_length, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size, entity_length)</code>, the cross
entropy loss is used for the single-label classification. In this case, labels should contain the indices
that should be in <code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, entity_length, num_labels)</code>, the binary cross entropy loss is used for the multi-label classification. In this case,
labels should only contain <code>[0, 1]</code>, where 0 and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/luke/modeling_luke.py#L1520",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntitySpanClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Be=new Vo({props:{$$slots:{default:[np]},$$scope:{ctx:z}}}),Ke=new Yo({props:{anchor:"transformers.LukeForEntitySpanClassification.forward.example",$$slots:{default:[op]},$$scope:{ctx:z}}}),{c(){h=a("meta"),y=c(),g=a("h1"),f=a("a"),k=a("span"),b(l.$$.fragment),u=c(),$=a("span"),Us=o("LUKE"),Go=c(),se=a("h2"),we=a("a"),Un=a("span"),b(Xe.$$.fragment),Bs=c(),Bn=a("span"),Ks=o("Overview"),Jo=c(),Le=a("p"),Rs=o("The LUKE model was proposed in "),Ze=a("a"),Hs=o("LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),Vs=o(` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
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
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),ea=c(),Hn=a("li"),q=a("p"),ta=o("LUKE treats entities as input tokens; therefore, it takes "),Vn=a("code"),na=o("entity_ids"),oa=o(", "),Yn=a("code"),sa=o("entity_attention_mask"),aa=o(`,
`),Qn=a("code"),ra=o("entity_token_type_ids"),ia=o(" and "),Gn=a("code"),la=o("entity_position_ids"),da=o(` as extra input. You can obtain those using
`),nn=a("a"),ca=o("LukeTokenizer"),pa=o("."),ha=c(),tt=a("li"),U=a("p"),on=a("a"),ua=o("LukeTokenizer"),ma=o(" takes "),Jn=a("code"),fa=o("entities"),ga=o(" and "),Xn=a("code"),_a=o("entity_spans"),ka=o(` (character-based start and end
positions of the entities in the input text) as extra input. `),Zn=a("code"),ya=o("entities"),ba=o(` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),va=c(),nt=a("ul"),sn=a("li"),eo=a("em"),Ta=o("Inputting [MASK] entities to compute entity representations"),wa=o(`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),La=c(),an=a("li"),to=a("em"),Ea=o("Inputting Wikipedia entities to compute knowledge-enhanced token representations"),za=o(`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),$a=c(),N=a("li"),no=a("p"),xa=o("There are three head models for the former use case:"),Fa=c(),ae=a("ul"),Ee=a("li"),rn=a("a"),qa=o("LukeForEntityClassification"),Ca=o(`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),ot=a("a"),Ma=o("Open Entity dataset"),Pa=o(`.
This model places a linear head on top of the output entity representation.`),ja=c(),ze=a("li"),ln=a("a"),Aa=o("LukeForEntityPairClassification"),Ia=o(`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),st=a("a"),Oa=o("TACRED dataset"),Sa=o(`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),Na=c(),dn=a("li"),cn=a("a"),Da=o("LukeForEntitySpanClassification"),Wa=o(`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),Ua=c(),O=a("p"),pn=a("a"),Ba=o("LukeTokenizer"),Ka=o(" has a "),oo=a("code"),Ra=o("task"),Ha=o(` argument, which enables you to easily create an input to these
head models by specifying `),so=a("code"),Va=o('task="entity_classification"'),Ya=o(", "),ao=a("code"),Qa=o('task="entity_pair_classification"'),Ga=o(`, or
`),ro=a("code"),Ja=o('task="entity_span_classification"'),Xa=o(". Please refer to the example code of each head models."),Za=c(),re=a("p"),er=o("A demo notebook on how to fine-tune "),hn=a("a"),tr=o("LukeForEntityPairClassification"),nr=o(` for relation
classification can be found `),at=a("a"),or=o("here"),sr=o("."),ar=c(),rt=a("p"),rr=o(`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),it=a("a"),ir=o("here"),lr=o("."),ns=c(),un=a("p"),dr=o("Example:"),os=c(),b(lt.$$.fragment),ss=c(),B=a("p"),cr=o("This model was contributed by "),dt=a("a"),pr=o("ikuyamada"),hr=o(" and "),ct=a("a"),ur=o("nielsr"),mr=o(". The original code can be found "),pt=a("a"),fr=o("here"),gr=o("."),as=c(),ie=a("h2"),$e=a("a"),io=a("span"),b(ht.$$.fragment),_r=c(),lo=a("span"),kr=o("LukeConfig"),rs=c(),D=a("div"),b(ut.$$.fragment),yr=c(),le=a("p"),br=o("This is the configuration class to store the configuration of a "),mn=a("a"),vr=o("LukeModel"),Tr=o(`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LUKE
`),mt=a("a"),wr=o("studio-ousia/luke-base"),Lr=o(" architecture."),Er=c(),de=a("p"),zr=o("Configuration objects inherit from "),fn=a("a"),$r=o("PretrainedConfig"),xr=o(` and can be used to control the model outputs. Read the
documentation from `),gn=a("a"),Fr=o("PretrainedConfig"),qr=o(" for more information."),Cr=c(),b(xe.$$.fragment),is=c(),ce=a("h2"),Fe=a("a"),co=a("span"),b(ft.$$.fragment),Mr=c(),po=a("span"),Pr=o("LukeTokenizer"),ls=c(),C=a("div"),b(gt.$$.fragment),jr=c(),ho=a("p"),Ar=o("Construct a LUKE tokenizer."),Ir=c(),x=a("p"),Or=o("This tokenizer inherits from "),_n=a("a"),Sr=o("RobertaTokenizer"),Nr=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),kn=a("a"),Dr=o("RobertaTokenizer"),Wr=o(", "),yn=a("a"),Ur=o("LukeTokenizer"),Br=o(`
also creates entity sequences, namely `),uo=a("code"),Kr=o("entity_ids"),Rr=o(", "),mo=a("code"),Hr=o("entity_attention_mask"),Vr=o(", "),fo=a("code"),Yr=o("entity_token_type_ids"),Qr=o(`, and
`),go=a("code"),Gr=o("entity_position_ids"),Jr=o(" to be used by the LUKE model."),Xr=c(),qe=a("div"),b(_t.$$.fragment),Zr=c(),_o=a("p"),ei=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),ti=c(),bn=a("div"),b(kt.$$.fragment),ds=c(),pe=a("h2"),Ce=a("a"),ko=a("span"),b(yt.$$.fragment),ni=c(),yo=a("span"),oi=o("LukeModel"),cs=c(),M=a("div"),b(bt.$$.fragment),si=c(),bo=a("p"),ai=o("The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),ri=c(),vt=a("p"),ii=o("This model inherits from "),vn=a("a"),li=o("PreTrainedModel"),di=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ci=c(),Tt=a("p"),pi=o("This model is also a PyTorch "),wt=a("a"),hi=o("torch.nn.Module"),ui=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mi=c(),K=a("div"),b(Lt.$$.fragment),fi=c(),he=a("p"),gi=o("The "),Tn=a("a"),_i=o("LukeModel"),ki=o(" forward method, overrides the "),vo=a("code"),yi=o("__call__"),bi=o(" special method."),vi=c(),b(Me.$$.fragment),Ti=c(),b(Pe.$$.fragment),ps=c(),ue=a("h2"),je=a("a"),To=a("span"),b(Et.$$.fragment),wi=c(),wo=a("span"),Li=o("LukeForMaskedLM"),hs=c(),P=a("div"),b(zt.$$.fragment),Ei=c(),Lo=a("p"),zi=o(`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),$i=c(),$t=a("p"),xi=o("This model inherits from "),wn=a("a"),Fi=o("PreTrainedModel"),qi=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ci=c(),xt=a("p"),Mi=o("This model is also a PyTorch "),Ft=a("a"),Pi=o("torch.nn.Module"),ji=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ai=c(),G=a("div"),b(qt.$$.fragment),Ii=c(),me=a("p"),Oi=o("The "),Ln=a("a"),Si=o("LukeForMaskedLM"),Ni=o(" forward method, overrides the "),Eo=a("code"),Di=o("__call__"),Wi=o(" special method."),Ui=c(),b(Ae.$$.fragment),us=c(),fe=a("h2"),Ie=a("a"),zo=a("span"),b(Ct.$$.fragment),Bi=c(),$o=a("span"),Ki=o("LukeForEntityClassification"),ms=c(),j=a("div"),b(Mt.$$.fragment),Ri=c(),xo=a("p"),Hi=o(`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),Vi=c(),Pt=a("p"),Yi=o("This model inherits from "),En=a("a"),Qi=o("PreTrainedModel"),Gi=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ji=c(),jt=a("p"),Xi=o("This model is also a PyTorch "),At=a("a"),Zi=o("torch.nn.Module"),el=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tl=c(),R=a("div"),b(It.$$.fragment),nl=c(),ge=a("p"),ol=o("The "),zn=a("a"),sl=o("LukeForEntityClassification"),al=o(" forward method, overrides the "),Fo=a("code"),rl=o("__call__"),il=o(" special method."),ll=c(),b(Oe.$$.fragment),dl=c(),b(Se.$$.fragment),fs=c(),_e=a("h2"),Ne=a("a"),qo=a("span"),b(Ot.$$.fragment),cl=c(),Co=a("span"),pl=o("LukeForEntityPairClassification"),gs=c(),A=a("div"),b(St.$$.fragment),hl=c(),Mo=a("p"),ul=o(`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),ml=c(),Nt=a("p"),fl=o("This model inherits from "),$n=a("a"),gl=o("PreTrainedModel"),_l=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl=c(),Dt=a("p"),yl=o("This model is also a PyTorch "),Wt=a("a"),bl=o("torch.nn.Module"),vl=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tl=c(),H=a("div"),b(Ut.$$.fragment),wl=c(),ke=a("p"),Ll=o("The "),xn=a("a"),El=o("LukeForEntityPairClassification"),zl=o(" forward method, overrides the "),Po=a("code"),$l=o("__call__"),xl=o(" special method."),Fl=c(),b(De.$$.fragment),ql=c(),b(We.$$.fragment),_s=c(),ye=a("h2"),Ue=a("a"),jo=a("span"),b(Bt.$$.fragment),Cl=c(),Ao=a("span"),Ml=o("LukeForEntitySpanClassification"),ks=c(),I=a("div"),b(Kt.$$.fragment),Pl=c(),Io=a("p"),jl=o(`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),Al=c(),Rt=a("p"),Il=o("This model inherits from "),Fn=a("a"),Ol=o("PreTrainedModel"),Sl=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl=c(),Ht=a("p"),Dl=o("This model is also a PyTorch "),Vt=a("a"),Wl=o("torch.nn.Module"),Ul=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bl=c(),V=a("div"),b(Yt.$$.fragment),Kl=c(),be=a("p"),Rl=o("The "),qn=a("a"),Hl=o("LukeForEntitySpanClassification"),Vl=o(" forward method, overrides the "),Oo=a("code"),Yl=o("__call__"),Ql=o(" special method."),Gl=c(),b(Be.$$.fragment),Jl=c(),b(Ke.$$.fragment),this.h()},l(n){const m=Hc('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),y=p(n),g=r(n,"H1",{class:!0});var Qt=i(g);f=r(Qt,"A",{id:!0,class:!0,href:!0});var So=i(f);k=r(So,"SPAN",{});var No=i(k);v(l.$$.fragment,No),No.forEach(t),So.forEach(t),u=p(Qt),$=r(Qt,"SPAN",{});var Do=i($);Us=s(Do,"LUKE"),Do.forEach(t),Qt.forEach(t),Go=p(n),se=r(n,"H2",{class:!0});var Gt=i(se);we=r(Gt,"A",{id:!0,class:!0,href:!0});var Wo=i(we);Un=r(Wo,"SPAN",{});var Uo=i(Un);v(Xe.$$.fragment,Uo),Uo.forEach(t),Wo.forEach(t),Bs=p(Gt),Bn=r(Gt,"SPAN",{});var Bo=i(Bn);Ks=s(Bo,"Overview"),Bo.forEach(t),Gt.forEach(t),Jo=p(n),Le=r(n,"P",{});var Jt=i(Le);Rs=s(Jt,"The LUKE model was proposed in "),Ze=r(Jt,"A",{href:!0,rel:!0});var Ko=i(Ze);Hs=s(Ko,"LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),Ko.forEach(t),Vs=s(Jt,` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`),Jt.forEach(t),Xo=p(n),Xt=r(n,"P",{});var td=i(Xt);Ys=s(td,"The abstract from the paper is the following:"),td.forEach(t),Zo=p(n),Zt=r(n,"P",{});var nd=i(Zt);Kn=r(nd,"EM",{});var od=i(Kn);Qs=s(od,`Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).`),od.forEach(t),nd.forEach(t),es=p(n),en=r(n,"P",{});var sd=i(en);Gs=s(sd,"Tips:"),sd.forEach(t),ts=p(n),W=r(n,"UL",{});var Re=i(W);Rn=r(Re,"LI",{});var ad=i(Rn);et=r(ad,"P",{});var bs=i(et);Js=s(bs,"This implementation is the same as "),tn=r(bs,"A",{href:!0});var rd=i(tn);Xs=s(rd,"RobertaModel"),rd.forEach(t),Zs=s(bs,` with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),bs.forEach(t),ad.forEach(t),ea=p(Re),Hn=r(Re,"LI",{});var id=i(Hn);q=r(id,"P",{});var Y=i(q);ta=s(Y,"LUKE treats entities as input tokens; therefore, it takes "),Vn=r(Y,"CODE",{});var ld=i(Vn);na=s(ld,"entity_ids"),ld.forEach(t),oa=s(Y,", "),Yn=r(Y,"CODE",{});var dd=i(Yn);sa=s(dd,"entity_attention_mask"),dd.forEach(t),aa=s(Y,`,
`),Qn=r(Y,"CODE",{});var cd=i(Qn);ra=s(cd,"entity_token_type_ids"),cd.forEach(t),ia=s(Y," and "),Gn=r(Y,"CODE",{});var pd=i(Gn);la=s(pd,"entity_position_ids"),pd.forEach(t),da=s(Y,` as extra input. You can obtain those using
`),nn=r(Y,"A",{href:!0});var hd=i(nn);ca=s(hd,"LukeTokenizer"),hd.forEach(t),pa=s(Y,"."),Y.forEach(t),id.forEach(t),ha=p(Re),tt=r(Re,"LI",{});var vs=i(tt);U=r(vs,"P",{});var ve=i(U);on=r(ve,"A",{href:!0});var ud=i(on);ua=s(ud,"LukeTokenizer"),ud.forEach(t),ma=s(ve," takes "),Jn=r(ve,"CODE",{});var md=i(Jn);fa=s(md,"entities"),md.forEach(t),ga=s(ve," and "),Xn=r(ve,"CODE",{});var fd=i(Xn);_a=s(fd,"entity_spans"),fd.forEach(t),ka=s(ve,` (character-based start and end
positions of the entities in the input text) as extra input. `),Zn=r(ve,"CODE",{});var gd=i(Zn);ya=s(gd,"entities"),gd.forEach(t),ba=s(ve,` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),ve.forEach(t),va=p(vs),nt=r(vs,"UL",{});var Ts=i(nt);sn=r(Ts,"LI",{});var Xl=i(sn);eo=r(Xl,"EM",{});var _d=i(eo);Ta=s(_d,"Inputting [MASK] entities to compute entity representations"),_d.forEach(t),wa=s(Xl,`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),Xl.forEach(t),La=p(Ts),an=r(Ts,"LI",{});var Zl=i(an);to=r(Zl,"EM",{});var kd=i(to);Ea=s(kd,"Inputting Wikipedia entities to compute knowledge-enhanced token representations"),kd.forEach(t),za=s(Zl,`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),Zl.forEach(t),Ts.forEach(t),vs.forEach(t),$a=p(Re),N=r(Re,"LI",{});var J=i(N);no=r(J,"P",{});var yd=i(no);xa=s(yd,"There are three head models for the former use case:"),yd.forEach(t),Fa=p(J),ae=r(J,"UL",{});var Cn=i(ae);Ee=r(Cn,"LI",{});var Ro=i(Ee);rn=r(Ro,"A",{href:!0});var bd=i(rn);qa=s(bd,"LukeForEntityClassification"),bd.forEach(t),Ca=s(Ro,`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),ot=r(Ro,"A",{href:!0,rel:!0});var vd=i(ot);Ma=s(vd,"Open Entity dataset"),vd.forEach(t),Pa=s(Ro,`.
This model places a linear head on top of the output entity representation.`),Ro.forEach(t),ja=p(Cn),ze=r(Cn,"LI",{});var Ho=i(ze);ln=r(Ho,"A",{href:!0});var Td=i(ln);Aa=s(Td,"LukeForEntityPairClassification"),Td.forEach(t),Ia=s(Ho,`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),st=r(Ho,"A",{href:!0,rel:!0});var wd=i(st);Oa=s(wd,"TACRED dataset"),wd.forEach(t),Sa=s(Ho,`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),Ho.forEach(t),Na=p(Cn),dn=r(Cn,"LI",{});var ed=i(dn);cn=r(ed,"A",{href:!0});var Ld=i(cn);Da=s(Ld,"LukeForEntitySpanClassification"),Ld.forEach(t),Wa=s(ed,`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),ed.forEach(t),Cn.forEach(t),Ua=p(J),O=r(J,"P",{});var Q=i(O);pn=r(Q,"A",{href:!0});var Ed=i(pn);Ba=s(Ed,"LukeTokenizer"),Ed.forEach(t),Ka=s(Q," has a "),oo=r(Q,"CODE",{});var zd=i(oo);Ra=s(zd,"task"),zd.forEach(t),Ha=s(Q,` argument, which enables you to easily create an input to these
head models by specifying `),so=r(Q,"CODE",{});var $d=i(so);Va=s($d,'task="entity_classification"'),$d.forEach(t),Ya=s(Q,", "),ao=r(Q,"CODE",{});var xd=i(ao);Qa=s(xd,'task="entity_pair_classification"'),xd.forEach(t),Ga=s(Q,`, or
`),ro=r(Q,"CODE",{});var Fd=i(ro);Ja=s(Fd,'task="entity_span_classification"'),Fd.forEach(t),Xa=s(Q,". Please refer to the example code of each head models."),Q.forEach(t),Za=p(J),re=r(J,"P",{});var Mn=i(re);er=s(Mn,"A demo notebook on how to fine-tune "),hn=r(Mn,"A",{href:!0});var qd=i(hn);tr=s(qd,"LukeForEntityPairClassification"),qd.forEach(t),nr=s(Mn,` for relation
classification can be found `),at=r(Mn,"A",{href:!0,rel:!0});var Cd=i(at);or=s(Cd,"here"),Cd.forEach(t),sr=s(Mn,"."),Mn.forEach(t),ar=p(J),rt=r(J,"P",{});var ws=i(rt);rr=s(ws,`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),it=r(ws,"A",{href:!0,rel:!0});var Md=i(it);ir=s(Md,"here"),Md.forEach(t),lr=s(ws,"."),ws.forEach(t),J.forEach(t),Re.forEach(t),ns=p(n),un=r(n,"P",{});var Pd=i(un);dr=s(Pd,"Example:"),Pd.forEach(t),os=p(n),v(lt.$$.fragment,n),ss=p(n),B=r(n,"P",{});var He=i(B);cr=s(He,"This model was contributed by "),dt=r(He,"A",{href:!0,rel:!0});var jd=i(dt);pr=s(jd,"ikuyamada"),jd.forEach(t),hr=s(He," and "),ct=r(He,"A",{href:!0,rel:!0});var Ad=i(ct);ur=s(Ad,"nielsr"),Ad.forEach(t),mr=s(He,". The original code can be found "),pt=r(He,"A",{href:!0,rel:!0});var Id=i(pt);fr=s(Id,"here"),Id.forEach(t),gr=s(He,"."),He.forEach(t),as=p(n),ie=r(n,"H2",{class:!0});var Ls=i(ie);$e=r(Ls,"A",{id:!0,class:!0,href:!0});var Od=i($e);io=r(Od,"SPAN",{});var Sd=i(io);v(ht.$$.fragment,Sd),Sd.forEach(t),Od.forEach(t),_r=p(Ls),lo=r(Ls,"SPAN",{});var Nd=i(lo);kr=s(Nd,"LukeConfig"),Nd.forEach(t),Ls.forEach(t),rs=p(n),D=r(n,"DIV",{class:!0});var Ve=i(D);v(ut.$$.fragment,Ve),yr=p(Ve),le=r(Ve,"P",{});var Pn=i(le);br=s(Pn,"This is the configuration class to store the configuration of a "),mn=r(Pn,"A",{href:!0});var Dd=i(mn);vr=s(Dd,"LukeModel"),Dd.forEach(t),Tr=s(Pn,`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LUKE
`),mt=r(Pn,"A",{href:!0,rel:!0});var Wd=i(mt);wr=s(Wd,"studio-ousia/luke-base"),Wd.forEach(t),Lr=s(Pn," architecture."),Pn.forEach(t),Er=p(Ve),de=r(Ve,"P",{});var jn=i(de);zr=s(jn,"Configuration objects inherit from "),fn=r(jn,"A",{href:!0});var Ud=i(fn);$r=s(Ud,"PretrainedConfig"),Ud.forEach(t),xr=s(jn,` and can be used to control the model outputs. Read the
documentation from `),gn=r(jn,"A",{href:!0});var Bd=i(gn);Fr=s(Bd,"PretrainedConfig"),Bd.forEach(t),qr=s(jn," for more information."),jn.forEach(t),Cr=p(Ve),v(xe.$$.fragment,Ve),Ve.forEach(t),is=p(n),ce=r(n,"H2",{class:!0});var Es=i(ce);Fe=r(Es,"A",{id:!0,class:!0,href:!0});var Kd=i(Fe);co=r(Kd,"SPAN",{});var Rd=i(co);v(ft.$$.fragment,Rd),Rd.forEach(t),Kd.forEach(t),Mr=p(Es),po=r(Es,"SPAN",{});var Hd=i(po);Pr=s(Hd,"LukeTokenizer"),Hd.forEach(t),Es.forEach(t),ls=p(n),C=r(n,"DIV",{class:!0});var X=i(C);v(gt.$$.fragment,X),jr=p(X),ho=r(X,"P",{});var Vd=i(ho);Ar=s(Vd,"Construct a LUKE tokenizer."),Vd.forEach(t),Ir=p(X),x=r(X,"P",{});var F=i(x);Or=s(F,"This tokenizer inherits from "),_n=r(F,"A",{href:!0});var Yd=i(_n);Sr=s(Yd,"RobertaTokenizer"),Yd.forEach(t),Nr=s(F,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),kn=r(F,"A",{href:!0});var Qd=i(kn);Dr=s(Qd,"RobertaTokenizer"),Qd.forEach(t),Wr=s(F,", "),yn=r(F,"A",{href:!0});var Gd=i(yn);Ur=s(Gd,"LukeTokenizer"),Gd.forEach(t),Br=s(F,`
also creates entity sequences, namely `),uo=r(F,"CODE",{});var Jd=i(uo);Kr=s(Jd,"entity_ids"),Jd.forEach(t),Rr=s(F,", "),mo=r(F,"CODE",{});var Xd=i(mo);Hr=s(Xd,"entity_attention_mask"),Xd.forEach(t),Vr=s(F,", "),fo=r(F,"CODE",{});var Zd=i(fo);Yr=s(Zd,"entity_token_type_ids"),Zd.forEach(t),Qr=s(F,`, and
`),go=r(F,"CODE",{});var ec=i(go);Gr=s(ec,"entity_position_ids"),ec.forEach(t),Jr=s(F," to be used by the LUKE model."),F.forEach(t),Xr=p(X),qe=r(X,"DIV",{class:!0});var zs=i(qe);v(_t.$$.fragment,zs),Zr=p(zs),_o=r(zs,"P",{});var tc=i(_o);ei=s(tc,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),tc.forEach(t),zs.forEach(t),ti=p(X),bn=r(X,"DIV",{class:!0});var nc=i(bn);v(kt.$$.fragment,nc),nc.forEach(t),X.forEach(t),ds=p(n),pe=r(n,"H2",{class:!0});var $s=i(pe);Ce=r($s,"A",{id:!0,class:!0,href:!0});var oc=i(Ce);ko=r(oc,"SPAN",{});var sc=i(ko);v(yt.$$.fragment,sc),sc.forEach(t),oc.forEach(t),ni=p($s),yo=r($s,"SPAN",{});var ac=i(yo);oi=s(ac,"LukeModel"),ac.forEach(t),$s.forEach(t),cs=p(n),M=r(n,"DIV",{class:!0});var Z=i(M);v(bt.$$.fragment,Z),si=p(Z),bo=r(Z,"P",{});var rc=i(bo);ai=s(rc,"The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),rc.forEach(t),ri=p(Z),vt=r(Z,"P",{});var xs=i(vt);ii=s(xs,"This model inherits from "),vn=r(xs,"A",{href:!0});var ic=i(vn);li=s(ic,"PreTrainedModel"),ic.forEach(t),di=s(xs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xs.forEach(t),ci=p(Z),Tt=r(Z,"P",{});var Fs=i(Tt);pi=s(Fs,"This model is also a PyTorch "),wt=r(Fs,"A",{href:!0,rel:!0});var lc=i(wt);hi=s(lc,"torch.nn.Module"),lc.forEach(t),ui=s(Fs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fs.forEach(t),mi=p(Z),K=r(Z,"DIV",{class:!0});var Ye=i(K);v(Lt.$$.fragment,Ye),fi=p(Ye),he=r(Ye,"P",{});var An=i(he);gi=s(An,"The "),Tn=r(An,"A",{href:!0});var dc=i(Tn);_i=s(dc,"LukeModel"),dc.forEach(t),ki=s(An," forward method, overrides the "),vo=r(An,"CODE",{});var cc=i(vo);yi=s(cc,"__call__"),cc.forEach(t),bi=s(An," special method."),An.forEach(t),vi=p(Ye),v(Me.$$.fragment,Ye),Ti=p(Ye),v(Pe.$$.fragment,Ye),Ye.forEach(t),Z.forEach(t),ps=p(n),ue=r(n,"H2",{class:!0});var qs=i(ue);je=r(qs,"A",{id:!0,class:!0,href:!0});var pc=i(je);To=r(pc,"SPAN",{});var hc=i(To);v(Et.$$.fragment,hc),hc.forEach(t),pc.forEach(t),wi=p(qs),wo=r(qs,"SPAN",{});var uc=i(wo);Li=s(uc,"LukeForMaskedLM"),uc.forEach(t),qs.forEach(t),hs=p(n),P=r(n,"DIV",{class:!0});var ee=i(P);v(zt.$$.fragment,ee),Ei=p(ee),Lo=r(ee,"P",{});var mc=i(Lo);zi=s(mc,`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),mc.forEach(t),$i=p(ee),$t=r(ee,"P",{});var Cs=i($t);xi=s(Cs,"This model inherits from "),wn=r(Cs,"A",{href:!0});var fc=i(wn);Fi=s(fc,"PreTrainedModel"),fc.forEach(t),qi=s(Cs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cs.forEach(t),Ci=p(ee),xt=r(ee,"P",{});var Ms=i(xt);Mi=s(Ms,"This model is also a PyTorch "),Ft=r(Ms,"A",{href:!0,rel:!0});var gc=i(Ft);Pi=s(gc,"torch.nn.Module"),gc.forEach(t),ji=s(Ms,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ms.forEach(t),Ai=p(ee),G=r(ee,"DIV",{class:!0});var In=i(G);v(qt.$$.fragment,In),Ii=p(In),me=r(In,"P",{});var On=i(me);Oi=s(On,"The "),Ln=r(On,"A",{href:!0});var _c=i(Ln);Si=s(_c,"LukeForMaskedLM"),_c.forEach(t),Ni=s(On," forward method, overrides the "),Eo=r(On,"CODE",{});var kc=i(Eo);Di=s(kc,"__call__"),kc.forEach(t),Wi=s(On," special method."),On.forEach(t),Ui=p(In),v(Ae.$$.fragment,In),In.forEach(t),ee.forEach(t),us=p(n),fe=r(n,"H2",{class:!0});var Ps=i(fe);Ie=r(Ps,"A",{id:!0,class:!0,href:!0});var yc=i(Ie);zo=r(yc,"SPAN",{});var bc=i(zo);v(Ct.$$.fragment,bc),bc.forEach(t),yc.forEach(t),Bi=p(Ps),$o=r(Ps,"SPAN",{});var vc=i($o);Ki=s(vc,"LukeForEntityClassification"),vc.forEach(t),Ps.forEach(t),ms=p(n),j=r(n,"DIV",{class:!0});var te=i(j);v(Mt.$$.fragment,te),Ri=p(te),xo=r(te,"P",{});var Tc=i(xo);Hi=s(Tc,`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),Tc.forEach(t),Vi=p(te),Pt=r(te,"P",{});var js=i(Pt);Yi=s(js,"This model inherits from "),En=r(js,"A",{href:!0});var wc=i(En);Qi=s(wc,"PreTrainedModel"),wc.forEach(t),Gi=s(js,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),js.forEach(t),Ji=p(te),jt=r(te,"P",{});var As=i(jt);Xi=s(As,"This model is also a PyTorch "),At=r(As,"A",{href:!0,rel:!0});var Lc=i(At);Zi=s(Lc,"torch.nn.Module"),Lc.forEach(t),el=s(As,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),As.forEach(t),tl=p(te),R=r(te,"DIV",{class:!0});var Qe=i(R);v(It.$$.fragment,Qe),nl=p(Qe),ge=r(Qe,"P",{});var Sn=i(ge);ol=s(Sn,"The "),zn=r(Sn,"A",{href:!0});var Ec=i(zn);sl=s(Ec,"LukeForEntityClassification"),Ec.forEach(t),al=s(Sn," forward method, overrides the "),Fo=r(Sn,"CODE",{});var zc=i(Fo);rl=s(zc,"__call__"),zc.forEach(t),il=s(Sn," special method."),Sn.forEach(t),ll=p(Qe),v(Oe.$$.fragment,Qe),dl=p(Qe),v(Se.$$.fragment,Qe),Qe.forEach(t),te.forEach(t),fs=p(n),_e=r(n,"H2",{class:!0});var Is=i(_e);Ne=r(Is,"A",{id:!0,class:!0,href:!0});var $c=i(Ne);qo=r($c,"SPAN",{});var xc=i(qo);v(Ot.$$.fragment,xc),xc.forEach(t),$c.forEach(t),cl=p(Is),Co=r(Is,"SPAN",{});var Fc=i(Co);pl=s(Fc,"LukeForEntityPairClassification"),Fc.forEach(t),Is.forEach(t),gs=p(n),A=r(n,"DIV",{class:!0});var ne=i(A);v(St.$$.fragment,ne),hl=p(ne),Mo=r(ne,"P",{});var qc=i(Mo);ul=s(qc,`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),qc.forEach(t),ml=p(ne),Nt=r(ne,"P",{});var Os=i(Nt);fl=s(Os,"This model inherits from "),$n=r(Os,"A",{href:!0});var Cc=i($n);gl=s(Cc,"PreTrainedModel"),Cc.forEach(t),_l=s(Os,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Os.forEach(t),kl=p(ne),Dt=r(ne,"P",{});var Ss=i(Dt);yl=s(Ss,"This model is also a PyTorch "),Wt=r(Ss,"A",{href:!0,rel:!0});var Mc=i(Wt);bl=s(Mc,"torch.nn.Module"),Mc.forEach(t),vl=s(Ss,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ss.forEach(t),Tl=p(ne),H=r(ne,"DIV",{class:!0});var Ge=i(H);v(Ut.$$.fragment,Ge),wl=p(Ge),ke=r(Ge,"P",{});var Nn=i(ke);Ll=s(Nn,"The "),xn=r(Nn,"A",{href:!0});var Pc=i(xn);El=s(Pc,"LukeForEntityPairClassification"),Pc.forEach(t),zl=s(Nn," forward method, overrides the "),Po=r(Nn,"CODE",{});var jc=i(Po);$l=s(jc,"__call__"),jc.forEach(t),xl=s(Nn," special method."),Nn.forEach(t),Fl=p(Ge),v(De.$$.fragment,Ge),ql=p(Ge),v(We.$$.fragment,Ge),Ge.forEach(t),ne.forEach(t),_s=p(n),ye=r(n,"H2",{class:!0});var Ns=i(ye);Ue=r(Ns,"A",{id:!0,class:!0,href:!0});var Ac=i(Ue);jo=r(Ac,"SPAN",{});var Ic=i(jo);v(Bt.$$.fragment,Ic),Ic.forEach(t),Ac.forEach(t),Cl=p(Ns),Ao=r(Ns,"SPAN",{});var Oc=i(Ao);Ml=s(Oc,"LukeForEntitySpanClassification"),Oc.forEach(t),Ns.forEach(t),ks=p(n),I=r(n,"DIV",{class:!0});var oe=i(I);v(Kt.$$.fragment,oe),Pl=p(oe),Io=r(oe,"P",{});var Sc=i(Io);jl=s(Sc,`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),Sc.forEach(t),Al=p(oe),Rt=r(oe,"P",{});var Ds=i(Rt);Il=s(Ds,"This model inherits from "),Fn=r(Ds,"A",{href:!0});var Nc=i(Fn);Ol=s(Nc,"PreTrainedModel"),Nc.forEach(t),Sl=s(Ds,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ds.forEach(t),Nl=p(oe),Ht=r(oe,"P",{});var Ws=i(Ht);Dl=s(Ws,"This model is also a PyTorch "),Vt=r(Ws,"A",{href:!0,rel:!0});var Dc=i(Vt);Wl=s(Dc,"torch.nn.Module"),Dc.forEach(t),Ul=s(Ws,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ws.forEach(t),Bl=p(oe),V=r(oe,"DIV",{class:!0});var Je=i(V);v(Yt.$$.fragment,Je),Kl=p(Je),be=r(Je,"P",{});var Dn=i(be);Rl=s(Dn,"The "),qn=r(Dn,"A",{href:!0});var Wc=i(qn);Hl=s(Wc,"LukeForEntitySpanClassification"),Wc.forEach(t),Vl=s(Dn," forward method, overrides the "),Oo=r(Dn,"CODE",{});var Uc=i(Oo);Yl=s(Uc,"__call__"),Uc.forEach(t),Ql=s(Dn," special method."),Dn.forEach(t),Gl=p(Je),v(Be.$$.fragment,Je),Jl=p(Je),v(Ke.$$.fragment,Je),Je.forEach(t),oe.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(ap)),d(f,"id","luke"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#luke"),d(g,"class","relative group"),d(we,"id","overview"),d(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(we,"href","#overview"),d(se,"class","relative group"),d(Ze,"href","https://arxiv.org/abs/2010.01057"),d(Ze,"rel","nofollow"),d(tn,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaModel"),d(nn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer"),d(on,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer"),d(rn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeForEntityClassification"),d(ot,"href","https://www.cs.utexas.edu/~eunsol/html_pages/open_entity.html"),d(ot,"rel","nofollow"),d(ln,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeForEntityPairClassification"),d(st,"href","https://nlp.stanford.edu/projects/tacred/"),d(st,"rel","nofollow"),d(cn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),d(pn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer"),d(hn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeForEntityPairClassification"),d(at,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LUKE"),d(at,"rel","nofollow"),d(it,"href","https://github.com/studio-ousia/luke/tree/master/notebooks"),d(it,"rel","nofollow"),d(dt,"href","https://huggingface.co/ikuyamada"),d(dt,"rel","nofollow"),d(ct,"href","https://huggingface.co/nielsr"),d(ct,"rel","nofollow"),d(pt,"href","https://github.com/studio-ousia/luke"),d(pt,"rel","nofollow"),d($e,"id","transformers.LukeConfig"),d($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($e,"href","#transformers.LukeConfig"),d(ie,"class","relative group"),d(mn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeModel"),d(mt,"href","https://huggingface.co/studio-ousia/luke-base"),d(mt,"rel","nofollow"),d(fn,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),d(gn,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Fe,"id","transformers.LukeTokenizer"),d(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Fe,"href","#transformers.LukeTokenizer"),d(ce,"class","relative group"),d(_n,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer"),d(kn,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer"),d(yn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeTokenizer"),d(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(bn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ce,"id","transformers.LukeModel"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#transformers.LukeModel"),d(pe,"class","relative group"),d(vn,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),d(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(wt,"rel","nofollow"),d(Tn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeModel"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(je,"id","transformers.LukeForMaskedLM"),d(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(je,"href","#transformers.LukeForMaskedLM"),d(ue,"class","relative group"),d(wn,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),d(Ft,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ft,"rel","nofollow"),d(Ln,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeForMaskedLM"),d(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ie,"id","transformers.LukeForEntityClassification"),d(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ie,"href","#transformers.LukeForEntityClassification"),d(fe,"class","relative group"),d(En,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),d(At,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(At,"rel","nofollow"),d(zn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeForEntityClassification"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ne,"id","transformers.LukeForEntityPairClassification"),d(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ne,"href","#transformers.LukeForEntityPairClassification"),d(_e,"class","relative group"),d($n,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),d(Wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Wt,"rel","nofollow"),d(xn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeForEntityPairClassification"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ue,"id","transformers.LukeForEntitySpanClassification"),d(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ue,"href","#transformers.LukeForEntitySpanClassification"),d(ye,"class","relative group"),d(Fn,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),d(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Vt,"rel","nofollow"),d(qn,"href","/docs/transformers/v4.21.1/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,m){e(document.head,h),_(n,y,m),_(n,g,m),e(g,f),e(f,k),T(l,k,null),e(g,u),e(g,$),e($,Us),_(n,Go,m),_(n,se,m),e(se,we),e(we,Un),T(Xe,Un,null),e(se,Bs),e(se,Bn),e(Bn,Ks),_(n,Jo,m),_(n,Le,m),e(Le,Rs),e(Le,Ze),e(Ze,Hs),e(Le,Vs),_(n,Xo,m),_(n,Xt,m),e(Xt,Ys),_(n,Zo,m),_(n,Zt,m),e(Zt,Kn),e(Kn,Qs),_(n,es,m),_(n,en,m),e(en,Gs),_(n,ts,m),_(n,W,m),e(W,Rn),e(Rn,et),e(et,Js),e(et,tn),e(tn,Xs),e(et,Zs),e(W,ea),e(W,Hn),e(Hn,q),e(q,ta),e(q,Vn),e(Vn,na),e(q,oa),e(q,Yn),e(Yn,sa),e(q,aa),e(q,Qn),e(Qn,ra),e(q,ia),e(q,Gn),e(Gn,la),e(q,da),e(q,nn),e(nn,ca),e(q,pa),e(W,ha),e(W,tt),e(tt,U),e(U,on),e(on,ua),e(U,ma),e(U,Jn),e(Jn,fa),e(U,ga),e(U,Xn),e(Xn,_a),e(U,ka),e(U,Zn),e(Zn,ya),e(U,ba),e(tt,va),e(tt,nt),e(nt,sn),e(sn,eo),e(eo,Ta),e(sn,wa),e(nt,La),e(nt,an),e(an,to),e(to,Ea),e(an,za),e(W,$a),e(W,N),e(N,no),e(no,xa),e(N,Fa),e(N,ae),e(ae,Ee),e(Ee,rn),e(rn,qa),e(Ee,Ca),e(Ee,ot),e(ot,Ma),e(Ee,Pa),e(ae,ja),e(ae,ze),e(ze,ln),e(ln,Aa),e(ze,Ia),e(ze,st),e(st,Oa),e(ze,Sa),e(ae,Na),e(ae,dn),e(dn,cn),e(cn,Da),e(dn,Wa),e(N,Ua),e(N,O),e(O,pn),e(pn,Ba),e(O,Ka),e(O,oo),e(oo,Ra),e(O,Ha),e(O,so),e(so,Va),e(O,Ya),e(O,ao),e(ao,Qa),e(O,Ga),e(O,ro),e(ro,Ja),e(O,Xa),e(N,Za),e(N,re),e(re,er),e(re,hn),e(hn,tr),e(re,nr),e(re,at),e(at,or),e(re,sr),e(N,ar),e(N,rt),e(rt,rr),e(rt,it),e(it,ir),e(rt,lr),_(n,ns,m),_(n,un,m),e(un,dr),_(n,os,m),T(lt,n,m),_(n,ss,m),_(n,B,m),e(B,cr),e(B,dt),e(dt,pr),e(B,hr),e(B,ct),e(ct,ur),e(B,mr),e(B,pt),e(pt,fr),e(B,gr),_(n,as,m),_(n,ie,m),e(ie,$e),e($e,io),T(ht,io,null),e(ie,_r),e(ie,lo),e(lo,kr),_(n,rs,m),_(n,D,m),T(ut,D,null),e(D,yr),e(D,le),e(le,br),e(le,mn),e(mn,vr),e(le,Tr),e(le,mt),e(mt,wr),e(le,Lr),e(D,Er),e(D,de),e(de,zr),e(de,fn),e(fn,$r),e(de,xr),e(de,gn),e(gn,Fr),e(de,qr),e(D,Cr),T(xe,D,null),_(n,is,m),_(n,ce,m),e(ce,Fe),e(Fe,co),T(ft,co,null),e(ce,Mr),e(ce,po),e(po,Pr),_(n,ls,m),_(n,C,m),T(gt,C,null),e(C,jr),e(C,ho),e(ho,Ar),e(C,Ir),e(C,x),e(x,Or),e(x,_n),e(_n,Sr),e(x,Nr),e(x,kn),e(kn,Dr),e(x,Wr),e(x,yn),e(yn,Ur),e(x,Br),e(x,uo),e(uo,Kr),e(x,Rr),e(x,mo),e(mo,Hr),e(x,Vr),e(x,fo),e(fo,Yr),e(x,Qr),e(x,go),e(go,Gr),e(x,Jr),e(C,Xr),e(C,qe),T(_t,qe,null),e(qe,Zr),e(qe,_o),e(_o,ei),e(C,ti),e(C,bn),T(kt,bn,null),_(n,ds,m),_(n,pe,m),e(pe,Ce),e(Ce,ko),T(yt,ko,null),e(pe,ni),e(pe,yo),e(yo,oi),_(n,cs,m),_(n,M,m),T(bt,M,null),e(M,si),e(M,bo),e(bo,ai),e(M,ri),e(M,vt),e(vt,ii),e(vt,vn),e(vn,li),e(vt,di),e(M,ci),e(M,Tt),e(Tt,pi),e(Tt,wt),e(wt,hi),e(Tt,ui),e(M,mi),e(M,K),T(Lt,K,null),e(K,fi),e(K,he),e(he,gi),e(he,Tn),e(Tn,_i),e(he,ki),e(he,vo),e(vo,yi),e(he,bi),e(K,vi),T(Me,K,null),e(K,Ti),T(Pe,K,null),_(n,ps,m),_(n,ue,m),e(ue,je),e(je,To),T(Et,To,null),e(ue,wi),e(ue,wo),e(wo,Li),_(n,hs,m),_(n,P,m),T(zt,P,null),e(P,Ei),e(P,Lo),e(Lo,zi),e(P,$i),e(P,$t),e($t,xi),e($t,wn),e(wn,Fi),e($t,qi),e(P,Ci),e(P,xt),e(xt,Mi),e(xt,Ft),e(Ft,Pi),e(xt,ji),e(P,Ai),e(P,G),T(qt,G,null),e(G,Ii),e(G,me),e(me,Oi),e(me,Ln),e(Ln,Si),e(me,Ni),e(me,Eo),e(Eo,Di),e(me,Wi),e(G,Ui),T(Ae,G,null),_(n,us,m),_(n,fe,m),e(fe,Ie),e(Ie,zo),T(Ct,zo,null),e(fe,Bi),e(fe,$o),e($o,Ki),_(n,ms,m),_(n,j,m),T(Mt,j,null),e(j,Ri),e(j,xo),e(xo,Hi),e(j,Vi),e(j,Pt),e(Pt,Yi),e(Pt,En),e(En,Qi),e(Pt,Gi),e(j,Ji),e(j,jt),e(jt,Xi),e(jt,At),e(At,Zi),e(jt,el),e(j,tl),e(j,R),T(It,R,null),e(R,nl),e(R,ge),e(ge,ol),e(ge,zn),e(zn,sl),e(ge,al),e(ge,Fo),e(Fo,rl),e(ge,il),e(R,ll),T(Oe,R,null),e(R,dl),T(Se,R,null),_(n,fs,m),_(n,_e,m),e(_e,Ne),e(Ne,qo),T(Ot,qo,null),e(_e,cl),e(_e,Co),e(Co,pl),_(n,gs,m),_(n,A,m),T(St,A,null),e(A,hl),e(A,Mo),e(Mo,ul),e(A,ml),e(A,Nt),e(Nt,fl),e(Nt,$n),e($n,gl),e(Nt,_l),e(A,kl),e(A,Dt),e(Dt,yl),e(Dt,Wt),e(Wt,bl),e(Dt,vl),e(A,Tl),e(A,H),T(Ut,H,null),e(H,wl),e(H,ke),e(ke,Ll),e(ke,xn),e(xn,El),e(ke,zl),e(ke,Po),e(Po,$l),e(ke,xl),e(H,Fl),T(De,H,null),e(H,ql),T(We,H,null),_(n,_s,m),_(n,ye,m),e(ye,Ue),e(Ue,jo),T(Bt,jo,null),e(ye,Cl),e(ye,Ao),e(Ao,Ml),_(n,ks,m),_(n,I,m),T(Kt,I,null),e(I,Pl),e(I,Io),e(Io,jl),e(I,Al),e(I,Rt),e(Rt,Il),e(Rt,Fn),e(Fn,Ol),e(Rt,Sl),e(I,Nl),e(I,Ht),e(Ht,Dl),e(Ht,Vt),e(Vt,Wl),e(Ht,Ul),e(I,Bl),e(I,V),T(Yt,V,null),e(V,Kl),e(V,be),e(be,Rl),e(be,qn),e(qn,Hl),e(be,Vl),e(be,Oo),e(Oo,Yl),e(be,Ql),e(V,Gl),T(Be,V,null),e(V,Jl),T(Ke,V,null),ys=!0},p(n,[m]){const Qt={};m&2&&(Qt.$$scope={dirty:m,ctx:n}),xe.$set(Qt);const So={};m&2&&(So.$$scope={dirty:m,ctx:n}),Me.$set(So);const No={};m&2&&(No.$$scope={dirty:m,ctx:n}),Pe.$set(No);const Do={};m&2&&(Do.$$scope={dirty:m,ctx:n}),Ae.$set(Do);const Gt={};m&2&&(Gt.$$scope={dirty:m,ctx:n}),Oe.$set(Gt);const Wo={};m&2&&(Wo.$$scope={dirty:m,ctx:n}),Se.$set(Wo);const Uo={};m&2&&(Uo.$$scope={dirty:m,ctx:n}),De.$set(Uo);const Bo={};m&2&&(Bo.$$scope={dirty:m,ctx:n}),We.$set(Bo);const Jt={};m&2&&(Jt.$$scope={dirty:m,ctx:n}),Be.$set(Jt);const Ko={};m&2&&(Ko.$$scope={dirty:m,ctx:n}),Ke.$set(Ko)},i(n){ys||(w(l.$$.fragment,n),w(Xe.$$.fragment,n),w(lt.$$.fragment,n),w(ht.$$.fragment,n),w(ut.$$.fragment,n),w(xe.$$.fragment,n),w(ft.$$.fragment,n),w(gt.$$.fragment,n),w(_t.$$.fragment,n),w(kt.$$.fragment,n),w(yt.$$.fragment,n),w(bt.$$.fragment,n),w(Lt.$$.fragment,n),w(Me.$$.fragment,n),w(Pe.$$.fragment,n),w(Et.$$.fragment,n),w(zt.$$.fragment,n),w(qt.$$.fragment,n),w(Ae.$$.fragment,n),w(Ct.$$.fragment,n),w(Mt.$$.fragment,n),w(It.$$.fragment,n),w(Oe.$$.fragment,n),w(Se.$$.fragment,n),w(Ot.$$.fragment,n),w(St.$$.fragment,n),w(Ut.$$.fragment,n),w(De.$$.fragment,n),w(We.$$.fragment,n),w(Bt.$$.fragment,n),w(Kt.$$.fragment,n),w(Yt.$$.fragment,n),w(Be.$$.fragment,n),w(Ke.$$.fragment,n),ys=!0)},o(n){L(l.$$.fragment,n),L(Xe.$$.fragment,n),L(lt.$$.fragment,n),L(ht.$$.fragment,n),L(ut.$$.fragment,n),L(xe.$$.fragment,n),L(ft.$$.fragment,n),L(gt.$$.fragment,n),L(_t.$$.fragment,n),L(kt.$$.fragment,n),L(yt.$$.fragment,n),L(bt.$$.fragment,n),L(Lt.$$.fragment,n),L(Me.$$.fragment,n),L(Pe.$$.fragment,n),L(Et.$$.fragment,n),L(zt.$$.fragment,n),L(qt.$$.fragment,n),L(Ae.$$.fragment,n),L(Ct.$$.fragment,n),L(Mt.$$.fragment,n),L(It.$$.fragment,n),L(Oe.$$.fragment,n),L(Se.$$.fragment,n),L(Ot.$$.fragment,n),L(St.$$.fragment,n),L(Ut.$$.fragment,n),L(De.$$.fragment,n),L(We.$$.fragment,n),L(Bt.$$.fragment,n),L(Kt.$$.fragment,n),L(Yt.$$.fragment,n),L(Be.$$.fragment,n),L(Ke.$$.fragment,n),ys=!1},d(n){t(h),n&&t(y),n&&t(g),E(l),n&&t(Go),n&&t(se),E(Xe),n&&t(Jo),n&&t(Le),n&&t(Xo),n&&t(Xt),n&&t(Zo),n&&t(Zt),n&&t(es),n&&t(en),n&&t(ts),n&&t(W),n&&t(ns),n&&t(un),n&&t(os),E(lt,n),n&&t(ss),n&&t(B),n&&t(as),n&&t(ie),E(ht),n&&t(rs),n&&t(D),E(ut),E(xe),n&&t(is),n&&t(ce),E(ft),n&&t(ls),n&&t(C),E(gt),E(_t),E(kt),n&&t(ds),n&&t(pe),E(yt),n&&t(cs),n&&t(M),E(bt),E(Lt),E(Me),E(Pe),n&&t(ps),n&&t(ue),E(Et),n&&t(hs),n&&t(P),E(zt),E(qt),E(Ae),n&&t(us),n&&t(fe),E(Ct),n&&t(ms),n&&t(j),E(Mt),E(It),E(Oe),E(Se),n&&t(fs),n&&t(_e),E(Ot),n&&t(gs),n&&t(A),E(St),E(Ut),E(De),E(We),n&&t(_s),n&&t(ye),E(Bt),n&&t(ks),n&&t(I),E(Kt),E(Yt),E(Be),E(Ke)}}}const ap={local:"luke",sections:[{local:"overview",title:"Overview"},{local:"transformers.LukeConfig",title:"LukeConfig"},{local:"transformers.LukeTokenizer",title:"LukeTokenizer"},{local:"transformers.LukeModel",title:"LukeModel"},{local:"transformers.LukeForMaskedLM",title:"LukeForMaskedLM"},{local:"transformers.LukeForEntityClassification",title:"LukeForEntityClassification"},{local:"transformers.LukeForEntityPairClassification",title:"LukeForEntityPairClassification"},{local:"transformers.LukeForEntitySpanClassification",title:"LukeForEntitySpanClassification"}],title:"LUKE"};function rp(z){return Vc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class up extends Bc{constructor(h){super();Kc(this,h,rp,sp,Rc,{})}}export{up as default,ap as metadata};
