import{S as Mm,i as Fm,s as Om,e as l,k as d,w as g,t as a,U as Tm,M as Im,c as u,d as t,m as f,x,a as p,h as o,V as Nm,b as N,N as Cm,G as s,g as m,y as $,o as h,p as ne,q as _,B as q,v as Um,n as re}from"../../chunks/vendor-hf-doc-builder.js";import{T as Wa}from"../../chunks/Tip-hf-doc-builder.js";import{Y as Lm}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Qa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as j}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as Sm}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as Gm}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Jm(k){let r,c;return r=new Sm({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter6/section3b_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter6/section3b_tf.ipynb"}]}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Km(k){let r,c;return r=new Sm({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter6/section3b_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter6/section3b_pt.ipynb"}]}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Wm(k){let r,c;return r=new Lm({props:{id:"b3u8RzBCX9Y"}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Qm(k){let r,c;return r=new Lm({props:{id:"_wxyB3j3mk4"}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Hm(k){let r,c;return r=new j({props:{code:`from transformers import AutoTokenizer, TFAutoModelForQuestionAnswering

model_checkpoint = "distilbert-base-cased-distilled-squad"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)

inputs = tokenizer(question, context, return_tensors="tf")
outputs = model(**inputs)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFAutoModelForQuestionAnswering

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-cased-distilled-squad&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)

inputs = tokenizer(question, context, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
outputs = model(**inputs)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Rm(k){let r,c;return r=new j({props:{code:`from transformers import AutoTokenizer, AutoModelForQuestionAnswering

model_checkpoint = "distilbert-base-cased-distilled-squad"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)

inputs = tokenizer(question, context, return_tensors="pt")
outputs = model(**inputs)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForQuestionAnswering

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-cased-distilled-squad&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)

inputs = tokenizer(question, context, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
outputs = model(**inputs)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Vm(k){let r,c;return r=new j({props:{code:"(1, 66) (1, 66)",highlighted:'(<span class="hljs-number">1</span>, <span class="hljs-number">66</span>) (<span class="hljs-number">1</span>, <span class="hljs-number">66</span>)'}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Bm(k){let r,c;return r=new j({props:{code:"torch.Size([1, 66]) torch.Size([1, 66])",highlighted:'torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">66</span>]) torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">66</span>])'}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Ym(k){let r,c;return r=new j({props:{code:`import tensorflow as tf

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
end_logits = tf.where(mask, -<span class="hljs-number">10000</span>, end_logits)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Xm(k){let r,c;return r=new j({props:{code:`import torch

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
end_logits[mask] = -<span class="hljs-number">10000</span>`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function Zm(k){let r,c;return r=new j({props:{code:`start_probabilities = tf.math.softmax(start_logits, axis=-1)[0].numpy()
end_probabilities = tf.math.softmax(end_logits, axis=-1)[0].numpy()`,highlighted:`start_probabilities = tf.math.softmax(start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>].numpy()
end_probabilities = tf.math.softmax(end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>].numpy()`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function ec(k){let r,c;return r=new j({props:{code:`start_probabilities = torch.nn.functional.softmax(start_logits, dim=-1)[0]
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-1)[0]`,highlighted:`start_probabilities = torch.nn.functional.softmax(start_logits, dim=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function sc(k){let r,c,n,b,v,w,P,T,C,z,S,A,D,W;return D=new j({props:{code:"scores = np.triu(scores)",highlighted:"scores = np.triu(scores)"}}),{c(){r=l("p"),c=a("Ensuite, nous masquerons les valeurs o\xF9 "),n=l("code"),b=a("start_index > end_index"),v=a(" en les mettant \xE0 "),w=l("code"),P=a("0"),T=a(" (les autres probabilit\xE9s sont toutes des nombres positifs). La fonction "),C=l("code"),z=a("np.triu()"),S=a(" renvoie la partie triangulaire sup\xE9rieure du tenseur 2D pass\xE9 en argument, elle fera donc ce masquage pour nous :"),A=d(),g(D.$$.fragment)},l(E){r=u(E,"P",{});var y=p(r);c=o(y,"Ensuite, nous masquerons les valeurs o\xF9 "),n=u(y,"CODE",{});var B=p(n);b=o(B,"start_index > end_index"),B.forEach(t),v=o(y," en les mettant \xE0 "),w=u(y,"CODE",{});var F=p(w);P=o(F,"0"),F.forEach(t),T=o(y," (les autres probabilit\xE9s sont toutes des nombres positifs). La fonction "),C=u(y,"CODE",{});var Oe=p(C);z=o(Oe,"np.triu()"),Oe.forEach(t),S=o(y," renvoie la partie triangulaire sup\xE9rieure du tenseur 2D pass\xE9 en argument, elle fera donc ce masquage pour nous :"),y.forEach(t),A=f(E),x(D.$$.fragment,E)},m(E,y){m(E,r,y),s(r,c),s(r,n),s(n,b),s(r,v),s(r,w),s(w,P),s(r,T),s(r,C),s(C,z),s(r,S),m(E,A,y),$(D,E,y),W=!0},i(E){W||(_(D.$$.fragment,E),W=!0)},o(E){h(D.$$.fragment,E),W=!1},d(E){E&&t(r),E&&t(A),q(D,E)}}}function tc(k){let r,c,n,b,v,w,P,T,C,z,S,A,D,W;return D=new j({props:{code:"scores = torch.triu(scores)",highlighted:"scores = torch.triu(scores)"}}),{c(){r=l("p"),c=a("Ensuite, nous masquerons les valeurs o\xF9 "),n=l("code"),b=a("start_index > end_index"),v=a(" en les mettant \xE0 "),w=l("code"),P=a("0"),T=a(" (les autres probabilit\xE9s sont toutes des nombres positifs). La fonction "),C=l("code"),z=a("torch.triu()"),S=a(" renvoie la partie triangulaire sup\xE9rieure du tenseur 2D pass\xE9 en argument, elle fera donc ce masquage pour nous :"),A=d(),g(D.$$.fragment)},l(E){r=u(E,"P",{});var y=p(r);c=o(y,"Ensuite, nous masquerons les valeurs o\xF9 "),n=u(y,"CODE",{});var B=p(n);b=o(B,"start_index > end_index"),B.forEach(t),v=o(y," en les mettant \xE0 "),w=u(y,"CODE",{});var F=p(w);P=o(F,"0"),F.forEach(t),T=o(y," (les autres probabilit\xE9s sont toutes des nombres positifs). La fonction "),C=u(y,"CODE",{});var Oe=p(C);z=o(Oe,"torch.triu()"),Oe.forEach(t),S=o(y," renvoie la partie triangulaire sup\xE9rieure du tenseur 2D pass\xE9 en argument, elle fera donc ce masquage pour nous :"),y.forEach(t),A=f(E),x(D.$$.fragment,E)},m(E,y){m(E,r,y),s(r,c),s(r,n),s(n,b),s(r,v),s(r,w),s(w,P),s(r,T),s(r,C),s(C,z),s(r,S),m(E,A,y),$(D,E,y),W=!0},i(E){W||(_(D.$$.fragment,E),W=!0)},o(E){h(D.$$.fragment,E),W=!1},d(E){E&&t(r),E&&t(A),q(D,E)}}}function nc(k){let r,c,n,b,v;return{c(){r=l("p"),c=a("\u270F\uFE0F "),n=l("strong"),b=a("Essayez !"),v=a(" Calculez les indices de d\xE9but et de fin pour les cinq r\xE9ponses les plus probables.")},l(w){r=u(w,"P",{});var P=p(r);c=o(P,"\u270F\uFE0F "),n=u(P,"STRONG",{});var T=p(n);b=o(T,"Essayez !"),T.forEach(t),v=o(P," Calculez les indices de d\xE9but et de fin pour les cinq r\xE9ponses les plus probables."),P.forEach(t)},m(w,P){m(w,r,P),s(r,c),s(r,n),s(n,b),s(r,v)},d(w){w&&t(r)}}}function rc(k){let r,c,n,b,v,w,P,T;return{c(){r=l("p"),c=a("\u270F\uFE0F "),n=l("strong"),b=a("Essayez !"),v=a(" Utilisez les meilleurs scores que vous avez calcul\xE9s pr\xE9c\xE9demment pour afficher les cinq r\xE9ponses les plus probables. Pour v\xE9rifier vos r\xE9sultats, retournez au premier pipeline et passez dans "),w=l("code"),P=a("top_k=5"),T=a(" lorsque vous l\u2019appelez.")},l(C){r=u(C,"P",{});var z=p(r);c=o(z,"\u270F\uFE0F "),n=u(z,"STRONG",{});var S=p(n);b=o(S,"Essayez !"),S.forEach(t),v=o(z," Utilisez les meilleurs scores que vous avez calcul\xE9s pr\xE9c\xE9demment pour afficher les cinq r\xE9ponses les plus probables. Pour v\xE9rifier vos r\xE9sultats, retournez au premier pipeline et passez dans "),w=u(z,"CODE",{});var A=p(w);P=o(A,"top_k=5"),A.forEach(t),T=o(z," lorsque vous l\u2019appelez."),z.forEach(t)},m(C,z){m(C,r,z),s(r,c),s(r,n),s(n,b),s(r,v),s(r,w),s(w,P),s(r,T)},d(C){C&&t(r)}}}function ac(k){let r,c,n,b;return r=new j({props:{code:`_ = inputs.pop("overflow_to_sample_mapping")
offsets = inputs.pop("offset_mapping")

inputs = inputs.convert_to_tensors("tf")
print(inputs["input_ids"].shape)`,highlighted:`_ = inputs.pop(<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>)
offsets = inputs.pop(<span class="hljs-string">&quot;offset_mapping&quot;</span>)

inputs = inputs.convert_to_tensors(<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-built_in">print</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)`}}),n=new j({props:{code:"(2, 384)",highlighted:'(<span class="hljs-number">2</span>, <span class="hljs-number">384</span>)'}}),{c(){g(r.$$.fragment),c=d(),g(n.$$.fragment)},l(v){x(r.$$.fragment,v),c=f(v),x(n.$$.fragment,v)},m(v,w){$(r,v,w),m(v,c,w),$(n,v,w),b=!0},i(v){b||(_(r.$$.fragment,v),_(n.$$.fragment,v),b=!0)},o(v){h(r.$$.fragment,v),h(n.$$.fragment,v),b=!1},d(v){q(r,v),v&&t(c),q(n,v)}}}function oc(k){let r,c,n,b;return r=new j({props:{code:`_ = inputs.pop("overflow_to_sample_mapping")
offsets = inputs.pop("offset_mapping")

inputs = inputs.convert_to_tensors("pt")
print(inputs["input_ids"].shape)`,highlighted:`_ = inputs.pop(<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>)
offsets = inputs.pop(<span class="hljs-string">&quot;offset_mapping&quot;</span>)

inputs = inputs.convert_to_tensors(<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape)`}}),n=new j({props:{code:"torch.Size([2, 384])",highlighted:'torch.Size([<span class="hljs-number">2</span>, <span class="hljs-number">384</span>])'}}),{c(){g(r.$$.fragment),c=d(),g(n.$$.fragment)},l(v){x(r.$$.fragment,v),c=f(v),x(n.$$.fragment,v)},m(v,w){$(r,v,w),m(v,c,w),$(n,v,w),b=!0},i(v){b||(_(r.$$.fragment,v),_(n.$$.fragment,v),b=!0)},o(v){h(r.$$.fragment,v),h(n.$$.fragment,v),b=!1},d(v){q(r,v),v&&t(c),q(n,v)}}}function ic(k){let r,c;return r=new j({props:{code:"(2, 384) (2, 384)",highlighted:'(<span class="hljs-number">2</span>, <span class="hljs-number">384</span>) (<span class="hljs-number">2</span>, <span class="hljs-number">384</span>)'}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function lc(k){let r,c;return r=new j({props:{code:"torch.Size([2, 384]) torch.Size([2, 384])",highlighted:'torch.Size([<span class="hljs-number">2</span>, <span class="hljs-number">384</span>]) torch.Size([<span class="hljs-number">2</span>, <span class="hljs-number">384</span>])'}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function uc(k){let r,c;return r=new j({props:{code:`sequence_ids = inputs.sequence_ids()
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
end_logits = tf.where(mask, -<span class="hljs-number">10000</span>, end_logits)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function pc(k){let r,c;return r=new j({props:{code:`sequence_ids = inputs.sequence_ids()
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
end_logits[mask] = -<span class="hljs-number">10000</span>`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function mc(k){let r,c;return r=new j({props:{code:`start_probabilities = tf.math.softmax(start_logits, axis=-1).numpy()
end_probabilities = tf.math.softmax(end_logits, axis=-1).numpy()`,highlighted:`start_probabilities = tf.math.softmax(start_logits, axis=-<span class="hljs-number">1</span>).numpy()
end_probabilities = tf.math.softmax(end_logits, axis=-<span class="hljs-number">1</span>).numpy()`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function cc(k){let r,c;return r=new j({props:{code:`start_probabilities = torch.nn.functional.softmax(start_logits, dim=-1)
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-1)`,highlighted:`start_probabilities = torch.nn.functional.softmax(start_logits, dim=-<span class="hljs-number">1</span>)
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-<span class="hljs-number">1</span>)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function dc(k){let r,c;return r=new j({props:{code:`candidates = []
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

<span class="hljs-built_in">print</span>(candidates)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function fc(k){let r,c;return r=new j({props:{code:`candidates = []
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

<span class="hljs-built_in">print</span>(candidates)`}}),{c(){g(r.$$.fragment)},l(n){x(r.$$.fragment,n)},m(n,b){$(r,n,b),c=!0},i(n){c||(_(r.$$.fragment,n),c=!0)},o(n){h(r.$$.fragment,n),c=!1},d(n){q(r,n)}}}function hc(k){let r,c,n,b,v;return{c(){r=l("p"),c=a("\u270F\uFE0F "),n=l("strong"),b=a("Essayez !"),v=a(" Adaptez le code ci-dessus pour renvoyer les scores et les \xE9tendues des cinq r\xE9ponses les plus probables (au total, pas par morceau).")},l(w){r=u(w,"P",{});var P=p(r);c=o(P,"\u270F\uFE0F "),n=u(P,"STRONG",{});var T=p(n);b=o(T,"Essayez !"),T.forEach(t),v=o(P," Adaptez le code ci-dessus pour renvoyer les scores et les \xE9tendues des cinq r\xE9ponses les plus probables (au total, pas par morceau)."),P.forEach(t)},m(w,P){m(w,r,P),s(r,c),s(r,n),s(n,b),s(r,v)},d(w){w&&t(r)}}}function _c(k){let r,c,n,b,v,w,P,T;return{c(){r=l("p"),c=a("\u270F\uFE0F "),n=l("strong"),b=a("Essayez !"),v=a(" Utilisez les meilleurs scores que vous avez calcul\xE9s auparavant pour montrer les cinq r\xE9ponses les plus probables (pour l\u2019ensemble du contexte, pas pour chaque morceau). Pour v\xE9rifier vos r\xE9sultats, retournez au premier pipeline et sp\xE9cifiez "),w=l("code"),P=a("top_k=5"),T=a(" en argument en l\u2019appelant.")},l(C){r=u(C,"P",{});var z=p(r);c=o(z,"\u270F\uFE0F "),n=u(z,"STRONG",{});var S=p(n);b=o(S,"Essayez !"),S.forEach(t),v=o(z," Utilisez les meilleurs scores que vous avez calcul\xE9s auparavant pour montrer les cinq r\xE9ponses les plus probables (pour l\u2019ensemble du contexte, pas pour chaque morceau). Pour v\xE9rifier vos r\xE9sultats, retournez au premier pipeline et sp\xE9cifiez "),w=u(z,"CODE",{});var A=p(w);P=o(A,"top_k=5"),A.forEach(t),T=o(z," en argument en l\u2019appelant."),z.forEach(t)},m(C,z){m(C,r,z),s(r,c),s(r,n),s(n,b),s(r,v),s(r,w),s(w,P),s(r,T)},d(C){C&&t(r)}}}function bc(k){let r,c,n,b,v,w,P,T,C,z,S,A,D,W,E,y,B,F,Oe,Gt,Ha,Ra,Jt,Va,Ba,fr,ae,oe,Zs,Ie,Ke,Kt,ns,Ya,et,Xa,Wt,Za,hr,Pe,eo,st,so,to,Qt,no,ro,_r,rs,br,as,vr,tt,ao,gr,os,xr,is,$r,nt,oo,qr,Ue,We,Ht,ls,io,Rt,lo,kr,O,uo,Vt,po,mo,Bt,co,fo,us,Yt,ho,_o,Xt,bo,vo,rt,go,xo,wr,ie,le,at,ot,$o,jr,Ge,ps,qu,qo,ms,ku,Er,I,ko,Zt,wo,jo,en,Eo,yo,sn,Po,zo,tn,To,No,nn,Co,Lo,yr,cs,Pr,ue,pe,it,M,So,rn,Ao,Do,an,Mo,Fo,on,Oo,Io,ln,Uo,Go,un,Jo,Ko,pn,Wo,Qo,zr,Qe,Ho,mn,Ro,Vo,Tr,me,ce,lt,ut,Bo,Nr,de,fe,pt,U,Yo,cn,Xo,Zo,dn,ei,si,fn,ti,ni,hn,ri,ai,_n,oi,ii,Cr,K,li,bn,ui,pi,vn,mi,ci,gn,di,fi,xn,hi,_i,Lr,Am='<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">[</mo><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi></mrow><mo stretchy="false">]</mo><mo>\xD7</mo><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">[</mo><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi></mrow><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\\mathrm{start\\_probabilities}[\\mathrm{start\\_index}] \\times \\mathrm{end\\_probabilities}[\\mathrm{end\\_index}]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord"><span class="mord mathrm">start_probabilities</span></span><span class="mopen">[</span><span class="mord"><span class="mord mathrm">start_index</span></span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord"><span class="mord mathrm">end_probabilities</span></span><span class="mopen">[</span><span class="mord"><span class="mord mathrm">end_index</span></span><span class="mclose">]</span></span></span></span></span>',Sr,ze,bi,Ar,Dm='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">[</mo><mrow><mi mathvariant="normal">s</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi></mrow><mo stretchy="false">]</mo><mo>\xD7</mo><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">p</mi><mi mathvariant="normal">r</mi><mi mathvariant="normal">o</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">a</mi><mi mathvariant="normal">b</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">l</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">t</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">s</mi></mrow><mo stretchy="false">[</mo><mrow><mi mathvariant="normal">e</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">_</mi><mi mathvariant="normal">i</mi><mi mathvariant="normal">n</mi><mi mathvariant="normal">d</mi><mi mathvariant="normal">e</mi><mi mathvariant="normal">x</mi></mrow><mo stretchy="false">]</mo></mrow><annotation encoding="application/x-tex">\\mathrm{start\\_probabilities}[\\mathrm{start\\_index}] \\times \\mathrm{end\\_probabilities}[\\mathrm{end\\_index}]</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord"><span class="mord mathrm">start_probabilities</span></span><span class="mopen">[</span><span class="mord"><span class="mord mathrm">start_index</span></span><span class="mclose">]</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.06em;vertical-align:-0.31em;"></span><span class="mord"><span class="mord mathrm">end_probabilities</span></span><span class="mopen">[</span><span class="mord"><span class="mord mathrm">end_index</span></span><span class="mclose">]</span></span></span></span>',Dr,$n,vi,gi,Mr,mt,xi,Fr,ds,Or,he,_e,ct,Q,$i,qn,qi,ki,kn,wi,ji,wn,Ei,yi,jn,Pi,zi,Ir,fs,Ur,dt,Ti,Gr,hs,Jr,He,Kr,G,Ni,En,Ci,Li,yn,Si,Ai,Pn,Di,Mi,zn,Fi,Oi,Tn,Ii,Ui,Wr,_s,Qr,ft,Gi,Hr,bs,Rr,vs,Vr,ht,Ji,Br,Re,Yr,Je,Ve,Nn,gs,Ki,Cn,Wi,Xr,Te,Qi,Ln,Hi,Ri,Sn,Vi,Bi,Zr,xs,ea,$s,sa,Be,Yi,An,Xi,Zi,ta,qs,na,ks,ra,Ye,el,Dn,sl,tl,aa,Y,nl,Mn,rl,al,Fn,ol,il,On,ll,ul,oa,ws,ia,js,la,H,pl,In,ml,cl,Un,dl,fl,Gn,hl,_l,Jn,bl,vl,ua,_t,gl,pa,Es,ma,ys,ca,Ne,xl,Kn,$l,ql,Wn,kl,wl,da,Ps,fa,zs,ha,bt,jl,_a,Ts,ba,vt,El,va,Ns,ga,gt,yl,xa,L,Pl,Qn,zl,Tl,Hn,Nl,Cl,Rn,Ll,Sl,Vn,Al,Dl,Bn,Ml,Fl,Yn,Ol,Il,Xn,Ul,Gl,$a,Cs,qa,R,Jl,Zn,Kl,Wl,er,Ql,Hl,sr,Rl,Vl,tr,Bl,Yl,ka,be,ve,xt,$t,Xl,wa,Ls,ja,ge,xe,qt,X,Zl,nr,eu,su,rr,tu,nu,ar,ru,au,Ea,$e,qe,kt,wt,ou,ya,ke,we,jt,Et,iu,Pa,je,Ee,yt,Ss,za,Xe,lu,or,uu,pu,Ta,Ze,Na,Ce,mu,ir,cu,du,lr,fu,hu,Ca,As,La,Ds,Sa,Pt,_u,Aa,es,Da,Le,bu,ur,vu,gu,pr,xu,$u,Ma;n=new Gm({props:{fw:k[0]}}),T=new Qa({});const wu=[Km,Jm],Ms=[];function ju(e,i){return e[0]==="pt"?0:1}E=ju(k),y=Ms[E]=wu[E](k);const Eu=[Qm,Wm],Fs=[];function yu(e,i){return e[0]==="pt"?0:1}ae=yu(k),oe=Fs[ae]=Eu[ae](k),ns=new Qa({}),rs=new j({props:{code:`from transformers import pipeline

question_answerer = pipeline("question-answering")
context = """
\u{1F917} Transformers is backed by the three most popular deep learning libraries
 \u2014 Jax, PyTorch, and TensorFlow \u2014 with a seamless integration between them. 
It's straightforward to train your models with one before loading them for inference with the other.
"""
# \u{1F917} Transformers s'appuie sur les trois biblioth\xE8ques d'apprentissage profond les plus populaires
# (Jax, PyTorch et TensorFlow) avec une int\xE9gration transparente entre elles.
# C'est simple d'entra\xEEner vos mod\xE8les avec l'une avant de les charger pour l'inf\xE9rence avec l'autre.
question = "Which deep learning libraries back \u{1F917} Transformers?"
# Quelles biblioth\xE8ques d'apprentissage profond derri\xE8re \u{1F917} Transformers ?
question_answerer(question=question, context=context)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

question_answerer = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>)
context = <span class="hljs-string">&quot;&quot;&quot;
\u{1F917} Transformers is backed by the three most popular deep learning libraries
 \u2014 Jax, PyTorch, and TensorFlow \u2014 with a seamless integration between them. 
It&#x27;s straightforward to train your models with one before loading them for inference with the other.
&quot;&quot;&quot;</span>
<span class="hljs-comment"># \u{1F917} Transformers s&#x27;appuie sur les trois biblioth\xE8ques d&#x27;apprentissage profond les plus populaires</span>
<span class="hljs-comment"># (Jax, PyTorch et TensorFlow) avec une int\xE9gration transparente entre elles.</span>
<span class="hljs-comment"># C&#x27;est simple d&#x27;entra\xEEner vos mod\xE8les avec l&#x27;une avant de les charger pour l&#x27;inf\xE9rence avec l&#x27;autre.</span>
question = <span class="hljs-string">&quot;Which deep learning libraries back \u{1F917} Transformers?&quot;</span>
<span class="hljs-comment"># Quelles biblioth\xE8ques d&#x27;apprentissage profond derri\xE8re \u{1F917} Transformers ?</span>
question_answerer(question=question, context=context)`}}),as=new j({props:{code:`{'score': 0.97773,
 'start': 78,
 'end': 105,
 'answer': 'Jax, PyTorch and TensorFlow'}`,highlighted:`{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.97773</span>,
 <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">78</span>,
 <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">105</span>,
 <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>}`}}),os=new j({props:{code:`long_context = """
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

\u{1F917} Transformers fournit des milliers de mod\xE8les pr\xE9-entra\xEEn\xE9s pour effectuer des t\xE2ches sur des textes telles que la classification, 
l'extraction d'informations, la r\xE9ponse \xE0 des questions, le r\xE9sum\xE9 de textes, la traduction, la g\xE9n\xE9ration de texte et plus encore dans plus de 100 langues.
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

\u{1F917} Transformers fournit des milliers de mod\xE8les pr\xE9-entra\xEEn\xE9s pour effectuer des t\xE2ches sur des textes telles que la classification, 
l&#x27;extraction d&#x27;informations, la r\xE9ponse \xE0 des questions, le r\xE9sum\xE9 de textes, la traduction, la g\xE9n\xE9ration de texte et plus encore dans plus de 100 langues.
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
question_answerer(question=question, context=long_context)`}}),is=new j({props:{code:`{'score': 0.97149,
 'start': 1892,
 'end': 1919,
 'answer': 'Jax, PyTorch and TensorFlow'}`,highlighted:`{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.97149</span>,
 <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">1892</span>,
 <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">1919</span>,
 <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>}`}}),ls=new Qa({});const Pu=[Rm,Hm],Os=[];function zu(e,i){return e[0]==="pt"?0:1}ie=zu(k),le=Os[ie]=Pu[ie](k),cs=new j({props:{code:`start_logits = outputs.start_logits
end_logits = outputs.end_logits
print(start_logits.shape, end_logits.shape)`,highlighted:`start_logits = outputs.start_logits
end_logits = outputs.end_logits
<span class="hljs-built_in">print</span>(start_logits.shape, end_logits.shape)`}});const Tu=[Bm,Vm],Is=[];function Nu(e,i){return e[0]==="pt"?0:1}ue=Nu(k),pe=Is[ue]=Tu[ue](k);const Cu=[Xm,Ym],Us=[];function Lu(e,i){return e[0]==="pt"?0:1}me=Lu(k),ce=Us[me]=Cu[me](k);const Su=[ec,Zm],Gs=[];function Au(e,i){return e[0]==="pt"?0:1}de=Au(k),fe=Gs[de]=Su[de](k),ds=new j({props:{code:"scores = start_probabilities[:, None] * end_probabilities[None, :]",highlighted:'scores = start_probabilities[:, <span class="hljs-literal">None</span>] * end_probabilities[<span class="hljs-literal">None</span>, :]'}});const Du=[tc,sc],Js=[];function Mu(e,i){return e[0]==="pt"?0:1}he=Mu(k),_e=Js[he]=Du[he](k),fs=new j({props:{code:`max_index = scores.argmax().item()
start_index = max_index // scores.shape[1]
end_index = max_index % scores.shape[1]
print(scores[start_index, end_index])`,highlighted:`max_index = scores.argmax().item()
start_index = max_index // scores.shape[<span class="hljs-number">1</span>]
end_index = max_index % scores.shape[<span class="hljs-number">1</span>]
<span class="hljs-built_in">print</span>(scores[start_index, end_index])`}}),hs=new j({props:{code:"0.97773",highlighted:'<span class="hljs-number">0.97773</span>'}}),He=new Wa({props:{$$slots:{default:[nc]},$$scope:{ctx:k}}}),_s=new j({props:{code:`inputs_with_offsets = tokenizer(question, context, return_offsets_mapping=True)
offsets = inputs_with_offsets["offset_mapping"]

start_char, _ = offsets[start_index]
_, end_char = offsets[end_index]
answer = context[start_char:end_char]`,highlighted:`inputs_with_offsets = tokenizer(question, context, return_offsets_mapping=<span class="hljs-literal">True</span>)
offsets = inputs_with_offsets[<span class="hljs-string">&quot;offset_mapping&quot;</span>]

start_char, _ = offsets[start_index]
_, end_char = offsets[end_index]
answer = context[start_char:end_char]`}}),bs=new j({props:{code:`result = {
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
<span class="hljs-built_in">print</span>(result)`}}),vs=new j({props:{code:`{'answer': 'Jax, PyTorch and TensorFlow',
 'start': 78,
 'end': 105,
 'score': 0.97773}`,highlighted:`{<span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>,
 <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">78</span>,
 <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">105</span>,
 <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.97773</span>}`}}),Re=new Wa({props:{$$slots:{default:[rc]},$$scope:{ctx:k}}}),gs=new Qa({}),xs=new j({props:{code:`inputs = tokenizer(question, long_context)
print(len(inputs["input_ids"]))`,highlighted:`inputs = tokenizer(question, long_context)
<span class="hljs-built_in">print</span>(<span class="hljs-built_in">len</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]))`}}),$s=new j({props:{code:"461",highlighted:'<span class="hljs-number">461</span>'}}),qs=new j({props:{code:`inputs = tokenizer(question, long_context, max_length=384, truncation="only_second")
print(tokenizer.decode(inputs["input_ids"]))`,highlighted:`inputs = tokenizer(question, long_context, max_length=<span class="hljs-number">384</span>, truncation=<span class="hljs-string">&quot;only_second&quot;</span>)
<span class="hljs-built_in">print</span>(tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]))`}}),ks=new j({props:{code:`"""
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
&quot;&quot;&quot;</span>`}}),ws=new j({props:{code:`sentence = "This sentence is not too long but we are going to split it anyway."
# "Cette phrase n'est pas trop longue mais nous allons la diviser quand m\xEAme."
inputs = tokenizer(
    sentence, truncation=True, return_overflowing_tokens=True, max_length=6, stride=2
)

for ids in inputs["input_ids"]:
    print(tokenizer.decode(ids))`,highlighted:`sentence = <span class="hljs-string">&quot;This sentence is not too long but we are going to split it anyway.&quot;</span>
<span class="hljs-comment"># &quot;Cette phrase n&#x27;est pas trop longue mais nous allons la diviser quand m\xEAme.&quot;</span>
inputs = tokenizer(
    sentence, truncation=<span class="hljs-literal">True</span>, return_overflowing_tokens=<span class="hljs-literal">True</span>, max_length=<span class="hljs-number">6</span>, stride=<span class="hljs-number">2</span>
)

<span class="hljs-keyword">for</span> ids <span class="hljs-keyword">in</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(tokenizer.decode(ids))`}}),js=new j({props:{code:`'[CLS] This sentence is not [SEP]'
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
<span class="hljs-string">&#x27;[CLS] it anyway. [SEP]&#x27;</span>`}}),Es=new j({props:{code:"print(inputs.keys())",highlighted:'<span class="hljs-built_in">print</span>(inputs.keys())'}}),ys=new j({props:{code:"dict_keys(['input_ids', 'attention_mask', 'overflow_to_sample_mapping'])",highlighted:'dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>])'}}),Ps=new j({props:{code:'print(inputs["overflow_to_sample_mapping"])',highlighted:'<span class="hljs-built_in">print</span>(inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>])'}}),zs=new j({props:{code:"[0, 0, 0, 0, 0, 0, 0]",highlighted:'[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]'}}),Ts=new j({props:{code:`sentences = [
    "This sentence is not too long but we are going to split it anyway.",
    # Cette phrase n'est pas trop longue mais nous allons la diviser quand m\xEAme.
    "This sentence is shorter but will still get split.",
    # Cette phrase est plus courte mais sera quand m\xEAme divis\xE9e.
]
inputs = tokenizer(
    sentences, truncation=True, return_overflowing_tokens=True, max_length=6, stride=2
)

print(inputs["overflow_to_sample_mapping"])`,highlighted:`sentences = [
    <span class="hljs-string">&quot;This sentence is not too long but we are going to split it anyway.&quot;</span>,
    <span class="hljs-comment"># Cette phrase n&#x27;est pas trop longue mais nous allons la diviser quand m\xEAme.</span>
    <span class="hljs-string">&quot;This sentence is shorter but will still get split.&quot;</span>,
    <span class="hljs-comment"># Cette phrase est plus courte mais sera quand m\xEAme divis\xE9e.</span>
]
inputs = tokenizer(
    sentences, truncation=<span class="hljs-literal">True</span>, return_overflowing_tokens=<span class="hljs-literal">True</span>, max_length=<span class="hljs-number">6</span>, stride=<span class="hljs-number">2</span>
)

<span class="hljs-built_in">print</span>(inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>])`}}),Ns=new j({props:{code:"[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1]",highlighted:'[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>]'}}),Cs=new j({props:{code:`inputs = tokenizer(
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
)`}});const Fu=[oc,ac],Ks=[];function Ou(e,i){return e[0]==="pt"?0:1}be=Ou(k),ve=Ks[be]=Fu[be](k),Ls=new j({props:{code:`outputs = model(**inputs)

start_logits = outputs.start_logits
end_logits = outputs.end_logits
print(start_logits.shape, end_logits.shape)`,highlighted:`outputs = model(**inputs)

start_logits = outputs.start_logits
end_logits = outputs.end_logits
<span class="hljs-built_in">print</span>(start_logits.shape, end_logits.shape)`}});const Iu=[lc,ic],Ws=[];function Uu(e,i){return e[0]==="pt"?0:1}ge=Uu(k),xe=Ws[ge]=Iu[ge](k);const Gu=[pc,uc],Qs=[];function Ju(e,i){return e[0]==="pt"?0:1}$e=Ju(k),qe=Qs[$e]=Gu[$e](k);const Ku=[cc,mc],Hs=[];function Wu(e,i){return e[0]==="pt"?0:1}ke=Wu(k),we=Hs[ke]=Ku[ke](k);const Qu=[fc,dc],Rs=[];function Hu(e,i){return e[0]==="pt"?0:1}return je=Hu(k),Ee=Rs[je]=Qu[je](k),Ss=new j({props:{code:"[(0, 18, 0.33867), (173, 184, 0.97149)]",highlighted:'[(<span class="hljs-number">0</span>, <span class="hljs-number">18</span>, <span class="hljs-number">0.33867</span>), (<span class="hljs-number">173</span>, <span class="hljs-number">184</span>, <span class="hljs-number">0.97149</span>)]'}}),Ze=new Wa({props:{$$slots:{default:[hc]},$$scope:{ctx:k}}}),As=new j({props:{code:`for candidate, offset in zip(candidates, offsets):
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
    <span class="hljs-built_in">print</span>(result)`}}),Ds=new j({props:{code:`{'answer': '\\n\u{1F917} Transformers: State of the Art NLP', 'start': 0, 'end': 37, 'score': 0.33867}
{'answer': 'Jax, PyTorch and TensorFlow', 'start': 1892, 'end': 1919, 'score': 0.97149}`,highlighted:`{<span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;\\n\u{1F917} Transformers: State of the Art NLP&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">0</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">37</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.33867</span>}
{<span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>, <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">1892</span>, <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">1919</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.97149</span>}`}}),es=new Wa({props:{$$slots:{default:[_c]},$$scope:{ctx:k}}}),{c(){r=l("meta"),c=d(),g(n.$$.fragment),b=d(),v=l("h1"),w=l("a"),P=l("span"),g(T.$$.fragment),C=d(),z=l("span"),S=l("i"),A=a("Tokenizer"),D=a(" rapide dans le pipeline de QA"),W=d(),y.c(),B=d(),F=l("p"),Oe=a("Nous allons maintenant nous plonger dans le pipeline de "),Gt=l("code"),Ha=a("question-answering"),Ra=a(" et voir comment exploiter les "),Jt=l("em"),Va=a("offsets"),Ba=a(" pour extraire d\u2019u ncontexte la r\xE9ponse \xE0 la question pos\xE9e. Nous verrons ensuite comment g\xE9rer les contextes tr\xE8s longs qui finissent par \xEAtre tronqu\xE9s. Vous pouvez sauter cette section si vous n\u2019\xEAtes pas int\xE9ress\xE9 par la t\xE2che de r\xE9ponse aux questions."),fr=d(),oe.c(),Zs=d(),Ie=l("h2"),Ke=l("a"),Kt=l("span"),g(ns.$$.fragment),Ya=d(),et=l("span"),Xa=a("Utilisation du pipeline de "),Wt=l("code"),Za=a("question-answering"),hr=d(),Pe=l("p"),eo=a("Comme nous l\u2019avons vu dans le "),st=l("a"),so=a("chapitre 1"),to=a(", nous pouvons utiliser le pipeline de "),Qt=l("code"),no=a("question-answering"),ro=a(" comme ceci pour obtenir une r\xE9ponse \xE0 une question :"),_r=d(),g(rs.$$.fragment),br=d(),g(as.$$.fragment),vr=d(),tt=l("p"),ao=a("Contrairement aux autres pipelines, qui ne peuvent pas tronquer et diviser les textes dont la longueur est sup\xE9rieure \xE0 la longueur maximale accept\xE9e par le mod\xE8le (et qui peuvent donc manquer des informations \xE0 la fin d\u2019un document), ce pipeline peut traiter des contextes tr\xE8s longs et retournera la r\xE9ponse \xE0 la question m\xEAme si elle se trouve \xE0 la fin :"),gr=d(),g(os.$$.fragment),xr=d(),g(is.$$.fragment),$r=d(),nt=l("p"),oo=a("Voyons comment il fait tout cela !"),qr=d(),Ue=l("h3"),We=l("a"),Ht=l("span"),g(ls.$$.fragment),io=d(),Rt=l("span"),lo=a("Utilisation d'un mod\xE8le pour r\xE9pondre \xE0 des questions"),kr=d(),O=l("p"),uo=a("Comme avec n\u2019importe quel autre pipeline, nous commen\xE7ons par tokeniser notre entr\xE9e et l\u2019envoyons ensuite \xE0 travers le mod\xE8le. Le "),Vt=l("em"),po=a("checkpoint"),mo=a(" utilis\xE9 par d\xE9faut pour le pipeline de "),Bt=l("code"),co=a("question-answering"),fo=a(" est "),us=l("a"),Yt=l("code"),ho=a("distilbert-base-cased-distilled-squad"),_o=a(" (le \xAB squad \xBB dans le nom vient du jeu de donn\xE9es sur lequel le mod\xE8le a \xE9t\xE9 "),Xt=l("em"),bo=a("finetun\xE9"),vo=a(", nous parlerons davantage de ce jeu de donn\xE9es dans le "),rt=l("a"),go=a("chapitre 7"),xo=a(") :"),wr=d(),le.c(),at=d(),ot=l("p"),$o=a("Notez que nous tokenizons la question et le contexte comme une paire, la question en premier."),jr=d(),Ge=l("div"),ps=l("img"),qo=d(),ms=l("img"),Er=d(),I=l("p"),ko=a("Les mod\xE8les de r\xE9ponse aux questions fonctionnent un peu diff\xE9remment des mod\xE8les que nous avons vus jusqu\u2019\xE0 pr\xE9sent. En utilisant l\u2019image ci-dessus comme exemple, le mod\xE8le a \xE9t\xE9 entra\xEEn\xE9 \xE0 pr\xE9dire l\u2019index du "),Zt=l("em"),wo=a("token"),jo=a(" de d\xE9but de la r\xE9ponse (ici 21) et l\u2019index du "),en=l("em"),Eo=a("token"),yo=a(" o\xF9 la r\xE9ponse se termine (ici 24). C\u2019est pourquoi ces mod\xE8les ne retournent pas un tenseur de logits mais deux : un pour les logits correspondant au "),sn=l("em"),Po=a("token"),zo=a(" de d\xE9but de la r\xE9ponse, et un pour les logits correspondant au "),tn=l("em"),To=a("token"),No=a(" de fin de la r\xE9ponse. Puisque dans ce cas nous n\u2019avons qu\u2019une seule entr\xE9e contenant 66 "),nn=l("em"),Co=a("tokens"),Lo=a(", nous obtenons :"),yr=d(),g(cs.$$.fragment),Pr=d(),pe.c(),it=d(),M=l("p"),So=a("Pour convertir ces logits en probabilit\xE9s, nous allons appliquer une fonction softmax. Mais avant cela, nous devons nous assurer de masquer les indices qui ne font pas partie du contexte. Notre entr\xE9e est "),rn=l("code"),Ao=a("[CLS] question [SEP] contexte [SEP]"),Do=a(" donc nous devons masquer les "),an=l("em"),Mo=a("tokens"),Fo=a(" de la question ainsi que le "),on=l("em"),Oo=a("token"),Io=d(),ln=l("code"),Uo=a("[SEP]"),Go=a(". Nous garderons cependant le "),un=l("em"),Jo=a("token"),Ko=d(),pn=l("code"),Wo=a("[CLS]"),Qo=a(" car certains mod\xE8les l\u2019utilisent pour indiquer que la r\xE9ponse n\u2019est pas dans le contexte."),zr=d(),Qe=l("p"),Ho=a("Puisque nous appliquerons une fonction softmax par la suite, il nous suffit de remplacer les logits que nous voulons masquer par un grand nombre n\xE9gatif. Ici, nous utilisons "),mn=l("code"),Ro=a("-10000"),Vo=a(" :"),Tr=d(),ce.c(),lt=d(),ut=l("p"),Bo=a("Maintenant que nous avons correctement masqu\xE9 les logits correspondant aux positions que nous ne voulons pas pr\xE9dire, nous pouvons appliquer la softmax :"),Nr=d(),fe.c(),pt=d(),U=l("p"),Yo=a("A ce stade, nous pourrions prendre l\u2019argmax des probabilit\xE9s de d\xE9but et de fin mais nous pourrions nous retrouver avec un indice de d\xE9but sup\xE9rieur \xE0 l\u2019indice de fin. Nous devons donc prendre quelques pr\xE9cautions suppl\xE9mentaires. Nous allons calculer les probabilit\xE9s de chaque "),cn=l("code"),Xo=a("start_index"),Zo=a(" et "),dn=l("code"),ei=a("end_index"),si=a(" possible o\xF9 "),fn=l("code"),ti=a("start_index<=end_index"),ni=a(", puis nous prendrons le "),hn=l("em"),ri=a("tuple"),ai=d(),_n=l("code"),oi=a("(start_index, end_index)"),ii=a(" avec la plus grande probabilit\xE9."),Cr=d(),K=l("p"),li=a("En supposant que les \xE9v\xE9nements \xAB La r\xE9ponse commence \xE0 "),bn=l("code"),ui=a("start_index"),pi=a(" \xBB et \xAB La r\xE9ponse se termine \xE0 "),vn=l("code"),mi=a("end_index"),ci=a(" \xBB sont ind\xE9pendants, la probabilit\xE9 que la r\xE9ponse commence \xE0 "),gn=l("code"),di=a("end_index"),fi=a(" et se termine \xE0 "),xn=l("code"),hi=a("end_index"),_i=a(` est :
`),Lr=new Tm,Sr=d(),ze=l("p"),bi=a("Ainsi, pour calculer tous les scores, il suffit de calculer tous les produits "),Ar=new Tm,Dr=a(" o\xF9 "),$n=l("code"),vi=a("start_index <= end_index"),gi=a("."),Mr=d(),mt=l("p"),xi=a("Calculons d\u2019abord tous les produits possibles :"),Fr=d(),g(ds.$$.fragment),Or=d(),_e.c(),ct=d(),Q=l("p"),$i=a("Il ne nous reste plus qu\u2019\xE0 obtenir l\u2019indice du maximum. Puisque PyTorch retourne l\u2019index dans le tenseur aplati, nous devons utiliser les op\xE9rations division "),qn=l("code"),qi=a("//"),ki=a(" et modulo "),kn=l("code"),wi=a("%"),ji=a(" pour obtenir le "),wn=l("code"),Ei=a("start_index"),yi=a(" et le "),jn=l("code"),Pi=a("end_index"),zi=a(" :"),Ir=d(),g(fs.$$.fragment),Ur=d(),dt=l("p"),Ti=a("Nous n\u2019avons pas encore tout \xE0 fait termin\xE9, mais au moins nous avons d\xE9j\xE0 le score correct pour la r\xE9ponse (vous pouvez le v\xE9rifier en le comparant au premier r\xE9sultat de la section pr\xE9c\xE9dente) :"),Gr=d(),g(hs.$$.fragment),Jr=d(),g(He.$$.fragment),Kr=d(),G=l("p"),Ni=a("Nous avons les "),En=l("code"),Ci=a("start_index"),Li=a(" et "),yn=l("code"),Si=a("end_index"),Ai=a(" de la r\xE9ponse en termes de "),Pn=l("em"),Di=a("tokens"),Mi=a(". Maintenant nous devons juste convertir en indices de caract\xE8res dans le contexte. C\u2019est l\xE0 que les "),zn=l("em"),Fi=a("offsets"),Oi=a(" seront super utiles. Nous pouvons les saisir et les utiliser comme nous l\u2019avons fait dans la t\xE2che de classification des "),Tn=l("em"),Ii=a("tokens"),Ui=a(" :"),Wr=d(),g(_s.$$.fragment),Qr=d(),ft=l("p"),Gi=a("Il ne nous reste plus qu\u2019\xE0 tout formater pour obtenir notre r\xE9sultat :"),Hr=d(),g(bs.$$.fragment),Rr=d(),g(vs.$$.fragment),Vr=d(),ht=l("p"),Ji=a("Super ! C\u2019est la m\xEAme chose que dans notre premier exemple !"),Br=d(),g(Re.$$.fragment),Yr=d(),Je=l("h2"),Ve=l("a"),Nn=l("span"),g(gs.$$.fragment),Ki=d(),Cn=l("span"),Wi=a("Gestion des contextes longs"),Xr=d(),Te=l("p"),Qi=a("Si nous essayons de tokeniser la question et le long contexte que nous avons utilis\xE9 dans l\u2019exemple pr\xE9c\xE9demment, nous obtenons un nombre de "),Ln=l("em"),Hi=a("tokens"),Ri=a(" sup\xE9rieur \xE0 la longueur maximale utilis\xE9e dans le pipeline "),Sn=l("code"),Vi=a("question-answering"),Bi=a(" (qui est de 384) :"),Zr=d(),g(xs.$$.fragment),ea=d(),g($s.$$.fragment),sa=d(),Be=l("p"),Yi=a("Nous devrons donc tronquer nos entr\xE9es \xE0 cette longueur maximale. Il y a plusieurs fa\xE7ons de le faire mais nous ne voulons pas tronquer la question, seulement le contexte. Puisque le contexte est la deuxi\xE8me phrase, nous utilisons la strat\xE9gie de troncature "),An=l("code"),Xi=a('"only_second"'),Zi=a(". Le probl\xE8me qui se pose alors est que la r\xE9ponse \xE0 la question peut ne pas se trouver dans le contexte tronqu\xE9. Ici, par exemple, nous avons choisi une question dont la r\xE9ponse se trouve vers la fin du contexte, et lorsque nous la tronquons, cette r\xE9ponse n\u2019est pas pr\xE9sente :"),ta=d(),g(qs.$$.fragment),na=d(),g(ks.$$.fragment),ra=d(),Ye=l("p"),el=a("Cela signifie que le mod\xE8le a du mal \xE0 trouver la bonne r\xE9ponse. Pour r\xE9soudre ce probl\xE8me, le pipeline de "),Dn=l("code"),sl=a("question-answering"),tl=a(" nous permet de diviser le contexte en morceaux plus petits, en sp\xE9cifiant la longueur maximale. Pour s\u2019assurer que nous ne divisons pas le contexte exactement au mauvais endroit pour permettre de trouver la r\xE9ponse, il inclut \xE9galement un certain chevauchement entre les morceaux."),aa=d(),Y=l("p"),nl=a("Nous pouvons demander au "),Mn=l("em"),rl=a("tokenizer"),al=a(" (rapide ou lent) de le faire pour nous en ajoutant "),Fn=l("code"),ol=a("return_overflowing_tokens=True"),il=a(", et nous pouvons sp\xE9cifier le chevauchement que nous voulons avec l\u2019argument "),On=l("code"),ll=a("stride"),ul=a(". Voici un exemple, en utilisant une phrase plus petite :"),oa=d(),g(ws.$$.fragment),ia=d(),g(js.$$.fragment),la=d(),H=l("p"),pl=a("Comme on peut le voir, la phrase a \xE9t\xE9 d\xE9coup\xE9e en morceaux de telle sorte que chaque entr\xE9e dans "),In=l("code"),ml=a('inputs["input_ids"]'),cl=a(" a au maximum 6 "),Un=l("em"),dl=a("tokens"),fl=a(" (il faudrait ajouter du "),Gn=l("em"),hl=a("padding"),_l=a(" pour que la derni\xE8re entr\xE9e ait la m\xEAme taille que les autres) et il y a un chevauchement de 2 "),Jn=l("em"),bl=a("tokens"),vl=a(" entre chacune des entr\xE9es."),ua=d(),_t=l("p"),gl=a("Regardons de plus pr\xE8s le r\xE9sultat de la tok\xE9nisation :"),pa=d(),g(Es.$$.fragment),ma=d(),g(ys.$$.fragment),ca=d(),Ne=l("p"),xl=a("Comme pr\xE9vu, nous obtenons les identifiants d\u2019entr\xE9e et un masque d\u2019attention. La derni\xE8re cl\xE9, "),Kn=l("code"),$l=a("overflow_to_sample_mapping"),ql=a(", est une carte qui nous indique \xE0 quelle phrase correspond chacun des r\xE9sultats. Ici nous avons 7 r\xE9sultats qui proviennent tous de la (seule) phrase que nous avons pass\xE9e au "),Wn=l("em"),kl=a("tokenizer"),wl=a(" :"),da=d(),g(Ps.$$.fragment),fa=d(),g(zs.$$.fragment),ha=d(),bt=l("p"),jl=a("C\u2019est plus utile lorsque nous tokenisons plusieurs phrases ensemble. Par exemple :"),_a=d(),g(Ts.$$.fragment),ba=d(),vt=l("p"),El=a("nous donne :"),va=d(),g(Ns.$$.fragment),ga=d(),gt=l("p"),yl=a("ce qui signifie que la premi\xE8re phrase est divis\xE9e en 7 morceaux comme pr\xE9c\xE9demment et que les 4 morceaux suivants proviennent de la deuxi\xE8me phrase."),xa=d(),L=l("p"),Pl=a("Revenons maintenant \xE0 notre contexte long. Par d\xE9faut, le pipeline "),Qn=l("code"),zl=a("question-answering"),Tl=a(" utilise une longueur maximale de 384 et un "),Hn=l("em"),Nl=a("stride"),Cl=a(" de 128, qui correspondent \xE0 la fa\xE7on dont le mod\xE8le a \xE9t\xE9 "),Rn=l("em"),Ll=a("finetun\xE9"),Sl=a(" (vous pouvez ajuster ces param\xE8tres en passant les arguments "),Vn=l("code"),Al=a("max_seq_len"),Dl=a(" et "),Bn=l("code"),Ml=a("stride"),Fl=a(" lorsque vous appelez le pipeline). Nous utiliserons donc ces param\xE8tres lors de la tokenisation. Nous ajouterons aussi du "),Yn=l("em"),Ol=a("padding"),Il=a(" (pour avoir des \xE9chantillons de m\xEAme longueur afin de pouvoir construire des tenseurs) ainsi que demander les "),Xn=l("em"),Ul=a("offsets"),Gl=a(" :"),$a=d(),g(Cs.$$.fragment),qa=d(),R=l("p"),Jl=a("Ces "),Zn=l("code"),Kl=a("inputs"),Wl=a(" contiendront les identifiants d\u2019entr\xE9e, les masques d\u2019attention que le mod\xE8le attend, ainsi que les "),er=l("em"),Ql=a("offsets"),Hl=a(" et le "),sr=l("code"),Rl=a("overflow_to_sample_mapping"),Vl=a(" dont on vient de parler. Puisque ces deux \xE9l\xE9ments ne sont pas des param\xE8tres utilis\xE9s par le mod\xE8le, nous allons les sortir des "),tr=l("code"),Bl=a("inputs"),Yl=a(" (et nous ne stockerons pas la correspondance puisqu\u2019elle n\u2019est pas utile ici) avant de le convertir en tenseur :"),ka=d(),ve.c(),xt=d(),$t=l("p"),Xl=a("Notre contexte long a \xE9t\xE9 divis\xE9 en deux, ce qui signifie qu\u2019apr\xE8s avoir travers\xE9 notre mod\xE8le, nous aurons deux ensembles de logits de d\xE9but et de fin :"),wa=d(),g(Ls.$$.fragment),ja=d(),xe.c(),qt=d(),X=l("p"),Zl=a("Comme pr\xE9c\xE9demment, nous masquons d\u2019abord les "),nr=l("em"),eu=a("tokens"),su=a(" qui ne font pas partie du contexte avant de prendre le softmax. Nous masquons \xE9galement tous les "),rr=l("em"),tu=a("tokens"),nu=a(" de "),ar=l("em"),ru=a("padding"),au=a(" (tels que signal\xE9s par le masque d\u2019attention) :"),Ea=d(),qe.c(),kt=d(),wt=l("p"),ou=a("Ensuite, nous pouvons utiliser la fonction softmax pour convertir nos logits en probabilit\xE9s :"),ya=d(),we.c(),jt=d(),Et=l("p"),iu=a("L\u2019\xE9tape suivante est similaire \xE0 ce que nous avons fait pour le petit contexte mais nous la r\xE9p\xE9tons pour chacun de nos deux morceaux. Nous attribuons un score \xE0 tous les espaces de r\xE9ponse possibles puis nous prenons l\u2019espace ayant le meilleur score :"),Pa=d(),Ee.c(),yt=d(),g(Ss.$$.fragment),za=d(),Xe=l("p"),lu=a("Ces deux candidats correspondent aux meilleures r\xE9ponses que le mod\xE8le a pu trouver dans chaque morceau. Le mod\xE8le est beaucoup plus confiant dans le fait que la bonne r\xE9ponse se trouve dans la deuxi\xE8me partie (ce qui est bon signe !). Il ne nous reste plus qu\u2019\xE0 faire correspondre ces deux espaces de "),or=l("em"),uu=a("tokens"),pu=a(" \xE0 des espaces de caract\xE8res dans le contexte (nous n\u2019avons besoin de faire correspondre que le second pour avoir notre r\xE9ponse, mais il est int\xE9ressant de voir ce que le mod\xE8le a choisi dans le premier morceau)."),Ta=d(),g(Ze.$$.fragment),Na=d(),Ce=l("p"),mu=a("Le "),ir=l("code"),cu=a("offsets"),du=a(" que nous avons saisi plus t\xF4t est en fait une liste d\u2019"),lr=l("em"),fu=a("offsets"),hu=a(" avec une liste par morceau de texte :"),Ca=d(),g(As.$$.fragment),La=d(),g(Ds.$$.fragment),Sa=d(),Pt=l("p"),_u=a("Si nous ignorons le premier r\xE9sultat, nous obtenons le m\xEAme r\xE9sultat que notre pipeline pour ce long contexte !"),Aa=d(),g(es.$$.fragment),Da=d(),Le=l("p"),bu=a("Ceci conclut notre plong\xE9e en profondeur dans les capacit\xE9s du "),ur=l("em"),vu=a("tokenizer"),gu=a(". Nous mettrons \xE0 nouveau tout cela en pratique dans le prochain chapitre, lorsque nous vous montrerons comment "),pr=l("em"),xu=a("finetuner"),$u=a(" un mod\xE8le sur une s\xE9rie de t\xE2ches NLP courantes."),this.h()},l(e){const i=Im('[data-svelte="svelte-1phssyn"]',document.head);r=u(i,"META",{name:!0,content:!0}),i.forEach(t),c=f(e),x(n.$$.fragment,e),b=f(e),v=u(e,"H1",{class:!0});var Vs=p(v);w=u(Vs,"A",{id:!0,class:!0,href:!0});var zt=p(w);P=u(zt,"SPAN",{});var Tt=p(P);x(T.$$.fragment,Tt),Tt.forEach(t),zt.forEach(t),C=f(Vs),z=u(Vs,"SPAN",{});var Bs=p(z);S=u(Bs,"I",{});var Nt=p(S);A=o(Nt,"Tokenizer"),Nt.forEach(t),D=o(Bs," rapide dans le pipeline de QA"),Bs.forEach(t),Vs.forEach(t),W=f(e),y.l(e),B=f(e),F=u(e,"P",{});var Se=p(F);Oe=o(Se,"Nous allons maintenant nous plonger dans le pipeline de "),Gt=u(Se,"CODE",{});var Ct=p(Gt);Ha=o(Ct,"question-answering"),Ct.forEach(t),Ra=o(Se," et voir comment exploiter les "),Jt=u(Se,"EM",{});var Lt=p(Jt);Va=o(Lt,"offsets"),Lt.forEach(t),Ba=o(Se," pour extraire d\u2019u ncontexte la r\xE9ponse \xE0 la question pos\xE9e. Nous verrons ensuite comment g\xE9rer les contextes tr\xE8s longs qui finissent par \xEAtre tronqu\xE9s. Vous pouvez sauter cette section si vous n\u2019\xEAtes pas int\xE9ress\xE9 par la t\xE2che de r\xE9ponse aux questions."),Se.forEach(t),fr=f(e),oe.l(e),Zs=f(e),Ie=u(e,"H2",{class:!0});var Ys=p(Ie);Ke=u(Ys,"A",{id:!0,class:!0,href:!0});var mr=p(Ke);Kt=u(mr,"SPAN",{});var St=p(Kt);x(ns.$$.fragment,St),St.forEach(t),mr.forEach(t),Ya=f(Ys),et=u(Ys,"SPAN",{});var Xs=p(et);Xa=o(Xs,"Utilisation du pipeline de "),Wt=u(Xs,"CODE",{});var At=p(Wt);Za=o(At,"question-answering"),At.forEach(t),Xs.forEach(t),Ys.forEach(t),hr=f(e),Pe=u(e,"P",{});var Ae=p(Pe);eo=o(Ae,"Comme nous l\u2019avons vu dans le "),st=u(Ae,"A",{href:!0});var Dt=p(st);so=o(Dt,"chapitre 1"),Dt.forEach(t),to=o(Ae,", nous pouvons utiliser le pipeline de "),Qt=u(Ae,"CODE",{});var cr=p(Qt);no=o(cr,"question-answering"),cr.forEach(t),ro=o(Ae," comme ceci pour obtenir une r\xE9ponse \xE0 une question :"),Ae.forEach(t),_r=f(e),x(rs.$$.fragment,e),br=f(e),x(as.$$.fragment,e),vr=f(e),tt=u(e,"P",{});var dr=p(tt);ao=o(dr,"Contrairement aux autres pipelines, qui ne peuvent pas tronquer et diviser les textes dont la longueur est sup\xE9rieure \xE0 la longueur maximale accept\xE9e par le mod\xE8le (et qui peuvent donc manquer des informations \xE0 la fin d\u2019un document), ce pipeline peut traiter des contextes tr\xE8s longs et retournera la r\xE9ponse \xE0 la question m\xEAme si elle se trouve \xE0 la fin :"),dr.forEach(t),gr=f(e),x(os.$$.fragment,e),xr=f(e),x(is.$$.fragment,e),$r=f(e),nt=u(e,"P",{});var Ru=p(nt);oo=o(Ru,"Voyons comment il fait tout cela !"),Ru.forEach(t),qr=f(e),Ue=u(e,"H3",{class:!0});var Fa=p(Ue);We=u(Fa,"A",{id:!0,class:!0,href:!0});var Vu=p(We);Ht=u(Vu,"SPAN",{});var Bu=p(Ht);x(ls.$$.fragment,Bu),Bu.forEach(t),Vu.forEach(t),io=f(Fa),Rt=u(Fa,"SPAN",{});var Yu=p(Rt);lo=o(Yu,"Utilisation d'un mod\xE8le pour r\xE9pondre \xE0 des questions"),Yu.forEach(t),Fa.forEach(t),kr=f(e),O=u(e,"P",{});var Z=p(O);uo=o(Z,"Comme avec n\u2019importe quel autre pipeline, nous commen\xE7ons par tokeniser notre entr\xE9e et l\u2019envoyons ensuite \xE0 travers le mod\xE8le. Le "),Vt=u(Z,"EM",{});var Xu=p(Vt);po=o(Xu,"checkpoint"),Xu.forEach(t),mo=o(Z," utilis\xE9 par d\xE9faut pour le pipeline de "),Bt=u(Z,"CODE",{});var Zu=p(Bt);co=o(Zu,"question-answering"),Zu.forEach(t),fo=o(Z," est "),us=u(Z,"A",{href:!0,rel:!0});var ep=p(us);Yt=u(ep,"CODE",{});var sp=p(Yt);ho=o(sp,"distilbert-base-cased-distilled-squad"),sp.forEach(t),ep.forEach(t),_o=o(Z," (le \xAB squad \xBB dans le nom vient du jeu de donn\xE9es sur lequel le mod\xE8le a \xE9t\xE9 "),Xt=u(Z,"EM",{});var tp=p(Xt);bo=o(tp,"finetun\xE9"),tp.forEach(t),vo=o(Z,", nous parlerons davantage de ce jeu de donn\xE9es dans le "),rt=u(Z,"A",{href:!0});var np=p(rt);go=o(np,"chapitre 7"),np.forEach(t),xo=o(Z,") :"),Z.forEach(t),wr=f(e),le.l(e),at=f(e),ot=u(e,"P",{});var rp=p(ot);$o=o(rp,"Notez que nous tokenizons la question et le contexte comme une paire, la question en premier."),rp.forEach(t),jr=f(e),Ge=u(e,"DIV",{class:!0});var Oa=p(Ge);ps=u(Oa,"IMG",{class:!0,src:!0,alt:!0}),qo=f(Oa),ms=u(Oa,"IMG",{class:!0,src:!0,alt:!0}),Oa.forEach(t),Er=f(e),I=u(e,"P",{});var ee=p(I);ko=o(ee,"Les mod\xE8les de r\xE9ponse aux questions fonctionnent un peu diff\xE9remment des mod\xE8les que nous avons vus jusqu\u2019\xE0 pr\xE9sent. En utilisant l\u2019image ci-dessus comme exemple, le mod\xE8le a \xE9t\xE9 entra\xEEn\xE9 \xE0 pr\xE9dire l\u2019index du "),Zt=u(ee,"EM",{});var ap=p(Zt);wo=o(ap,"token"),ap.forEach(t),jo=o(ee," de d\xE9but de la r\xE9ponse (ici 21) et l\u2019index du "),en=u(ee,"EM",{});var op=p(en);Eo=o(op,"token"),op.forEach(t),yo=o(ee," o\xF9 la r\xE9ponse se termine (ici 24). C\u2019est pourquoi ces mod\xE8les ne retournent pas un tenseur de logits mais deux : un pour les logits correspondant au "),sn=u(ee,"EM",{});var ip=p(sn);Po=o(ip,"token"),ip.forEach(t),zo=o(ee," de d\xE9but de la r\xE9ponse, et un pour les logits correspondant au "),tn=u(ee,"EM",{});var lp=p(tn);To=o(lp,"token"),lp.forEach(t),No=o(ee," de fin de la r\xE9ponse. Puisque dans ce cas nous n\u2019avons qu\u2019une seule entr\xE9e contenant 66 "),nn=u(ee,"EM",{});var up=p(nn);Co=o(up,"tokens"),up.forEach(t),Lo=o(ee,", nous obtenons :"),ee.forEach(t),yr=f(e),x(cs.$$.fragment,e),Pr=f(e),pe.l(e),it=f(e),M=u(e,"P",{});var V=p(M);So=o(V,"Pour convertir ces logits en probabilit\xE9s, nous allons appliquer une fonction softmax. Mais avant cela, nous devons nous assurer de masquer les indices qui ne font pas partie du contexte. Notre entr\xE9e est "),rn=u(V,"CODE",{});var pp=p(rn);Ao=o(pp,"[CLS] question [SEP] contexte [SEP]"),pp.forEach(t),Do=o(V," donc nous devons masquer les "),an=u(V,"EM",{});var mp=p(an);Mo=o(mp,"tokens"),mp.forEach(t),Fo=o(V," de la question ainsi que le "),on=u(V,"EM",{});var cp=p(on);Oo=o(cp,"token"),cp.forEach(t),Io=f(V),ln=u(V,"CODE",{});var dp=p(ln);Uo=o(dp,"[SEP]"),dp.forEach(t),Go=o(V,". Nous garderons cependant le "),un=u(V,"EM",{});var fp=p(un);Jo=o(fp,"token"),fp.forEach(t),Ko=f(V),pn=u(V,"CODE",{});var hp=p(pn);Wo=o(hp,"[CLS]"),hp.forEach(t),Qo=o(V," car certains mod\xE8les l\u2019utilisent pour indiquer que la r\xE9ponse n\u2019est pas dans le contexte."),V.forEach(t),zr=f(e),Qe=u(e,"P",{});var Ia=p(Qe);Ho=o(Ia,"Puisque nous appliquerons une fonction softmax par la suite, il nous suffit de remplacer les logits que nous voulons masquer par un grand nombre n\xE9gatif. Ici, nous utilisons "),mn=u(Ia,"CODE",{});var _p=p(mn);Ro=o(_p,"-10000"),_p.forEach(t),Vo=o(Ia," :"),Ia.forEach(t),Tr=f(e),ce.l(e),lt=f(e),ut=u(e,"P",{});var bp=p(ut);Bo=o(bp,"Maintenant que nous avons correctement masqu\xE9 les logits correspondant aux positions que nous ne voulons pas pr\xE9dire, nous pouvons appliquer la softmax :"),bp.forEach(t),Nr=f(e),fe.l(e),pt=f(e),U=u(e,"P",{});var se=p(U);Yo=o(se,"A ce stade, nous pourrions prendre l\u2019argmax des probabilit\xE9s de d\xE9but et de fin mais nous pourrions nous retrouver avec un indice de d\xE9but sup\xE9rieur \xE0 l\u2019indice de fin. Nous devons donc prendre quelques pr\xE9cautions suppl\xE9mentaires. Nous allons calculer les probabilit\xE9s de chaque "),cn=u(se,"CODE",{});var vp=p(cn);Xo=o(vp,"start_index"),vp.forEach(t),Zo=o(se," et "),dn=u(se,"CODE",{});var gp=p(dn);ei=o(gp,"end_index"),gp.forEach(t),si=o(se," possible o\xF9 "),fn=u(se,"CODE",{});var xp=p(fn);ti=o(xp,"start_index<=end_index"),xp.forEach(t),ni=o(se,", puis nous prendrons le "),hn=u(se,"EM",{});var $p=p(hn);ri=o($p,"tuple"),$p.forEach(t),ai=f(se),_n=u(se,"CODE",{});var qp=p(_n);oi=o(qp,"(start_index, end_index)"),qp.forEach(t),ii=o(se," avec la plus grande probabilit\xE9."),se.forEach(t),Cr=f(e),K=u(e,"P",{});var ye=p(K);li=o(ye,"En supposant que les \xE9v\xE9nements \xAB La r\xE9ponse commence \xE0 "),bn=u(ye,"CODE",{});var kp=p(bn);ui=o(kp,"start_index"),kp.forEach(t),pi=o(ye," \xBB et \xAB La r\xE9ponse se termine \xE0 "),vn=u(ye,"CODE",{});var wp=p(vn);mi=o(wp,"end_index"),wp.forEach(t),ci=o(ye," \xBB sont ind\xE9pendants, la probabilit\xE9 que la r\xE9ponse commence \xE0 "),gn=u(ye,"CODE",{});var jp=p(gn);di=o(jp,"end_index"),jp.forEach(t),fi=o(ye," et se termine \xE0 "),xn=u(ye,"CODE",{});var Ep=p(xn);hi=o(Ep,"end_index"),Ep.forEach(t),_i=o(ye,` est :
`),Lr=Nm(ye),ye.forEach(t),Sr=f(e),ze=u(e,"P",{});var Mt=p(ze);bi=o(Mt,"Ainsi, pour calculer tous les scores, il suffit de calculer tous les produits "),Ar=Nm(Mt),Dr=o(Mt," o\xF9 "),$n=u(Mt,"CODE",{});var yp=p($n);vi=o(yp,"start_index <= end_index"),yp.forEach(t),gi=o(Mt,"."),Mt.forEach(t),Mr=f(e),mt=u(e,"P",{});var Pp=p(mt);xi=o(Pp,"Calculons d\u2019abord tous les produits possibles :"),Pp.forEach(t),Fr=f(e),x(ds.$$.fragment,e),Or=f(e),_e.l(e),ct=f(e),Q=u(e,"P",{});var De=p(Q);$i=o(De,"Il ne nous reste plus qu\u2019\xE0 obtenir l\u2019indice du maximum. Puisque PyTorch retourne l\u2019index dans le tenseur aplati, nous devons utiliser les op\xE9rations division "),qn=u(De,"CODE",{});var zp=p(qn);qi=o(zp,"//"),zp.forEach(t),ki=o(De," et modulo "),kn=u(De,"CODE",{});var Tp=p(kn);wi=o(Tp,"%"),Tp.forEach(t),ji=o(De," pour obtenir le "),wn=u(De,"CODE",{});var Np=p(wn);Ei=o(Np,"start_index"),Np.forEach(t),yi=o(De," et le "),jn=u(De,"CODE",{});var Cp=p(jn);Pi=o(Cp,"end_index"),Cp.forEach(t),zi=o(De," :"),De.forEach(t),Ir=f(e),x(fs.$$.fragment,e),Ur=f(e),dt=u(e,"P",{});var Lp=p(dt);Ti=o(Lp,"Nous n\u2019avons pas encore tout \xE0 fait termin\xE9, mais au moins nous avons d\xE9j\xE0 le score correct pour la r\xE9ponse (vous pouvez le v\xE9rifier en le comparant au premier r\xE9sultat de la section pr\xE9c\xE9dente) :"),Lp.forEach(t),Gr=f(e),x(hs.$$.fragment,e),Jr=f(e),x(He.$$.fragment,e),Kr=f(e),G=u(e,"P",{});var te=p(G);Ni=o(te,"Nous avons les "),En=u(te,"CODE",{});var Sp=p(En);Ci=o(Sp,"start_index"),Sp.forEach(t),Li=o(te," et "),yn=u(te,"CODE",{});var Ap=p(yn);Si=o(Ap,"end_index"),Ap.forEach(t),Ai=o(te," de la r\xE9ponse en termes de "),Pn=u(te,"EM",{});var Dp=p(Pn);Di=o(Dp,"tokens"),Dp.forEach(t),Mi=o(te,". Maintenant nous devons juste convertir en indices de caract\xE8res dans le contexte. C\u2019est l\xE0 que les "),zn=u(te,"EM",{});var Mp=p(zn);Fi=o(Mp,"offsets"),Mp.forEach(t),Oi=o(te," seront super utiles. Nous pouvons les saisir et les utiliser comme nous l\u2019avons fait dans la t\xE2che de classification des "),Tn=u(te,"EM",{});var Fp=p(Tn);Ii=o(Fp,"tokens"),Fp.forEach(t),Ui=o(te," :"),te.forEach(t),Wr=f(e),x(_s.$$.fragment,e),Qr=f(e),ft=u(e,"P",{});var Op=p(ft);Gi=o(Op,"Il ne nous reste plus qu\u2019\xE0 tout formater pour obtenir notre r\xE9sultat :"),Op.forEach(t),Hr=f(e),x(bs.$$.fragment,e),Rr=f(e),x(vs.$$.fragment,e),Vr=f(e),ht=u(e,"P",{});var Ip=p(ht);Ji=o(Ip,"Super ! C\u2019est la m\xEAme chose que dans notre premier exemple !"),Ip.forEach(t),Br=f(e),x(Re.$$.fragment,e),Yr=f(e),Je=u(e,"H2",{class:!0});var Ua=p(Je);Ve=u(Ua,"A",{id:!0,class:!0,href:!0});var Up=p(Ve);Nn=u(Up,"SPAN",{});var Gp=p(Nn);x(gs.$$.fragment,Gp),Gp.forEach(t),Up.forEach(t),Ki=f(Ua),Cn=u(Ua,"SPAN",{});var Jp=p(Cn);Wi=o(Jp,"Gestion des contextes longs"),Jp.forEach(t),Ua.forEach(t),Xr=f(e),Te=u(e,"P",{});var Ft=p(Te);Qi=o(Ft,"Si nous essayons de tokeniser la question et le long contexte que nous avons utilis\xE9 dans l\u2019exemple pr\xE9c\xE9demment, nous obtenons un nombre de "),Ln=u(Ft,"EM",{});var Kp=p(Ln);Hi=o(Kp,"tokens"),Kp.forEach(t),Ri=o(Ft," sup\xE9rieur \xE0 la longueur maximale utilis\xE9e dans le pipeline "),Sn=u(Ft,"CODE",{});var Wp=p(Sn);Vi=o(Wp,"question-answering"),Wp.forEach(t),Bi=o(Ft," (qui est de 384) :"),Ft.forEach(t),Zr=f(e),x(xs.$$.fragment,e),ea=f(e),x($s.$$.fragment,e),sa=f(e),Be=u(e,"P",{});var Ga=p(Be);Yi=o(Ga,"Nous devrons donc tronquer nos entr\xE9es \xE0 cette longueur maximale. Il y a plusieurs fa\xE7ons de le faire mais nous ne voulons pas tronquer la question, seulement le contexte. Puisque le contexte est la deuxi\xE8me phrase, nous utilisons la strat\xE9gie de troncature "),An=u(Ga,"CODE",{});var Qp=p(An);Xi=o(Qp,'"only_second"'),Qp.forEach(t),Zi=o(Ga,". Le probl\xE8me qui se pose alors est que la r\xE9ponse \xE0 la question peut ne pas se trouver dans le contexte tronqu\xE9. Ici, par exemple, nous avons choisi une question dont la r\xE9ponse se trouve vers la fin du contexte, et lorsque nous la tronquons, cette r\xE9ponse n\u2019est pas pr\xE9sente :"),Ga.forEach(t),ta=f(e),x(qs.$$.fragment,e),na=f(e),x(ks.$$.fragment,e),ra=f(e),Ye=u(e,"P",{});var Ja=p(Ye);el=o(Ja,"Cela signifie que le mod\xE8le a du mal \xE0 trouver la bonne r\xE9ponse. Pour r\xE9soudre ce probl\xE8me, le pipeline de "),Dn=u(Ja,"CODE",{});var Hp=p(Dn);sl=o(Hp,"question-answering"),Hp.forEach(t),tl=o(Ja," nous permet de diviser le contexte en morceaux plus petits, en sp\xE9cifiant la longueur maximale. Pour s\u2019assurer que nous ne divisons pas le contexte exactement au mauvais endroit pour permettre de trouver la r\xE9ponse, il inclut \xE9galement un certain chevauchement entre les morceaux."),Ja.forEach(t),aa=f(e),Y=u(e,"P",{});var ss=p(Y);nl=o(ss,"Nous pouvons demander au "),Mn=u(ss,"EM",{});var Rp=p(Mn);rl=o(Rp,"tokenizer"),Rp.forEach(t),al=o(ss," (rapide ou lent) de le faire pour nous en ajoutant "),Fn=u(ss,"CODE",{});var Vp=p(Fn);ol=o(Vp,"return_overflowing_tokens=True"),Vp.forEach(t),il=o(ss,", et nous pouvons sp\xE9cifier le chevauchement que nous voulons avec l\u2019argument "),On=u(ss,"CODE",{});var Bp=p(On);ll=o(Bp,"stride"),Bp.forEach(t),ul=o(ss,". Voici un exemple, en utilisant une phrase plus petite :"),ss.forEach(t),oa=f(e),x(ws.$$.fragment,e),ia=f(e),x(js.$$.fragment,e),la=f(e),H=u(e,"P",{});var Me=p(H);pl=o(Me,"Comme on peut le voir, la phrase a \xE9t\xE9 d\xE9coup\xE9e en morceaux de telle sorte que chaque entr\xE9e dans "),In=u(Me,"CODE",{});var Yp=p(In);ml=o(Yp,'inputs["input_ids"]'),Yp.forEach(t),cl=o(Me," a au maximum 6 "),Un=u(Me,"EM",{});var Xp=p(Un);dl=o(Xp,"tokens"),Xp.forEach(t),fl=o(Me," (il faudrait ajouter du "),Gn=u(Me,"EM",{});var Zp=p(Gn);hl=o(Zp,"padding"),Zp.forEach(t),_l=o(Me," pour que la derni\xE8re entr\xE9e ait la m\xEAme taille que les autres) et il y a un chevauchement de 2 "),Jn=u(Me,"EM",{});var em=p(Jn);bl=o(em,"tokens"),em.forEach(t),vl=o(Me," entre chacune des entr\xE9es."),Me.forEach(t),ua=f(e),_t=u(e,"P",{});var sm=p(_t);gl=o(sm,"Regardons de plus pr\xE8s le r\xE9sultat de la tok\xE9nisation :"),sm.forEach(t),pa=f(e),x(Es.$$.fragment,e),ma=f(e),x(ys.$$.fragment,e),ca=f(e),Ne=u(e,"P",{});var Ot=p(Ne);xl=o(Ot,"Comme pr\xE9vu, nous obtenons les identifiants d\u2019entr\xE9e et un masque d\u2019attention. La derni\xE8re cl\xE9, "),Kn=u(Ot,"CODE",{});var tm=p(Kn);$l=o(tm,"overflow_to_sample_mapping"),tm.forEach(t),ql=o(Ot,", est une carte qui nous indique \xE0 quelle phrase correspond chacun des r\xE9sultats. Ici nous avons 7 r\xE9sultats qui proviennent tous de la (seule) phrase que nous avons pass\xE9e au "),Wn=u(Ot,"EM",{});var nm=p(Wn);kl=o(nm,"tokenizer"),nm.forEach(t),wl=o(Ot," :"),Ot.forEach(t),da=f(e),x(Ps.$$.fragment,e),fa=f(e),x(zs.$$.fragment,e),ha=f(e),bt=u(e,"P",{});var rm=p(bt);jl=o(rm,"C\u2019est plus utile lorsque nous tokenisons plusieurs phrases ensemble. Par exemple :"),rm.forEach(t),_a=f(e),x(Ts.$$.fragment,e),ba=f(e),vt=u(e,"P",{});var am=p(vt);El=o(am,"nous donne :"),am.forEach(t),va=f(e),x(Ns.$$.fragment,e),ga=f(e),gt=u(e,"P",{});var om=p(gt);yl=o(om,"ce qui signifie que la premi\xE8re phrase est divis\xE9e en 7 morceaux comme pr\xE9c\xE9demment et que les 4 morceaux suivants proviennent de la deuxi\xE8me phrase."),om.forEach(t),xa=f(e),L=u(e,"P",{});var J=p(L);Pl=o(J,"Revenons maintenant \xE0 notre contexte long. Par d\xE9faut, le pipeline "),Qn=u(J,"CODE",{});var im=p(Qn);zl=o(im,"question-answering"),im.forEach(t),Tl=o(J," utilise une longueur maximale de 384 et un "),Hn=u(J,"EM",{});var lm=p(Hn);Nl=o(lm,"stride"),lm.forEach(t),Cl=o(J," de 128, qui correspondent \xE0 la fa\xE7on dont le mod\xE8le a \xE9t\xE9 "),Rn=u(J,"EM",{});var um=p(Rn);Ll=o(um,"finetun\xE9"),um.forEach(t),Sl=o(J," (vous pouvez ajuster ces param\xE8tres en passant les arguments "),Vn=u(J,"CODE",{});var pm=p(Vn);Al=o(pm,"max_seq_len"),pm.forEach(t),Dl=o(J," et "),Bn=u(J,"CODE",{});var mm=p(Bn);Ml=o(mm,"stride"),mm.forEach(t),Fl=o(J," lorsque vous appelez le pipeline). Nous utiliserons donc ces param\xE8tres lors de la tokenisation. Nous ajouterons aussi du "),Yn=u(J,"EM",{});var cm=p(Yn);Ol=o(cm,"padding"),cm.forEach(t),Il=o(J," (pour avoir des \xE9chantillons de m\xEAme longueur afin de pouvoir construire des tenseurs) ainsi que demander les "),Xn=u(J,"EM",{});var dm=p(Xn);Ul=o(dm,"offsets"),dm.forEach(t),Gl=o(J," :"),J.forEach(t),$a=f(e),x(Cs.$$.fragment,e),qa=f(e),R=u(e,"P",{});var Fe=p(R);Jl=o(Fe,"Ces "),Zn=u(Fe,"CODE",{});var fm=p(Zn);Kl=o(fm,"inputs"),fm.forEach(t),Wl=o(Fe," contiendront les identifiants d\u2019entr\xE9e, les masques d\u2019attention que le mod\xE8le attend, ainsi que les "),er=u(Fe,"EM",{});var hm=p(er);Ql=o(hm,"offsets"),hm.forEach(t),Hl=o(Fe," et le "),sr=u(Fe,"CODE",{});var _m=p(sr);Rl=o(_m,"overflow_to_sample_mapping"),_m.forEach(t),Vl=o(Fe," dont on vient de parler. Puisque ces deux \xE9l\xE9ments ne sont pas des param\xE8tres utilis\xE9s par le mod\xE8le, nous allons les sortir des "),tr=u(Fe,"CODE",{});var bm=p(tr);Bl=o(bm,"inputs"),bm.forEach(t),Yl=o(Fe," (et nous ne stockerons pas la correspondance puisqu\u2019elle n\u2019est pas utile ici) avant de le convertir en tenseur :"),Fe.forEach(t),ka=f(e),ve.l(e),xt=f(e),$t=u(e,"P",{});var vm=p($t);Xl=o(vm,"Notre contexte long a \xE9t\xE9 divis\xE9 en deux, ce qui signifie qu\u2019apr\xE8s avoir travers\xE9 notre mod\xE8le, nous aurons deux ensembles de logits de d\xE9but et de fin :"),vm.forEach(t),wa=f(e),x(Ls.$$.fragment,e),ja=f(e),xe.l(e),qt=f(e),X=u(e,"P",{});var ts=p(X);Zl=o(ts,"Comme pr\xE9c\xE9demment, nous masquons d\u2019abord les "),nr=u(ts,"EM",{});var gm=p(nr);eu=o(gm,"tokens"),gm.forEach(t),su=o(ts," qui ne font pas partie du contexte avant de prendre le softmax. Nous masquons \xE9galement tous les "),rr=u(ts,"EM",{});var xm=p(rr);tu=o(xm,"tokens"),xm.forEach(t),nu=o(ts," de "),ar=u(ts,"EM",{});var $m=p(ar);ru=o($m,"padding"),$m.forEach(t),au=o(ts," (tels que signal\xE9s par le masque d\u2019attention) :"),ts.forEach(t),Ea=f(e),qe.l(e),kt=f(e),wt=u(e,"P",{});var qm=p(wt);ou=o(qm,"Ensuite, nous pouvons utiliser la fonction softmax pour convertir nos logits en probabilit\xE9s :"),qm.forEach(t),ya=f(e),we.l(e),jt=f(e),Et=u(e,"P",{});var km=p(Et);iu=o(km,"L\u2019\xE9tape suivante est similaire \xE0 ce que nous avons fait pour le petit contexte mais nous la r\xE9p\xE9tons pour chacun de nos deux morceaux. Nous attribuons un score \xE0 tous les espaces de r\xE9ponse possibles puis nous prenons l\u2019espace ayant le meilleur score :"),km.forEach(t),Pa=f(e),Ee.l(e),yt=f(e),x(Ss.$$.fragment,e),za=f(e),Xe=u(e,"P",{});var Ka=p(Xe);lu=o(Ka,"Ces deux candidats correspondent aux meilleures r\xE9ponses que le mod\xE8le a pu trouver dans chaque morceau. Le mod\xE8le est beaucoup plus confiant dans le fait que la bonne r\xE9ponse se trouve dans la deuxi\xE8me partie (ce qui est bon signe !). Il ne nous reste plus qu\u2019\xE0 faire correspondre ces deux espaces de "),or=u(Ka,"EM",{});var wm=p(or);uu=o(wm,"tokens"),wm.forEach(t),pu=o(Ka," \xE0 des espaces de caract\xE8res dans le contexte (nous n\u2019avons besoin de faire correspondre que le second pour avoir notre r\xE9ponse, mais il est int\xE9ressant de voir ce que le mod\xE8le a choisi dans le premier morceau)."),Ka.forEach(t),Ta=f(e),x(Ze.$$.fragment,e),Na=f(e),Ce=u(e,"P",{});var It=p(Ce);mu=o(It,"Le "),ir=u(It,"CODE",{});var jm=p(ir);cu=o(jm,"offsets"),jm.forEach(t),du=o(It," que nous avons saisi plus t\xF4t est en fait une liste d\u2019"),lr=u(It,"EM",{});var Em=p(lr);fu=o(Em,"offsets"),Em.forEach(t),hu=o(It," avec une liste par morceau de texte :"),It.forEach(t),Ca=f(e),x(As.$$.fragment,e),La=f(e),x(Ds.$$.fragment,e),Sa=f(e),Pt=u(e,"P",{});var ym=p(Pt);_u=o(ym,"Si nous ignorons le premier r\xE9sultat, nous obtenons le m\xEAme r\xE9sultat que notre pipeline pour ce long contexte !"),ym.forEach(t),Aa=f(e),x(es.$$.fragment,e),Da=f(e),Le=u(e,"P",{});var Ut=p(Le);bu=o(Ut,"Ceci conclut notre plong\xE9e en profondeur dans les capacit\xE9s du "),ur=u(Ut,"EM",{});var Pm=p(ur);vu=o(Pm,"tokenizer"),Pm.forEach(t),gu=o(Ut,". Nous mettrons \xE0 nouveau tout cela en pratique dans le prochain chapitre, lorsque nous vous montrerons comment "),pr=u(Ut,"EM",{});var zm=p(pr);xu=o(zm,"finetuner"),zm.forEach(t),$u=o(Ut," un mod\xE8le sur une s\xE9rie de t\xE2ches NLP courantes."),Ut.forEach(t),this.h()},h(){N(r,"name","hf:doc:metadata"),N(r,"content",JSON.stringify(vc)),N(w,"id","itokenizeri-rapide-dans-le-pipeline-de-qa"),N(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),N(w,"href","#itokenizeri-rapide-dans-le-pipeline-de-qa"),N(v,"class","relative group"),N(Ke,"id","utilisation-du-pipeline-de-questionanswering"),N(Ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),N(Ke,"href","#utilisation-du-pipeline-de-questionanswering"),N(Ie,"class","relative group"),N(st,"href","/course/fr/chapter1"),N(We,"id","utilisation-dun-modle-pour-rpondre-des-questions"),N(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),N(We,"href","#utilisation-dun-modle-pour-rpondre-des-questions"),N(Ue,"class","relative group"),N(us,"href","https://huggingface.co/distilbert-base-cased-distilled-squad"),N(us,"rel","nofollow"),N(rt,"href","/course/fr/chapter7/7"),N(ps,"class","block dark:hidden"),Cm(ps.src,qu="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter6/question_tokens.svg")||N(ps,"src",qu),N(ps,"alt","An example of tokenization of question and context"),N(ms,"class","hidden dark:block"),Cm(ms.src,ku="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter6/question_tokens-dark.svg")||N(ms,"src",ku),N(ms,"alt","An example of tokenization of question and context"),N(Ge,"class","flex justify-center"),Lr.a=null,Ar.a=Dr,N(Ve,"id","gestion-des-contextes-longs"),N(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),N(Ve,"href","#gestion-des-contextes-longs"),N(Je,"class","relative group")},m(e,i){s(document.head,r),m(e,c,i),$(n,e,i),m(e,b,i),m(e,v,i),s(v,w),s(w,P),$(T,P,null),s(v,C),s(v,z),s(z,S),s(S,A),s(z,D),m(e,W,i),Ms[E].m(e,i),m(e,B,i),m(e,F,i),s(F,Oe),s(F,Gt),s(Gt,Ha),s(F,Ra),s(F,Jt),s(Jt,Va),s(F,Ba),m(e,fr,i),Fs[ae].m(e,i),m(e,Zs,i),m(e,Ie,i),s(Ie,Ke),s(Ke,Kt),$(ns,Kt,null),s(Ie,Ya),s(Ie,et),s(et,Xa),s(et,Wt),s(Wt,Za),m(e,hr,i),m(e,Pe,i),s(Pe,eo),s(Pe,st),s(st,so),s(Pe,to),s(Pe,Qt),s(Qt,no),s(Pe,ro),m(e,_r,i),$(rs,e,i),m(e,br,i),$(as,e,i),m(e,vr,i),m(e,tt,i),s(tt,ao),m(e,gr,i),$(os,e,i),m(e,xr,i),$(is,e,i),m(e,$r,i),m(e,nt,i),s(nt,oo),m(e,qr,i),m(e,Ue,i),s(Ue,We),s(We,Ht),$(ls,Ht,null),s(Ue,io),s(Ue,Rt),s(Rt,lo),m(e,kr,i),m(e,O,i),s(O,uo),s(O,Vt),s(Vt,po),s(O,mo),s(O,Bt),s(Bt,co),s(O,fo),s(O,us),s(us,Yt),s(Yt,ho),s(O,_o),s(O,Xt),s(Xt,bo),s(O,vo),s(O,rt),s(rt,go),s(O,xo),m(e,wr,i),Os[ie].m(e,i),m(e,at,i),m(e,ot,i),s(ot,$o),m(e,jr,i),m(e,Ge,i),s(Ge,ps),s(Ge,qo),s(Ge,ms),m(e,Er,i),m(e,I,i),s(I,ko),s(I,Zt),s(Zt,wo),s(I,jo),s(I,en),s(en,Eo),s(I,yo),s(I,sn),s(sn,Po),s(I,zo),s(I,tn),s(tn,To),s(I,No),s(I,nn),s(nn,Co),s(I,Lo),m(e,yr,i),$(cs,e,i),m(e,Pr,i),Is[ue].m(e,i),m(e,it,i),m(e,M,i),s(M,So),s(M,rn),s(rn,Ao),s(M,Do),s(M,an),s(an,Mo),s(M,Fo),s(M,on),s(on,Oo),s(M,Io),s(M,ln),s(ln,Uo),s(M,Go),s(M,un),s(un,Jo),s(M,Ko),s(M,pn),s(pn,Wo),s(M,Qo),m(e,zr,i),m(e,Qe,i),s(Qe,Ho),s(Qe,mn),s(mn,Ro),s(Qe,Vo),m(e,Tr,i),Us[me].m(e,i),m(e,lt,i),m(e,ut,i),s(ut,Bo),m(e,Nr,i),Gs[de].m(e,i),m(e,pt,i),m(e,U,i),s(U,Yo),s(U,cn),s(cn,Xo),s(U,Zo),s(U,dn),s(dn,ei),s(U,si),s(U,fn),s(fn,ti),s(U,ni),s(U,hn),s(hn,ri),s(U,ai),s(U,_n),s(_n,oi),s(U,ii),m(e,Cr,i),m(e,K,i),s(K,li),s(K,bn),s(bn,ui),s(K,pi),s(K,vn),s(vn,mi),s(K,ci),s(K,gn),s(gn,di),s(K,fi),s(K,xn),s(xn,hi),s(K,_i),Lr.m(Am,K),m(e,Sr,i),m(e,ze,i),s(ze,bi),Ar.m(Dm,ze),s(ze,Dr),s(ze,$n),s($n,vi),s(ze,gi),m(e,Mr,i),m(e,mt,i),s(mt,xi),m(e,Fr,i),$(ds,e,i),m(e,Or,i),Js[he].m(e,i),m(e,ct,i),m(e,Q,i),s(Q,$i),s(Q,qn),s(qn,qi),s(Q,ki),s(Q,kn),s(kn,wi),s(Q,ji),s(Q,wn),s(wn,Ei),s(Q,yi),s(Q,jn),s(jn,Pi),s(Q,zi),m(e,Ir,i),$(fs,e,i),m(e,Ur,i),m(e,dt,i),s(dt,Ti),m(e,Gr,i),$(hs,e,i),m(e,Jr,i),$(He,e,i),m(e,Kr,i),m(e,G,i),s(G,Ni),s(G,En),s(En,Ci),s(G,Li),s(G,yn),s(yn,Si),s(G,Ai),s(G,Pn),s(Pn,Di),s(G,Mi),s(G,zn),s(zn,Fi),s(G,Oi),s(G,Tn),s(Tn,Ii),s(G,Ui),m(e,Wr,i),$(_s,e,i),m(e,Qr,i),m(e,ft,i),s(ft,Gi),m(e,Hr,i),$(bs,e,i),m(e,Rr,i),$(vs,e,i),m(e,Vr,i),m(e,ht,i),s(ht,Ji),m(e,Br,i),$(Re,e,i),m(e,Yr,i),m(e,Je,i),s(Je,Ve),s(Ve,Nn),$(gs,Nn,null),s(Je,Ki),s(Je,Cn),s(Cn,Wi),m(e,Xr,i),m(e,Te,i),s(Te,Qi),s(Te,Ln),s(Ln,Hi),s(Te,Ri),s(Te,Sn),s(Sn,Vi),s(Te,Bi),m(e,Zr,i),$(xs,e,i),m(e,ea,i),$($s,e,i),m(e,sa,i),m(e,Be,i),s(Be,Yi),s(Be,An),s(An,Xi),s(Be,Zi),m(e,ta,i),$(qs,e,i),m(e,na,i),$(ks,e,i),m(e,ra,i),m(e,Ye,i),s(Ye,el),s(Ye,Dn),s(Dn,sl),s(Ye,tl),m(e,aa,i),m(e,Y,i),s(Y,nl),s(Y,Mn),s(Mn,rl),s(Y,al),s(Y,Fn),s(Fn,ol),s(Y,il),s(Y,On),s(On,ll),s(Y,ul),m(e,oa,i),$(ws,e,i),m(e,ia,i),$(js,e,i),m(e,la,i),m(e,H,i),s(H,pl),s(H,In),s(In,ml),s(H,cl),s(H,Un),s(Un,dl),s(H,fl),s(H,Gn),s(Gn,hl),s(H,_l),s(H,Jn),s(Jn,bl),s(H,vl),m(e,ua,i),m(e,_t,i),s(_t,gl),m(e,pa,i),$(Es,e,i),m(e,ma,i),$(ys,e,i),m(e,ca,i),m(e,Ne,i),s(Ne,xl),s(Ne,Kn),s(Kn,$l),s(Ne,ql),s(Ne,Wn),s(Wn,kl),s(Ne,wl),m(e,da,i),$(Ps,e,i),m(e,fa,i),$(zs,e,i),m(e,ha,i),m(e,bt,i),s(bt,jl),m(e,_a,i),$(Ts,e,i),m(e,ba,i),m(e,vt,i),s(vt,El),m(e,va,i),$(Ns,e,i),m(e,ga,i),m(e,gt,i),s(gt,yl),m(e,xa,i),m(e,L,i),s(L,Pl),s(L,Qn),s(Qn,zl),s(L,Tl),s(L,Hn),s(Hn,Nl),s(L,Cl),s(L,Rn),s(Rn,Ll),s(L,Sl),s(L,Vn),s(Vn,Al),s(L,Dl),s(L,Bn),s(Bn,Ml),s(L,Fl),s(L,Yn),s(Yn,Ol),s(L,Il),s(L,Xn),s(Xn,Ul),s(L,Gl),m(e,$a,i),$(Cs,e,i),m(e,qa,i),m(e,R,i),s(R,Jl),s(R,Zn),s(Zn,Kl),s(R,Wl),s(R,er),s(er,Ql),s(R,Hl),s(R,sr),s(sr,Rl),s(R,Vl),s(R,tr),s(tr,Bl),s(R,Yl),m(e,ka,i),Ks[be].m(e,i),m(e,xt,i),m(e,$t,i),s($t,Xl),m(e,wa,i),$(Ls,e,i),m(e,ja,i),Ws[ge].m(e,i),m(e,qt,i),m(e,X,i),s(X,Zl),s(X,nr),s(nr,eu),s(X,su),s(X,rr),s(rr,tu),s(X,nu),s(X,ar),s(ar,ru),s(X,au),m(e,Ea,i),Qs[$e].m(e,i),m(e,kt,i),m(e,wt,i),s(wt,ou),m(e,ya,i),Hs[ke].m(e,i),m(e,jt,i),m(e,Et,i),s(Et,iu),m(e,Pa,i),Rs[je].m(e,i),m(e,yt,i),$(Ss,e,i),m(e,za,i),m(e,Xe,i),s(Xe,lu),s(Xe,or),s(or,uu),s(Xe,pu),m(e,Ta,i),$(Ze,e,i),m(e,Na,i),m(e,Ce,i),s(Ce,mu),s(Ce,ir),s(ir,cu),s(Ce,du),s(Ce,lr),s(lr,fu),s(Ce,hu),m(e,Ca,i),$(As,e,i),m(e,La,i),$(Ds,e,i),m(e,Sa,i),m(e,Pt,i),s(Pt,_u),m(e,Aa,i),$(es,e,i),m(e,Da,i),m(e,Le,i),s(Le,bu),s(Le,ur),s(ur,vu),s(Le,gu),s(Le,pr),s(pr,xu),s(Le,$u),Ma=!0},p(e,[i]){const Vs={};i&1&&(Vs.fw=e[0]),n.$set(Vs);let zt=E;E=ju(e),E!==zt&&(re(),h(Ms[zt],1,1,()=>{Ms[zt]=null}),ne(),y=Ms[E],y||(y=Ms[E]=wu[E](e),y.c()),_(y,1),y.m(B.parentNode,B));let Tt=ae;ae=yu(e),ae!==Tt&&(re(),h(Fs[Tt],1,1,()=>{Fs[Tt]=null}),ne(),oe=Fs[ae],oe||(oe=Fs[ae]=Eu[ae](e),oe.c()),_(oe,1),oe.m(Zs.parentNode,Zs));let Bs=ie;ie=zu(e),ie!==Bs&&(re(),h(Os[Bs],1,1,()=>{Os[Bs]=null}),ne(),le=Os[ie],le||(le=Os[ie]=Pu[ie](e),le.c()),_(le,1),le.m(at.parentNode,at));let Nt=ue;ue=Nu(e),ue!==Nt&&(re(),h(Is[Nt],1,1,()=>{Is[Nt]=null}),ne(),pe=Is[ue],pe||(pe=Is[ue]=Tu[ue](e),pe.c()),_(pe,1),pe.m(it.parentNode,it));let Se=me;me=Lu(e),me!==Se&&(re(),h(Us[Se],1,1,()=>{Us[Se]=null}),ne(),ce=Us[me],ce||(ce=Us[me]=Cu[me](e),ce.c()),_(ce,1),ce.m(lt.parentNode,lt));let Ct=de;de=Au(e),de!==Ct&&(re(),h(Gs[Ct],1,1,()=>{Gs[Ct]=null}),ne(),fe=Gs[de],fe||(fe=Gs[de]=Su[de](e),fe.c()),_(fe,1),fe.m(pt.parentNode,pt));let Lt=he;he=Mu(e),he!==Lt&&(re(),h(Js[Lt],1,1,()=>{Js[Lt]=null}),ne(),_e=Js[he],_e||(_e=Js[he]=Du[he](e),_e.c()),_(_e,1),_e.m(ct.parentNode,ct));const Ys={};i&2&&(Ys.$$scope={dirty:i,ctx:e}),He.$set(Ys);const mr={};i&2&&(mr.$$scope={dirty:i,ctx:e}),Re.$set(mr);let St=be;be=Ou(e),be!==St&&(re(),h(Ks[St],1,1,()=>{Ks[St]=null}),ne(),ve=Ks[be],ve||(ve=Ks[be]=Fu[be](e),ve.c()),_(ve,1),ve.m(xt.parentNode,xt));let Xs=ge;ge=Uu(e),ge!==Xs&&(re(),h(Ws[Xs],1,1,()=>{Ws[Xs]=null}),ne(),xe=Ws[ge],xe||(xe=Ws[ge]=Iu[ge](e),xe.c()),_(xe,1),xe.m(qt.parentNode,qt));let At=$e;$e=Ju(e),$e!==At&&(re(),h(Qs[At],1,1,()=>{Qs[At]=null}),ne(),qe=Qs[$e],qe||(qe=Qs[$e]=Gu[$e](e),qe.c()),_(qe,1),qe.m(kt.parentNode,kt));let Ae=ke;ke=Wu(e),ke!==Ae&&(re(),h(Hs[Ae],1,1,()=>{Hs[Ae]=null}),ne(),we=Hs[ke],we||(we=Hs[ke]=Ku[ke](e),we.c()),_(we,1),we.m(jt.parentNode,jt));let Dt=je;je=Hu(e),je!==Dt&&(re(),h(Rs[Dt],1,1,()=>{Rs[Dt]=null}),ne(),Ee=Rs[je],Ee||(Ee=Rs[je]=Qu[je](e),Ee.c()),_(Ee,1),Ee.m(yt.parentNode,yt));const cr={};i&2&&(cr.$$scope={dirty:i,ctx:e}),Ze.$set(cr);const dr={};i&2&&(dr.$$scope={dirty:i,ctx:e}),es.$set(dr)},i(e){Ma||(_(n.$$.fragment,e),_(T.$$.fragment,e),_(y),_(oe),_(ns.$$.fragment,e),_(rs.$$.fragment,e),_(as.$$.fragment,e),_(os.$$.fragment,e),_(is.$$.fragment,e),_(ls.$$.fragment,e),_(le),_(cs.$$.fragment,e),_(pe),_(ce),_(fe),_(ds.$$.fragment,e),_(_e),_(fs.$$.fragment,e),_(hs.$$.fragment,e),_(He.$$.fragment,e),_(_s.$$.fragment,e),_(bs.$$.fragment,e),_(vs.$$.fragment,e),_(Re.$$.fragment,e),_(gs.$$.fragment,e),_(xs.$$.fragment,e),_($s.$$.fragment,e),_(qs.$$.fragment,e),_(ks.$$.fragment,e),_(ws.$$.fragment,e),_(js.$$.fragment,e),_(Es.$$.fragment,e),_(ys.$$.fragment,e),_(Ps.$$.fragment,e),_(zs.$$.fragment,e),_(Ts.$$.fragment,e),_(Ns.$$.fragment,e),_(Cs.$$.fragment,e),_(ve),_(Ls.$$.fragment,e),_(xe),_(qe),_(we),_(Ee),_(Ss.$$.fragment,e),_(Ze.$$.fragment,e),_(As.$$.fragment,e),_(Ds.$$.fragment,e),_(es.$$.fragment,e),Ma=!0)},o(e){h(n.$$.fragment,e),h(T.$$.fragment,e),h(y),h(oe),h(ns.$$.fragment,e),h(rs.$$.fragment,e),h(as.$$.fragment,e),h(os.$$.fragment,e),h(is.$$.fragment,e),h(ls.$$.fragment,e),h(le),h(cs.$$.fragment,e),h(pe),h(ce),h(fe),h(ds.$$.fragment,e),h(_e),h(fs.$$.fragment,e),h(hs.$$.fragment,e),h(He.$$.fragment,e),h(_s.$$.fragment,e),h(bs.$$.fragment,e),h(vs.$$.fragment,e),h(Re.$$.fragment,e),h(gs.$$.fragment,e),h(xs.$$.fragment,e),h($s.$$.fragment,e),h(qs.$$.fragment,e),h(ks.$$.fragment,e),h(ws.$$.fragment,e),h(js.$$.fragment,e),h(Es.$$.fragment,e),h(ys.$$.fragment,e),h(Ps.$$.fragment,e),h(zs.$$.fragment,e),h(Ts.$$.fragment,e),h(Ns.$$.fragment,e),h(Cs.$$.fragment,e),h(ve),h(Ls.$$.fragment,e),h(xe),h(qe),h(we),h(Ee),h(Ss.$$.fragment,e),h(Ze.$$.fragment,e),h(As.$$.fragment,e),h(Ds.$$.fragment,e),h(es.$$.fragment,e),Ma=!1},d(e){t(r),e&&t(c),q(n,e),e&&t(b),e&&t(v),q(T),e&&t(W),Ms[E].d(e),e&&t(B),e&&t(F),e&&t(fr),Fs[ae].d(e),e&&t(Zs),e&&t(Ie),q(ns),e&&t(hr),e&&t(Pe),e&&t(_r),q(rs,e),e&&t(br),q(as,e),e&&t(vr),e&&t(tt),e&&t(gr),q(os,e),e&&t(xr),q(is,e),e&&t($r),e&&t(nt),e&&t(qr),e&&t(Ue),q(ls),e&&t(kr),e&&t(O),e&&t(wr),Os[ie].d(e),e&&t(at),e&&t(ot),e&&t(jr),e&&t(Ge),e&&t(Er),e&&t(I),e&&t(yr),q(cs,e),e&&t(Pr),Is[ue].d(e),e&&t(it),e&&t(M),e&&t(zr),e&&t(Qe),e&&t(Tr),Us[me].d(e),e&&t(lt),e&&t(ut),e&&t(Nr),Gs[de].d(e),e&&t(pt),e&&t(U),e&&t(Cr),e&&t(K),e&&t(Sr),e&&t(ze),e&&t(Mr),e&&t(mt),e&&t(Fr),q(ds,e),e&&t(Or),Js[he].d(e),e&&t(ct),e&&t(Q),e&&t(Ir),q(fs,e),e&&t(Ur),e&&t(dt),e&&t(Gr),q(hs,e),e&&t(Jr),q(He,e),e&&t(Kr),e&&t(G),e&&t(Wr),q(_s,e),e&&t(Qr),e&&t(ft),e&&t(Hr),q(bs,e),e&&t(Rr),q(vs,e),e&&t(Vr),e&&t(ht),e&&t(Br),q(Re,e),e&&t(Yr),e&&t(Je),q(gs),e&&t(Xr),e&&t(Te),e&&t(Zr),q(xs,e),e&&t(ea),q($s,e),e&&t(sa),e&&t(Be),e&&t(ta),q(qs,e),e&&t(na),q(ks,e),e&&t(ra),e&&t(Ye),e&&t(aa),e&&t(Y),e&&t(oa),q(ws,e),e&&t(ia),q(js,e),e&&t(la),e&&t(H),e&&t(ua),e&&t(_t),e&&t(pa),q(Es,e),e&&t(ma),q(ys,e),e&&t(ca),e&&t(Ne),e&&t(da),q(Ps,e),e&&t(fa),q(zs,e),e&&t(ha),e&&t(bt),e&&t(_a),q(Ts,e),e&&t(ba),e&&t(vt),e&&t(va),q(Ns,e),e&&t(ga),e&&t(gt),e&&t(xa),e&&t(L),e&&t($a),q(Cs,e),e&&t(qa),e&&t(R),e&&t(ka),Ks[be].d(e),e&&t(xt),e&&t($t),e&&t(wa),q(Ls,e),e&&t(ja),Ws[ge].d(e),e&&t(qt),e&&t(X),e&&t(Ea),Qs[$e].d(e),e&&t(kt),e&&t(wt),e&&t(ya),Hs[ke].d(e),e&&t(jt),e&&t(Et),e&&t(Pa),Rs[je].d(e),e&&t(yt),q(Ss,e),e&&t(za),e&&t(Xe),e&&t(Ta),q(Ze,e),e&&t(Na),e&&t(Ce),e&&t(Ca),q(As,e),e&&t(La),q(Ds,e),e&&t(Sa),e&&t(Pt),e&&t(Aa),q(es,e),e&&t(Da),e&&t(Le)}}}const vc={local:"itokenizeri-rapide-dans-le-pipeline-de-qa",sections:[{local:"utilisation-du-pipeline-de-questionanswering",sections:[{local:"utilisation-dun-modle-pour-rpondre-des-questions",title:"Utilisation d'un mod\xE8le pour r\xE9pondre \xE0 des questions"}],title:"Utilisation du pipeline de `question-answering`"},{local:"gestion-des-contextes-longs",title:"Gestion des contextes longs"}],title:"<i>Tokenizer</i> rapide dans le pipeline de QA"};function gc(k,r,c){let n="pt";return Um(()=>{const b=new URLSearchParams(window.location.search);c(0,n=b.get("fw")||"pt")}),[n]}class yc extends Mm{constructor(r){super();Fm(this,r,gc,bc,Om,{})}}export{yc as default,vc as metadata};
