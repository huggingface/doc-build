import{S as ai,i as si,s as ri,e as n,k as h,w,t as r,M as ii,c as a,d as o,m,a as s,x as y,h as i,b as d,G as e,g as _,y as S,q as $,o as T,B as U,v as li,L as kt}from"../../chunks/vendor-hf-doc-builder.js";import{T as Sn}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ct}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Fe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ut}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ci(k){let c,v,p,u,b;return u=new Ct({props:{code:`from transformers import UniSpeechModel, UniSpeechConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=n("p"),v=r("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=s(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function di(k){let c,v,p,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var g=s(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var C=s(p);u=i(C,"Module"),C.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,c,g),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function pi(k){let c,v,p,u,b;return u=new Ct({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechModel
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
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">1024</span>]`}}),{c(){c=n("p"),v=r("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=s(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function hi(k){let c,v,p,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var g=s(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var C=s(p);u=i(C,"Module"),C.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,c,g),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function mi(k){let c,v,p,u,b;return u=new Ct({props:{code:`from transformers import Wav2Vec2Processor, UniSpeechForCTC
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
<span class="hljs-string">&#x27;mister quilter is the apposl of the midle classes and weare glad to welcom his gosepl&#x27;</span>`}}),{c(){c=n("p"),v=r("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=s(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function ui(k){let c,v;return c=new Ct({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">17.17</span>`}}),{c(){w(c.$$.fragment)},l(p){y(c.$$.fragment,p)},m(p,u){S(c,p,u),v=!0},p:kt,i(p){v||($(c.$$.fragment,p),v=!0)},o(p){T(c.$$.fragment,p),v=!1},d(p){U(c,p)}}}function fi(k){let c,v,p,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var g=s(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var C=s(p);u=i(C,"Module"),C.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,c,g),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function gi(k){let c,v,p,u,b;return u=new Ct({props:{code:`from transformers import Wav2Vec2FeatureExtractor, UniSpeechForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),{c(){c=n("p"),v=r("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=s(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function _i(k){let c,v;return c=new Ct({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.66</span>`}}),{c(){w(c.$$.fragment)},l(p){y(c.$$.fragment,p)},m(p,u){S(c,p,u),v=!0},p:kt,i(p){v||($(c.$$.fragment,p),v=!0)},o(p){T(c.$$.fragment,p),v=!1},d(p){U(c,p)}}}function vi(k){let c,v,p,u,b;return{c(){c=n("p"),v=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),p=n("code"),u=r("Module"),b=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){c=a(l,"P",{});var g=s(c);v=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),p=a(g,"CODE",{});var C=s(p);u=i(C,"Module"),C.forEach(o),b=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(l,g){_(l,c,g),e(c,v),e(c,p),e(p,u),e(c,b)},d(l){l&&o(c)}}}function bi(k){let c,v,p,u,b;return u=new Ct({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># <span class="hljs-doctag">TODO:</span> Add full pretraining example</span>`}}),{c(){c=n("p"),v=r("Example:"),p=h(),w(u.$$.fragment)},l(l){c=a(l,"P",{});var g=s(c);v=i(g,"Example:"),g.forEach(o),p=m(l),y(u.$$.fragment,l)},m(l,g){_(l,c,g),e(c,v),_(l,p,g),S(u,l,g),b=!0},p:kt,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){T(u.$$.fragment,l),b=!1},d(l){l&&o(c),l&&o(p),U(u,l)}}}function wi(k){let c,v,p,u,b,l,g,C,$n,Fo,H,ie,Gt,qe,Tn,Jt,Un,qo,le,kn,Pe,Cn,xn,Po,xt,jn,Eo,jt,eo,Fn,Mo,Ft,qn,zo,ce,Ee,Pn,qt,En,Mn,zn,Me,On,Pt,Dn,An,Oo,W,Wn,ze,Ln,Nn,Oe,Vn,In,Do,K,de,to,De,Bn,oo,Hn,Ao,M,Ae,Kn,Y,Yn,Et,Rn,Qn,We,Xn,Zn,Gn,R,Jn,Mt,ea,ta,zt,oa,na,aa,pe,Wo,Q,he,no,Le,sa,ao,ra,Lo,X,Ne,ia,Ve,la,so,ca,da,No,Z,Ie,pa,Be,ha,ro,ma,ua,Vo,G,me,io,He,fa,lo,ga,Io,j,Ke,_a,Ye,va,Re,ba,wa,ya,Qe,Sa,Ot,$a,Ta,Ua,Xe,ka,Ze,Ca,xa,ja,z,Ge,Fa,J,qa,Dt,Pa,Ea,co,Ma,za,Oa,ue,Da,fe,Bo,ee,ge,po,Je,Aa,ho,Wa,Ho,F,et,La,te,Na,mo,Va,Ia,tt,Ba,Ha,Ka,ot,Ya,At,Ra,Qa,Xa,nt,Za,at,Ga,Ja,es,P,st,ts,oe,os,Wt,ns,as,uo,ss,rs,is,_e,ls,ve,cs,be,Ko,ne,we,fo,rt,ds,go,ps,Yo,x,it,hs,_o,ms,us,lt,fs,ct,gs,_s,vs,dt,bs,Lt,ws,ys,Ss,pt,$s,ht,Ts,Us,ks,E,mt,Cs,ae,xs,Nt,js,Fs,vo,qs,Ps,Es,ye,Ms,Se,zs,$e,Ro,se,Te,bo,ut,Os,wo,Ds,Qo,q,ft,As,gt,Ws,_t,Ls,Ns,Vs,vt,Is,Vt,Bs,Hs,Ks,bt,Ys,wt,Rs,Qs,Xs,O,yt,Zs,re,Gs,It,Js,er,yo,tr,or,nr,Ue,ar,ke,Xo;return l=new Fe({}),qe=new Fe({}),De=new Fe({}),Ae=new A({props:{name:"class transformers.UniSpeechConfig",anchor:"transformers.UniSpeechConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"feat_quantizer_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"do_stable_layer_norm",val:" = False"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"num_codevectors_per_group",val:" = 320"},{name:"num_codevector_groups",val:" = 2"},{name:"contrastive_logits_temperature",val:" = 0.1"},{name:"num_negatives",val:" = 100"},{name:"codevector_dim",val:" = 256"},{name:"proj_codevector_dim",val:" = 256"},{name:"diversity_loss_weight",val:" = 0.1"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"num_ctc_classes",val:" = 80"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"replace_prob",val:" = 0.5"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the UniSpeech model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechModel">UniSpeechModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechModel">UniSpeechModel</a>.`,name:"vocab_size"},{anchor:"transformers.UniSpeechConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.UniSpeechConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.UniSpeechConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.UniSpeechConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.UniSpeechConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.UniSpeechConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.UniSpeechConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.UniSpeechConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechForCTC">UniSpeechForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.UniSpeechConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.UniSpeechConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.UniSpeechConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.UniSpeechConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.UniSpeechConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.UniSpeechConfig.feat_quantizer_dropout",description:`<strong>feat_quantizer_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probabilitiy for quantized feature encoder states.`,name:"feat_quantizer_dropout"},{anchor:"transformers.UniSpeechConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.UniSpeechConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.UniSpeechConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the the length of
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
instance of <a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechForCTC">UniSpeechForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.UniSpeechConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechForCTC">UniSpeechForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.UniSpeechConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechForSequenceClassification">UniSpeechForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.UniSpeechConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.UniSpeechConfig.replace_prob",description:`<strong>replace_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Propability that transformer feature is replaced by quantized feature for pretraining.`,name:"replace_prob"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/configuration_unispeech.py#L32"}}),pe=new Ut({props:{anchor:"transformers.UniSpeechConfig.example",$$slots:{default:[ci]},$$scope:{ctx:k}}}),Le=new Fe({}),Ne=new A({props:{name:"class transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput",anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"extract_features",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput.extract_features",description:`<strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) &#x2014;
Sequence of extracted feature vectors of the last convolutional layer of the model.`,name:"extract_features"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L75"}}),Ie=new A({props:{name:"class transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput",anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"projected_states",val:": FloatTensor = None"},{name:"projected_quantized_states",val:": FloatTensor = None"},{name:"codevector_perplexity",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when model is in train mode, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L104"}}),He=new Fe({}),Ke=new A({props:{name:"class transformers.UniSpeechModel",anchor:"transformers.UniSpeechModel",parameters:[{name:"config",val:": UniSpeechConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.4/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L1088"}}),Ge=new A({props:{name:"forward",anchor:"transformers.UniSpeechModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.19.4/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L1153",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechConfig"
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
  href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ue=new Sn({props:{$$slots:{default:[di]},$$scope:{ctx:k}}}),fe=new Ut({props:{anchor:"transformers.UniSpeechModel.forward.example",$$slots:{default:[pi]},$$scope:{ctx:k}}}),Je=new Fe({}),et=new A({props:{name:"class transformers.UniSpeechForCTC",anchor:"transformers.UniSpeechForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.4/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L1364"}}),st=new A({props:{name:"forward",anchor:"transformers.UniSpeechForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.19.4/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L1405",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.4/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechConfig"
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
  href="/docs/transformers/v4.19.4/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_e=new Sn({props:{$$slots:{default:[hi]},$$scope:{ctx:k}}}),ve=new Ut({props:{anchor:"transformers.UniSpeechForCTC.forward.example",$$slots:{default:[mi]},$$scope:{ctx:k}}}),be=new Ut({props:{anchor:"transformers.UniSpeechForCTC.forward.example-2",$$slots:{default:[ui]},$$scope:{ctx:k}}}),rt=new Fe({}),it=new A({props:{name:"class transformers.UniSpeechForSequenceClassification",anchor:"transformers.UniSpeechForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UniSpeechForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.4/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L1495"}}),mt=new A({props:{name:"forward",anchor:"transformers.UniSpeechForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.19.4/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L1540",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.4/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechConfig"
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
  href="/docs/transformers/v4.19.4/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new Sn({props:{$$slots:{default:[fi]},$$scope:{ctx:k}}}),Se=new Ut({props:{anchor:"transformers.UniSpeechForSequenceClassification.forward.example",$$slots:{default:[gi]},$$scope:{ctx:k}}}),$e=new Ut({props:{anchor:"transformers.UniSpeechForSequenceClassification.forward.example-2",$$slots:{default:[_i]},$$scope:{ctx:k}}}),ut=new Fe({}),ft=new A({props:{name:"class transformers.UniSpeechForPreTraining",anchor:"transformers.UniSpeechForPreTraining",parameters:[{name:"config",val:": UniSpeechConfig"}],parametersDescription:[{anchor:"transformers.UniSpeechForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechConfig">UniSpeechConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.4/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L1213"}}),yt=new A({props:{name:"forward",anchor:"transformers.UniSpeechForPreTraining.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.UniSpeechForPreTraining.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.19.4/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UniSpeechForPreTraining.forward.mask_time_indices",description:`<strong>mask_time_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices to mask extracted features for contrastive loss. When in training mode, model learns to predict
masked extracted features in <em>config.proj_codevector_dim</em> space.`,name:"mask_time_indices"},{anchor:"transformers.UniSpeechForPreTraining.forward.sampled_negative_indices",description:`<strong>sampled_negative_indices</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, sequence_length, num_negatives)</code>, <em>optional</em>) &#x2014;
Indices indicating which quantized target vectors are used as negative sampled vectors in contrastive loss.
Required input for pre-training.`,name:"sampled_negative_indices"}],source:"https://github.com/huggingface/transformers/blob/v4.19.4/src/transformers/models/unispeech/modeling_unispeech.py#L1274",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechConfig"
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
  href="/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput"
>transformers.models.unispeech.modeling_unispeech.UniSpeechForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ue=new Sn({props:{$$slots:{default:[vi]},$$scope:{ctx:k}}}),ke=new Ut({props:{anchor:"transformers.UniSpeechForPreTraining.forward.example",$$slots:{default:[bi]},$$scope:{ctx:k}}}),{c(){c=n("meta"),v=h(),p=n("h1"),u=n("a"),b=n("span"),w(l.$$.fragment),g=h(),C=n("span"),$n=r("UniSpeech"),Fo=h(),H=n("h2"),ie=n("a"),Gt=n("span"),w(qe.$$.fragment),Tn=h(),Jt=n("span"),Un=r("Overview"),qo=h(),le=n("p"),kn=r("The UniSpeech model was proposed in "),Pe=n("a"),Cn=r("UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled Data"),xn=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei, Michael
Zeng, Xuedong Huang .`),Po=h(),xt=n("p"),jn=r("The abstract from the paper is the following:"),Eo=h(),jt=n("p"),eo=n("em"),Fn=r(`In this paper, we propose a unified pre-training approach called UniSpeech to learn speech representations with both
unlabeled and labeled data, in which supervised phonetic CTC learning and phonetically-aware contrastive
self-supervised learning are conducted in a multi-task learning manner. The resultant representations can capture
information more correlated with phonetic structures and improve the generalization across languages and domains. We
evaluate the effectiveness of UniSpeech for cross-lingual representation learning on public CommonVoice corpus. The
results show that UniSpeech outperforms self-supervised pretraining and supervised transfer learning for speech
recognition by a maximum of 13.4% and 17.8% relative phone error rate reductions respectively (averaged over all
testing languages). The transferability of UniSpeech is also demonstrated on a domain-shift speech recognition task,
i.e., a relative word error rate reduction of 6% against the previous approach.`),Mo=h(),Ft=n("p"),qn=r("Tips:"),zo=h(),ce=n("ul"),Ee=n("li"),Pn=r(`UniSpeech is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please
use `),qt=n("a"),En=r("Wav2Vec2Processor"),Mn=r(" for the feature extraction."),zn=h(),Me=n("li"),On=r(`UniSpeech model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),Pt=n("a"),Dn=r("Wav2Vec2CTCTokenizer"),An=r("."),Oo=h(),W=n("p"),Wn=r("This model was contributed by "),ze=n("a"),Ln=r("patrickvonplaten"),Nn=r(`. The Authors\u2019 code can be
found `),Oe=n("a"),Vn=r("here"),In=r("."),Do=h(),K=n("h2"),de=n("a"),to=n("span"),w(De.$$.fragment),Bn=h(),oo=n("span"),Hn=r("UniSpeechConfig"),Ao=h(),M=n("div"),w(Ae.$$.fragment),Kn=h(),Y=n("p"),Yn=r("This is the configuration class to store the configuration of a "),Et=n("a"),Rn=r("UniSpeechModel"),Qn=r(`. It is used to instantiate an
UniSpeech model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeech
`),We=n("a"),Xn=r("microsoft/unispeech-large-1500h-cv"),Zn=r(" architecture."),Gn=h(),R=n("p"),Jn=r("Configuration objects inherit from "),Mt=n("a"),ea=r("PretrainedConfig"),ta=r(` and can be used to control the model outputs. Read the
documentation from `),zt=n("a"),oa=r("PretrainedConfig"),na=r(" for more information."),aa=h(),w(pe.$$.fragment),Wo=h(),Q=n("h2"),he=n("a"),no=n("span"),w(Le.$$.fragment),sa=h(),ao=n("span"),ra=r("UniSpeech specific outputs"),Lo=h(),X=n("div"),w(Ne.$$.fragment),ia=h(),Ve=n("p"),la=r("Output type of "),so=n("code"),ca=r("UniSpeechBaseModelOutput"),da=r(", with potential hidden states and attentions."),No=h(),Z=n("div"),w(Ie.$$.fragment),pa=h(),Be=n("p"),ha=r("Output type of "),ro=n("code"),ma=r("UniSpeechForPreTrainingOutput"),ua=r(", with potential hidden states and attentions."),Vo=h(),G=n("h2"),me=n("a"),io=n("span"),w(He.$$.fragment),fa=h(),lo=n("span"),ga=r("UniSpeechModel"),Io=h(),j=n("div"),w(Ke.$$.fragment),_a=h(),Ye=n("p"),va=r(`The bare UniSpeech Model transformer outputting raw hidden-states without any specific head on top.
UniSpeech was proposed in `),Re=n("a"),ba=r(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),wa=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),ya=h(),Qe=n("p"),Sa=r("This model inherits from "),Ot=n("a"),$a=r("PreTrainedModel"),Ta=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ua=h(),Xe=n("p"),ka=r("This model is a PyTorch "),Ze=n("a"),Ca=r("torch.nn.Module"),xa=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ja=h(),z=n("div"),w(Ge.$$.fragment),Fa=h(),J=n("p"),qa=r("The "),Dt=n("a"),Pa=r("UniSpeechModel"),Ea=r(" forward method, overrides the "),co=n("code"),Ma=r("__call__"),za=r(" special method."),Oa=h(),w(ue.$$.fragment),Da=h(),w(fe.$$.fragment),Bo=h(),ee=n("h2"),ge=n("a"),po=n("span"),w(Je.$$.fragment),Aa=h(),ho=n("span"),Wa=r("UniSpeechForCTC"),Ho=h(),F=n("div"),w(et.$$.fragment),La=h(),te=n("p"),Na=r("UniSpeech Model with a "),mo=n("code"),Va=r("language modeling"),Ia=r(` head on top for Connectionist Temporal Classification (CTC).
UniSpeech was proposed in `),tt=n("a"),Ba=r(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ha=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Ka=h(),ot=n("p"),Ya=r("This model inherits from "),At=n("a"),Ra=r("PreTrainedModel"),Qa=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Xa=h(),nt=n("p"),Za=r("This model is a PyTorch "),at=n("a"),Ga=r("torch.nn.Module"),Ja=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),es=h(),P=n("div"),w(st.$$.fragment),ts=h(),oe=n("p"),os=r("The "),Wt=n("a"),ns=r("UniSpeechForCTC"),as=r(" forward method, overrides the "),uo=n("code"),ss=r("__call__"),rs=r(" special method."),is=h(),w(_e.$$.fragment),ls=h(),w(ve.$$.fragment),cs=h(),w(be.$$.fragment),Ko=h(),ne=n("h2"),we=n("a"),fo=n("span"),w(rt.$$.fragment),ds=h(),go=n("span"),ps=r("UniSpeechForSequenceClassification"),Yo=h(),x=n("div"),w(it.$$.fragment),hs=h(),_o=n("p"),ms=r(`UniSpeech Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),us=h(),lt=n("p"),fs=r("UniSpeech was proposed in "),ct=n("a"),gs=r(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),_s=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),vs=h(),dt=n("p"),bs=r("This model inherits from "),Lt=n("a"),ws=r("PreTrainedModel"),ys=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ss=h(),pt=n("p"),$s=r("This model is a PyTorch "),ht=n("a"),Ts=r("torch.nn.Module"),Us=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ks=h(),E=n("div"),w(mt.$$.fragment),Cs=h(),ae=n("p"),xs=r("The "),Nt=n("a"),js=r("UniSpeechForSequenceClassification"),Fs=r(" forward method, overrides the "),vo=n("code"),qs=r("__call__"),Ps=r(" special method."),Es=h(),w(ye.$$.fragment),Ms=h(),w(Se.$$.fragment),zs=h(),w($e.$$.fragment),Ro=h(),se=n("h2"),Te=n("a"),bo=n("span"),w(ut.$$.fragment),Os=h(),wo=n("span"),Ds=r("UniSpeechForPreTraining"),Qo=h(),q=n("div"),w(ft.$$.fragment),As=h(),gt=n("p"),Ws=r(`UniSpeech Model with a vector-quantization module and ctc loss for pre-training.
UniSpeech was proposed in `),_t=n("a"),Ls=r(`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Ns=r(` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Vs=h(),vt=n("p"),Is=r("This model inherits from "),Vt=n("a"),Bs=r("PreTrainedModel"),Hs=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Ks=h(),bt=n("p"),Ys=r("This model is a PyTorch "),wt=n("a"),Rs=r("torch.nn.Module"),Qs=r(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xs=h(),O=n("div"),w(yt.$$.fragment),Zs=h(),re=n("p"),Gs=r("The "),It=n("a"),Js=r("UniSpeechForPreTraining"),er=r(" forward method, overrides the "),yo=n("code"),tr=r("__call__"),or=r(" special method."),nr=h(),w(Ue.$$.fragment),ar=h(),w(ke.$$.fragment),this.h()},l(t){const f=ii('[data-svelte="svelte-1phssyn"]',document.head);c=a(f,"META",{name:!0,content:!0}),f.forEach(o),v=m(t),p=a(t,"H1",{class:!0});var St=s(p);u=a(St,"A",{id:!0,class:!0,href:!0});var So=s(u);b=a(So,"SPAN",{});var $o=s(b);y(l.$$.fragment,$o),$o.forEach(o),So.forEach(o),g=m(St),C=a(St,"SPAN",{});var To=s(C);$n=i(To,"UniSpeech"),To.forEach(o),St.forEach(o),Fo=m(t),H=a(t,"H2",{class:!0});var $t=s(H);ie=a($t,"A",{id:!0,class:!0,href:!0});var Uo=s(ie);Gt=a(Uo,"SPAN",{});var ko=s(Gt);y(qe.$$.fragment,ko),ko.forEach(o),Uo.forEach(o),Tn=m($t),Jt=a($t,"SPAN",{});var Co=s(Jt);Un=i(Co,"Overview"),Co.forEach(o),$t.forEach(o),qo=m(t),le=a(t,"P",{});var Tt=s(le);kn=i(Tt,"The UniSpeech model was proposed in "),Pe=a(Tt,"A",{href:!0,rel:!0});var xo=s(Pe);Cn=i(xo,"UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled Data"),xo.forEach(o),xn=i(Tt,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei, Michael
Zeng, Xuedong Huang .`),Tt.forEach(o),Po=m(t),xt=a(t,"P",{});var jo=s(xt);jn=i(jo,"The abstract from the paper is the following:"),jo.forEach(o),Eo=m(t),jt=a(t,"P",{});var sr=s(jt);eo=a(sr,"EM",{});var rr=s(eo);Fn=i(rr,`In this paper, we propose a unified pre-training approach called UniSpeech to learn speech representations with both
unlabeled and labeled data, in which supervised phonetic CTC learning and phonetically-aware contrastive
self-supervised learning are conducted in a multi-task learning manner. The resultant representations can capture
information more correlated with phonetic structures and improve the generalization across languages and domains. We
evaluate the effectiveness of UniSpeech for cross-lingual representation learning on public CommonVoice corpus. The
results show that UniSpeech outperforms self-supervised pretraining and supervised transfer learning for speech
recognition by a maximum of 13.4% and 17.8% relative phone error rate reductions respectively (averaged over all
testing languages). The transferability of UniSpeech is also demonstrated on a domain-shift speech recognition task,
i.e., a relative word error rate reduction of 6% against the previous approach.`),rr.forEach(o),sr.forEach(o),Mo=m(t),Ft=a(t,"P",{});var ir=s(Ft);qn=i(ir,"Tips:"),ir.forEach(o),zo=m(t),ce=a(t,"UL",{});var Zo=s(ce);Ee=a(Zo,"LI",{});var Go=s(Ee);Pn=i(Go,`UniSpeech is a speech model that accepts a float array corresponding to the raw waveform of the speech signal. Please
use `),qt=a(Go,"A",{href:!0});var lr=s(qt);En=i(lr,"Wav2Vec2Processor"),lr.forEach(o),Mn=i(Go," for the feature extraction."),Go.forEach(o),zn=m(Zo),Me=a(Zo,"LI",{});var Jo=s(Me);On=i(Jo,`UniSpeech model can be fine-tuned using connectionist temporal classification (CTC) so the model output has to be
decoded using `),Pt=a(Jo,"A",{href:!0});var cr=s(Pt);Dn=i(cr,"Wav2Vec2CTCTokenizer"),cr.forEach(o),An=i(Jo,"."),Jo.forEach(o),Zo.forEach(o),Oo=m(t),W=a(t,"P",{});var Bt=s(W);Wn=i(Bt,"This model was contributed by "),ze=a(Bt,"A",{href:!0,rel:!0});var dr=s(ze);Ln=i(dr,"patrickvonplaten"),dr.forEach(o),Nn=i(Bt,`. The Authors\u2019 code can be
found `),Oe=a(Bt,"A",{href:!0,rel:!0});var pr=s(Oe);Vn=i(pr,"here"),pr.forEach(o),In=i(Bt,"."),Bt.forEach(o),Do=m(t),K=a(t,"H2",{class:!0});var en=s(K);de=a(en,"A",{id:!0,class:!0,href:!0});var hr=s(de);to=a(hr,"SPAN",{});var mr=s(to);y(De.$$.fragment,mr),mr.forEach(o),hr.forEach(o),Bn=m(en),oo=a(en,"SPAN",{});var ur=s(oo);Hn=i(ur,"UniSpeechConfig"),ur.forEach(o),en.forEach(o),Ao=m(t),M=a(t,"DIV",{class:!0});var Ce=s(M);y(Ae.$$.fragment,Ce),Kn=m(Ce),Y=a(Ce,"P",{});var Ht=s(Y);Yn=i(Ht,"This is the configuration class to store the configuration of a "),Et=a(Ht,"A",{href:!0});var fr=s(Et);Rn=i(fr,"UniSpeechModel"),fr.forEach(o),Qn=i(Ht,`. It is used to instantiate an
UniSpeech model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the UniSpeech
`),We=a(Ht,"A",{href:!0,rel:!0});var gr=s(We);Xn=i(gr,"microsoft/unispeech-large-1500h-cv"),gr.forEach(o),Zn=i(Ht," architecture."),Ht.forEach(o),Gn=m(Ce),R=a(Ce,"P",{});var Kt=s(R);Jn=i(Kt,"Configuration objects inherit from "),Mt=a(Kt,"A",{href:!0});var _r=s(Mt);ea=i(_r,"PretrainedConfig"),_r.forEach(o),ta=i(Kt,` and can be used to control the model outputs. Read the
documentation from `),zt=a(Kt,"A",{href:!0});var vr=s(zt);oa=i(vr,"PretrainedConfig"),vr.forEach(o),na=i(Kt," for more information."),Kt.forEach(o),aa=m(Ce),y(pe.$$.fragment,Ce),Ce.forEach(o),Wo=m(t),Q=a(t,"H2",{class:!0});var tn=s(Q);he=a(tn,"A",{id:!0,class:!0,href:!0});var br=s(he);no=a(br,"SPAN",{});var wr=s(no);y(Le.$$.fragment,wr),wr.forEach(o),br.forEach(o),sa=m(tn),ao=a(tn,"SPAN",{});var yr=s(ao);ra=i(yr,"UniSpeech specific outputs"),yr.forEach(o),tn.forEach(o),Lo=m(t),X=a(t,"DIV",{class:!0});var on=s(X);y(Ne.$$.fragment,on),ia=m(on),Ve=a(on,"P",{});var nn=s(Ve);la=i(nn,"Output type of "),so=a(nn,"CODE",{});var Sr=s(so);ca=i(Sr,"UniSpeechBaseModelOutput"),Sr.forEach(o),da=i(nn,", with potential hidden states and attentions."),nn.forEach(o),on.forEach(o),No=m(t),Z=a(t,"DIV",{class:!0});var an=s(Z);y(Ie.$$.fragment,an),pa=m(an),Be=a(an,"P",{});var sn=s(Be);ha=i(sn,"Output type of "),ro=a(sn,"CODE",{});var $r=s(ro);ma=i($r,"UniSpeechForPreTrainingOutput"),$r.forEach(o),ua=i(sn,", with potential hidden states and attentions."),sn.forEach(o),an.forEach(o),Vo=m(t),G=a(t,"H2",{class:!0});var rn=s(G);me=a(rn,"A",{id:!0,class:!0,href:!0});var Tr=s(me);io=a(Tr,"SPAN",{});var Ur=s(io);y(He.$$.fragment,Ur),Ur.forEach(o),Tr.forEach(o),fa=m(rn),lo=a(rn,"SPAN",{});var kr=s(lo);ga=i(kr,"UniSpeechModel"),kr.forEach(o),rn.forEach(o),Io=m(t),j=a(t,"DIV",{class:!0});var L=s(j);y(Ke.$$.fragment,L),_a=m(L),Ye=a(L,"P",{});var ln=s(Ye);va=i(ln,`The bare UniSpeech Model transformer outputting raw hidden-states without any specific head on top.
UniSpeech was proposed in `),Re=a(ln,"A",{href:!0,rel:!0});var Cr=s(Re);ba=i(Cr,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Cr.forEach(o),wa=i(ln,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),ln.forEach(o),ya=m(L),Qe=a(L,"P",{});var cn=s(Qe);Sa=i(cn,"This model inherits from "),Ot=a(cn,"A",{href:!0});var xr=s(Ot);$a=i(xr,"PreTrainedModel"),xr.forEach(o),Ta=i(cn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),cn.forEach(o),Ua=m(L),Xe=a(L,"P",{});var dn=s(Xe);ka=i(dn,"This model is a PyTorch "),Ze=a(dn,"A",{href:!0,rel:!0});var jr=s(Ze);Ca=i(jr,"torch.nn.Module"),jr.forEach(o),xa=i(dn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dn.forEach(o),ja=m(L),z=a(L,"DIV",{class:!0});var xe=s(z);y(Ge.$$.fragment,xe),Fa=m(xe),J=a(xe,"P",{});var Yt=s(J);qa=i(Yt,"The "),Dt=a(Yt,"A",{href:!0});var Fr=s(Dt);Pa=i(Fr,"UniSpeechModel"),Fr.forEach(o),Ea=i(Yt," forward method, overrides the "),co=a(Yt,"CODE",{});var qr=s(co);Ma=i(qr,"__call__"),qr.forEach(o),za=i(Yt," special method."),Yt.forEach(o),Oa=m(xe),y(ue.$$.fragment,xe),Da=m(xe),y(fe.$$.fragment,xe),xe.forEach(o),L.forEach(o),Bo=m(t),ee=a(t,"H2",{class:!0});var pn=s(ee);ge=a(pn,"A",{id:!0,class:!0,href:!0});var Pr=s(ge);po=a(Pr,"SPAN",{});var Er=s(po);y(Je.$$.fragment,Er),Er.forEach(o),Pr.forEach(o),Aa=m(pn),ho=a(pn,"SPAN",{});var Mr=s(ho);Wa=i(Mr,"UniSpeechForCTC"),Mr.forEach(o),pn.forEach(o),Ho=m(t),F=a(t,"DIV",{class:!0});var N=s(F);y(et.$$.fragment,N),La=m(N),te=a(N,"P",{});var Rt=s(te);Na=i(Rt,"UniSpeech Model with a "),mo=a(Rt,"CODE",{});var zr=s(mo);Va=i(zr,"language modeling"),zr.forEach(o),Ia=i(Rt,` head on top for Connectionist Temporal Classification (CTC).
UniSpeech was proposed in `),tt=a(Rt,"A",{href:!0,rel:!0});var Or=s(tt);Ba=i(Or,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Or.forEach(o),Ha=i(Rt,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),Rt.forEach(o),Ka=m(N),ot=a(N,"P",{});var hn=s(ot);Ya=i(hn,"This model inherits from "),At=a(hn,"A",{href:!0});var Dr=s(At);Ra=i(Dr,"PreTrainedModel"),Dr.forEach(o),Qa=i(hn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),hn.forEach(o),Xa=m(N),nt=a(N,"P",{});var mn=s(nt);Za=i(mn,"This model is a PyTorch "),at=a(mn,"A",{href:!0,rel:!0});var Ar=s(at);Ga=i(Ar,"torch.nn.Module"),Ar.forEach(o),Ja=i(mn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mn.forEach(o),es=m(N),P=a(N,"DIV",{class:!0});var V=s(P);y(st.$$.fragment,V),ts=m(V),oe=a(V,"P",{});var Qt=s(oe);os=i(Qt,"The "),Wt=a(Qt,"A",{href:!0});var Wr=s(Wt);ns=i(Wr,"UniSpeechForCTC"),Wr.forEach(o),as=i(Qt," forward method, overrides the "),uo=a(Qt,"CODE",{});var Lr=s(uo);ss=i(Lr,"__call__"),Lr.forEach(o),rs=i(Qt," special method."),Qt.forEach(o),is=m(V),y(_e.$$.fragment,V),ls=m(V),y(ve.$$.fragment,V),cs=m(V),y(be.$$.fragment,V),V.forEach(o),N.forEach(o),Ko=m(t),ne=a(t,"H2",{class:!0});var un=s(ne);we=a(un,"A",{id:!0,class:!0,href:!0});var Nr=s(we);fo=a(Nr,"SPAN",{});var Vr=s(fo);y(rt.$$.fragment,Vr),Vr.forEach(o),Nr.forEach(o),ds=m(un),go=a(un,"SPAN",{});var Ir=s(go);ps=i(Ir,"UniSpeechForSequenceClassification"),Ir.forEach(o),un.forEach(o),Yo=m(t),x=a(t,"DIV",{class:!0});var D=s(x);y(it.$$.fragment,D),hs=m(D),_o=a(D,"P",{});var Br=s(_o);ms=i(Br,`UniSpeech Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like
SUPERB Keyword Spotting.`),Br.forEach(o),us=m(D),lt=a(D,"P",{});var fn=s(lt);fs=i(fn,"UniSpeech was proposed in "),ct=a(fn,"A",{href:!0,rel:!0});var Hr=s(ct);gs=i(Hr,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Hr.forEach(o),_s=i(fn,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),fn.forEach(o),vs=m(D),dt=a(D,"P",{});var gn=s(dt);bs=i(gn,"This model inherits from "),Lt=a(gn,"A",{href:!0});var Kr=s(Lt);ws=i(Kr,"PreTrainedModel"),Kr.forEach(o),ys=i(gn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),gn.forEach(o),Ss=m(D),pt=a(D,"P",{});var _n=s(pt);$s=i(_n,"This model is a PyTorch "),ht=a(_n,"A",{href:!0,rel:!0});var Yr=s(ht);Ts=i(Yr,"torch.nn.Module"),Yr.forEach(o),Us=i(_n,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_n.forEach(o),ks=m(D),E=a(D,"DIV",{class:!0});var I=s(E);y(mt.$$.fragment,I),Cs=m(I),ae=a(I,"P",{});var Xt=s(ae);xs=i(Xt,"The "),Nt=a(Xt,"A",{href:!0});var Rr=s(Nt);js=i(Rr,"UniSpeechForSequenceClassification"),Rr.forEach(o),Fs=i(Xt," forward method, overrides the "),vo=a(Xt,"CODE",{});var Qr=s(vo);qs=i(Qr,"__call__"),Qr.forEach(o),Ps=i(Xt," special method."),Xt.forEach(o),Es=m(I),y(ye.$$.fragment,I),Ms=m(I),y(Se.$$.fragment,I),zs=m(I),y($e.$$.fragment,I),I.forEach(o),D.forEach(o),Ro=m(t),se=a(t,"H2",{class:!0});var vn=s(se);Te=a(vn,"A",{id:!0,class:!0,href:!0});var Xr=s(Te);bo=a(Xr,"SPAN",{});var Zr=s(bo);y(ut.$$.fragment,Zr),Zr.forEach(o),Xr.forEach(o),Os=m(vn),wo=a(vn,"SPAN",{});var Gr=s(wo);Ds=i(Gr,"UniSpeechForPreTraining"),Gr.forEach(o),vn.forEach(o),Qo=m(t),q=a(t,"DIV",{class:!0});var B=s(q);y(ft.$$.fragment,B),As=m(B),gt=a(B,"P",{});var bn=s(gt);Ws=i(bn,`UniSpeech Model with a vector-quantization module and ctc loss for pre-training.
UniSpeech was proposed in `),_t=a(bn,"A",{href:!0,rel:!0});var Jr=s(_t);Ls=i(Jr,`UniSpeech: Unified Speech Representation Learning with Labeled and Unlabeled
Data`),Jr.forEach(o),Ns=i(bn,` by Chengyi Wang, Yu Wu, Yao Qian, Kenichi Kumatani, Shujie Liu, Furu Wei,
Michael Zeng, Xuedong Huang.`),bn.forEach(o),Vs=m(B),vt=a(B,"P",{});var wn=s(vt);Is=i(wn,"This model inherits from "),Vt=a(wn,"A",{href:!0});var ei=s(Vt);Bs=i(ei,"PreTrainedModel"),ei.forEach(o),Hs=i(wn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),wn.forEach(o),Ks=m(B),bt=a(B,"P",{});var yn=s(bt);Ys=i(yn,"This model is a PyTorch "),wt=a(yn,"A",{href:!0,rel:!0});var ti=s(wt);Rs=i(ti,"torch.nn.Module"),ti.forEach(o),Qs=i(yn,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yn.forEach(o),Xs=m(B),O=a(B,"DIV",{class:!0});var je=s(O);y(yt.$$.fragment,je),Zs=m(je),re=a(je,"P",{});var Zt=s(re);Gs=i(Zt,"The "),It=a(Zt,"A",{href:!0});var oi=s(It);Js=i(oi,"UniSpeechForPreTraining"),oi.forEach(o),er=i(Zt," forward method, overrides the "),yo=a(Zt,"CODE",{});var ni=s(yo);tr=i(ni,"__call__"),ni.forEach(o),or=i(Zt," special method."),Zt.forEach(o),nr=m(je),y(Ue.$$.fragment,je),ar=m(je),y(ke.$$.fragment,je),je.forEach(o),B.forEach(o),this.h()},h(){d(c,"name","hf:doc:metadata"),d(c,"content",JSON.stringify(yi)),d(u,"id","unispeech"),d(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(u,"href","#unispeech"),d(p,"class","relative group"),d(ie,"id","overview"),d(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ie,"href","#overview"),d(H,"class","relative group"),d(Pe,"href","https://arxiv.org/abs/2101.07597"),d(Pe,"rel","nofollow"),d(qt,"href","/docs/transformers/v4.19.4/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor"),d(Pt,"href","/docs/transformers/v4.19.4/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),d(ze,"href","https://huggingface.co/patrickvonplaten"),d(ze,"rel","nofollow"),d(Oe,"href","https://github.com/microsoft/UniSpeech/tree/main/UniSpeech"),d(Oe,"rel","nofollow"),d(de,"id","transformers.UniSpeechConfig"),d(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(de,"href","#transformers.UniSpeechConfig"),d(K,"class","relative group"),d(Et,"href","/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechModel"),d(We,"href","https://huggingface.co/microsoft/unispeech-large-1500h-cv"),d(We,"rel","nofollow"),d(Mt,"href","/docs/transformers/v4.19.4/en/main_classes/configuration#transformers.PretrainedConfig"),d(zt,"href","/docs/transformers/v4.19.4/en/main_classes/configuration#transformers.PretrainedConfig"),d(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(he,"id","transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput"),d(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(he,"href","#transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput"),d(Q,"class","relative group"),d(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(me,"id","transformers.UniSpeechModel"),d(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(me,"href","#transformers.UniSpeechModel"),d(G,"class","relative group"),d(Re,"href","https://arxiv.org/abs/2101.07597"),d(Re,"rel","nofollow"),d(Ot,"href","/docs/transformers/v4.19.4/en/main_classes/model#transformers.PreTrainedModel"),d(Ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Ze,"rel","nofollow"),d(Dt,"href","/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechModel"),d(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(ge,"id","transformers.UniSpeechForCTC"),d(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ge,"href","#transformers.UniSpeechForCTC"),d(ee,"class","relative group"),d(tt,"href","https://arxiv.org/abs/2101.07597"),d(tt,"rel","nofollow"),d(At,"href","/docs/transformers/v4.19.4/en/main_classes/model#transformers.PreTrainedModel"),d(at,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(at,"rel","nofollow"),d(Wt,"href","/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechForCTC"),d(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(we,"id","transformers.UniSpeechForSequenceClassification"),d(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(we,"href","#transformers.UniSpeechForSequenceClassification"),d(ne,"class","relative group"),d(ct,"href","https://arxiv.org/abs/2101.07597"),d(ct,"rel","nofollow"),d(Lt,"href","/docs/transformers/v4.19.4/en/main_classes/model#transformers.PreTrainedModel"),d(ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(ht,"rel","nofollow"),d(Nt,"href","/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechForSequenceClassification"),d(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(Te,"id","transformers.UniSpeechForPreTraining"),d(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Te,"href","#transformers.UniSpeechForPreTraining"),d(se,"class","relative group"),d(_t,"href","https://arxiv.org/abs/2101.07597"),d(_t,"rel","nofollow"),d(Vt,"href","/docs/transformers/v4.19.4/en/main_classes/model#transformers.PreTrainedModel"),d(wt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(wt,"rel","nofollow"),d(It,"href","/docs/transformers/v4.19.4/en/model_doc/unispeech#transformers.UniSpeechForPreTraining"),d(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),d(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,c),_(t,v,f),_(t,p,f),e(p,u),e(u,b),S(l,b,null),e(p,g),e(p,C),e(C,$n),_(t,Fo,f),_(t,H,f),e(H,ie),e(ie,Gt),S(qe,Gt,null),e(H,Tn),e(H,Jt),e(Jt,Un),_(t,qo,f),_(t,le,f),e(le,kn),e(le,Pe),e(Pe,Cn),e(le,xn),_(t,Po,f),_(t,xt,f),e(xt,jn),_(t,Eo,f),_(t,jt,f),e(jt,eo),e(eo,Fn),_(t,Mo,f),_(t,Ft,f),e(Ft,qn),_(t,zo,f),_(t,ce,f),e(ce,Ee),e(Ee,Pn),e(Ee,qt),e(qt,En),e(Ee,Mn),e(ce,zn),e(ce,Me),e(Me,On),e(Me,Pt),e(Pt,Dn),e(Me,An),_(t,Oo,f),_(t,W,f),e(W,Wn),e(W,ze),e(ze,Ln),e(W,Nn),e(W,Oe),e(Oe,Vn),e(W,In),_(t,Do,f),_(t,K,f),e(K,de),e(de,to),S(De,to,null),e(K,Bn),e(K,oo),e(oo,Hn),_(t,Ao,f),_(t,M,f),S(Ae,M,null),e(M,Kn),e(M,Y),e(Y,Yn),e(Y,Et),e(Et,Rn),e(Y,Qn),e(Y,We),e(We,Xn),e(Y,Zn),e(M,Gn),e(M,R),e(R,Jn),e(R,Mt),e(Mt,ea),e(R,ta),e(R,zt),e(zt,oa),e(R,na),e(M,aa),S(pe,M,null),_(t,Wo,f),_(t,Q,f),e(Q,he),e(he,no),S(Le,no,null),e(Q,sa),e(Q,ao),e(ao,ra),_(t,Lo,f),_(t,X,f),S(Ne,X,null),e(X,ia),e(X,Ve),e(Ve,la),e(Ve,so),e(so,ca),e(Ve,da),_(t,No,f),_(t,Z,f),S(Ie,Z,null),e(Z,pa),e(Z,Be),e(Be,ha),e(Be,ro),e(ro,ma),e(Be,ua),_(t,Vo,f),_(t,G,f),e(G,me),e(me,io),S(He,io,null),e(G,fa),e(G,lo),e(lo,ga),_(t,Io,f),_(t,j,f),S(Ke,j,null),e(j,_a),e(j,Ye),e(Ye,va),e(Ye,Re),e(Re,ba),e(Ye,wa),e(j,ya),e(j,Qe),e(Qe,Sa),e(Qe,Ot),e(Ot,$a),e(Qe,Ta),e(j,Ua),e(j,Xe),e(Xe,ka),e(Xe,Ze),e(Ze,Ca),e(Xe,xa),e(j,ja),e(j,z),S(Ge,z,null),e(z,Fa),e(z,J),e(J,qa),e(J,Dt),e(Dt,Pa),e(J,Ea),e(J,co),e(co,Ma),e(J,za),e(z,Oa),S(ue,z,null),e(z,Da),S(fe,z,null),_(t,Bo,f),_(t,ee,f),e(ee,ge),e(ge,po),S(Je,po,null),e(ee,Aa),e(ee,ho),e(ho,Wa),_(t,Ho,f),_(t,F,f),S(et,F,null),e(F,La),e(F,te),e(te,Na),e(te,mo),e(mo,Va),e(te,Ia),e(te,tt),e(tt,Ba),e(te,Ha),e(F,Ka),e(F,ot),e(ot,Ya),e(ot,At),e(At,Ra),e(ot,Qa),e(F,Xa),e(F,nt),e(nt,Za),e(nt,at),e(at,Ga),e(nt,Ja),e(F,es),e(F,P),S(st,P,null),e(P,ts),e(P,oe),e(oe,os),e(oe,Wt),e(Wt,ns),e(oe,as),e(oe,uo),e(uo,ss),e(oe,rs),e(P,is),S(_e,P,null),e(P,ls),S(ve,P,null),e(P,cs),S(be,P,null),_(t,Ko,f),_(t,ne,f),e(ne,we),e(we,fo),S(rt,fo,null),e(ne,ds),e(ne,go),e(go,ps),_(t,Yo,f),_(t,x,f),S(it,x,null),e(x,hs),e(x,_o),e(_o,ms),e(x,us),e(x,lt),e(lt,fs),e(lt,ct),e(ct,gs),e(lt,_s),e(x,vs),e(x,dt),e(dt,bs),e(dt,Lt),e(Lt,ws),e(dt,ys),e(x,Ss),e(x,pt),e(pt,$s),e(pt,ht),e(ht,Ts),e(pt,Us),e(x,ks),e(x,E),S(mt,E,null),e(E,Cs),e(E,ae),e(ae,xs),e(ae,Nt),e(Nt,js),e(ae,Fs),e(ae,vo),e(vo,qs),e(ae,Ps),e(E,Es),S(ye,E,null),e(E,Ms),S(Se,E,null),e(E,zs),S($e,E,null),_(t,Ro,f),_(t,se,f),e(se,Te),e(Te,bo),S(ut,bo,null),e(se,Os),e(se,wo),e(wo,Ds),_(t,Qo,f),_(t,q,f),S(ft,q,null),e(q,As),e(q,gt),e(gt,Ws),e(gt,_t),e(_t,Ls),e(gt,Ns),e(q,Vs),e(q,vt),e(vt,Is),e(vt,Vt),e(Vt,Bs),e(vt,Hs),e(q,Ks),e(q,bt),e(bt,Ys),e(bt,wt),e(wt,Rs),e(bt,Qs),e(q,Xs),e(q,O),S(yt,O,null),e(O,Zs),e(O,re),e(re,Gs),e(re,It),e(It,Js),e(re,er),e(re,yo),e(yo,tr),e(re,or),e(O,nr),S(Ue,O,null),e(O,ar),S(ke,O,null),Xo=!0},p(t,[f]){const St={};f&2&&(St.$$scope={dirty:f,ctx:t}),pe.$set(St);const So={};f&2&&(So.$$scope={dirty:f,ctx:t}),ue.$set(So);const $o={};f&2&&($o.$$scope={dirty:f,ctx:t}),fe.$set($o);const To={};f&2&&(To.$$scope={dirty:f,ctx:t}),_e.$set(To);const $t={};f&2&&($t.$$scope={dirty:f,ctx:t}),ve.$set($t);const Uo={};f&2&&(Uo.$$scope={dirty:f,ctx:t}),be.$set(Uo);const ko={};f&2&&(ko.$$scope={dirty:f,ctx:t}),ye.$set(ko);const Co={};f&2&&(Co.$$scope={dirty:f,ctx:t}),Se.$set(Co);const Tt={};f&2&&(Tt.$$scope={dirty:f,ctx:t}),$e.$set(Tt);const xo={};f&2&&(xo.$$scope={dirty:f,ctx:t}),Ue.$set(xo);const jo={};f&2&&(jo.$$scope={dirty:f,ctx:t}),ke.$set(jo)},i(t){Xo||($(l.$$.fragment,t),$(qe.$$.fragment,t),$(De.$$.fragment,t),$(Ae.$$.fragment,t),$(pe.$$.fragment,t),$(Le.$$.fragment,t),$(Ne.$$.fragment,t),$(Ie.$$.fragment,t),$(He.$$.fragment,t),$(Ke.$$.fragment,t),$(Ge.$$.fragment,t),$(ue.$$.fragment,t),$(fe.$$.fragment,t),$(Je.$$.fragment,t),$(et.$$.fragment,t),$(st.$$.fragment,t),$(_e.$$.fragment,t),$(ve.$$.fragment,t),$(be.$$.fragment,t),$(rt.$$.fragment,t),$(it.$$.fragment,t),$(mt.$$.fragment,t),$(ye.$$.fragment,t),$(Se.$$.fragment,t),$($e.$$.fragment,t),$(ut.$$.fragment,t),$(ft.$$.fragment,t),$(yt.$$.fragment,t),$(Ue.$$.fragment,t),$(ke.$$.fragment,t),Xo=!0)},o(t){T(l.$$.fragment,t),T(qe.$$.fragment,t),T(De.$$.fragment,t),T(Ae.$$.fragment,t),T(pe.$$.fragment,t),T(Le.$$.fragment,t),T(Ne.$$.fragment,t),T(Ie.$$.fragment,t),T(He.$$.fragment,t),T(Ke.$$.fragment,t),T(Ge.$$.fragment,t),T(ue.$$.fragment,t),T(fe.$$.fragment,t),T(Je.$$.fragment,t),T(et.$$.fragment,t),T(st.$$.fragment,t),T(_e.$$.fragment,t),T(ve.$$.fragment,t),T(be.$$.fragment,t),T(rt.$$.fragment,t),T(it.$$.fragment,t),T(mt.$$.fragment,t),T(ye.$$.fragment,t),T(Se.$$.fragment,t),T($e.$$.fragment,t),T(ut.$$.fragment,t),T(ft.$$.fragment,t),T(yt.$$.fragment,t),T(Ue.$$.fragment,t),T(ke.$$.fragment,t),Xo=!1},d(t){o(c),t&&o(v),t&&o(p),U(l),t&&o(Fo),t&&o(H),U(qe),t&&o(qo),t&&o(le),t&&o(Po),t&&o(xt),t&&o(Eo),t&&o(jt),t&&o(Mo),t&&o(Ft),t&&o(zo),t&&o(ce),t&&o(Oo),t&&o(W),t&&o(Do),t&&o(K),U(De),t&&o(Ao),t&&o(M),U(Ae),U(pe),t&&o(Wo),t&&o(Q),U(Le),t&&o(Lo),t&&o(X),U(Ne),t&&o(No),t&&o(Z),U(Ie),t&&o(Vo),t&&o(G),U(He),t&&o(Io),t&&o(j),U(Ke),U(Ge),U(ue),U(fe),t&&o(Bo),t&&o(ee),U(Je),t&&o(Ho),t&&o(F),U(et),U(st),U(_e),U(ve),U(be),t&&o(Ko),t&&o(ne),U(rt),t&&o(Yo),t&&o(x),U(it),U(mt),U(ye),U(Se),U($e),t&&o(Ro),t&&o(se),U(ut),t&&o(Qo),t&&o(q),U(ft),U(yt),U(Ue),U(ke)}}}const yi={local:"unispeech",sections:[{local:"overview",title:"Overview"},{local:"transformers.UniSpeechConfig",title:"UniSpeechConfig"},{local:"transformers.models.unispeech.modeling_unispeech.UniSpeechBaseModelOutput",title:"UniSpeech specific outputs"},{local:"transformers.UniSpeechModel",title:"UniSpeechModel"},{local:"transformers.UniSpeechForCTC",title:"UniSpeechForCTC"},{local:"transformers.UniSpeechForSequenceClassification",title:"UniSpeechForSequenceClassification"},{local:"transformers.UniSpeechForPreTraining",title:"UniSpeechForPreTraining"}],title:"UniSpeech"};function Si(k){return li(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ji extends ai{constructor(c){super();si(this,c,Si,wi,ri,{})}}export{ji as default,yi as metadata};
