import{S as sl,i as al,s as il,e as n,k as h,w as k,t as a,M as dl,c as r,d as o,m as p,a as s,x as w,h as i,b as c,G as e,g,y,q as T,o as $,B as W,v as cl,L as Hn}from"../../chunks/vendor-hf-doc-builder.js";import{T as Zo}from"../../chunks/Tip-hf-doc-builder.js";import{D as q}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Un}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Rn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ll(z){let l,b,f,_,v;return _=new Un({props:{code:`from transformers import WhisperModel, WhisperConfig

# Initializing a Whisper tiny style configuration
configuration = WhisperConfig()

# Initializing a model from the tiny style configuration
model = WhisperModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperModel, WhisperConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Whisper tiny style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = WhisperConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the tiny style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,f,u),y(_,d,u),v=!0},p:Hn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function hl(z){let l,b,f,_,v,d,u,x;return{c(){l=n("p"),b=a(`This class method is simply calling the feature extractor
`),f=n("a"),_=a("from_pretrained()"),v=a(` and the tokenizer
`),d=n("code"),u=a("~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),x=a(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(M){l=r(M,"P",{});var F=s(l);b=i(F,`This class method is simply calling the feature extractor
`),f=r(F,"A",{href:!0});var j=s(f);_=i(j,"from_pretrained()"),j.forEach(o),v=i(F,` and the tokenizer
`),d=r(F,"CODE",{});var A=s(d);u=i(A,"~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),A.forEach(o),x=i(F,` methods. Please refer to the docstrings of the
methods above for more information.`),F.forEach(o),this.h()},h(){c(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(M,F){g(M,l,F),e(l,b),e(l,f),e(f,_),e(l,v),e(l,d),e(d,u),e(l,x)},d(M){M&&o(l)}}}function pl(z){let l,b,f,_,v,d,u,x;return{c(){l=n("p"),b=a("This class method is simply calling "),f=n("a"),_=a("save_pretrained()"),v=a(` and
`),d=n("code"),u=a("~tokenization_utils_base.PreTrainedTokenizer.save_pretrained"),x=a(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(M){l=r(M,"P",{});var F=s(l);b=i(F,"This class method is simply calling "),f=r(F,"A",{href:!0});var j=s(f);_=i(j,"save_pretrained()"),j.forEach(o),v=i(F,` and
`),d=r(F,"CODE",{});var A=s(d);u=i(A,"~tokenization_utils_base.PreTrainedTokenizer.save_pretrained"),A.forEach(o),x=i(F,`. Please refer to the docstrings of the methods
above for more information.`),F.forEach(o),this.h()},h(){c(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(M,F){g(M,l,F),e(l,b),e(l,f),e(f,_),e(l,v),e(l,d),e(d,u),e(l,x)},d(M){M&&o(l)}}}function ul(z){let l,b,f,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,f),e(f,_),e(l,v)},d(d){d&&o(l)}}}function ml(z){let l,b,f,_,v;return _=new Un({props:{code:`from transformers import WhisperProcessor, WhisperModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = WhisperProcessor.from_pretrained("openai/whisper-tiny")
model = WhisperModel.from_pretrained("openai/whisper-tiny")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperProcessor, WhisperModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = WhisperProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperModel.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,f,u),y(_,d,u),v=!0},p:Hn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function fl(z){let l,b,f,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,f),e(f,_),e(l,v)},d(d){d&&o(l)}}}function _l(z){let l,b,f,_,v;return _=new Un({props:{code:`import torch
from transformers import WhisperProcessor, WhisperForConditionalGeneration
from datasets import load_dataset

processor = WhisperProcessor.from_pretrained("openai/whisper-tiny.en")
model = WhisperForConditionalGeneration.from_pretrained("openai/whisper-tiny.en")

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

inputs = processor(ds[0]["audio"]["array"], return_tensors="pt")
input_features = inputs.input_features

generated_ids = model.generate(inputs=input_features)

transcription = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
transcription`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperProcessor, WhisperForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = WhisperProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,f,u),y(_,d,u),v=!0},p:Hn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function gl(z){let l,b,f,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,f),e(f,_),e(l,v)},d(d){d&&o(l)}}}function vl(z){let l,b,f,_,v;return _=new Un({props:{code:`import tensorflow as tf
from transformers import TFWhisperModel, WhisperFeatureExtractor
from datasets import load_dataset

model = TFWhisperModel.from_pretrained("openai/whisper-base")
feature_extractor = WhisperFeatureExtractor.from_pretrained("openai/whisper-base")
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
inputs = feature_extractor(ds[0]["audio"]["array"], return_tensors="tf")
input_features = inputs.input_features
decoder_input_ids = tf.convert_to_tensor([[1, 1]]) * model.config.decoder_start_token_id
last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
list(last_hidden_state.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFWhisperModel, WhisperFeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWhisperModel.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = WhisperFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tf.convert_to_tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,f,u),y(_,d,u),v=!0},p:Hn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function bl(z){let l,b,f,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(u,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,f),e(f,_),e(l,v)},d(d){d&&o(l)}}}function kl(z){let l,b,f,_,v;return _=new Un({props:{code:`import tensorflow as tf
from transformers import WhisperProcessor, TFWhisperForConditionalGeneration
from datasets import load_dataset

processor = WhisperProcessor.from_pretrained("openai/whisper-tiny.en")
model = TFWhisperForConditionalGeneration.from_pretrained("openai/whisper-tiny.en")

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

inputs = processor(ds[0]["audio"]["array"], return_tensors="tf")
input_features = inputs.input_features

generated_ids = model.generate(input_ids=input_features)

transcription = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
transcription`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperProcessor, TFWhisperForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = WhisperProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_ids=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,f,u),y(_,d,u),v=!0},p:Hn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function wl(z){let l,b,f,_,v,d,u,x,M,F,j,A,Qo,tt,Rr,Xo,Hr,Bn,be,Ur,ot,Br,Kr,Kn,co,Jr,Jn,lo,Yo,Zr,Zn,ho,Qr,Qn,Q,en,Xr,Yr,nt,es,po,ts,os,ns,rt,rs,uo,ss,as,Xn,R,is,st,ds,cs,at,ls,hs,it,ps,us,Yn,ne,ke,tn,dt,ms,on,fs,er,D,ct,_s,re,gs,mo,vs,bs,lt,ks,ws,ys,se,Ts,fo,$s,Ws,_o,xs,zs,Fs,we,tr,ae,ye,nn,ht,qs,rn,Es,or,P,pt,Ps,sn,Cs,Ms,ut,js,go,Ss,As,Ns,vo,mt,Is,Te,ft,Ds,ie,Ls,an,Gs,Os,dn,Vs,Rs,Hs,X,_t,Us,bo,Bs,ko,Ks,Js,cn,Zs,Qs,wo,gt,nr,de,$e,ln,vt,Xs,hn,Ys,rr,S,bt,ea,pn,ta,oa,kt,na,yo,ra,sa,aa,ce,ia,un,da,ca,mn,la,ha,pa,We,wt,ua,fn,ma,sr,le,xe,_n,yt,fa,gn,_a,ar,E,Tt,ga,vn,va,ba,N,To,ka,wa,$o,ya,Ta,Wo,$a,Wa,$t,bn,xa,za,Fa,xo,qa,Ea,Pa,ze,Wt,Ca,J,Ma,xt,kn,ja,Sa,Aa,wn,Na,Ia,zt,yn,Da,La,Ga,Oa,Y,Ft,Va,Tn,Ra,Ha,Fe,Ua,ee,qt,Ba,Et,Ka,zo,Ja,Za,Qa,qe,Xa,Ee,Pt,Ya,Ct,ei,Fo,ti,oi,ni,Pe,Mt,ri,jt,si,qo,ai,ii,ir,he,Ce,$n,St,di,Wn,ci,dr,L,At,li,Nt,hi,Eo,pi,ui,mi,It,fi,Dt,_i,gi,vi,H,Lt,bi,pe,ki,Po,wi,yi,xn,Ti,$i,Wi,Me,xi,je,cr,ue,Se,zn,Gt,zi,Fn,Fi,lr,G,Ot,qi,Vt,Ei,Co,Pi,Ci,Mi,Rt,ji,Ht,Si,Ai,Ni,U,Ut,Ii,me,Di,Mo,Li,Gi,qn,Oi,Vi,Ri,Ae,Hi,Ne,hr,fe,Ie,En,Bt,Ui,Pn,Bi,pr,O,Kt,Ki,Jt,Ji,jo,Zi,Qi,Xi,Zt,Yi,Qt,ed,td,od,B,Xt,nd,_e,rd,So,sd,ad,Cn,id,dd,cd,De,ld,Le,ur,ge,Ge,Mn,Yt,hd,jn,pd,mr,V,eo,ud,to,md,Ao,fd,_d,gd,oo,vd,no,bd,kd,wd,K,ro,yd,ve,Td,No,$d,Wd,Sn,xd,zd,Fd,Oe,qd,Ve,fr;return d=new oe({}),tt=new oe({}),dt=new oe({}),ct=new q({props:{name:"class transformers.WhisperConfig",anchor:"transformers.WhisperConfig",parameters:[{name:"vocab_size",val:" = 51865"},{name:"num_mel_bins",val:" = 80"},{name:"encoder_layers",val:" = 6"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_ffn_dim",val:" = 1536"},{name:"encoder_ffn_dim",val:" = 1536"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 50257"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"max_source_positions",val:" = 1500"},{name:"max_target_positions",val:" = 448"},{name:"pad_token_id",val:" = 50256"},{name:"bos_token_id",val:" = 50257"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = True"},{name:"suppress_tokens",val:" = None"},{name:"begin_suppress_tokens",val:" = [220, 50256]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 51865) &#x2014;
Vocabulary size of the Whisper model. Defines the number of different tokens that can be represented by the
<code>decoder_input_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel">WhisperModel</a>`,name:"vocab_size"},{anchor:"transformers.WhisperConfig.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
Number of mel features used per input features. Should correspond to the value used in the
<code>WhisperProcessor</code> class.`,name:"num_mel_bins"},{anchor:"transformers.WhisperConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.WhisperConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.WhisperConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.WhisperConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.WhisperConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in encoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.WhisperConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.WhisperConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.WhisperConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.WhisperConfig.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Corresponds to the &#x201D;&lt;|startoftranscript|&gt;&#x201D; token, which is automatically used when no <code>decoder_input_ids</code>
are provided to the <code>generate</code> function. It is used to guide the model\`s generation process depending on
the task.`,name:"decoder_start_token_id"},{anchor:"transformers.WhisperConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.WhisperConfig.is_encoder_decoder",description:`<strong>is_encoder_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the model is used as an encoder/decoder or not.`,name:"is_encoder_decoder"},{anchor:"transformers.WhisperConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.WhisperConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the layers.`,name:"d_model"},{anchor:"transformers.WhisperConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.WhisperConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.WhisperConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.WhisperConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.WhisperConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to False) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.WhisperConfig.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1500) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.`,name:"max_source_positions"},{anchor:"transformers.WhisperConfig.max_target_positions",description:`<strong>max_target_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 448) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_target_positions"},{anchor:"transformers.WhisperConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50256) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.WhisperConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50256) &#x2014;
Begin of stream token id.`,name:"bos_token_id"},{anchor:"transformers.WhisperConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
End of stream token id.`,name:"eos_token_id"},{anchor:"transformers.WhisperConfig.tie_word_embeddings",description:`<strong>tie_word_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to tie input and output embeddings.`,name:"tie_word_embeddings"},{anchor:"transformers.WhisperConfig.suppress_tokens",description:`<strong>suppress_tokens</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
A list containing the non-speech tokens that will be used by the logit processor in the <code>generate</code>
function. NON_SPEECH_TOKENS and NON_SPEECH_TOKENS_MULTI each correspond to the <code>english-only</code> and the
<code>multilingual</code> model.`,name:"suppress_tokens"},{anchor:"transformers.WhisperConfig.begin_suppress_tokens",description:`<strong>begin_suppress_tokens</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[220,50256]</code>) &#x2014;
A list containing tokens that will be supressed at the beginning of the sampling process. Initialized as
the token for <code>&quot; &quot;</code> (<code>blank_token_id</code>) and the <code>eos_token_id</code>`,name:"begin_suppress_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/configuration_whisper.py#L53"}}),we=new Rn({props:{anchor:"transformers.WhisperConfig.example",$$slots:{default:[ll]},$$scope:{ctx:z}}}),ht=new oe({}),pt=new q({props:{name:"class transformers.WhisperTokenizer",anchor:"transformers.WhisperTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.WhisperTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.WhisperTokenizer.normalizer_file",description:`<strong>normalizer_file</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Path to the normalizer_file file.`,name:"normalizer_file"},{anchor:"transformers.WhisperTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.WhisperTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.WhisperTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.WhisperTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.WhisperTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word.`,name:"add_prefix_space"},{anchor:"transformers.WhisperTokenizer.add_bos_token",description:`<strong>add_bos_token</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial &lt;|endoftext|&gt; to the input. This allows to treat the leading word just as
any other word.`,name:"add_bos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L92"}}),mt=new q({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L235"}}),ft=new q({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L249",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_t=new q({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2983",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gt=new q({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L349"}}),vt=new oe({}),bt=new q({props:{name:"class transformers.WhisperFeatureExtractor",anchor:"transformers.WhisperFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"hop_length",val:" = 160"},{name:"chunk_length",val:" = 30"},{name:"n_fft",val:" = 400"},{name:"padding_value",val:" = 0.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.WhisperFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 160) &#x2014;
Length of the overlaping windows for the STFT used to obtain the Mel Frequency coefficients.`,name:"hop_length"},{anchor:"transformers.WhisperFeatureExtractor.chunk_length",description:`<strong>chunk_length</strong> (<code>int</code>, defaults to 30) &#x2014;
The maximum number of chuncks of <code>sampling_rate</code> samples used to trim and pad longer or shorter audio
sequences.`,name:"chunk_length"},{anchor:"transformers.WhisperFeatureExtractor.n_fft",description:`<strong>n_fft</strong> (<code>int</code>, defaults to 400) &#x2014;
Size of the Fourier transform.`,name:"n_fft"},{anchor:"transformers.WhisperFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Padding value used to pad the audio. Should correspond to silences.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L32"}}),wt=new q({props:{name:"__call__",anchor:"transformers.WhisperFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"truncation",val:": bool = True"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"padding",val:": typing.Optional[str] = 'max_length'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.WhisperFeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <em>optional</em>, default to <code>True</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.WhisperFeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.WhisperFeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For WhisperTransoformer models, <code>attention_mask</code> should alwys be passed for batched inference, to avoid
subtle bugs.</p>

					</div>`,name:"return_attention_mask"},{anchor:"transformers.WhisperFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.WhisperFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors and allow automatic speech recognition
pipeline.`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L212"}}),yt=new oe({}),Tt=new q({props:{name:"class transformers.WhisperProcessor",anchor:"transformers.WhisperProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>WhisperFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.WhisperProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>WhisperTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L22"}}),Wt=new q({props:{name:"__call__",anchor:"transformers.WhisperProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L77"}}),Ft=new q({props:{name:"from_pretrained",anchor:"transformers.WhisperProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L152"}}),Fe=new Zo({props:{$$slots:{default:[hl]},$$scope:{ctx:z}}}),qt=new q({props:{name:"save_pretrained",anchor:"transformers.WhisperProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.WhisperProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94"}}),qe=new Zo({props:{$$slots:{default:[pl]},$$scope:{ctx:z}}}),Pt=new q({props:{name:"batch_decode",anchor:"transformers.WhisperProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L112"}}),Mt=new q({props:{name:"decode",anchor:"transformers.WhisperProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L119"}}),St=new oe({}),At=new q({props:{name:"class transformers.WhisperModel",anchor:"transformers.WhisperModel",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L971"}}),Lt=new q({props:{name:"forward",anchor:"transformers.WhisperModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Whisper uses the <code>decoder_start_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.WhisperModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_whisper._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the BART
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.WhisperModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.WhisperModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.WhisperModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.WhisperModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.WhisperModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. decoder_inputs_embeds (<code>torch.FloatTensor</code> of
shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>decoder_input_ids</code> you can choose to directly pass an embedded representation. If <code>past_key_values</code> is
used, optionally only the last <code>decoder_inputs_embeds</code> have to be input (see <code>past_key_values</code>). This is
useful if you want more control over how to convert <code>decoder_input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.WhisperModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.WhisperModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WhisperModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WhisperModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L994",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
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
`}}),Me=new Zo({props:{$$slots:{default:[ul]},$$scope:{ctx:z}}}),je=new Rn({props:{anchor:"transformers.WhisperModel.forward.example",$$slots:{default:[ml]},$$scope:{ctx:z}}}),Gt=new oe({}),Ot=new q({props:{name:"class transformers.WhisperForConditionalGeneration",anchor:"transformers.WhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1077"}}),Ut=new q({props:{name:"forward",anchor:"transformers.WhisperForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Whisper uses the <code>decoder_start_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_whisper._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the BART
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.WhisperForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.WhisperForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. decoder_inputs_embeds (<code>torch.FloatTensor</code> of
shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>decoder_input_ids</code> you can choose to directly pass an embedded representation. If <code>past_key_values</code> is
used, optionally only the last <code>decoder_inputs_embeds</code> have to be input (see <code>past_key_values</code>). This is
useful if you want more control over how to convert <code>decoder_input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.WhisperForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.WhisperForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.WhisperForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.WhisperForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WhisperForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1112",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
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
`}}),Ae=new Zo({props:{$$slots:{default:[fl]},$$scope:{ctx:z}}}),Ne=new Rn({props:{anchor:"transformers.WhisperForConditionalGeneration.forward.example",$$slots:{default:[_l]},$$scope:{ctx:z}}}),Bt=new oe({}),Kt=new q({props:{name:"class transformers.TFWhisperModel",anchor:"transformers.TFWhisperModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1103"}}),Xt=new q({props:{name:"call",anchor:"transformers.TFWhisperModel.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFWhisperModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_whisper._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.TFWhisperModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFWhisperModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFWhisperModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFWhisperModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFWhisperModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(tf.Tensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. decoder_inputs_embeds (<code>tf.Tensor</code> of shape
<code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>decoder_input_ids</code> you can choose to directly pass an embedded representation. If <code>past_key_values</code> is
used, optionally only the last <code>decoder_inputs_embeds</code> have to be input (see <code>past_key_values</code>). This is
useful if you want more control over how to convert <code>decoder_input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.TFWhisperModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFWhisperModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFWhisperModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFWhisperModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1127",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
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
`}}),De=new Zo({props:{$$slots:{default:[gl]},$$scope:{ctx:z}}}),Le=new Rn({props:{anchor:"transformers.TFWhisperModel.call.example",$$slots:{default:[vl]},$$scope:{ctx:z}}}),Yt=new oe({}),eo=new q({props:{name:"class transformers.TFWhisperForConditionalGeneration",anchor:"transformers.TFWhisperForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1211"}}),ro=new q({props:{name:"call",anchor:"transformers.TFWhisperForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_whisper._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(tf.Tensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>. decoder_inputs_embeds (<code>tf.Tensor</code> of shape
<code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>): Optionally, instead of passing
<code>decoder_input_ids</code> you can choose to directly pass an embedded representation. If <code>past_key_values</code> is
used, optionally only the last <code>decoder_inputs_embeds</code> have to be input (see <code>past_key_values</code>). This is
useful if you want more control over how to convert <code>decoder_input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1242",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig"
>WhisperConfig</a>) and inputs.</p>
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
`}}),Oe=new Zo({props:{$$slots:{default:[bl]},$$scope:{ctx:z}}}),Ve=new Rn({props:{anchor:"transformers.TFWhisperForConditionalGeneration.call.example",$$slots:{default:[kl]},$$scope:{ctx:z}}}),{c(){l=n("meta"),b=h(),f=n("h1"),_=n("a"),v=n("span"),k(d.$$.fragment),u=h(),x=n("span"),M=a("Whisper"),F=h(),j=n("h2"),A=n("a"),Qo=n("span"),k(tt.$$.fragment),Rr=h(),Xo=n("span"),Hr=a("Overview"),Bn=h(),be=n("p"),Ur=a("The Whisper model was proposed in "),ot=n("a"),Br=a("Robust Speech Recognition via Large-Scale Weak Supervision"),Kr=a(" by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),Kn=h(),co=n("p"),Jr=a("The abstract from the paper is the following:"),Jn=h(),lo=n("p"),Yo=n("em"),Zr=a("We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Zn=h(),ho=n("p"),Qr=a("Tips:"),Qn=h(),Q=n("ul"),en=n("li"),Xr=a("The model usually performs well without requiring any finetuning."),Yr=h(),nt=n("li"),es=a("The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),po=n("a"),ts=a("generate()"),os=a(" function for inference."),ns=h(),rt=n("li"),rs=a("One can use "),uo=n("a"),ss=a("WhisperProcessor"),as=a(" to prepare audio for the model, and decode the predicted ID\u2019s back into text."),Xn=h(),R=n("p"),is=a("This model was contributed by "),st=n("a"),ds=a("Arthur Zucker"),cs=a(". The Tensorflow version of this model was contributed by "),at=n("a"),ls=a("amyeroberts"),hs=a(`.
The original code can be found `),it=n("a"),ps=a("here"),us=a("."),Yn=h(),ne=n("h2"),ke=n("a"),tn=n("span"),k(dt.$$.fragment),ms=h(),on=n("span"),fs=a("WhisperConfig"),er=h(),D=n("div"),k(ct.$$.fragment),_s=h(),re=n("p"),gs=a("This is the configuration class to store the configuration of a "),mo=n("a"),vs=a("WhisperModel"),bs=a(`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),lt=n("a"),ks=a("openai/whisper-tiny"),ws=a(" architecture."),ys=h(),se=n("p"),Ts=a("Configuration objects inherit from "),fo=n("a"),$s=a("PretrainedConfig"),Ws=a(` and can be used to control the model outputs. Read the
documentation from `),_o=n("a"),xs=a("PretrainedConfig"),zs=a(" for more information."),Fs=h(),k(we.$$.fragment),tr=h(),ae=n("h2"),ye=n("a"),nn=n("span"),k(ht.$$.fragment),qs=h(),rn=n("span"),Es=a("WhisperTokenizer"),or=h(),P=n("div"),k(pt.$$.fragment),Ps=h(),sn=n("p"),Cs=a("Construct an Whisper tokenizer."),Ms=h(),ut=n("p"),js=a("This tokenizer inherits from "),go=n("a"),Ss=a("PreTrainedTokenizer"),As=a(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Ns=h(),vo=n("div"),k(mt.$$.fragment),Is=h(),Te=n("div"),k(ft.$$.fragment),Ds=h(),ie=n("p"),Ls=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),an=n("code"),Gs=a("prepare_for_model"),Os=a(" or "),dn=n("code"),Vs=a("encode_plus"),Rs=a(" methods."),Hs=h(),X=n("div"),k(_t.$$.fragment),Us=h(),bo=n("p"),Bs=a("Create the token type IDs corresponding to the sequences passed. "),ko=n("a"),Ks=a(`What are token type
IDs?`),Js=h(),cn=n("p"),Zs=a("Should be overridden in a subclass if the model has a special way of building those."),Qs=h(),wo=n("div"),k(gt.$$.fragment),nr=h(),de=n("h2"),$e=n("a"),ln=n("span"),k(vt.$$.fragment),Xs=h(),hn=n("span"),Ys=a("WhisperFeatureExtractor"),rr=h(),S=n("div"),k(bt.$$.fragment),ea=h(),pn=n("p"),ta=a("Constructs a Whisper feature extractor."),oa=h(),kt=n("p"),na=a("This feature extractor inherits from "),yo=n("a"),ra=a("WhisperFeatureExtractor"),sa=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),aa=h(),ce=n("p"),ia=a("This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),un=n("code"),da=a("Short Time Fourier Transform"),ca=a(" which should match pytorch\u2019s "),mn=n("code"),la=a("torch.stft"),ha=a(" equivalent."),pa=h(),We=n("div"),k(wt.$$.fragment),ua=h(),fn=n("p"),ma=a("Main method to featurize and prepare for the model one or several sequence(s)."),sr=h(),le=n("h2"),xe=n("a"),_n=n("span"),k(yt.$$.fragment),fa=h(),gn=n("span"),_a=a("WhisperProcessor"),ar=h(),E=n("div"),k(Tt.$$.fragment),ga=h(),vn=n("p"),va=a(`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),ba=h(),N=n("p"),To=n("a"),ka=a("WhisperProcessor"),wa=a(" offers all the functionalities of "),$o=n("a"),ya=a("WhisperFeatureExtractor"),Ta=a(" and "),Wo=n("a"),$a=a("WhisperTokenizer"),Wa=a(`. See
the `),$t=n("a"),bn=n("strong"),xa=a("call"),za=a("()"),Fa=a(" and "),xo=n("a"),qa=a("decode()"),Ea=a(" for more information."),Pa=h(),ze=n("div"),k(Wt.$$.fragment),Ca=h(),J=n("p"),Ma=a(`When used in normal mode, this method forwards all its arguments to WhisperFeatureExtractor\u2019s
`),xt=n("a"),kn=n("strong"),ja=a("call"),Sa=a("()"),Aa=a(` and returns its output. If used in the context
`),wn=n("code"),Na=a("~WhisperProcessor.as_target_processor"),Ia=a(` this method forwards all its arguments to WhisperTokenizer\u2019s
`),zt=n("a"),yn=n("strong"),Da=a("call"),La=a("()"),Ga=a(". Please refer to the doctsring of the above two methods for more information."),Oa=h(),Y=n("div"),k(Ft.$$.fragment),Va=h(),Tn=n("p"),Ra=a("Instantiate a processor associated with a pretrained model."),Ha=h(),k(Fe.$$.fragment),Ua=h(),ee=n("div"),k(qt.$$.fragment),Ba=h(),Et=n("p"),Ka=a(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zo=n("a"),Ja=a("from_pretrained()"),Za=a(" method."),Qa=h(),k(qe.$$.fragment),Xa=h(),Ee=n("div"),k(Pt.$$.fragment),Ya=h(),Ct=n("p"),ei=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),Fo=n("a"),ti=a("batch_decode()"),oi=a(`. Please
refer to the docstring of this method for more information.`),ni=h(),Pe=n("div"),k(Mt.$$.fragment),ri=h(),jt=n("p"),si=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),qo=n("a"),ai=a("decode()"),ii=a(`. Please refer to
the docstring of this method for more information.`),ir=h(),he=n("h2"),Ce=n("a"),$n=n("span"),k(St.$$.fragment),di=h(),Wn=n("span"),ci=a("WhisperModel"),dr=h(),L=n("div"),k(At.$$.fragment),li=h(),Nt=n("p"),hi=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Eo=n("a"),pi=a("PreTrainedModel"),ui=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mi=h(),It=n("p"),fi=a("This model is also a PyTorch "),Dt=n("a"),_i=a("torch.nn.Module"),gi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vi=h(),H=n("div"),k(Lt.$$.fragment),bi=h(),pe=n("p"),ki=a("The "),Po=n("a"),wi=a("WhisperModel"),yi=a(" forward method, overrides the "),xn=n("code"),Ti=a("__call__"),$i=a(" special method."),Wi=h(),k(Me.$$.fragment),xi=h(),k(je.$$.fragment),cr=h(),ue=n("h2"),Se=n("a"),zn=n("span"),k(Gt.$$.fragment),zi=h(),Fn=n("span"),Fi=a("WhisperForConditionalGeneration"),lr=h(),G=n("div"),k(Ot.$$.fragment),qi=h(),Vt=n("p"),Ei=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Co=n("a"),Pi=a("PreTrainedModel"),Ci=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi=h(),Rt=n("p"),ji=a("This model is also a PyTorch "),Ht=n("a"),Si=a("torch.nn.Module"),Ai=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ni=h(),U=n("div"),k(Ut.$$.fragment),Ii=h(),me=n("p"),Di=a("The "),Mo=n("a"),Li=a("WhisperForConditionalGeneration"),Gi=a(" forward method, overrides the "),qn=n("code"),Oi=a("__call__"),Vi=a(" special method."),Ri=h(),k(Ae.$$.fragment),Hi=h(),k(Ne.$$.fragment),hr=h(),fe=n("h2"),Ie=n("a"),En=n("span"),k(Bt.$$.fragment),Ui=h(),Pn=n("span"),Bi=a("TFWhisperModel"),pr=h(),O=n("div"),k(Kt.$$.fragment),Ki=h(),Jt=n("p"),Ji=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jo=n("a"),Zi=a("TFPreTrainedModel"),Qi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xi=h(),Zt=n("p"),Yi=a("This model is also a "),Qt=n("a"),ed=a("tf.keras.Model"),td=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od=h(),B=n("div"),k(Xt.$$.fragment),nd=h(),_e=n("p"),rd=a("The "),So=n("a"),sd=a("TFWhisperModel"),ad=a(" forward method, overrides the "),Cn=n("code"),id=a("__call__"),dd=a(" special method."),cd=h(),k(De.$$.fragment),ld=h(),k(Le.$$.fragment),ur=h(),ge=n("h2"),Ge=n("a"),Mn=n("span"),k(Yt.$$.fragment),hd=h(),jn=n("span"),pd=a("TFWhisperForConditionalGeneration"),mr=h(),V=n("div"),k(eo.$$.fragment),ud=h(),to=n("p"),md=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Ao=n("a"),fd=a("TFPreTrainedModel"),_d=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd=h(),oo=n("p"),vd=a("This model is also a "),no=n("a"),bd=a("tf.keras.Model"),kd=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wd=h(),K=n("div"),k(ro.$$.fragment),yd=h(),ve=n("p"),Td=a("The "),No=n("a"),$d=a("TFWhisperForConditionalGeneration"),Wd=a(" forward method, overrides the "),Sn=n("code"),xd=a("__call__"),zd=a(" special method."),Fd=h(),k(Oe.$$.fragment),qd=h(),k(Ve.$$.fragment),this.h()},l(t){const m=dl('[data-svelte="svelte-1phssyn"]',document.head);l=r(m,"META",{name:!0,content:!0}),m.forEach(o),b=p(t),f=r(t,"H1",{class:!0});var so=s(f);_=r(so,"A",{id:!0,class:!0,href:!0});var An=s(_);v=r(An,"SPAN",{});var Nn=s(v);w(d.$$.fragment,Nn),Nn.forEach(o),An.forEach(o),u=p(so),x=r(so,"SPAN",{});var In=s(x);M=i(In,"Whisper"),In.forEach(o),so.forEach(o),F=p(t),j=r(t,"H2",{class:!0});var ao=s(j);A=r(ao,"A",{id:!0,class:!0,href:!0});var Dn=s(A);Qo=r(Dn,"SPAN",{});var Ln=s(Qo);w(tt.$$.fragment,Ln),Ln.forEach(o),Dn.forEach(o),Rr=p(ao),Xo=r(ao,"SPAN",{});var Gn=s(Xo);Hr=i(Gn,"Overview"),Gn.forEach(o),ao.forEach(o),Bn=p(t),be=r(t,"P",{});var io=s(be);Ur=i(io,"The Whisper model was proposed in "),ot=r(io,"A",{href:!0,rel:!0});var On=s(ot);Br=i(On,"Robust Speech Recognition via Large-Scale Weak Supervision"),On.forEach(o),Kr=i(io," by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),io.forEach(o),Kn=p(t),co=r(t,"P",{});var Vn=s(co);Jr=i(Vn,"The abstract from the paper is the following:"),Vn.forEach(o),Jn=p(t),lo=r(t,"P",{});var jd=s(lo);Yo=r(jd,"EM",{});var Sd=s(Yo);Zr=i(Sd,"We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Sd.forEach(o),jd.forEach(o),Zn=p(t),ho=r(t,"P",{});var Ad=s(ho);Qr=i(Ad,"Tips:"),Ad.forEach(o),Qn=p(t),Q=r(t,"UL",{});var Io=s(Q);en=r(Io,"LI",{});var Nd=s(en);Xr=i(Nd,"The model usually performs well without requiring any finetuning."),Nd.forEach(o),Yr=p(Io),nt=r(Io,"LI",{});var _r=s(nt);es=i(_r,"The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),po=r(_r,"A",{href:!0});var Id=s(po);ts=i(Id,"generate()"),Id.forEach(o),os=i(_r," function for inference."),_r.forEach(o),ns=p(Io),rt=r(Io,"LI",{});var gr=s(rt);rs=i(gr,"One can use "),uo=r(gr,"A",{href:!0});var Dd=s(uo);ss=i(Dd,"WhisperProcessor"),Dd.forEach(o),as=i(gr," to prepare audio for the model, and decode the predicted ID\u2019s back into text."),gr.forEach(o),Io.forEach(o),Xn=p(t),R=r(t,"P",{});var Re=s(R);is=i(Re,"This model was contributed by "),st=r(Re,"A",{href:!0,rel:!0});var Ld=s(st);ds=i(Ld,"Arthur Zucker"),Ld.forEach(o),cs=i(Re,". The Tensorflow version of this model was contributed by "),at=r(Re,"A",{href:!0,rel:!0});var Gd=s(at);ls=i(Gd,"amyeroberts"),Gd.forEach(o),hs=i(Re,`.
The original code can be found `),it=r(Re,"A",{href:!0,rel:!0});var Od=s(it);ps=i(Od,"here"),Od.forEach(o),us=i(Re,"."),Re.forEach(o),Yn=p(t),ne=r(t,"H2",{class:!0});var vr=s(ne);ke=r(vr,"A",{id:!0,class:!0,href:!0});var Vd=s(ke);tn=r(Vd,"SPAN",{});var Rd=s(tn);w(dt.$$.fragment,Rd),Rd.forEach(o),Vd.forEach(o),ms=p(vr),on=r(vr,"SPAN",{});var Hd=s(on);fs=i(Hd,"WhisperConfig"),Hd.forEach(o),vr.forEach(o),er=p(t),D=r(t,"DIV",{class:!0});var He=s(D);w(ct.$$.fragment,He),_s=p(He),re=r(He,"P",{});var Do=s(re);gs=i(Do,"This is the configuration class to store the configuration of a "),mo=r(Do,"A",{href:!0});var Ud=s(mo);vs=i(Ud,"WhisperModel"),Ud.forEach(o),bs=i(Do,`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),lt=r(Do,"A",{href:!0,rel:!0});var Bd=s(lt);ks=i(Bd,"openai/whisper-tiny"),Bd.forEach(o),ws=i(Do," architecture."),Do.forEach(o),ys=p(He),se=r(He,"P",{});var Lo=s(se);Ts=i(Lo,"Configuration objects inherit from "),fo=r(Lo,"A",{href:!0});var Kd=s(fo);$s=i(Kd,"PretrainedConfig"),Kd.forEach(o),Ws=i(Lo,` and can be used to control the model outputs. Read the
documentation from `),_o=r(Lo,"A",{href:!0});var Jd=s(_o);xs=i(Jd,"PretrainedConfig"),Jd.forEach(o),zs=i(Lo," for more information."),Lo.forEach(o),Fs=p(He),w(we.$$.fragment,He),He.forEach(o),tr=p(t),ae=r(t,"H2",{class:!0});var br=s(ae);ye=r(br,"A",{id:!0,class:!0,href:!0});var Zd=s(ye);nn=r(Zd,"SPAN",{});var Qd=s(nn);w(ht.$$.fragment,Qd),Qd.forEach(o),Zd.forEach(o),qs=p(br),rn=r(br,"SPAN",{});var Xd=s(rn);Es=i(Xd,"WhisperTokenizer"),Xd.forEach(o),br.forEach(o),or=p(t),P=r(t,"DIV",{class:!0});var I=s(P);w(pt.$$.fragment,I),Ps=p(I),sn=r(I,"P",{});var Yd=s(sn);Cs=i(Yd,"Construct an Whisper tokenizer."),Yd.forEach(o),Ms=p(I),ut=r(I,"P",{});var kr=s(ut);js=i(kr,"This tokenizer inherits from "),go=r(kr,"A",{href:!0});var ec=s(go);Ss=i(ec,"PreTrainedTokenizer"),ec.forEach(o),As=i(kr,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),kr.forEach(o),Ns=p(I),vo=r(I,"DIV",{class:!0});var tc=s(vo);w(mt.$$.fragment,tc),tc.forEach(o),Is=p(I),Te=r(I,"DIV",{class:!0});var wr=s(Te);w(ft.$$.fragment,wr),Ds=p(wr),ie=r(wr,"P",{});var Go=s(ie);Ls=i(Go,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),an=r(Go,"CODE",{});var oc=s(an);Gs=i(oc,"prepare_for_model"),oc.forEach(o),Os=i(Go," or "),dn=r(Go,"CODE",{});var nc=s(dn);Vs=i(nc,"encode_plus"),nc.forEach(o),Rs=i(Go," methods."),Go.forEach(o),wr.forEach(o),Hs=p(I),X=r(I,"DIV",{class:!0});var Oo=s(X);w(_t.$$.fragment,Oo),Us=p(Oo),bo=r(Oo,"P",{});var Ed=s(bo);Bs=i(Ed,"Create the token type IDs corresponding to the sequences passed. "),ko=r(Ed,"A",{href:!0});var rc=s(ko);Ks=i(rc,`What are token type
IDs?`),rc.forEach(o),Ed.forEach(o),Js=p(Oo),cn=r(Oo,"P",{});var sc=s(cn);Zs=i(sc,"Should be overridden in a subclass if the model has a special way of building those."),sc.forEach(o),Oo.forEach(o),Qs=p(I),wo=r(I,"DIV",{class:!0});var ac=s(wo);w(gt.$$.fragment,ac),ac.forEach(o),I.forEach(o),nr=p(t),de=r(t,"H2",{class:!0});var yr=s(de);$e=r(yr,"A",{id:!0,class:!0,href:!0});var ic=s($e);ln=r(ic,"SPAN",{});var dc=s(ln);w(vt.$$.fragment,dc),dc.forEach(o),ic.forEach(o),Xs=p(yr),hn=r(yr,"SPAN",{});var cc=s(hn);Ys=i(cc,"WhisperFeatureExtractor"),cc.forEach(o),yr.forEach(o),rr=p(t),S=r(t,"DIV",{class:!0});var te=s(S);w(bt.$$.fragment,te),ea=p(te),pn=r(te,"P",{});var lc=s(pn);ta=i(lc,"Constructs a Whisper feature extractor."),lc.forEach(o),oa=p(te),kt=r(te,"P",{});var Tr=s(kt);na=i(Tr,"This feature extractor inherits from "),yo=r(Tr,"A",{href:!0});var hc=s(yo);ra=i(hc,"WhisperFeatureExtractor"),hc.forEach(o),sa=i(Tr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Tr.forEach(o),aa=p(te),ce=r(te,"P",{});var Vo=s(ce);ia=i(Vo,"This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),un=r(Vo,"CODE",{});var pc=s(un);da=i(pc,"Short Time Fourier Transform"),pc.forEach(o),ca=i(Vo," which should match pytorch\u2019s "),mn=r(Vo,"CODE",{});var uc=s(mn);la=i(uc,"torch.stft"),uc.forEach(o),ha=i(Vo," equivalent."),Vo.forEach(o),pa=p(te),We=r(te,"DIV",{class:!0});var $r=s(We);w(wt.$$.fragment,$r),ua=p($r),fn=r($r,"P",{});var mc=s(fn);ma=i(mc,"Main method to featurize and prepare for the model one or several sequence(s)."),mc.forEach(o),$r.forEach(o),te.forEach(o),sr=p(t),le=r(t,"H2",{class:!0});var Wr=s(le);xe=r(Wr,"A",{id:!0,class:!0,href:!0});var fc=s(xe);_n=r(fc,"SPAN",{});var _c=s(_n);w(yt.$$.fragment,_c),_c.forEach(o),fc.forEach(o),fa=p(Wr),gn=r(Wr,"SPAN",{});var gc=s(gn);_a=i(gc,"WhisperProcessor"),gc.forEach(o),Wr.forEach(o),ar=p(t),E=r(t,"DIV",{class:!0});var C=s(E);w(Tt.$$.fragment,C),ga=p(C),vn=r(C,"P",{});var vc=s(vn);va=i(vc,`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),vc.forEach(o),ba=p(C),N=r(C,"P",{});var Z=s(N);To=r(Z,"A",{href:!0});var bc=s(To);ka=i(bc,"WhisperProcessor"),bc.forEach(o),wa=i(Z," offers all the functionalities of "),$o=r(Z,"A",{href:!0});var kc=s($o);ya=i(kc,"WhisperFeatureExtractor"),kc.forEach(o),Ta=i(Z," and "),Wo=r(Z,"A",{href:!0});var wc=s(Wo);$a=i(wc,"WhisperTokenizer"),wc.forEach(o),Wa=i(Z,`. See
the `),$t=r(Z,"A",{href:!0});var Pd=s($t);bn=r(Pd,"STRONG",{});var yc=s(bn);xa=i(yc,"call"),yc.forEach(o),za=i(Pd,"()"),Pd.forEach(o),Fa=i(Z," and "),xo=r(Z,"A",{href:!0});var Tc=s(xo);qa=i(Tc,"decode()"),Tc.forEach(o),Ea=i(Z," for more information."),Z.forEach(o),Pa=p(C),ze=r(C,"DIV",{class:!0});var xr=s(ze);w(Wt.$$.fragment,xr),Ca=p(xr),J=r(xr,"P",{});var Ue=s(J);Ma=i(Ue,`When used in normal mode, this method forwards all its arguments to WhisperFeatureExtractor\u2019s
`),xt=r(Ue,"A",{href:!0});var Cd=s(xt);kn=r(Cd,"STRONG",{});var $c=s(kn);ja=i($c,"call"),$c.forEach(o),Sa=i(Cd,"()"),Cd.forEach(o),Aa=i(Ue,` and returns its output. If used in the context
`),wn=r(Ue,"CODE",{});var Wc=s(wn);Na=i(Wc,"~WhisperProcessor.as_target_processor"),Wc.forEach(o),Ia=i(Ue,` this method forwards all its arguments to WhisperTokenizer\u2019s
`),zt=r(Ue,"A",{href:!0});var Md=s(zt);yn=r(Md,"STRONG",{});var xc=s(yn);Da=i(xc,"call"),xc.forEach(o),La=i(Md,"()"),Md.forEach(o),Ga=i(Ue,". Please refer to the doctsring of the above two methods for more information."),Ue.forEach(o),xr.forEach(o),Oa=p(C),Y=r(C,"DIV",{class:!0});var Ro=s(Y);w(Ft.$$.fragment,Ro),Va=p(Ro),Tn=r(Ro,"P",{});var zc=s(Tn);Ra=i(zc,"Instantiate a processor associated with a pretrained model."),zc.forEach(o),Ha=p(Ro),w(Fe.$$.fragment,Ro),Ro.forEach(o),Ua=p(C),ee=r(C,"DIV",{class:!0});var Ho=s(ee);w(qt.$$.fragment,Ho),Ba=p(Ho),Et=r(Ho,"P",{});var zr=s(Et);Ka=i(zr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zo=r(zr,"A",{href:!0});var Fc=s(zo);Ja=i(Fc,"from_pretrained()"),Fc.forEach(o),Za=i(zr," method."),zr.forEach(o),Qa=p(Ho),w(qe.$$.fragment,Ho),Ho.forEach(o),Xa=p(C),Ee=r(C,"DIV",{class:!0});var Fr=s(Ee);w(Pt.$$.fragment,Fr),Ya=p(Fr),Ct=r(Fr,"P",{});var qr=s(Ct);ei=i(qr,"This method forwards all its arguments to WhisperTokenizer\u2019s "),Fo=r(qr,"A",{href:!0});var qc=s(Fo);ti=i(qc,"batch_decode()"),qc.forEach(o),oi=i(qr,`. Please
refer to the docstring of this method for more information.`),qr.forEach(o),Fr.forEach(o),ni=p(C),Pe=r(C,"DIV",{class:!0});var Er=s(Pe);w(Mt.$$.fragment,Er),ri=p(Er),jt=r(Er,"P",{});var Pr=s(jt);si=i(Pr,"This method forwards all its arguments to WhisperTokenizer\u2019s "),qo=r(Pr,"A",{href:!0});var Ec=s(qo);ai=i(Ec,"decode()"),Ec.forEach(o),ii=i(Pr,`. Please refer to
the docstring of this method for more information.`),Pr.forEach(o),Er.forEach(o),C.forEach(o),ir=p(t),he=r(t,"H2",{class:!0});var Cr=s(he);Ce=r(Cr,"A",{id:!0,class:!0,href:!0});var Pc=s(Ce);$n=r(Pc,"SPAN",{});var Cc=s($n);w(St.$$.fragment,Cc),Cc.forEach(o),Pc.forEach(o),di=p(Cr),Wn=r(Cr,"SPAN",{});var Mc=s(Wn);ci=i(Mc,"WhisperModel"),Mc.forEach(o),Cr.forEach(o),dr=p(t),L=r(t,"DIV",{class:!0});var Be=s(L);w(At.$$.fragment,Be),li=p(Be),Nt=r(Be,"P",{});var Mr=s(Nt);hi=i(Mr,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Eo=r(Mr,"A",{href:!0});var jc=s(Eo);pi=i(jc,"PreTrainedModel"),jc.forEach(o),ui=i(Mr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mr.forEach(o),mi=p(Be),It=r(Be,"P",{});var jr=s(It);fi=i(jr,"This model is also a PyTorch "),Dt=r(jr,"A",{href:!0,rel:!0});var Sc=s(Dt);_i=i(Sc,"torch.nn.Module"),Sc.forEach(o),gi=i(jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jr.forEach(o),vi=p(Be),H=r(Be,"DIV",{class:!0});var Ke=s(H);w(Lt.$$.fragment,Ke),bi=p(Ke),pe=r(Ke,"P",{});var Uo=s(pe);ki=i(Uo,"The "),Po=r(Uo,"A",{href:!0});var Ac=s(Po);wi=i(Ac,"WhisperModel"),Ac.forEach(o),yi=i(Uo," forward method, overrides the "),xn=r(Uo,"CODE",{});var Nc=s(xn);Ti=i(Nc,"__call__"),Nc.forEach(o),$i=i(Uo," special method."),Uo.forEach(o),Wi=p(Ke),w(Me.$$.fragment,Ke),xi=p(Ke),w(je.$$.fragment,Ke),Ke.forEach(o),Be.forEach(o),cr=p(t),ue=r(t,"H2",{class:!0});var Sr=s(ue);Se=r(Sr,"A",{id:!0,class:!0,href:!0});var Ic=s(Se);zn=r(Ic,"SPAN",{});var Dc=s(zn);w(Gt.$$.fragment,Dc),Dc.forEach(o),Ic.forEach(o),zi=p(Sr),Fn=r(Sr,"SPAN",{});var Lc=s(Fn);Fi=i(Lc,"WhisperForConditionalGeneration"),Lc.forEach(o),Sr.forEach(o),lr=p(t),G=r(t,"DIV",{class:!0});var Je=s(G);w(Ot.$$.fragment,Je),qi=p(Je),Vt=r(Je,"P",{});var Ar=s(Vt);Ei=i(Ar,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Co=r(Ar,"A",{href:!0});var Gc=s(Co);Pi=i(Gc,"PreTrainedModel"),Gc.forEach(o),Ci=i(Ar,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ar.forEach(o),Mi=p(Je),Rt=r(Je,"P",{});var Nr=s(Rt);ji=i(Nr,"This model is also a PyTorch "),Ht=r(Nr,"A",{href:!0,rel:!0});var Oc=s(Ht);Si=i(Oc,"torch.nn.Module"),Oc.forEach(o),Ai=i(Nr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nr.forEach(o),Ni=p(Je),U=r(Je,"DIV",{class:!0});var Ze=s(U);w(Ut.$$.fragment,Ze),Ii=p(Ze),me=r(Ze,"P",{});var Bo=s(me);Di=i(Bo,"The "),Mo=r(Bo,"A",{href:!0});var Vc=s(Mo);Li=i(Vc,"WhisperForConditionalGeneration"),Vc.forEach(o),Gi=i(Bo," forward method, overrides the "),qn=r(Bo,"CODE",{});var Rc=s(qn);Oi=i(Rc,"__call__"),Rc.forEach(o),Vi=i(Bo," special method."),Bo.forEach(o),Ri=p(Ze),w(Ae.$$.fragment,Ze),Hi=p(Ze),w(Ne.$$.fragment,Ze),Ze.forEach(o),Je.forEach(o),hr=p(t),fe=r(t,"H2",{class:!0});var Ir=s(fe);Ie=r(Ir,"A",{id:!0,class:!0,href:!0});var Hc=s(Ie);En=r(Hc,"SPAN",{});var Uc=s(En);w(Bt.$$.fragment,Uc),Uc.forEach(o),Hc.forEach(o),Ui=p(Ir),Pn=r(Ir,"SPAN",{});var Bc=s(Pn);Bi=i(Bc,"TFWhisperModel"),Bc.forEach(o),Ir.forEach(o),pr=p(t),O=r(t,"DIV",{class:!0});var Qe=s(O);w(Kt.$$.fragment,Qe),Ki=p(Qe),Jt=r(Qe,"P",{});var Dr=s(Jt);Ji=i(Dr,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jo=r(Dr,"A",{href:!0});var Kc=s(jo);Zi=i(Kc,"TFPreTrainedModel"),Kc.forEach(o),Qi=i(Dr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dr.forEach(o),Xi=p(Qe),Zt=r(Qe,"P",{});var Lr=s(Zt);Yi=i(Lr,"This model is also a "),Qt=r(Lr,"A",{href:!0,rel:!0});var Jc=s(Qt);ed=i(Jc,"tf.keras.Model"),Jc.forEach(o),td=i(Lr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lr.forEach(o),od=p(Qe),B=r(Qe,"DIV",{class:!0});var Xe=s(B);w(Xt.$$.fragment,Xe),nd=p(Xe),_e=r(Xe,"P",{});var Ko=s(_e);rd=i(Ko,"The "),So=r(Ko,"A",{href:!0});var Zc=s(So);sd=i(Zc,"TFWhisperModel"),Zc.forEach(o),ad=i(Ko," forward method, overrides the "),Cn=r(Ko,"CODE",{});var Qc=s(Cn);id=i(Qc,"__call__"),Qc.forEach(o),dd=i(Ko," special method."),Ko.forEach(o),cd=p(Xe),w(De.$$.fragment,Xe),ld=p(Xe),w(Le.$$.fragment,Xe),Xe.forEach(o),Qe.forEach(o),ur=p(t),ge=r(t,"H2",{class:!0});var Gr=s(ge);Ge=r(Gr,"A",{id:!0,class:!0,href:!0});var Xc=s(Ge);Mn=r(Xc,"SPAN",{});var Yc=s(Mn);w(Yt.$$.fragment,Yc),Yc.forEach(o),Xc.forEach(o),hd=p(Gr),jn=r(Gr,"SPAN",{});var el=s(jn);pd=i(el,"TFWhisperForConditionalGeneration"),el.forEach(o),Gr.forEach(o),mr=p(t),V=r(t,"DIV",{class:!0});var Ye=s(V);w(eo.$$.fragment,Ye),ud=p(Ye),to=r(Ye,"P",{});var Or=s(to);md=i(Or,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Ao=r(Or,"A",{href:!0});var tl=s(Ao);fd=i(tl,"TFPreTrainedModel"),tl.forEach(o),_d=i(Or,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Or.forEach(o),gd=p(Ye),oo=r(Ye,"P",{});var Vr=s(oo);vd=i(Vr,"This model is also a "),no=r(Vr,"A",{href:!0,rel:!0});var ol=s(no);bd=i(ol,"tf.keras.Model"),ol.forEach(o),kd=i(Vr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vr.forEach(o),wd=p(Ye),K=r(Ye,"DIV",{class:!0});var et=s(K);w(ro.$$.fragment,et),yd=p(et),ve=r(et,"P",{});var Jo=s(ve);Td=i(Jo,"The "),No=r(Jo,"A",{href:!0});var nl=s(No);$d=i(nl,"TFWhisperForConditionalGeneration"),nl.forEach(o),Wd=i(Jo," forward method, overrides the "),Sn=r(Jo,"CODE",{});var rl=s(Sn);xd=i(rl,"__call__"),rl.forEach(o),zd=i(Jo," special method."),Jo.forEach(o),Fd=p(et),w(Oe.$$.fragment,et),qd=p(et),w(Ve.$$.fragment,et),et.forEach(o),Ye.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(yl)),c(_,"id","whisper"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#whisper"),c(f,"class","relative group"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(j,"class","relative group"),c(ot,"href","https://cdn.openai.com/papers/whisper.pdf"),c(ot,"rel","nofollow"),c(po,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(uo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor"),c(st,"href","https://huggingface.co/ArthurZ"),c(st,"rel","nofollow"),c(at,"href","https://huggingface.co/amyeroberts"),c(at,"rel","nofollow"),c(it,"href","https://github.com/openai/whisper"),c(it,"rel","nofollow"),c(ke,"id","transformers.WhisperConfig"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.WhisperConfig"),c(ne,"class","relative group"),c(mo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel"),c(lt,"href","https://huggingface.co/openai/whisper-tiny"),c(lt,"rel","nofollow"),c(fo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(_o,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ye,"id","transformers.WhisperTokenizer"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.WhisperTokenizer"),c(ae,"class","relative group"),c(go,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ko,"href","../glossary#token-type-ids"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"id","transformers.WhisperFeatureExtractor"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#transformers.WhisperFeatureExtractor"),c(de,"class","relative group"),c(yo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.WhisperProcessor"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.WhisperProcessor"),c(le,"class","relative group"),c(To,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor"),c($o,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(Wo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer"),c($t,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.__call__"),c(xo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.decode"),c(xt,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"),c(zt,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zo,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRProcessor.from_pretrained"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fo,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qo,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"id","transformers.WhisperModel"),c(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ce,"href","#transformers.WhisperModel"),c(he,"class","relative group"),c(Eo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dt,"rel","nofollow"),c(Po,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"id","transformers.WhisperForConditionalGeneration"),c(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Se,"href","#transformers.WhisperForConditionalGeneration"),c(ue,"class","relative group"),c(Co,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ht,"rel","nofollow"),c(Mo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperForConditionalGeneration"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.TFWhisperModel"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.TFWhisperModel"),c(fe,"class","relative group"),c(jo,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Qt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Qt,"rel","nofollow"),c(So,"href","/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.TFWhisperForConditionalGeneration"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.TFWhisperForConditionalGeneration"),c(ge,"class","relative group"),c(Ao,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(no,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(no,"rel","nofollow"),c(No,"href","/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperForConditionalGeneration"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,m){e(document.head,l),g(t,b,m),g(t,f,m),e(f,_),e(_,v),y(d,v,null),e(f,u),e(f,x),e(x,M),g(t,F,m),g(t,j,m),e(j,A),e(A,Qo),y(tt,Qo,null),e(j,Rr),e(j,Xo),e(Xo,Hr),g(t,Bn,m),g(t,be,m),e(be,Ur),e(be,ot),e(ot,Br),e(be,Kr),g(t,Kn,m),g(t,co,m),e(co,Jr),g(t,Jn,m),g(t,lo,m),e(lo,Yo),e(Yo,Zr),g(t,Zn,m),g(t,ho,m),e(ho,Qr),g(t,Qn,m),g(t,Q,m),e(Q,en),e(en,Xr),e(Q,Yr),e(Q,nt),e(nt,es),e(nt,po),e(po,ts),e(nt,os),e(Q,ns),e(Q,rt),e(rt,rs),e(rt,uo),e(uo,ss),e(rt,as),g(t,Xn,m),g(t,R,m),e(R,is),e(R,st),e(st,ds),e(R,cs),e(R,at),e(at,ls),e(R,hs),e(R,it),e(it,ps),e(R,us),g(t,Yn,m),g(t,ne,m),e(ne,ke),e(ke,tn),y(dt,tn,null),e(ne,ms),e(ne,on),e(on,fs),g(t,er,m),g(t,D,m),y(ct,D,null),e(D,_s),e(D,re),e(re,gs),e(re,mo),e(mo,vs),e(re,bs),e(re,lt),e(lt,ks),e(re,ws),e(D,ys),e(D,se),e(se,Ts),e(se,fo),e(fo,$s),e(se,Ws),e(se,_o),e(_o,xs),e(se,zs),e(D,Fs),y(we,D,null),g(t,tr,m),g(t,ae,m),e(ae,ye),e(ye,nn),y(ht,nn,null),e(ae,qs),e(ae,rn),e(rn,Es),g(t,or,m),g(t,P,m),y(pt,P,null),e(P,Ps),e(P,sn),e(sn,Cs),e(P,Ms),e(P,ut),e(ut,js),e(ut,go),e(go,Ss),e(ut,As),e(P,Ns),e(P,vo),y(mt,vo,null),e(P,Is),e(P,Te),y(ft,Te,null),e(Te,Ds),e(Te,ie),e(ie,Ls),e(ie,an),e(an,Gs),e(ie,Os),e(ie,dn),e(dn,Vs),e(ie,Rs),e(P,Hs),e(P,X),y(_t,X,null),e(X,Us),e(X,bo),e(bo,Bs),e(bo,ko),e(ko,Ks),e(X,Js),e(X,cn),e(cn,Zs),e(P,Qs),e(P,wo),y(gt,wo,null),g(t,nr,m),g(t,de,m),e(de,$e),e($e,ln),y(vt,ln,null),e(de,Xs),e(de,hn),e(hn,Ys),g(t,rr,m),g(t,S,m),y(bt,S,null),e(S,ea),e(S,pn),e(pn,ta),e(S,oa),e(S,kt),e(kt,na),e(kt,yo),e(yo,ra),e(kt,sa),e(S,aa),e(S,ce),e(ce,ia),e(ce,un),e(un,da),e(ce,ca),e(ce,mn),e(mn,la),e(ce,ha),e(S,pa),e(S,We),y(wt,We,null),e(We,ua),e(We,fn),e(fn,ma),g(t,sr,m),g(t,le,m),e(le,xe),e(xe,_n),y(yt,_n,null),e(le,fa),e(le,gn),e(gn,_a),g(t,ar,m),g(t,E,m),y(Tt,E,null),e(E,ga),e(E,vn),e(vn,va),e(E,ba),e(E,N),e(N,To),e(To,ka),e(N,wa),e(N,$o),e($o,ya),e(N,Ta),e(N,Wo),e(Wo,$a),e(N,Wa),e(N,$t),e($t,bn),e(bn,xa),e($t,za),e(N,Fa),e(N,xo),e(xo,qa),e(N,Ea),e(E,Pa),e(E,ze),y(Wt,ze,null),e(ze,Ca),e(ze,J),e(J,Ma),e(J,xt),e(xt,kn),e(kn,ja),e(xt,Sa),e(J,Aa),e(J,wn),e(wn,Na),e(J,Ia),e(J,zt),e(zt,yn),e(yn,Da),e(zt,La),e(J,Ga),e(E,Oa),e(E,Y),y(Ft,Y,null),e(Y,Va),e(Y,Tn),e(Tn,Ra),e(Y,Ha),y(Fe,Y,null),e(E,Ua),e(E,ee),y(qt,ee,null),e(ee,Ba),e(ee,Et),e(Et,Ka),e(Et,zo),e(zo,Ja),e(Et,Za),e(ee,Qa),y(qe,ee,null),e(E,Xa),e(E,Ee),y(Pt,Ee,null),e(Ee,Ya),e(Ee,Ct),e(Ct,ei),e(Ct,Fo),e(Fo,ti),e(Ct,oi),e(E,ni),e(E,Pe),y(Mt,Pe,null),e(Pe,ri),e(Pe,jt),e(jt,si),e(jt,qo),e(qo,ai),e(jt,ii),g(t,ir,m),g(t,he,m),e(he,Ce),e(Ce,$n),y(St,$n,null),e(he,di),e(he,Wn),e(Wn,ci),g(t,dr,m),g(t,L,m),y(At,L,null),e(L,li),e(L,Nt),e(Nt,hi),e(Nt,Eo),e(Eo,pi),e(Nt,ui),e(L,mi),e(L,It),e(It,fi),e(It,Dt),e(Dt,_i),e(It,gi),e(L,vi),e(L,H),y(Lt,H,null),e(H,bi),e(H,pe),e(pe,ki),e(pe,Po),e(Po,wi),e(pe,yi),e(pe,xn),e(xn,Ti),e(pe,$i),e(H,Wi),y(Me,H,null),e(H,xi),y(je,H,null),g(t,cr,m),g(t,ue,m),e(ue,Se),e(Se,zn),y(Gt,zn,null),e(ue,zi),e(ue,Fn),e(Fn,Fi),g(t,lr,m),g(t,G,m),y(Ot,G,null),e(G,qi),e(G,Vt),e(Vt,Ei),e(Vt,Co),e(Co,Pi),e(Vt,Ci),e(G,Mi),e(G,Rt),e(Rt,ji),e(Rt,Ht),e(Ht,Si),e(Rt,Ai),e(G,Ni),e(G,U),y(Ut,U,null),e(U,Ii),e(U,me),e(me,Di),e(me,Mo),e(Mo,Li),e(me,Gi),e(me,qn),e(qn,Oi),e(me,Vi),e(U,Ri),y(Ae,U,null),e(U,Hi),y(Ne,U,null),g(t,hr,m),g(t,fe,m),e(fe,Ie),e(Ie,En),y(Bt,En,null),e(fe,Ui),e(fe,Pn),e(Pn,Bi),g(t,pr,m),g(t,O,m),y(Kt,O,null),e(O,Ki),e(O,Jt),e(Jt,Ji),e(Jt,jo),e(jo,Zi),e(Jt,Qi),e(O,Xi),e(O,Zt),e(Zt,Yi),e(Zt,Qt),e(Qt,ed),e(Zt,td),e(O,od),e(O,B),y(Xt,B,null),e(B,nd),e(B,_e),e(_e,rd),e(_e,So),e(So,sd),e(_e,ad),e(_e,Cn),e(Cn,id),e(_e,dd),e(B,cd),y(De,B,null),e(B,ld),y(Le,B,null),g(t,ur,m),g(t,ge,m),e(ge,Ge),e(Ge,Mn),y(Yt,Mn,null),e(ge,hd),e(ge,jn),e(jn,pd),g(t,mr,m),g(t,V,m),y(eo,V,null),e(V,ud),e(V,to),e(to,md),e(to,Ao),e(Ao,fd),e(to,_d),e(V,gd),e(V,oo),e(oo,vd),e(oo,no),e(no,bd),e(oo,kd),e(V,wd),e(V,K),y(ro,K,null),e(K,yd),e(K,ve),e(ve,Td),e(ve,No),e(No,$d),e(ve,Wd),e(ve,Sn),e(Sn,xd),e(ve,zd),e(K,Fd),y(Oe,K,null),e(K,qd),y(Ve,K,null),fr=!0},p(t,[m]){const so={};m&2&&(so.$$scope={dirty:m,ctx:t}),we.$set(so);const An={};m&2&&(An.$$scope={dirty:m,ctx:t}),Fe.$set(An);const Nn={};m&2&&(Nn.$$scope={dirty:m,ctx:t}),qe.$set(Nn);const In={};m&2&&(In.$$scope={dirty:m,ctx:t}),Me.$set(In);const ao={};m&2&&(ao.$$scope={dirty:m,ctx:t}),je.$set(ao);const Dn={};m&2&&(Dn.$$scope={dirty:m,ctx:t}),Ae.$set(Dn);const Ln={};m&2&&(Ln.$$scope={dirty:m,ctx:t}),Ne.$set(Ln);const Gn={};m&2&&(Gn.$$scope={dirty:m,ctx:t}),De.$set(Gn);const io={};m&2&&(io.$$scope={dirty:m,ctx:t}),Le.$set(io);const On={};m&2&&(On.$$scope={dirty:m,ctx:t}),Oe.$set(On);const Vn={};m&2&&(Vn.$$scope={dirty:m,ctx:t}),Ve.$set(Vn)},i(t){fr||(T(d.$$.fragment,t),T(tt.$$.fragment,t),T(dt.$$.fragment,t),T(ct.$$.fragment,t),T(we.$$.fragment,t),T(ht.$$.fragment,t),T(pt.$$.fragment,t),T(mt.$$.fragment,t),T(ft.$$.fragment,t),T(_t.$$.fragment,t),T(gt.$$.fragment,t),T(vt.$$.fragment,t),T(bt.$$.fragment,t),T(wt.$$.fragment,t),T(yt.$$.fragment,t),T(Tt.$$.fragment,t),T(Wt.$$.fragment,t),T(Ft.$$.fragment,t),T(Fe.$$.fragment,t),T(qt.$$.fragment,t),T(qe.$$.fragment,t),T(Pt.$$.fragment,t),T(Mt.$$.fragment,t),T(St.$$.fragment,t),T(At.$$.fragment,t),T(Lt.$$.fragment,t),T(Me.$$.fragment,t),T(je.$$.fragment,t),T(Gt.$$.fragment,t),T(Ot.$$.fragment,t),T(Ut.$$.fragment,t),T(Ae.$$.fragment,t),T(Ne.$$.fragment,t),T(Bt.$$.fragment,t),T(Kt.$$.fragment,t),T(Xt.$$.fragment,t),T(De.$$.fragment,t),T(Le.$$.fragment,t),T(Yt.$$.fragment,t),T(eo.$$.fragment,t),T(ro.$$.fragment,t),T(Oe.$$.fragment,t),T(Ve.$$.fragment,t),fr=!0)},o(t){$(d.$$.fragment,t),$(tt.$$.fragment,t),$(dt.$$.fragment,t),$(ct.$$.fragment,t),$(we.$$.fragment,t),$(ht.$$.fragment,t),$(pt.$$.fragment,t),$(mt.$$.fragment,t),$(ft.$$.fragment,t),$(_t.$$.fragment,t),$(gt.$$.fragment,t),$(vt.$$.fragment,t),$(bt.$$.fragment,t),$(wt.$$.fragment,t),$(yt.$$.fragment,t),$(Tt.$$.fragment,t),$(Wt.$$.fragment,t),$(Ft.$$.fragment,t),$(Fe.$$.fragment,t),$(qt.$$.fragment,t),$(qe.$$.fragment,t),$(Pt.$$.fragment,t),$(Mt.$$.fragment,t),$(St.$$.fragment,t),$(At.$$.fragment,t),$(Lt.$$.fragment,t),$(Me.$$.fragment,t),$(je.$$.fragment,t),$(Gt.$$.fragment,t),$(Ot.$$.fragment,t),$(Ut.$$.fragment,t),$(Ae.$$.fragment,t),$(Ne.$$.fragment,t),$(Bt.$$.fragment,t),$(Kt.$$.fragment,t),$(Xt.$$.fragment,t),$(De.$$.fragment,t),$(Le.$$.fragment,t),$(Yt.$$.fragment,t),$(eo.$$.fragment,t),$(ro.$$.fragment,t),$(Oe.$$.fragment,t),$(Ve.$$.fragment,t),fr=!1},d(t){o(l),t&&o(b),t&&o(f),W(d),t&&o(F),t&&o(j),W(tt),t&&o(Bn),t&&o(be),t&&o(Kn),t&&o(co),t&&o(Jn),t&&o(lo),t&&o(Zn),t&&o(ho),t&&o(Qn),t&&o(Q),t&&o(Xn),t&&o(R),t&&o(Yn),t&&o(ne),W(dt),t&&o(er),t&&o(D),W(ct),W(we),t&&o(tr),t&&o(ae),W(ht),t&&o(or),t&&o(P),W(pt),W(mt),W(ft),W(_t),W(gt),t&&o(nr),t&&o(de),W(vt),t&&o(rr),t&&o(S),W(bt),W(wt),t&&o(sr),t&&o(le),W(yt),t&&o(ar),t&&o(E),W(Tt),W(Wt),W(Ft),W(Fe),W(qt),W(qe),W(Pt),W(Mt),t&&o(ir),t&&o(he),W(St),t&&o(dr),t&&o(L),W(At),W(Lt),W(Me),W(je),t&&o(cr),t&&o(ue),W(Gt),t&&o(lr),t&&o(G),W(Ot),W(Ut),W(Ae),W(Ne),t&&o(hr),t&&o(fe),W(Bt),t&&o(pr),t&&o(O),W(Kt),W(Xt),W(De),W(Le),t&&o(ur),t&&o(ge),W(Yt),t&&o(mr),t&&o(V),W(eo),W(ro),W(Oe),W(Ve)}}}const yl={local:"whisper",sections:[{local:"overview",title:"Overview"},{local:"transformers.WhisperConfig",title:"WhisperConfig"},{local:"transformers.WhisperTokenizer",title:"WhisperTokenizer"},{local:"transformers.WhisperFeatureExtractor",title:"WhisperFeatureExtractor"},{local:"transformers.WhisperProcessor",title:"WhisperProcessor"},{local:"transformers.WhisperModel",title:"WhisperModel"},{local:"transformers.WhisperForConditionalGeneration",title:"WhisperForConditionalGeneration"},{local:"transformers.TFWhisperModel",title:"TFWhisperModel"},{local:"transformers.TFWhisperForConditionalGeneration",title:"TFWhisperForConditionalGeneration"}],title:"Whisper"};function Tl(z){return cl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class El extends sl{constructor(l){super();al(this,l,Tl,wl,il,{})}}export{El as default,yl as metadata};
