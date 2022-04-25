import{S as mm,i as cm,s as dm,e as l,k as d,w as g,t as a,U as rm,M as fm,c as u,d as t,m as f,x,a as m,h as o,V as am,b as C,N as om,F as s,g as p,y as $,o as h,p as X,q as _,B as q,v as hm,n as Z}from"../../chunks/vendor-1e8b365d.js";import{T as Fa}from"../../chunks/Tip-62b14c6e.js";import{Y as im}from"../../chunks/Youtube-c2a8cc39.js";import{I as Ia}from"../../chunks/IconCopyLink-483c28ba.js";import{C as j}from"../../chunks/CodeBlock-e5764662.js";import{D as lm}from"../../chunks/DocNotebookDropdown-37d928d3.js";import{F as _m}from"../../chunks/FrameworkSwitchCourse-7f8f0f31.js";function bm(k){let r,c;return r=new lm({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter6/section3b_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter6/section3b_tf.ipynb"}]}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function vm(k){let r,c;return r=new lm({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter6/section3b_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter6/section3b_pt.ipynb"}]}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function gm(k){let r,c;return r=new im({props:{id:"b3u8RzBCX9Y"}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function xm(k){let r,c;return r=new im({props:{id:"_wxyB3j3mk4"}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function $m(k){let r,c;return r=new j({props:{code:`from transformers import AutoTokenizer, TFAutoModelForQuestionAnswering

model_checkpoint = "distilbert-base-cased-distilled-squad"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)

inputs = tokenizer(question, context, return_tensors="tf")
outputs = model(**inputs)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForQuestionAnswering

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-cased-distilled-squad&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)

inputs = tokenizer(question, context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
outputs = model(**inputs)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function qm(k){let r,c;return r=new j({props:{code:`from transformers import AutoTokenizer, AutoModelForQuestionAnswering

model_checkpoint = "distilbert-base-cased-distilled-squad"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)

inputs = tokenizer(question, context, return_tensors="pt")
outputs = model(**inputs)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForQuestionAnswering

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-cased-distilled-squad&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)

inputs = tokenizer(question, context, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
outputs = model(**inputs)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function km(k){let r,c;return r=new j({props:{code:"(1, 66) (1, 66)",highlighted:'(<span class="hljs-number">1</span>, <span class="hljs-number">66</span>) (<span class="hljs-number">1</span>, <span class="hljs-number">66</span>)'}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function wm(k){let r,c;return r=new j({props:{code:"torch.Size([1, 66]) torch.Size([1, 66])",highlighted:'torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">66</span>]) torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">66</span>])'}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function jm(k){let r,c;return r=new j({props:{code:`import tensorflow as tf

sequence_ids = inputs.sequence_ids()
# Masque tout, sauf les tokens du contexte
mask = [i != 1 for i in sequence_ids]
# D\xE9masquer le token [CLS]
mask[0] = False
mask = tf.constant(mask)[None]

start_logits = tf.where(mask, -10000, start_logits)
end_logits = tf.where(mask, -10000, end_logits)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

sequence_ids = inputs.sequence_ids()
<span class="hljs-comment"># Masque tout, sauf les tokens du contexte</span>
mask = [i != <span class="hljs-number">1</span> <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> sequence_ids]
<span class="hljs-comment"># D\xE9masquer le token [CLS]</span>
mask[<span class="hljs-number">0</span>] = <span class="hljs-literal">False</span>
mask = tf.constant(mask)[<span class="hljs-literal">None</span>]

start_logits = tf.where(mask, -<span class="hljs-number">10000</span>, start_logits)
end_logits = tf.where(mask, -<span class="hljs-number">10000</span>, end_logits)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Em(k){let r,c;return r=new j({props:{code:`import torch

sequence_ids = inputs.sequence_ids()
# Masque tout, sauf les tokens du contexte
mask = [i != 1 for i in sequence_ids]
# D\xE9masquer le token [CLS]
mask[0] = False
mask = torch.tensor(mask)[None]

start_logits[mask] = -10000
end_logits[mask] = -10000`,highlighted:`<span class="hljs-keyword">import</span> torch

sequence_ids = inputs.sequence_ids()
<span class="hljs-comment"># Masque tout, sauf les tokens du contexte</span>
mask = [i != <span class="hljs-number">1</span> <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> sequence_ids]
<span class="hljs-comment"># D\xE9masquer le token [CLS]</span>
mask[<span class="hljs-number">0</span>] = <span class="hljs-literal">False</span>
mask = torch.tensor(mask)[<span class="hljs-literal">None</span>]

start_logits[mask] = -<span class="hljs-number">10000</span>
end_logits[mask] = -<span class="hljs-number">10000</span>`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function ym(k){let r,c;return r=new j({props:{code:`start_probabilities = tf.math.softmax(start_logits, axis=-1)[0].numpy()
end_probabilities = tf.math.softmax(end_logits, axis=-1)[0].numpy()`,highlighted:`start_probabilities = tf.math.softmax(start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>].numpy()
end_probabilities = tf.math.softmax(end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>].numpy()`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Pm(k){let r,c;return r=new j({props:{code:`start_probabilities = torch.nn.functional.softmax(start_logits, dim=-1)[0]
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-1)[0]`,highlighted:`start_probabilities = torch.nn.functional.softmax(start_logits, dim=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function zm(k){let r,c,n,b,v,w,P,T,N,z,M,A,S,L;return S=new j({props:{code:"scores = np.triu(scores)",highlighted:"scores = np.triu(scores)"}}),{c(){r=l("p"),c=a("Ensuite, nous masquerons les valeurs o\xF9 "),n=l("code"),b=a("start_index > end_index"),v=a(" en les mettant \xE0 "),w=l("code"),P=a("0"),T=a(" (les autres probabilit\xE9s sont toutes des nombres positifs). La fonction "),N=l("code"),z=a("np.triu()"),M=a(" renvoie la partie triangulaire sup\xE9rieure du tenseur 2D pass\xE9 en argument, elle fera donc ce masquage pour nous :"),A=d(),g(S.$$.fragment)},l(E){r=u(E,"P",{});var y=m(r);c=o(y,"Ensuite, nous masquerons les valeurs o\xF9 "),n=u(y,"CODE",{});var Me=m(n);b=o(Me,"start_index > end_index"),Me.forEach(t),v=o(y," en les mettant \xE0 "),w=u(y,"CODE",{});var ee=m(w);P=o(ee,"0"),ee.forEach(t),T=o(y," (les autres probabilit\xE9s sont toutes des nombres positifs). La fonction "),N=u(y,"CODE",{});var Fe=m(N);z=o(Fe,"np.triu()"),Fe.forEach(t),M=o(y," renvoie la partie triangulaire sup\xE9rieure du tenseur 2D pass\xE9 en argument, elle fera donc ce masquage pour nous :"),y.forEach(t),A=f(E),x(S.$$.fragment,E)},m(E,y){p(E,r,y),s(r,c),s(r,n),s(n,b),s(r,v),s(r,w),s(w,P),s(r,T),s(r,N),s(N,z),s(r,M),p(E,A,y),$(S,E,y),L=!0},i(E){L||(_(S.$$.fragment,E),L=!0)},o(E){h(S.$$.fragment,E),L=!1},d(E){E&&t(r),E&&t(A),q(S,E)}}}function Tm(k){let r,c,n,b,v,w,P,T,N,z,M,A,S,L;return S=new j({props:{code:"scores = torch.triu(scores)",highlighted:"scores = torch.triu(scores)"}}),{c(){r=l("p"),c=a("Ensuite, nous masquerons les valeurs o\xF9 "),n=l("code"),b=a("start_index > end_index"),v=a(" en les mettant \xE0 "),w=l("code"),P=a("0"),T=a(" (les autres probabilit\xE9s sont toutes des nombres positifs). La fonction "),N=l("code"),z=a("torch.triu()"),M=a(" renvoie la partie triangulaire sup\xE9rieure du tenseur 2D pass\xE9 en argument, elle fera donc ce masquage pour nous :"),A=d(),g(S.$$.fragment)},l(E){r=u(E,"P",{});var y=m(r);c=o(y,"Ensuite, nous masquerons les valeurs o\xF9 "),n=u(y,"CODE",{});var Me=m(n);b=o(Me,"start_index > end_index"),Me.forEach(t),v=o(y," en les mettant \xE0 "),w=u(y,"CODE",{});var ee=m(w);P=o(ee,"0"),ee.forEach(t),T=o(y," (les autres probabilit\xE9s sont toutes des nombres positifs). La fonction "),N=u(y,"CODE",{});var Fe=m(N);z=o(Fe,"torch.triu()"),Fe.forEach(t),M=o(y," renvoie la partie triangulaire sup\xE9rieure du tenseur 2D pass\xE9 en argument, elle fera donc ce masquage pour nous :"),y.forEach(t),A=f(E),x(S.$$.fragment,E)},m(E,y){p(E,r,y),s(r,c),s(r,n),s(n,b),s(r,v),s(r,w),s(w,P),s(r,T),s(r,N),s(N,z),s(r,M),p(E,A,y),$(S,E,y),L=!0},i(E){L||(_(S.$$.fragment,E),L=!0)},o(E){h(S.$$.fragment,E),L=!1},d(E){E&&t(r),E&&t(A),q(S,E)}}}function Cm(k){let r,c,n,b,v;return{c(){r=l("p"),c=a("\u270F\uFE0F "),n=l("strong"),b=a("Essayez !"),v=a(" Calculez les indices de d\xE9but et de fin pour les cinq r\xE9ponses les plus probables.")},l(w){r=u(w,"P",{});var P=m(r);c=o(P,"\u270F\uFE0F "),n=u(P,"STRONG",{});var T=m(n);b=o(T,"Essayez !"),T.forEach(t),v=o(P," Calculez les indices de d\xE9but et de fin pour les cinq r\xE9ponses les plus probables."),P.forEach(t)},m(w,P){p(w,r,P),s(r,c),s(r,n),s(n,b),s(r,v)},d(w){w&&t(r)}}}function Nm(k){let r,c,n,b,v,w,P,T;return{c(){r=l("p"),c=a("\u270F\uFE0F "),n=l("strong"),b=a("Essayez !"),v=a(" Utilisez les meilleurs scores que vous avez calcul\xE9s pr\xE9c\xE9demment pour afficher les cinq r\xE9ponses les plus probables. Pour v\xE9rifier vos r\xE9sultats, retournez au premier pipeline et passez dans "),w=l("code"),P=a("top_k=5"),T=a(" lorsque vous l\u2019appelez.")},l(N){r=u(N,"P",{});var z=m(r);c=o(z,"\u270F\uFE0F "),n=u(z,"STRONG",{});var M=m(n);b=o(M,"Essayez !"),M.forEach(t),v=o(z," Utilisez les meilleurs scores que vous avez calcul\xE9s pr\xE9c\xE9demment pour afficher les cinq r\xE9ponses les plus probables. Pour v\xE9rifier vos r\xE9sultats, retournez au premier pipeline et passez dans "),w=u(z,"CODE",{});var A=m(w);P=o(A,"top_k=5"),A.forEach(t),T=o(z," lorsque vous l\u2019appelez."),z.forEach(t)},m(N,z){p(N,r,z),s(r,c),s(r,n),s(n,b),s(r,v),s(r,w),s(w,P),s(r,T)},d(N){N&&t(r)}}}function Sm(k){let r,c,n,b;return r=new j({props:{code:`_ = inputs.pop("overflow_to_sample_mapping")
offsets = inputs.pop("offset_mapping")

inputs = inputs.convert_to_tensors("tf")
print(inputs["input_ids"].shape)`,highlighted:`_ = inputs.pop(<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>)
offsets = inputs.pop(<span class="hljs-string">&quot;offset_mapping&quot;</span>)

inputs = inputs.convert_to_tensors(<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-built_in">print</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)`}}),n=new j({props:{code:"(2, 384)",highlighted:'(<span class="hljs-number">2</span>, <span class="hljs-number">384</span>)'}}),{c(){g(r.$$.fragment),c=d(),g(n.$$.fragment)},l(v){x(r.$$.fragment,v),c=f(v),x(n.$$.fragment,v)},m(v,w){$(r,v,w),p(v,c,w),$(n,v,w),b=!0},i(v){b||(_(r.$$.fragment,v),_(n.$$.fragment,v),b=!0)},o(v){h(r.$$.fragment,v),h(n.$$.fragment,v),b=!1},d(v){q(r,v),v&&t(c),q(n,v)}}}function Lm(k){let r,c,n,b;return r=new j({props:{code:`_ = inputs.pop("overflow_to_sample_mapping")
offsets = inputs.pop("offset_mapping")

inputs = inputs.convert_to_tensors("pt")
print(inputs["input_ids"].shape)`,highlighted:`_ = inputs.pop(<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>)
offsets = inputs.pop(<span class="hljs-string">&quot;offset_mapping&quot;</span>)

inputs = inputs.convert_to_tensors(<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)`}}),n=new j({props:{code:"torch.Size([2, 384])",highlighted:'torch.Size([<span class="hljs-number">2</span>, <span class="hljs-number">384</span>])'}}),{c(){g(r.$$.fragment),c=d(),g(n.$$.fragment)},l(v){x(r.$$.fragment,v),c=f(v),x(n.$$.fragment,v)},m(v,w){$(r,v,w),p(v,c,w),$(n,v,w),b=!0},i(v){b||(_(r.$$.fragment,v),_(n.$$.fragment,v),b=!0)},o(v){h(r.$$.fragment,v),h(n.$$.fragment,v),b=!1},d(v){q(r,v),v&&t(c),q(n,v)}}}function Am(k){let r,c;return r=new j({props:{code:"(2, 384) (2, 384)",highlighted:'(<span class="hljs-number">2</span>, <span class="hljs-number">384</span>) (<span class="hljs-number">2</span>, <span class="hljs-number">384</span>)'}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Dm(k){let r,c;return r=new j({props:{code:"torch.Size([2, 384]) torch.Size([2, 384])",highlighted:'torch.Size([<span class="hljs-number">2</span>, <span class="hljs-number">384</span>]) torch.Size([<span class="hljs-number">2</span>, <span class="hljs-number">384</span>])'}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Mm(k){let r,c;return r=new j({props:{code:`sequence_ids = inputs.sequence_ids()
# Masque tout, sauf les tokens du contexte
mask = [i != 1 for i in sequence_ids]
# D\xE9masquer le jeton [CLS]
mask[0] = False
# Masquer tous les tokens [PAD]
mask = tf.math.logical_or(tf.constant(mask)[None], inputs["attention_mask"] == 0)

start_logits = tf.where(mask, -10000, start_logits)
end_logits = tf.where(mask, -10000, end_logits)`,highlighted:`sequence_ids = inputs.sequence_ids()
<span class="hljs-comment"># Masque tout, sauf les tokens du contexte</span>
mask = [i != <span class="hljs-number">1</span> <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> sequence_ids]
<span class="hljs-comment"># D\xE9masquer le jeton [CLS]</span>
mask[<span class="hljs-number">0</span>] = <span class="hljs-literal">False</span>
<span class="hljs-comment"># Masquer tous les tokens [PAD]</span>
mask = tf.math.logical_or(tf.constant(mask)[<span class="hljs-literal">None</span>], inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>] == <span class="hljs-number">0</span>)

start_logits = tf.where(mask, -<span class="hljs-number">10000</span>, start_logits)
end_logits = tf.where(mask, -<span class="hljs-number">10000</span>, end_logits)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Fm(k){let r,c;return r=new j({props:{code:`sequence_ids = inputs.sequence_ids()
# Masque tout, sauf les tokens du contexte
mask = [i != 1 for i in sequence_ids]
# D\xE9masquer le jeton [CLS]
mask[0] = False
# Masquer tous les tokens [PAD]
mask = torch.logical_or(torch.tensor(mask)[None], (inputs["attention_mask"] == 0))

start_logits[mask] = -10000
end_logits[mask] = -10000`,highlighted:`sequence_ids = inputs.sequence_ids()
<span class="hljs-comment"># Masque tout, sauf les tokens du contexte</span>
mask = [i != <span class="hljs-number">1</span> <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> sequence_ids]
<span class="hljs-comment"># D\xE9masquer le jeton [CLS]</span>
mask[<span class="hljs-number">0</span>] = <span class="hljs-literal">False</span>
<span class="hljs-comment"># Masquer tous les tokens [PAD]</span>
mask = torch.logical_or(torch.tensor(mask)[<span class="hljs-literal">None</span>], (inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>] == <span class="hljs-number">0</span>))

start_logits[mask] = -<span class="hljs-number">10000</span>
end_logits[mask] = -<span class="hljs-number">10000</span>`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Im(k){let r,c;return r=new j({props:{code:`start_probabilities = tf.math.softmax(start_logits, axis=-1).numpy()
end_probabilities = tf.math.softmax(end_logits, axis=-1).numpy()`,highlighted:`start_probabilities = tf.math.softmax(start_logits, axis=-<span class="hljs-number">1</span>).numpy()
end_probabilities = tf.math.softmax(end_logits, axis=-<span class="hljs-number">1</span>).numpy()`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Om(k){let r,c;return r=new j({props:{code:`start_probabilities = torch.nn.functional.softmax(start_logits, dim=-1)
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-1)`,highlighted:`start_probabilities = torch.nn.functional.softmax(start_logits, dim=-<span class="hljs-number">1</span>)
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-<span class="hljs-number">1</span>)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Um(k){let r,c;return r=new j({props:{code:`candidates = []
for start_probs, end_probs in zip(start_probabilities, end_probabilities):
    scores = start_probs[:, None] * end_probs[None, :]
    idx = np.triu(scores).argmax().item()

    start_idx = idx // scores.shape[0]
    end_idx = idx % scores.shape[0]
    score = scores[start_idx, end_idx].item()
    candidates.append((start_idx, end_idx, score))

print(candidates)`,highlighted:`candidates = []
<span class="hljs-keyword">for</span> start_probs, end_probs <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(start_probabilities, end_probabilities):
    scores = start_probs[:, <span class="hljs-literal">None</span>] * end_probs[<span class="hljs-literal">None</span>, :]
    idx = np.triu(scores).argmax().item()

    start_idx = idx // scores.shape[<span class="hljs-number">0</span>]
    end_idx = idx % scores.shape[<span class="hljs-number">0</span>]
    score = scores[start_idx, end_idx].item()
    candidates.append((start_idx, end_idx, score))

<span class="hljs-built_in">print</span>(candidates)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Gm(k){let r,c;return r=new j({props:{code:`candidates = []
for start_probs, end_probs in zip(start_probabilities, end_probabilities):
    scores = start_probs[:, None] * end_probs[None, :]
    idx = torch.triu(scores).argmax().item()

    start_idx = idx // scores.shape[0]
    end_idx = idx % scores.shape[0]
    score = scores[start_idx, end_idx].item()
    candidates.append((start_idx, end_idx, score))

print(candidates)`,highlighted:`candidates = []
<span class="hljs-keyword">for</span> start_probs, end_probs <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(start_probabilities, end_probabilities):
    scores = start_probs[:, <span class="hljs-literal">None</span>] * end_probs[<span class="hljs-literal">None</span>, :]
    idx = torch.triu(scores).argmax().item()

    start_idx = idx // scores.shape[<span class="hljs-number">0</span>]
    end_idx = idx % scores.shape[<span class="hljs-number">0</span>]
    score = scores[start_idx, end_idx].item()
    candidates.append((start_idx, end_idx, score))

<span class="hljs-built_in">print</span>(candidates)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Jm(k){let r,c,n,b,v;return{c(){r=l("p"),c=a("\u270F\uFE0F "),n=l("strong"),b=a("Essayez !"),v=a(" Adaptez le code ci-dessus pour renvoyer les scores et les \xE9tendues des cinq r\xE9ponses les plus probables (au total, pas par morceau).")},l(w){r=u(w,"P",{});var P=m(r);c=o(P,"\u270F\uFE0F "),n=u(P,"STRONG",{});var T=m(n);b=o(T,"Essayez !"),T.forEach(t),v=o(P," Adaptez le code ci-dessus pour renvoyer les scores et les \xE9tendues des cinq r\xE9ponses les plus probables (au total, pas par morceau)."),P.forEach(t)},m(w,P){p(w,r,P),s(r,c),s(r,n),s(n,b),s(r,v)},d(w){w&&t(r)}}}function Qm(k){let r,c,n,b,v,w,P,T;return{c(){r=l("p"),c=a("\u270F\uFE0F "),n=l("strong"),b=a("Essayez !"),v=a(" Utilisez les meilleurs scores que vous avez calcul\xE9s auparavant pour montrer les cinq r\xE9ponses les plus probables (pour l\u2019ensemble du contexte, pas pour chaque morceau). Pour v\xE9rifier vos r\xE9sultats, retournez au premier pipeline et passez "),w=l("code"),P=a("top_k=5"),T=a(" en l\u2019appelant.")},l(N){r=u(N,"P",{});var z=m(r);c=o(z,"\u270F\uFE0F "),n=u(z,"STRONG",{});var M=m(n);b=o(M,"Essayez !"),M.forEach(t),v=o(z," Utilisez les meilleurs scores que vous avez calcul\xE9s auparavant pour montrer les cinq r\xE9ponses les plus probables (pour l\u2019ensemble du contexte, pas pour chaque morceau). Pour v\xE9rifier vos r\xE9sultats, retournez au premier pipeline et passez "),w=u(z,"CODE",{});var A=m(w);P=o(A,"top_k=5"),A.forEach(t),T=o(z," en l\u2019appelant."),z.forEach(t)},m(N,z){p(N,r,z),s(r,c),s(r,n),s(n,b),s(r,v),s(r,w),s(w,P),s(r,T)},d(N){N&&t(r)}}}function Km(k){let r,c,n,b,v,w,P,T,N,z,M,A,S,L,E,y,Me,ee,Fe,Oa,Ut,Ua,Ga,ir,se,te,Zs,Ie,Je,Gt,as,Ja,os,Qa,Jt,Ka,Wa,lr,we,Ha,et,Ra,Va,Qt,Ya,Ba,ur,is,pr,ls,mr,st,Xa,cr,us,dr,ps,fr,tt,Za,hr,Oe,Qe,Kt,ms,eo,Wt,so,_r,U,to,Ht,no,ro,cs,Rt,ao,oo,Vt,io,lo,nt,uo,po,br,ne,re,rt,at,mo,vr,Ue,ds,nu,co,fs,ru,gr,F,fo,Yt,ho,_o,Bt,bo,vo,Xt,go,xo,Zt,$o,qo,en,ko,wo,xr,hs,$r,ae,oe,ot,D,jo,sn,Eo,yo,tn,Po,zo,nn,To,Co,rn,No,So,an,Lo,Ao,on,Do,Mo,qr,Ke,Fo,ln,Io,Oo,kr,ie,le,it,lt,Uo,wr,ue,pe,ut,G,Go,un,Jo,Qo,pn,Ko,Wo,mn,Ho,Ro,cn,Vo,Yo,jr,O,Bo,dn,Xo,Zo,fn,ei,si,hn,ti,ni,_n,ri,ai,Er,um='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">[</mo><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi></mrow><mo stretchy="false">]</mo><mo>\xD7</mo><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">[</mo><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi></mrow><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\\mathrm{start\\_probabilities}[\\mathrm{start\\_index}] \\times \\mathrm{end\\_probabilities}[\\mathrm{end\\_index}]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord"><span class="mord mathrm">start_probabilities</span></span><span class="mopen">[</span><span class="mord"><span class="mord mathrm">start_index</span></span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord"><span class="mord mathrm">end_probabilities</span></span><span class="mopen">[</span><span class="mord"><span class="mord mathrm">end_index</span></span><span class="mclose">]</span></span></span></span></span>',yr,je,oi,Pr,pm='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">[</mo><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi></mrow><mo stretchy="false">]</mo><mo>\xD7</mo><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">[</mo><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi></mrow><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\\mathrm{start\\_probabilities}[\\mathrm{start\\_index}] \\times \\mathrm{end\\_probabilities}[\\mathrm{end\\_index}]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord"><span class="mord mathrm">start_probabilities</span></span><span class="mopen">[</span><span class="mord"><span class="mord mathrm">start_index</span></span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord"><span class="mord mathrm">end_probabilities</span></span><span class="mopen">[</span><span class="mord"><span class="mord mathrm">end_index</span></span><span class="mclose">]</span></span></span></span>',zr,bn,ii,li,Tr,pt,ui,Cr,_s,Nr,me,ce,mt,J,pi,vn,mi,ci,gn,di,fi,xn,hi,_i,$n,bi,vi,Sr,bs,Lr,ct,gi,Ar,vs,Dr,We,Mr,I,xi,qn,$i,qi,kn,ki,wi,wn,ji,Ei,jn,yi,Pi,En,zi,Ti,Fr,gs,Ir,dt,Ci,Or,xs,Ur,$s,Gr,ft,Ni,Jr,He,Qr,Ge,Re,yn,qs,Si,Pn,Li,Kr,Ee,Ai,zn,Di,Mi,Tn,Fi,Ii,Wr,ks,Hr,ws,Rr,Ve,Oi,Cn,Ui,Gi,Vr,js,Yr,Es,Br,Ye,Ji,Nn,Qi,Ki,Xr,H,Wi,Sn,Hi,Ri,Ln,Vi,Yi,An,Bi,Xi,Zr,ys,ea,Ps,sa,Q,Zi,Dn,el,sl,Mn,tl,nl,Fn,rl,al,In,ol,il,ta,ht,ll,na,zs,ra,Ts,aa,ye,ul,On,pl,ml,Un,cl,dl,oa,Cs,ia,Ns,la,_t,fl,ua,Ss,pa,bt,hl,ma,Ls,ca,vt,_l,da,K,bl,Gn,vl,gl,Jn,xl,$l,Qn,ql,kl,Kn,wl,jl,fa,As,ha,R,El,Wn,yl,Pl,Hn,zl,Tl,Rn,Cl,Nl,_a,de,fe,gt,xt,Sl,ba,Ds,va,he,_e,$t,V,Ll,Vn,Al,Dl,Yn,Ml,Fl,Bn,Il,Ol,ga,be,ve,qt,kt,Ul,xa,ge,xe,wt,jt,Gl,$a,$e,qe,Et,Ms,qa,Be,Jl,Xn,Ql,Kl,ka,Xe,wa,Pe,Wl,Zn,Hl,Rl,er,Vl,Yl,ja,Fs,Ea,Is,ya,yt,Bl,Pa,Ze,za,ze,Xl,sr,Zl,eu,tr,su,tu,Ta;n=new _m({props:{fw:k[0]}}),T=new Ia({});const au=[vm,bm],Os=[];function ou(e,i){return e[0]==="pt"?0:1}S=ou(k),L=Os[S]=au[S](k);const iu=[xm,gm],Us=[];function lu(e,i){return e[0]==="pt"?0:1}se=lu(k),te=Us[se]=iu[se](k),as=new Ia({}),is=new j({props:{code:`from transformers import pipeline

question_answerer = pipeline("question-answering")
context = """
\u{1F917} Transformers is backed by the three most popular deep learning libraries \u2014 Jax, PyTorch, and TensorFlow \u2014 with a seamless integration
between them. It's straightforward to train your models with one before loading them for inference with the other.
"""
# \u{1F917} Transformers s'appuie sur les trois biblioth\xE8ques d'apprentissage profond les plus populaires (Jax, PyTorch et TensorFlow) avec une int\xE9gration transparente entre elles. C'est simple d'entra\xEEner vos mod\xE8les avec l'une avant de les charger pour l'inf\xE9rence avec l'autre.
question = "Which deep learning libraries back \u{1F917} Transformers?"  # Quelles biblioth\xE8ques d'apprentissage profond derri\xE8re \u{1F917} Transformers ?
question_answerer(question=question, context=context)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

question_answerer = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>)
context = <span class="hljs-string">&quot;&quot;&quot;
\u{1F917} Transformers is backed by the three most popular deep learning libraries \u2014 Jax, PyTorch, and TensorFlow \u2014 with a seamless integration
between them. It&#x27;s straightforward to train your models with one before loading them for inference with the other.
&quot;&quot;&quot;</span>
<span class="hljs-comment"># \u{1F917} Transformers s&#x27;appuie sur les trois biblioth\xE8ques d&#x27;apprentissage profond les plus populaires (Jax, PyTorch et TensorFlow) avec une int\xE9gration transparente entre elles. C&#x27;est simple d&#x27;entra\xEEner vos mod\xE8les avec l&#x27;une avant de les charger pour l&#x27;inf\xE9rence avec l&#x27;autre.</span>
question = <span class="hljs-string">&quot;Which deep learning libraries back \u{1F917} Transformers?&quot;</span>  <span class="hljs-comment"># Quelles biblioth\xE8ques d&#x27;apprentissage profond derri\xE8re \u{1F917} Transformers ?</span>
question_answerer(question=question, context=context)`}}),ls=new j({props:{code:`{'score': 0.97773,
 'start': 78,
 'end': 105,
 'answer': 'Jax, PyTorch and TensorFlow'}`,highlighted:`{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.97773</span>,
 <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">78</span>,
 <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">105</span>,
 <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>}`}}),us=new j({props:{code:`long_context = """
\u{1F917} Transformers: State of the Art NLP

\u{1F917} Transformers provides thousands of pretrained models to perform tasks on texts such as classification, information extraction,
question answering, summarization, translation, text generation and more in over 100 languages.
Its aim is to make cutting-edge NLP easier to use for everyone.

\u{1F917} Transformers provides APIs to quickly download and use those pretrained models on a given text, fine-tune them on your own datasets and
then share them with the community on our model hub. At the same time, each python module defining an architecture is fully standalone and
can be modified to enable quick research experiments.

Why should I use transformers?

1. Easy-to-use state-of-the-art models:
  - High performance on NLU and NLG tasks.
  - Low barrier to entry for educators and practitioners.
  - Few user-facing abstractions with just three classes to learn.
  - A unified API for using all our pretrained models.
  - Lower compute costs, smaller carbon footprint:

2. Researchers can share trained models instead of always retraining.
  - Practitioners can reduce compute time and production costs.
  - Dozens of architectures with over 10,000 pretrained models, some in more than 100 languages.

3. Choose the right framework for every part of a model's lifetime:
  - Train state-of-the-art models in 3 lines of code.
  - Move a single model between TF2.0/PyTorch frameworks at will.
  - Seamlessly pick the right framework for training, evaluation and production.

4. Easily customize a model or an example to your needs:
  - We provide examples for each architecture to reproduce the results published by its original authors.
  - Model internals are exposed as consistently as possible.
  - Model files can be used independently of the library for quick experiments.

\u{1F917} Transformers is backed by the three most popular deep learning libraries \u2014 Jax, PyTorch and TensorFlow \u2014 with a seamless integration
between them. It's straightforward to train your models with one before loading them for inference with the other.
"""

long_context - fr = """
\u{1F917} Transformers : l'\xE9tat de l'art du NLP

\u{1F917} Transformers fournit des milliers de mod\xE8les pr\xE9-entra\xEEn\xE9s pour effectuer des t\xE2ches sur des textes telles que la classification, l'extraction d'informations,
la r\xE9ponse \xE0 des questions, le r\xE9sum\xE9 de textes, la traduction, la g\xE9n\xE9ration de texte et plus encore dans plus de 100 langues.
Son objectif est de rendre le traitement automatique des langues de pointe plus facile \xE0 utiliser pour tout le monde.

\u{1F917} Transformers fournit des API permettant de t\xE9l\xE9charger et d'utiliser rapidement ces mod\xE8les pr\xE9-entra\xEEn\xE9s sur un texte donn\xE9, de les affiner sur vos propres ensembles de donn\xE9es et de les partager avec la communaut\xE9 sur notre site Web.
puis de les partager avec la communaut\xE9 sur notre hub de mod\xE8les. En m\xEAme temps, chaque module python d\xE9finissant une architecture est enti\xE8rement autonome et peut \xEAtre modifi\xE9 pour permettre des exp\xE9riences de recherche rapides.
peut \xEAtre modifi\xE9 pour permettre des exp\xE9riences de recherche rapides.

Pourquoi devrais-je utiliser des transformateurs ?

1. Des mod\xE8les de pointe faciles \xE0 utiliser :
  - Haute performance sur les t\xE2ches NLU et NLG.
  - Faible barri\xE8re \xE0 l'entr\xE9e pour les \xE9ducateurs et les praticiens.
  - Peu d'abstractions pour l'utilisateur avec seulement trois classes \xE0 apprendre.
  - Une API unifi\xE9e pour utiliser tous nos mod\xE8les pr\xE9-entra\xEEn\xE9s.
  - Des co\xFBts de calcul plus faibles, une empreinte carbone r\xE9duite :

2. Les chercheurs peuvent partager les mod\xE8les form\xE9s au lieu de toujours les reformer.
  - Les praticiens peuvent r\xE9duire le temps de calcul et les co\xFBts de production.
  - Des dizaines d'architectures avec plus de 10 000 mod\xE8les pr\xE9-form\xE9s, certains dans plus de 100 langues.

3. Choisissez le cadre appropri\xE9 pour chaque \xE9tape de la vie d'un mod\xE8le :
  - Entra\xEEnez des mod\xE8les de pointe en 3 lignes de code.
  - D\xE9placez un seul mod\xE8le entre les frameworks TF2.0/PyTorch \xE0 volont\xE9.
  - Choisissez de mani\xE8re transparente le bon framework pour l'entra\xEEnement, l'\xE9valuation et la production.

4. Adaptez facilement un mod\xE8le ou un exemple \xE0 vos besoins :
  - Nous fournissons des exemples pour chaque architecture afin de reproduire les r\xE9sultats publi\xE9s par ses auteurs originaux.
  - Les \xE9l\xE9ments internes des mod\xE8les sont expos\xE9s de mani\xE8re aussi coh\xE9rente que possible.
  - Les fichiers de mod\xE8les peuvent \xEAtre utilis\xE9s ind\xE9pendamment de la biblioth\xE8que pour des exp\xE9riences rapides.

\u{1F917} Transformers s'appuie sur les trois biblioth\xE8ques d'apprentissage profond les plus populaires (Jax, PyTorch et TensorFlow) avec une int\xE9gration parfaite
entre elles. Il est simple d'entra\xEEner vos mod\xE8les avec l'une avant de les charger pour l'inf\xE9rence avec l'autre.
"""
question_answerer(question=question, context=long_context)`,highlighted:`long_context = <span class="hljs-string">&quot;&quot;&quot;
\u{1F917} Transformers: State of the Art NLP

\u{1F917} Transformers provides thousands of pretrained models to perform tasks on texts such as classification, information extraction,
question answering, summarization, translation, text generation and more in over 100 languages.
Its aim is to make cutting-edge NLP easier to use for everyone.

\u{1F917} Transformers provides APIs to quickly download and use those pretrained models on a given text, fine-tune them on your own datasets and
then share them with the community on our model hub. At the same time, each python module defining an architecture is fully standalone and
can be modified to enable quick research experiments.

Why should I use transformers?

1. Easy-to-use state-of-the-art models:
  - High performance on NLU and NLG tasks.
  - Low barrier to entry for educators and practitioners.
  - Few user-facing abstractions with just three classes to learn.
  - A unified API for using all our pretrained models.
  - Lower compute costs, smaller carbon footprint:

2. Researchers can share trained models instead of always retraining.
  - Practitioners can reduce compute time and production costs.
  - Dozens of architectures with over 10,000 pretrained models, some in more than 100 languages.

3. Choose the right framework for every part of a model&#x27;s lifetime:
  - Train state-of-the-art models in 3 lines of code.
  - Move a single model between TF2.0/PyTorch frameworks at will.
  - Seamlessly pick the right framework for training, evaluation and production.

4. Easily customize a model or an example to your needs:
  - We provide examples for each architecture to reproduce the results published by its original authors.
  - Model internals are exposed as consistently as possible.
  - Model files can be used independently of the library for quick experiments.

\u{1F917} Transformers is backed by the three most popular deep learning libraries \u2014 Jax, PyTorch and TensorFlow \u2014 with a seamless integration
between them. It&#x27;s straightforward to train your models with one before loading them for inference with the other.
&quot;&quot;&quot;</span>

long_context - fr = <span class="hljs-string">&quot;&quot;&quot;
\u{1F917} Transformers : l&#x27;\xE9tat de l&#x27;art du NLP

\u{1F917} Transformers fournit des milliers de mod\xE8les pr\xE9-entra\xEEn\xE9s pour effectuer des t\xE2ches sur des textes telles que la classification, l&#x27;extraction d&#x27;informations,
la r\xE9ponse \xE0 des questions, le r\xE9sum\xE9 de textes, la traduction, la g\xE9n\xE9ration de texte et plus encore dans plus de 100 langues.
Son objectif est de rendre le traitement automatique des langues de pointe plus facile \xE0 utiliser pour tout le monde.

\u{1F917} Transformers fournit des API permettant de t\xE9l\xE9charger et d&#x27;utiliser rapidement ces mod\xE8les pr\xE9-entra\xEEn\xE9s sur un texte donn\xE9, de les affiner sur vos propres ensembles de donn\xE9es et de les partager avec la communaut\xE9 sur notre site Web.
puis de les partager avec la communaut\xE9 sur notre hub de mod\xE8les. En m\xEAme temps, chaque module python d\xE9finissant une architecture est enti\xE8rement autonome et peut \xEAtre modifi\xE9 pour permettre des exp\xE9riences de recherche rapides.
peut \xEAtre modifi\xE9 pour permettre des exp\xE9riences de recherche rapides.

Pourquoi devrais-je utiliser des transformateurs ?

1. Des mod\xE8les de pointe faciles \xE0 utiliser :
  - Haute performance sur les t\xE2ches NLU et NLG.
  - Faible barri\xE8re \xE0 l&#x27;entr\xE9e pour les \xE9ducateurs et les praticiens.
  - Peu d&#x27;abstractions pour l&#x27;utilisateur avec seulement trois classes \xE0 apprendre.
  - Une API unifi\xE9e pour utiliser tous nos mod\xE8les pr\xE9-entra\xEEn\xE9s.
  - Des co\xFBts de calcul plus faibles, une empreinte carbone r\xE9duite :

2. Les chercheurs peuvent partager les mod\xE8les form\xE9s au lieu de toujours les reformer.
  - Les praticiens peuvent r\xE9duire le temps de calcul et les co\xFBts de production.
  - Des dizaines d&#x27;architectures avec plus de 10 000 mod\xE8les pr\xE9-form\xE9s, certains dans plus de 100 langues.

3. Choisissez le cadre appropri\xE9 pour chaque \xE9tape de la vie d&#x27;un mod\xE8le :
  - Entra\xEEnez des mod\xE8les de pointe en 3 lignes de code.
  - D\xE9placez un seul mod\xE8le entre les frameworks TF2.0/PyTorch \xE0 volont\xE9.
  - Choisissez de mani\xE8re transparente le bon framework pour l&#x27;entra\xEEnement, l&#x27;\xE9valuation et la production.

4. Adaptez facilement un mod\xE8le ou un exemple \xE0 vos besoins :
  - Nous fournissons des exemples pour chaque architecture afin de reproduire les r\xE9sultats publi\xE9s par ses auteurs originaux.
  - Les \xE9l\xE9ments internes des mod\xE8les sont expos\xE9s de mani\xE8re aussi coh\xE9rente que possible.
  - Les fichiers de mod\xE8les peuvent \xEAtre utilis\xE9s ind\xE9pendamment de la biblioth\xE8que pour des exp\xE9riences rapides.

\u{1F917} Transformers s&#x27;appuie sur les trois biblioth\xE8ques d&#x27;apprentissage profond les plus populaires (Jax, PyTorch et TensorFlow) avec une int\xE9gration parfaite
entre elles. Il est simple d&#x27;entra\xEEner vos mod\xE8les avec l&#x27;une avant de les charger pour l&#x27;inf\xE9rence avec l&#x27;autre.
&quot;&quot;&quot;</span>
question_answerer(question=question, context=long_context)`}}),ps=new j({props:{code:`{'score': 0.97149,
 'start': 1892,
 'end': 1919,
 'answer': 'Jax, PyTorch and TensorFlow'}`,highlighted:`{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.97149</span>,
 <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">1892</span>,
 <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">1919</span>,
 <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>}`}}),ms=new Ia({});const uu=[qm,$m],Gs=[];function pu(e,i){return e[0]==="pt"?0:1}ne=pu(k),re=Gs[ne]=uu[ne](k),hs=new j({props:{code:`start_logits = outputs.start_logits
end_logits = outputs.end_logits
print(start_logits.shape, end_logits.shape)`,highlighted:`start_logits = outputs.start_logits
end_logits = outputs.end_logits
<span class="hljs-built_in">print</span>(start_logits.shape, end_logits.shape)`}});const mu=[wm,km],Js=[];function cu(e,i){return e[0]==="pt"?0:1}ae=cu(k),oe=Js[ae]=mu[ae](k);const du=[Em,jm],Qs=[];function fu(e,i){return e[0]==="pt"?0:1}ie=fu(k),le=Qs[ie]=du[ie](k);const hu=[Pm,ym],Ks=[];function _u(e,i){return e[0]==="pt"?0:1}ue=_u(k),pe=Ks[ue]=hu[ue](k),_s=new j({props:{code:"scores = start_probabilities[:, None] * end_probabilities[None, :]",highlighted:'scores = start_probabilities[:, <span class="hljs-literal">None</span>] * end_probabilities[<span class="hljs-literal">None</span>, :]'}});const bu=[Tm,zm],Ws=[];function vu(e,i){return e[0]==="pt"?0:1}me=vu(k),ce=Ws[me]=bu[me](k),bs=new j({props:{code:`max_index = scores.argmax().item()
start_index = max_index // scores.shape[1]
end_index = max_index % scores.shape[1]
print(scores[start_index, end_index])`,highlighted:`max_index = scores.argmax().item()
start_index = max_index // scores.shape[<span class="hljs-number">1</span>]
end_index = max_index % scores.shape[<span class="hljs-number">1</span>]
<span class="hljs-built_in">print</span>(scores[start_index, end_index])`}}),vs=new j({props:{code:"0.97773",highlighted:'<span class="hljs-number">0.97773</span>'}}),We=new Fa({props:{$$slots:{default:[Cm]},$$scope:{ctx:k}}}),gs=new j({props:{code:`inputs_with_offsets = tokenizer(question, context, return_offsets_mapping=True)
offsets = inputs_with_offsets["offset_mapping"]

start_char, _ = offsets[start_index]
_, end_char = offsets[end_index]
answer = context[start_char:end_char]`,highlighted:`inputs_with_offsets = tokenizer(question, context, return_offsets_mapping=<span class="hljs-literal">True</span>)
offsets = inputs_with_offsets[<span class="hljs-string">&quot;offset_mapping&quot;</span>]

start_char, _ = offsets[start_index]
_, end_char = offsets[end_index]
answer = context[start_char:end_char]`}}),xs=new j({props:{code:`result = {
    "answer": answer,
    "start": start_char,
    "end": end_char,
    "score": scores[start_index, end_index],
}
print(result)`,highlighted:`result = {
    <span class="hljs-string">&quot;answer&quot;</span>: answer,
    <span class="hljs-string">&quot;start&quot;</span>: start_char,
    <span class="hljs-string">&quot;end&quot;</span>: end_char,
    <span class="hljs-string">&quot;score&quot;</span>: scores[start_index, end_index],
}
<span class="hljs-built_in">print</span>(result)`}}),$s=new j({props:{code:`{'answer': 'Jax, PyTorch and TensorFlow',
 'start': 78,
 'end': 105,
 'score': 0.97773}`,highlighted:`{<span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>,
 <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">78</span>,
 <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">105</span>,
 <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.97773</span>}`}}),He=new Fa({props:{$$slots:{default:[Nm]},$$scope:{ctx:k}}}),qs=new Ia({}),ks=new j({props:{code:`inputs = tokenizer(question, long_context)
print(len(inputs["input_ids"]))`,highlighted:`inputs = tokenizer(question, long_context)
<span class="hljs-built_in">print</span>(<span class="hljs-built_in">len</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]))`}}),ws=new j({props:{code:"461",highlighted:'<span class="hljs-number">461</span>'}}),js=new j({props:{code:`inputs = tokenizer(question, long_context, max_length=384, truncation="only_second")
print(tokenizer.decode(inputs["input_ids"]))`,highlighted:`inputs = tokenizer(question, long_context, max_length=<span class="hljs-number">384</span>, truncation=<span class="hljs-string">&quot;only_second&quot;</span>)
<span class="hljs-built_in">print</span>(tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]))`}}),Es=new j({props:{code:`"""
[CLS] Which deep learning libraries back [UNK] Transformers? [SEP] [UNK] Transformers : State of the Art NLP

[UNK] Transformers provides thousands of pretrained models to perform tasks on texts such as classification, information extraction,
question answering, summarization, translation, text generation and more in over 100 languages.
Its aim is to make cutting-edge NLP easier to use for everyone.

[UNK] Transformers provides APIs to quickly download and use those pretrained models on a given text, fine-tune them on your own datasets and
then share them with the community on our model hub. At the same time, each python module defining an architecture is fully standalone and
can be modified to enable quick research experiments.

Why should I use transformers?

1. Easy-to-use state-of-the-art models:
  - High performance on NLU and NLG tasks.
  - Low barrier to entry for educators and practitioners.
  - Few user-facing abstractions with just three classes to learn.
  - A unified API for using all our pretrained models.
  - Lower compute costs, smaller carbon footprint:

2. Researchers can share trained models instead of always retraining.
  - Practitioners can reduce compute time and production costs.
  - Dozens of architectures with over 10,000 pretrained models, some in more than 100 languages.

3. Choose the right framework for every part of a model's lifetime:
  - Train state-of-the-art models in 3 lines of code.
  - Move a single model between TF2.0/PyTorch frameworks at will.
  - Seamlessly pick the right framework for training, evaluation and production.

4. Easily customize a model or an example to your needs:
  - We provide examples for each architecture to reproduce the results published by its original authors.
  - Model internal [SEP]
"""

"""
[CLS] Quelles sont les biblioth\xE8ques d'apprentissage profond qui soutiennent [UNK] Transformers ? [SEP] [UNK] Transformers : l'\xE9tat de l'art du NLP

[UNK] Transformers fournit des milliers de mod\xE8les pr\xE9-entra\xEEn\xE9s pour effectuer des t\xE2ches sur des textes telles que la classification, l'extraction d'informations, la r\xE9ponse \xE0 des questions, le r\xE9sum\xE9, la traduction, la g\xE9n\xE9ration de textes, etc,
la r\xE9ponse \xE0 des questions, le r\xE9sum\xE9, la traduction, la g\xE9n\xE9ration de texte et plus encore dans plus de 100 langues.
Son objectif est de rendre le traitement automatique des langues de pointe plus facile \xE0 utiliser pour tous.

Transformers [UNK] fournit des API permettant de t\xE9l\xE9charger et d'utiliser rapidement ces mod\xE8les pr\xE9-entra\xEEn\xE9s sur un texte donn\xE9, de les affiner sur vos propres ensembles de donn\xE9es et de les partager avec la communaut\xE9 sur notre site Web.
puis de les partager avec la communaut\xE9 sur notre hub de mod\xE8les. En m\xEAme temps, chaque module python d\xE9finissant une architecture est enti\xE8rement autonome et peut \xEAtre modifi\xE9 pour permettre des exp\xE9riences de recherche rapides.
peut \xEAtre modifi\xE9 pour permettre des exp\xE9riences de recherche rapides.

Pourquoi devrais-je utiliser des transformateurs ?

1. Des mod\xE8les de pointe faciles \xE0 utiliser :
  - Haute performance sur les t\xE2ches NLU et NLG.
  - Faible barri\xE8re \xE0 l'entr\xE9e pour les \xE9ducateurs et les praticiens.
  - Peu d'abstractions pour l'utilisateur avec seulement trois classes \xE0 apprendre.
  - Une API unifi\xE9e pour utiliser tous nos mod\xE8les pr\xE9-entra\xEEn\xE9s.
  - Des co\xFBts de calcul plus faibles, une empreinte carbone r\xE9duite :

2. Les chercheurs peuvent partager les mod\xE8les form\xE9s au lieu de toujours les reformer.
  - Les praticiens peuvent r\xE9duire le temps de calcul et les co\xFBts de production.
  - Des dizaines d'architectures avec plus de 10 000 mod\xE8les pr\xE9-form\xE9s, certains dans plus de 100 langues.

3. Choisissez le cadre appropri\xE9 pour chaque \xE9tape de la vie d'un mod\xE8le :
  - Entra\xEEnez des mod\xE8les de pointe en 3 lignes de code.
  - D\xE9placez un seul mod\xE8le entre les frameworks TF2.0/PyTorch \xE0 volont\xE9.
  - Choisissez de mani\xE8re transparente le bon framework pour l'entra\xEEnement, l'\xE9valuation et la production.

4. Adaptez facilement un mod\xE8le ou un exemple \xE0 vos besoins :
  - Nous fournissons des exemples pour chaque architecture afin de reproduire les r\xE9sultats publi\xE9s par ses auteurs originaux.
  - Mod\xE8le interne [SEP]
"""`,highlighted:`<span class="hljs-string">&quot;&quot;&quot;
[CLS] Which deep learning libraries back [UNK] Transformers? [SEP] [UNK] Transformers : State of the Art NLP

[UNK] Transformers provides thousands of pretrained models to perform tasks on texts such as classification, information extraction,
question answering, summarization, translation, text generation and more in over 100 languages.
Its aim is to make cutting-edge NLP easier to use for everyone.

[UNK] Transformers provides APIs to quickly download and use those pretrained models on a given text, fine-tune them on your own datasets and
then share them with the community on our model hub. At the same time, each python module defining an architecture is fully standalone and
can be modified to enable quick research experiments.

Why should I use transformers?

1. Easy-to-use state-of-the-art models:
  - High performance on NLU and NLG tasks.
  - Low barrier to entry for educators and practitioners.
  - Few user-facing abstractions with just three classes to learn.
  - A unified API for using all our pretrained models.
  - Lower compute costs, smaller carbon footprint:

2. Researchers can share trained models instead of always retraining.
  - Practitioners can reduce compute time and production costs.
  - Dozens of architectures with over 10,000 pretrained models, some in more than 100 languages.

3. Choose the right framework for every part of a model&#x27;s lifetime:
  - Train state-of-the-art models in 3 lines of code.
  - Move a single model between TF2.0/PyTorch frameworks at will.
  - Seamlessly pick the right framework for training, evaluation and production.

4. Easily customize a model or an example to your needs:
  - We provide examples for each architecture to reproduce the results published by its original authors.
  - Model internal [SEP]
&quot;&quot;&quot;</span>

<span class="hljs-string">&quot;&quot;&quot;
[CLS] Quelles sont les biblioth\xE8ques d&#x27;apprentissage profond qui soutiennent [UNK] Transformers ? [SEP] [UNK] Transformers : l&#x27;\xE9tat de l&#x27;art du NLP

[UNK] Transformers fournit des milliers de mod\xE8les pr\xE9-entra\xEEn\xE9s pour effectuer des t\xE2ches sur des textes telles que la classification, l&#x27;extraction d&#x27;informations, la r\xE9ponse \xE0 des questions, le r\xE9sum\xE9, la traduction, la g\xE9n\xE9ration de textes, etc,
la r\xE9ponse \xE0 des questions, le r\xE9sum\xE9, la traduction, la g\xE9n\xE9ration de texte et plus encore dans plus de 100 langues.
Son objectif est de rendre le traitement automatique des langues de pointe plus facile \xE0 utiliser pour tous.

Transformers [UNK] fournit des API permettant de t\xE9l\xE9charger et d&#x27;utiliser rapidement ces mod\xE8les pr\xE9-entra\xEEn\xE9s sur un texte donn\xE9, de les affiner sur vos propres ensembles de donn\xE9es et de les partager avec la communaut\xE9 sur notre site Web.
puis de les partager avec la communaut\xE9 sur notre hub de mod\xE8les. En m\xEAme temps, chaque module python d\xE9finissant une architecture est enti\xE8rement autonome et peut \xEAtre modifi\xE9 pour permettre des exp\xE9riences de recherche rapides.
peut \xEAtre modifi\xE9 pour permettre des exp\xE9riences de recherche rapides.

Pourquoi devrais-je utiliser des transformateurs ?

1. Des mod\xE8les de pointe faciles \xE0 utiliser :
  - Haute performance sur les t\xE2ches NLU et NLG.
  - Faible barri\xE8re \xE0 l&#x27;entr\xE9e pour les \xE9ducateurs et les praticiens.
  - Peu d&#x27;abstractions pour l&#x27;utilisateur avec seulement trois classes \xE0 apprendre.
  - Une API unifi\xE9e pour utiliser tous nos mod\xE8les pr\xE9-entra\xEEn\xE9s.
  - Des co\xFBts de calcul plus faibles, une empreinte carbone r\xE9duite :

2. Les chercheurs peuvent partager les mod\xE8les form\xE9s au lieu de toujours les reformer.
  - Les praticiens peuvent r\xE9duire le temps de calcul et les co\xFBts de production.
  - Des dizaines d&#x27;architectures avec plus de 10 000 mod\xE8les pr\xE9-form\xE9s, certains dans plus de 100 langues.

3. Choisissez le cadre appropri\xE9 pour chaque \xE9tape de la vie d&#x27;un mod\xE8le :
  - Entra\xEEnez des mod\xE8les de pointe en 3 lignes de code.
  - D\xE9placez un seul mod\xE8le entre les frameworks TF2.0/PyTorch \xE0 volont\xE9.
  - Choisissez de mani\xE8re transparente le bon framework pour l&#x27;entra\xEEnement, l&#x27;\xE9valuation et la production.

4. Adaptez facilement un mod\xE8le ou un exemple \xE0 vos besoins :
  - Nous fournissons des exemples pour chaque architecture afin de reproduire les r\xE9sultats publi\xE9s par ses auteurs originaux.
  - Mod\xE8le interne [SEP]
&quot;&quot;&quot;</span>`}}),ys=new j({props:{code:`sentence = "This sentence is not too long but we are going to split it anyway."  # "Cette phrase n'est pas trop longue mais nous allons la diviser quand m\xEAme."
inputs = tokenizer(
    sentence, truncation=True, return_overflowing_tokens=True, max_length=6, stride=2
)

for ids in inputs["input_ids"]:
    print(tokenizer.decode(ids))`,highlighted:`sentence = <span class="hljs-string">&quot;This sentence is not too long but we are going to split it anyway.&quot;</span>  <span class="hljs-comment"># &quot;Cette phrase n&#x27;est pas trop longue mais nous allons la diviser quand m\xEAme.&quot;</span>
inputs = tokenizer(
    sentence, truncation=<span class="hljs-literal">True</span>, return_overflowing_tokens=<span class="hljs-literal">True</span>, max_length=<span class="hljs-number">6</span>, stride=<span class="hljs-number">2</span>
)

<span class="hljs-keyword">for</span> ids <span class="hljs-keyword">in</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(tokenizer.decode(ids))`}}),Ps=new j({props:{code:`'[CLS] This sentence is not [SEP]'
'[CLS] is not too long [SEP]'
'[CLS] too long but we [SEP]'
'[CLS] but we are going [SEP]'
'[CLS] are going to split [SEP]'
'[CLS] to split it anyway [SEP]'
'[CLS] it anyway. [SEP]'`,highlighted:`<span class="hljs-string">&#x27;[CLS] This sentence is not [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] is not too long [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] too long but we [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] but we are going [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] are going to split [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] to split it anyway [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] it anyway. [SEP]&#x27;</span>`}}),zs=new j({props:{code:"print(inputs.keys())",highlighted:'<span class="hljs-built_in">print</span>(inputs.keys())'}}),Ts=new j({props:{code:"dict_keys(['input_ids', 'attention_mask', 'overflow_to_sample_mapping'])",highlighted:'dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>])'}}),Cs=new j({props:{code:'print(inputs["overflow_to_sample_mapping"])',highlighted:'<span class="hljs-built_in">print</span>(inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>])'}}),Ns=new j({props:{code:"[0, 0, 0, 0, 0, 0, 0]",highlighted:'[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]'}}),Ss=new j({props:{code:`sentences = [
    "This sentence is not too long but we are going to split it anyway.",  # Cette phrase n'est pas trop longue mais nous allons la diviser quand m\xEAme
    "This sentence is shorter but will still get split.",  # Cette phrase est plus courte mais sera quand m\xEAme divis\xE9e
]
inputs = tokenizer(
    sentences, truncation=True, return_overflowing_tokens=True, max_length=6, stride=2
)

print(inputs["overflow_to_sample_mapping"])`,highlighted:`sentences = [
    <span class="hljs-string">&quot;This sentence is not too long but we are going to split it anyway.&quot;</span>,  <span class="hljs-comment"># Cette phrase n&#x27;est pas trop longue mais nous allons la diviser quand m\xEAme</span>
    <span class="hljs-string">&quot;This sentence is shorter but will still get split.&quot;</span>,  <span class="hljs-comment"># Cette phrase est plus courte mais sera quand m\xEAme divis\xE9e</span>
]
inputs = tokenizer(
    sentences, truncation=<span class="hljs-literal">True</span>, return_overflowing_tokens=<span class="hljs-literal">True</span>, max_length=<span class="hljs-number">6</span>, stride=<span class="hljs-number">2</span>
)

<span class="hljs-built_in">print</span>(inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>])`}}),Ls=new j({props:{code:"[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]",highlighted:'[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]'}}),As=new j({props:{code:`inputs = tokenizer(
    question,
    long_context,
    stride=128,
    max_length=384,
    padding="longest",
    truncation="only_second",
    return_overflowing_tokens=True,
    return_offsets_mapping=True,
)`,highlighted:`inputs = tokenizer(
    question,
    long_context,
    stride=<span class="hljs-number">128</span>,
    max_length=<span class="hljs-number">384</span>,
    padding=<span class="hljs-string">&quot;longest&quot;</span>,
    truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
    return_overflowing_tokens=<span class="hljs-literal">True</span>,
    return_offsets_mapping=<span class="hljs-literal">True</span>,
)`}});const gu=[Lm,Sm],Hs=[];function xu(e,i){return e[0]==="pt"?0:1}de=xu(k),fe=Hs[de]=gu[de](k),Ds=new j({props:{code:`outputs = model(**inputs)

start_logits = outputs.start_logits
end_logits = outputs.end_logits
print(start_logits.shape, end_logits.shape)`,highlighted:`outputs = model(**inputs)

start_logits = outputs.start_logits
end_logits = outputs.end_logits
<span class="hljs-built_in">print</span>(start_logits.shape, end_logits.shape)`}});const $u=[Dm,Am],Rs=[];function qu(e,i){return e[0]==="pt"?0:1}he=qu(k),_e=Rs[he]=$u[he](k);const ku=[Fm,Mm],Vs=[];function wu(e,i){return e[0]==="pt"?0:1}be=wu(k),ve=Vs[be]=ku[be](k);const ju=[Om,Im],Ys=[];function Eu(e,i){return e[0]==="pt"?0:1}ge=Eu(k),xe=Ys[ge]=ju[ge](k);const yu=[Gm,Um],Bs=[];function Pu(e,i){return e[0]==="pt"?0:1}return $e=Pu(k),qe=Bs[$e]=yu[$e](k),Ms=new j({props:{code:"[(0, 18, 0.33867), (173, 184, 0.97149)]",highlighted:'[(<span class="hljs-number">0</span>, <span class="hljs-number">18</span>, <span class="hljs-number">0.33867</span>), (<span class="hljs-number">173</span>, <span class="hljs-number">184</span>, <span class="hljs-number">0.97149</span>)]'}}),Xe=new Fa({props:{$$slots:{default:[Jm]},$$scope:{ctx:k}}}),Fs=new j({props:{code:`for candidate, offset in zip(candidates, offsets):
    start_token, end_token, score = candidate
    start_char, _ = offset[start_token]
    _, end_char = offset[end_token]
    answer = long_context[start_char:end_char]
    result = {"answer": answer, "start": start_char, "end": end_char, "score": score}
    print(result)`,highlighted:`<span class="hljs-keyword">for</span> candidate, offset <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(candidates, offsets):
    start_token, end_token, score = candidate
    start_char, _ = offset[start_token]
    _, end_char = offset[end_token]
    answer = long_context[start_char:end_char]
    result = {<span class="hljs-string">&quot;answer&quot;</span>: answer, <span class="hljs-string">&quot;start&quot;</span>: start_char, <span class="hljs-string">&quot;end&quot;</span>: end_char, <span class="hljs-string">&quot;score&quot;</span>: score}
    <span class="hljs-built_in">print</span>(result)`}}),Is=new j({props:{code:`{'answer': '\\n\u{1F917} Transformers: State of the Art NLP', 'start': 0, 'end': 37, 'score': 0.33867}
{'answer': 'Jax, PyTorch and TensorFlow', 'start': 1892, 'end': 1919, 'score': 0.97149}`,highlighted:`{<span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;\\n\u{1F917} Transformers: State of the Art NLP&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">37</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.33867</span>}
{<span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">1892</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">1919</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.97149</span>}`}}),Ze=new Fa({props:{$$slots:{default:[Qm]},$$scope:{ctx:k}}}),{c(){r=l("meta"),c=d(),g(n.$$.fragment),b=d(),v=l("h1"),w=l("a"),P=l("span"),g(T.$$.fragment),N=d(),z=l("span"),M=a("*Tokenizer* rapide dans le pipeline de QA"),A=d(),L.c(),E=d(),y=l("p"),Me=a("Nous allons maintenant nous plonger dans le pipeline de "),ee=l("code"),Fe=a("question-answering"),Oa=a(" et voir comment exploiter les "),Ut=l("em"),Ua=a("offsets"),Ga=a(" pour extraire du contexte la r\xE9ponse \xE0 la question pos\xE9e, un peu comme nous l\u2019avons fait pour les entit\xE9s group\xE9es dans la section pr\xE9c\xE9dente. Nous verrons ensuite comment g\xE9rer les contextes tr\xE8s longs qui finissent par \xEAtre tronqu\xE9s. Vous pouvez sauter cette section si vous n\u2019\xEAtes pas int\xE9ress\xE9 par la t\xE2che de r\xE9ponse aux questions."),ir=d(),te.c(),Zs=d(),Ie=l("h2"),Je=l("a"),Gt=l("span"),g(as.$$.fragment),Ja=d(),os=l("span"),Qa=a("Utilisation du pipeline de "),Jt=l("code"),Ka=a("question-answering"),Wa=a("."),lr=d(),we=l("p"),Ha=a("Comme nous l\u2019avons vu dans le "),et=l("a"),Ra=a("Chapitre 1"),Va=a(", nous pouvons utiliser le pipeline de "),Qt=l("code"),Ya=a("question-answering"),Ba=a(" comme ceci pour obtenir la r\xE9ponse \xE0 une question :"),ur=d(),g(is.$$.fragment),pr=d(),g(ls.$$.fragment),mr=d(),st=l("p"),Xa=a("Contrairement aux autres pipelines, qui ne peuvent pas tronquer et diviser les textes dont la longueur est sup\xE9rieure \xE0 la longueur maximale accept\xE9e par le mod\xE8le (et qui peuvent donc manquer des informations \xE0 la fin d\u2019un document), ce pipeline peut traiter des contextes tr\xE8s longs et retournera la r\xE9ponse \xE0 la question m\xEAme si elle se trouve \xE0 la fin :"),cr=d(),g(us.$$.fragment),dr=d(),g(ps.$$.fragment),fr=d(),tt=l("p"),Za=a("Voyons comment il fait tout cela !"),hr=d(),Oe=l("h3"),Qe=l("a"),Kt=l("span"),g(ms.$$.fragment),eo=d(),Wt=l("span"),so=a("Utilisation d'un mod\xE8le pour r\xE9pondre \xE0 des questions"),_r=d(),U=l("p"),to=a("Comme avec n\u2019importe quel autre pipeline, nous commen\xE7ons par tokeniser notre entr\xE9e et l\u2019envoyons ensuite \xE0 travers le mod\xE8le. Le point de contr\xF4le utilis\xE9 par d\xE9faut pour le pipeline de "),Ht=l("code"),no=a("question-answering"),ro=a(" est "),cs=l("a"),Rt=l("code"),ao=a("distilbert-base-cased-distilled-squad"),oo=a(" (le \xAB squad \xBB dans le nom vient du jeu de donn\xE9es sur lequel le mod\xE8le a \xE9t\xE9 "),Vt=l("em"),io=a("finetun\xE9"),lo=a(", nous parlerons plus du jeu de donn\xE9es SQuAD dans le "),nt=l("a"),uo=a("Chapitre 7"),po=a(") :"),br=d(),re.c(),rt=d(),at=l("p"),mo=a("Notez que nous tokenizons la question et le contexte comme une paire, la question en premier."),vr=d(),Ue=l("div"),ds=l("img"),co=d(),fs=l("img"),gr=d(),F=l("p"),fo=a("Les mod\xE8les de r\xE9ponse aux questions fonctionnent un peu diff\xE9remment des mod\xE8les que nous avons vus jusqu\u2019\xE0 pr\xE9sent. En utilisant l\u2019image ci-dessus comme exemple, le mod\xE8le a \xE9t\xE9 entra\xEEn\xE9 \xE0 pr\xE9dire l\u2019index du "),Yt=l("em"),ho=a("token"),_o=a(" de d\xE9but de la r\xE9ponse (ici 21) et l\u2019index du "),Bt=l("em"),bo=a("token"),vo=a(" o\xF9 la r\xE9ponse se termine (ici 24). C\u2019est pourquoi ces mod\xE8les ne retournent pas un tenseur de logits mais deux : un pour les logits correspondant au "),Xt=l("em"),go=a("token"),xo=a(" de d\xE9but de la r\xE9ponse, et un pour les logits correspondant au "),Zt=l("em"),$o=a("token"),qo=a(" de fin de la r\xE9ponse. Puisque dans ce cas nous n\u2019avons qu\u2019une seule entr\xE9e contenant 66 "),en=l("em"),ko=a("tokens"),wo=a(", nous obtenons :"),xr=d(),g(hs.$$.fragment),$r=d(),oe.c(),ot=d(),D=l("p"),jo=a("Pour convertir ces logits en probabilit\xE9s, nous allons appliquer une fonction softmax. Mais avant cela, nous devons nous assurer de masquer les indices qui ne font pas partie du contexte. Notre entr\xE9e est "),sn=l("code"),Eo=a("[CLS] question [SEP] contexte [SEP]"),yo=a(", donc nous devons masquer les "),tn=l("em"),Po=a("tokens"),zo=a(" de la question ainsi que le "),nn=l("em"),To=a("token"),Co=d(),rn=l("code"),No=a("[SEP]"),So=a(". Nous garderons cependant le "),an=l("em"),Lo=a("token"),Ao=d(),on=l("code"),Do=a("[CLS]"),Mo=a(", car certains mod\xE8les l\u2019utilisent pour indiquer que la r\xE9ponse n\u2019est pas dans le contexte."),qr=d(),Ke=l("p"),Fo=a("Puisque nous appliquerons une fonction softmax par la suite, il nous suffit de remplacer les logits que nous voulons masquer par un grand nombre n\xE9gatif. Ici, nous utilisons "),ln=l("code"),Io=a("-10000"),Oo=a(" :"),kr=d(),le.c(),it=d(),lt=l("p"),Uo=a("Maintenant que nous avons correctement masqu\xE9 les logits correspondant aux positions que nous ne voulons pas pr\xE9dire, nous pouvons appliquer la softmax :"),wr=d(),pe.c(),ut=d(),G=l("p"),Go=a("A ce stade, nous pourrions prendre l\u2019argmax des probabilit\xE9s de d\xE9but et de fin mais nous pourrions nous retrouver avec un indice de d\xE9but sup\xE9rieur \xE0 l\u2019indice de fin, nous devons donc prendre quelques pr\xE9cautions suppl\xE9mentaires. Nous allons calculer les probabilit\xE9s de chaque "),un=l("code"),Jo=a("start_index"),Qo=a(" et "),pn=l("code"),Ko=a("end_index"),Wo=a(" possible o\xF9 "),mn=l("code"),Ho=a("start_index<=end_index"),Ro=a(", puis nous prendrons le tuple "),cn=l("code"),Vo=a("(start_index, end_index)"),Yo=a(" avec la plus grande probabilit\xE9."),jr=d(),O=l("p"),Bo=a("En supposant que les \xE9v\xE9nements \xAB La r\xE9ponse commence \xE0 "),dn=l("code"),Xo=a("start_index"),Zo=a(" \xBB et \xAB La r\xE9ponse se termine \xE0 "),fn=l("code"),ei=a("end_index"),si=a(" \xBB sont ind\xE9pendants, la probabilit\xE9 que la r\xE9ponse commence \xE0 "),hn=l("code"),ti=a("end_index"),ni=a(" et se termine \xE0 "),_n=l("code"),ri=a("end_index"),ai=a(` est :
`),Er=new rm,yr=d(),je=l("p"),oi=a("Ainsi, pour calculer tous les scores, il suffit de calculer tous les produits "),Pr=new rm,zr=a(" o\xF9 "),bn=l("code"),ii=a("start_index <= end_index"),li=a("."),Tr=d(),pt=l("p"),ui=a("Calculons d\u2019abord tous les produits possibles :"),Cr=d(),g(_s.$$.fragment),Nr=d(),ce.c(),mt=d(),J=l("p"),pi=a("Il ne nous reste plus qu\u2019\xE0 obtenir l\u2019indice du maximum. Puisque PyTorch retournera l\u2019index dans le tenseur aplati, nous devons utiliser les op\xE9rations division plancher "),vn=l("code"),mi=a("//"),ci=a(" et modulus "),gn=l("code"),di=a("%"),fi=a(" pour obtenir le "),xn=l("code"),hi=a("start_index"),_i=a(" et le "),$n=l("code"),bi=a("end_index"),vi=a(" :"),Sr=d(),g(bs.$$.fragment),Lr=d(),ct=l("p"),gi=a("Nous n\u2019avons pas encore tout \xE0 fait termin\xE9, mais au moins nous avons d\xE9j\xE0 le score correct pour la r\xE9ponse (vous pouvez le v\xE9rifier en le comparant au premier r\xE9sultat de la section pr\xE9c\xE9dente) :"),Ar=d(),g(vs.$$.fragment),Dr=d(),g(We.$$.fragment),Mr=d(),I=l("p"),xi=a("Nous avons les "),qn=l("code"),$i=a("start_index"),qi=a(" et "),kn=l("code"),ki=a("end_index"),wi=a(" de la r\xE9ponse en termes de "),wn=l("em"),ji=a("tokens"),Ei=a(", donc maintenant nous devons juste convertir en indices de caract\xE8res dans le contexte. C\u2019est l\xE0 que les "),jn=l("em"),yi=a("offsets"),Pi=a(" seront super utiles. Nous pouvons les saisir et les utiliser comme nous l\u2019avons fait dans la t\xE2che de classification des "),En=l("em"),zi=a("tokens"),Ti=a(" :"),Fr=d(),g(gs.$$.fragment),Ir=d(),dt=l("p"),Ci=a("Il ne nous reste plus qu\u2019\xE0 tout formater pour obtenir notre r\xE9sultat :"),Or=d(),g(xs.$$.fragment),Ur=d(),g($s.$$.fragment),Gr=d(),ft=l("p"),Ni=a("Super ! C\u2019est la m\xEAme chose que dans notre premier exemple !"),Jr=d(),g(He.$$.fragment),Qr=d(),Ge=l("h2"),Re=l("a"),yn=l("span"),g(qs.$$.fragment),Si=d(),Pn=l("span"),Li=a("Gestion des contextes longs"),Kr=d(),Ee=l("p"),Ai=a("Si nous essayons de tokeniser la question et le long contexte que nous avons utilis\xE9 comme exemple pr\xE9c\xE9demment, nous obtiendrons un nombre de "),zn=l("em"),Di=a("tokens"),Mi=a(" sup\xE9rieur \xE0 la longueur maximale utilis\xE9e dans le pipeline "),Tn=l("code"),Fi=a("question-answering"),Ii=a(" (qui est de 384) :"),Wr=d(),g(ks.$$.fragment),Hr=d(),g(ws.$$.fragment),Rr=d(),Ve=l("p"),Oi=a("Nous devrons donc tronquer nos entr\xE9es \xE0 cette longueur maximale. Il y a plusieurs fa\xE7ons de le faire, mais nous ne voulons pas tronquer la question, seulement le contexte. Puisque le contexte est la deuxi\xE8me phrase, nous utiliserons la strat\xE9gie de troncature "),Cn=l("code"),Ui=a('"only_second"'),Gi=a(". Le probl\xE8me qui se pose alors est que la r\xE9ponse \xE0 la question peut ne pas se trouver dans le contexte tronqu\xE9. Ici, par exemple, nous avons choisi une question dont la r\xE9ponse se trouve vers la fin du contexte, et lorsque nous la tronquons, cette r\xE9ponse n\u2019est pas pr\xE9sente :"),Vr=d(),g(js.$$.fragment),Yr=d(),g(Es.$$.fragment),Br=d(),Ye=l("p"),Ji=a("Cela signifie que le mod\xE8le aura du mal \xE0 trouver la bonne r\xE9ponse. Pour r\xE9soudre ce probl\xE8me, le pipeline de "),Nn=l("code"),Qi=a("question-answering"),Ki=a(" nous permet de diviser le contexte en morceaux plus petits, en sp\xE9cifiant la longueur maximale. Pour s\u2019assurer que nous ne divisons pas le contexte exactement au mauvais endroit pour permettre de trouver la r\xE9ponse, il inclut \xE9galement un certain chevauchement entre les morceaux."),Xr=d(),H=l("p"),Wi=a("Nous pouvons demander au "),Sn=l("em"),Hi=a("tokenizer"),Ri=a(" (rapide ou lent) de le faire pour nous en ajoutant "),Ln=l("code"),Vi=a("return_overflowing_tokens=True"),Yi=a(", et nous pouvons sp\xE9cifier le chevauchement que nous voulons avec l\u2019argument "),An=l("code"),Bi=a("stride"),Xi=a(". Voici un exemple, en utilisant une phrase plus petite :"),Zr=d(),g(ys.$$.fragment),ea=d(),g(Ps.$$.fragment),sa=d(),Q=l("p"),Zi=a("Comme on peut le voir, la phrase a \xE9t\xE9 d\xE9coup\xE9e en morceaux de telle sorte que chaque entr\xE9e dans "),Dn=l("code"),el=a('inputs["input_ids"]'),sl=a(" a au maximum 6 "),Mn=l("em"),tl=a("tokens"),nl=a(" (il faudrait ajouter du "),Fn=l("em"),rl=a("padding"),al=a(" pour que la derni\xE8re entr\xE9e ait la m\xEAme taille que les autres) et il y a un chevauchement de 2 "),In=l("em"),ol=a("tokens"),il=a(" entre chacune des entr\xE9es."),ta=d(),ht=l("p"),ll=a("Regardons de plus pr\xE8s le r\xE9sultat de la tok\xE9nisation :"),na=d(),g(zs.$$.fragment),ra=d(),g(Ts.$$.fragment),aa=d(),ye=l("p"),ul=a("Comme pr\xE9vu, nous obtenons les ID d\u2019entr\xE9e et un masque d\u2019attention. La derni\xE8re cl\xE9, "),On=l("code"),pl=a("overflow_to_sample_mapping"),ml=a(", est une carte qui nous indique \xE0 quelle phrase correspond chacun des r\xE9sultats \u2014 ici nous avons 7 r\xE9sultats qui proviennent tous de la (seule) phrase que nous avons pass\xE9e au "),Un=l("em"),cl=a("tokenizer"),dl=a(" :"),oa=d(),g(Cs.$$.fragment),ia=d(),g(Ns.$$.fragment),la=d(),_t=l("p"),fl=a("C\u2019est plus utile lorsque nous tokenisons plusieurs phrases ensemble. Par exemple, ceci :"),ua=d(),g(Ss.$$.fragment),pa=d(),bt=l("p"),hl=a("nous donne :"),ma=d(),g(Ls.$$.fragment),ca=d(),vt=l("p"),_l=a("ce qui signifie que la premi\xE8re phrase est divis\xE9e en 7 morceaux comme pr\xE9c\xE9demment, et que les 4 morceaux suivants proviennent de la deuxi\xE8me phrase."),da=d(),K=l("p"),bl=a("Revenons maintenant \xE0 notre contexte long. Par d\xE9faut, le pipeline "),Gn=l("code"),vl=a("question-answering"),gl=a(" utilise une longueur maximale de 384, comme nous l\u2019avons mentionn\xE9 plus t\xF4t, et un stride de 128, qui correspondent \xE0 la fa\xE7on dont le mod\xE8le a \xE9t\xE9 ajust\xE9 (vous pouvez ajuster ces param\xE8tres en passant les arguments "),Jn=l("code"),xl=a("max_seq_len"),$l=a(" et "),Qn=l("code"),ql=a("stride"),kl=a(" lorsque vous appelez le pipeline). Nous utiliserons donc ces param\xE8tres lors de la tokenisation. Nous ajouterons aussi du "),Kn=l("em"),wl=a("padding"),jl=a(" (pour avoir des \xE9chantillons de m\xEAme longueur, afin de pouvoir construire des tenseurs) ainsi que demander les offsets :"),fa=d(),g(As.$$.fragment),ha=d(),R=l("p"),El=a("Ces "),Wn=l("code"),yl=a("inputs"),Pl=a(" contiendront les ID d\u2019entr\xE9e et les masques d\u2019attention que le mod\xE8le attend, ainsi que les offsets et le "),Hn=l("code"),zl=a("overflow_to_sample_mapping"),Tl=a(" dont on vient de parler. Puisque ces deux \xE9l\xE9ments ne sont pas des param\xE8tres utilis\xE9s par le mod\xE8le, nous allons les sortir des "),Rn=l("code"),Cl=a("inputs"),Nl=a(" (et nous ne stockerons pas la carte, puisqu\u2019elle n\u2019est pas utile ici) avant de le convertir en tenseur :"),_a=d(),fe.c(),gt=d(),xt=l("p"),Sl=a("Notre contexte long a \xE9t\xE9 divis\xE9 en deux, ce qui signifie qu\u2019apr\xE8s avoir travers\xE9 notre mod\xE8le, nous aurons deux ensembles de logits de d\xE9but et de fin :"),ba=d(),g(Ds.$$.fragment),va=d(),_e.c(),$t=d(),V=l("p"),Ll=a("Comme pr\xE9c\xE9demment, nous masquons d\u2019abord les "),Vn=l("em"),Al=a("tokens"),Dl=a(" qui ne font pas partie du contexte avant de prendre le softmax. Nous masquons \xE9galement tous les "),Yn=l("em"),Ml=a("tokens"),Fl=a(" de "),Bn=l("em"),Il=a("padding"),Ol=a(" (tels que signal\xE9s par le masque d\u2019attention) :"),ga=d(),ve.c(),qt=d(),kt=l("p"),Ul=a("Ensuite, nous pouvons utiliser lafonction softmax pour convertir nos logits en probabilit\xE9s :"),xa=d(),xe.c(),wt=d(),jt=l("p"),Gl=a("L\u2019\xE9tape suivante est similaire \xE0 ce que nous avons fait pour le petit contexte, mais nous la r\xE9p\xE9tons pour chacun de nos deux chunks. Nous attribuons un score \xE0 tous les espaces de r\xE9ponse possibles, puis nous prenons l\u2019espace ayant le meilleur score :"),$a=d(),qe.c(),Et=d(),g(Ms.$$.fragment),qa=d(),Be=l("p"),Jl=a("Ces deux candidats correspondent aux meilleures r\xE9ponses que le mod\xE8le a pu trouver dans chaque morceau. Le mod\xE8le est beaucoup plus confiant que la bonne r\xE9ponse se trouve dans la deuxi\xE8me partie (ce qui est bon signe !). Il ne nous reste plus qu\u2019\xE0 faire correspondre ces deux espaces de "),Xn=l("em"),Ql=a("tokens"),Kl=a(" \xE0 des espaces de caract\xE8res dans le contexte (nous n\u2019avons besoin de faire correspondre que le second pour avoir notre r\xE9ponse, mais il est int\xE9ressant de voir ce que le mod\xE8le a choisi dans le premier morceau)."),ka=d(),g(Xe.$$.fragment),wa=d(),Pe=l("p"),Wl=a("Le "),Zn=l("code"),Hl=a("offsets"),Rl=a(" que nous avons saisi plus t\xF4t est en fait une liste d\u2019"),er=l("em"),Vl=a("offsets"),Yl=a(", avec une liste par morceau de texte :"),ja=d(),g(Fs.$$.fragment),Ea=d(),g(Is.$$.fragment),ya=d(),yt=l("p"),Bl=a("Si nous ignorons le premier r\xE9sultat, nous obtenons le m\xEAme r\xE9sultat que notre pipeline pour ce long contexte. Yay !"),Pa=d(),g(Ze.$$.fragment),za=d(),ze=l("p"),Xl=a("Ceci conclut notre plong\xE9e en profondeur dans les capacit\xE9s du "),sr=l("em"),Zl=a("tokenizer"),eu=a(". Nous mettrons \xE0 nouveau tout cela en pratique dans le prochain chapitre, lorsque nous vous montrerons comment "),tr=l("em"),su=a("finetuner"),tu=a(" un mod\xE8le sur une s\xE9rie de t\xE2ches NLP courantes."),this.h()},l(e){const i=fm('[data-svelte="svelte-1phssyn"]',document.head);r=u(i,"META",{name:!0,content:!0}),i.forEach(t),c=f(e),x(n.$$.fragment,e),b=f(e),v=u(e,"H1",{class:!0});var Xs=m(v);w=u(Xs,"A",{id:!0,class:!0,href:!0});var Pt=m(w);P=u(Pt,"SPAN",{});var zt=m(P);x(T.$$.fragment,zt),zt.forEach(t),Pt.forEach(t),N=f(Xs),z=u(Xs,"SPAN",{});var Tt=m(z);M=o(Tt,"*Tokenizer* rapide dans le pipeline de QA"),Tt.forEach(t),Xs.forEach(t),A=f(e),L.l(e),E=f(e),y=u(e,"P",{});var Te=m(y);Me=o(Te,"Nous allons maintenant nous plonger dans le pipeline de "),ee=u(Te,"CODE",{});var Ct=m(ee);Fe=o(Ct,"question-answering"),Ct.forEach(t),Oa=o(Te," et voir comment exploiter les "),Ut=u(Te,"EM",{});var Nt=m(Ut);Ua=o(Nt,"offsets"),Nt.forEach(t),Ga=o(Te," pour extraire du contexte la r\xE9ponse \xE0 la question pos\xE9e, un peu comme nous l\u2019avons fait pour les entit\xE9s group\xE9es dans la section pr\xE9c\xE9dente. Nous verrons ensuite comment g\xE9rer les contextes tr\xE8s longs qui finissent par \xEAtre tronqu\xE9s. Vous pouvez sauter cette section si vous n\u2019\xEAtes pas int\xE9ress\xE9 par la t\xE2che de r\xE9ponse aux questions."),Te.forEach(t),ir=f(e),te.l(e),Zs=f(e),Ie=u(e,"H2",{class:!0});var es=m(Ie);Je=u(es,"A",{id:!0,class:!0,href:!0});var nr=m(Je);Gt=u(nr,"SPAN",{});var rr=m(Gt);x(as.$$.fragment,rr),rr.forEach(t),nr.forEach(t),Ja=f(es),os=u(es,"SPAN",{});var ss=m(os);Qa=o(ss,"Utilisation du pipeline de "),Jt=u(ss,"CODE",{});var St=m(Jt);Ka=o(St,"question-answering"),St.forEach(t),Wa=o(ss,"."),ss.forEach(t),es.forEach(t),lr=f(e),we=u(e,"P",{});var Ce=m(we);Ha=o(Ce,"Comme nous l\u2019avons vu dans le "),et=u(Ce,"A",{href:!0});var Lt=m(et);Ra=o(Lt,"Chapitre 1"),Lt.forEach(t),Va=o(Ce,", nous pouvons utiliser le pipeline de "),Qt=u(Ce,"CODE",{});var At=m(Qt);Ya=o(At,"question-answering"),At.forEach(t),Ba=o(Ce," comme ceci pour obtenir la r\xE9ponse \xE0 une question :"),Ce.forEach(t),ur=f(e),x(is.$$.fragment,e),pr=f(e),x(ls.$$.fragment,e),mr=f(e),st=u(e,"P",{});var ar=m(st);Xa=o(ar,"Contrairement aux autres pipelines, qui ne peuvent pas tronquer et diviser les textes dont la longueur est sup\xE9rieure \xE0 la longueur maximale accept\xE9e par le mod\xE8le (et qui peuvent donc manquer des informations \xE0 la fin d\u2019un document), ce pipeline peut traiter des contextes tr\xE8s longs et retournera la r\xE9ponse \xE0 la question m\xEAme si elle se trouve \xE0 la fin :"),ar.forEach(t),cr=f(e),x(us.$$.fragment,e),dr=f(e),x(ps.$$.fragment,e),fr=f(e),tt=u(e,"P",{});var or=m(tt);Za=o(or,"Voyons comment il fait tout cela !"),or.forEach(t),hr=f(e),Oe=u(e,"H3",{class:!0});var Ca=m(Oe);Qe=u(Ca,"A",{id:!0,class:!0,href:!0});var zu=m(Qe);Kt=u(zu,"SPAN",{});var Tu=m(Kt);x(ms.$$.fragment,Tu),Tu.forEach(t),zu.forEach(t),eo=f(Ca),Wt=u(Ca,"SPAN",{});var Cu=m(Wt);so=o(Cu,"Utilisation d'un mod\xE8le pour r\xE9pondre \xE0 des questions"),Cu.forEach(t),Ca.forEach(t),_r=f(e),U=u(e,"P",{});var Ne=m(U);to=o(Ne,"Comme avec n\u2019importe quel autre pipeline, nous commen\xE7ons par tokeniser notre entr\xE9e et l\u2019envoyons ensuite \xE0 travers le mod\xE8le. Le point de contr\xF4le utilis\xE9 par d\xE9faut pour le pipeline de "),Ht=u(Ne,"CODE",{});var Nu=m(Ht);no=o(Nu,"question-answering"),Nu.forEach(t),ro=o(Ne," est "),cs=u(Ne,"A",{href:!0,rel:!0});var Su=m(cs);Rt=u(Su,"CODE",{});var Lu=m(Rt);ao=o(Lu,"distilbert-base-cased-distilled-squad"),Lu.forEach(t),Su.forEach(t),oo=o(Ne," (le \xAB squad \xBB dans le nom vient du jeu de donn\xE9es sur lequel le mod\xE8le a \xE9t\xE9 "),Vt=u(Ne,"EM",{});var Au=m(Vt);io=o(Au,"finetun\xE9"),Au.forEach(t),lo=o(Ne,", nous parlerons plus du jeu de donn\xE9es SQuAD dans le "),nt=u(Ne,"A",{href:!0});var Du=m(nt);uo=o(Du,"Chapitre 7"),Du.forEach(t),po=o(Ne,") :"),Ne.forEach(t),br=f(e),re.l(e),rt=f(e),at=u(e,"P",{});var Mu=m(at);mo=o(Mu,"Notez que nous tokenizons la question et le contexte comme une paire, la question en premier."),Mu.forEach(t),vr=f(e),Ue=u(e,"DIV",{class:!0});var Na=m(Ue);ds=u(Na,"IMG",{class:!0,src:!0,alt:!0}),co=f(Na),fs=u(Na,"IMG",{class:!0,src:!0,alt:!0}),Na.forEach(t),gr=f(e),F=u(e,"P",{});var Y=m(F);fo=o(Y,"Les mod\xE8les de r\xE9ponse aux questions fonctionnent un peu diff\xE9remment des mod\xE8les que nous avons vus jusqu\u2019\xE0 pr\xE9sent. En utilisant l\u2019image ci-dessus comme exemple, le mod\xE8le a \xE9t\xE9 entra\xEEn\xE9 \xE0 pr\xE9dire l\u2019index du "),Yt=u(Y,"EM",{});var Fu=m(Yt);ho=o(Fu,"token"),Fu.forEach(t),_o=o(Y," de d\xE9but de la r\xE9ponse (ici 21) et l\u2019index du "),Bt=u(Y,"EM",{});var Iu=m(Bt);bo=o(Iu,"token"),Iu.forEach(t),vo=o(Y," o\xF9 la r\xE9ponse se termine (ici 24). C\u2019est pourquoi ces mod\xE8les ne retournent pas un tenseur de logits mais deux : un pour les logits correspondant au "),Xt=u(Y,"EM",{});var Ou=m(Xt);go=o(Ou,"token"),Ou.forEach(t),xo=o(Y," de d\xE9but de la r\xE9ponse, et un pour les logits correspondant au "),Zt=u(Y,"EM",{});var Uu=m(Zt);$o=o(Uu,"token"),Uu.forEach(t),qo=o(Y," de fin de la r\xE9ponse. Puisque dans ce cas nous n\u2019avons qu\u2019une seule entr\xE9e contenant 66 "),en=u(Y,"EM",{});var Gu=m(en);ko=o(Gu,"tokens"),Gu.forEach(t),wo=o(Y,", nous obtenons :"),Y.forEach(t),xr=f(e),x(hs.$$.fragment,e),$r=f(e),oe.l(e),ot=f(e),D=u(e,"P",{});var W=m(D);jo=o(W,"Pour convertir ces logits en probabilit\xE9s, nous allons appliquer une fonction softmax. Mais avant cela, nous devons nous assurer de masquer les indices qui ne font pas partie du contexte. Notre entr\xE9e est "),sn=u(W,"CODE",{});var Ju=m(sn);Eo=o(Ju,"[CLS] question [SEP] contexte [SEP]"),Ju.forEach(t),yo=o(W,", donc nous devons masquer les "),tn=u(W,"EM",{});var Qu=m(tn);Po=o(Qu,"tokens"),Qu.forEach(t),zo=o(W," de la question ainsi que le "),nn=u(W,"EM",{});var Ku=m(nn);To=o(Ku,"token"),Ku.forEach(t),Co=f(W),rn=u(W,"CODE",{});var Wu=m(rn);No=o(Wu,"[SEP]"),Wu.forEach(t),So=o(W,". Nous garderons cependant le "),an=u(W,"EM",{});var Hu=m(an);Lo=o(Hu,"token"),Hu.forEach(t),Ao=f(W),on=u(W,"CODE",{});var Ru=m(on);Do=o(Ru,"[CLS]"),Ru.forEach(t),Mo=o(W,", car certains mod\xE8les l\u2019utilisent pour indiquer que la r\xE9ponse n\u2019est pas dans le contexte."),W.forEach(t),qr=f(e),Ke=u(e,"P",{});var Sa=m(Ke);Fo=o(Sa,"Puisque nous appliquerons une fonction softmax par la suite, il nous suffit de remplacer les logits que nous voulons masquer par un grand nombre n\xE9gatif. Ici, nous utilisons "),ln=u(Sa,"CODE",{});var Vu=m(ln);Io=o(Vu,"-10000"),Vu.forEach(t),Oo=o(Sa," :"),Sa.forEach(t),kr=f(e),le.l(e),it=f(e),lt=u(e,"P",{});var Yu=m(lt);Uo=o(Yu,"Maintenant que nous avons correctement masqu\xE9 les logits correspondant aux positions que nous ne voulons pas pr\xE9dire, nous pouvons appliquer la softmax :"),Yu.forEach(t),wr=f(e),pe.l(e),ut=f(e),G=u(e,"P",{});var Se=m(G);Go=o(Se,"A ce stade, nous pourrions prendre l\u2019argmax des probabilit\xE9s de d\xE9but et de fin mais nous pourrions nous retrouver avec un indice de d\xE9but sup\xE9rieur \xE0 l\u2019indice de fin, nous devons donc prendre quelques pr\xE9cautions suppl\xE9mentaires. Nous allons calculer les probabilit\xE9s de chaque "),un=u(Se,"CODE",{});var Bu=m(un);Jo=o(Bu,"start_index"),Bu.forEach(t),Qo=o(Se," et "),pn=u(Se,"CODE",{});var Xu=m(pn);Ko=o(Xu,"end_index"),Xu.forEach(t),Wo=o(Se," possible o\xF9 "),mn=u(Se,"CODE",{});var Zu=m(mn);Ho=o(Zu,"start_index<=end_index"),Zu.forEach(t),Ro=o(Se,", puis nous prendrons le tuple "),cn=u(Se,"CODE",{});var ep=m(cn);Vo=o(ep,"(start_index, end_index)"),ep.forEach(t),Yo=o(Se," avec la plus grande probabilit\xE9."),Se.forEach(t),jr=f(e),O=u(e,"P",{});var ke=m(O);Bo=o(ke,"En supposant que les \xE9v\xE9nements \xAB La r\xE9ponse commence \xE0 "),dn=u(ke,"CODE",{});var sp=m(dn);Xo=o(sp,"start_index"),sp.forEach(t),Zo=o(ke," \xBB et \xAB La r\xE9ponse se termine \xE0 "),fn=u(ke,"CODE",{});var tp=m(fn);ei=o(tp,"end_index"),tp.forEach(t),si=o(ke," \xBB sont ind\xE9pendants, la probabilit\xE9 que la r\xE9ponse commence \xE0 "),hn=u(ke,"CODE",{});var np=m(hn);ti=o(np,"end_index"),np.forEach(t),ni=o(ke," et se termine \xE0 "),_n=u(ke,"CODE",{});var rp=m(_n);ri=o(rp,"end_index"),rp.forEach(t),ai=o(ke,` est :
`),Er=am(ke),ke.forEach(t),yr=f(e),je=u(e,"P",{});var Dt=m(je);oi=o(Dt,"Ainsi, pour calculer tous les scores, il suffit de calculer tous les produits "),Pr=am(Dt),zr=o(Dt," o\xF9 "),bn=u(Dt,"CODE",{});var ap=m(bn);ii=o(ap,"start_index <= end_index"),ap.forEach(t),li=o(Dt,"."),Dt.forEach(t),Tr=f(e),pt=u(e,"P",{});var op=m(pt);ui=o(op,"Calculons d\u2019abord tous les produits possibles :"),op.forEach(t),Cr=f(e),x(_s.$$.fragment,e),Nr=f(e),ce.l(e),mt=f(e),J=u(e,"P",{});var Le=m(J);pi=o(Le,"Il ne nous reste plus qu\u2019\xE0 obtenir l\u2019indice du maximum. Puisque PyTorch retournera l\u2019index dans le tenseur aplati, nous devons utiliser les op\xE9rations division plancher "),vn=u(Le,"CODE",{});var ip=m(vn);mi=o(ip,"//"),ip.forEach(t),ci=o(Le," et modulus "),gn=u(Le,"CODE",{});var lp=m(gn);di=o(lp,"%"),lp.forEach(t),fi=o(Le," pour obtenir le "),xn=u(Le,"CODE",{});var up=m(xn);hi=o(up,"start_index"),up.forEach(t),_i=o(Le," et le "),$n=u(Le,"CODE",{});var pp=m($n);bi=o(pp,"end_index"),pp.forEach(t),vi=o(Le," :"),Le.forEach(t),Sr=f(e),x(bs.$$.fragment,e),Lr=f(e),ct=u(e,"P",{});var mp=m(ct);gi=o(mp,"Nous n\u2019avons pas encore tout \xE0 fait termin\xE9, mais au moins nous avons d\xE9j\xE0 le score correct pour la r\xE9ponse (vous pouvez le v\xE9rifier en le comparant au premier r\xE9sultat de la section pr\xE9c\xE9dente) :"),mp.forEach(t),Ar=f(e),x(vs.$$.fragment,e),Dr=f(e),x(We.$$.fragment,e),Mr=f(e),I=u(e,"P",{});var B=m(I);xi=o(B,"Nous avons les "),qn=u(B,"CODE",{});var cp=m(qn);$i=o(cp,"start_index"),cp.forEach(t),qi=o(B," et "),kn=u(B,"CODE",{});var dp=m(kn);ki=o(dp,"end_index"),dp.forEach(t),wi=o(B," de la r\xE9ponse en termes de "),wn=u(B,"EM",{});var fp=m(wn);ji=o(fp,"tokens"),fp.forEach(t),Ei=o(B,", donc maintenant nous devons juste convertir en indices de caract\xE8res dans le contexte. C\u2019est l\xE0 que les "),jn=u(B,"EM",{});var hp=m(jn);yi=o(hp,"offsets"),hp.forEach(t),Pi=o(B," seront super utiles. Nous pouvons les saisir et les utiliser comme nous l\u2019avons fait dans la t\xE2che de classification des "),En=u(B,"EM",{});var _p=m(En);zi=o(_p,"tokens"),_p.forEach(t),Ti=o(B," :"),B.forEach(t),Fr=f(e),x(gs.$$.fragment,e),Ir=f(e),dt=u(e,"P",{});var bp=m(dt);Ci=o(bp,"Il ne nous reste plus qu\u2019\xE0 tout formater pour obtenir notre r\xE9sultat :"),bp.forEach(t),Or=f(e),x(xs.$$.fragment,e),Ur=f(e),x($s.$$.fragment,e),Gr=f(e),ft=u(e,"P",{});var vp=m(ft);Ni=o(vp,"Super ! C\u2019est la m\xEAme chose que dans notre premier exemple !"),vp.forEach(t),Jr=f(e),x(He.$$.fragment,e),Qr=f(e),Ge=u(e,"H2",{class:!0});var La=m(Ge);Re=u(La,"A",{id:!0,class:!0,href:!0});var gp=m(Re);yn=u(gp,"SPAN",{});var xp=m(yn);x(qs.$$.fragment,xp),xp.forEach(t),gp.forEach(t),Si=f(La),Pn=u(La,"SPAN",{});var $p=m(Pn);Li=o($p,"Gestion des contextes longs"),$p.forEach(t),La.forEach(t),Kr=f(e),Ee=u(e,"P",{});var Mt=m(Ee);Ai=o(Mt,"Si nous essayons de tokeniser la question et le long contexte que nous avons utilis\xE9 comme exemple pr\xE9c\xE9demment, nous obtiendrons un nombre de "),zn=u(Mt,"EM",{});var qp=m(zn);Di=o(qp,"tokens"),qp.forEach(t),Mi=o(Mt," sup\xE9rieur \xE0 la longueur maximale utilis\xE9e dans le pipeline "),Tn=u(Mt,"CODE",{});var kp=m(Tn);Fi=o(kp,"question-answering"),kp.forEach(t),Ii=o(Mt," (qui est de 384) :"),Mt.forEach(t),Wr=f(e),x(ks.$$.fragment,e),Hr=f(e),x(ws.$$.fragment,e),Rr=f(e),Ve=u(e,"P",{});var Aa=m(Ve);Oi=o(Aa,"Nous devrons donc tronquer nos entr\xE9es \xE0 cette longueur maximale. Il y a plusieurs fa\xE7ons de le faire, mais nous ne voulons pas tronquer la question, seulement le contexte. Puisque le contexte est la deuxi\xE8me phrase, nous utiliserons la strat\xE9gie de troncature "),Cn=u(Aa,"CODE",{});var wp=m(Cn);Ui=o(wp,'"only_second"'),wp.forEach(t),Gi=o(Aa,". Le probl\xE8me qui se pose alors est que la r\xE9ponse \xE0 la question peut ne pas se trouver dans le contexte tronqu\xE9. Ici, par exemple, nous avons choisi une question dont la r\xE9ponse se trouve vers la fin du contexte, et lorsque nous la tronquons, cette r\xE9ponse n\u2019est pas pr\xE9sente :"),Aa.forEach(t),Vr=f(e),x(js.$$.fragment,e),Yr=f(e),x(Es.$$.fragment,e),Br=f(e),Ye=u(e,"P",{});var Da=m(Ye);Ji=o(Da,"Cela signifie que le mod\xE8le aura du mal \xE0 trouver la bonne r\xE9ponse. Pour r\xE9soudre ce probl\xE8me, le pipeline de "),Nn=u(Da,"CODE",{});var jp=m(Nn);Qi=o(jp,"question-answering"),jp.forEach(t),Ki=o(Da," nous permet de diviser le contexte en morceaux plus petits, en sp\xE9cifiant la longueur maximale. Pour s\u2019assurer que nous ne divisons pas le contexte exactement au mauvais endroit pour permettre de trouver la r\xE9ponse, il inclut \xE9galement un certain chevauchement entre les morceaux."),Da.forEach(t),Xr=f(e),H=u(e,"P",{});var ts=m(H);Wi=o(ts,"Nous pouvons demander au "),Sn=u(ts,"EM",{});var Ep=m(Sn);Hi=o(Ep,"tokenizer"),Ep.forEach(t),Ri=o(ts," (rapide ou lent) de le faire pour nous en ajoutant "),Ln=u(ts,"CODE",{});var yp=m(Ln);Vi=o(yp,"return_overflowing_tokens=True"),yp.forEach(t),Yi=o(ts,", et nous pouvons sp\xE9cifier le chevauchement que nous voulons avec l\u2019argument "),An=u(ts,"CODE",{});var Pp=m(An);Bi=o(Pp,"stride"),Pp.forEach(t),Xi=o(ts,". Voici un exemple, en utilisant une phrase plus petite :"),ts.forEach(t),Zr=f(e),x(ys.$$.fragment,e),ea=f(e),x(Ps.$$.fragment,e),sa=f(e),Q=u(e,"P",{});var Ae=m(Q);Zi=o(Ae,"Comme on peut le voir, la phrase a \xE9t\xE9 d\xE9coup\xE9e en morceaux de telle sorte que chaque entr\xE9e dans "),Dn=u(Ae,"CODE",{});var zp=m(Dn);el=o(zp,'inputs["input_ids"]'),zp.forEach(t),sl=o(Ae," a au maximum 6 "),Mn=u(Ae,"EM",{});var Tp=m(Mn);tl=o(Tp,"tokens"),Tp.forEach(t),nl=o(Ae," (il faudrait ajouter du "),Fn=u(Ae,"EM",{});var Cp=m(Fn);rl=o(Cp,"padding"),Cp.forEach(t),al=o(Ae," pour que la derni\xE8re entr\xE9e ait la m\xEAme taille que les autres) et il y a un chevauchement de 2 "),In=u(Ae,"EM",{});var Np=m(In);ol=o(Np,"tokens"),Np.forEach(t),il=o(Ae," entre chacune des entr\xE9es."),Ae.forEach(t),ta=f(e),ht=u(e,"P",{});var Sp=m(ht);ll=o(Sp,"Regardons de plus pr\xE8s le r\xE9sultat de la tok\xE9nisation :"),Sp.forEach(t),na=f(e),x(zs.$$.fragment,e),ra=f(e),x(Ts.$$.fragment,e),aa=f(e),ye=u(e,"P",{});var Ft=m(ye);ul=o(Ft,"Comme pr\xE9vu, nous obtenons les ID d\u2019entr\xE9e et un masque d\u2019attention. La derni\xE8re cl\xE9, "),On=u(Ft,"CODE",{});var Lp=m(On);pl=o(Lp,"overflow_to_sample_mapping"),Lp.forEach(t),ml=o(Ft,", est une carte qui nous indique \xE0 quelle phrase correspond chacun des r\xE9sultats \u2014 ici nous avons 7 r\xE9sultats qui proviennent tous de la (seule) phrase que nous avons pass\xE9e au "),Un=u(Ft,"EM",{});var Ap=m(Un);cl=o(Ap,"tokenizer"),Ap.forEach(t),dl=o(Ft," :"),Ft.forEach(t),oa=f(e),x(Cs.$$.fragment,e),ia=f(e),x(Ns.$$.fragment,e),la=f(e),_t=u(e,"P",{});var Dp=m(_t);fl=o(Dp,"C\u2019est plus utile lorsque nous tokenisons plusieurs phrases ensemble. Par exemple, ceci :"),Dp.forEach(t),ua=f(e),x(Ss.$$.fragment,e),pa=f(e),bt=u(e,"P",{});var Mp=m(bt);hl=o(Mp,"nous donne :"),Mp.forEach(t),ma=f(e),x(Ls.$$.fragment,e),ca=f(e),vt=u(e,"P",{});var Fp=m(vt);_l=o(Fp,"ce qui signifie que la premi\xE8re phrase est divis\xE9e en 7 morceaux comme pr\xE9c\xE9demment, et que les 4 morceaux suivants proviennent de la deuxi\xE8me phrase."),Fp.forEach(t),da=f(e),K=u(e,"P",{});var De=m(K);bl=o(De,"Revenons maintenant \xE0 notre contexte long. Par d\xE9faut, le pipeline "),Gn=u(De,"CODE",{});var Ip=m(Gn);vl=o(Ip,"question-answering"),Ip.forEach(t),gl=o(De," utilise une longueur maximale de 384, comme nous l\u2019avons mentionn\xE9 plus t\xF4t, et un stride de 128, qui correspondent \xE0 la fa\xE7on dont le mod\xE8le a \xE9t\xE9 ajust\xE9 (vous pouvez ajuster ces param\xE8tres en passant les arguments "),Jn=u(De,"CODE",{});var Op=m(Jn);xl=o(Op,"max_seq_len"),Op.forEach(t),$l=o(De," et "),Qn=u(De,"CODE",{});var Up=m(Qn);ql=o(Up,"stride"),Up.forEach(t),kl=o(De," lorsque vous appelez le pipeline). Nous utiliserons donc ces param\xE8tres lors de la tokenisation. Nous ajouterons aussi du "),Kn=u(De,"EM",{});var Gp=m(Kn);wl=o(Gp,"padding"),Gp.forEach(t),jl=o(De," (pour avoir des \xE9chantillons de m\xEAme longueur, afin de pouvoir construire des tenseurs) ainsi que demander les offsets :"),De.forEach(t),fa=f(e),x(As.$$.fragment,e),ha=f(e),R=u(e,"P",{});var ns=m(R);El=o(ns,"Ces "),Wn=u(ns,"CODE",{});var Jp=m(Wn);yl=o(Jp,"inputs"),Jp.forEach(t),Pl=o(ns," contiendront les ID d\u2019entr\xE9e et les masques d\u2019attention que le mod\xE8le attend, ainsi que les offsets et le "),Hn=u(ns,"CODE",{});var Qp=m(Hn);zl=o(Qp,"overflow_to_sample_mapping"),Qp.forEach(t),Tl=o(ns," dont on vient de parler. Puisque ces deux \xE9l\xE9ments ne sont pas des param\xE8tres utilis\xE9s par le mod\xE8le, nous allons les sortir des "),Rn=u(ns,"CODE",{});var Kp=m(Rn);Cl=o(Kp,"inputs"),Kp.forEach(t),Nl=o(ns," (et nous ne stockerons pas la carte, puisqu\u2019elle n\u2019est pas utile ici) avant de le convertir en tenseur :"),ns.forEach(t),_a=f(e),fe.l(e),gt=f(e),xt=u(e,"P",{});var Wp=m(xt);Sl=o(Wp,"Notre contexte long a \xE9t\xE9 divis\xE9 en deux, ce qui signifie qu\u2019apr\xE8s avoir travers\xE9 notre mod\xE8le, nous aurons deux ensembles de logits de d\xE9but et de fin :"),Wp.forEach(t),ba=f(e),x(Ds.$$.fragment,e),va=f(e),_e.l(e),$t=f(e),V=u(e,"P",{});var rs=m(V);Ll=o(rs,"Comme pr\xE9c\xE9demment, nous masquons d\u2019abord les "),Vn=u(rs,"EM",{});var Hp=m(Vn);Al=o(Hp,"tokens"),Hp.forEach(t),Dl=o(rs," qui ne font pas partie du contexte avant de prendre le softmax. Nous masquons \xE9galement tous les "),Yn=u(rs,"EM",{});var Rp=m(Yn);Ml=o(Rp,"tokens"),Rp.forEach(t),Fl=o(rs," de "),Bn=u(rs,"EM",{});var Vp=m(Bn);Il=o(Vp,"padding"),Vp.forEach(t),Ol=o(rs," (tels que signal\xE9s par le masque d\u2019attention) :"),rs.forEach(t),ga=f(e),ve.l(e),qt=f(e),kt=u(e,"P",{});var Yp=m(kt);Ul=o(Yp,"Ensuite, nous pouvons utiliser lafonction softmax pour convertir nos logits en probabilit\xE9s :"),Yp.forEach(t),xa=f(e),xe.l(e),wt=f(e),jt=u(e,"P",{});var Bp=m(jt);Gl=o(Bp,"L\u2019\xE9tape suivante est similaire \xE0 ce que nous avons fait pour le petit contexte, mais nous la r\xE9p\xE9tons pour chacun de nos deux chunks. Nous attribuons un score \xE0 tous les espaces de r\xE9ponse possibles, puis nous prenons l\u2019espace ayant le meilleur score :"),Bp.forEach(t),$a=f(e),qe.l(e),Et=f(e),x(Ms.$$.fragment,e),qa=f(e),Be=u(e,"P",{});var Ma=m(Be);Jl=o(Ma,"Ces deux candidats correspondent aux meilleures r\xE9ponses que le mod\xE8le a pu trouver dans chaque morceau. Le mod\xE8le est beaucoup plus confiant que la bonne r\xE9ponse se trouve dans la deuxi\xE8me partie (ce qui est bon signe !). Il ne nous reste plus qu\u2019\xE0 faire correspondre ces deux espaces de "),Xn=u(Ma,"EM",{});var Xp=m(Xn);Ql=o(Xp,"tokens"),Xp.forEach(t),Kl=o(Ma," \xE0 des espaces de caract\xE8res dans le contexte (nous n\u2019avons besoin de faire correspondre que le second pour avoir notre r\xE9ponse, mais il est int\xE9ressant de voir ce que le mod\xE8le a choisi dans le premier morceau)."),Ma.forEach(t),ka=f(e),x(Xe.$$.fragment,e),wa=f(e),Pe=u(e,"P",{});var It=m(Pe);Wl=o(It,"Le "),Zn=u(It,"CODE",{});var Zp=m(Zn);Hl=o(Zp,"offsets"),Zp.forEach(t),Rl=o(It," que nous avons saisi plus t\xF4t est en fait une liste d\u2019"),er=u(It,"EM",{});var em=m(er);Vl=o(em,"offsets"),em.forEach(t),Yl=o(It,", avec une liste par morceau de texte :"),It.forEach(t),ja=f(e),x(Fs.$$.fragment,e),Ea=f(e),x(Is.$$.fragment,e),ya=f(e),yt=u(e,"P",{});var sm=m(yt);Bl=o(sm,"Si nous ignorons le premier r\xE9sultat, nous obtenons le m\xEAme r\xE9sultat que notre pipeline pour ce long contexte. Yay !"),sm.forEach(t),Pa=f(e),x(Ze.$$.fragment,e),za=f(e),ze=u(e,"P",{});var Ot=m(ze);Xl=o(Ot,"Ceci conclut notre plong\xE9e en profondeur dans les capacit\xE9s du "),sr=u(Ot,"EM",{});var tm=m(sr);Zl=o(tm,"tokenizer"),tm.forEach(t),eu=o(Ot,". Nous mettrons \xE0 nouveau tout cela en pratique dans le prochain chapitre, lorsque nous vous montrerons comment "),tr=u(Ot,"EM",{});var nm=m(tr);su=o(nm,"finetuner"),nm.forEach(t),tu=o(Ot," un mod\xE8le sur une s\xE9rie de t\xE2ches NLP courantes."),Ot.forEach(t),this.h()},h(){C(r,"name","hf:doc:metadata"),C(r,"content",JSON.stringify(Wm)),C(w,"id","tokenizer-rapide-dans-le-pipeline-de-qa"),C(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),C(w,"href","#tokenizer-rapide-dans-le-pipeline-de-qa"),C(v,"class","relative group"),C(Je,"id","utilisation-du-pipeline-de-questionanswering"),C(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),C(Je,"href","#utilisation-du-pipeline-de-questionanswering"),C(Ie,"class","relative group"),C(et,"href","/course/fr/chapter1"),C(Qe,"id","utilisation-dun-modle-pour-rpondre-des-questions"),C(Qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),C(Qe,"href","#utilisation-dun-modle-pour-rpondre-des-questions"),C(Oe,"class","relative group"),C(cs,"href","https://huggingface.co/distilbert-base-cased-distilled-squad"),C(cs,"rel","nofollow"),C(nt,"href","/course/fr/chapter7/7"),C(ds,"class","block dark:hidden"),om(ds.src,nu="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter6/question_tokens.svg")||C(ds,"src",nu),C(ds,"alt","An example of tokenization of question and context"),C(fs,"class","hidden dark:block"),om(fs.src,ru="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter6/question_tokens-dark.svg")||C(fs,"src",ru),C(fs,"alt","An example of tokenization of question and context"),C(Ue,"class","flex justify-center"),Er.a=null,Pr.a=zr,C(Re,"id","gestion-des-contextes-longs"),C(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),C(Re,"href","#gestion-des-contextes-longs"),C(Ge,"class","relative group")},m(e,i){s(document.head,r),p(e,c,i),$(n,e,i),p(e,b,i),p(e,v,i),s(v,w),s(w,P),$(T,P,null),s(v,N),s(v,z),s(z,M),p(e,A,i),Os[S].m(e,i),p(e,E,i),p(e,y,i),s(y,Me),s(y,ee),s(ee,Fe),s(y,Oa),s(y,Ut),s(Ut,Ua),s(y,Ga),p(e,ir,i),Us[se].m(e,i),p(e,Zs,i),p(e,Ie,i),s(Ie,Je),s(Je,Gt),$(as,Gt,null),s(Ie,Ja),s(Ie,os),s(os,Qa),s(os,Jt),s(Jt,Ka),s(os,Wa),p(e,lr,i),p(e,we,i),s(we,Ha),s(we,et),s(et,Ra),s(we,Va),s(we,Qt),s(Qt,Ya),s(we,Ba),p(e,ur,i),$(is,e,i),p(e,pr,i),$(ls,e,i),p(e,mr,i),p(e,st,i),s(st,Xa),p(e,cr,i),$(us,e,i),p(e,dr,i),$(ps,e,i),p(e,fr,i),p(e,tt,i),s(tt,Za),p(e,hr,i),p(e,Oe,i),s(Oe,Qe),s(Qe,Kt),$(ms,Kt,null),s(Oe,eo),s(Oe,Wt),s(Wt,so),p(e,_r,i),p(e,U,i),s(U,to),s(U,Ht),s(Ht,no),s(U,ro),s(U,cs),s(cs,Rt),s(Rt,ao),s(U,oo),s(U,Vt),s(Vt,io),s(U,lo),s(U,nt),s(nt,uo),s(U,po),p(e,br,i),Gs[ne].m(e,i),p(e,rt,i),p(e,at,i),s(at,mo),p(e,vr,i),p(e,Ue,i),s(Ue,ds),s(Ue,co),s(Ue,fs),p(e,gr,i),p(e,F,i),s(F,fo),s(F,Yt),s(Yt,ho),s(F,_o),s(F,Bt),s(Bt,bo),s(F,vo),s(F,Xt),s(Xt,go),s(F,xo),s(F,Zt),s(Zt,$o),s(F,qo),s(F,en),s(en,ko),s(F,wo),p(e,xr,i),$(hs,e,i),p(e,$r,i),Js[ae].m(e,i),p(e,ot,i),p(e,D,i),s(D,jo),s(D,sn),s(sn,Eo),s(D,yo),s(D,tn),s(tn,Po),s(D,zo),s(D,nn),s(nn,To),s(D,Co),s(D,rn),s(rn,No),s(D,So),s(D,an),s(an,Lo),s(D,Ao),s(D,on),s(on,Do),s(D,Mo),p(e,qr,i),p(e,Ke,i),s(Ke,Fo),s(Ke,ln),s(ln,Io),s(Ke,Oo),p(e,kr,i),Qs[ie].m(e,i),p(e,it,i),p(e,lt,i),s(lt,Uo),p(e,wr,i),Ks[ue].m(e,i),p(e,ut,i),p(e,G,i),s(G,Go),s(G,un),s(un,Jo),s(G,Qo),s(G,pn),s(pn,Ko),s(G,Wo),s(G,mn),s(mn,Ho),s(G,Ro),s(G,cn),s(cn,Vo),s(G,Yo),p(e,jr,i),p(e,O,i),s(O,Bo),s(O,dn),s(dn,Xo),s(O,Zo),s(O,fn),s(fn,ei),s(O,si),s(O,hn),s(hn,ti),s(O,ni),s(O,_n),s(_n,ri),s(O,ai),Er.m(um,O),p(e,yr,i),p(e,je,i),s(je,oi),Pr.m(pm,je),s(je,zr),s(je,bn),s(bn,ii),s(je,li),p(e,Tr,i),p(e,pt,i),s(pt,ui),p(e,Cr,i),$(_s,e,i),p(e,Nr,i),Ws[me].m(e,i),p(e,mt,i),p(e,J,i),s(J,pi),s(J,vn),s(vn,mi),s(J,ci),s(J,gn),s(gn,di),s(J,fi),s(J,xn),s(xn,hi),s(J,_i),s(J,$n),s($n,bi),s(J,vi),p(e,Sr,i),$(bs,e,i),p(e,Lr,i),p(e,ct,i),s(ct,gi),p(e,Ar,i),$(vs,e,i),p(e,Dr,i),$(We,e,i),p(e,Mr,i),p(e,I,i),s(I,xi),s(I,qn),s(qn,$i),s(I,qi),s(I,kn),s(kn,ki),s(I,wi),s(I,wn),s(wn,ji),s(I,Ei),s(I,jn),s(jn,yi),s(I,Pi),s(I,En),s(En,zi),s(I,Ti),p(e,Fr,i),$(gs,e,i),p(e,Ir,i),p(e,dt,i),s(dt,Ci),p(e,Or,i),$(xs,e,i),p(e,Ur,i),$($s,e,i),p(e,Gr,i),p(e,ft,i),s(ft,Ni),p(e,Jr,i),$(He,e,i),p(e,Qr,i),p(e,Ge,i),s(Ge,Re),s(Re,yn),$(qs,yn,null),s(Ge,Si),s(Ge,Pn),s(Pn,Li),p(e,Kr,i),p(e,Ee,i),s(Ee,Ai),s(Ee,zn),s(zn,Di),s(Ee,Mi),s(Ee,Tn),s(Tn,Fi),s(Ee,Ii),p(e,Wr,i),$(ks,e,i),p(e,Hr,i),$(ws,e,i),p(e,Rr,i),p(e,Ve,i),s(Ve,Oi),s(Ve,Cn),s(Cn,Ui),s(Ve,Gi),p(e,Vr,i),$(js,e,i),p(e,Yr,i),$(Es,e,i),p(e,Br,i),p(e,Ye,i),s(Ye,Ji),s(Ye,Nn),s(Nn,Qi),s(Ye,Ki),p(e,Xr,i),p(e,H,i),s(H,Wi),s(H,Sn),s(Sn,Hi),s(H,Ri),s(H,Ln),s(Ln,Vi),s(H,Yi),s(H,An),s(An,Bi),s(H,Xi),p(e,Zr,i),$(ys,e,i),p(e,ea,i),$(Ps,e,i),p(e,sa,i),p(e,Q,i),s(Q,Zi),s(Q,Dn),s(Dn,el),s(Q,sl),s(Q,Mn),s(Mn,tl),s(Q,nl),s(Q,Fn),s(Fn,rl),s(Q,al),s(Q,In),s(In,ol),s(Q,il),p(e,ta,i),p(e,ht,i),s(ht,ll),p(e,na,i),$(zs,e,i),p(e,ra,i),$(Ts,e,i),p(e,aa,i),p(e,ye,i),s(ye,ul),s(ye,On),s(On,pl),s(ye,ml),s(ye,Un),s(Un,cl),s(ye,dl),p(e,oa,i),$(Cs,e,i),p(e,ia,i),$(Ns,e,i),p(e,la,i),p(e,_t,i),s(_t,fl),p(e,ua,i),$(Ss,e,i),p(e,pa,i),p(e,bt,i),s(bt,hl),p(e,ma,i),$(Ls,e,i),p(e,ca,i),p(e,vt,i),s(vt,_l),p(e,da,i),p(e,K,i),s(K,bl),s(K,Gn),s(Gn,vl),s(K,gl),s(K,Jn),s(Jn,xl),s(K,$l),s(K,Qn),s(Qn,ql),s(K,kl),s(K,Kn),s(Kn,wl),s(K,jl),p(e,fa,i),$(As,e,i),p(e,ha,i),p(e,R,i),s(R,El),s(R,Wn),s(Wn,yl),s(R,Pl),s(R,Hn),s(Hn,zl),s(R,Tl),s(R,Rn),s(Rn,Cl),s(R,Nl),p(e,_a,i),Hs[de].m(e,i),p(e,gt,i),p(e,xt,i),s(xt,Sl),p(e,ba,i),$(Ds,e,i),p(e,va,i),Rs[he].m(e,i),p(e,$t,i),p(e,V,i),s(V,Ll),s(V,Vn),s(Vn,Al),s(V,Dl),s(V,Yn),s(Yn,Ml),s(V,Fl),s(V,Bn),s(Bn,Il),s(V,Ol),p(e,ga,i),Vs[be].m(e,i),p(e,qt,i),p(e,kt,i),s(kt,Ul),p(e,xa,i),Ys[ge].m(e,i),p(e,wt,i),p(e,jt,i),s(jt,Gl),p(e,$a,i),Bs[$e].m(e,i),p(e,Et,i),$(Ms,e,i),p(e,qa,i),p(e,Be,i),s(Be,Jl),s(Be,Xn),s(Xn,Ql),s(Be,Kl),p(e,ka,i),$(Xe,e,i),p(e,wa,i),p(e,Pe,i),s(Pe,Wl),s(Pe,Zn),s(Zn,Hl),s(Pe,Rl),s(Pe,er),s(er,Vl),s(Pe,Yl),p(e,ja,i),$(Fs,e,i),p(e,Ea,i),$(Is,e,i),p(e,ya,i),p(e,yt,i),s(yt,Bl),p(e,Pa,i),$(Ze,e,i),p(e,za,i),p(e,ze,i),s(ze,Xl),s(ze,sr),s(sr,Zl),s(ze,eu),s(ze,tr),s(tr,su),s(ze,tu),Ta=!0},p(e,[i]){const Xs={};i&1&&(Xs.fw=e[0]),n.$set(Xs);let Pt=S;S=ou(e),S!==Pt&&(Z(),h(Os[Pt],1,1,()=>{Os[Pt]=null}),X(),L=Os[S],L||(L=Os[S]=au[S](e),L.c()),_(L,1),L.m(E.parentNode,E));let zt=se;se=lu(e),se!==zt&&(Z(),h(Us[zt],1,1,()=>{Us[zt]=null}),X(),te=Us[se],te||(te=Us[se]=iu[se](e),te.c()),_(te,1),te.m(Zs.parentNode,Zs));let Tt=ne;ne=pu(e),ne!==Tt&&(Z(),h(Gs[Tt],1,1,()=>{Gs[Tt]=null}),X(),re=Gs[ne],re||(re=Gs[ne]=uu[ne](e),re.c()),_(re,1),re.m(rt.parentNode,rt));let Te=ae;ae=cu(e),ae!==Te&&(Z(),h(Js[Te],1,1,()=>{Js[Te]=null}),X(),oe=Js[ae],oe||(oe=Js[ae]=mu[ae](e),oe.c()),_(oe,1),oe.m(ot.parentNode,ot));let Ct=ie;ie=fu(e),ie!==Ct&&(Z(),h(Qs[Ct],1,1,()=>{Qs[Ct]=null}),X(),le=Qs[ie],le||(le=Qs[ie]=du[ie](e),le.c()),_(le,1),le.m(it.parentNode,it));let Nt=ue;ue=_u(e),ue!==Nt&&(Z(),h(Ks[Nt],1,1,()=>{Ks[Nt]=null}),X(),pe=Ks[ue],pe||(pe=Ks[ue]=hu[ue](e),pe.c()),_(pe,1),pe.m(ut.parentNode,ut));let es=me;me=vu(e),me!==es&&(Z(),h(Ws[es],1,1,()=>{Ws[es]=null}),X(),ce=Ws[me],ce||(ce=Ws[me]=bu[me](e),ce.c()),_(ce,1),ce.m(mt.parentNode,mt));const nr={};i&2&&(nr.$$scope={dirty:i,ctx:e}),We.$set(nr);const rr={};i&2&&(rr.$$scope={dirty:i,ctx:e}),He.$set(rr);let ss=de;de=xu(e),de!==ss&&(Z(),h(Hs[ss],1,1,()=>{Hs[ss]=null}),X(),fe=Hs[de],fe||(fe=Hs[de]=gu[de](e),fe.c()),_(fe,1),fe.m(gt.parentNode,gt));let St=he;he=qu(e),he!==St&&(Z(),h(Rs[St],1,1,()=>{Rs[St]=null}),X(),_e=Rs[he],_e||(_e=Rs[he]=$u[he](e),_e.c()),_(_e,1),_e.m($t.parentNode,$t));let Ce=be;be=wu(e),be!==Ce&&(Z(),h(Vs[Ce],1,1,()=>{Vs[Ce]=null}),X(),ve=Vs[be],ve||(ve=Vs[be]=ku[be](e),ve.c()),_(ve,1),ve.m(qt.parentNode,qt));let Lt=ge;ge=Eu(e),ge!==Lt&&(Z(),h(Ys[Lt],1,1,()=>{Ys[Lt]=null}),X(),xe=Ys[ge],xe||(xe=Ys[ge]=ju[ge](e),xe.c()),_(xe,1),xe.m(wt.parentNode,wt));let At=$e;$e=Pu(e),$e!==At&&(Z(),h(Bs[At],1,1,()=>{Bs[At]=null}),X(),qe=Bs[$e],qe||(qe=Bs[$e]=yu[$e](e),qe.c()),_(qe,1),qe.m(Et.parentNode,Et));const ar={};i&2&&(ar.$$scope={dirty:i,ctx:e}),Xe.$set(ar);const or={};i&2&&(or.$$scope={dirty:i,ctx:e}),Ze.$set(or)},i(e){Ta||(_(n.$$.fragment,e),_(T.$$.fragment,e),_(L),_(te),_(as.$$.fragment,e),_(is.$$.fragment,e),_(ls.$$.fragment,e),_(us.$$.fragment,e),_(ps.$$.fragment,e),_(ms.$$.fragment,e),_(re),_(hs.$$.fragment,e),_(oe),_(le),_(pe),_(_s.$$.fragment,e),_(ce),_(bs.$$.fragment,e),_(vs.$$.fragment,e),_(We.$$.fragment,e),_(gs.$$.fragment,e),_(xs.$$.fragment,e),_($s.$$.fragment,e),_(He.$$.fragment,e),_(qs.$$.fragment,e),_(ks.$$.fragment,e),_(ws.$$.fragment,e),_(js.$$.fragment,e),_(Es.$$.fragment,e),_(ys.$$.fragment,e),_(Ps.$$.fragment,e),_(zs.$$.fragment,e),_(Ts.$$.fragment,e),_(Cs.$$.fragment,e),_(Ns.$$.fragment,e),_(Ss.$$.fragment,e),_(Ls.$$.fragment,e),_(As.$$.fragment,e),_(fe),_(Ds.$$.fragment,e),_(_e),_(ve),_(xe),_(qe),_(Ms.$$.fragment,e),_(Xe.$$.fragment,e),_(Fs.$$.fragment,e),_(Is.$$.fragment,e),_(Ze.$$.fragment,e),Ta=!0)},o(e){h(n.$$.fragment,e),h(T.$$.fragment,e),h(L),h(te),h(as.$$.fragment,e),h(is.$$.fragment,e),h(ls.$$.fragment,e),h(us.$$.fragment,e),h(ps.$$.fragment,e),h(ms.$$.fragment,e),h(re),h(hs.$$.fragment,e),h(oe),h(le),h(pe),h(_s.$$.fragment,e),h(ce),h(bs.$$.fragment,e),h(vs.$$.fragment,e),h(We.$$.fragment,e),h(gs.$$.fragment,e),h(xs.$$.fragment,e),h($s.$$.fragment,e),h(He.$$.fragment,e),h(qs.$$.fragment,e),h(ks.$$.fragment,e),h(ws.$$.fragment,e),h(js.$$.fragment,e),h(Es.$$.fragment,e),h(ys.$$.fragment,e),h(Ps.$$.fragment,e),h(zs.$$.fragment,e),h(Ts.$$.fragment,e),h(Cs.$$.fragment,e),h(Ns.$$.fragment,e),h(Ss.$$.fragment,e),h(Ls.$$.fragment,e),h(As.$$.fragment,e),h(fe),h(Ds.$$.fragment,e),h(_e),h(ve),h(xe),h(qe),h(Ms.$$.fragment,e),h(Xe.$$.fragment,e),h(Fs.$$.fragment,e),h(Is.$$.fragment,e),h(Ze.$$.fragment,e),Ta=!1},d(e){t(r),e&&t(c),q(n,e),e&&t(b),e&&t(v),q(T),e&&t(A),Os[S].d(e),e&&t(E),e&&t(y),e&&t(ir),Us[se].d(e),e&&t(Zs),e&&t(Ie),q(as),e&&t(lr),e&&t(we),e&&t(ur),q(is,e),e&&t(pr),q(ls,e),e&&t(mr),e&&t(st),e&&t(cr),q(us,e),e&&t(dr),q(ps,e),e&&t(fr),e&&t(tt),e&&t(hr),e&&t(Oe),q(ms),e&&t(_r),e&&t(U),e&&t(br),Gs[ne].d(e),e&&t(rt),e&&t(at),e&&t(vr),e&&t(Ue),e&&t(gr),e&&t(F),e&&t(xr),q(hs,e),e&&t($r),Js[ae].d(e),e&&t(ot),e&&t(D),e&&t(qr),e&&t(Ke),e&&t(kr),Qs[ie].d(e),e&&t(it),e&&t(lt),e&&t(wr),Ks[ue].d(e),e&&t(ut),e&&t(G),e&&t(jr),e&&t(O),e&&t(yr),e&&t(je),e&&t(Tr),e&&t(pt),e&&t(Cr),q(_s,e),e&&t(Nr),Ws[me].d(e),e&&t(mt),e&&t(J),e&&t(Sr),q(bs,e),e&&t(Lr),e&&t(ct),e&&t(Ar),q(vs,e),e&&t(Dr),q(We,e),e&&t(Mr),e&&t(I),e&&t(Fr),q(gs,e),e&&t(Ir),e&&t(dt),e&&t(Or),q(xs,e),e&&t(Ur),q($s,e),e&&t(Gr),e&&t(ft),e&&t(Jr),q(He,e),e&&t(Qr),e&&t(Ge),q(qs),e&&t(Kr),e&&t(Ee),e&&t(Wr),q(ks,e),e&&t(Hr),q(ws,e),e&&t(Rr),e&&t(Ve),e&&t(Vr),q(js,e),e&&t(Yr),q(Es,e),e&&t(Br),e&&t(Ye),e&&t(Xr),e&&t(H),e&&t(Zr),q(ys,e),e&&t(ea),q(Ps,e),e&&t(sa),e&&t(Q),e&&t(ta),e&&t(ht),e&&t(na),q(zs,e),e&&t(ra),q(Ts,e),e&&t(aa),e&&t(ye),e&&t(oa),q(Cs,e),e&&t(ia),q(Ns,e),e&&t(la),e&&t(_t),e&&t(ua),q(Ss,e),e&&t(pa),e&&t(bt),e&&t(ma),q(Ls,e),e&&t(ca),e&&t(vt),e&&t(da),e&&t(K),e&&t(fa),q(As,e),e&&t(ha),e&&t(R),e&&t(_a),Hs[de].d(e),e&&t(gt),e&&t(xt),e&&t(ba),q(Ds,e),e&&t(va),Rs[he].d(e),e&&t($t),e&&t(V),e&&t(ga),Vs[be].d(e),e&&t(qt),e&&t(kt),e&&t(xa),Ys[ge].d(e),e&&t(wt),e&&t(jt),e&&t($a),Bs[$e].d(e),e&&t(Et),q(Ms,e),e&&t(qa),e&&t(Be),e&&t(ka),q(Xe,e),e&&t(wa),e&&t(Pe),e&&t(ja),q(Fs,e),e&&t(Ea),q(Is,e),e&&t(ya),e&&t(yt),e&&t(Pa),q(Ze,e),e&&t(za),e&&t(ze)}}}const Wm={local:"tokenizer-rapide-dans-le-pipeline-de-qa",sections:[{local:"utilisation-du-pipeline-de-questionanswering",sections:[{local:"utilisation-dun-modle-pour-rpondre-des-questions",title:"Utilisation d'un mod\xE8le pour r\xE9pondre \xE0 des questions"}],title:"Utilisation du pipeline de `question-answering`."},{local:"gestion-des-contextes-longs",title:"Gestion des contextes longs"}],title:"*Tokenizer* rapide dans le pipeline de QA"};function Hm(k,r,c){let n="pt";return hm(()=>{const b=new URLSearchParams(window.location.search);c(0,n=b.get("fw")||"pt")}),[n]}class sc extends mm{constructor(r){super();cm(this,r,Hm,Km,dm,{})}}export{sc as default,Wm as metadata};
