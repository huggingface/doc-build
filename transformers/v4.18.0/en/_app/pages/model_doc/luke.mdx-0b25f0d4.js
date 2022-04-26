import{S as Nc,i as Dc,s as Wc,e as a,k as c,w as b,t as o,M as Uc,c as r,d as t,m as p,a as i,x as v,h as s,b as d,F as e,g as _,y as T,q as w,o as L,B as E,v as Bc,L as Ho}from"../../chunks/vendor-6b77c823.js";import{T as Ro}from"../../chunks/Tip-39098574.js";import{D as S}from"../../chunks/Docstring-1088f2fb.js";import{C as Nn}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ve}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Vo}from"../../chunks/ExampleCodeBlock-5212b321.js";function Kc(z){let h,y,g,f,k;return f=new Nn({props:{code:`from transformers import LukeConfig, LukeModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Ho,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function Rc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function Vc(z){let h,y,g,f,k;return f=new Nn({props:{code:`from transformers import LukeTokenizer, LukeModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Wikipedia entity titles corresponding to the entity mentions &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [
<span class="hljs-meta">... </span>    (<span class="hljs-number">0</span>, <span class="hljs-number">7</span>),
<span class="hljs-meta">... </span>    (<span class="hljs-number">17</span>, <span class="hljs-number">28</span>),
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(
<span class="hljs-meta">... </span>    text, entities=entities, entity_spans=entity_spans, add_prefix_space=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>word_last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Ho,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function Hc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function Yc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function Qc(z){let h,y,g,f,k;return f=new Nn({props:{code:`from transformers import LukeTokenizer, LukeForEntityClassification

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
Predicted <span class="hljs-keyword">class</span>: person`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Ho,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function Jc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function Xc(z){let h,y,g,f,k;return f=new Nn({props:{code:`from transformers import LukeTokenizer, LukeForEntityPairClassification

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
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: per:cities_of_residence`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Ho,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function Gc(z){let h,y,g,f,k;return{c(){h=a("p"),y=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(u,"CODE",{});var $=i(g);f=s($,"Module"),$.forEach(t),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){_(l,h,u),e(h,y),e(h,g),e(g,f),e(h,k)},d(l){l&&t(h)}}}function Zc(z){let h,y,g,f,k;return f=new Nn({props:{code:`from transformers import LukeTokenizer, LukeForEntitySpanClassification

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
Los Angeles LOC`}}),{c(){h=a("p"),y=o("Examples:"),g=c(),b(f.$$.fragment)},l(l){h=r(l,"P",{});var u=i(h);y=s(u,"Examples:"),u.forEach(t),g=p(l),v(f.$$.fragment,l)},m(l,u){_(l,h,u),e(h,y),_(l,g,u),T(f,l,u),k=!0},p:Ho,i(l){k||(w(f.$$.fragment,l),k=!0)},o(l){L(f.$$.fragment,l),k=!1},d(l){l&&t(h),l&&t(g),E(f,l)}}}function ep(z){let h,y,g,f,k,l,u,$,Ws,Yo,se,Te,Dn,Xe,Us,Wn,Bs,Qo,we,Ks,Ge,Rs,Vs,Jo,Xt,Hs,Xo,Gt,Un,Ys,Go,Zt,Qs,Zo,W,Bn,Ze,Js,en,Xs,Gs,Zs,Kn,C,ea,Rn,ta,na,Vn,oa,sa,Hn,aa,ra,Yn,ia,la,tn,da,ca,pa,et,U,nn,ha,ua,Qn,ma,fa,Jn,ga,_a,Xn,ka,ya,ba,tt,on,Gn,va,Ta,wa,sn,Zn,La,Ea,za,N,eo,$a,xa,ae,Le,an,Fa,Ca,nt,qa,Ma,Pa,Ee,rn,ja,Aa,ot,Ia,Oa,Sa,ln,dn,Na,Da,Wa,O,cn,Ua,Ba,to,Ka,Ra,no,Va,Ha,oo,Ya,Qa,so,Ja,Xa,Ga,re,Za,pn,er,tr,st,nr,or,sr,at,ar,rt,rr,ir,es,hn,lr,ts,it,ns,B,dr,lt,cr,pr,dt,hr,ur,ct,mr,fr,os,ie,ze,ao,pt,gr,ro,_r,ss,D,ht,kr,ut,yr,un,br,vr,Tr,le,wr,mn,Lr,Er,fn,zr,$r,xr,$e,as,de,xe,io,mt,Fr,lo,Cr,rs,q,ft,qr,co,Mr,Pr,x,jr,gn,Ar,Ir,_n,Or,Sr,kn,Nr,Dr,po,Wr,Ur,ho,Br,Kr,uo,Rr,Vr,mo,Hr,Yr,Qr,Fe,gt,Jr,fo,Xr,Gr,yn,_t,is,ce,Ce,go,kt,Zr,_o,ei,ls,M,yt,ti,ko,ni,oi,bt,si,bn,ai,ri,ii,vt,li,Tt,di,ci,pi,K,wt,hi,pe,ui,vn,mi,fi,yo,gi,_i,ki,qe,yi,Me,ds,he,Pe,bo,Lt,bi,vo,vi,cs,P,Et,Ti,To,wi,Li,zt,Ei,Tn,zi,$i,xi,$t,Fi,xt,Ci,qi,Mi,J,Ft,Pi,ue,ji,wn,Ai,Ii,wo,Oi,Si,Ni,je,ps,me,Ae,Lo,Ct,Di,Eo,Wi,hs,j,qt,Ui,zo,Bi,Ki,Mt,Ri,Ln,Vi,Hi,Yi,Pt,Qi,jt,Ji,Xi,Gi,R,At,Zi,fe,el,En,tl,nl,$o,ol,sl,al,Ie,rl,Oe,us,ge,Se,xo,It,il,Fo,ll,ms,A,Ot,dl,Co,cl,pl,St,hl,zn,ul,ml,fl,Nt,gl,Dt,_l,kl,yl,V,Wt,bl,_e,vl,$n,Tl,wl,qo,Ll,El,zl,Ne,$l,De,fs,ke,We,Mo,Ut,xl,Po,Fl,gs,I,Bt,Cl,jo,ql,Ml,Kt,Pl,xn,jl,Al,Il,Rt,Ol,Vt,Sl,Nl,Dl,H,Ht,Wl,ye,Ul,Fn,Bl,Kl,Ao,Rl,Vl,Hl,Ue,Yl,Be,_s;return l=new ve({}),Xe=new ve({}),it=new Nn({props:{code:`from transformers import LukeTokenizer, LukeModel, LukeForEntityPairClassification

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
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Wikipedia entity titles corresponding to the entity mentions &quot;Beyonc\xE9&quot; and &quot;Los Angeles&quot;</span>
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`}}),pt=new ve({}),ht=new S({props:{name:"class transformers.LukeConfig",anchor:"transformers.LukeConfig",parameters:[{name:"vocab_size",val:" = 50267"},{name:"entity_vocab_size",val:" = 500000"},{name:"hidden_size",val:" = 768"},{name:"entity_emb_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_entity_aware_attention",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LUKE model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"vocab_size"},{anchor:"transformers.LukeConfig.entity_vocab_size",description:`<strong>entity_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 500000) &#x2014;
Entity vocabulary size of the LUKE model. Defines the number of different entities that can be represented
by the <code>entity_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"entity_vocab_size"},{anchor:"transformers.LukeConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LukeConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LukeConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LukeConfig.use_entity_aware_attention",description:`<strong>use_entity_aware_attention</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether or not the model should use the entity-aware self-attention mechanism proposed in <a href="https://arxiv.org/abs/2010.01057" rel="nofollow">LUKE: Deep
Contextualized Entity Representations with Entity-aware Self-attention (Yamada et
al.)</a>.`,name:"use_entity_aware_attention"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/configuration_luke.py#L29"}}),$e=new Vo({props:{anchor:"transformers.LukeConfig.example",$$slots:{default:[Kc]},$$scope:{ctx:z}}}),mt=new ve({}),ft=new S({props:{name:"class transformers.LukeTokenizer",anchor:"transformers.LukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"entity_vocab_file",val:""},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"entity_unk_token",val:" = '[UNK]'"},{name:"entity_pad_token",val:" = '[PAD]'"},{name:"entity_mask_token",val:" = '[MASK]'"},{name:"entity_mask2_token",val:" = '[MASK2]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
<code>task</code> is set to <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_2"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/tokenization_luke.py#L151"}}),gt=new S({props:{name:"__call__",anchor:"transformers.LukeTokenizer.__call__",parameters:[{name:"text",val:": typing.Union[str, typing.List[str]]"},{name:"text_pair",val:": typing.Union[str, typing.List[str], NoneType] = None"},{name:"entity_spans",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entity_spans_pair",val:": typing.Union[typing.List[typing.Tuple[int, int]], typing.List[typing.List[typing.Tuple[int, int]]], NoneType] = None"},{name:"entities",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"entities_pair",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.tokenization_utils_base.TruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"max_entity_length",val:": typing.Optional[int] = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": typing.Optional[bool] = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
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
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LukeTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LukeTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LukeTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LukeTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LukeTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/tokenization_luke.py#L260",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),_t=new S({props:{name:"save_vocabulary",anchor:"transformers.LukeTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/tokenization_luke.py#L1378"}}),kt=new ve({}),yt=new S({props:{name:"class transformers.LukeModel",anchor:"transformers.LukeModel",parameters:[{name:"config",val:": LukeConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.LukeModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L879"}}),wt=new S({props:{name:"forward",anchor:"transformers.LukeModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeModel.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L911",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.BaseLukeModelOutputWithPooling</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig"
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
`}}),qe=new Ro({props:{$$slots:{default:[Rc]},$$scope:{ctx:z}}}),Me=new Vo({props:{anchor:"transformers.LukeModel.forward.example",$$slots:{default:[Vc]},$$scope:{ctx:z}}}),Lt=new ve({}),Et=new S({props:{name:"class transformers.LukeForMaskedLM",anchor:"transformers.LukeForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L1132"}}),Ft=new S({props:{name:"forward",anchor:"transformers.LukeForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LukeForMaskedLM.forward.entity_labels",description:`<strong>entity_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"entity_labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L1168",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.LukeMaskedLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig"
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
`}}),je=new Ro({props:{$$slots:{default:[Hc]},$$scope:{ctx:z}}}),Ct=new ve({}),qt=new S({props:{name:"class transformers.LukeForEntityClassification",anchor:"transformers.LukeForEntityClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L1268"}}),At=new S({props:{name:"forward",anchor:"transformers.LukeForEntityClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L1281",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntityClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Ie=new Ro({props:{$$slots:{default:[Yc]},$$scope:{ctx:z}}}),Oe=new Vo({props:{anchor:"transformers.LukeForEntityClassification.forward.example",$$slots:{default:[Qc]},$$scope:{ctx:z}}}),It=new ve({}),Ot=new S({props:{name:"class transformers.LukeForEntityPairClassification",anchor:"transformers.LukeForEntityPairClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L1383"}}),Wt=new S({props:{name:"forward",anchor:"transformers.LukeForEntityPairClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityPairClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L1396",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntityPairClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Ne=new Ro({props:{$$slots:{default:[Jc]},$$scope:{ctx:z}}}),De=new Vo({props:{anchor:"transformers.LukeForEntityPairClassification.forward.example",$$slots:{default:[Xc]},$$scope:{ctx:z}}}),Ut=new ve({}),Bt=new S({props:{name:"class transformers.LukeForEntitySpanClassification",anchor:"transformers.LukeForEntitySpanClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L1503"}}),Ht=new S({props:{name:"forward",anchor:"transformers.LukeForEntitySpanClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"entity_end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_start_positions",description:`<strong>entity_start_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The start positions of entities in the word token sequence.`,name:"entity_start_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_end_positions",description:`<strong>entity_end_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The end positions of entities in the word token sequence.`,name:"entity_end_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code> or <code>(batch_size, entity_length, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size, entity_length)</code>, the cross
entropy loss is used for the single-label classification. In this case, labels should contain the indices
that should be in <code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, entity_length, num_labels)</code>, the binary cross entropy loss is used for the multi-label classification. In this case,
labels should only contain <code>[0, 1]</code>, where 0 and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/luke/modeling_luke.py#L1516",returnDescription:`
<p>A <code>transformers.models.luke.modeling_luke.EntitySpanClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeConfig"
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
`}}),Ue=new Ro({props:{$$slots:{default:[Gc]},$$scope:{ctx:z}}}),Be=new Vo({props:{anchor:"transformers.LukeForEntitySpanClassification.forward.example",$$slots:{default:[Zc]},$$scope:{ctx:z}}}),{c(){h=a("meta"),y=c(),g=a("h1"),f=a("a"),k=a("span"),b(l.$$.fragment),u=c(),$=a("span"),Ws=o("LUKE"),Yo=c(),se=a("h2"),Te=a("a"),Dn=a("span"),b(Xe.$$.fragment),Us=c(),Wn=a("span"),Bs=o("Overview"),Qo=c(),we=a("p"),Ks=o("The LUKE model was proposed in "),Ge=a("a"),Rs=o("LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),Vs=o(` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`),Jo=c(),Xt=a("p"),Hs=o("The abstract from the paper is the following:"),Xo=c(),Gt=a("p"),Un=a("em"),Ys=o(`Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).`),Go=c(),Zt=a("p"),Qs=o("Tips:"),Zo=c(),W=a("ul"),Bn=a("li"),Ze=a("p"),Js=o("This implementation is the same as "),en=a("a"),Xs=o("RobertaModel"),Gs=o(` with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),Zs=c(),Kn=a("li"),C=a("p"),ea=o("LUKE treats entities as input tokens; therefore, it takes "),Rn=a("code"),ta=o("entity_ids"),na=o(", "),Vn=a("code"),oa=o("entity_attention_mask"),sa=o(`,
`),Hn=a("code"),aa=o("entity_token_type_ids"),ra=o(" and "),Yn=a("code"),ia=o("entity_position_ids"),la=o(` as extra input. You can obtain those using
`),tn=a("a"),da=o("LukeTokenizer"),ca=o("."),pa=c(),et=a("li"),U=a("p"),nn=a("a"),ha=o("LukeTokenizer"),ua=o(" takes "),Qn=a("code"),ma=o("entities"),fa=o(" and "),Jn=a("code"),ga=o("entity_spans"),_a=o(` (character-based start and end
positions of the entities in the input text) as extra input. `),Xn=a("code"),ka=o("entities"),ya=o(` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),ba=c(),tt=a("ul"),on=a("li"),Gn=a("em"),va=o("Inputting [MASK] entities to compute entity representations"),Ta=o(`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),wa=c(),sn=a("li"),Zn=a("em"),La=o("Inputting Wikipedia entities to compute knowledge-enhanced token representations"),Ea=o(`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),za=c(),N=a("li"),eo=a("p"),$a=o("There are three head models for the former use case:"),xa=c(),ae=a("ul"),Le=a("li"),an=a("a"),Fa=o("LukeForEntityClassification"),Ca=o(`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),nt=a("a"),qa=o("Open Entity dataset"),Ma=o(`.
This model places a linear head on top of the output entity representation.`),Pa=c(),Ee=a("li"),rn=a("a"),ja=o("LukeForEntityPairClassification"),Aa=o(`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),ot=a("a"),Ia=o("TACRED dataset"),Oa=o(`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),Sa=c(),ln=a("li"),dn=a("a"),Na=o("LukeForEntitySpanClassification"),Da=o(`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),Wa=c(),O=a("p"),cn=a("a"),Ua=o("LukeTokenizer"),Ba=o(" has a "),to=a("code"),Ka=o("task"),Ra=o(` argument, which enables you to easily create an input to these
head models by specifying `),no=a("code"),Va=o('task="entity_classification"'),Ha=o(", "),oo=a("code"),Ya=o('task="entity_pair_classification"'),Qa=o(`, or
`),so=a("code"),Ja=o('task="entity_span_classification"'),Xa=o(". Please refer to the example code of each head models."),Ga=c(),re=a("p"),Za=o("A demo notebook on how to fine-tune "),pn=a("a"),er=o("LukeForEntityPairClassification"),tr=o(` for relation
classification can be found `),st=a("a"),nr=o("here"),or=o("."),sr=c(),at=a("p"),ar=o(`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),rt=a("a"),rr=o("here"),ir=o("."),es=c(),hn=a("p"),lr=o("Example:"),ts=c(),b(it.$$.fragment),ns=c(),B=a("p"),dr=o("This model was contributed by "),lt=a("a"),cr=o("ikuyamada"),pr=o(" and "),dt=a("a"),hr=o("nielsr"),ur=o(". The original code can be found "),ct=a("a"),mr=o("here"),fr=o("."),os=c(),ie=a("h2"),ze=a("a"),ao=a("span"),b(pt.$$.fragment),gr=c(),ro=a("span"),_r=o("LukeConfig"),ss=c(),D=a("div"),b(ht.$$.fragment),kr=c(),ut=a("p"),yr=o("This is the configuration class to store the configuration of a "),un=a("a"),br=o("LukeModel"),vr=o(`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture.`),Tr=c(),le=a("p"),wr=o("Configuration objects inherit from "),mn=a("a"),Lr=o("PretrainedConfig"),Er=o(` and can be used to control the model outputs. Read the
documentation from `),fn=a("a"),zr=o("PretrainedConfig"),$r=o(" for more information."),xr=c(),b($e.$$.fragment),as=c(),de=a("h2"),xe=a("a"),io=a("span"),b(mt.$$.fragment),Fr=c(),lo=a("span"),Cr=o("LukeTokenizer"),rs=c(),q=a("div"),b(ft.$$.fragment),qr=c(),co=a("p"),Mr=o("Construct a LUKE tokenizer."),Pr=c(),x=a("p"),jr=o("This tokenizer inherits from "),gn=a("a"),Ar=o("RobertaTokenizer"),Ir=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),_n=a("a"),Or=o("RobertaTokenizer"),Sr=o(", "),kn=a("a"),Nr=o("LukeTokenizer"),Dr=o(`
also creates entity sequences, namely `),po=a("code"),Wr=o("entity_ids"),Ur=o(", "),ho=a("code"),Br=o("entity_attention_mask"),Kr=o(", "),uo=a("code"),Rr=o("entity_token_type_ids"),Vr=o(`, and
`),mo=a("code"),Hr=o("entity_position_ids"),Yr=o(" to be used by the LUKE model."),Qr=c(),Fe=a("div"),b(gt.$$.fragment),Jr=c(),fo=a("p"),Xr=o(`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),Gr=c(),yn=a("div"),b(_t.$$.fragment),is=c(),ce=a("h2"),Ce=a("a"),go=a("span"),b(kt.$$.fragment),Zr=c(),_o=a("span"),ei=o("LukeModel"),ls=c(),M=a("div"),b(yt.$$.fragment),ti=c(),ko=a("p"),ni=o("The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),oi=c(),bt=a("p"),si=o("This model inherits from "),bn=a("a"),ai=o("PreTrainedModel"),ri=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ii=c(),vt=a("p"),li=o("This model is also a PyTorch "),Tt=a("a"),di=o("torch.nn.Module"),ci=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pi=c(),K=a("div"),b(wt.$$.fragment),hi=c(),pe=a("p"),ui=o("The "),vn=a("a"),mi=o("LukeModel"),fi=o(" forward method, overrides the "),yo=a("code"),gi=o("__call__"),_i=o(" special method."),ki=c(),b(qe.$$.fragment),yi=c(),b(Me.$$.fragment),ds=c(),he=a("h2"),Pe=a("a"),bo=a("span"),b(Lt.$$.fragment),bi=c(),vo=a("span"),vi=o("LukeForMaskedLM"),cs=c(),P=a("div"),b(Et.$$.fragment),Ti=c(),To=a("p"),wi=o(`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),Li=c(),zt=a("p"),Ei=o("This model inherits from "),Tn=a("a"),zi=o("PreTrainedModel"),$i=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xi=c(),$t=a("p"),Fi=o("This model is also a PyTorch "),xt=a("a"),Ci=o("torch.nn.Module"),qi=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mi=c(),J=a("div"),b(Ft.$$.fragment),Pi=c(),ue=a("p"),ji=o("The "),wn=a("a"),Ai=o("LukeForMaskedLM"),Ii=o(" forward method, overrides the "),wo=a("code"),Oi=o("__call__"),Si=o(" special method."),Ni=c(),b(je.$$.fragment),ps=c(),me=a("h2"),Ae=a("a"),Lo=a("span"),b(Ct.$$.fragment),Di=c(),Eo=a("span"),Wi=o("LukeForEntityClassification"),hs=c(),j=a("div"),b(qt.$$.fragment),Ui=c(),zo=a("p"),Bi=o(`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),Ki=c(),Mt=a("p"),Ri=o("This model inherits from "),Ln=a("a"),Vi=o("PreTrainedModel"),Hi=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yi=c(),Pt=a("p"),Qi=o("This model is also a PyTorch "),jt=a("a"),Ji=o("torch.nn.Module"),Xi=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gi=c(),R=a("div"),b(At.$$.fragment),Zi=c(),fe=a("p"),el=o("The "),En=a("a"),tl=o("LukeForEntityClassification"),nl=o(" forward method, overrides the "),$o=a("code"),ol=o("__call__"),sl=o(" special method."),al=c(),b(Ie.$$.fragment),rl=c(),b(Oe.$$.fragment),us=c(),ge=a("h2"),Se=a("a"),xo=a("span"),b(It.$$.fragment),il=c(),Fo=a("span"),ll=o("LukeForEntityPairClassification"),ms=c(),A=a("div"),b(Ot.$$.fragment),dl=c(),Co=a("p"),cl=o(`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),pl=c(),St=a("p"),hl=o("This model inherits from "),zn=a("a"),ul=o("PreTrainedModel"),ml=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fl=c(),Nt=a("p"),gl=o("This model is also a PyTorch "),Dt=a("a"),_l=o("torch.nn.Module"),kl=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yl=c(),V=a("div"),b(Wt.$$.fragment),bl=c(),_e=a("p"),vl=o("The "),$n=a("a"),Tl=o("LukeForEntityPairClassification"),wl=o(" forward method, overrides the "),qo=a("code"),Ll=o("__call__"),El=o(" special method."),zl=c(),b(Ne.$$.fragment),$l=c(),b(De.$$.fragment),fs=c(),ke=a("h2"),We=a("a"),Mo=a("span"),b(Ut.$$.fragment),xl=c(),Po=a("span"),Fl=o("LukeForEntitySpanClassification"),gs=c(),I=a("div"),b(Bt.$$.fragment),Cl=c(),jo=a("p"),ql=o(`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),Ml=c(),Kt=a("p"),Pl=o("This model inherits from "),xn=a("a"),jl=o("PreTrainedModel"),Al=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il=c(),Rt=a("p"),Ol=o("This model is also a PyTorch "),Vt=a("a"),Sl=o("torch.nn.Module"),Nl=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dl=c(),H=a("div"),b(Ht.$$.fragment),Wl=c(),ye=a("p"),Ul=o("The "),Fn=a("a"),Bl=o("LukeForEntitySpanClassification"),Kl=o(" forward method, overrides the "),Ao=a("code"),Rl=o("__call__"),Vl=o(" special method."),Hl=c(),b(Ue.$$.fragment),Yl=c(),b(Be.$$.fragment),this.h()},l(n){const m=Uc('[data-svelte="svelte-1phssyn"]',document.head);h=r(m,"META",{name:!0,content:!0}),m.forEach(t),y=p(n),g=r(n,"H1",{class:!0});var Yt=i(g);f=r(Yt,"A",{id:!0,class:!0,href:!0});var Io=i(f);k=r(Io,"SPAN",{});var Oo=i(k);v(l.$$.fragment,Oo),Oo.forEach(t),Io.forEach(t),u=p(Yt),$=r(Yt,"SPAN",{});var So=i($);Ws=s(So,"LUKE"),So.forEach(t),Yt.forEach(t),Yo=p(n),se=r(n,"H2",{class:!0});var Qt=i(se);Te=r(Qt,"A",{id:!0,class:!0,href:!0});var No=i(Te);Dn=r(No,"SPAN",{});var Do=i(Dn);v(Xe.$$.fragment,Do),Do.forEach(t),No.forEach(t),Us=p(Qt),Wn=r(Qt,"SPAN",{});var Wo=i(Wn);Bs=s(Wo,"Overview"),Wo.forEach(t),Qt.forEach(t),Qo=p(n),we=r(n,"P",{});var Jt=i(we);Ks=s(Jt,"The LUKE model was proposed in "),Ge=r(Jt,"A",{href:!0,rel:!0});var Uo=i(Ge);Rs=s(Uo,"LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention"),Uo.forEach(t),Vs=s(Jt,` by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`),Jt.forEach(t),Jo=p(n),Xt=r(n,"P",{});var Gl=i(Xt);Hs=s(Gl,"The abstract from the paper is the following:"),Gl.forEach(t),Xo=p(n),Gt=r(n,"P",{});var Zl=i(Gt);Un=r(Zl,"EM",{});var ed=i(Un);Ys=s(ed,`Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).`),ed.forEach(t),Zl.forEach(t),Go=p(n),Zt=r(n,"P",{});var td=i(Zt);Qs=s(td,"Tips:"),td.forEach(t),Zo=p(n),W=r(n,"UL",{});var Ke=i(W);Bn=r(Ke,"LI",{});var nd=i(Bn);Ze=r(nd,"P",{});var ks=i(Ze);Js=s(ks,"This implementation is the same as "),en=r(ks,"A",{href:!0});var od=i(en);Xs=s(od,"RobertaModel"),od.forEach(t),Gs=s(ks,` with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.`),ks.forEach(t),nd.forEach(t),Zs=p(Ke),Kn=r(Ke,"LI",{});var sd=i(Kn);C=r(sd,"P",{});var Y=i(C);ea=s(Y,"LUKE treats entities as input tokens; therefore, it takes "),Rn=r(Y,"CODE",{});var ad=i(Rn);ta=s(ad,"entity_ids"),ad.forEach(t),na=s(Y,", "),Vn=r(Y,"CODE",{});var rd=i(Vn);oa=s(rd,"entity_attention_mask"),rd.forEach(t),sa=s(Y,`,
`),Hn=r(Y,"CODE",{});var id=i(Hn);aa=s(id,"entity_token_type_ids"),id.forEach(t),ra=s(Y," and "),Yn=r(Y,"CODE",{});var ld=i(Yn);ia=s(ld,"entity_position_ids"),ld.forEach(t),la=s(Y,` as extra input. You can obtain those using
`),tn=r(Y,"A",{href:!0});var dd=i(tn);da=s(dd,"LukeTokenizer"),dd.forEach(t),ca=s(Y,"."),Y.forEach(t),sd.forEach(t),pa=p(Ke),et=r(Ke,"LI",{});var ys=i(et);U=r(ys,"P",{});var be=i(U);nn=r(be,"A",{href:!0});var cd=i(nn);ha=s(cd,"LukeTokenizer"),cd.forEach(t),ua=s(be," takes "),Qn=r(be,"CODE",{});var pd=i(Qn);ma=s(pd,"entities"),pd.forEach(t),fa=s(be," and "),Jn=r(be,"CODE",{});var hd=i(Jn);ga=s(hd,"entity_spans"),hd.forEach(t),_a=s(be,` (character-based start and end
positions of the entities in the input text) as extra input. `),Xn=r(be,"CODE",{});var ud=i(Xn);ka=s(ud,"entities"),ud.forEach(t),ya=s(be,` typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:`),be.forEach(t),ba=p(ys),tt=r(ys,"UL",{});var bs=i(tt);on=r(bs,"LI",{});var Ql=i(on);Gn=r(Ql,"EM",{});var md=i(Gn);va=s(md,"Inputting [MASK] entities to compute entity representations"),md.forEach(t),Ta=s(Ql,`: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.`),Ql.forEach(t),wa=p(bs),sn=r(bs,"LI",{});var Jl=i(sn);Zn=r(Jl,"EM",{});var fd=i(Zn);La=s(fd,"Inputting Wikipedia entities to compute knowledge-enhanced token representations"),fd.forEach(t),Ea=s(Jl,`: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.`),Jl.forEach(t),bs.forEach(t),ys.forEach(t),za=p(Ke),N=r(Ke,"LI",{});var X=i(N);eo=r(X,"P",{});var gd=i(eo);$a=s(gd,"There are three head models for the former use case:"),gd.forEach(t),xa=p(X),ae=r(X,"UL",{});var Cn=i(ae);Le=r(Cn,"LI",{});var Bo=i(Le);an=r(Bo,"A",{href:!0});var _d=i(an);Fa=s(_d,"LukeForEntityClassification"),_d.forEach(t),Ca=s(Bo,`, for tasks to classify a single entity in an input text such as
entity typing, e.g. the `),nt=r(Bo,"A",{href:!0,rel:!0});var kd=i(nt);qa=s(kd,"Open Entity dataset"),kd.forEach(t),Ma=s(Bo,`.
This model places a linear head on top of the output entity representation.`),Bo.forEach(t),Pa=p(Cn),Ee=r(Cn,"LI",{});var Ko=i(Ee);rn=r(Ko,"A",{href:!0});var yd=i(rn);ja=s(yd,"LukeForEntityPairClassification"),yd.forEach(t),Aa=s(Ko,`, for tasks to classify the relationship between two entities
such as relation classification, e.g. the `),ot=r(Ko,"A",{href:!0,rel:!0});var bd=i(ot);Ia=s(bd,"TACRED dataset"),bd.forEach(t),Oa=s(Ko,`. This
model places a linear head on top of the concatenated output representation of the pair of given entities.`),Ko.forEach(t),Sa=p(Cn),ln=r(Cn,"LI",{});var Xl=i(ln);dn=r(Xl,"A",{href:!0});var vd=i(dn);Na=s(vd,"LukeForEntitySpanClassification"),vd.forEach(t),Da=s(Xl,`, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.`),Xl.forEach(t),Cn.forEach(t),Wa=p(X),O=r(X,"P",{});var Q=i(O);cn=r(Q,"A",{href:!0});var Td=i(cn);Ua=s(Td,"LukeTokenizer"),Td.forEach(t),Ba=s(Q," has a "),to=r(Q,"CODE",{});var wd=i(to);Ka=s(wd,"task"),wd.forEach(t),Ra=s(Q,` argument, which enables you to easily create an input to these
head models by specifying `),no=r(Q,"CODE",{});var Ld=i(no);Va=s(Ld,'task="entity_classification"'),Ld.forEach(t),Ha=s(Q,", "),oo=r(Q,"CODE",{});var Ed=i(oo);Ya=s(Ed,'task="entity_pair_classification"'),Ed.forEach(t),Qa=s(Q,`, or
`),so=r(Q,"CODE",{});var zd=i(so);Ja=s(zd,'task="entity_span_classification"'),zd.forEach(t),Xa=s(Q,". Please refer to the example code of each head models."),Q.forEach(t),Ga=p(X),re=r(X,"P",{});var qn=i(re);Za=s(qn,"A demo notebook on how to fine-tune "),pn=r(qn,"A",{href:!0});var $d=i(pn);er=s($d,"LukeForEntityPairClassification"),$d.forEach(t),tr=s(qn,` for relation
classification can be found `),st=r(qn,"A",{href:!0,rel:!0});var xd=i(st);nr=s(xd,"here"),xd.forEach(t),or=s(qn,"."),qn.forEach(t),sr=p(X),at=r(X,"P",{});var vs=i(at);ar=s(vs,`There are also 3 notebooks available, which showcase how you can reproduce the results as reported in the paper with
the HuggingFace implementation of LUKE. They can be found `),rt=r(vs,"A",{href:!0,rel:!0});var Fd=i(rt);rr=s(Fd,"here"),Fd.forEach(t),ir=s(vs,"."),vs.forEach(t),X.forEach(t),Ke.forEach(t),es=p(n),hn=r(n,"P",{});var Cd=i(hn);lr=s(Cd,"Example:"),Cd.forEach(t),ts=p(n),v(it.$$.fragment,n),ns=p(n),B=r(n,"P",{});var Re=i(B);dr=s(Re,"This model was contributed by "),lt=r(Re,"A",{href:!0,rel:!0});var qd=i(lt);cr=s(qd,"ikuyamada"),qd.forEach(t),pr=s(Re," and "),dt=r(Re,"A",{href:!0,rel:!0});var Md=i(dt);hr=s(Md,"nielsr"),Md.forEach(t),ur=s(Re,". The original code can be found "),ct=r(Re,"A",{href:!0,rel:!0});var Pd=i(ct);mr=s(Pd,"here"),Pd.forEach(t),fr=s(Re,"."),Re.forEach(t),os=p(n),ie=r(n,"H2",{class:!0});var Ts=i(ie);ze=r(Ts,"A",{id:!0,class:!0,href:!0});var jd=i(ze);ao=r(jd,"SPAN",{});var Ad=i(ao);v(pt.$$.fragment,Ad),Ad.forEach(t),jd.forEach(t),gr=p(Ts),ro=r(Ts,"SPAN",{});var Id=i(ro);_r=s(Id,"LukeConfig"),Id.forEach(t),Ts.forEach(t),ss=p(n),D=r(n,"DIV",{class:!0});var Ve=i(D);v(ht.$$.fragment,Ve),kr=p(Ve),ut=r(Ve,"P",{});var ws=i(ut);yr=s(ws,"This is the configuration class to store the configuration of a "),un=r(ws,"A",{href:!0});var Od=i(un);br=s(Od,"LukeModel"),Od.forEach(t),vr=s(ws,`. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture.`),ws.forEach(t),Tr=p(Ve),le=r(Ve,"P",{});var Mn=i(le);wr=s(Mn,"Configuration objects inherit from "),mn=r(Mn,"A",{href:!0});var Sd=i(mn);Lr=s(Sd,"PretrainedConfig"),Sd.forEach(t),Er=s(Mn,` and can be used to control the model outputs. Read the
documentation from `),fn=r(Mn,"A",{href:!0});var Nd=i(fn);zr=s(Nd,"PretrainedConfig"),Nd.forEach(t),$r=s(Mn," for more information."),Mn.forEach(t),xr=p(Ve),v($e.$$.fragment,Ve),Ve.forEach(t),as=p(n),de=r(n,"H2",{class:!0});var Ls=i(de);xe=r(Ls,"A",{id:!0,class:!0,href:!0});var Dd=i(xe);io=r(Dd,"SPAN",{});var Wd=i(io);v(mt.$$.fragment,Wd),Wd.forEach(t),Dd.forEach(t),Fr=p(Ls),lo=r(Ls,"SPAN",{});var Ud=i(lo);Cr=s(Ud,"LukeTokenizer"),Ud.forEach(t),Ls.forEach(t),rs=p(n),q=r(n,"DIV",{class:!0});var G=i(q);v(ft.$$.fragment,G),qr=p(G),co=r(G,"P",{});var Bd=i(co);Mr=s(Bd,"Construct a LUKE tokenizer."),Bd.forEach(t),Pr=p(G),x=r(G,"P",{});var F=i(x);jr=s(F,"This tokenizer inherits from "),gn=r(F,"A",{href:!0});var Kd=i(gn);Ar=s(Kd,"RobertaTokenizer"),Kd.forEach(t),Ir=s(F,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. Compared to `),_n=r(F,"A",{href:!0});var Rd=i(_n);Or=s(Rd,"RobertaTokenizer"),Rd.forEach(t),Sr=s(F,", "),kn=r(F,"A",{href:!0});var Vd=i(kn);Nr=s(Vd,"LukeTokenizer"),Vd.forEach(t),Dr=s(F,`
also creates entity sequences, namely `),po=r(F,"CODE",{});var Hd=i(po);Wr=s(Hd,"entity_ids"),Hd.forEach(t),Ur=s(F,", "),ho=r(F,"CODE",{});var Yd=i(ho);Br=s(Yd,"entity_attention_mask"),Yd.forEach(t),Kr=s(F,", "),uo=r(F,"CODE",{});var Qd=i(uo);Rr=s(Qd,"entity_token_type_ids"),Qd.forEach(t),Vr=s(F,`, and
`),mo=r(F,"CODE",{});var Jd=i(mo);Hr=s(Jd,"entity_position_ids"),Jd.forEach(t),Yr=s(F," to be used by the LUKE model."),F.forEach(t),Qr=p(G),Fe=r(G,"DIV",{class:!0});var Es=i(Fe);v(gt.$$.fragment,Es),Jr=p(Es),fo=r(Es,"P",{});var Xd=i(fo);Xr=s(Xd,`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`),Xd.forEach(t),Es.forEach(t),Gr=p(G),yn=r(G,"DIV",{class:!0});var Gd=i(yn);v(_t.$$.fragment,Gd),Gd.forEach(t),G.forEach(t),is=p(n),ce=r(n,"H2",{class:!0});var zs=i(ce);Ce=r(zs,"A",{id:!0,class:!0,href:!0});var Zd=i(Ce);go=r(Zd,"SPAN",{});var ec=i(go);v(kt.$$.fragment,ec),ec.forEach(t),Zd.forEach(t),Zr=p(zs),_o=r(zs,"SPAN",{});var tc=i(_o);ei=s(tc,"LukeModel"),tc.forEach(t),zs.forEach(t),ls=p(n),M=r(n,"DIV",{class:!0});var Z=i(M);v(yt.$$.fragment,Z),ti=p(Z),ko=r(Z,"P",{});var nc=i(ko);ni=s(nc,"The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top."),nc.forEach(t),oi=p(Z),bt=r(Z,"P",{});var $s=i(bt);si=s($s,"This model inherits from "),bn=r($s,"A",{href:!0});var oc=i(bn);ai=s(oc,"PreTrainedModel"),oc.forEach(t),ri=s($s,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$s.forEach(t),ii=p(Z),vt=r(Z,"P",{});var xs=i(vt);li=s(xs,"This model is also a PyTorch "),Tt=r(xs,"A",{href:!0,rel:!0});var sc=i(Tt);di=s(sc,"torch.nn.Module"),sc.forEach(t),ci=s(xs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xs.forEach(t),pi=p(Z),K=r(Z,"DIV",{class:!0});var He=i(K);v(wt.$$.fragment,He),hi=p(He),pe=r(He,"P",{});var Pn=i(pe);ui=s(Pn,"The "),vn=r(Pn,"A",{href:!0});var ac=i(vn);mi=s(ac,"LukeModel"),ac.forEach(t),fi=s(Pn," forward method, overrides the "),yo=r(Pn,"CODE",{});var rc=i(yo);gi=s(rc,"__call__"),rc.forEach(t),_i=s(Pn," special method."),Pn.forEach(t),ki=p(He),v(qe.$$.fragment,He),yi=p(He),v(Me.$$.fragment,He),He.forEach(t),Z.forEach(t),ds=p(n),he=r(n,"H2",{class:!0});var Fs=i(he);Pe=r(Fs,"A",{id:!0,class:!0,href:!0});var ic=i(Pe);bo=r(ic,"SPAN",{});var lc=i(bo);v(Lt.$$.fragment,lc),lc.forEach(t),ic.forEach(t),bi=p(Fs),vo=r(Fs,"SPAN",{});var dc=i(vo);vi=s(dc,"LukeForMaskedLM"),dc.forEach(t),Fs.forEach(t),cs=p(n),P=r(n,"DIV",{class:!0});var ee=i(P);v(Et.$$.fragment,ee),Ti=p(ee),To=r(ee,"P",{});var cc=i(To);wi=s(cc,`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`),cc.forEach(t),Li=p(ee),zt=r(ee,"P",{});var Cs=i(zt);Ei=s(Cs,"This model inherits from "),Tn=r(Cs,"A",{href:!0});var pc=i(Tn);zi=s(pc,"PreTrainedModel"),pc.forEach(t),$i=s(Cs,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cs.forEach(t),xi=p(ee),$t=r(ee,"P",{});var qs=i($t);Fi=s(qs,"This model is also a PyTorch "),xt=r(qs,"A",{href:!0,rel:!0});var hc=i(xt);Ci=s(hc,"torch.nn.Module"),hc.forEach(t),qi=s(qs,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qs.forEach(t),Mi=p(ee),J=r(ee,"DIV",{class:!0});var jn=i(J);v(Ft.$$.fragment,jn),Pi=p(jn),ue=r(jn,"P",{});var An=i(ue);ji=s(An,"The "),wn=r(An,"A",{href:!0});var uc=i(wn);Ai=s(uc,"LukeForMaskedLM"),uc.forEach(t),Ii=s(An," forward method, overrides the "),wo=r(An,"CODE",{});var mc=i(wo);Oi=s(mc,"__call__"),mc.forEach(t),Si=s(An," special method."),An.forEach(t),Ni=p(jn),v(je.$$.fragment,jn),jn.forEach(t),ee.forEach(t),ps=p(n),me=r(n,"H2",{class:!0});var Ms=i(me);Ae=r(Ms,"A",{id:!0,class:!0,href:!0});var fc=i(Ae);Lo=r(fc,"SPAN",{});var gc=i(Lo);v(Ct.$$.fragment,gc),gc.forEach(t),fc.forEach(t),Di=p(Ms),Eo=r(Ms,"SPAN",{});var _c=i(Eo);Wi=s(_c,"LukeForEntityClassification"),_c.forEach(t),Ms.forEach(t),hs=p(n),j=r(n,"DIV",{class:!0});var te=i(j);v(qt.$$.fragment,te),Ui=p(te),zo=r(te,"P",{});var kc=i(zo);Bi=s(kc,`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`),kc.forEach(t),Ki=p(te),Mt=r(te,"P",{});var Ps=i(Mt);Ri=s(Ps,"This model inherits from "),Ln=r(Ps,"A",{href:!0});var yc=i(Ln);Vi=s(yc,"PreTrainedModel"),yc.forEach(t),Hi=s(Ps,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ps.forEach(t),Yi=p(te),Pt=r(te,"P",{});var js=i(Pt);Qi=s(js,"This model is also a PyTorch "),jt=r(js,"A",{href:!0,rel:!0});var bc=i(jt);Ji=s(bc,"torch.nn.Module"),bc.forEach(t),Xi=s(js,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),js.forEach(t),Gi=p(te),R=r(te,"DIV",{class:!0});var Ye=i(R);v(At.$$.fragment,Ye),Zi=p(Ye),fe=r(Ye,"P",{});var In=i(fe);el=s(In,"The "),En=r(In,"A",{href:!0});var vc=i(En);tl=s(vc,"LukeForEntityClassification"),vc.forEach(t),nl=s(In," forward method, overrides the "),$o=r(In,"CODE",{});var Tc=i($o);ol=s(Tc,"__call__"),Tc.forEach(t),sl=s(In," special method."),In.forEach(t),al=p(Ye),v(Ie.$$.fragment,Ye),rl=p(Ye),v(Oe.$$.fragment,Ye),Ye.forEach(t),te.forEach(t),us=p(n),ge=r(n,"H2",{class:!0});var As=i(ge);Se=r(As,"A",{id:!0,class:!0,href:!0});var wc=i(Se);xo=r(wc,"SPAN",{});var Lc=i(xo);v(It.$$.fragment,Lc),Lc.forEach(t),wc.forEach(t),il=p(As),Fo=r(As,"SPAN",{});var Ec=i(Fo);ll=s(Ec,"LukeForEntityPairClassification"),Ec.forEach(t),As.forEach(t),ms=p(n),A=r(n,"DIV",{class:!0});var ne=i(A);v(Ot.$$.fragment,ne),dl=p(ne),Co=r(ne,"P",{});var zc=i(Co);cl=s(zc,`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`),zc.forEach(t),pl=p(ne),St=r(ne,"P",{});var Is=i(St);hl=s(Is,"This model inherits from "),zn=r(Is,"A",{href:!0});var $c=i(zn);ul=s($c,"PreTrainedModel"),$c.forEach(t),ml=s(Is,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Is.forEach(t),fl=p(ne),Nt=r(ne,"P",{});var Os=i(Nt);gl=s(Os,"This model is also a PyTorch "),Dt=r(Os,"A",{href:!0,rel:!0});var xc=i(Dt);_l=s(xc,"torch.nn.Module"),xc.forEach(t),kl=s(Os,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Os.forEach(t),yl=p(ne),V=r(ne,"DIV",{class:!0});var Qe=i(V);v(Wt.$$.fragment,Qe),bl=p(Qe),_e=r(Qe,"P",{});var On=i(_e);vl=s(On,"The "),$n=r(On,"A",{href:!0});var Fc=i($n);Tl=s(Fc,"LukeForEntityPairClassification"),Fc.forEach(t),wl=s(On," forward method, overrides the "),qo=r(On,"CODE",{});var Cc=i(qo);Ll=s(Cc,"__call__"),Cc.forEach(t),El=s(On," special method."),On.forEach(t),zl=p(Qe),v(Ne.$$.fragment,Qe),$l=p(Qe),v(De.$$.fragment,Qe),Qe.forEach(t),ne.forEach(t),fs=p(n),ke=r(n,"H2",{class:!0});var Ss=i(ke);We=r(Ss,"A",{id:!0,class:!0,href:!0});var qc=i(We);Mo=r(qc,"SPAN",{});var Mc=i(Mo);v(Ut.$$.fragment,Mc),Mc.forEach(t),qc.forEach(t),xl=p(Ss),Po=r(Ss,"SPAN",{});var Pc=i(Po);Fl=s(Pc,"LukeForEntitySpanClassification"),Pc.forEach(t),Ss.forEach(t),gs=p(n),I=r(n,"DIV",{class:!0});var oe=i(I);v(Bt.$$.fragment,oe),Cl=p(oe),jo=r(oe,"P",{});var jc=i(jo);ql=s(jc,`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`),jc.forEach(t),Ml=p(oe),Kt=r(oe,"P",{});var Ns=i(Kt);Pl=s(Ns,"This model inherits from "),xn=r(Ns,"A",{href:!0});var Ac=i(xn);jl=s(Ac,"PreTrainedModel"),Ac.forEach(t),Al=s(Ns,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ns.forEach(t),Il=p(oe),Rt=r(oe,"P",{});var Ds=i(Rt);Ol=s(Ds,"This model is also a PyTorch "),Vt=r(Ds,"A",{href:!0,rel:!0});var Ic=i(Vt);Sl=s(Ic,"torch.nn.Module"),Ic.forEach(t),Nl=s(Ds,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ds.forEach(t),Dl=p(oe),H=r(oe,"DIV",{class:!0});var Je=i(H);v(Ht.$$.fragment,Je),Wl=p(Je),ye=r(Je,"P",{});var Sn=i(ye);Ul=s(Sn,"The "),Fn=r(Sn,"A",{href:!0});var Oc=i(Fn);Bl=s(Oc,"LukeForEntitySpanClassification"),Oc.forEach(t),Kl=s(Sn," forward method, overrides the "),Ao=r(Sn,"CODE",{});var Sc=i(Ao);Rl=s(Sc,"__call__"),Sc.forEach(t),Vl=s(Sn," special method."),Sn.forEach(t),Hl=p(Je),v(Ue.$$.fragment,Je),Yl=p(Je),v(Be.$$.fragment,Je),Je.forEach(t),oe.forEach(t),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(tp)),d(f,"id","luke"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#luke"),d(g,"class","relative group"),d(Te,"id","overview"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#overview"),d(se,"class","relative group"),d(Ge,"href","https://arxiv.org/abs/2010.01057"),d(Ge,"rel","nofollow"),d(en,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaModel"),d(tn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer"),d(nn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer"),d(an,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeForEntityClassification"),d(nt,"href","https://www.cs.utexas.edu/~eunsol/html_pages/open_entity.html"),d(nt,"rel","nofollow"),d(rn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeForEntityPairClassification"),d(ot,"href","https://nlp.stanford.edu/projects/tacred/"),d(ot,"rel","nofollow"),d(dn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),d(cn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer"),d(pn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeForEntityPairClassification"),d(st,"href","https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LUKE"),d(st,"rel","nofollow"),d(rt,"href","https://github.com/studio-ousia/luke/tree/master/notebooks"),d(rt,"rel","nofollow"),d(lt,"href","https://huggingface.co/ikuyamada"),d(lt,"rel","nofollow"),d(dt,"href","https://huggingface.co/nielsr"),d(dt,"rel","nofollow"),d(ct,"href","https://github.com/studio-ousia/luke"),d(ct,"rel","nofollow"),d(ze,"id","transformers.LukeConfig"),d(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ze,"href","#transformers.LukeConfig"),d(ie,"class","relative group"),d(un,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeModel"),d(mn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),d(fn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),d(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(xe,"id","transformers.LukeTokenizer"),d(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(xe,"href","#transformers.LukeTokenizer"),d(de,"class","relative group"),d(gn,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer"),d(_n,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer"),d(kn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeTokenizer"),d(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ce,"id","transformers.LukeModel"),d(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ce,"href","#transformers.LukeModel"),d(ce,"class","relative group"),d(bn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),d(Tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Tt,"rel","nofollow"),d(vn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeModel"),d(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Pe,"id","transformers.LukeForMaskedLM"),d(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Pe,"href","#transformers.LukeForMaskedLM"),d(he,"class","relative group"),d(Tn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),d(xt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(xt,"rel","nofollow"),d(wn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeForMaskedLM"),d(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Ae,"id","transformers.LukeForEntityClassification"),d(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ae,"href","#transformers.LukeForEntityClassification"),d(me,"class","relative group"),d(Ln,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),d(jt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(jt,"rel","nofollow"),d(En,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeForEntityClassification"),d(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.LukeForEntityPairClassification"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.LukeForEntityPairClassification"),d(ge,"class","relative group"),d(zn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),d(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Dt,"rel","nofollow"),d($n,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeForEntityPairClassification"),d(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(We,"id","transformers.LukeForEntitySpanClassification"),d(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(We,"href","#transformers.LukeForEntitySpanClassification"),d(ke,"class","relative group"),d(xn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),d(Vt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Vt,"rel","nofollow"),d(Fn,"href","/docs/transformers/v4.18.0/en/model_doc/luke#transformers.LukeForEntitySpanClassification"),d(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,m){e(document.head,h),_(n,y,m),_(n,g,m),e(g,f),e(f,k),T(l,k,null),e(g,u),e(g,$),e($,Ws),_(n,Yo,m),_(n,se,m),e(se,Te),e(Te,Dn),T(Xe,Dn,null),e(se,Us),e(se,Wn),e(Wn,Bs),_(n,Qo,m),_(n,we,m),e(we,Ks),e(we,Ge),e(Ge,Rs),e(we,Vs),_(n,Jo,m),_(n,Xt,m),e(Xt,Hs),_(n,Xo,m),_(n,Gt,m),e(Gt,Un),e(Un,Ys),_(n,Go,m),_(n,Zt,m),e(Zt,Qs),_(n,Zo,m),_(n,W,m),e(W,Bn),e(Bn,Ze),e(Ze,Js),e(Ze,en),e(en,Xs),e(Ze,Gs),e(W,Zs),e(W,Kn),e(Kn,C),e(C,ea),e(C,Rn),e(Rn,ta),e(C,na),e(C,Vn),e(Vn,oa),e(C,sa),e(C,Hn),e(Hn,aa),e(C,ra),e(C,Yn),e(Yn,ia),e(C,la),e(C,tn),e(tn,da),e(C,ca),e(W,pa),e(W,et),e(et,U),e(U,nn),e(nn,ha),e(U,ua),e(U,Qn),e(Qn,ma),e(U,fa),e(U,Jn),e(Jn,ga),e(U,_a),e(U,Xn),e(Xn,ka),e(U,ya),e(et,ba),e(et,tt),e(tt,on),e(on,Gn),e(Gn,va),e(on,Ta),e(tt,wa),e(tt,sn),e(sn,Zn),e(Zn,La),e(sn,Ea),e(W,za),e(W,N),e(N,eo),e(eo,$a),e(N,xa),e(N,ae),e(ae,Le),e(Le,an),e(an,Fa),e(Le,Ca),e(Le,nt),e(nt,qa),e(Le,Ma),e(ae,Pa),e(ae,Ee),e(Ee,rn),e(rn,ja),e(Ee,Aa),e(Ee,ot),e(ot,Ia),e(Ee,Oa),e(ae,Sa),e(ae,ln),e(ln,dn),e(dn,Na),e(ln,Da),e(N,Wa),e(N,O),e(O,cn),e(cn,Ua),e(O,Ba),e(O,to),e(to,Ka),e(O,Ra),e(O,no),e(no,Va),e(O,Ha),e(O,oo),e(oo,Ya),e(O,Qa),e(O,so),e(so,Ja),e(O,Xa),e(N,Ga),e(N,re),e(re,Za),e(re,pn),e(pn,er),e(re,tr),e(re,st),e(st,nr),e(re,or),e(N,sr),e(N,at),e(at,ar),e(at,rt),e(rt,rr),e(at,ir),_(n,es,m),_(n,hn,m),e(hn,lr),_(n,ts,m),T(it,n,m),_(n,ns,m),_(n,B,m),e(B,dr),e(B,lt),e(lt,cr),e(B,pr),e(B,dt),e(dt,hr),e(B,ur),e(B,ct),e(ct,mr),e(B,fr),_(n,os,m),_(n,ie,m),e(ie,ze),e(ze,ao),T(pt,ao,null),e(ie,gr),e(ie,ro),e(ro,_r),_(n,ss,m),_(n,D,m),T(ht,D,null),e(D,kr),e(D,ut),e(ut,yr),e(ut,un),e(un,br),e(ut,vr),e(D,Tr),e(D,le),e(le,wr),e(le,mn),e(mn,Lr),e(le,Er),e(le,fn),e(fn,zr),e(le,$r),e(D,xr),T($e,D,null),_(n,as,m),_(n,de,m),e(de,xe),e(xe,io),T(mt,io,null),e(de,Fr),e(de,lo),e(lo,Cr),_(n,rs,m),_(n,q,m),T(ft,q,null),e(q,qr),e(q,co),e(co,Mr),e(q,Pr),e(q,x),e(x,jr),e(x,gn),e(gn,Ar),e(x,Ir),e(x,_n),e(_n,Or),e(x,Sr),e(x,kn),e(kn,Nr),e(x,Dr),e(x,po),e(po,Wr),e(x,Ur),e(x,ho),e(ho,Br),e(x,Kr),e(x,uo),e(uo,Rr),e(x,Vr),e(x,mo),e(mo,Hr),e(x,Yr),e(q,Qr),e(q,Fe),T(gt,Fe,null),e(Fe,Jr),e(Fe,fo),e(fo,Xr),e(q,Gr),e(q,yn),T(_t,yn,null),_(n,is,m),_(n,ce,m),e(ce,Ce),e(Ce,go),T(kt,go,null),e(ce,Zr),e(ce,_o),e(_o,ei),_(n,ls,m),_(n,M,m),T(yt,M,null),e(M,ti),e(M,ko),e(ko,ni),e(M,oi),e(M,bt),e(bt,si),e(bt,bn),e(bn,ai),e(bt,ri),e(M,ii),e(M,vt),e(vt,li),e(vt,Tt),e(Tt,di),e(vt,ci),e(M,pi),e(M,K),T(wt,K,null),e(K,hi),e(K,pe),e(pe,ui),e(pe,vn),e(vn,mi),e(pe,fi),e(pe,yo),e(yo,gi),e(pe,_i),e(K,ki),T(qe,K,null),e(K,yi),T(Me,K,null),_(n,ds,m),_(n,he,m),e(he,Pe),e(Pe,bo),T(Lt,bo,null),e(he,bi),e(he,vo),e(vo,vi),_(n,cs,m),_(n,P,m),T(Et,P,null),e(P,Ti),e(P,To),e(To,wi),e(P,Li),e(P,zt),e(zt,Ei),e(zt,Tn),e(Tn,zi),e(zt,$i),e(P,xi),e(P,$t),e($t,Fi),e($t,xt),e(xt,Ci),e($t,qi),e(P,Mi),e(P,J),T(Ft,J,null),e(J,Pi),e(J,ue),e(ue,ji),e(ue,wn),e(wn,Ai),e(ue,Ii),e(ue,wo),e(wo,Oi),e(ue,Si),e(J,Ni),T(je,J,null),_(n,ps,m),_(n,me,m),e(me,Ae),e(Ae,Lo),T(Ct,Lo,null),e(me,Di),e(me,Eo),e(Eo,Wi),_(n,hs,m),_(n,j,m),T(qt,j,null),e(j,Ui),e(j,zo),e(zo,Bi),e(j,Ki),e(j,Mt),e(Mt,Ri),e(Mt,Ln),e(Ln,Vi),e(Mt,Hi),e(j,Yi),e(j,Pt),e(Pt,Qi),e(Pt,jt),e(jt,Ji),e(Pt,Xi),e(j,Gi),e(j,R),T(At,R,null),e(R,Zi),e(R,fe),e(fe,el),e(fe,En),e(En,tl),e(fe,nl),e(fe,$o),e($o,ol),e(fe,sl),e(R,al),T(Ie,R,null),e(R,rl),T(Oe,R,null),_(n,us,m),_(n,ge,m),e(ge,Se),e(Se,xo),T(It,xo,null),e(ge,il),e(ge,Fo),e(Fo,ll),_(n,ms,m),_(n,A,m),T(Ot,A,null),e(A,dl),e(A,Co),e(Co,cl),e(A,pl),e(A,St),e(St,hl),e(St,zn),e(zn,ul),e(St,ml),e(A,fl),e(A,Nt),e(Nt,gl),e(Nt,Dt),e(Dt,_l),e(Nt,kl),e(A,yl),e(A,V),T(Wt,V,null),e(V,bl),e(V,_e),e(_e,vl),e(_e,$n),e($n,Tl),e(_e,wl),e(_e,qo),e(qo,Ll),e(_e,El),e(V,zl),T(Ne,V,null),e(V,$l),T(De,V,null),_(n,fs,m),_(n,ke,m),e(ke,We),e(We,Mo),T(Ut,Mo,null),e(ke,xl),e(ke,Po),e(Po,Fl),_(n,gs,m),_(n,I,m),T(Bt,I,null),e(I,Cl),e(I,jo),e(jo,ql),e(I,Ml),e(I,Kt),e(Kt,Pl),e(Kt,xn),e(xn,jl),e(Kt,Al),e(I,Il),e(I,Rt),e(Rt,Ol),e(Rt,Vt),e(Vt,Sl),e(Rt,Nl),e(I,Dl),e(I,H),T(Ht,H,null),e(H,Wl),e(H,ye),e(ye,Ul),e(ye,Fn),e(Fn,Bl),e(ye,Kl),e(ye,Ao),e(Ao,Rl),e(ye,Vl),e(H,Hl),T(Ue,H,null),e(H,Yl),T(Be,H,null),_s=!0},p(n,[m]){const Yt={};m&2&&(Yt.$$scope={dirty:m,ctx:n}),$e.$set(Yt);const Io={};m&2&&(Io.$$scope={dirty:m,ctx:n}),qe.$set(Io);const Oo={};m&2&&(Oo.$$scope={dirty:m,ctx:n}),Me.$set(Oo);const So={};m&2&&(So.$$scope={dirty:m,ctx:n}),je.$set(So);const Qt={};m&2&&(Qt.$$scope={dirty:m,ctx:n}),Ie.$set(Qt);const No={};m&2&&(No.$$scope={dirty:m,ctx:n}),Oe.$set(No);const Do={};m&2&&(Do.$$scope={dirty:m,ctx:n}),Ne.$set(Do);const Wo={};m&2&&(Wo.$$scope={dirty:m,ctx:n}),De.$set(Wo);const Jt={};m&2&&(Jt.$$scope={dirty:m,ctx:n}),Ue.$set(Jt);const Uo={};m&2&&(Uo.$$scope={dirty:m,ctx:n}),Be.$set(Uo)},i(n){_s||(w(l.$$.fragment,n),w(Xe.$$.fragment,n),w(it.$$.fragment,n),w(pt.$$.fragment,n),w(ht.$$.fragment,n),w($e.$$.fragment,n),w(mt.$$.fragment,n),w(ft.$$.fragment,n),w(gt.$$.fragment,n),w(_t.$$.fragment,n),w(kt.$$.fragment,n),w(yt.$$.fragment,n),w(wt.$$.fragment,n),w(qe.$$.fragment,n),w(Me.$$.fragment,n),w(Lt.$$.fragment,n),w(Et.$$.fragment,n),w(Ft.$$.fragment,n),w(je.$$.fragment,n),w(Ct.$$.fragment,n),w(qt.$$.fragment,n),w(At.$$.fragment,n),w(Ie.$$.fragment,n),w(Oe.$$.fragment,n),w(It.$$.fragment,n),w(Ot.$$.fragment,n),w(Wt.$$.fragment,n),w(Ne.$$.fragment,n),w(De.$$.fragment,n),w(Ut.$$.fragment,n),w(Bt.$$.fragment,n),w(Ht.$$.fragment,n),w(Ue.$$.fragment,n),w(Be.$$.fragment,n),_s=!0)},o(n){L(l.$$.fragment,n),L(Xe.$$.fragment,n),L(it.$$.fragment,n),L(pt.$$.fragment,n),L(ht.$$.fragment,n),L($e.$$.fragment,n),L(mt.$$.fragment,n),L(ft.$$.fragment,n),L(gt.$$.fragment,n),L(_t.$$.fragment,n),L(kt.$$.fragment,n),L(yt.$$.fragment,n),L(wt.$$.fragment,n),L(qe.$$.fragment,n),L(Me.$$.fragment,n),L(Lt.$$.fragment,n),L(Et.$$.fragment,n),L(Ft.$$.fragment,n),L(je.$$.fragment,n),L(Ct.$$.fragment,n),L(qt.$$.fragment,n),L(At.$$.fragment,n),L(Ie.$$.fragment,n),L(Oe.$$.fragment,n),L(It.$$.fragment,n),L(Ot.$$.fragment,n),L(Wt.$$.fragment,n),L(Ne.$$.fragment,n),L(De.$$.fragment,n),L(Ut.$$.fragment,n),L(Bt.$$.fragment,n),L(Ht.$$.fragment,n),L(Ue.$$.fragment,n),L(Be.$$.fragment,n),_s=!1},d(n){t(h),n&&t(y),n&&t(g),E(l),n&&t(Yo),n&&t(se),E(Xe),n&&t(Qo),n&&t(we),n&&t(Jo),n&&t(Xt),n&&t(Xo),n&&t(Gt),n&&t(Go),n&&t(Zt),n&&t(Zo),n&&t(W),n&&t(es),n&&t(hn),n&&t(ts),E(it,n),n&&t(ns),n&&t(B),n&&t(os),n&&t(ie),E(pt),n&&t(ss),n&&t(D),E(ht),E($e),n&&t(as),n&&t(de),E(mt),n&&t(rs),n&&t(q),E(ft),E(gt),E(_t),n&&t(is),n&&t(ce),E(kt),n&&t(ls),n&&t(M),E(yt),E(wt),E(qe),E(Me),n&&t(ds),n&&t(he),E(Lt),n&&t(cs),n&&t(P),E(Et),E(Ft),E(je),n&&t(ps),n&&t(me),E(Ct),n&&t(hs),n&&t(j),E(qt),E(At),E(Ie),E(Oe),n&&t(us),n&&t(ge),E(It),n&&t(ms),n&&t(A),E(Ot),E(Wt),E(Ne),E(De),n&&t(fs),n&&t(ke),E(Ut),n&&t(gs),n&&t(I),E(Bt),E(Ht),E(Ue),E(Be)}}}const tp={local:"luke",sections:[{local:"overview",title:"Overview"},{local:"transformers.LukeConfig",title:"LukeConfig"},{local:"transformers.LukeTokenizer",title:"LukeTokenizer"},{local:"transformers.LukeModel",title:"LukeModel"},{local:"transformers.LukeForMaskedLM",title:"LukeForMaskedLM"},{local:"transformers.LukeForEntityClassification",title:"LukeForEntityClassification"},{local:"transformers.LukeForEntityPairClassification",title:"LukeForEntityPairClassification"},{local:"transformers.LukeForEntitySpanClassification",title:"LukeForEntitySpanClassification"}],title:"LUKE"};function np(z){return Bc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class dp extends Nc{constructor(h){super();Dc(this,h,np,ep,Wc,{})}}export{dp as default,tp as metadata};
