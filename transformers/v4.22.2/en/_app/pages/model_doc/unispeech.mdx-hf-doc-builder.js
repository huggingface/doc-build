import{S as Ys,i as Rs,s as Bs,e as n,k as h,w,t as s,M as Qs,c as a,d as o,m,a as r,x as y,h as i,b as d,G as e,g as _,y as $,q as S,o as T,B as k,v as Xs,L as St}from"../../chunks/vendor-hf-doc-builder.js";import{T as fn}from"../../chunks/Tip-hf-doc-builder.js";import{D as H}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Tt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as je}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $t}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Zs(U){let c,v,p,u,b;return u=new Tt({props:{code:`from transformers import UniSpeechModel, UniSpeechConfig

# Initializing a UniSpeech facebook/unispeech-base-960h style configuration
configuration = UniSpeechConfig()

# Initializing a model from the facebook/unispeech-base-960h style configuration
model = UniSpeechModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> UniSpeechModel, UniSpeechConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a UniSpeech facebook/unispeech-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = UniSpeechConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the facebook/unispeech-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var f=r(c);v=i(f,"Example:"),f.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,f){_(l,c,f),e(c,v),_(l,p,f),$(u,l,f),b=!0},p:St,i(l){b||(S(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),k(u,l)}}}function Gs(U){let c,v,p,u,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var f=r(c);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var C=r(p);u=i(C,"Module"),C.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,c,f),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function Js(U){let c,v,p,u,b;return u=new Tt({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("patrickvonplaten/unispeech-large-1500h-cv-timit")
model = UniSpeechModel.from_pretrained("patrickvonplaten/unispeech-large-1500h-cv-timit")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, UniSpeechModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/unispeech-large-1500h-cv-timit&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechModel.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/unispeech-large-1500h-cv-timit&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">1024</span>]`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var f=r(c);v=i(f,"Example:"),f.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,f){_(l,c,f),e(c,v),_(l,p,f),$(u,l,f),b=!0},p:St,i(l){b||(S(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),k(u,l)}}}function ei(U){let c,v,p,u,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var f=r(c);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var C=r(p);u=i(C,"Module"),C.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,c,f),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function ti(U){let c,v,p,u,b;return u=new Tt({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("patrickvonplaten/unispeech-large-1500h-cv-timit")
model = UniSpeechForCTC.from_pretrained("patrickvonplaten/unispeech-large-1500h-cv-timit")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, UniSpeechForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/unispeech-large-1500h-cv-timit&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechForCTC.from_pretrained(<span class="hljs-string">&quot;patrickvonplaten/unispeech-large-1500h-cv-timit&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;mister quilter is the apposl of the midle classes and weare glad to welcom his gosepl&#x27;</span>`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var f=r(c);v=i(f,"Example:"),f.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,f){_(l,c,f),e(c,v),_(l,p,f),$(u,l,f),b=!0},p:St,i(l){b||(S(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),k(u,l)}}}function oi(U){let c,v;return c=new Tt({props:{code:`inputs["labels"] = processor(text=dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">17.17</span>`}}),{c(){w(c.$$.fragment)},l(p){y(c.$$.fragment,p)},m(p,u){$(c,p,u),v=!0},p:St,i(p){v||(S(c.$$.fragment,p),v=!0)},o(p){T(c.$$.fragment,p),v=!1},d(p){k(c,p)}}}function ni(U){let c,v,p,u,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var f=r(c);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var C=r(p);u=i(C,"Module"),C.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,c,f),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function ai(U){let c,v,p,u,b;return u=new Tt({props:{code:`from transformers import Wav2Vec2FeatureExtractor, UniSpeechForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("hf-internal-testing/tiny-random-unispeech")
model = UniSpeechForSequenceClassification.from_pretrained("hf-internal-testing/tiny-random-unispeech")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, UniSpeechForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-unispeech&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-unispeech&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var f=r(c);v=i(f,"Example:"),f.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,f){_(l,c,f),e(c,v),_(l,p,f),$(u,l,f),b=!0},p:St,i(l){b||(S(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),k(u,l)}}}function ri(U){let c,v;return c=new Tt({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){w(c.$$.fragment)},l(p){y(c.$$.fragment,p)},m(p,u){$(c,p,u),v=!0},p:St,i(p){v||(S(c.$$.fragment,p),v=!0)},o(p){T(c.$$.fragment,p),v=!1},d(p){k(c,p)}}}function si(U){let c,v,p,u,b;return{c(){c=n("p"),v=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var f=r(c);v=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(f,"CODE",{});var C=r(p);u=i(C,"Module"),C.forEach(o),b=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(o)},m(l,f){_(l,c,f),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function ii(U){let c,v,p,u,b;return u=new Tt({props:{code:`import torch
from transformers import Wav2Vec2FeatureExtractor, UniSpeechForPreTraining
from transformers.models.unispeech.modeling_unispeech import _compute_mask_indices

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(
    "hf-internal-testing/tiny-random-unispeech-sat"
)
model = UniSpeechForPreTraining.from_pretrained("microsoft/unispeech-large-1500h-cv")
# TODO: Add full pretraining example`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, UniSpeechForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.models.unispeech.modeling_unispeech <span class="hljs-keyword">import</span> _compute_mask_indices

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;hf-internal-testing/tiny-random-unispeech-sat&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UniSpeechForPreTraining.from_pretrained(<span class="hljs-string">&quot;microsoft/unispeech-large-1500h-cv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># <span class="hljs-doctag">TODO:</span> Add full pretraining example</span>`}}),{c(){c=n("p"),v=s("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var f=r(c);v=i(f,"Example:"),f.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,f){_(l,c,f),e(c,v),_(l,p,f),$(u,l,f),b=!0},p:St,i(l){b||(S(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),k(u,l)}}}function li(U){let c,v,p,u,b,l,f,C,gn,Uo,K,se,Qt,Fe,_n,Xt,vn,Co,ie,bn,qe,wn,yn,xo,kt,$n,jo,Ut,Zt,Sn,Fo,Ct,Tn,qo,le,Pe,kn,xt,Un,Cn,xn,Ee,jn,jt,Fn,qn,Po,D,Pn,Me,En,Mn,ze,zn,On,Eo,Y,ce,Gt,Oe,An,Jt,Dn,Mo,M,Ae,Wn,R,Ln,Ft,Nn,Vn,De,In,Hn,Kn,B,Yn,qt,Rn,Bn,Pt,Qn,Xn,Zn,de,zo,Q,pe,eo,We,Gn,to,Jn,Oo,X,Le,ea,Ne,ta,oo,oa,na,Ao,Z,he,no,Ve,aa,ao,ra,Do,j,Ie,sa,He,ia,Ke,la,ca,da,Ye,pa,Et,ha,ma,ua,Re,fa,Be,ga,_a,va,z,Qe,ba,G,wa,Mt,ya,$a,ro,Sa,Ta,ka,me,Ua,ue,Wo,J,fe,so,Xe,Ca,io,xa,Lo,F,Ze,ja,ee,Fa,lo,qa,Pa,Ge,Ea,Ma,za,Je,Oa,zt,Aa,Da,Wa,et,La,tt,Na,Va,Ia,P,ot,Ha,te,Ka,Ot,Ya,Ra,co,Ba,Qa,Xa,ge,Za,_e,Ga,ve,No,oe,be,po,nt,Ja,ho,er,Vo,x,at,tr,mo,or,nr,rt,ar,st,rr,sr,ir,it,lr,At,cr,dr,pr,lt,hr,ct,mr,ur,fr,E,dt,gr,ne,_r,Dt,vr,br,uo,wr,yr,$r,we,Sr,ye,Tr,$e,Io,ae,Se,fo,pt,kr,go,Ur,Ho,q,ht,Cr,mt,xr,ut,jr,Fr,qr,ft,Pr,Wt,Er,Mr,zr,gt,Or,_t,Ar,Dr,Wr,O,vt,Lr,re,Nr,Lt,Vr,Ir,_o,Hr,Kr,Yr,Te,Rr,ke,Ko;return l=new je({}),Fe=new je({}),Oe=new je({}),Ae=new H({props:{name:"class transformers.UniSpeechConfig",anchor:"transformers.UniSpeechConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"num_ctc_classes",val:" = 80"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"replace_prob",val:" = 0.5"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the UniSpeech model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechModel">UniSpeechModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechModel">UniSpeechModel</a>.`,name:"vocab_size"},{anchor:"transformers.UniSpeechConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.UniSpeechConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.UniSpeechConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.UniSpeechConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.UniSpeechConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.UniSpeechConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.UniSpeechConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.UniSpeechConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechForCTC">UniSpeechForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.UniSpeechConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.UniSpeechConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.UniSpeechConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.UniSpeechConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.UniSpeechConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.UniSpeechConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.UniSpeechConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.UniSpeechConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.UniSpeechConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.UniSpeechConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.UniSpeechConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.UniSpeechConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.UniSpeechConfig.do_stable_layer_norm",description:`<strong>do_stable_layer_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply <em>stable</em> layer norm architecture of the Transformer encoder. <code>do_stable_layer_norm is True</code> corresponds to applying layer norm before the attention layer, whereas <code>do_stable_layer_norm is False</code> corresponds to applying layer norm after the attention layer.`,name:"do_stable_layer_norm"},{anchor:"transformers.UniSpeechConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.UniSpeechConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.UniSpeechConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.UniSpeechConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.UniSpeechConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.UniSpeechConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.UniSpeechConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.UniSpeechConfig.num_codevectors_per_group",description:`<strong>num_codevectors_per_group</strong> (<code>int</code>, <em>optional</em>, defaults to 320) &#x2014;
Number of entries in each quantization codebook (group).`,name:"num_codevectors_per_group"},{anchor:"transformers.UniSpeechConfig.num_codevector_groups",description:`<strong>num_codevector_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of codevector groups for product codevector quantization.`,name:"num_codevector_groups"},{anchor:"transformers.UniSpeechConfig.contrastive_logits_temperature",description:`<strong>contrastive_logits_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The temperature <em>kappa</em> in the contrastive loss.`,name:"contrastive_logits_temperature"},{anchor:"transformers.UniSpeechConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for the output of the feature encoder that&#x2019;s used by the quantizer.`,name:"feat_quantizer_dropout"},{anchor:"transformers.UniSpeechConfig.num_negatives",description:`<strong>num_negatives</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Number of negative samples for the contrastive loss.`,name:"num_negatives"},{anchor:"transformers.UniSpeechConfig.codevector_dim",description:`<strong>codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the quantized feature vectors.`,name:"codevector_dim"},{anchor:"transformers.UniSpeechConfig.proj_codevector_dim",description:`<strong>proj_codevector_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the final projection of both the quantized and the transformer features.`,name:"proj_codevector_dim"},{anchor:"transformers.UniSpeechConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.UniSpeechConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;mean&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechForCTC">UniSpeechForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.UniSpeechConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechForCTC">UniSpeechForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.UniSpeechConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechForSequenceClassification">UniSpeechForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.UniSpeechConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.UniSpeechConfig.replace_prob",description:`<strong>replace_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Propability that transformer feature is replaced by quantized feature for pretraining.`,name:"replace_prob"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/configuration_unispeech.py#L34"}}),de=new $t({props:{anchor:"transformers.UniSpeechConfig.example",$$slots:{default:[Zs]},$$scope:{ctx:U}}}),We=new je({}),Le=new H({props:{name:"class transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput",anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a href="https://arxiv.org/pdf/2006.11477.pdf" rel="nofollow">official
paper</a> . (classification) loss.`,name:"loss"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.projected_states",description:`<strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.`,name:"projected_states"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.projected_quantized_states",description:`<strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) &#x2014;
Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.`,name:"projected_quantized_states"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/modeling_unispeech.py#L75"}}),Ve=new je({}),Ie=new H({props:{name:"class transformers.UniSpeechModel",anchor:"transformers.UniSpeechModel",parameters:[{name:"config",val:": UniSpeechConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/modeling_unispeech.py#L1067"}}),Qe=new H({props:{name:"forward",anchor:"transformers.UniSpeechModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechProcessor.__call__</code> for
details.`,name:"input_values"},{anchor:"transformers.UniSpeechModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/modeling_unispeech.py#L1132",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechConfig"
>UniSpeechConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) \u2014 Sequence of extracted feature vectors of the last convolutional layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/wav2vec2#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new fn({props:{$$slots:{default:[Gs]},$$scope:{ctx:U}}}),ue=new $t({props:{anchor:"transformers.UniSpeechModel.forward.example",$$slots:{default:[Js]},$$scope:{ctx:U}}}),Xe=new je({}),Ze=new H({props:{name:"class transformers.UniSpeechForCTC",anchor:"transformers.UniSpeechForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/modeling_unispeech.py#L1343"}}),ot=new H({props:{name:"forward",anchor:"transformers.UniSpeechForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechProcessor.__call__</code> for
details.`,name:"input_values"},{anchor:"transformers.UniSpeechForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/modeling_unispeech.py#L1384",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechConfig"
>UniSpeechConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ge=new fn({props:{$$slots:{default:[ei]},$$scope:{ctx:U}}}),_e=new $t({props:{anchor:"transformers.UniSpeechForCTC.forward.example",$$slots:{default:[ti]},$$scope:{ctx:U}}}),ve=new $t({props:{anchor:"transformers.UniSpeechForCTC.forward.example-2",$$slots:{default:[oi]},$$scope:{ctx:U}}}),nt=new je({}),at=new H({props:{name:"class transformers.UniSpeechForSequenceClassification",anchor:"transformers.UniSpeechForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/modeling_unispeech.py#L1474"}}),dt=new H({props:{name:"forward",anchor:"transformers.UniSpeechForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechProcessor.__call__</code> for
details.`,name:"input_values"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/modeling_unispeech.py#L1519",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechConfig"
>UniSpeechConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),we=new fn({props:{$$slots:{default:[ni]},$$scope:{ctx:U}}}),ye=new $t({props:{anchor:"transformers.UniSpeechForSequenceClassification.forward.example",$$slots:{default:[ai]},$$scope:{ctx:U}}}),$e=new $t({props:{anchor:"transformers.UniSpeechForSequenceClassification.forward.example-2",$$slots:{default:[ri]},$$scope:{ctx:U}}}),pt=new je({}),ht=new H({props:{name:"class transformers.UniSpeechForPreTraining",anchor:"transformers.UniSpeechForPreTraining",parameters:[{name:"config",val:": UniSpeechConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/modeling_unispeech.py#L1192"}}),vt=new H({props:{name:"forward",anchor:"transformers.UniSpeechForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <code>UniSpeechProcessor</code> should be used for
padding and conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>UniSpeechProcessor.__call__</code> for
details.`,name:"input_values"},{anchor:"transformers.UniSpeechForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should only be passed if the corresponding processor has <code>config.return_attention_mask == True</code>. For all models whose processor has <code>config.return_attention_mask == False</code>, <code>attention_mask</code> should
<strong>not</strong> be passed to avoid degraded performance when doing batched inference. For such models
<code>input_values</code> should simply be padded with 0 and passed without <code>attention_mask</code>. Be aware that these
models also yield slightly different results depending on whether <code>input_values</code> is padded or not.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.UniSpeechForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UniSpeechForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UniSpeechForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.UniSpeechForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/unispeech/modeling_unispeech.py#L1253",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechConfig"
>UniSpeechConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the contrastive loss (L_m) and the diversity loss (L_d) as stated in the <a
  href="https://arxiv.org/pdf/2006.11477.pdf"
  rel="nofollow"
>official
paper</a> . (classification) loss.</p>
</li>
<li>
<p><strong>projected_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Hidden-states of the model projected to <em>config.proj_codevector_dim</em> that can be used to predict the masked
projected quantized states.</p>
</li>
<li>
<p><strong>projected_quantized_states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.proj_codevector_dim)</code>) \u2014 Quantized extracted feature vectors projected to <em>config.proj_codevector_dim</em> representing the positive
target vectors for contrastive loss.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Te=new fn({props:{$$slots:{default:[si]},$$scope:{ctx:U}}}),ke=new $t({props:{anchor:"transformers.UniSpeechForPreTraining.forward.example",$$slots:{default:[ii]},$$scope:{ctx:U}}}),{c(){c=n("meta"),v=h(),p=n("h1"),u=n("a"),b=n("span"),w(l.$$.fragment),f=h(),C=n("span"),gn=s("UniSpeech"),Uo=h(),K=n("h2"),se=n("a"),Qt=n("span"),w(Fe.$$.fragment),_n=h(),Xt=n("span"),vn=s("Overview"),Co=h(),ie=n("p"),bn=s("The UniSpeech model was proposed in "),qe=n("a"),wn=s("UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled Data"),yn=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei, Michael
Zeng, Xuedong Huang .`),xo=h(),kt=n("p"),$n=s("The abstract from the paper is the following:"),jo=h(),Ut=n("p"),Zt=n("em"),Sn=s(`In this paper, we propose a unified pre-training approach called UniSpeech to learn speech representations with both
unlabeled and labeled data, in which supervised phonetic CTC learning and phonetically-aware contrastive
self-supervised learning are conducted in a multi-task learning manner. The resultant representations can capture
information more correlated with phonetic structures and improve the generalization across languages and domains. We
evaluate the effectiveness of UniSpeech for cross-lingual representation learning on public CommonVoice corpus. The
results show that UniSpeech outperforms self-supervised pretraining and supervised transfer learning for speech
recognition by a maximum of 13.4% and 17.8% relative phone error rate reductions respectively (averaged over all
testing languages). The transferability of UniSpeech is also demonstrated on a domain-shift speech recognition task,
i.e., a relative word error rate reduction of 6% against the previous approach.`),Fo=h(),Ct=n("p"),Tn=s("Tips:"),qo=h(),le=n("ul"),Pe=n("li"),kn=s(`UniSpeech is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please
use `),xt=n("a"),Un=s("Wav2Vec2Processor"),Cn=s(" for the feature extraction."),xn=h(),Ee=n("li"),jn=s(`UniSpeech model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),jt=n("a"),Fn=s("Wav2Vec2CTCTokenizer"),qn=s("."),Po=h(),D=n("p"),Pn=s("This model was contributed by "),Me=n("a"),En=s("patrickvonplaten"),Mn=s(`. The Authors\u2019 code can be
found `),ze=n("a"),zn=s("here"),On=s("."),Eo=h(),Y=n("h2"),ce=n("a"),Gt=n("span"),w(Oe.$$.fragment),An=h(),Jt=n("span"),Dn=s("UniSpeechConfig"),Mo=h(),M=n("div"),w(Ae.$$.fragment),Wn=h(),R=n("p"),Ln=s("This is the configuration class to store the configuration of a "),Ft=n("a"),Nn=s("UniSpeechModel"),Vn=s(`. It is used to instantiate an
UniSpeech model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeech
`),De=n("a"),In=s("microsoft/unispeech-large-1500h-cv"),Hn=s(" architecture."),Kn=h(),B=n("p"),Yn=s("Configuration objects inherit from "),qt=n("a"),Rn=s("PretrainedConfig"),Bn=s(` and can be used to control the model outputs. Read the
documentation from `),Pt=n("a"),Qn=s("PretrainedConfig"),Xn=s(" for more information."),Zn=h(),w(de.$$.fragment),zo=h(),Q=n("h2"),pe=n("a"),eo=n("span"),w(We.$$.fragment),Gn=h(),to=n("span"),Jn=s("UniSpeech specific outputs"),Oo=h(),X=n("div"),w(Le.$$.fragment),ea=h(),Ne=n("p"),ta=s("Output type of "),oo=n("code"),oa=s("UniSpeechForPreTrainingOutput"),na=s(", with potential hidden states and attentions."),Ao=h(),Z=n("h2"),he=n("a"),no=n("span"),w(Ve.$$.fragment),aa=h(),ao=n("span"),ra=s("UniSpeechModel"),Do=h(),j=n("div"),w(Ie.$$.fragment),sa=h(),He=n("p"),ia=s(`The bare UniSpeech Model transformer outputting raw hidden-states without any specific head on top.
UniSpeech was proposed in `),Ke=n("a"),la=s(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),ca=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),da=h(),Ye=n("p"),pa=s("This model inherits from "),Et=n("a"),ha=s("PreTrainedModel"),ma=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ua=h(),Re=n("p"),fa=s("This model is a PyTorch "),Be=n("a"),ga=s("torch.nn.Module"),_a=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),va=h(),z=n("div"),w(Qe.$$.fragment),ba=h(),G=n("p"),wa=s("The "),Mt=n("a"),ya=s("UniSpeechModel"),$a=s(" forward method, overrides the "),ro=n("code"),Sa=s("__call__"),Ta=s(" special method."),ka=h(),w(me.$$.fragment),Ua=h(),w(ue.$$.fragment),Wo=h(),J=n("h2"),fe=n("a"),so=n("span"),w(Xe.$$.fragment),Ca=h(),io=n("span"),xa=s("UniSpeechForCTC"),Lo=h(),F=n("div"),w(Ze.$$.fragment),ja=h(),ee=n("p"),Fa=s("UniSpeech Model with a "),lo=n("code"),qa=s("language modeling"),Pa=s(` head on top for Connectionist Temporal Classification (CTC).
UniSpeech was proposed in `),Ge=n("a"),Ea=s(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ma=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),za=h(),Je=n("p"),Oa=s("This model inherits from "),zt=n("a"),Aa=s("PreTrainedModel"),Da=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Wa=h(),et=n("p"),La=s("This model is a PyTorch "),tt=n("a"),Na=s("torch.nn.Module"),Va=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ia=h(),P=n("div"),w(ot.$$.fragment),Ha=h(),te=n("p"),Ka=s("The "),Ot=n("a"),Ya=s("UniSpeechForCTC"),Ra=s(" forward method, overrides the "),co=n("code"),Ba=s("__call__"),Qa=s(" special method."),Xa=h(),w(ge.$$.fragment),Za=h(),w(_e.$$.fragment),Ga=h(),w(ve.$$.fragment),No=h(),oe=n("h2"),be=n("a"),po=n("span"),w(nt.$$.fragment),Ja=h(),ho=n("span"),er=s("UniSpeechForSequenceClassification"),Vo=h(),x=n("div"),w(at.$$.fragment),tr=h(),mo=n("p"),or=s(`UniSpeech Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),nr=h(),rt=n("p"),ar=s("UniSpeech was proposed in "),st=n("a"),rr=s(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),sr=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),ir=h(),it=n("p"),lr=s("This model inherits from "),At=n("a"),cr=s("PreTrainedModel"),dr=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),pr=h(),lt=n("p"),hr=s("This model is a PyTorch "),ct=n("a"),mr=s("torch.nn.Module"),ur=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fr=h(),E=n("div"),w(dt.$$.fragment),gr=h(),ne=n("p"),_r=s("The "),Dt=n("a"),vr=s("UniSpeechForSequenceClassification"),br=s(" forward method, overrides the "),uo=n("code"),wr=s("__call__"),yr=s(" special method."),$r=h(),w(we.$$.fragment),Sr=h(),w(ye.$$.fragment),Tr=h(),w($e.$$.fragment),Io=h(),ae=n("h2"),Se=n("a"),fo=n("span"),w(pt.$$.fragment),kr=h(),go=n("span"),Ur=s("UniSpeechForPreTraining"),Ho=h(),q=n("div"),w(ht.$$.fragment),Cr=h(),mt=n("p"),xr=s(`UniSpeech Model with a vector-quantization module and ctc loss for pre-training.
UniSpeech was proposed in `),ut=n("a"),jr=s(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Fr=s(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),qr=h(),ft=n("p"),Pr=s("This model inherits from "),Wt=n("a"),Er=s("PreTrainedModel"),Mr=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),zr=h(),gt=n("p"),Or=s("This model is a PyTorch "),_t=n("a"),Ar=s("torch.nn.Module"),Dr=s(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wr=h(),O=n("div"),w(vt.$$.fragment),Lr=h(),re=n("p"),Nr=s("The "),Lt=n("a"),Vr=s("UniSpeechForPreTraining"),Ir=s(" forward method, overrides the "),_o=n("code"),Hr=s("__call__"),Kr=s(" special method."),Yr=h(),w(Te.$$.fragment),Rr=h(),w(ke.$$.fragment),this.h()},l(t){const g=Qs('[data-svelte="svelte-1phssyn"]',document.head);c=a(g,"META",{name:!0,content:!0}),g.forEach(o),v=m(t),p=a(t,"H1",{class:!0});var bt=r(p);u=a(bt,"A",{id:!0,class:!0,href:!0});var vo=r(u);b=a(vo,"SPAN",{});var bo=r(b);y(l.$$.fragment,bo),bo.forEach(o),vo.forEach(o),f=m(bt),C=a(bt,"SPAN",{});var wo=r(C);gn=i(wo,"UniSpeech"),wo.forEach(o),bt.forEach(o),Uo=m(t),K=a(t,"H2",{class:!0});var wt=r(K);se=a(wt,"A",{id:!0,class:!0,href:!0});var yo=r(se);Qt=a(yo,"SPAN",{});var $o=r(Qt);y(Fe.$$.fragment,$o),$o.forEach(o),yo.forEach(o),_n=m(wt),Xt=a(wt,"SPAN",{});var So=r(Xt);vn=i(So,"Overview"),So.forEach(o),wt.forEach(o),Co=m(t),ie=a(t,"P",{});var yt=r(ie);bn=i(yt,"The UniSpeech model was proposed in "),qe=a(yt,"A",{href:!0,rel:!0});var To=r(qe);wn=i(To,"UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled Data"),To.forEach(o),yn=i(yt,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei, Michael
Zeng, Xuedong Huang .`),yt.forEach(o),xo=m(t),kt=a(t,"P",{});var ko=r(kt);$n=i(ko,"The abstract from the paper is the following:"),ko.forEach(o),jo=m(t),Ut=a(t,"P",{});var Br=r(Ut);Zt=a(Br,"EM",{});var Qr=r(Zt);Sn=i(Qr,`In this paper, we propose a unified pre-training approach called UniSpeech to learn speech representations with both
unlabeled and labeled data, in which supervised phonetic CTC learning and phonetically-aware contrastive
self-supervised learning are conducted in a multi-task learning manner. The resultant representations can capture
information more correlated with phonetic structures and improve the generalization across languages and domains. We
evaluate the effectiveness of UniSpeech for cross-lingual representation learning on public CommonVoice corpus. The
results show that UniSpeech outperforms self-supervised pretraining and supervised transfer learning for speech
recognition by a maximum of 13.4% and 17.8% relative phone error rate reductions respectively (averaged over all
testing languages). The transferability of UniSpeech is also demonstrated on a domain-shift speech recognition task,
i.e., a relative word error rate reduction of 6% against the previous approach.`),Qr.forEach(o),Br.forEach(o),Fo=m(t),Ct=a(t,"P",{});var Xr=r(Ct);Tn=i(Xr,"Tips:"),Xr.forEach(o),qo=m(t),le=a(t,"UL",{});var Yo=r(le);Pe=a(Yo,"LI",{});var Ro=r(Pe);kn=i(Ro,`UniSpeech is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please
use `),xt=a(Ro,"A",{href:!0});var Zr=r(xt);Un=i(Zr,"Wav2Vec2Processor"),Zr.forEach(o),Cn=i(Ro," for the feature extraction."),Ro.forEach(o),xn=m(Yo),Ee=a(Yo,"LI",{});var Bo=r(Ee);jn=i(Bo,`UniSpeech model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),jt=a(Bo,"A",{href:!0});var Gr=r(jt);Fn=i(Gr,"Wav2Vec2CTCTokenizer"),Gr.forEach(o),qn=i(Bo,"."),Bo.forEach(o),Yo.forEach(o),Po=m(t),D=a(t,"P",{});var Nt=r(D);Pn=i(Nt,"This model was contributed by "),Me=a(Nt,"A",{href:!0,rel:!0});var Jr=r(Me);En=i(Jr,"patrickvonplaten"),Jr.forEach(o),Mn=i(Nt,`. The Authors\u2019 code can be
found `),ze=a(Nt,"A",{href:!0,rel:!0});var es=r(ze);zn=i(es,"here"),es.forEach(o),On=i(Nt,"."),Nt.forEach(o),Eo=m(t),Y=a(t,"H2",{class:!0});var Qo=r(Y);ce=a(Qo,"A",{id:!0,class:!0,href:!0});var ts=r(ce);Gt=a(ts,"SPAN",{});var os=r(Gt);y(Oe.$$.fragment,os),os.forEach(o),ts.forEach(o),An=m(Qo),Jt=a(Qo,"SPAN",{});var ns=r(Jt);Dn=i(ns,"UniSpeechConfig"),ns.forEach(o),Qo.forEach(o),Mo=m(t),M=a(t,"DIV",{class:!0});var Ue=r(M);y(Ae.$$.fragment,Ue),Wn=m(Ue),R=a(Ue,"P",{});var Vt=r(R);Ln=i(Vt,"This is the configuration class to store the configuration of a "),Ft=a(Vt,"A",{href:!0});var as=r(Ft);Nn=i(as,"UniSpeechModel"),as.forEach(o),Vn=i(Vt,`. It is used to instantiate an
UniSpeech model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeech
`),De=a(Vt,"A",{href:!0,rel:!0});var rs=r(De);In=i(rs,"microsoft/unispeech-large-1500h-cv"),rs.forEach(o),Hn=i(Vt," architecture."),Vt.forEach(o),Kn=m(Ue),B=a(Ue,"P",{});var It=r(B);Yn=i(It,"Configuration objects inherit from "),qt=a(It,"A",{href:!0});var ss=r(qt);Rn=i(ss,"PretrainedConfig"),ss.forEach(o),Bn=i(It,` and can be used to control the model outputs. Read the
documentation from `),Pt=a(It,"A",{href:!0});var is=r(Pt);Qn=i(is,"PretrainedConfig"),is.forEach(o),Xn=i(It," for more information."),It.forEach(o),Zn=m(Ue),y(de.$$.fragment,Ue),Ue.forEach(o),zo=m(t),Q=a(t,"H2",{class:!0});var Xo=r(Q);pe=a(Xo,"A",{id:!0,class:!0,href:!0});var ls=r(pe);eo=a(ls,"SPAN",{});var cs=r(eo);y(We.$$.fragment,cs),cs.forEach(o),ls.forEach(o),Gn=m(Xo),to=a(Xo,"SPAN",{});var ds=r(to);Jn=i(ds,"UniSpeech specific outputs"),ds.forEach(o),Xo.forEach(o),Oo=m(t),X=a(t,"DIV",{class:!0});var Zo=r(X);y(Le.$$.fragment,Zo),ea=m(Zo),Ne=a(Zo,"P",{});var Go=r(Ne);ta=i(Go,"Output type of "),oo=a(Go,"CODE",{});var ps=r(oo);oa=i(ps,"UniSpeechForPreTrainingOutput"),ps.forEach(o),na=i(Go,", with potential hidden states and attentions."),Go.forEach(o),Zo.forEach(o),Ao=m(t),Z=a(t,"H2",{class:!0});var Jo=r(Z);he=a(Jo,"A",{id:!0,class:!0,href:!0});var hs=r(he);no=a(hs,"SPAN",{});var ms=r(no);y(Ve.$$.fragment,ms),ms.forEach(o),hs.forEach(o),aa=m(Jo),ao=a(Jo,"SPAN",{});var us=r(ao);ra=i(us,"UniSpeechModel"),us.forEach(o),Jo.forEach(o),Do=m(t),j=a(t,"DIV",{class:!0});var W=r(j);y(Ie.$$.fragment,W),sa=m(W),He=a(W,"P",{});var en=r(He);ia=i(en,`The bare UniSpeech Model transformer outputting raw hidden-states without any specific head on top.
UniSpeech was proposed in `),Ke=a(en,"A",{href:!0,rel:!0});var fs=r(Ke);la=i(fs,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),fs.forEach(o),ca=i(en,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),en.forEach(o),da=m(W),Ye=a(W,"P",{});var tn=r(Ye);pa=i(tn,"This model inherits from "),Et=a(tn,"A",{href:!0});var gs=r(Et);ha=i(gs,"PreTrainedModel"),gs.forEach(o),ma=i(tn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),tn.forEach(o),ua=m(W),Re=a(W,"P",{});var on=r(Re);fa=i(on,"This model is a PyTorch "),Be=a(on,"A",{href:!0,rel:!0});var _s=r(Be);ga=i(_s,"torch.nn.Module"),_s.forEach(o),_a=i(on,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),on.forEach(o),va=m(W),z=a(W,"DIV",{class:!0});var Ce=r(z);y(Qe.$$.fragment,Ce),ba=m(Ce),G=a(Ce,"P",{});var Ht=r(G);wa=i(Ht,"The "),Mt=a(Ht,"A",{href:!0});var vs=r(Mt);ya=i(vs,"UniSpeechModel"),vs.forEach(o),$a=i(Ht," forward method, overrides the "),ro=a(Ht,"CODE",{});var bs=r(ro);Sa=i(bs,"__call__"),bs.forEach(o),Ta=i(Ht," special method."),Ht.forEach(o),ka=m(Ce),y(me.$$.fragment,Ce),Ua=m(Ce),y(ue.$$.fragment,Ce),Ce.forEach(o),W.forEach(o),Wo=m(t),J=a(t,"H2",{class:!0});var nn=r(J);fe=a(nn,"A",{id:!0,class:!0,href:!0});var ws=r(fe);so=a(ws,"SPAN",{});var ys=r(so);y(Xe.$$.fragment,ys),ys.forEach(o),ws.forEach(o),Ca=m(nn),io=a(nn,"SPAN",{});var $s=r(io);xa=i($s,"UniSpeechForCTC"),$s.forEach(o),nn.forEach(o),Lo=m(t),F=a(t,"DIV",{class:!0});var L=r(F);y(Ze.$$.fragment,L),ja=m(L),ee=a(L,"P",{});var Kt=r(ee);Fa=i(Kt,"UniSpeech Model with a "),lo=a(Kt,"CODE",{});var Ss=r(lo);qa=i(Ss,"language modeling"),Ss.forEach(o),Pa=i(Kt,` head on top for Connectionist Temporal Classification (CTC).
UniSpeech was proposed in `),Ge=a(Kt,"A",{href:!0,rel:!0});var Ts=r(Ge);Ea=i(Ts,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ts.forEach(o),Ma=i(Kt,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Kt.forEach(o),za=m(L),Je=a(L,"P",{});var an=r(Je);Oa=i(an,"This model inherits from "),zt=a(an,"A",{href:!0});var ks=r(zt);Aa=i(ks,"PreTrainedModel"),ks.forEach(o),Da=i(an,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),an.forEach(o),Wa=m(L),et=a(L,"P",{});var rn=r(et);La=i(rn,"This model is a PyTorch "),tt=a(rn,"A",{href:!0,rel:!0});var Us=r(tt);Na=i(Us,"torch.nn.Module"),Us.forEach(o),Va=i(rn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),rn.forEach(o),Ia=m(L),P=a(L,"DIV",{class:!0});var N=r(P);y(ot.$$.fragment,N),Ha=m(N),te=a(N,"P",{});var Yt=r(te);Ka=i(Yt,"The "),Ot=a(Yt,"A",{href:!0});var Cs=r(Ot);Ya=i(Cs,"UniSpeechForCTC"),Cs.forEach(o),Ra=i(Yt," forward method, overrides the "),co=a(Yt,"CODE",{});var xs=r(co);Ba=i(xs,"__call__"),xs.forEach(o),Qa=i(Yt," special method."),Yt.forEach(o),Xa=m(N),y(ge.$$.fragment,N),Za=m(N),y(_e.$$.fragment,N),Ga=m(N),y(ve.$$.fragment,N),N.forEach(o),L.forEach(o),No=m(t),oe=a(t,"H2",{class:!0});var sn=r(oe);be=a(sn,"A",{id:!0,class:!0,href:!0});var js=r(be);po=a(js,"SPAN",{});var Fs=r(po);y(nt.$$.fragment,Fs),Fs.forEach(o),js.forEach(o),Ja=m(sn),ho=a(sn,"SPAN",{});var qs=r(ho);er=i(qs,"UniSpeechForSequenceClassification"),qs.forEach(o),sn.forEach(o),Vo=m(t),x=a(t,"DIV",{class:!0});var A=r(x);y(at.$$.fragment,A),tr=m(A),mo=a(A,"P",{});var Ps=r(mo);or=i(Ps,`UniSpeech Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Ps.forEach(o),nr=m(A),rt=a(A,"P",{});var ln=r(rt);ar=i(ln,"UniSpeech was proposed in "),st=a(ln,"A",{href:!0,rel:!0});var Es=r(st);rr=i(Es,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Es.forEach(o),sr=i(ln,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),ln.forEach(o),ir=m(A),it=a(A,"P",{});var cn=r(it);lr=i(cn,"This model inherits from "),At=a(cn,"A",{href:!0});var Ms=r(At);cr=i(Ms,"PreTrainedModel"),Ms.forEach(o),dr=i(cn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),cn.forEach(o),pr=m(A),lt=a(A,"P",{});var dn=r(lt);hr=i(dn,"This model is a PyTorch "),ct=a(dn,"A",{href:!0,rel:!0});var zs=r(ct);mr=i(zs,"torch.nn.Module"),zs.forEach(o),ur=i(dn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dn.forEach(o),fr=m(A),E=a(A,"DIV",{class:!0});var V=r(E);y(dt.$$.fragment,V),gr=m(V),ne=a(V,"P",{});var Rt=r(ne);_r=i(Rt,"The "),Dt=a(Rt,"A",{href:!0});var Os=r(Dt);vr=i(Os,"UniSpeechForSequenceClassification"),Os.forEach(o),br=i(Rt," forward method, overrides the "),uo=a(Rt,"CODE",{});var As=r(uo);wr=i(As,"__call__"),As.forEach(o),yr=i(Rt," special method."),Rt.forEach(o),$r=m(V),y(we.$$.fragment,V),Sr=m(V),y(ye.$$.fragment,V),Tr=m(V),y($e.$$.fragment,V),V.forEach(o),A.forEach(o),Io=m(t),ae=a(t,"H2",{class:!0});var pn=r(ae);Se=a(pn,"A",{id:!0,class:!0,href:!0});var Ds=r(Se);fo=a(Ds,"SPAN",{});var Ws=r(fo);y(pt.$$.fragment,Ws),Ws.forEach(o),Ds.forEach(o),kr=m(pn),go=a(pn,"SPAN",{});var Ls=r(go);Ur=i(Ls,"UniSpeechForPreTraining"),Ls.forEach(o),pn.forEach(o),Ho=m(t),q=a(t,"DIV",{class:!0});var I=r(q);y(ht.$$.fragment,I),Cr=m(I),mt=a(I,"P",{});var hn=r(mt);xr=i(hn,`UniSpeech Model with a vector-quantization module and ctc loss for pre-training.
UniSpeech was proposed in `),ut=a(hn,"A",{href:!0,rel:!0});var Ns=r(ut);jr=i(Ns,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ns.forEach(o),Fr=i(hn,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),hn.forEach(o),qr=m(I),ft=a(I,"P",{});var mn=r(ft);Pr=i(mn,"This model inherits from "),Wt=a(mn,"A",{href:!0});var Vs=r(Wt);Er=i(Vs,"PreTrainedModel"),Vs.forEach(o),Mr=i(mn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),mn.forEach(o),zr=m(I),gt=a(I,"P",{});var un=r(gt);Or=i(un,"This model is a PyTorch "),_t=a(un,"A",{href:!0,rel:!0});var Is=r(_t);Ar=i(Is,"torch.nn.Module"),Is.forEach(o),Dr=i(un,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),un.forEach(o),Wr=m(I),O=a(I,"DIV",{class:!0});var xe=r(O);y(vt.$$.fragment,xe),Lr=m(xe),re=a(xe,"P",{});var Bt=r(re);Nr=i(Bt,"The "),Lt=a(Bt,"A",{href:!0});var Hs=r(Lt);Vr=i(Hs,"UniSpeechForPreTraining"),Hs.forEach(o),Ir=i(Bt," forward method, overrides the "),_o=a(Bt,"CODE",{});var Ks=r(_o);Hr=i(Ks,"__call__"),Ks.forEach(o),Kr=i(Bt," special method."),Bt.forEach(o),Yr=m(xe),y(Te.$$.fragment,xe),Rr=m(xe),y(ke.$$.fragment,xe),xe.forEach(o),I.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(ci)),d(u,"id","unispeech"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#unispeech"),d(p,"class","relative group"),d(se,"id","overview"),d(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(se,"href","#overview"),d(K,"class","relative group"),d(qe,"href","https://arxiv.org/abs/2101.07597"),d(qe,"rel","nofollow"),d(xt,"href","/docs/transformers/v4.22.2/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),d(jt,"href","/docs/transformers/v4.22.2/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),d(Me,"href","https://huggingface.co/patrickvonplaten"),d(Me,"rel","nofollow"),d(ze,"href","https://github.com/microsoft/UniSpeech/tree/main/UniSpeech"),d(ze,"rel","nofollow"),d(ce,"id","transformers.UniSpeechConfig"),d(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ce,"href","#transformers.UniSpeechConfig"),d(Y,"class","relative group"),d(Ft,"href","/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechModel"),d(De,"href","https://huggingface.co/microsoft/unispeech-large-1500h-cv"),d(De,"rel","nofollow"),d(qt,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),d(Pt,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(pe,"id","transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput"),d(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(pe,"href","#transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput"),d(Q,"class","relative group"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(he,"id","transformers.UniSpeechModel"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#transformers.UniSpeechModel"),d(Z,"class","relative group"),d(Ke,"href","https://arxiv.org/abs/2101.07597"),d(Ke,"rel","nofollow"),d(Et,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),d(Be,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Be,"rel","nofollow"),d(Mt,"href","/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechModel"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(fe,"id","transformers.UniSpeechForCTC"),d(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fe,"href","#transformers.UniSpeechForCTC"),d(J,"class","relative group"),d(Ge,"href","https://arxiv.org/abs/2101.07597"),d(Ge,"rel","nofollow"),d(zt,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),d(tt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(tt,"rel","nofollow"),d(Ot,"href","/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechForCTC"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(be,"id","transformers.UniSpeechForSequenceClassification"),d(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(be,"href","#transformers.UniSpeechForSequenceClassification"),d(oe,"class","relative group"),d(st,"href","https://arxiv.org/abs/2101.07597"),d(st,"rel","nofollow"),d(At,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),d(ct,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ct,"rel","nofollow"),d(Dt,"href","/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechForSequenceClassification"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Se,"id","transformers.UniSpeechForPreTraining"),d(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Se,"href","#transformers.UniSpeechForPreTraining"),d(ae,"class","relative group"),d(ut,"href","https://arxiv.org/abs/2101.07597"),d(ut,"rel","nofollow"),d(Wt,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),d(_t,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(_t,"rel","nofollow"),d(Lt,"href","/docs/transformers/v4.22.2/en/model_doc/unispeech#transformers.UniSpeechForPreTraining"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,c),_(t,v,g),_(t,p,g),e(p,u),e(u,b),$(l,b,null),e(p,f),e(p,C),e(C,gn),_(t,Uo,g),_(t,K,g),e(K,se),e(se,Qt),$(Fe,Qt,null),e(K,_n),e(K,Xt),e(Xt,vn),_(t,Co,g),_(t,ie,g),e(ie,bn),e(ie,qe),e(qe,wn),e(ie,yn),_(t,xo,g),_(t,kt,g),e(kt,$n),_(t,jo,g),_(t,Ut,g),e(Ut,Zt),e(Zt,Sn),_(t,Fo,g),_(t,Ct,g),e(Ct,Tn),_(t,qo,g),_(t,le,g),e(le,Pe),e(Pe,kn),e(Pe,xt),e(xt,Un),e(Pe,Cn),e(le,xn),e(le,Ee),e(Ee,jn),e(Ee,jt),e(jt,Fn),e(Ee,qn),_(t,Po,g),_(t,D,g),e(D,Pn),e(D,Me),e(Me,En),e(D,Mn),e(D,ze),e(ze,zn),e(D,On),_(t,Eo,g),_(t,Y,g),e(Y,ce),e(ce,Gt),$(Oe,Gt,null),e(Y,An),e(Y,Jt),e(Jt,Dn),_(t,Mo,g),_(t,M,g),$(Ae,M,null),e(M,Wn),e(M,R),e(R,Ln),e(R,Ft),e(Ft,Nn),e(R,Vn),e(R,De),e(De,In),e(R,Hn),e(M,Kn),e(M,B),e(B,Yn),e(B,qt),e(qt,Rn),e(B,Bn),e(B,Pt),e(Pt,Qn),e(B,Xn),e(M,Zn),$(de,M,null),_(t,zo,g),_(t,Q,g),e(Q,pe),e(pe,eo),$(We,eo,null),e(Q,Gn),e(Q,to),e(to,Jn),_(t,Oo,g),_(t,X,g),$(Le,X,null),e(X,ea),e(X,Ne),e(Ne,ta),e(Ne,oo),e(oo,oa),e(Ne,na),_(t,Ao,g),_(t,Z,g),e(Z,he),e(he,no),$(Ve,no,null),e(Z,aa),e(Z,ao),e(ao,ra),_(t,Do,g),_(t,j,g),$(Ie,j,null),e(j,sa),e(j,He),e(He,ia),e(He,Ke),e(Ke,la),e(He,ca),e(j,da),e(j,Ye),e(Ye,pa),e(Ye,Et),e(Et,ha),e(Ye,ma),e(j,ua),e(j,Re),e(Re,fa),e(Re,Be),e(Be,ga),e(Re,_a),e(j,va),e(j,z),$(Qe,z,null),e(z,ba),e(z,G),e(G,wa),e(G,Mt),e(Mt,ya),e(G,$a),e(G,ro),e(ro,Sa),e(G,Ta),e(z,ka),$(me,z,null),e(z,Ua),$(ue,z,null),_(t,Wo,g),_(t,J,g),e(J,fe),e(fe,so),$(Xe,so,null),e(J,Ca),e(J,io),e(io,xa),_(t,Lo,g),_(t,F,g),$(Ze,F,null),e(F,ja),e(F,ee),e(ee,Fa),e(ee,lo),e(lo,qa),e(ee,Pa),e(ee,Ge),e(Ge,Ea),e(ee,Ma),e(F,za),e(F,Je),e(Je,Oa),e(Je,zt),e(zt,Aa),e(Je,Da),e(F,Wa),e(F,et),e(et,La),e(et,tt),e(tt,Na),e(et,Va),e(F,Ia),e(F,P),$(ot,P,null),e(P,Ha),e(P,te),e(te,Ka),e(te,Ot),e(Ot,Ya),e(te,Ra),e(te,co),e(co,Ba),e(te,Qa),e(P,Xa),$(ge,P,null),e(P,Za),$(_e,P,null),e(P,Ga),$(ve,P,null),_(t,No,g),_(t,oe,g),e(oe,be),e(be,po),$(nt,po,null),e(oe,Ja),e(oe,ho),e(ho,er),_(t,Vo,g),_(t,x,g),$(at,x,null),e(x,tr),e(x,mo),e(mo,or),e(x,nr),e(x,rt),e(rt,ar),e(rt,st),e(st,rr),e(rt,sr),e(x,ir),e(x,it),e(it,lr),e(it,At),e(At,cr),e(it,dr),e(x,pr),e(x,lt),e(lt,hr),e(lt,ct),e(ct,mr),e(lt,ur),e(x,fr),e(x,E),$(dt,E,null),e(E,gr),e(E,ne),e(ne,_r),e(ne,Dt),e(Dt,vr),e(ne,br),e(ne,uo),e(uo,wr),e(ne,yr),e(E,$r),$(we,E,null),e(E,Sr),$(ye,E,null),e(E,Tr),$($e,E,null),_(t,Io,g),_(t,ae,g),e(ae,Se),e(Se,fo),$(pt,fo,null),e(ae,kr),e(ae,go),e(go,Ur),_(t,Ho,g),_(t,q,g),$(ht,q,null),e(q,Cr),e(q,mt),e(mt,xr),e(mt,ut),e(ut,jr),e(mt,Fr),e(q,qr),e(q,ft),e(ft,Pr),e(ft,Wt),e(Wt,Er),e(ft,Mr),e(q,zr),e(q,gt),e(gt,Or),e(gt,_t),e(_t,Ar),e(gt,Dr),e(q,Wr),e(q,O),$(vt,O,null),e(O,Lr),e(O,re),e(re,Nr),e(re,Lt),e(Lt,Vr),e(re,Ir),e(re,_o),e(_o,Hr),e(re,Kr),e(O,Yr),$(Te,O,null),e(O,Rr),$(ke,O,null),Ko=!0},p(t,[g]){const bt={};g&2&&(bt.$$scope={dirty:g,ctx:t}),de.$set(bt);const vo={};g&2&&(vo.$$scope={dirty:g,ctx:t}),me.$set(vo);const bo={};g&2&&(bo.$$scope={dirty:g,ctx:t}),ue.$set(bo);const wo={};g&2&&(wo.$$scope={dirty:g,ctx:t}),ge.$set(wo);const wt={};g&2&&(wt.$$scope={dirty:g,ctx:t}),_e.$set(wt);const yo={};g&2&&(yo.$$scope={dirty:g,ctx:t}),ve.$set(yo);const $o={};g&2&&($o.$$scope={dirty:g,ctx:t}),we.$set($o);const So={};g&2&&(So.$$scope={dirty:g,ctx:t}),ye.$set(So);const yt={};g&2&&(yt.$$scope={dirty:g,ctx:t}),$e.$set(yt);const To={};g&2&&(To.$$scope={dirty:g,ctx:t}),Te.$set(To);const ko={};g&2&&(ko.$$scope={dirty:g,ctx:t}),ke.$set(ko)},i(t){Ko||(S(l.$$.fragment,t),S(Fe.$$.fragment,t),S(Oe.$$.fragment,t),S(Ae.$$.fragment,t),S(de.$$.fragment,t),S(We.$$.fragment,t),S(Le.$$.fragment,t),S(Ve.$$.fragment,t),S(Ie.$$.fragment,t),S(Qe.$$.fragment,t),S(me.$$.fragment,t),S(ue.$$.fragment,t),S(Xe.$$.fragment,t),S(Ze.$$.fragment,t),S(ot.$$.fragment,t),S(ge.$$.fragment,t),S(_e.$$.fragment,t),S(ve.$$.fragment,t),S(nt.$$.fragment,t),S(at.$$.fragment,t),S(dt.$$.fragment,t),S(we.$$.fragment,t),S(ye.$$.fragment,t),S($e.$$.fragment,t),S(pt.$$.fragment,t),S(ht.$$.fragment,t),S(vt.$$.fragment,t),S(Te.$$.fragment,t),S(ke.$$.fragment,t),Ko=!0)},o(t){T(l.$$.fragment,t),T(Fe.$$.fragment,t),T(Oe.$$.fragment,t),T(Ae.$$.fragment,t),T(de.$$.fragment,t),T(We.$$.fragment,t),T(Le.$$.fragment,t),T(Ve.$$.fragment,t),T(Ie.$$.fragment,t),T(Qe.$$.fragment,t),T(me.$$.fragment,t),T(ue.$$.fragment,t),T(Xe.$$.fragment,t),T(Ze.$$.fragment,t),T(ot.$$.fragment,t),T(ge.$$.fragment,t),T(_e.$$.fragment,t),T(ve.$$.fragment,t),T(nt.$$.fragment,t),T(at.$$.fragment,t),T(dt.$$.fragment,t),T(we.$$.fragment,t),T(ye.$$.fragment,t),T($e.$$.fragment,t),T(pt.$$.fragment,t),T(ht.$$.fragment,t),T(vt.$$.fragment,t),T(Te.$$.fragment,t),T(ke.$$.fragment,t),Ko=!1},d(t){o(c),t&&o(v),t&&o(p),k(l),t&&o(Uo),t&&o(K),k(Fe),t&&o(Co),t&&o(ie),t&&o(xo),t&&o(kt),t&&o(jo),t&&o(Ut),t&&o(Fo),t&&o(Ct),t&&o(qo),t&&o(le),t&&o(Po),t&&o(D),t&&o(Eo),t&&o(Y),k(Oe),t&&o(Mo),t&&o(M),k(Ae),k(de),t&&o(zo),t&&o(Q),k(We),t&&o(Oo),t&&o(X),k(Le),t&&o(Ao),t&&o(Z),k(Ve),t&&o(Do),t&&o(j),k(Ie),k(Qe),k(me),k(ue),t&&o(Wo),t&&o(J),k(Xe),t&&o(Lo),t&&o(F),k(Ze),k(ot),k(ge),k(_e),k(ve),t&&o(No),t&&o(oe),k(nt),t&&o(Vo),t&&o(x),k(at),k(dt),k(we),k(ye),k($e),t&&o(Io),t&&o(ae),k(pt),t&&o(Ho),t&&o(q),k(ht),k(vt),k(Te),k(ke)}}}const ci={local:"unispeech",sections:[{local:"overview",title:"Overview"},{local:"transformers.UniSpeechConfig",title:"UniSpeechConfig"},{local:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput",title:"UniSpeech specific outputs"},{local:"transformers.UniSpeechModel",title:"UniSpeechModel"},{local:"transformers.UniSpeechForCTC",title:"UniSpeechForCTC"},{local:"transformers.UniSpeechForSequenceClassification",title:"UniSpeechForSequenceClassification"},{local:"transformers.UniSpeechForPreTraining",title:"UniSpeechForPreTraining"}],title:"UniSpeech"};function di(U){return Xs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _i extends Ys{constructor(c){super();Rs(this,c,di,li,Bs,{})}}export{_i as default,ci as metadata};
