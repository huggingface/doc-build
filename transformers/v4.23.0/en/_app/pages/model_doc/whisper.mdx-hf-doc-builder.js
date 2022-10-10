import{S as sl,i as al,s as il,e as r,k as h,w as k,t as a,M as dl,c as n,d as o,m as p,a as s,x as w,h as i,b as c,G as e,g,y,q as T,o as $,B as W,v as cl,L as Rr}from"../../chunks/vendor-hf-doc-builder.js";import{T as Zo}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Hr}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Vr}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ll(F){let l,b,m,_,v;return _=new Hr({props:{code:`from transformers import WhisperModel, WhisperConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=r("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=n(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Rr,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function hl(F){let l,b,m,_,v,d,u,x;return{c(){l=r("p"),b=a(`This class method is simply calling the feature extractor
`),m=r("a"),_=a("from_pretrained()"),v=a(` and the tokenizer
`),d=r("code"),u=a("~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),x=a(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(M){l=n(M,"P",{});var z=s(l);b=i(z,`This class method is simply calling the feature extractor
`),m=n(z,"A",{href:!0});var j=s(m);_=i(j,"from_pretrained()"),j.forEach(o),v=i(z,` and the tokenizer
`),d=n(z,"CODE",{});var A=s(d);u=i(A,"~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),A.forEach(o),x=i(z,` methods. Please refer to the docstrings of the
methods above for more information.`),z.forEach(o),this.h()},h(){c(m,"href","/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(M,z){g(M,l,z),e(l,b),e(l,m),e(m,_),e(l,v),e(l,d),e(d,u),e(l,x)},d(M){M&&o(l)}}}function pl(F){let l,b,m,_,v,d,u,x;return{c(){l=r("p"),b=a("This class method is simply calling "),m=r("a"),_=a("save_pretrained()"),v=a(` and
`),d=r("code"),u=a("~tokenization_utils_base.PreTrainedTokenizer.save_pretrained"),x=a(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(M){l=n(M,"P",{});var z=s(l);b=i(z,"This class method is simply calling "),m=n(z,"A",{href:!0});var j=s(m);_=i(j,"save_pretrained()"),j.forEach(o),v=i(z,` and
`),d=n(z,"CODE",{});var A=s(d);u=i(A,"~tokenization_utils_base.PreTrainedTokenizer.save_pretrained"),A.forEach(o),x=i(z,`. Please refer to the docstrings of the methods
above for more information.`),z.forEach(o),this.h()},h(){c(m,"href","/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(M,z){g(M,l,z),e(l,b),e(l,m),e(m,_),e(l,v),e(l,d),e(d,u),e(l,x)},d(M){M&&o(l)}}}function ul(F){let l,b,m,_,v;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(u,"CODE",{});var x=s(m);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,m),e(m,_),e(l,v)},d(d){d&&o(l)}}}function fl(F){let l,b,m,_,v;return _=new Hr({props:{code:`import torch
from transformers import WhisperModel, WhisperFeatureExtractor
from datasets import load_dataset

model = WhisperModel.from_pretrained("openai/whisper-base")
feature_extractor = WhisperFeatureExtractor.from_pretrained("openai/whisper-base")
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
inputs = feature_extractor(ds[0]["audio"]["array"], return_tensors="pt")
input_features = inputs.input_features
decoder_input_ids = torch.tensor([[1, 1]]) * model.config.decoder_start_token_id
last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
list(last_hidden_state.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperModel, WhisperFeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperModel.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = WhisperFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=r("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=n(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Rr,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function ml(F){let l,b,m,_,v;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(u,"CODE",{});var x=s(m);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,m),e(m,_),e(l,v)},d(d){d&&o(l)}}}function _l(F){let l,b,m,_,v;return _=new Hr({props:{code:`import torch
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to&#x27;</span>`}}),{c(){l=r("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=n(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Rr,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function gl(F){let l,b,m,_,v;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(u,"CODE",{});var x=s(m);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,m),e(m,_),e(l,v)},d(d){d&&o(l)}}}function vl(F){let l,b,m,_,v;return _=new Hr({props:{code:`import tensorflow as tf
from transformers import TFWhisperModel, WhisperFeatureExtractor
from datasets import load_dataset

model = TFWhisperModel.from_pretrained("openai/whisper-base")
feature_extractor = WhisperFeatureExtractor.from_pretrained("openai/whisper-base")
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
inputs = feature_extractor(
    ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="tf"
)
input_features = inputs.input_features
decoder_input_ids = tf.convert_to_tensor([[1, 1]]) * model.config.decoder_start_token_id
last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
list(last_hidden_state.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFWhisperModel, WhisperFeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWhisperModel.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = WhisperFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tf.convert_to_tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=r("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=n(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Rr,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function bl(F){let l,b,m,_,v;return{c(){l=r("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=n(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n(u,"CODE",{});var x=s(m);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,m),e(m,_),e(l,v)},d(d){d&&o(l)}}}function kl(F){let l,b,m,_,v;return _=new Hr({props:{code:`import tensorflow as tf
from transformers import WhisperProcessor, TFWhisperForConditionalGeneration
from datasets import load_dataset

processor = WhisperProcessor.from_pretrained("openai/whisper-tiny.en")
model = TFWhisperForConditionalGeneration.from_pretrained("openai/whisper-tiny.en")

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

inputs = processor(ds[0]["audio"]["array"], return_tensors="tf")
input_features = inputs.input_features

generated_ids = model.generate(inputs=input_features)

transcription = processor.batch_decode(generated_ids, skip_special_tokens=True)[0]
transcription`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperProcessor, TFWhisperForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = WhisperProcessor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFWhisperForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny.en&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to&#x27;</span>`}}),{c(){l=r("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=n(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Rr,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function wl(F){let l,b,m,_,v,d,u,x,M,z,j,A,Qo,tt,Rn,Xo,Hn,Ur,be,Un,ot,Bn,Kn,Br,co,Jn,Kr,lo,Yo,Zn,Jr,ho,Qn,Zr,Q,er,Xn,Yn,rt,es,po,ts,os,rs,nt,ns,uo,ss,as,Qr,R,is,st,ds,cs,at,ls,hs,it,ps,us,Xr,re,ke,tr,dt,fs,or,ms,Yr,L,ct,_s,ne,gs,fo,vs,bs,lt,ks,ws,ys,se,Ts,mo,$s,Ws,_o,xs,Fs,zs,we,en,ae,ye,rr,ht,Es,nr,qs,tn,P,pt,Ps,sr,Cs,Ms,ut,js,go,Ss,As,Ns,vo,ft,Is,Te,mt,Ls,ie,Ds,ar,Gs,Os,ir,Vs,Rs,Hs,X,_t,Us,bo,Bs,ko,Ks,Js,dr,Zs,Qs,wo,gt,on,de,$e,cr,vt,Xs,lr,Ys,rn,S,bt,ea,hr,ta,oa,kt,ra,yo,na,sa,aa,ce,ia,pr,da,ca,ur,la,ha,pa,We,wt,ua,fr,fa,nn,le,xe,mr,yt,ma,_r,_a,sn,q,Tt,ga,gr,va,ba,N,To,ka,wa,$o,ya,Ta,Wo,$a,Wa,$t,vr,xa,Fa,za,xo,Ea,qa,Pa,Fe,Wt,Ca,J,Ma,xt,br,ja,Sa,Aa,kr,Na,Ia,Ft,wr,La,Da,Ga,Oa,Y,zt,Va,yr,Ra,Ha,ze,Ua,ee,Et,Ba,qt,Ka,Fo,Ja,Za,Qa,Ee,Xa,qe,Pt,Ya,Ct,ei,zo,ti,oi,ri,Pe,Mt,ni,jt,si,Eo,ai,ii,an,he,Ce,Tr,St,di,$r,ci,dn,D,At,li,Nt,hi,qo,pi,ui,fi,It,mi,Lt,_i,gi,vi,H,Dt,bi,pe,ki,Po,wi,yi,Wr,Ti,$i,Wi,Me,xi,je,cn,ue,Se,xr,Gt,Fi,Fr,zi,ln,G,Ot,Ei,Vt,qi,Co,Pi,Ci,Mi,Rt,ji,Ht,Si,Ai,Ni,U,Ut,Ii,fe,Li,Mo,Di,Gi,zr,Oi,Vi,Ri,Ae,Hi,Ne,hn,me,Ie,Er,Bt,Ui,qr,Bi,pn,O,Kt,Ki,Jt,Ji,jo,Zi,Qi,Xi,Zt,Yi,Qt,ed,td,od,B,Xt,rd,_e,nd,So,sd,ad,Pr,id,dd,cd,Le,ld,De,un,ge,Ge,Cr,Yt,hd,Mr,pd,fn,V,eo,ud,to,fd,Ao,md,_d,gd,oo,vd,ro,bd,kd,wd,K,no,yd,ve,Td,No,$d,Wd,jr,xd,Fd,zd,Oe,Ed,Ve,mn;return d=new oe({}),tt=new oe({}),dt=new oe({}),ct=new E({props:{name:"class transformers.WhisperConfig",anchor:"transformers.WhisperConfig",parameters:[{name:"vocab_size",val:" = 51865"},{name:"num_mel_bins",val:" = 80"},{name:"encoder_layers",val:" = 6"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_ffn_dim",val:" = 1536"},{name:"encoder_ffn_dim",val:" = 1536"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 50257"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"max_source_positions",val:" = 1500"},{name:"max_target_positions",val:" = 448"},{name:"pad_token_id",val:" = 50256"},{name:"bos_token_id",val:" = 50257"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = True"},{name:"suppress_tokens",val:" = None"},{name:"begin_suppress_tokens",val:" = [220, 50256]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 51865) &#x2014;
Vocabulary size of the Whisper model. Defines the number of different tokens that can be represented by the
<code>decoder_input_ids</code> passed when calling <a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperModel">WhisperModel</a>`,name:"vocab_size"},{anchor:"transformers.WhisperConfig.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
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
the token for <code>&quot; &quot;</code> (<code>blank_token_id</code>) and the <code>eos_token_id</code>`,name:"begin_suppress_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/configuration_whisper.py#L53"}}),we=new Vr({props:{anchor:"transformers.WhisperConfig.example",$$slots:{default:[ll]},$$scope:{ctx:F}}}),ht=new oe({}),pt=new E({props:{name:"class transformers.WhisperTokenizer",anchor:"transformers.WhisperTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
any other word.`,name:"add_bos_token"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/tokenization_whisper.py#L92"}}),ft=new E({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/tokenization_whisper.py#L235"}}),mt=new E({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/tokenization_whisper.py#L249",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_t=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/tokenization_utils_base.py#L2983",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gt=new E({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/tokenization_whisper.py#L349"}}),vt=new oe({}),bt=new E({props:{name:"class transformers.WhisperFeatureExtractor",anchor:"transformers.WhisperFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"hop_length",val:" = 160"},{name:"chunk_length",val:" = 30"},{name:"n_fft",val:" = 400"},{name:"padding_value",val:" = 0.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.WhisperFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 160) &#x2014;
Length of the overlaping windows for the STFT used to obtain the Mel Frequency coefficients.`,name:"hop_length"},{anchor:"transformers.WhisperFeatureExtractor.chunk_length",description:`<strong>chunk_length</strong> (<code>int</code>, defaults to 30) &#x2014;
The maximum number of chuncks of <code>sampling_rate</code> samples used to trim and pad longer or shorter audio
sequences.`,name:"chunk_length"},{anchor:"transformers.WhisperFeatureExtractor.n_fft",description:`<strong>n_fft</strong> (<code>int</code>, defaults to 400) &#x2014;
Size of the Fourier transform.`,name:"n_fft"},{anchor:"transformers.WhisperFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Padding value used to pad the audio. Should correspond to silences.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/feature_extraction_whisper.py#L32"}}),wt=new E({props:{name:"__call__",anchor:"transformers.WhisperFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"truncation",val:": bool = True"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"padding",val:": typing.Optional[str] = 'max_length'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.WhisperFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.23.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.WhisperFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors and allow automatic speech recognition
pipeline.`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/feature_extraction_whisper.py#L212"}}),yt=new oe({}),Tt=new E({props:{name:"class transformers.WhisperProcessor",anchor:"transformers.WhisperProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>WhisperFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.WhisperProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>WhisperTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/processing_whisper.py#L22"}}),Wt=new E({props:{name:"__call__",anchor:"transformers.WhisperProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/processing_whisper.py#L77"}}),zt=new E({props:{name:"from_pretrained",anchor:"transformers.WhisperProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/v4.23.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/processing_utils.py#L152"}}),ze=new Zo({props:{$$slots:{default:[hl]},$$scope:{ctx:F}}}),Et=new E({props:{name:"save_pretrained",anchor:"transformers.WhisperProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.WhisperProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/processing_utils.py#L94"}}),Ee=new Zo({props:{$$slots:{default:[pl]},$$scope:{ctx:F}}}),Pt=new E({props:{name:"batch_decode",anchor:"transformers.WhisperProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/processing_whisper.py#L112"}}),Mt=new E({props:{name:"decode",anchor:"transformers.WhisperProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/processing_whisper.py#L119"}}),St=new oe({}),At=new E({props:{name:"class transformers.WhisperModel",anchor:"transformers.WhisperModel",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/modeling_whisper.py#L961"}}),Dt=new E({props:{name:"forward",anchor:"transformers.WhisperModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/modeling_whisper.py#L984",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Me=new Zo({props:{$$slots:{default:[ul]},$$scope:{ctx:F}}}),je=new Vr({props:{anchor:"transformers.WhisperModel.forward.example",$$slots:{default:[fl]},$$scope:{ctx:F}}}),Gt=new oe({}),Ot=new E({props:{name:"class transformers.WhisperForConditionalGeneration",anchor:"transformers.WhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/modeling_whisper.py#L1080"}}),Ut=new E({props:{name:"forward",anchor:"transformers.WhisperForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WhisperForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/modeling_whisper.py#L1115",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new Zo({props:{$$slots:{default:[ml]},$$scope:{ctx:F}}}),Ne=new Vr({props:{anchor:"transformers.WhisperForConditionalGeneration.forward.example",$$slots:{default:[_l]},$$scope:{ctx:F}}}),Bt=new oe({}),Kt=new E({props:{name:"class transformers.TFWhisperModel",anchor:"transformers.TFWhisperModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/modeling_tf_whisper.py#L1105"}}),Xt=new E({props:{name:"call",anchor:"transformers.TFWhisperModel.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/modeling_tf_whisper.py#L1129",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Le=new Zo({props:{$$slots:{default:[gl]},$$scope:{ctx:F}}}),De=new Vr({props:{anchor:"transformers.TFWhisperModel.call.example",$$slots:{default:[vl]},$$scope:{ctx:F}}}),Yt=new oe({}),eo=new E({props:{name:"class transformers.TFWhisperForConditionalGeneration",anchor:"transformers.TFWhisperForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/modeling_tf_whisper.py#L1215"}}),no=new E({props:{name:"call",anchor:"transformers.TFWhisperForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/whisper/modeling_tf_whisper.py#L1246",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperConfig"
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Oe=new Zo({props:{$$slots:{default:[bl]},$$scope:{ctx:F}}}),Ve=new Vr({props:{anchor:"transformers.TFWhisperForConditionalGeneration.call.example",$$slots:{default:[kl]},$$scope:{ctx:F}}}),{c(){l=r("meta"),b=h(),m=r("h1"),_=r("a"),v=r("span"),k(d.$$.fragment),u=h(),x=r("span"),M=a("Whisper"),z=h(),j=r("h2"),A=r("a"),Qo=r("span"),k(tt.$$.fragment),Rn=h(),Xo=r("span"),Hn=a("Overview"),Ur=h(),be=r("p"),Un=a("The Whisper model was proposed in "),ot=r("a"),Bn=a("Robust Speech Recognition via Large-Scale Weak Supervision"),Kn=a(" by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),Br=h(),co=r("p"),Jn=a("The abstract from the paper is the following:"),Kr=h(),lo=r("p"),Yo=r("em"),Zn=a("We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Jr=h(),ho=r("p"),Qn=a("Tips:"),Zr=h(),Q=r("ul"),er=r("li"),Xn=a("The model usually performs well without requiring any finetuning."),Yn=h(),rt=r("li"),es=a("The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),po=r("a"),ts=a("generate()"),os=a(" function for inference."),rs=h(),nt=r("li"),ns=a("One can use "),uo=r("a"),ss=a("WhisperProcessor"),as=a(" to prepare audio for the model, and decode the predicted ID\u2019s back into text."),Qr=h(),R=r("p"),is=a("This model was contributed by "),st=r("a"),ds=a("Arthur Zucker"),cs=a(". The Tensorflow version of this model was contributed by "),at=r("a"),ls=a("amyeroberts"),hs=a(`.
The original code can be found `),it=r("a"),ps=a("here"),us=a("."),Xr=h(),re=r("h2"),ke=r("a"),tr=r("span"),k(dt.$$.fragment),fs=h(),or=r("span"),ms=a("WhisperConfig"),Yr=h(),L=r("div"),k(ct.$$.fragment),_s=h(),ne=r("p"),gs=a("This is the configuration class to store the configuration of a "),fo=r("a"),vs=a("WhisperModel"),bs=a(`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),lt=r("a"),ks=a("openai/whisper-tiny"),ws=a(" architecture."),ys=h(),se=r("p"),Ts=a("Configuration objects inherit from "),mo=r("a"),$s=a("PretrainedConfig"),Ws=a(` and can be used to control the model outputs. Read the
documentation from `),_o=r("a"),xs=a("PretrainedConfig"),Fs=a(" for more information."),zs=h(),k(we.$$.fragment),en=h(),ae=r("h2"),ye=r("a"),rr=r("span"),k(ht.$$.fragment),Es=h(),nr=r("span"),qs=a("WhisperTokenizer"),tn=h(),P=r("div"),k(pt.$$.fragment),Ps=h(),sr=r("p"),Cs=a("Construct an Whisper tokenizer."),Ms=h(),ut=r("p"),js=a("This tokenizer inherits from "),go=r("a"),Ss=a("PreTrainedTokenizer"),As=a(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Ns=h(),vo=r("div"),k(ft.$$.fragment),Is=h(),Te=r("div"),k(mt.$$.fragment),Ls=h(),ie=r("p"),Ds=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ar=r("code"),Gs=a("prepare_for_model"),Os=a(" or "),ir=r("code"),Vs=a("encode_plus"),Rs=a(" methods."),Hs=h(),X=r("div"),k(_t.$$.fragment),Us=h(),bo=r("p"),Bs=a("Create the token type IDs corresponding to the sequences passed. "),ko=r("a"),Ks=a(`What are token type
IDs?`),Js=h(),dr=r("p"),Zs=a("Should be overridden in a subclass if the model has a special way of building those."),Qs=h(),wo=r("div"),k(gt.$$.fragment),on=h(),de=r("h2"),$e=r("a"),cr=r("span"),k(vt.$$.fragment),Xs=h(),lr=r("span"),Ys=a("WhisperFeatureExtractor"),rn=h(),S=r("div"),k(bt.$$.fragment),ea=h(),hr=r("p"),ta=a("Constructs a Whisper feature extractor."),oa=h(),kt=r("p"),ra=a("This feature extractor inherits from "),yo=r("a"),na=a("WhisperFeatureExtractor"),sa=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),aa=h(),ce=r("p"),ia=a("This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),pr=r("code"),da=a("Short Time Fourier Transform"),ca=a(" which should match pytorch\u2019s "),ur=r("code"),la=a("torch.stft"),ha=a(" equivalent."),pa=h(),We=r("div"),k(wt.$$.fragment),ua=h(),fr=r("p"),fa=a("Main method to featurize and prepare for the model one or several sequence(s)."),nn=h(),le=r("h2"),xe=r("a"),mr=r("span"),k(yt.$$.fragment),ma=h(),_r=r("span"),_a=a("WhisperProcessor"),sn=h(),q=r("div"),k(Tt.$$.fragment),ga=h(),gr=r("p"),va=a(`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),ba=h(),N=r("p"),To=r("a"),ka=a("WhisperProcessor"),wa=a(" offers all the functionalities of "),$o=r("a"),ya=a("WhisperFeatureExtractor"),Ta=a(" and "),Wo=r("a"),$a=a("WhisperTokenizer"),Wa=a(`. See
the `),$t=r("a"),vr=r("strong"),xa=a("call"),Fa=a("()"),za=a(" and "),xo=r("a"),Ea=a("decode()"),qa=a(" for more information."),Pa=h(),Fe=r("div"),k(Wt.$$.fragment),Ca=h(),J=r("p"),Ma=a(`When used in normal mode, this method forwards all its arguments to WhisperFeatureExtractor\u2019s
`),xt=r("a"),br=r("strong"),ja=a("call"),Sa=a("()"),Aa=a(` and returns its output. If used in the context
`),kr=r("code"),Na=a("~WhisperProcessor.as_target_processor"),Ia=a(` this method forwards all its arguments to WhisperTokenizer\u2019s
`),Ft=r("a"),wr=r("strong"),La=a("call"),Da=a("()"),Ga=a(". Please refer to the doctsring of the above two methods for more information."),Oa=h(),Y=r("div"),k(zt.$$.fragment),Va=h(),yr=r("p"),Ra=a("Instantiate a processor associated with a pretrained model."),Ha=h(),k(ze.$$.fragment),Ua=h(),ee=r("div"),k(Et.$$.fragment),Ba=h(),qt=r("p"),Ka=a(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Fo=r("a"),Ja=a("from_pretrained()"),Za=a(" method."),Qa=h(),k(Ee.$$.fragment),Xa=h(),qe=r("div"),k(Pt.$$.fragment),Ya=h(),Ct=r("p"),ei=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),zo=r("a"),ti=a("batch_decode()"),oi=a(`. Please
refer to the docstring of this method for more information.`),ri=h(),Pe=r("div"),k(Mt.$$.fragment),ni=h(),jt=r("p"),si=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),Eo=r("a"),ai=a("decode()"),ii=a(`. Please refer to
the docstring of this method for more information.`),an=h(),he=r("h2"),Ce=r("a"),Tr=r("span"),k(St.$$.fragment),di=h(),$r=r("span"),ci=a("WhisperModel"),dn=h(),D=r("div"),k(At.$$.fragment),li=h(),Nt=r("p"),hi=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qo=r("a"),pi=a("PreTrainedModel"),ui=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fi=h(),It=r("p"),mi=a("This model is also a PyTorch "),Lt=r("a"),_i=a("torch.nn.Module"),gi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vi=h(),H=r("div"),k(Dt.$$.fragment),bi=h(),pe=r("p"),ki=a("The "),Po=r("a"),wi=a("WhisperModel"),yi=a(" forward method, overrides the "),Wr=r("code"),Ti=a("__call__"),$i=a(" special method."),Wi=h(),k(Me.$$.fragment),xi=h(),k(je.$$.fragment),cn=h(),ue=r("h2"),Se=r("a"),xr=r("span"),k(Gt.$$.fragment),Fi=h(),Fr=r("span"),zi=a("WhisperForConditionalGeneration"),ln=h(),G=r("div"),k(Ot.$$.fragment),Ei=h(),Vt=r("p"),qi=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Co=r("a"),Pi=a("PreTrainedModel"),Ci=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi=h(),Rt=r("p"),ji=a("This model is also a PyTorch "),Ht=r("a"),Si=a("torch.nn.Module"),Ai=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ni=h(),U=r("div"),k(Ut.$$.fragment),Ii=h(),fe=r("p"),Li=a("The "),Mo=r("a"),Di=a("WhisperForConditionalGeneration"),Gi=a(" forward method, overrides the "),zr=r("code"),Oi=a("__call__"),Vi=a(" special method."),Ri=h(),k(Ae.$$.fragment),Hi=h(),k(Ne.$$.fragment),hn=h(),me=r("h2"),Ie=r("a"),Er=r("span"),k(Bt.$$.fragment),Ui=h(),qr=r("span"),Bi=a("TFWhisperModel"),pn=h(),O=r("div"),k(Kt.$$.fragment),Ki=h(),Jt=r("p"),Ji=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jo=r("a"),Zi=a("TFPreTrainedModel"),Qi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xi=h(),Zt=r("p"),Yi=a("This model is also a "),Qt=r("a"),ed=a("tf.keras.Model"),td=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od=h(),B=r("div"),k(Xt.$$.fragment),rd=h(),_e=r("p"),nd=a("The "),So=r("a"),sd=a("TFWhisperModel"),ad=a(" forward method, overrides the "),Pr=r("code"),id=a("__call__"),dd=a(" special method."),cd=h(),k(Le.$$.fragment),ld=h(),k(De.$$.fragment),un=h(),ge=r("h2"),Ge=r("a"),Cr=r("span"),k(Yt.$$.fragment),hd=h(),Mr=r("span"),pd=a("TFWhisperForConditionalGeneration"),fn=h(),V=r("div"),k(eo.$$.fragment),ud=h(),to=r("p"),fd=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Ao=r("a"),md=a("TFPreTrainedModel"),_d=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gd=h(),oo=r("p"),vd=a("This model is also a "),ro=r("a"),bd=a("tf.keras.Model"),kd=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wd=h(),K=r("div"),k(no.$$.fragment),yd=h(),ve=r("p"),Td=a("The "),No=r("a"),$d=a("TFWhisperForConditionalGeneration"),Wd=a(" forward method, overrides the "),jr=r("code"),xd=a("__call__"),Fd=a(" special method."),zd=h(),k(Oe.$$.fragment),Ed=h(),k(Ve.$$.fragment),this.h()},l(t){const f=dl('[data-svelte="svelte-1phssyn"]',document.head);l=n(f,"META",{name:!0,content:!0}),f.forEach(o),b=p(t),m=n(t,"H1",{class:!0});var so=s(m);_=n(so,"A",{id:!0,class:!0,href:!0});var Sr=s(_);v=n(Sr,"SPAN",{});var Ar=s(v);w(d.$$.fragment,Ar),Ar.forEach(o),Sr.forEach(o),u=p(so),x=n(so,"SPAN",{});var Nr=s(x);M=i(Nr,"Whisper"),Nr.forEach(o),so.forEach(o),z=p(t),j=n(t,"H2",{class:!0});var ao=s(j);A=n(ao,"A",{id:!0,class:!0,href:!0});var Ir=s(A);Qo=n(Ir,"SPAN",{});var Lr=s(Qo);w(tt.$$.fragment,Lr),Lr.forEach(o),Ir.forEach(o),Rn=p(ao),Xo=n(ao,"SPAN",{});var Dr=s(Xo);Hn=i(Dr,"Overview"),Dr.forEach(o),ao.forEach(o),Ur=p(t),be=n(t,"P",{});var io=s(be);Un=i(io,"The Whisper model was proposed in "),ot=n(io,"A",{href:!0,rel:!0});var Gr=s(ot);Bn=i(Gr,"Robust Speech Recognition via Large-Scale Weak Supervision"),Gr.forEach(o),Kn=i(io," by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),io.forEach(o),Br=p(t),co=n(t,"P",{});var Or=s(co);Jn=i(Or,"The abstract from the paper is the following:"),Or.forEach(o),Kr=p(t),lo=n(t,"P",{});var jd=s(lo);Yo=n(jd,"EM",{});var Sd=s(Yo);Zn=i(Sd,"We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Sd.forEach(o),jd.forEach(o),Jr=p(t),ho=n(t,"P",{});var Ad=s(ho);Qn=i(Ad,"Tips:"),Ad.forEach(o),Zr=p(t),Q=n(t,"UL",{});var Io=s(Q);er=n(Io,"LI",{});var Nd=s(er);Xn=i(Nd,"The model usually performs well without requiring any finetuning."),Nd.forEach(o),Yn=p(Io),rt=n(Io,"LI",{});var _n=s(rt);es=i(_n,"The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),po=n(_n,"A",{href:!0});var Id=s(po);ts=i(Id,"generate()"),Id.forEach(o),os=i(_n," function for inference."),_n.forEach(o),rs=p(Io),nt=n(Io,"LI",{});var gn=s(nt);ns=i(gn,"One can use "),uo=n(gn,"A",{href:!0});var Ld=s(uo);ss=i(Ld,"WhisperProcessor"),Ld.forEach(o),as=i(gn," to prepare audio for the model, and decode the predicted ID\u2019s back into text."),gn.forEach(o),Io.forEach(o),Qr=p(t),R=n(t,"P",{});var Re=s(R);is=i(Re,"This model was contributed by "),st=n(Re,"A",{href:!0,rel:!0});var Dd=s(st);ds=i(Dd,"Arthur Zucker"),Dd.forEach(o),cs=i(Re,". The Tensorflow version of this model was contributed by "),at=n(Re,"A",{href:!0,rel:!0});var Gd=s(at);ls=i(Gd,"amyeroberts"),Gd.forEach(o),hs=i(Re,`.
The original code can be found `),it=n(Re,"A",{href:!0,rel:!0});var Od=s(it);ps=i(Od,"here"),Od.forEach(o),us=i(Re,"."),Re.forEach(o),Xr=p(t),re=n(t,"H2",{class:!0});var vn=s(re);ke=n(vn,"A",{id:!0,class:!0,href:!0});var Vd=s(ke);tr=n(Vd,"SPAN",{});var Rd=s(tr);w(dt.$$.fragment,Rd),Rd.forEach(o),Vd.forEach(o),fs=p(vn),or=n(vn,"SPAN",{});var Hd=s(or);ms=i(Hd,"WhisperConfig"),Hd.forEach(o),vn.forEach(o),Yr=p(t),L=n(t,"DIV",{class:!0});var He=s(L);w(ct.$$.fragment,He),_s=p(He),ne=n(He,"P",{});var Lo=s(ne);gs=i(Lo,"This is the configuration class to store the configuration of a "),fo=n(Lo,"A",{href:!0});var Ud=s(fo);vs=i(Ud,"WhisperModel"),Ud.forEach(o),bs=i(Lo,`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),lt=n(Lo,"A",{href:!0,rel:!0});var Bd=s(lt);ks=i(Bd,"openai/whisper-tiny"),Bd.forEach(o),ws=i(Lo," architecture."),Lo.forEach(o),ys=p(He),se=n(He,"P",{});var Do=s(se);Ts=i(Do,"Configuration objects inherit from "),mo=n(Do,"A",{href:!0});var Kd=s(mo);$s=i(Kd,"PretrainedConfig"),Kd.forEach(o),Ws=i(Do,` and can be used to control the model outputs. Read the
documentation from `),_o=n(Do,"A",{href:!0});var Jd=s(_o);xs=i(Jd,"PretrainedConfig"),Jd.forEach(o),Fs=i(Do," for more information."),Do.forEach(o),zs=p(He),w(we.$$.fragment,He),He.forEach(o),en=p(t),ae=n(t,"H2",{class:!0});var bn=s(ae);ye=n(bn,"A",{id:!0,class:!0,href:!0});var Zd=s(ye);rr=n(Zd,"SPAN",{});var Qd=s(rr);w(ht.$$.fragment,Qd),Qd.forEach(o),Zd.forEach(o),Es=p(bn),nr=n(bn,"SPAN",{});var Xd=s(nr);qs=i(Xd,"WhisperTokenizer"),Xd.forEach(o),bn.forEach(o),tn=p(t),P=n(t,"DIV",{class:!0});var I=s(P);w(pt.$$.fragment,I),Ps=p(I),sr=n(I,"P",{});var Yd=s(sr);Cs=i(Yd,"Construct an Whisper tokenizer."),Yd.forEach(o),Ms=p(I),ut=n(I,"P",{});var kn=s(ut);js=i(kn,"This tokenizer inherits from "),go=n(kn,"A",{href:!0});var ec=s(go);Ss=i(ec,"PreTrainedTokenizer"),ec.forEach(o),As=i(kn,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),kn.forEach(o),Ns=p(I),vo=n(I,"DIV",{class:!0});var tc=s(vo);w(ft.$$.fragment,tc),tc.forEach(o),Is=p(I),Te=n(I,"DIV",{class:!0});var wn=s(Te);w(mt.$$.fragment,wn),Ls=p(wn),ie=n(wn,"P",{});var Go=s(ie);Ds=i(Go,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ar=n(Go,"CODE",{});var oc=s(ar);Gs=i(oc,"prepare_for_model"),oc.forEach(o),Os=i(Go," or "),ir=n(Go,"CODE",{});var rc=s(ir);Vs=i(rc,"encode_plus"),rc.forEach(o),Rs=i(Go," methods."),Go.forEach(o),wn.forEach(o),Hs=p(I),X=n(I,"DIV",{class:!0});var Oo=s(X);w(_t.$$.fragment,Oo),Us=p(Oo),bo=n(Oo,"P",{});var qd=s(bo);Bs=i(qd,"Create the token type IDs corresponding to the sequences passed. "),ko=n(qd,"A",{href:!0});var nc=s(ko);Ks=i(nc,`What are token type
IDs?`),nc.forEach(o),qd.forEach(o),Js=p(Oo),dr=n(Oo,"P",{});var sc=s(dr);Zs=i(sc,"Should be overridden in a subclass if the model has a special way of building those."),sc.forEach(o),Oo.forEach(o),Qs=p(I),wo=n(I,"DIV",{class:!0});var ac=s(wo);w(gt.$$.fragment,ac),ac.forEach(o),I.forEach(o),on=p(t),de=n(t,"H2",{class:!0});var yn=s(de);$e=n(yn,"A",{id:!0,class:!0,href:!0});var ic=s($e);cr=n(ic,"SPAN",{});var dc=s(cr);w(vt.$$.fragment,dc),dc.forEach(o),ic.forEach(o),Xs=p(yn),lr=n(yn,"SPAN",{});var cc=s(lr);Ys=i(cc,"WhisperFeatureExtractor"),cc.forEach(o),yn.forEach(o),rn=p(t),S=n(t,"DIV",{class:!0});var te=s(S);w(bt.$$.fragment,te),ea=p(te),hr=n(te,"P",{});var lc=s(hr);ta=i(lc,"Constructs a Whisper feature extractor."),lc.forEach(o),oa=p(te),kt=n(te,"P",{});var Tn=s(kt);ra=i(Tn,"This feature extractor inherits from "),yo=n(Tn,"A",{href:!0});var hc=s(yo);na=i(hc,"WhisperFeatureExtractor"),hc.forEach(o),sa=i(Tn,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Tn.forEach(o),aa=p(te),ce=n(te,"P",{});var Vo=s(ce);ia=i(Vo,"This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),pr=n(Vo,"CODE",{});var pc=s(pr);da=i(pc,"Short Time Fourier Transform"),pc.forEach(o),ca=i(Vo," which should match pytorch\u2019s "),ur=n(Vo,"CODE",{});var uc=s(ur);la=i(uc,"torch.stft"),uc.forEach(o),ha=i(Vo," equivalent."),Vo.forEach(o),pa=p(te),We=n(te,"DIV",{class:!0});var $n=s(We);w(wt.$$.fragment,$n),ua=p($n),fr=n($n,"P",{});var fc=s(fr);fa=i(fc,"Main method to featurize and prepare for the model one or several sequence(s)."),fc.forEach(o),$n.forEach(o),te.forEach(o),nn=p(t),le=n(t,"H2",{class:!0});var Wn=s(le);xe=n(Wn,"A",{id:!0,class:!0,href:!0});var mc=s(xe);mr=n(mc,"SPAN",{});var _c=s(mr);w(yt.$$.fragment,_c),_c.forEach(o),mc.forEach(o),ma=p(Wn),_r=n(Wn,"SPAN",{});var gc=s(_r);_a=i(gc,"WhisperProcessor"),gc.forEach(o),Wn.forEach(o),sn=p(t),q=n(t,"DIV",{class:!0});var C=s(q);w(Tt.$$.fragment,C),ga=p(C),gr=n(C,"P",{});var vc=s(gr);va=i(vc,`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),vc.forEach(o),ba=p(C),N=n(C,"P",{});var Z=s(N);To=n(Z,"A",{href:!0});var bc=s(To);ka=i(bc,"WhisperProcessor"),bc.forEach(o),wa=i(Z," offers all the functionalities of "),$o=n(Z,"A",{href:!0});var kc=s($o);ya=i(kc,"WhisperFeatureExtractor"),kc.forEach(o),Ta=i(Z," and "),Wo=n(Z,"A",{href:!0});var wc=s(Wo);$a=i(wc,"WhisperTokenizer"),wc.forEach(o),Wa=i(Z,`. See
the `),$t=n(Z,"A",{href:!0});var Pd=s($t);vr=n(Pd,"STRONG",{});var yc=s(vr);xa=i(yc,"call"),yc.forEach(o),Fa=i(Pd,"()"),Pd.forEach(o),za=i(Z," and "),xo=n(Z,"A",{href:!0});var Tc=s(xo);Ea=i(Tc,"decode()"),Tc.forEach(o),qa=i(Z," for more information."),Z.forEach(o),Pa=p(C),Fe=n(C,"DIV",{class:!0});var xn=s(Fe);w(Wt.$$.fragment,xn),Ca=p(xn),J=n(xn,"P",{});var Ue=s(J);Ma=i(Ue,`When used in normal mode, this method forwards all its arguments to WhisperFeatureExtractor\u2019s
`),xt=n(Ue,"A",{href:!0});var Cd=s(xt);br=n(Cd,"STRONG",{});var $c=s(br);ja=i($c,"call"),$c.forEach(o),Sa=i(Cd,"()"),Cd.forEach(o),Aa=i(Ue,` and returns its output. If used in the context
`),kr=n(Ue,"CODE",{});var Wc=s(kr);Na=i(Wc,"~WhisperProcessor.as_target_processor"),Wc.forEach(o),Ia=i(Ue,` this method forwards all its arguments to WhisperTokenizer\u2019s
`),Ft=n(Ue,"A",{href:!0});var Md=s(Ft);wr=n(Md,"STRONG",{});var xc=s(wr);La=i(xc,"call"),xc.forEach(o),Da=i(Md,"()"),Md.forEach(o),Ga=i(Ue,". Please refer to the doctsring of the above two methods for more information."),Ue.forEach(o),xn.forEach(o),Oa=p(C),Y=n(C,"DIV",{class:!0});var Ro=s(Y);w(zt.$$.fragment,Ro),Va=p(Ro),yr=n(Ro,"P",{});var Fc=s(yr);Ra=i(Fc,"Instantiate a processor associated with a pretrained model."),Fc.forEach(o),Ha=p(Ro),w(ze.$$.fragment,Ro),Ro.forEach(o),Ua=p(C),ee=n(C,"DIV",{class:!0});var Ho=s(ee);w(Et.$$.fragment,Ho),Ba=p(Ho),qt=n(Ho,"P",{});var Fn=s(qt);Ka=i(Fn,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Fo=n(Fn,"A",{href:!0});var zc=s(Fo);Ja=i(zc,"from_pretrained()"),zc.forEach(o),Za=i(Fn," method."),Fn.forEach(o),Qa=p(Ho),w(Ee.$$.fragment,Ho),Ho.forEach(o),Xa=p(C),qe=n(C,"DIV",{class:!0});var zn=s(qe);w(Pt.$$.fragment,zn),Ya=p(zn),Ct=n(zn,"P",{});var En=s(Ct);ei=i(En,"This method forwards all its arguments to WhisperTokenizer\u2019s "),zo=n(En,"A",{href:!0});var Ec=s(zo);ti=i(Ec,"batch_decode()"),Ec.forEach(o),oi=i(En,`. Please
refer to the docstring of this method for more information.`),En.forEach(o),zn.forEach(o),ri=p(C),Pe=n(C,"DIV",{class:!0});var qn=s(Pe);w(Mt.$$.fragment,qn),ni=p(qn),jt=n(qn,"P",{});var Pn=s(jt);si=i(Pn,"This method forwards all its arguments to WhisperTokenizer\u2019s "),Eo=n(Pn,"A",{href:!0});var qc=s(Eo);ai=i(qc,"decode()"),qc.forEach(o),ii=i(Pn,`. Please refer to
the docstring of this method for more information.`),Pn.forEach(o),qn.forEach(o),C.forEach(o),an=p(t),he=n(t,"H2",{class:!0});var Cn=s(he);Ce=n(Cn,"A",{id:!0,class:!0,href:!0});var Pc=s(Ce);Tr=n(Pc,"SPAN",{});var Cc=s(Tr);w(St.$$.fragment,Cc),Cc.forEach(o),Pc.forEach(o),di=p(Cn),$r=n(Cn,"SPAN",{});var Mc=s($r);ci=i(Mc,"WhisperModel"),Mc.forEach(o),Cn.forEach(o),dn=p(t),D=n(t,"DIV",{class:!0});var Be=s(D);w(At.$$.fragment,Be),li=p(Be),Nt=n(Be,"P",{});var Mn=s(Nt);hi=i(Mn,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),qo=n(Mn,"A",{href:!0});var jc=s(qo);pi=i(jc,"PreTrainedModel"),jc.forEach(o),ui=i(Mn,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mn.forEach(o),fi=p(Be),It=n(Be,"P",{});var jn=s(It);mi=i(jn,"This model is also a PyTorch "),Lt=n(jn,"A",{href:!0,rel:!0});var Sc=s(Lt);_i=i(Sc,"torch.nn.Module"),Sc.forEach(o),gi=i(jn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jn.forEach(o),vi=p(Be),H=n(Be,"DIV",{class:!0});var Ke=s(H);w(Dt.$$.fragment,Ke),bi=p(Ke),pe=n(Ke,"P",{});var Uo=s(pe);ki=i(Uo,"The "),Po=n(Uo,"A",{href:!0});var Ac=s(Po);wi=i(Ac,"WhisperModel"),Ac.forEach(o),yi=i(Uo," forward method, overrides the "),Wr=n(Uo,"CODE",{});var Nc=s(Wr);Ti=i(Nc,"__call__"),Nc.forEach(o),$i=i(Uo," special method."),Uo.forEach(o),Wi=p(Ke),w(Me.$$.fragment,Ke),xi=p(Ke),w(je.$$.fragment,Ke),Ke.forEach(o),Be.forEach(o),cn=p(t),ue=n(t,"H2",{class:!0});var Sn=s(ue);Se=n(Sn,"A",{id:!0,class:!0,href:!0});var Ic=s(Se);xr=n(Ic,"SPAN",{});var Lc=s(xr);w(Gt.$$.fragment,Lc),Lc.forEach(o),Ic.forEach(o),Fi=p(Sn),Fr=n(Sn,"SPAN",{});var Dc=s(Fr);zi=i(Dc,"WhisperForConditionalGeneration"),Dc.forEach(o),Sn.forEach(o),ln=p(t),G=n(t,"DIV",{class:!0});var Je=s(G);w(Ot.$$.fragment,Je),Ei=p(Je),Vt=n(Je,"P",{});var An=s(Vt);qi=i(An,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Co=n(An,"A",{href:!0});var Gc=s(Co);Pi=i(Gc,"PreTrainedModel"),Gc.forEach(o),Ci=i(An,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),An.forEach(o),Mi=p(Je),Rt=n(Je,"P",{});var Nn=s(Rt);ji=i(Nn,"This model is also a PyTorch "),Ht=n(Nn,"A",{href:!0,rel:!0});var Oc=s(Ht);Si=i(Oc,"torch.nn.Module"),Oc.forEach(o),Ai=i(Nn,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nn.forEach(o),Ni=p(Je),U=n(Je,"DIV",{class:!0});var Ze=s(U);w(Ut.$$.fragment,Ze),Ii=p(Ze),fe=n(Ze,"P",{});var Bo=s(fe);Li=i(Bo,"The "),Mo=n(Bo,"A",{href:!0});var Vc=s(Mo);Di=i(Vc,"WhisperForConditionalGeneration"),Vc.forEach(o),Gi=i(Bo," forward method, overrides the "),zr=n(Bo,"CODE",{});var Rc=s(zr);Oi=i(Rc,"__call__"),Rc.forEach(o),Vi=i(Bo," special method."),Bo.forEach(o),Ri=p(Ze),w(Ae.$$.fragment,Ze),Hi=p(Ze),w(Ne.$$.fragment,Ze),Ze.forEach(o),Je.forEach(o),hn=p(t),me=n(t,"H2",{class:!0});var In=s(me);Ie=n(In,"A",{id:!0,class:!0,href:!0});var Hc=s(Ie);Er=n(Hc,"SPAN",{});var Uc=s(Er);w(Bt.$$.fragment,Uc),Uc.forEach(o),Hc.forEach(o),Ui=p(In),qr=n(In,"SPAN",{});var Bc=s(qr);Bi=i(Bc,"TFWhisperModel"),Bc.forEach(o),In.forEach(o),pn=p(t),O=n(t,"DIV",{class:!0});var Qe=s(O);w(Kt.$$.fragment,Qe),Ki=p(Qe),Jt=n(Qe,"P",{});var Ln=s(Jt);Ji=i(Ln,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jo=n(Ln,"A",{href:!0});var Kc=s(jo);Zi=i(Kc,"TFPreTrainedModel"),Kc.forEach(o),Qi=i(Ln,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ln.forEach(o),Xi=p(Qe),Zt=n(Qe,"P",{});var Dn=s(Zt);Yi=i(Dn,"This model is also a "),Qt=n(Dn,"A",{href:!0,rel:!0});var Jc=s(Qt);ed=i(Jc,"tf.keras.Model"),Jc.forEach(o),td=i(Dn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dn.forEach(o),od=p(Qe),B=n(Qe,"DIV",{class:!0});var Xe=s(B);w(Xt.$$.fragment,Xe),rd=p(Xe),_e=n(Xe,"P",{});var Ko=s(_e);nd=i(Ko,"The "),So=n(Ko,"A",{href:!0});var Zc=s(So);sd=i(Zc,"TFWhisperModel"),Zc.forEach(o),ad=i(Ko," forward method, overrides the "),Pr=n(Ko,"CODE",{});var Qc=s(Pr);id=i(Qc,"__call__"),Qc.forEach(o),dd=i(Ko," special method."),Ko.forEach(o),cd=p(Xe),w(Le.$$.fragment,Xe),ld=p(Xe),w(De.$$.fragment,Xe),Xe.forEach(o),Qe.forEach(o),un=p(t),ge=n(t,"H2",{class:!0});var Gn=s(ge);Ge=n(Gn,"A",{id:!0,class:!0,href:!0});var Xc=s(Ge);Cr=n(Xc,"SPAN",{});var Yc=s(Cr);w(Yt.$$.fragment,Yc),Yc.forEach(o),Xc.forEach(o),hd=p(Gn),Mr=n(Gn,"SPAN",{});var el=s(Mr);pd=i(el,"TFWhisperForConditionalGeneration"),el.forEach(o),Gn.forEach(o),fn=p(t),V=n(t,"DIV",{class:!0});var Ye=s(V);w(eo.$$.fragment,Ye),ud=p(Ye),to=n(Ye,"P",{});var On=s(to);fd=i(On,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Ao=n(On,"A",{href:!0});var tl=s(Ao);md=i(tl,"TFPreTrainedModel"),tl.forEach(o),_d=i(On,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),On.forEach(o),gd=p(Ye),oo=n(Ye,"P",{});var Vn=s(oo);vd=i(Vn,"This model is also a "),ro=n(Vn,"A",{href:!0,rel:!0});var ol=s(ro);bd=i(ol,"tf.keras.Model"),ol.forEach(o),kd=i(Vn,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vn.forEach(o),wd=p(Ye),K=n(Ye,"DIV",{class:!0});var et=s(K);w(no.$$.fragment,et),yd=p(et),ve=n(et,"P",{});var Jo=s(ve);Td=i(Jo,"The "),No=n(Jo,"A",{href:!0});var rl=s(No);$d=i(rl,"TFWhisperForConditionalGeneration"),rl.forEach(o),Wd=i(Jo," forward method, overrides the "),jr=n(Jo,"CODE",{});var nl=s(jr);xd=i(nl,"__call__"),nl.forEach(o),Fd=i(Jo," special method."),Jo.forEach(o),zd=p(et),w(Oe.$$.fragment,et),Ed=p(et),w(Ve.$$.fragment,et),et.forEach(o),Ye.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(yl)),c(_,"id","whisper"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#whisper"),c(m,"class","relative group"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(j,"class","relative group"),c(ot,"href","https://cdn.openai.com/papers/whisper.pdf"),c(ot,"rel","nofollow"),c(po,"href","/docs/transformers/v4.23.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(uo,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperProcessor"),c(st,"href","https://huggingface.co/ArthurZ"),c(st,"rel","nofollow"),c(at,"href","https://huggingface.co/amyeroberts"),c(at,"rel","nofollow"),c(it,"href","https://github.com/openai/whisper"),c(it,"rel","nofollow"),c(ke,"id","transformers.WhisperConfig"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.WhisperConfig"),c(re,"class","relative group"),c(fo,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperModel"),c(lt,"href","https://huggingface.co/openai/whisper-tiny"),c(lt,"rel","nofollow"),c(mo,"href","/docs/transformers/v4.23.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(_o,"href","/docs/transformers/v4.23.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ye,"id","transformers.WhisperTokenizer"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.WhisperTokenizer"),c(ae,"class","relative group"),c(go,"href","/docs/transformers/v4.23.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ko,"href","../glossary#token-type-ids"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"id","transformers.WhisperFeatureExtractor"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#transformers.WhisperFeatureExtractor"),c(de,"class","relative group"),c(yo,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.WhisperProcessor"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.WhisperProcessor"),c(le,"class","relative group"),c(To,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperProcessor"),c($o,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(Wo,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperTokenizer"),c($t,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperProcessor.__call__"),c(xo,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperProcessor.decode"),c(xt,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"),c(Ft,"href","/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fo,"href","/docs/transformers/v4.23.0/en/model_doc/trocr#transformers.TrOCRProcessor.from_pretrained"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zo,"href","/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Eo,"href","/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"id","transformers.WhisperModel"),c(Ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ce,"href","#transformers.WhisperModel"),c(he,"class","relative group"),c(qo,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),c(Lt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lt,"rel","nofollow"),c(Po,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperModel"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"id","transformers.WhisperForConditionalGeneration"),c(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Se,"href","#transformers.WhisperForConditionalGeneration"),c(ue,"class","relative group"),c(Co,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),c(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ht,"rel","nofollow"),c(Mo,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.WhisperForConditionalGeneration"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.TFWhisperModel"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.TFWhisperModel"),c(me,"class","relative group"),c(jo,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Qt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Qt,"rel","nofollow"),c(So,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.TFWhisperModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.TFWhisperForConditionalGeneration"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.TFWhisperForConditionalGeneration"),c(ge,"class","relative group"),c(Ao,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ro,"rel","nofollow"),c(No,"href","/docs/transformers/v4.23.0/en/model_doc/whisper#transformers.TFWhisperForConditionalGeneration"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,l),g(t,b,f),g(t,m,f),e(m,_),e(_,v),y(d,v,null),e(m,u),e(m,x),e(x,M),g(t,z,f),g(t,j,f),e(j,A),e(A,Qo),y(tt,Qo,null),e(j,Rn),e(j,Xo),e(Xo,Hn),g(t,Ur,f),g(t,be,f),e(be,Un),e(be,ot),e(ot,Bn),e(be,Kn),g(t,Br,f),g(t,co,f),e(co,Jn),g(t,Kr,f),g(t,lo,f),e(lo,Yo),e(Yo,Zn),g(t,Jr,f),g(t,ho,f),e(ho,Qn),g(t,Zr,f),g(t,Q,f),e(Q,er),e(er,Xn),e(Q,Yn),e(Q,rt),e(rt,es),e(rt,po),e(po,ts),e(rt,os),e(Q,rs),e(Q,nt),e(nt,ns),e(nt,uo),e(uo,ss),e(nt,as),g(t,Qr,f),g(t,R,f),e(R,is),e(R,st),e(st,ds),e(R,cs),e(R,at),e(at,ls),e(R,hs),e(R,it),e(it,ps),e(R,us),g(t,Xr,f),g(t,re,f),e(re,ke),e(ke,tr),y(dt,tr,null),e(re,fs),e(re,or),e(or,ms),g(t,Yr,f),g(t,L,f),y(ct,L,null),e(L,_s),e(L,ne),e(ne,gs),e(ne,fo),e(fo,vs),e(ne,bs),e(ne,lt),e(lt,ks),e(ne,ws),e(L,ys),e(L,se),e(se,Ts),e(se,mo),e(mo,$s),e(se,Ws),e(se,_o),e(_o,xs),e(se,Fs),e(L,zs),y(we,L,null),g(t,en,f),g(t,ae,f),e(ae,ye),e(ye,rr),y(ht,rr,null),e(ae,Es),e(ae,nr),e(nr,qs),g(t,tn,f),g(t,P,f),y(pt,P,null),e(P,Ps),e(P,sr),e(sr,Cs),e(P,Ms),e(P,ut),e(ut,js),e(ut,go),e(go,Ss),e(ut,As),e(P,Ns),e(P,vo),y(ft,vo,null),e(P,Is),e(P,Te),y(mt,Te,null),e(Te,Ls),e(Te,ie),e(ie,Ds),e(ie,ar),e(ar,Gs),e(ie,Os),e(ie,ir),e(ir,Vs),e(ie,Rs),e(P,Hs),e(P,X),y(_t,X,null),e(X,Us),e(X,bo),e(bo,Bs),e(bo,ko),e(ko,Ks),e(X,Js),e(X,dr),e(dr,Zs),e(P,Qs),e(P,wo),y(gt,wo,null),g(t,on,f),g(t,de,f),e(de,$e),e($e,cr),y(vt,cr,null),e(de,Xs),e(de,lr),e(lr,Ys),g(t,rn,f),g(t,S,f),y(bt,S,null),e(S,ea),e(S,hr),e(hr,ta),e(S,oa),e(S,kt),e(kt,ra),e(kt,yo),e(yo,na),e(kt,sa),e(S,aa),e(S,ce),e(ce,ia),e(ce,pr),e(pr,da),e(ce,ca),e(ce,ur),e(ur,la),e(ce,ha),e(S,pa),e(S,We),y(wt,We,null),e(We,ua),e(We,fr),e(fr,fa),g(t,nn,f),g(t,le,f),e(le,xe),e(xe,mr),y(yt,mr,null),e(le,ma),e(le,_r),e(_r,_a),g(t,sn,f),g(t,q,f),y(Tt,q,null),e(q,ga),e(q,gr),e(gr,va),e(q,ba),e(q,N),e(N,To),e(To,ka),e(N,wa),e(N,$o),e($o,ya),e(N,Ta),e(N,Wo),e(Wo,$a),e(N,Wa),e(N,$t),e($t,vr),e(vr,xa),e($t,Fa),e(N,za),e(N,xo),e(xo,Ea),e(N,qa),e(q,Pa),e(q,Fe),y(Wt,Fe,null),e(Fe,Ca),e(Fe,J),e(J,Ma),e(J,xt),e(xt,br),e(br,ja),e(xt,Sa),e(J,Aa),e(J,kr),e(kr,Na),e(J,Ia),e(J,Ft),e(Ft,wr),e(wr,La),e(Ft,Da),e(J,Ga),e(q,Oa),e(q,Y),y(zt,Y,null),e(Y,Va),e(Y,yr),e(yr,Ra),e(Y,Ha),y(ze,Y,null),e(q,Ua),e(q,ee),y(Et,ee,null),e(ee,Ba),e(ee,qt),e(qt,Ka),e(qt,Fo),e(Fo,Ja),e(qt,Za),e(ee,Qa),y(Ee,ee,null),e(q,Xa),e(q,qe),y(Pt,qe,null),e(qe,Ya),e(qe,Ct),e(Ct,ei),e(Ct,zo),e(zo,ti),e(Ct,oi),e(q,ri),e(q,Pe),y(Mt,Pe,null),e(Pe,ni),e(Pe,jt),e(jt,si),e(jt,Eo),e(Eo,ai),e(jt,ii),g(t,an,f),g(t,he,f),e(he,Ce),e(Ce,Tr),y(St,Tr,null),e(he,di),e(he,$r),e($r,ci),g(t,dn,f),g(t,D,f),y(At,D,null),e(D,li),e(D,Nt),e(Nt,hi),e(Nt,qo),e(qo,pi),e(Nt,ui),e(D,fi),e(D,It),e(It,mi),e(It,Lt),e(Lt,_i),e(It,gi),e(D,vi),e(D,H),y(Dt,H,null),e(H,bi),e(H,pe),e(pe,ki),e(pe,Po),e(Po,wi),e(pe,yi),e(pe,Wr),e(Wr,Ti),e(pe,$i),e(H,Wi),y(Me,H,null),e(H,xi),y(je,H,null),g(t,cn,f),g(t,ue,f),e(ue,Se),e(Se,xr),y(Gt,xr,null),e(ue,Fi),e(ue,Fr),e(Fr,zi),g(t,ln,f),g(t,G,f),y(Ot,G,null),e(G,Ei),e(G,Vt),e(Vt,qi),e(Vt,Co),e(Co,Pi),e(Vt,Ci),e(G,Mi),e(G,Rt),e(Rt,ji),e(Rt,Ht),e(Ht,Si),e(Rt,Ai),e(G,Ni),e(G,U),y(Ut,U,null),e(U,Ii),e(U,fe),e(fe,Li),e(fe,Mo),e(Mo,Di),e(fe,Gi),e(fe,zr),e(zr,Oi),e(fe,Vi),e(U,Ri),y(Ae,U,null),e(U,Hi),y(Ne,U,null),g(t,hn,f),g(t,me,f),e(me,Ie),e(Ie,Er),y(Bt,Er,null),e(me,Ui),e(me,qr),e(qr,Bi),g(t,pn,f),g(t,O,f),y(Kt,O,null),e(O,Ki),e(O,Jt),e(Jt,Ji),e(Jt,jo),e(jo,Zi),e(Jt,Qi),e(O,Xi),e(O,Zt),e(Zt,Yi),e(Zt,Qt),e(Qt,ed),e(Zt,td),e(O,od),e(O,B),y(Xt,B,null),e(B,rd),e(B,_e),e(_e,nd),e(_e,So),e(So,sd),e(_e,ad),e(_e,Pr),e(Pr,id),e(_e,dd),e(B,cd),y(Le,B,null),e(B,ld),y(De,B,null),g(t,un,f),g(t,ge,f),e(ge,Ge),e(Ge,Cr),y(Yt,Cr,null),e(ge,hd),e(ge,Mr),e(Mr,pd),g(t,fn,f),g(t,V,f),y(eo,V,null),e(V,ud),e(V,to),e(to,fd),e(to,Ao),e(Ao,md),e(to,_d),e(V,gd),e(V,oo),e(oo,vd),e(oo,ro),e(ro,bd),e(oo,kd),e(V,wd),e(V,K),y(no,K,null),e(K,yd),e(K,ve),e(ve,Td),e(ve,No),e(No,$d),e(ve,Wd),e(ve,jr),e(jr,xd),e(ve,Fd),e(K,zd),y(Oe,K,null),e(K,Ed),y(Ve,K,null),mn=!0},p(t,[f]){const so={};f&2&&(so.$$scope={dirty:f,ctx:t}),we.$set(so);const Sr={};f&2&&(Sr.$$scope={dirty:f,ctx:t}),ze.$set(Sr);const Ar={};f&2&&(Ar.$$scope={dirty:f,ctx:t}),Ee.$set(Ar);const Nr={};f&2&&(Nr.$$scope={dirty:f,ctx:t}),Me.$set(Nr);const ao={};f&2&&(ao.$$scope={dirty:f,ctx:t}),je.$set(ao);const Ir={};f&2&&(Ir.$$scope={dirty:f,ctx:t}),Ae.$set(Ir);const Lr={};f&2&&(Lr.$$scope={dirty:f,ctx:t}),Ne.$set(Lr);const Dr={};f&2&&(Dr.$$scope={dirty:f,ctx:t}),Le.$set(Dr);const io={};f&2&&(io.$$scope={dirty:f,ctx:t}),De.$set(io);const Gr={};f&2&&(Gr.$$scope={dirty:f,ctx:t}),Oe.$set(Gr);const Or={};f&2&&(Or.$$scope={dirty:f,ctx:t}),Ve.$set(Or)},i(t){mn||(T(d.$$.fragment,t),T(tt.$$.fragment,t),T(dt.$$.fragment,t),T(ct.$$.fragment,t),T(we.$$.fragment,t),T(ht.$$.fragment,t),T(pt.$$.fragment,t),T(ft.$$.fragment,t),T(mt.$$.fragment,t),T(_t.$$.fragment,t),T(gt.$$.fragment,t),T(vt.$$.fragment,t),T(bt.$$.fragment,t),T(wt.$$.fragment,t),T(yt.$$.fragment,t),T(Tt.$$.fragment,t),T(Wt.$$.fragment,t),T(zt.$$.fragment,t),T(ze.$$.fragment,t),T(Et.$$.fragment,t),T(Ee.$$.fragment,t),T(Pt.$$.fragment,t),T(Mt.$$.fragment,t),T(St.$$.fragment,t),T(At.$$.fragment,t),T(Dt.$$.fragment,t),T(Me.$$.fragment,t),T(je.$$.fragment,t),T(Gt.$$.fragment,t),T(Ot.$$.fragment,t),T(Ut.$$.fragment,t),T(Ae.$$.fragment,t),T(Ne.$$.fragment,t),T(Bt.$$.fragment,t),T(Kt.$$.fragment,t),T(Xt.$$.fragment,t),T(Le.$$.fragment,t),T(De.$$.fragment,t),T(Yt.$$.fragment,t),T(eo.$$.fragment,t),T(no.$$.fragment,t),T(Oe.$$.fragment,t),T(Ve.$$.fragment,t),mn=!0)},o(t){$(d.$$.fragment,t),$(tt.$$.fragment,t),$(dt.$$.fragment,t),$(ct.$$.fragment,t),$(we.$$.fragment,t),$(ht.$$.fragment,t),$(pt.$$.fragment,t),$(ft.$$.fragment,t),$(mt.$$.fragment,t),$(_t.$$.fragment,t),$(gt.$$.fragment,t),$(vt.$$.fragment,t),$(bt.$$.fragment,t),$(wt.$$.fragment,t),$(yt.$$.fragment,t),$(Tt.$$.fragment,t),$(Wt.$$.fragment,t),$(zt.$$.fragment,t),$(ze.$$.fragment,t),$(Et.$$.fragment,t),$(Ee.$$.fragment,t),$(Pt.$$.fragment,t),$(Mt.$$.fragment,t),$(St.$$.fragment,t),$(At.$$.fragment,t),$(Dt.$$.fragment,t),$(Me.$$.fragment,t),$(je.$$.fragment,t),$(Gt.$$.fragment,t),$(Ot.$$.fragment,t),$(Ut.$$.fragment,t),$(Ae.$$.fragment,t),$(Ne.$$.fragment,t),$(Bt.$$.fragment,t),$(Kt.$$.fragment,t),$(Xt.$$.fragment,t),$(Le.$$.fragment,t),$(De.$$.fragment,t),$(Yt.$$.fragment,t),$(eo.$$.fragment,t),$(no.$$.fragment,t),$(Oe.$$.fragment,t),$(Ve.$$.fragment,t),mn=!1},d(t){o(l),t&&o(b),t&&o(m),W(d),t&&o(z),t&&o(j),W(tt),t&&o(Ur),t&&o(be),t&&o(Br),t&&o(co),t&&o(Kr),t&&o(lo),t&&o(Jr),t&&o(ho),t&&o(Zr),t&&o(Q),t&&o(Qr),t&&o(R),t&&o(Xr),t&&o(re),W(dt),t&&o(Yr),t&&o(L),W(ct),W(we),t&&o(en),t&&o(ae),W(ht),t&&o(tn),t&&o(P),W(pt),W(ft),W(mt),W(_t),W(gt),t&&o(on),t&&o(de),W(vt),t&&o(rn),t&&o(S),W(bt),W(wt),t&&o(nn),t&&o(le),W(yt),t&&o(sn),t&&o(q),W(Tt),W(Wt),W(zt),W(ze),W(Et),W(Ee),W(Pt),W(Mt),t&&o(an),t&&o(he),W(St),t&&o(dn),t&&o(D),W(At),W(Dt),W(Me),W(je),t&&o(cn),t&&o(ue),W(Gt),t&&o(ln),t&&o(G),W(Ot),W(Ut),W(Ae),W(Ne),t&&o(hn),t&&o(me),W(Bt),t&&o(pn),t&&o(O),W(Kt),W(Xt),W(Le),W(De),t&&o(un),t&&o(ge),W(Yt),t&&o(fn),t&&o(V),W(eo),W(no),W(Oe),W(Ve)}}}const yl={local:"whisper",sections:[{local:"overview",title:"Overview"},{local:"transformers.WhisperConfig",title:"WhisperConfig"},{local:"transformers.WhisperTokenizer",title:"WhisperTokenizer"},{local:"transformers.WhisperFeatureExtractor",title:"WhisperFeatureExtractor"},{local:"transformers.WhisperProcessor",title:"WhisperProcessor"},{local:"transformers.WhisperModel",title:"WhisperModel"},{local:"transformers.WhisperForConditionalGeneration",title:"WhisperForConditionalGeneration"},{local:"transformers.TFWhisperModel",title:"TFWhisperModel"},{local:"transformers.TFWhisperForConditionalGeneration",title:"TFWhisperForConditionalGeneration"}],title:"Whisper"};function Tl(F){return cl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ql extends sl{constructor(l){super();al(this,l,Tl,wl,il,{})}}export{ql as default,yl as metadata};
