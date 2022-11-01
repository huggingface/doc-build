import{S as ul,i as fl,s as ml,e as n,k as h,w as k,t as a,M as _l,c as r,d as o,m as p,a as s,x as w,h as i,b as c,G as e,g,y,q as T,o as $,B as W,v as gl,L as Bn}from"../../chunks/vendor-hf-doc-builder.js";import{T as Zo}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Kn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ne}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Un}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function vl(F){let l,b,m,_,v;return _=new Kn({props:{code:`from transformers import WhisperConfig, WhisperModel

# Initializing a Whisper tiny style configuration
configuration = WhisperConfig()

# Initializing a model (with random weights) from the tiny style configuration
model = WhisperModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperConfig, WhisperModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Whisper tiny style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = WhisperConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the tiny style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Bn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function bl(F){let l,b,m,_,v,d,u,x;return{c(){l=n("p"),b=a(`This class method is simply calling the feature extractor
`),m=n("a"),_=a("from_pretrained()"),v=a(` and the tokenizer
`),d=n("code"),u=a("~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),x=a(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(P){l=r(P,"P",{});var z=s(l);b=i(z,`This class method is simply calling the feature extractor
`),m=r(z,"A",{href:!0});var j=s(m);_=i(j,"from_pretrained()"),j.forEach(o),v=i(z,` and the tokenizer
`),d=r(z,"CODE",{});var A=s(d);u=i(A,"~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),A.forEach(o),x=i(z,` methods. Please refer to the docstrings of the
methods above for more information.`),z.forEach(o),this.h()},h(){c(m,"href","/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.from_pretrained")},m(P,z){g(P,l,z),e(l,b),e(l,m),e(m,_),e(l,v),e(l,d),e(d,u),e(l,x)},d(P){P&&o(l)}}}function kl(F){let l,b,m,_,v,d,u,x;return{c(){l=n("p"),b=a("This class method is simply calling "),m=n("a"),_=a("save_pretrained()"),v=a(` and
`),d=n("a"),u=a("save_pretrained()"),x=a(`. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(P){l=r(P,"P",{});var z=s(l);b=i(z,"This class method is simply calling "),m=r(z,"A",{href:!0});var j=s(m);_=i(j,"save_pretrained()"),j.forEach(o),v=i(z,` and
`),d=r(z,"A",{href:!0});var A=s(d);u=i(A,"save_pretrained()"),A.forEach(o),x=i(z,`. Please refer to the docstrings of the
methods above for more information.`),z.forEach(o),this.h()},h(){c(m,"href","/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.save_pretrained"),c(d,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained")},m(P,z){g(P,l,z),e(l,b),e(l,m),e(m,_),e(l,v),e(l,d),e(d,u),e(l,x)},d(P){P&&o(l)}}}function wl(F){let l,b,m,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var x=s(m);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,m),e(m,_),e(l,v)},d(d){d&&o(l)}}}function yl(F){let l,b,m,_,v;return _=new Kn({props:{code:`import torch
from transformers import WhisperFeatureExtractor, WhisperModel
from datasets import load_dataset

model = WhisperModel.from_pretrained("openai/whisper-base")
feature_extractor = WhisperFeatureExtractor.from_pretrained("openai/whisper-base")
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
inputs = feature_extractor(ds[0]["audio"]["array"], return_tensors="pt")
input_features = inputs.input_features
decoder_input_ids = torch.tensor([[1, 1]]) * model.config.decoder_start_token_id
last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
list(last_hidden_state.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> WhisperFeatureExtractor, WhisperModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = WhisperModel.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = WhisperFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;openai/whisper-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Bn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function Tl(F){let l,b,m,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var x=s(m);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,m),e(m,_),e(l,v)},d(d){d&&o(l)}}}function $l(F){let l,b,m,_,v;return _=new Kn({props:{code:`import torch
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Bn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function Wl(F){let l,b,m,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var x=s(m);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,m),e(m,_),e(l,v)},d(d){d&&o(l)}}}function xl(F){let l,b,m,_,v;return _=new Kn({props:{code:`import tensorflow as tf
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Bn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function Fl(F){let l,b,m,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(u,"CODE",{});var x=s(m);_=i(x,"Module"),x.forEach(o),v=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(d,u){g(d,l,u),e(l,b),e(l,m),e(m,_),e(l,v)},d(d){d&&o(l)}}}function zl(F){let l,b,m,_,v;return _=new Kn({props:{code:`import tensorflow as tf
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),m=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var u=s(l);b=i(u,"Example:"),u.forEach(o),m=p(d),w(_.$$.fragment,d)},m(d,u){g(d,l,u),e(l,b),g(d,m,u),y(_,d,u),v=!0},p:Bn,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(m),W(_,d)}}}function El(F){let l,b,m,_,v,d,u,x,P,z,j,A,Qo,ot,Ur,Xo,Br,Jn,ke,Kr,nt,Jr,Zr,Zn,lo,Qr,Qn,ho,Yo,Xr,Xn,po,Yr,Yn,R,en,es,ts,rt,os,uo,ns,rs,ss,tn,as,is,st,ds,fo,cs,ls,er,U,hs,at,ps,us,it,fs,ms,dt,_s,gs,tr,re,we,on,ct,vs,nn,bs,or,L,lt,ks,se,ws,mo,ys,Ts,ht,$s,Ws,xs,ae,Fs,_o,zs,Es,go,qs,Ms,Cs,ye,nr,ie,Te,rn,pt,Ps,sn,js,rr,M,ut,Ss,an,As,Ns,ft,Is,vo,Ls,Ds,Gs,bo,mt,Os,$e,_t,Vs,de,Hs,dn,Rs,Us,cn,Bs,Ks,Js,X,gt,Zs,ko,Qs,wo,Xs,Ys,ln,ea,ta,yo,vt,sr,ce,We,hn,bt,oa,pn,na,ar,S,kt,ra,un,sa,aa,wt,ia,To,da,ca,la,le,ha,fn,pa,ua,mn,fa,ma,_a,xe,yt,ga,_n,va,ir,he,Fe,gn,Tt,ba,vn,ka,dr,q,$t,wa,bn,ya,Ta,N,$o,$a,Wa,Wo,xa,Fa,xo,za,Ea,Wt,kn,qa,Ma,Ca,Fo,Pa,ja,Sa,ze,xt,Aa,D,Na,wn,Ia,La,Ft,yn,Da,Ga,Oa,Tn,Va,Ha,zt,$n,Ra,Ua,Ba,Ka,Y,Et,Ja,Wn,Za,Qa,Ee,Xa,ee,qt,Ya,Mt,ei,zo,ti,oi,ni,qe,ri,Me,Ct,si,Pt,ai,Eo,ii,di,ci,Ce,jt,li,St,hi,qo,pi,ui,cr,pe,Pe,xn,At,fi,Fn,mi,lr,G,Nt,_i,It,gi,Mo,vi,bi,ki,Lt,wi,Dt,yi,Ti,$i,B,Gt,Wi,ue,xi,Co,Fi,zi,zn,Ei,qi,Mi,je,Ci,Se,hr,fe,Ae,En,Ot,Pi,qn,ji,pr,O,Vt,Si,Ht,Ai,Po,Ni,Ii,Li,Rt,Di,Ut,Gi,Oi,Vi,K,Bt,Hi,me,Ri,jo,Ui,Bi,Mn,Ki,Ji,Zi,Ne,Qi,Ie,ur,_e,Le,Cn,Kt,Xi,Pn,Yi,fr,V,Jt,ed,Zt,td,So,od,nd,rd,Qt,sd,Xt,ad,id,dd,J,Yt,cd,ge,ld,Ao,hd,pd,jn,ud,fd,md,De,_d,Ge,mr,ve,Oe,Sn,eo,gd,An,vd,_r,H,to,bd,oo,kd,No,wd,yd,Td,no,$d,ro,Wd,xd,Fd,Z,so,zd,be,Ed,Io,qd,Md,Nn,Cd,Pd,jd,Ve,Sd,He,gr;return d=new ne({}),ot=new ne({}),ct=new ne({}),lt=new E({props:{name:"class transformers.WhisperConfig",anchor:"transformers.WhisperConfig",parameters:[{name:"vocab_size",val:" = 51865"},{name:"num_mel_bins",val:" = 80"},{name:"encoder_layers",val:" = 6"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_ffn_dim",val:" = 1536"},{name:"encoder_ffn_dim",val:" = 1536"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 50257"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"max_source_positions",val:" = 1500"},{name:"max_target_positions",val:" = 448"},{name:"pad_token_id",val:" = 50256"},{name:"bos_token_id",val:" = 50257"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = True"},{name:"suppress_tokens",val:" = None"},{name:"begin_suppress_tokens",val:" = [220, 50256]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 51865) &#x2014;
Vocabulary size of the Whisper model. Defines the number of different tokens that can be represented by the
<code>decoder_input_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperModel">WhisperModel</a>`,name:"vocab_size"},{anchor:"transformers.WhisperConfig.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
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
the token for <code>&quot; &quot;</code> (<code>blank_token_id</code>) and the <code>eos_token_id</code>`,name:"begin_suppress_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/configuration_whisper.py#L53"}}),ye=new Un({props:{anchor:"transformers.WhisperConfig.example",$$slots:{default:[vl]},$$scope:{ctx:F}}}),pt=new ne({}),ut=new E({props:{name:"class transformers.WhisperTokenizer",anchor:"transformers.WhisperTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
any other word.`,name:"add_bos_token"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/tokenization_whisper.py#L92"}}),mt=new E({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/tokenization_whisper.py#L235"}}),_t=new E({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/tokenization_whisper.py#L249",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gt=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/tokenization_utils_base.py#L2987",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vt=new E({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/tokenization_whisper.py#L349"}}),bt=new ne({}),kt=new E({props:{name:"class transformers.WhisperFeatureExtractor",anchor:"transformers.WhisperFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"hop_length",val:" = 160"},{name:"chunk_length",val:" = 30"},{name:"n_fft",val:" = 400"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.WhisperFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 160) &#x2014;
Length of the overlaping windows for the STFT used to obtain the Mel Frequency coefficients.`,name:"hop_length"},{anchor:"transformers.WhisperFeatureExtractor.chunk_length",description:`<strong>chunk_length</strong> (<code>int</code>, defaults to 30) &#x2014;
The maximum number of chuncks of <code>sampling_rate</code> samples used to trim and pad longer or shorter audio
sequences.`,name:"chunk_length"},{anchor:"transformers.WhisperFeatureExtractor.n_fft",description:`<strong>n_fft</strong> (<code>int</code>, defaults to 400) &#x2014;
Size of the Fourier transform.`,name:"n_fft"},{anchor:"transformers.WhisperFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Padding value used to pad the audio. Should correspond to silences.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/feature_extraction_whisper.py#L32"}}),yt=new E({props:{name:"__call__",anchor:"transformers.WhisperFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"truncation",val:": bool = True"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"padding",val:": typing.Optional[str] = 'max_length'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.WhisperFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.24.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.WhisperFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors and allow automatic speech recognition
pipeline.`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/feature_extraction_whisper.py#L218"}}),Tt=new ne({}),$t=new E({props:{name:"class transformers.WhisperProcessor",anchor:"transformers.WhisperProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>WhisperFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.WhisperProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>WhisperTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/processing_whisper.py#L22"}}),xt=new E({props:{name:"__call__",anchor:"transformers.WhisperProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/processing_whisper.py#L77"}}),Et=new E({props:{name:"from_pretrained",anchor:"transformers.WhisperProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/processing_utils.py#L152"}}),Ee=new Zo({props:{$$slots:{default:[bl]},$$scope:{ctx:F}}}),qt=new E({props:{name:"save_pretrained",anchor:"transformers.WhisperProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.WhisperProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.24.0/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/processing_utils.py#L94"}}),qe=new Zo({props:{$$slots:{default:[kl]},$$scope:{ctx:F}}}),Ct=new E({props:{name:"batch_decode",anchor:"transformers.WhisperProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/processing_whisper.py#L110"}}),jt=new E({props:{name:"decode",anchor:"transformers.WhisperProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/processing_whisper.py#L117"}}),At=new ne({}),Nt=new E({props:{name:"class transformers.WhisperModel",anchor:"transformers.WhisperModel",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/modeling_whisper.py#L970"}}),Gt=new E({props:{name:"forward",anchor:"transformers.WhisperModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/modeling_whisper.py#L1000",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),je=new Zo({props:{$$slots:{default:[wl]},$$scope:{ctx:F}}}),Se=new Un({props:{anchor:"transformers.WhisperModel.forward.example",$$slots:{default:[yl]},$$scope:{ctx:F}}}),Ot=new ne({}),Vt=new E({props:{name:"class transformers.WhisperForConditionalGeneration",anchor:"transformers.WhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/modeling_whisper.py#L1094"}}),Bt=new E({props:{name:"forward",anchor:"transformers.WhisperForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.WhisperForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/modeling_whisper.py#L1136",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ne=new Zo({props:{$$slots:{default:[Tl]},$$scope:{ctx:F}}}),Ie=new Un({props:{anchor:"transformers.WhisperForConditionalGeneration.forward.example",$$slots:{default:[$l]},$$scope:{ctx:F}}}),Kt=new ne({}),Jt=new E({props:{name:"class transformers.TFWhisperModel",anchor:"transformers.TFWhisperModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/modeling_tf_whisper.py#L1103"}}),Yt=new E({props:{name:"call",anchor:"transformers.TFWhisperModel.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/modeling_tf_whisper.py#L1127",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),De=new Zo({props:{$$slots:{default:[Wl]},$$scope:{ctx:F}}}),Ge=new Un({props:{anchor:"transformers.TFWhisperModel.call.example",$$slots:{default:[xl]},$$scope:{ctx:F}}}),eo=new ne({}),to=new E({props:{name:"class transformers.TFWhisperForConditionalGeneration",anchor:"transformers.TFWhisperForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/modeling_tf_whisper.py#L1211"}}),so=new E({props:{name:"call",anchor:"transformers.TFWhisperForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/whisper/modeling_tf_whisper.py#L1242",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ve=new Zo({props:{$$slots:{default:[Fl]},$$scope:{ctx:F}}}),He=new Un({props:{anchor:"transformers.TFWhisperForConditionalGeneration.call.example",$$slots:{default:[zl]},$$scope:{ctx:F}}}),{c(){l=n("meta"),b=h(),m=n("h1"),_=n("a"),v=n("span"),k(d.$$.fragment),u=h(),x=n("span"),P=a("Whisper"),z=h(),j=n("h2"),A=n("a"),Qo=n("span"),k(ot.$$.fragment),Ur=h(),Xo=n("span"),Br=a("Overview"),Jn=h(),ke=n("p"),Kr=a("The Whisper model was proposed in "),nt=n("a"),Jr=a("Robust Speech Recognition via Large-Scale Weak Supervision"),Zr=a(" by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),Zn=h(),lo=n("p"),Qr=a("The abstract from the paper is the following:"),Qn=h(),ho=n("p"),Yo=n("em"),Xr=a("We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Xn=h(),po=n("p"),Yr=a("Tips:"),Yn=h(),R=n("ul"),en=n("li"),es=a("The model usually performs well without requiring any finetuning."),ts=h(),rt=n("li"),os=a("The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),uo=n("a"),ns=a("generate()"),rs=a(" function for inference."),ss=h(),tn=n("li"),as=a("Inference is currently only implemented for short-form i.e. audio is pre-segmented into <=30s segments. Long-form (including timestamps) will be implemented in a future release."),is=h(),st=n("li"),ds=a("One can use "),fo=n("a"),cs=a("WhisperProcessor"),ls=a(" to prepare audio for the model, and decode the predicted ID\u2019s back into text."),er=h(),U=n("p"),hs=a("This model was contributed by "),at=n("a"),ps=a("Arthur Zucker"),us=a(". The Tensorflow version of this model was contributed by "),it=n("a"),fs=a("amyeroberts"),ms=a(`.
The original code can be found `),dt=n("a"),_s=a("here"),gs=a("."),tr=h(),re=n("h2"),we=n("a"),on=n("span"),k(ct.$$.fragment),vs=h(),nn=n("span"),bs=a("WhisperConfig"),or=h(),L=n("div"),k(lt.$$.fragment),ks=h(),se=n("p"),ws=a("This is the configuration class to store the configuration of a "),mo=n("a"),ys=a("WhisperModel"),Ts=a(`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),ht=n("a"),$s=a("openai/whisper-tiny"),Ws=a(" architecture."),xs=h(),ae=n("p"),Fs=a("Configuration objects inherit from "),_o=n("a"),zs=a("PretrainedConfig"),Es=a(` and can be used to control the model outputs. Read the
documentation from `),go=n("a"),qs=a("PretrainedConfig"),Ms=a(" for more information."),Cs=h(),k(ye.$$.fragment),nr=h(),ie=n("h2"),Te=n("a"),rn=n("span"),k(pt.$$.fragment),Ps=h(),sn=n("span"),js=a("WhisperTokenizer"),rr=h(),M=n("div"),k(ut.$$.fragment),Ss=h(),an=n("p"),As=a("Construct an Whisper tokenizer."),Ns=h(),ft=n("p"),Is=a("This tokenizer inherits from "),vo=n("a"),Ls=a("PreTrainedTokenizer"),Ds=a(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Gs=h(),bo=n("div"),k(mt.$$.fragment),Os=h(),$e=n("div"),k(_t.$$.fragment),Vs=h(),de=n("p"),Hs=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dn=n("code"),Rs=a("prepare_for_model"),Us=a(" or "),cn=n("code"),Bs=a("encode_plus"),Ks=a(" methods."),Js=h(),X=n("div"),k(gt.$$.fragment),Zs=h(),ko=n("p"),Qs=a("Create the token type IDs corresponding to the sequences passed. "),wo=n("a"),Xs=a(`What are token type
IDs?`),Ys=h(),ln=n("p"),ea=a("Should be overridden in a subclass if the model has a special way of building those."),ta=h(),yo=n("div"),k(vt.$$.fragment),sr=h(),ce=n("h2"),We=n("a"),hn=n("span"),k(bt.$$.fragment),oa=h(),pn=n("span"),na=a("WhisperFeatureExtractor"),ar=h(),S=n("div"),k(kt.$$.fragment),ra=h(),un=n("p"),sa=a("Constructs a Whisper feature extractor."),aa=h(),wt=n("p"),ia=a("This feature extractor inherits from "),To=n("a"),da=a("WhisperFeatureExtractor"),ca=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),la=h(),le=n("p"),ha=a("This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),fn=n("code"),pa=a("Short Time Fourier Transform"),ua=a(" which should match pytorch\u2019s "),mn=n("code"),fa=a("torch.stft"),ma=a(" equivalent."),_a=h(),xe=n("div"),k(yt.$$.fragment),ga=h(),_n=n("p"),va=a("Main method to featurize and prepare for the model one or several sequence(s)."),ir=h(),he=n("h2"),Fe=n("a"),gn=n("span"),k(Tt.$$.fragment),ba=h(),vn=n("span"),ka=a("WhisperProcessor"),dr=h(),q=n("div"),k($t.$$.fragment),wa=h(),bn=n("p"),ya=a(`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),Ta=h(),N=n("p"),$o=n("a"),$a=a("WhisperProcessor"),Wa=a(" offers all the functionalities of "),Wo=n("a"),xa=a("WhisperFeatureExtractor"),Fa=a(" and "),xo=n("a"),za=a("WhisperTokenizer"),Ea=a(`. See
the `),Wt=n("a"),kn=n("strong"),qa=a("call"),Ma=a("()"),Ca=a(" and "),Fo=n("a"),Pa=a("decode()"),ja=a(" for more information."),Sa=h(),ze=n("div"),k(xt.$$.fragment),Aa=h(),D=n("p"),Na=a("Forwards the "),wn=n("code"),Ia=a("audio"),La=a(" argument to WhisperFeatureExtractor\u2019s "),Ft=n("a"),yn=n("strong"),Da=a("call"),Ga=a("()"),Oa=a(" and the "),Tn=n("code"),Va=a("text"),Ha=a(`
argument to `),zt=n("a"),$n=n("strong"),Ra=a("call"),Ua=a("()"),Ba=a(`. Please refer to the doctsring of the above two methods for more
information.`),Ka=h(),Y=n("div"),k(Et.$$.fragment),Ja=h(),Wn=n("p"),Za=a("Instantiate a processor associated with a pretrained model."),Qa=h(),k(Ee.$$.fragment),Xa=h(),ee=n("div"),k(qt.$$.fragment),Ya=h(),Mt=n("p"),ei=a(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zo=n("a"),ti=a("from_pretrained()"),oi=a(" method."),ni=h(),k(qe.$$.fragment),ri=h(),Me=n("div"),k(Ct.$$.fragment),si=h(),Pt=n("p"),ai=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),Eo=n("a"),ii=a("batch_decode()"),di=a(`. Please
refer to the docstring of this method for more information.`),ci=h(),Ce=n("div"),k(jt.$$.fragment),li=h(),St=n("p"),hi=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),qo=n("a"),pi=a("decode()"),ui=a(`. Please refer to
the docstring of this method for more information.`),cr=h(),pe=n("h2"),Pe=n("a"),xn=n("span"),k(At.$$.fragment),fi=h(),Fn=n("span"),mi=a("WhisperModel"),lr=h(),G=n("div"),k(Nt.$$.fragment),_i=h(),It=n("p"),gi=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mo=n("a"),vi=a("PreTrainedModel"),bi=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ki=h(),Lt=n("p"),wi=a("This model is also a PyTorch "),Dt=n("a"),yi=a("torch.nn.Module"),Ti=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$i=h(),B=n("div"),k(Gt.$$.fragment),Wi=h(),ue=n("p"),xi=a("The "),Co=n("a"),Fi=a("WhisperModel"),zi=a(" forward method, overrides the "),zn=n("code"),Ei=a("__call__"),qi=a(" special method."),Mi=h(),k(je.$$.fragment),Ci=h(),k(Se.$$.fragment),hr=h(),fe=n("h2"),Ae=n("a"),En=n("span"),k(Ot.$$.fragment),Pi=h(),qn=n("span"),ji=a("WhisperForConditionalGeneration"),pr=h(),O=n("div"),k(Vt.$$.fragment),Si=h(),Ht=n("p"),Ai=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Po=n("a"),Ni=a("PreTrainedModel"),Ii=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li=h(),Rt=n("p"),Di=a("This model is also a PyTorch "),Ut=n("a"),Gi=a("torch.nn.Module"),Oi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vi=h(),K=n("div"),k(Bt.$$.fragment),Hi=h(),me=n("p"),Ri=a("The "),jo=n("a"),Ui=a("WhisperForConditionalGeneration"),Bi=a(" forward method, overrides the "),Mn=n("code"),Ki=a("__call__"),Ji=a(" special method."),Zi=h(),k(Ne.$$.fragment),Qi=h(),k(Ie.$$.fragment),ur=h(),_e=n("h2"),Le=n("a"),Cn=n("span"),k(Kt.$$.fragment),Xi=h(),Pn=n("span"),Yi=a("TFWhisperModel"),fr=h(),V=n("div"),k(Jt.$$.fragment),ed=h(),Zt=n("p"),td=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),So=n("a"),od=a("TFPreTrainedModel"),nd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd=h(),Qt=n("p"),sd=a("This model is also a "),Xt=n("a"),ad=a("tf.keras.Model"),id=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dd=h(),J=n("div"),k(Yt.$$.fragment),cd=h(),ge=n("p"),ld=a("The "),Ao=n("a"),hd=a("TFWhisperModel"),pd=a(" forward method, overrides the "),jn=n("code"),ud=a("__call__"),fd=a(" special method."),md=h(),k(De.$$.fragment),_d=h(),k(Ge.$$.fragment),mr=h(),ve=n("h2"),Oe=n("a"),Sn=n("span"),k(eo.$$.fragment),gd=h(),An=n("span"),vd=a("TFWhisperForConditionalGeneration"),_r=h(),H=n("div"),k(to.$$.fragment),bd=h(),oo=n("p"),kd=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),No=n("a"),wd=a("TFPreTrainedModel"),yd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td=h(),no=n("p"),$d=a("This model is also a "),ro=n("a"),Wd=a("tf.keras.Model"),xd=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fd=h(),Z=n("div"),k(so.$$.fragment),zd=h(),be=n("p"),Ed=a("The "),Io=n("a"),qd=a("TFWhisperForConditionalGeneration"),Md=a(" forward method, overrides the "),Nn=n("code"),Cd=a("__call__"),Pd=a(" special method."),jd=h(),k(Ve.$$.fragment),Sd=h(),k(He.$$.fragment),this.h()},l(t){const f=_l('[data-svelte="svelte-1phssyn"]',document.head);l=r(f,"META",{name:!0,content:!0}),f.forEach(o),b=p(t),m=r(t,"H1",{class:!0});var ao=s(m);_=r(ao,"A",{id:!0,class:!0,href:!0});var In=s(_);v=r(In,"SPAN",{});var Ln=s(v);w(d.$$.fragment,Ln),Ln.forEach(o),In.forEach(o),u=p(ao),x=r(ao,"SPAN",{});var Dn=s(x);P=i(Dn,"Whisper"),Dn.forEach(o),ao.forEach(o),z=p(t),j=r(t,"H2",{class:!0});var io=s(j);A=r(io,"A",{id:!0,class:!0,href:!0});var Gn=s(A);Qo=r(Gn,"SPAN",{});var On=s(Qo);w(ot.$$.fragment,On),On.forEach(o),Gn.forEach(o),Ur=p(io),Xo=r(io,"SPAN",{});var Vn=s(Xo);Br=i(Vn,"Overview"),Vn.forEach(o),io.forEach(o),Jn=p(t),ke=r(t,"P",{});var co=s(ke);Kr=i(co,"The Whisper model was proposed in "),nt=r(co,"A",{href:!0,rel:!0});var Hn=s(nt);Jr=i(Hn,"Robust Speech Recognition via Large-Scale Weak Supervision"),Hn.forEach(o),Zr=i(co," by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),co.forEach(o),Zn=p(t),lo=r(t,"P",{});var Rn=s(lo);Qr=i(Rn,"The abstract from the paper is the following:"),Rn.forEach(o),Qn=p(t),ho=r(t,"P",{});var Dd=s(ho);Yo=r(Dd,"EM",{});var Gd=s(Yo);Xr=i(Gd,"We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Gd.forEach(o),Dd.forEach(o),Xn=p(t),po=r(t,"P",{});var Od=s(po);Yr=i(Od,"Tips:"),Od.forEach(o),Yn=p(t),R=r(t,"UL",{});var Re=s(R);en=r(Re,"LI",{});var Vd=s(en);es=i(Vd,"The model usually performs well without requiring any finetuning."),Vd.forEach(o),ts=p(Re),rt=r(Re,"LI",{});var vr=s(rt);os=i(vr,"The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),uo=r(vr,"A",{href:!0});var Hd=s(uo);ns=i(Hd,"generate()"),Hd.forEach(o),rs=i(vr," function for inference."),vr.forEach(o),ss=p(Re),tn=r(Re,"LI",{});var Rd=s(tn);as=i(Rd,"Inference is currently only implemented for short-form i.e. audio is pre-segmented into <=30s segments. Long-form (including timestamps) will be implemented in a future release."),Rd.forEach(o),is=p(Re),st=r(Re,"LI",{});var br=s(st);ds=i(br,"One can use "),fo=r(br,"A",{href:!0});var Ud=s(fo);cs=i(Ud,"WhisperProcessor"),Ud.forEach(o),ls=i(br," to prepare audio for the model, and decode the predicted ID\u2019s back into text."),br.forEach(o),Re.forEach(o),er=p(t),U=r(t,"P",{});var Ue=s(U);hs=i(Ue,"This model was contributed by "),at=r(Ue,"A",{href:!0,rel:!0});var Bd=s(at);ps=i(Bd,"Arthur Zucker"),Bd.forEach(o),us=i(Ue,". The Tensorflow version of this model was contributed by "),it=r(Ue,"A",{href:!0,rel:!0});var Kd=s(it);fs=i(Kd,"amyeroberts"),Kd.forEach(o),ms=i(Ue,`.
The original code can be found `),dt=r(Ue,"A",{href:!0,rel:!0});var Jd=s(dt);_s=i(Jd,"here"),Jd.forEach(o),gs=i(Ue,"."),Ue.forEach(o),tr=p(t),re=r(t,"H2",{class:!0});var kr=s(re);we=r(kr,"A",{id:!0,class:!0,href:!0});var Zd=s(we);on=r(Zd,"SPAN",{});var Qd=s(on);w(ct.$$.fragment,Qd),Qd.forEach(o),Zd.forEach(o),vs=p(kr),nn=r(kr,"SPAN",{});var Xd=s(nn);bs=i(Xd,"WhisperConfig"),Xd.forEach(o),kr.forEach(o),or=p(t),L=r(t,"DIV",{class:!0});var Be=s(L);w(lt.$$.fragment,Be),ks=p(Be),se=r(Be,"P",{});var Lo=s(se);ws=i(Lo,"This is the configuration class to store the configuration of a "),mo=r(Lo,"A",{href:!0});var Yd=s(mo);ys=i(Yd,"WhisperModel"),Yd.forEach(o),Ts=i(Lo,`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),ht=r(Lo,"A",{href:!0,rel:!0});var ec=s(ht);$s=i(ec,"openai/whisper-tiny"),ec.forEach(o),Ws=i(Lo," architecture."),Lo.forEach(o),xs=p(Be),ae=r(Be,"P",{});var Do=s(ae);Fs=i(Do,"Configuration objects inherit from "),_o=r(Do,"A",{href:!0});var tc=s(_o);zs=i(tc,"PretrainedConfig"),tc.forEach(o),Es=i(Do,` and can be used to control the model outputs. Read the
documentation from `),go=r(Do,"A",{href:!0});var oc=s(go);qs=i(oc,"PretrainedConfig"),oc.forEach(o),Ms=i(Do," for more information."),Do.forEach(o),Cs=p(Be),w(ye.$$.fragment,Be),Be.forEach(o),nr=p(t),ie=r(t,"H2",{class:!0});var wr=s(ie);Te=r(wr,"A",{id:!0,class:!0,href:!0});var nc=s(Te);rn=r(nc,"SPAN",{});var rc=s(rn);w(pt.$$.fragment,rc),rc.forEach(o),nc.forEach(o),Ps=p(wr),sn=r(wr,"SPAN",{});var sc=s(sn);js=i(sc,"WhisperTokenizer"),sc.forEach(o),wr.forEach(o),rr=p(t),M=r(t,"DIV",{class:!0});var I=s(M);w(ut.$$.fragment,I),Ss=p(I),an=r(I,"P",{});var ac=s(an);As=i(ac,"Construct an Whisper tokenizer."),ac.forEach(o),Ns=p(I),ft=r(I,"P",{});var yr=s(ft);Is=i(yr,"This tokenizer inherits from "),vo=r(yr,"A",{href:!0});var ic=s(vo);Ls=i(ic,"PreTrainedTokenizer"),ic.forEach(o),Ds=i(yr,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),yr.forEach(o),Gs=p(I),bo=r(I,"DIV",{class:!0});var dc=s(bo);w(mt.$$.fragment,dc),dc.forEach(o),Os=p(I),$e=r(I,"DIV",{class:!0});var Tr=s($e);w(_t.$$.fragment,Tr),Vs=p(Tr),de=r(Tr,"P",{});var Go=s(de);Hs=i(Go,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dn=r(Go,"CODE",{});var cc=s(dn);Rs=i(cc,"prepare_for_model"),cc.forEach(o),Us=i(Go," or "),cn=r(Go,"CODE",{});var lc=s(cn);Bs=i(lc,"encode_plus"),lc.forEach(o),Ks=i(Go," methods."),Go.forEach(o),Tr.forEach(o),Js=p(I),X=r(I,"DIV",{class:!0});var Oo=s(X);w(gt.$$.fragment,Oo),Zs=p(Oo),ko=r(Oo,"P",{});var Ad=s(ko);Qs=i(Ad,"Create the token type IDs corresponding to the sequences passed. "),wo=r(Ad,"A",{href:!0});var hc=s(wo);Xs=i(hc,`What are token type
IDs?`),hc.forEach(o),Ad.forEach(o),Ys=p(Oo),ln=r(Oo,"P",{});var pc=s(ln);ea=i(pc,"Should be overridden in a subclass if the model has a special way of building those."),pc.forEach(o),Oo.forEach(o),ta=p(I),yo=r(I,"DIV",{class:!0});var uc=s(yo);w(vt.$$.fragment,uc),uc.forEach(o),I.forEach(o),sr=p(t),ce=r(t,"H2",{class:!0});var $r=s(ce);We=r($r,"A",{id:!0,class:!0,href:!0});var fc=s(We);hn=r(fc,"SPAN",{});var mc=s(hn);w(bt.$$.fragment,mc),mc.forEach(o),fc.forEach(o),oa=p($r),pn=r($r,"SPAN",{});var _c=s(pn);na=i(_c,"WhisperFeatureExtractor"),_c.forEach(o),$r.forEach(o),ar=p(t),S=r(t,"DIV",{class:!0});var te=s(S);w(kt.$$.fragment,te),ra=p(te),un=r(te,"P",{});var gc=s(un);sa=i(gc,"Constructs a Whisper feature extractor."),gc.forEach(o),aa=p(te),wt=r(te,"P",{});var Wr=s(wt);ia=i(Wr,"This feature extractor inherits from "),To=r(Wr,"A",{href:!0});var vc=s(To);da=i(vc,"WhisperFeatureExtractor"),vc.forEach(o),ca=i(Wr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Wr.forEach(o),la=p(te),le=r(te,"P",{});var Vo=s(le);ha=i(Vo,"This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),fn=r(Vo,"CODE",{});var bc=s(fn);pa=i(bc,"Short Time Fourier Transform"),bc.forEach(o),ua=i(Vo," which should match pytorch\u2019s "),mn=r(Vo,"CODE",{});var kc=s(mn);fa=i(kc,"torch.stft"),kc.forEach(o),ma=i(Vo," equivalent."),Vo.forEach(o),_a=p(te),xe=r(te,"DIV",{class:!0});var xr=s(xe);w(yt.$$.fragment,xr),ga=p(xr),_n=r(xr,"P",{});var wc=s(_n);va=i(wc,"Main method to featurize and prepare for the model one or several sequence(s)."),wc.forEach(o),xr.forEach(o),te.forEach(o),ir=p(t),he=r(t,"H2",{class:!0});var Fr=s(he);Fe=r(Fr,"A",{id:!0,class:!0,href:!0});var yc=s(Fe);gn=r(yc,"SPAN",{});var Tc=s(gn);w(Tt.$$.fragment,Tc),Tc.forEach(o),yc.forEach(o),ba=p(Fr),vn=r(Fr,"SPAN",{});var $c=s(vn);ka=i($c,"WhisperProcessor"),$c.forEach(o),Fr.forEach(o),dr=p(t),q=r(t,"DIV",{class:!0});var C=s(q);w($t.$$.fragment,C),wa=p(C),bn=r(C,"P",{});var Wc=s(bn);ya=i(Wc,`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),Wc.forEach(o),Ta=p(C),N=r(C,"P",{});var Q=s(N);$o=r(Q,"A",{href:!0});var xc=s($o);$a=i(xc,"WhisperProcessor"),xc.forEach(o),Wa=i(Q," offers all the functionalities of "),Wo=r(Q,"A",{href:!0});var Fc=s(Wo);xa=i(Fc,"WhisperFeatureExtractor"),Fc.forEach(o),Fa=i(Q," and "),xo=r(Q,"A",{href:!0});var zc=s(xo);za=i(zc,"WhisperTokenizer"),zc.forEach(o),Ea=i(Q,`. See
the `),Wt=r(Q,"A",{href:!0});var Nd=s(Wt);kn=r(Nd,"STRONG",{});var Ec=s(kn);qa=i(Ec,"call"),Ec.forEach(o),Ma=i(Nd,"()"),Nd.forEach(o),Ca=i(Q," and "),Fo=r(Q,"A",{href:!0});var qc=s(Fo);Pa=i(qc,"decode()"),qc.forEach(o),ja=i(Q," for more information."),Q.forEach(o),Sa=p(C),ze=r(C,"DIV",{class:!0});var zr=s(ze);w(xt.$$.fragment,zr),Aa=p(zr),D=r(zr,"P",{});var oe=s(D);Na=i(oe,"Forwards the "),wn=r(oe,"CODE",{});var Mc=s(wn);Ia=i(Mc,"audio"),Mc.forEach(o),La=i(oe," argument to WhisperFeatureExtractor\u2019s "),Ft=r(oe,"A",{href:!0});var Id=s(Ft);yn=r(Id,"STRONG",{});var Cc=s(yn);Da=i(Cc,"call"),Cc.forEach(o),Ga=i(Id,"()"),Id.forEach(o),Oa=i(oe," and the "),Tn=r(oe,"CODE",{});var Pc=s(Tn);Va=i(Pc,"text"),Pc.forEach(o),Ha=i(oe,`
argument to `),zt=r(oe,"A",{href:!0});var Ld=s(zt);$n=r(Ld,"STRONG",{});var jc=s($n);Ra=i(jc,"call"),jc.forEach(o),Ua=i(Ld,"()"),Ld.forEach(o),Ba=i(oe,`. Please refer to the doctsring of the above two methods for more
information.`),oe.forEach(o),zr.forEach(o),Ka=p(C),Y=r(C,"DIV",{class:!0});var Ho=s(Y);w(Et.$$.fragment,Ho),Ja=p(Ho),Wn=r(Ho,"P",{});var Sc=s(Wn);Za=i(Sc,"Instantiate a processor associated with a pretrained model."),Sc.forEach(o),Qa=p(Ho),w(Ee.$$.fragment,Ho),Ho.forEach(o),Xa=p(C),ee=r(C,"DIV",{class:!0});var Ro=s(ee);w(qt.$$.fragment,Ro),Ya=p(Ro),Mt=r(Ro,"P",{});var Er=s(Mt);ei=i(Er,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zo=r(Er,"A",{href:!0});var Ac=s(zo);ti=i(Ac,"from_pretrained()"),Ac.forEach(o),oi=i(Er," method."),Er.forEach(o),ni=p(Ro),w(qe.$$.fragment,Ro),Ro.forEach(o),ri=p(C),Me=r(C,"DIV",{class:!0});var qr=s(Me);w(Ct.$$.fragment,qr),si=p(qr),Pt=r(qr,"P",{});var Mr=s(Pt);ai=i(Mr,"This method forwards all its arguments to WhisperTokenizer\u2019s "),Eo=r(Mr,"A",{href:!0});var Nc=s(Eo);ii=i(Nc,"batch_decode()"),Nc.forEach(o),di=i(Mr,`. Please
refer to the docstring of this method for more information.`),Mr.forEach(o),qr.forEach(o),ci=p(C),Ce=r(C,"DIV",{class:!0});var Cr=s(Ce);w(jt.$$.fragment,Cr),li=p(Cr),St=r(Cr,"P",{});var Pr=s(St);hi=i(Pr,"This method forwards all its arguments to WhisperTokenizer\u2019s "),qo=r(Pr,"A",{href:!0});var Ic=s(qo);pi=i(Ic,"decode()"),Ic.forEach(o),ui=i(Pr,`. Please refer to
the docstring of this method for more information.`),Pr.forEach(o),Cr.forEach(o),C.forEach(o),cr=p(t),pe=r(t,"H2",{class:!0});var jr=s(pe);Pe=r(jr,"A",{id:!0,class:!0,href:!0});var Lc=s(Pe);xn=r(Lc,"SPAN",{});var Dc=s(xn);w(At.$$.fragment,Dc),Dc.forEach(o),Lc.forEach(o),fi=p(jr),Fn=r(jr,"SPAN",{});var Gc=s(Fn);mi=i(Gc,"WhisperModel"),Gc.forEach(o),jr.forEach(o),lr=p(t),G=r(t,"DIV",{class:!0});var Ke=s(G);w(Nt.$$.fragment,Ke),_i=p(Ke),It=r(Ke,"P",{});var Sr=s(It);gi=i(Sr,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mo=r(Sr,"A",{href:!0});var Oc=s(Mo);vi=i(Oc,"PreTrainedModel"),Oc.forEach(o),bi=i(Sr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sr.forEach(o),ki=p(Ke),Lt=r(Ke,"P",{});var Ar=s(Lt);wi=i(Ar,"This model is also a PyTorch "),Dt=r(Ar,"A",{href:!0,rel:!0});var Vc=s(Dt);yi=i(Vc,"torch.nn.Module"),Vc.forEach(o),Ti=i(Ar,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ar.forEach(o),$i=p(Ke),B=r(Ke,"DIV",{class:!0});var Je=s(B);w(Gt.$$.fragment,Je),Wi=p(Je),ue=r(Je,"P",{});var Uo=s(ue);xi=i(Uo,"The "),Co=r(Uo,"A",{href:!0});var Hc=s(Co);Fi=i(Hc,"WhisperModel"),Hc.forEach(o),zi=i(Uo," forward method, overrides the "),zn=r(Uo,"CODE",{});var Rc=s(zn);Ei=i(Rc,"__call__"),Rc.forEach(o),qi=i(Uo," special method."),Uo.forEach(o),Mi=p(Je),w(je.$$.fragment,Je),Ci=p(Je),w(Se.$$.fragment,Je),Je.forEach(o),Ke.forEach(o),hr=p(t),fe=r(t,"H2",{class:!0});var Nr=s(fe);Ae=r(Nr,"A",{id:!0,class:!0,href:!0});var Uc=s(Ae);En=r(Uc,"SPAN",{});var Bc=s(En);w(Ot.$$.fragment,Bc),Bc.forEach(o),Uc.forEach(o),Pi=p(Nr),qn=r(Nr,"SPAN",{});var Kc=s(qn);ji=i(Kc,"WhisperForConditionalGeneration"),Kc.forEach(o),Nr.forEach(o),pr=p(t),O=r(t,"DIV",{class:!0});var Ze=s(O);w(Vt.$$.fragment,Ze),Si=p(Ze),Ht=r(Ze,"P",{});var Ir=s(Ht);Ai=i(Ir,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Po=r(Ir,"A",{href:!0});var Jc=s(Po);Ni=i(Jc,"PreTrainedModel"),Jc.forEach(o),Ii=i(Ir,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ir.forEach(o),Li=p(Ze),Rt=r(Ze,"P",{});var Lr=s(Rt);Di=i(Lr,"This model is also a PyTorch "),Ut=r(Lr,"A",{href:!0,rel:!0});var Zc=s(Ut);Gi=i(Zc,"torch.nn.Module"),Zc.forEach(o),Oi=i(Lr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lr.forEach(o),Vi=p(Ze),K=r(Ze,"DIV",{class:!0});var Qe=s(K);w(Bt.$$.fragment,Qe),Hi=p(Qe),me=r(Qe,"P",{});var Bo=s(me);Ri=i(Bo,"The "),jo=r(Bo,"A",{href:!0});var Qc=s(jo);Ui=i(Qc,"WhisperForConditionalGeneration"),Qc.forEach(o),Bi=i(Bo," forward method, overrides the "),Mn=r(Bo,"CODE",{});var Xc=s(Mn);Ki=i(Xc,"__call__"),Xc.forEach(o),Ji=i(Bo," special method."),Bo.forEach(o),Zi=p(Qe),w(Ne.$$.fragment,Qe),Qi=p(Qe),w(Ie.$$.fragment,Qe),Qe.forEach(o),Ze.forEach(o),ur=p(t),_e=r(t,"H2",{class:!0});var Dr=s(_e);Le=r(Dr,"A",{id:!0,class:!0,href:!0});var Yc=s(Le);Cn=r(Yc,"SPAN",{});var el=s(Cn);w(Kt.$$.fragment,el),el.forEach(o),Yc.forEach(o),Xi=p(Dr),Pn=r(Dr,"SPAN",{});var tl=s(Pn);Yi=i(tl,"TFWhisperModel"),tl.forEach(o),Dr.forEach(o),fr=p(t),V=r(t,"DIV",{class:!0});var Xe=s(V);w(Jt.$$.fragment,Xe),ed=p(Xe),Zt=r(Xe,"P",{});var Gr=s(Zt);td=i(Gr,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),So=r(Gr,"A",{href:!0});var ol=s(So);od=i(ol,"TFPreTrainedModel"),ol.forEach(o),nd=i(Gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gr.forEach(o),rd=p(Xe),Qt=r(Xe,"P",{});var Or=s(Qt);sd=i(Or,"This model is also a "),Xt=r(Or,"A",{href:!0,rel:!0});var nl=s(Xt);ad=i(nl,"tf.keras.Model"),nl.forEach(o),id=i(Or,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Or.forEach(o),dd=p(Xe),J=r(Xe,"DIV",{class:!0});var Ye=s(J);w(Yt.$$.fragment,Ye),cd=p(Ye),ge=r(Ye,"P",{});var Ko=s(ge);ld=i(Ko,"The "),Ao=r(Ko,"A",{href:!0});var rl=s(Ao);hd=i(rl,"TFWhisperModel"),rl.forEach(o),pd=i(Ko," forward method, overrides the "),jn=r(Ko,"CODE",{});var sl=s(jn);ud=i(sl,"__call__"),sl.forEach(o),fd=i(Ko," special method."),Ko.forEach(o),md=p(Ye),w(De.$$.fragment,Ye),_d=p(Ye),w(Ge.$$.fragment,Ye),Ye.forEach(o),Xe.forEach(o),mr=p(t),ve=r(t,"H2",{class:!0});var Vr=s(ve);Oe=r(Vr,"A",{id:!0,class:!0,href:!0});var al=s(Oe);Sn=r(al,"SPAN",{});var il=s(Sn);w(eo.$$.fragment,il),il.forEach(o),al.forEach(o),gd=p(Vr),An=r(Vr,"SPAN",{});var dl=s(An);vd=i(dl,"TFWhisperForConditionalGeneration"),dl.forEach(o),Vr.forEach(o),_r=p(t),H=r(t,"DIV",{class:!0});var et=s(H);w(to.$$.fragment,et),bd=p(et),oo=r(et,"P",{});var Hr=s(oo);kd=i(Hr,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),No=r(Hr,"A",{href:!0});var cl=s(No);wd=i(cl,"TFPreTrainedModel"),cl.forEach(o),yd=i(Hr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hr.forEach(o),Td=p(et),no=r(et,"P",{});var Rr=s(no);$d=i(Rr,"This model is also a "),ro=r(Rr,"A",{href:!0,rel:!0});var ll=s(ro);Wd=i(ll,"tf.keras.Model"),ll.forEach(o),xd=i(Rr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rr.forEach(o),Fd=p(et),Z=r(et,"DIV",{class:!0});var tt=s(Z);w(so.$$.fragment,tt),zd=p(tt),be=r(tt,"P",{});var Jo=s(be);Ed=i(Jo,"The "),Io=r(Jo,"A",{href:!0});var hl=s(Io);qd=i(hl,"TFWhisperForConditionalGeneration"),hl.forEach(o),Md=i(Jo," forward method, overrides the "),Nn=r(Jo,"CODE",{});var pl=s(Nn);Cd=i(pl,"__call__"),pl.forEach(o),Pd=i(Jo," special method."),Jo.forEach(o),jd=p(tt),w(Ve.$$.fragment,tt),Sd=p(tt),w(He.$$.fragment,tt),tt.forEach(o),et.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(ql)),c(_,"id","whisper"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#whisper"),c(m,"class","relative group"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(j,"class","relative group"),c(nt,"href","https://cdn.openai.com/papers/whisper.pdf"),c(nt,"rel","nofollow"),c(uo,"href","/docs/transformers/v4.24.0/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(fo,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperProcessor"),c(at,"href","https://huggingface.co/ArthurZ"),c(at,"rel","nofollow"),c(it,"href","https://huggingface.co/amyeroberts"),c(it,"rel","nofollow"),c(dt,"href","https://github.com/openai/whisper"),c(dt,"rel","nofollow"),c(we,"id","transformers.WhisperConfig"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#transformers.WhisperConfig"),c(re,"class","relative group"),c(mo,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperModel"),c(ht,"href","https://huggingface.co/openai/whisper-tiny"),c(ht,"rel","nofollow"),c(_o,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(go,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.WhisperTokenizer"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.WhisperTokenizer"),c(ie,"class","relative group"),c(vo,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"href","../glossary#token-type-ids"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(We,"id","transformers.WhisperFeatureExtractor"),c(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(We,"href","#transformers.WhisperFeatureExtractor"),c(ce,"class","relative group"),c(To,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fe,"id","transformers.WhisperProcessor"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#transformers.WhisperProcessor"),c(he,"class","relative group"),c($o,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperProcessor"),c(Wo,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(xo,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperTokenizer"),c(Wt,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperProcessor.__call__"),c(Fo,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperProcessor.decode"),c(Ft,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"),c(zt,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zo,"href","/docs/transformers/v4.24.0/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Eo,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qo,"href","/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"id","transformers.WhisperModel"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.WhisperModel"),c(pe,"class","relative group"),c(Mo,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),c(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dt,"rel","nofollow"),c(Co,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ae,"id","transformers.WhisperForConditionalGeneration"),c(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ae,"href","#transformers.WhisperForConditionalGeneration"),c(fe,"class","relative group"),c(Po,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),c(Ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ut,"rel","nofollow"),c(jo,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.WhisperForConditionalGeneration"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Le,"id","transformers.TFWhisperModel"),c(Le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Le,"href","#transformers.TFWhisperModel"),c(_e,"class","relative group"),c(So,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xt,"rel","nofollow"),c(Ao,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.TFWhisperModel"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Oe,"id","transformers.TFWhisperForConditionalGeneration"),c(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Oe,"href","#transformers.TFWhisperForConditionalGeneration"),c(ve,"class","relative group"),c(No,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ro,"rel","nofollow"),c(Io,"href","/docs/transformers/v4.24.0/en/model_doc/whisper#transformers.TFWhisperForConditionalGeneration"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,l),g(t,b,f),g(t,m,f),e(m,_),e(_,v),y(d,v,null),e(m,u),e(m,x),e(x,P),g(t,z,f),g(t,j,f),e(j,A),e(A,Qo),y(ot,Qo,null),e(j,Ur),e(j,Xo),e(Xo,Br),g(t,Jn,f),g(t,ke,f),e(ke,Kr),e(ke,nt),e(nt,Jr),e(ke,Zr),g(t,Zn,f),g(t,lo,f),e(lo,Qr),g(t,Qn,f),g(t,ho,f),e(ho,Yo),e(Yo,Xr),g(t,Xn,f),g(t,po,f),e(po,Yr),g(t,Yn,f),g(t,R,f),e(R,en),e(en,es),e(R,ts),e(R,rt),e(rt,os),e(rt,uo),e(uo,ns),e(rt,rs),e(R,ss),e(R,tn),e(tn,as),e(R,is),e(R,st),e(st,ds),e(st,fo),e(fo,cs),e(st,ls),g(t,er,f),g(t,U,f),e(U,hs),e(U,at),e(at,ps),e(U,us),e(U,it),e(it,fs),e(U,ms),e(U,dt),e(dt,_s),e(U,gs),g(t,tr,f),g(t,re,f),e(re,we),e(we,on),y(ct,on,null),e(re,vs),e(re,nn),e(nn,bs),g(t,or,f),g(t,L,f),y(lt,L,null),e(L,ks),e(L,se),e(se,ws),e(se,mo),e(mo,ys),e(se,Ts),e(se,ht),e(ht,$s),e(se,Ws),e(L,xs),e(L,ae),e(ae,Fs),e(ae,_o),e(_o,zs),e(ae,Es),e(ae,go),e(go,qs),e(ae,Ms),e(L,Cs),y(ye,L,null),g(t,nr,f),g(t,ie,f),e(ie,Te),e(Te,rn),y(pt,rn,null),e(ie,Ps),e(ie,sn),e(sn,js),g(t,rr,f),g(t,M,f),y(ut,M,null),e(M,Ss),e(M,an),e(an,As),e(M,Ns),e(M,ft),e(ft,Is),e(ft,vo),e(vo,Ls),e(ft,Ds),e(M,Gs),e(M,bo),y(mt,bo,null),e(M,Os),e(M,$e),y(_t,$e,null),e($e,Vs),e($e,de),e(de,Hs),e(de,dn),e(dn,Rs),e(de,Us),e(de,cn),e(cn,Bs),e(de,Ks),e(M,Js),e(M,X),y(gt,X,null),e(X,Zs),e(X,ko),e(ko,Qs),e(ko,wo),e(wo,Xs),e(X,Ys),e(X,ln),e(ln,ea),e(M,ta),e(M,yo),y(vt,yo,null),g(t,sr,f),g(t,ce,f),e(ce,We),e(We,hn),y(bt,hn,null),e(ce,oa),e(ce,pn),e(pn,na),g(t,ar,f),g(t,S,f),y(kt,S,null),e(S,ra),e(S,un),e(un,sa),e(S,aa),e(S,wt),e(wt,ia),e(wt,To),e(To,da),e(wt,ca),e(S,la),e(S,le),e(le,ha),e(le,fn),e(fn,pa),e(le,ua),e(le,mn),e(mn,fa),e(le,ma),e(S,_a),e(S,xe),y(yt,xe,null),e(xe,ga),e(xe,_n),e(_n,va),g(t,ir,f),g(t,he,f),e(he,Fe),e(Fe,gn),y(Tt,gn,null),e(he,ba),e(he,vn),e(vn,ka),g(t,dr,f),g(t,q,f),y($t,q,null),e(q,wa),e(q,bn),e(bn,ya),e(q,Ta),e(q,N),e(N,$o),e($o,$a),e(N,Wa),e(N,Wo),e(Wo,xa),e(N,Fa),e(N,xo),e(xo,za),e(N,Ea),e(N,Wt),e(Wt,kn),e(kn,qa),e(Wt,Ma),e(N,Ca),e(N,Fo),e(Fo,Pa),e(N,ja),e(q,Sa),e(q,ze),y(xt,ze,null),e(ze,Aa),e(ze,D),e(D,Na),e(D,wn),e(wn,Ia),e(D,La),e(D,Ft),e(Ft,yn),e(yn,Da),e(Ft,Ga),e(D,Oa),e(D,Tn),e(Tn,Va),e(D,Ha),e(D,zt),e(zt,$n),e($n,Ra),e(zt,Ua),e(D,Ba),e(q,Ka),e(q,Y),y(Et,Y,null),e(Y,Ja),e(Y,Wn),e(Wn,Za),e(Y,Qa),y(Ee,Y,null),e(q,Xa),e(q,ee),y(qt,ee,null),e(ee,Ya),e(ee,Mt),e(Mt,ei),e(Mt,zo),e(zo,ti),e(Mt,oi),e(ee,ni),y(qe,ee,null),e(q,ri),e(q,Me),y(Ct,Me,null),e(Me,si),e(Me,Pt),e(Pt,ai),e(Pt,Eo),e(Eo,ii),e(Pt,di),e(q,ci),e(q,Ce),y(jt,Ce,null),e(Ce,li),e(Ce,St),e(St,hi),e(St,qo),e(qo,pi),e(St,ui),g(t,cr,f),g(t,pe,f),e(pe,Pe),e(Pe,xn),y(At,xn,null),e(pe,fi),e(pe,Fn),e(Fn,mi),g(t,lr,f),g(t,G,f),y(Nt,G,null),e(G,_i),e(G,It),e(It,gi),e(It,Mo),e(Mo,vi),e(It,bi),e(G,ki),e(G,Lt),e(Lt,wi),e(Lt,Dt),e(Dt,yi),e(Lt,Ti),e(G,$i),e(G,B),y(Gt,B,null),e(B,Wi),e(B,ue),e(ue,xi),e(ue,Co),e(Co,Fi),e(ue,zi),e(ue,zn),e(zn,Ei),e(ue,qi),e(B,Mi),y(je,B,null),e(B,Ci),y(Se,B,null),g(t,hr,f),g(t,fe,f),e(fe,Ae),e(Ae,En),y(Ot,En,null),e(fe,Pi),e(fe,qn),e(qn,ji),g(t,pr,f),g(t,O,f),y(Vt,O,null),e(O,Si),e(O,Ht),e(Ht,Ai),e(Ht,Po),e(Po,Ni),e(Ht,Ii),e(O,Li),e(O,Rt),e(Rt,Di),e(Rt,Ut),e(Ut,Gi),e(Rt,Oi),e(O,Vi),e(O,K),y(Bt,K,null),e(K,Hi),e(K,me),e(me,Ri),e(me,jo),e(jo,Ui),e(me,Bi),e(me,Mn),e(Mn,Ki),e(me,Ji),e(K,Zi),y(Ne,K,null),e(K,Qi),y(Ie,K,null),g(t,ur,f),g(t,_e,f),e(_e,Le),e(Le,Cn),y(Kt,Cn,null),e(_e,Xi),e(_e,Pn),e(Pn,Yi),g(t,fr,f),g(t,V,f),y(Jt,V,null),e(V,ed),e(V,Zt),e(Zt,td),e(Zt,So),e(So,od),e(Zt,nd),e(V,rd),e(V,Qt),e(Qt,sd),e(Qt,Xt),e(Xt,ad),e(Qt,id),e(V,dd),e(V,J),y(Yt,J,null),e(J,cd),e(J,ge),e(ge,ld),e(ge,Ao),e(Ao,hd),e(ge,pd),e(ge,jn),e(jn,ud),e(ge,fd),e(J,md),y(De,J,null),e(J,_d),y(Ge,J,null),g(t,mr,f),g(t,ve,f),e(ve,Oe),e(Oe,Sn),y(eo,Sn,null),e(ve,gd),e(ve,An),e(An,vd),g(t,_r,f),g(t,H,f),y(to,H,null),e(H,bd),e(H,oo),e(oo,kd),e(oo,No),e(No,wd),e(oo,yd),e(H,Td),e(H,no),e(no,$d),e(no,ro),e(ro,Wd),e(no,xd),e(H,Fd),e(H,Z),y(so,Z,null),e(Z,zd),e(Z,be),e(be,Ed),e(be,Io),e(Io,qd),e(be,Md),e(be,Nn),e(Nn,Cd),e(be,Pd),e(Z,jd),y(Ve,Z,null),e(Z,Sd),y(He,Z,null),gr=!0},p(t,[f]){const ao={};f&2&&(ao.$$scope={dirty:f,ctx:t}),ye.$set(ao);const In={};f&2&&(In.$$scope={dirty:f,ctx:t}),Ee.$set(In);const Ln={};f&2&&(Ln.$$scope={dirty:f,ctx:t}),qe.$set(Ln);const Dn={};f&2&&(Dn.$$scope={dirty:f,ctx:t}),je.$set(Dn);const io={};f&2&&(io.$$scope={dirty:f,ctx:t}),Se.$set(io);const Gn={};f&2&&(Gn.$$scope={dirty:f,ctx:t}),Ne.$set(Gn);const On={};f&2&&(On.$$scope={dirty:f,ctx:t}),Ie.$set(On);const Vn={};f&2&&(Vn.$$scope={dirty:f,ctx:t}),De.$set(Vn);const co={};f&2&&(co.$$scope={dirty:f,ctx:t}),Ge.$set(co);const Hn={};f&2&&(Hn.$$scope={dirty:f,ctx:t}),Ve.$set(Hn);const Rn={};f&2&&(Rn.$$scope={dirty:f,ctx:t}),He.$set(Rn)},i(t){gr||(T(d.$$.fragment,t),T(ot.$$.fragment,t),T(ct.$$.fragment,t),T(lt.$$.fragment,t),T(ye.$$.fragment,t),T(pt.$$.fragment,t),T(ut.$$.fragment,t),T(mt.$$.fragment,t),T(_t.$$.fragment,t),T(gt.$$.fragment,t),T(vt.$$.fragment,t),T(bt.$$.fragment,t),T(kt.$$.fragment,t),T(yt.$$.fragment,t),T(Tt.$$.fragment,t),T($t.$$.fragment,t),T(xt.$$.fragment,t),T(Et.$$.fragment,t),T(Ee.$$.fragment,t),T(qt.$$.fragment,t),T(qe.$$.fragment,t),T(Ct.$$.fragment,t),T(jt.$$.fragment,t),T(At.$$.fragment,t),T(Nt.$$.fragment,t),T(Gt.$$.fragment,t),T(je.$$.fragment,t),T(Se.$$.fragment,t),T(Ot.$$.fragment,t),T(Vt.$$.fragment,t),T(Bt.$$.fragment,t),T(Ne.$$.fragment,t),T(Ie.$$.fragment,t),T(Kt.$$.fragment,t),T(Jt.$$.fragment,t),T(Yt.$$.fragment,t),T(De.$$.fragment,t),T(Ge.$$.fragment,t),T(eo.$$.fragment,t),T(to.$$.fragment,t),T(so.$$.fragment,t),T(Ve.$$.fragment,t),T(He.$$.fragment,t),gr=!0)},o(t){$(d.$$.fragment,t),$(ot.$$.fragment,t),$(ct.$$.fragment,t),$(lt.$$.fragment,t),$(ye.$$.fragment,t),$(pt.$$.fragment,t),$(ut.$$.fragment,t),$(mt.$$.fragment,t),$(_t.$$.fragment,t),$(gt.$$.fragment,t),$(vt.$$.fragment,t),$(bt.$$.fragment,t),$(kt.$$.fragment,t),$(yt.$$.fragment,t),$(Tt.$$.fragment,t),$($t.$$.fragment,t),$(xt.$$.fragment,t),$(Et.$$.fragment,t),$(Ee.$$.fragment,t),$(qt.$$.fragment,t),$(qe.$$.fragment,t),$(Ct.$$.fragment,t),$(jt.$$.fragment,t),$(At.$$.fragment,t),$(Nt.$$.fragment,t),$(Gt.$$.fragment,t),$(je.$$.fragment,t),$(Se.$$.fragment,t),$(Ot.$$.fragment,t),$(Vt.$$.fragment,t),$(Bt.$$.fragment,t),$(Ne.$$.fragment,t),$(Ie.$$.fragment,t),$(Kt.$$.fragment,t),$(Jt.$$.fragment,t),$(Yt.$$.fragment,t),$(De.$$.fragment,t),$(Ge.$$.fragment,t),$(eo.$$.fragment,t),$(to.$$.fragment,t),$(so.$$.fragment,t),$(Ve.$$.fragment,t),$(He.$$.fragment,t),gr=!1},d(t){o(l),t&&o(b),t&&o(m),W(d),t&&o(z),t&&o(j),W(ot),t&&o(Jn),t&&o(ke),t&&o(Zn),t&&o(lo),t&&o(Qn),t&&o(ho),t&&o(Xn),t&&o(po),t&&o(Yn),t&&o(R),t&&o(er),t&&o(U),t&&o(tr),t&&o(re),W(ct),t&&o(or),t&&o(L),W(lt),W(ye),t&&o(nr),t&&o(ie),W(pt),t&&o(rr),t&&o(M),W(ut),W(mt),W(_t),W(gt),W(vt),t&&o(sr),t&&o(ce),W(bt),t&&o(ar),t&&o(S),W(kt),W(yt),t&&o(ir),t&&o(he),W(Tt),t&&o(dr),t&&o(q),W($t),W(xt),W(Et),W(Ee),W(qt),W(qe),W(Ct),W(jt),t&&o(cr),t&&o(pe),W(At),t&&o(lr),t&&o(G),W(Nt),W(Gt),W(je),W(Se),t&&o(hr),t&&o(fe),W(Ot),t&&o(pr),t&&o(O),W(Vt),W(Bt),W(Ne),W(Ie),t&&o(ur),t&&o(_e),W(Kt),t&&o(fr),t&&o(V),W(Jt),W(Yt),W(De),W(Ge),t&&o(mr),t&&o(ve),W(eo),t&&o(_r),t&&o(H),W(to),W(so),W(Ve),W(He)}}}const ql={local:"whisper",sections:[{local:"overview",title:"Overview"},{local:"transformers.WhisperConfig",title:"WhisperConfig"},{local:"transformers.WhisperTokenizer",title:"WhisperTokenizer"},{local:"transformers.WhisperFeatureExtractor",title:"WhisperFeatureExtractor"},{local:"transformers.WhisperProcessor",title:"WhisperProcessor"},{local:"transformers.WhisperModel",title:"WhisperModel"},{local:"transformers.WhisperForConditionalGeneration",title:"WhisperForConditionalGeneration"},{local:"transformers.TFWhisperModel",title:"TFWhisperModel"},{local:"transformers.TFWhisperForConditionalGeneration",title:"TFWhisperForConditionalGeneration"}],title:"Whisper"};function Ml(F){return gl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Il extends ul{constructor(l){super();fl(this,l,Ml,El,ml,{})}}export{Il as default,ql as metadata};
