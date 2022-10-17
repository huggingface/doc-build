import{S as cl,i as ll,s as hl,e as n,k as h,w as k,t as a,M as pl,c as r,d as o,m as p,a as s,x as w,h as i,b as c,G as e,g,y,q as T,o as $,B as W,v as ml,L as Un}from"../../chunks/vendor-hf-doc-builder.js";import{T as Zo}from"../../chunks/Tip-hf-doc-builder.js";import{D as E}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Bn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as oe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Rn}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ul(F){let l,b,f,_,v;return _=new Bn({props:{code:`from transformers import WhisperConfig, WhisperModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(_,d,m),v=!0},p:Un,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function fl(F){let l,b,f,_,v,d,m,x;return{c(){l=n("p"),b=a(`This class method is simply calling the feature extractor
`),f=n("a"),_=a("from_pretrained()"),v=a(` and the tokenizer
`),d=n("code"),m=a("~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),x=a(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(C){l=r(C,"P",{});var z=s(l);b=i(z,`This class method is simply calling the feature extractor
`),f=r(z,"A",{href:!0});var j=s(f);_=i(j,"from_pretrained()"),j.forEach(o),v=i(z,` and the tokenizer
`),d=r(z,"CODE",{});var A=s(d);m=i(A,"~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),A.forEach(o),x=i(z,` methods. Please refer to the docstrings of the
methods above for more information.`),z.forEach(o),this.h()},h(){c(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(C,z){g(C,l,z),e(l,b),e(l,f),e(f,_),e(l,v),e(l,d),e(d,m),e(l,x)},d(C){C&&o(l)}}}function _l(F){let l,b,f,_,v,d,m,x;return{c(){l=n("p"),b=a("This class method is simply calling "),f=n("a"),_=a("save_pretrained()"),v=a(` and
`),d=n("code"),m=a("~tokenization_utils_base.PreTrainedTokenizer.save_pretrained"),x=a(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(C){l=r(C,"P",{});var z=s(l);b=i(z,"This class method is simply calling "),f=r(z,"A",{href:!0});var j=s(f);_=i(j,"save_pretrained()"),j.forEach(o),v=i(z,` and
`),d=r(z,"CODE",{});var A=s(d);m=i(A,"~tokenization_utils_base.PreTrainedTokenizer.save_pretrained"),A.forEach(o),x=i(z,`. Please refer to the docstrings of the methods
above for more information.`),z.forEach(o),this.h()},h(){c(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(C,z){g(C,l,z),e(l,b),e(l,f),e(f,_),e(l,v),e(l,d),e(d,m),e(l,x)},d(C){C&&o(l)}}}function gl(F){let l,b,f,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(d,m){g(d,l,m),e(l,b),e(l,f),e(f,_),e(l,v)},d(d){d&&o(l)}}}function vl(F){let l,b,f,_,v;return _=new Bn({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(_,d,m),v=!0},p:Un,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function bl(F){let l,b,f,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(d,m){g(d,l,m),e(l,b),e(l,f),e(f,_),e(l,v)},d(d){d&&o(l)}}}function kl(F){let l,b,f,_,v;return _=new Bn({props:{code:`import torch
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(_,d,m),v=!0},p:Un,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function wl(F){let l,b,f,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(d,m){g(d,l,m),e(l,b),e(l,f),e(f,_),e(l,v)},d(d){d&&o(l)}}}function yl(F){let l,b,f,_,v;return _=new Bn({props:{code:`import tensorflow as tf
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(_,d,m),v=!0},p:Un,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function Tl(F){let l,b,f,_,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var x=s(f);_=i(x,"Module"),x.forEach(o),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(d,m){g(d,l,m),e(l,b),e(l,f),e(f,_),e(l,v)},d(d){d&&o(l)}}}function $l(F){let l,b,f,_,v;return _=new Bn({props:{code:`import tensorflow as tf
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(_.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(_.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(_,d,m),v=!0},p:Un,i(d){v||(T(_.$$.fragment,d),v=!0)},o(d){$(_.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(_,d)}}}function Wl(F){let l,b,f,_,v,d,m,x,C,z,j,A,Qo,ot,Rr,Xo,Ur,Kn,be,Br,nt,Kr,Jr,Jn,lo,Zr,Zn,ho,Yo,Qr,Qn,po,Xr,Xn,H,en,Yr,es,rt,ts,mo,os,ns,rs,tn,ss,as,st,is,uo,ds,cs,Yn,R,ls,at,hs,ps,it,ms,us,dt,fs,_s,er,ne,ke,on,ct,gs,nn,vs,tr,L,lt,bs,re,ks,fo,ws,ys,ht,Ts,$s,Ws,se,xs,_o,Fs,zs,go,Es,qs,Ms,we,or,ae,ye,rn,pt,Ps,sn,Cs,nr,M,mt,js,an,Ss,As,ut,Ns,vo,Is,Ls,Ds,bo,ft,Gs,Te,_t,Os,ie,Vs,dn,Hs,Rs,cn,Us,Bs,Ks,X,gt,Js,ko,Zs,wo,Qs,Xs,ln,Ys,ea,yo,vt,rr,de,$e,hn,bt,ta,pn,oa,sr,S,kt,na,mn,ra,sa,wt,aa,To,ia,da,ca,ce,la,un,ha,pa,fn,ma,ua,fa,We,yt,_a,_n,ga,ar,le,xe,gn,Tt,va,vn,ba,ir,q,$t,ka,bn,wa,ya,N,$o,Ta,$a,Wo,Wa,xa,xo,Fa,za,Wt,kn,Ea,qa,Ma,Fo,Pa,Ca,ja,Fe,xt,Sa,Z,Aa,Ft,wn,Na,Ia,La,yn,Da,Ga,zt,Tn,Oa,Va,Ha,Ra,Y,Et,Ua,$n,Ba,Ka,ze,Ja,ee,qt,Za,Mt,Qa,zo,Xa,Ya,ei,Ee,ti,qe,Pt,oi,Ct,ni,Eo,ri,si,ai,Me,jt,ii,St,di,qo,ci,li,dr,he,Pe,Wn,At,hi,xn,pi,cr,D,Nt,mi,It,ui,Mo,fi,_i,gi,Lt,vi,Dt,bi,ki,wi,U,Gt,yi,pe,Ti,Po,$i,Wi,Fn,xi,Fi,zi,Ce,Ei,je,lr,me,Se,zn,Ot,qi,En,Mi,hr,G,Vt,Pi,Ht,Ci,Co,ji,Si,Ai,Rt,Ni,Ut,Ii,Li,Di,B,Bt,Gi,ue,Oi,jo,Vi,Hi,qn,Ri,Ui,Bi,Ae,Ki,Ne,pr,fe,Ie,Mn,Kt,Ji,Pn,Zi,mr,O,Jt,Qi,Zt,Xi,So,Yi,ed,td,Qt,od,Xt,nd,rd,sd,K,Yt,ad,_e,id,Ao,dd,cd,Cn,ld,hd,pd,Le,md,De,ur,ge,Ge,jn,eo,ud,Sn,fd,fr,V,to,_d,oo,gd,No,vd,bd,kd,no,wd,ro,yd,Td,$d,J,so,Wd,ve,xd,Io,Fd,zd,An,Ed,qd,Md,Oe,Pd,Ve,_r;return d=new oe({}),ot=new oe({}),ct=new oe({}),lt=new E({props:{name:"class transformers.WhisperConfig",anchor:"transformers.WhisperConfig",parameters:[{name:"vocab_size",val:" = 51865"},{name:"num_mel_bins",val:" = 80"},{name:"encoder_layers",val:" = 6"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_ffn_dim",val:" = 1536"},{name:"encoder_ffn_dim",val:" = 1536"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 50257"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"max_source_positions",val:" = 1500"},{name:"max_target_positions",val:" = 448"},{name:"pad_token_id",val:" = 50256"},{name:"bos_token_id",val:" = 50257"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = True"},{name:"suppress_tokens",val:" = None"},{name:"begin_suppress_tokens",val:" = [220, 50256]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 51865) &#x2014;
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
the token for <code>&quot; &quot;</code> (<code>blank_token_id</code>) and the <code>eos_token_id</code>`,name:"begin_suppress_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/configuration_whisper.py#L53"}}),we=new Rn({props:{anchor:"transformers.WhisperConfig.example",$$slots:{default:[ul]},$$scope:{ctx:F}}}),pt=new oe({}),mt=new E({props:{name:"class transformers.WhisperTokenizer",anchor:"transformers.WhisperTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
any other word.`,name:"add_bos_token"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L92"}}),ft=new E({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L235"}}),_t=new E({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L249",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gt=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2986",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vt=new E({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L349"}}),bt=new oe({}),kt=new E({props:{name:"class transformers.WhisperFeatureExtractor",anchor:"transformers.WhisperFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"hop_length",val:" = 160"},{name:"chunk_length",val:" = 30"},{name:"n_fft",val:" = 400"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.WhisperFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 160) &#x2014;
Length of the overlaping windows for the STFT used to obtain the Mel Frequency coefficients.`,name:"hop_length"},{anchor:"transformers.WhisperFeatureExtractor.chunk_length",description:`<strong>chunk_length</strong> (<code>int</code>, defaults to 30) &#x2014;
The maximum number of chuncks of <code>sampling_rate</code> samples used to trim and pad longer or shorter audio
sequences.`,name:"chunk_length"},{anchor:"transformers.WhisperFeatureExtractor.n_fft",description:`<strong>n_fft</strong> (<code>int</code>, defaults to 400) &#x2014;
Size of the Fourier transform.`,name:"n_fft"},{anchor:"transformers.WhisperFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Padding value used to pad the audio. Should correspond to silences.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L32"}}),yt=new E({props:{name:"__call__",anchor:"transformers.WhisperFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"truncation",val:": bool = True"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"padding",val:": typing.Optional[str] = 'max_length'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
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
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L218"}}),Tt=new oe({}),$t=new E({props:{name:"class transformers.WhisperProcessor",anchor:"transformers.WhisperProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>WhisperFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.WhisperProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>WhisperTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L22"}}),xt=new E({props:{name:"__call__",anchor:"transformers.WhisperProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L77"}}),Et=new E({props:{name:"from_pretrained",anchor:"transformers.WhisperProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L152"}}),ze=new Zo({props:{$$slots:{default:[fl]},$$scope:{ctx:F}}}),qt=new E({props:{name:"save_pretrained",anchor:"transformers.WhisperProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.WhisperProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94"}}),Ee=new Zo({props:{$$slots:{default:[_l]},$$scope:{ctx:F}}}),Pt=new E({props:{name:"batch_decode",anchor:"transformers.WhisperProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L112"}}),jt=new E({props:{name:"decode",anchor:"transformers.WhisperProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L119"}}),At=new oe({}),Nt=new E({props:{name:"class transformers.WhisperModel",anchor:"transformers.WhisperModel",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L969"}}),Gt=new E({props:{name:"forward",anchor:"transformers.WhisperModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L999",returnDescription:`
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
`}}),Ce=new Zo({props:{$$slots:{default:[gl]},$$scope:{ctx:F}}}),je=new Rn({props:{anchor:"transformers.WhisperModel.forward.example",$$slots:{default:[vl]},$$scope:{ctx:F}}}),Ot=new oe({}),Vt=new E({props:{name:"class transformers.WhisperForConditionalGeneration",anchor:"transformers.WhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1093"}}),Bt=new E({props:{name:"forward",anchor:"transformers.WhisperForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values mel features extracted from the raw speech waveform. Raw speech waveform can be obtained by
loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em> via
the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the mel features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.WhisperForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1135",returnDescription:`
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
`}}),Ae=new Zo({props:{$$slots:{default:[bl]},$$scope:{ctx:F}}}),Ne=new Rn({props:{anchor:"transformers.WhisperForConditionalGeneration.forward.example",$$slots:{default:[kl]},$$scope:{ctx:F}}}),Kt=new oe({}),Jt=new E({props:{name:"class transformers.TFWhisperModel",anchor:"transformers.TFWhisperModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1103"}}),Yt=new E({props:{name:"call",anchor:"transformers.TFWhisperModel.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Le=new Zo({props:{$$slots:{default:[wl]},$$scope:{ctx:F}}}),De=new Rn({props:{anchor:"transformers.TFWhisperModel.call.example",$$slots:{default:[yl]},$$scope:{ctx:F}}}),eo=new oe({}),to=new E({props:{name:"class transformers.TFWhisperForConditionalGeneration",anchor:"transformers.TFWhisperForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1211"}}),so=new E({props:{name:"call",anchor:"transformers.TFWhisperForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>tf.Tensor</code>. See <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFWhisperForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Oe=new Zo({props:{$$slots:{default:[Tl]},$$scope:{ctx:F}}}),Ve=new Rn({props:{anchor:"transformers.TFWhisperForConditionalGeneration.call.example",$$slots:{default:[$l]},$$scope:{ctx:F}}}),{c(){l=n("meta"),b=h(),f=n("h1"),_=n("a"),v=n("span"),k(d.$$.fragment),m=h(),x=n("span"),C=a("Whisper"),z=h(),j=n("h2"),A=n("a"),Qo=n("span"),k(ot.$$.fragment),Rr=h(),Xo=n("span"),Ur=a("Overview"),Kn=h(),be=n("p"),Br=a("The Whisper model was proposed in "),nt=n("a"),Kr=a("Robust Speech Recognition via Large-Scale Weak Supervision"),Jr=a(" by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),Jn=h(),lo=n("p"),Zr=a("The abstract from the paper is the following:"),Zn=h(),ho=n("p"),Yo=n("em"),Qr=a("We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Qn=h(),po=n("p"),Xr=a("Tips:"),Xn=h(),H=n("ul"),en=n("li"),Yr=a("The model usually performs well without requiring any finetuning."),es=h(),rt=n("li"),ts=a("The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),mo=n("a"),os=a("generate()"),ns=a(" function for inference."),rs=h(),tn=n("li"),ss=a("Inference is currently only implemented for short-form i.e. audio is pre-segmented into <=30s segments. Long-form (including timestamps) will be implemented in a future release."),as=h(),st=n("li"),is=a("One can use "),uo=n("a"),ds=a("WhisperProcessor"),cs=a(" to prepare audio for the model, and decode the predicted ID\u2019s back into text."),Yn=h(),R=n("p"),ls=a("This model was contributed by "),at=n("a"),hs=a("Arthur Zucker"),ps=a(". The Tensorflow version of this model was contributed by "),it=n("a"),ms=a("amyeroberts"),us=a(`.
The original code can be found `),dt=n("a"),fs=a("here"),_s=a("."),er=h(),ne=n("h2"),ke=n("a"),on=n("span"),k(ct.$$.fragment),gs=h(),nn=n("span"),vs=a("WhisperConfig"),tr=h(),L=n("div"),k(lt.$$.fragment),bs=h(),re=n("p"),ks=a("This is the configuration class to store the configuration of a "),fo=n("a"),ws=a("WhisperModel"),ys=a(`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),ht=n("a"),Ts=a("openai/whisper-tiny"),$s=a(" architecture."),Ws=h(),se=n("p"),xs=a("Configuration objects inherit from "),_o=n("a"),Fs=a("PretrainedConfig"),zs=a(` and can be used to control the model outputs. Read the
documentation from `),go=n("a"),Es=a("PretrainedConfig"),qs=a(" for more information."),Ms=h(),k(we.$$.fragment),or=h(),ae=n("h2"),ye=n("a"),rn=n("span"),k(pt.$$.fragment),Ps=h(),sn=n("span"),Cs=a("WhisperTokenizer"),nr=h(),M=n("div"),k(mt.$$.fragment),js=h(),an=n("p"),Ss=a("Construct an Whisper tokenizer."),As=h(),ut=n("p"),Ns=a("This tokenizer inherits from "),vo=n("a"),Is=a("PreTrainedTokenizer"),Ls=a(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Ds=h(),bo=n("div"),k(ft.$$.fragment),Gs=h(),Te=n("div"),k(_t.$$.fragment),Os=h(),ie=n("p"),Vs=a(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dn=n("code"),Hs=a("prepare_for_model"),Rs=a(" or "),cn=n("code"),Us=a("encode_plus"),Bs=a(" methods."),Ks=h(),X=n("div"),k(gt.$$.fragment),Js=h(),ko=n("p"),Zs=a("Create the token type IDs corresponding to the sequences passed. "),wo=n("a"),Qs=a(`What are token type
IDs?`),Xs=h(),ln=n("p"),Ys=a("Should be overridden in a subclass if the model has a special way of building those."),ea=h(),yo=n("div"),k(vt.$$.fragment),rr=h(),de=n("h2"),$e=n("a"),hn=n("span"),k(bt.$$.fragment),ta=h(),pn=n("span"),oa=a("WhisperFeatureExtractor"),sr=h(),S=n("div"),k(kt.$$.fragment),na=h(),mn=n("p"),ra=a("Constructs a Whisper feature extractor."),sa=h(),wt=n("p"),aa=a("This feature extractor inherits from "),To=n("a"),ia=a("WhisperFeatureExtractor"),da=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ca=h(),ce=n("p"),la=a("This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),un=n("code"),ha=a("Short Time Fourier Transform"),pa=a(" which should match pytorch\u2019s "),fn=n("code"),ma=a("torch.stft"),ua=a(" equivalent."),fa=h(),We=n("div"),k(yt.$$.fragment),_a=h(),_n=n("p"),ga=a("Main method to featurize and prepare for the model one or several sequence(s)."),ar=h(),le=n("h2"),xe=n("a"),gn=n("span"),k(Tt.$$.fragment),va=h(),vn=n("span"),ba=a("WhisperProcessor"),ir=h(),q=n("div"),k($t.$$.fragment),ka=h(),bn=n("p"),wa=a(`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),ya=h(),N=n("p"),$o=n("a"),Ta=a("WhisperProcessor"),$a=a(" offers all the functionalities of "),Wo=n("a"),Wa=a("WhisperFeatureExtractor"),xa=a(" and "),xo=n("a"),Fa=a("WhisperTokenizer"),za=a(`. See
the `),Wt=n("a"),kn=n("strong"),Ea=a("call"),qa=a("()"),Ma=a(" and "),Fo=n("a"),Pa=a("decode()"),Ca=a(" for more information."),ja=h(),Fe=n("div"),k(xt.$$.fragment),Sa=h(),Z=n("p"),Aa=a(`When used in normal mode, this method forwards all its arguments to WhisperFeatureExtractor\u2019s
`),Ft=n("a"),wn=n("strong"),Na=a("call"),Ia=a("()"),La=a(` and returns its output. If used in the context
`),yn=n("code"),Da=a("~WhisperProcessor.as_target_processor"),Ga=a(` this method forwards all its arguments to WhisperTokenizer\u2019s
`),zt=n("a"),Tn=n("strong"),Oa=a("call"),Va=a("()"),Ha=a(". Please refer to the doctsring of the above two methods for more information."),Ra=h(),Y=n("div"),k(Et.$$.fragment),Ua=h(),$n=n("p"),Ba=a("Instantiate a processor associated with a pretrained model."),Ka=h(),k(ze.$$.fragment),Ja=h(),ee=n("div"),k(qt.$$.fragment),Za=h(),Mt=n("p"),Qa=a(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zo=n("a"),Xa=a("from_pretrained()"),Ya=a(" method."),ei=h(),k(Ee.$$.fragment),ti=h(),qe=n("div"),k(Pt.$$.fragment),oi=h(),Ct=n("p"),ni=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),Eo=n("a"),ri=a("batch_decode()"),si=a(`. Please
refer to the docstring of this method for more information.`),ai=h(),Me=n("div"),k(jt.$$.fragment),ii=h(),St=n("p"),di=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),qo=n("a"),ci=a("decode()"),li=a(`. Please refer to
the docstring of this method for more information.`),dr=h(),he=n("h2"),Pe=n("a"),Wn=n("span"),k(At.$$.fragment),hi=h(),xn=n("span"),pi=a("WhisperModel"),cr=h(),D=n("div"),k(Nt.$$.fragment),mi=h(),It=n("p"),ui=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mo=n("a"),fi=a("PreTrainedModel"),_i=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gi=h(),Lt=n("p"),vi=a("This model is also a PyTorch "),Dt=n("a"),bi=a("torch.nn.Module"),ki=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wi=h(),U=n("div"),k(Gt.$$.fragment),yi=h(),pe=n("p"),Ti=a("The "),Po=n("a"),$i=a("WhisperModel"),Wi=a(" forward method, overrides the "),Fn=n("code"),xi=a("__call__"),Fi=a(" special method."),zi=h(),k(Ce.$$.fragment),Ei=h(),k(je.$$.fragment),lr=h(),me=n("h2"),Se=n("a"),zn=n("span"),k(Ot.$$.fragment),qi=h(),En=n("span"),Mi=a("WhisperForConditionalGeneration"),hr=h(),G=n("div"),k(Vt.$$.fragment),Pi=h(),Ht=n("p"),Ci=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Co=n("a"),ji=a("PreTrainedModel"),Si=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ai=h(),Rt=n("p"),Ni=a("This model is also a PyTorch "),Ut=n("a"),Ii=a("torch.nn.Module"),Li=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Di=h(),B=n("div"),k(Bt.$$.fragment),Gi=h(),ue=n("p"),Oi=a("The "),jo=n("a"),Vi=a("WhisperForConditionalGeneration"),Hi=a(" forward method, overrides the "),qn=n("code"),Ri=a("__call__"),Ui=a(" special method."),Bi=h(),k(Ae.$$.fragment),Ki=h(),k(Ne.$$.fragment),pr=h(),fe=n("h2"),Ie=n("a"),Mn=n("span"),k(Kt.$$.fragment),Ji=h(),Pn=n("span"),Zi=a("TFWhisperModel"),mr=h(),O=n("div"),k(Jt.$$.fragment),Qi=h(),Zt=n("p"),Xi=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),So=n("a"),Yi=a("TFPreTrainedModel"),ed=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td=h(),Qt=n("p"),od=a("This model is also a "),Xt=n("a"),nd=a("tf.keras.Model"),rd=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sd=h(),K=n("div"),k(Yt.$$.fragment),ad=h(),_e=n("p"),id=a("The "),Ao=n("a"),dd=a("TFWhisperModel"),cd=a(" forward method, overrides the "),Cn=n("code"),ld=a("__call__"),hd=a(" special method."),pd=h(),k(Le.$$.fragment),md=h(),k(De.$$.fragment),ur=h(),ge=n("h2"),Ge=n("a"),jn=n("span"),k(eo.$$.fragment),ud=h(),Sn=n("span"),fd=a("TFWhisperForConditionalGeneration"),fr=h(),V=n("div"),k(to.$$.fragment),_d=h(),oo=n("p"),gd=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),No=n("a"),vd=a("TFPreTrainedModel"),bd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kd=h(),no=n("p"),wd=a("This model is also a "),ro=n("a"),yd=a("tf.keras.Model"),Td=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$d=h(),J=n("div"),k(so.$$.fragment),Wd=h(),ve=n("p"),xd=a("The "),Io=n("a"),Fd=a("TFWhisperForConditionalGeneration"),zd=a(" forward method, overrides the "),An=n("code"),Ed=a("__call__"),qd=a(" special method."),Md=h(),k(Oe.$$.fragment),Pd=h(),k(Ve.$$.fragment),this.h()},l(t){const u=pl('[data-svelte="svelte-1phssyn"]',document.head);l=r(u,"META",{name:!0,content:!0}),u.forEach(o),b=p(t),f=r(t,"H1",{class:!0});var ao=s(f);_=r(ao,"A",{id:!0,class:!0,href:!0});var Nn=s(_);v=r(Nn,"SPAN",{});var In=s(v);w(d.$$.fragment,In),In.forEach(o),Nn.forEach(o),m=p(ao),x=r(ao,"SPAN",{});var Ln=s(x);C=i(Ln,"Whisper"),Ln.forEach(o),ao.forEach(o),z=p(t),j=r(t,"H2",{class:!0});var io=s(j);A=r(io,"A",{id:!0,class:!0,href:!0});var Dn=s(A);Qo=r(Dn,"SPAN",{});var Gn=s(Qo);w(ot.$$.fragment,Gn),Gn.forEach(o),Dn.forEach(o),Rr=p(io),Xo=r(io,"SPAN",{});var On=s(Xo);Ur=i(On,"Overview"),On.forEach(o),io.forEach(o),Kn=p(t),be=r(t,"P",{});var co=s(be);Br=i(co,"The Whisper model was proposed in "),nt=r(co,"A",{href:!0,rel:!0});var Vn=s(nt);Kr=i(Vn,"Robust Speech Recognition via Large-Scale Weak Supervision"),Vn.forEach(o),Jr=i(co," by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),co.forEach(o),Jn=p(t),lo=r(t,"P",{});var Hn=s(lo);Zr=i(Hn,"The abstract from the paper is the following:"),Hn.forEach(o),Zn=p(t),ho=r(t,"P",{});var Nd=s(ho);Yo=r(Nd,"EM",{});var Id=s(Yo);Qr=i(Id,"We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Id.forEach(o),Nd.forEach(o),Qn=p(t),po=r(t,"P",{});var Ld=s(po);Xr=i(Ld,"Tips:"),Ld.forEach(o),Xn=p(t),H=r(t,"UL",{});var He=s(H);en=r(He,"LI",{});var Dd=s(en);Yr=i(Dd,"The model usually performs well without requiring any finetuning."),Dd.forEach(o),es=p(He),rt=r(He,"LI",{});var gr=s(rt);ts=i(gr,"The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),mo=r(gr,"A",{href:!0});var Gd=s(mo);os=i(Gd,"generate()"),Gd.forEach(o),ns=i(gr," function for inference."),gr.forEach(o),rs=p(He),tn=r(He,"LI",{});var Od=s(tn);ss=i(Od,"Inference is currently only implemented for short-form i.e. audio is pre-segmented into <=30s segments. Long-form (including timestamps) will be implemented in a future release."),Od.forEach(o),as=p(He),st=r(He,"LI",{});var vr=s(st);is=i(vr,"One can use "),uo=r(vr,"A",{href:!0});var Vd=s(uo);ds=i(Vd,"WhisperProcessor"),Vd.forEach(o),cs=i(vr," to prepare audio for the model, and decode the predicted ID\u2019s back into text."),vr.forEach(o),He.forEach(o),Yn=p(t),R=r(t,"P",{});var Re=s(R);ls=i(Re,"This model was contributed by "),at=r(Re,"A",{href:!0,rel:!0});var Hd=s(at);hs=i(Hd,"Arthur Zucker"),Hd.forEach(o),ps=i(Re,". The Tensorflow version of this model was contributed by "),it=r(Re,"A",{href:!0,rel:!0});var Rd=s(it);ms=i(Rd,"amyeroberts"),Rd.forEach(o),us=i(Re,`.
The original code can be found `),dt=r(Re,"A",{href:!0,rel:!0});var Ud=s(dt);fs=i(Ud,"here"),Ud.forEach(o),_s=i(Re,"."),Re.forEach(o),er=p(t),ne=r(t,"H2",{class:!0});var br=s(ne);ke=r(br,"A",{id:!0,class:!0,href:!0});var Bd=s(ke);on=r(Bd,"SPAN",{});var Kd=s(on);w(ct.$$.fragment,Kd),Kd.forEach(o),Bd.forEach(o),gs=p(br),nn=r(br,"SPAN",{});var Jd=s(nn);vs=i(Jd,"WhisperConfig"),Jd.forEach(o),br.forEach(o),tr=p(t),L=r(t,"DIV",{class:!0});var Ue=s(L);w(lt.$$.fragment,Ue),bs=p(Ue),re=r(Ue,"P",{});var Lo=s(re);ks=i(Lo,"This is the configuration class to store the configuration of a "),fo=r(Lo,"A",{href:!0});var Zd=s(fo);ws=i(Zd,"WhisperModel"),Zd.forEach(o),ys=i(Lo,`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),ht=r(Lo,"A",{href:!0,rel:!0});var Qd=s(ht);Ts=i(Qd,"openai/whisper-tiny"),Qd.forEach(o),$s=i(Lo," architecture."),Lo.forEach(o),Ws=p(Ue),se=r(Ue,"P",{});var Do=s(se);xs=i(Do,"Configuration objects inherit from "),_o=r(Do,"A",{href:!0});var Xd=s(_o);Fs=i(Xd,"PretrainedConfig"),Xd.forEach(o),zs=i(Do,` and can be used to control the model outputs. Read the
documentation from `),go=r(Do,"A",{href:!0});var Yd=s(go);Es=i(Yd,"PretrainedConfig"),Yd.forEach(o),qs=i(Do," for more information."),Do.forEach(o),Ms=p(Ue),w(we.$$.fragment,Ue),Ue.forEach(o),or=p(t),ae=r(t,"H2",{class:!0});var kr=s(ae);ye=r(kr,"A",{id:!0,class:!0,href:!0});var ec=s(ye);rn=r(ec,"SPAN",{});var tc=s(rn);w(pt.$$.fragment,tc),tc.forEach(o),ec.forEach(o),Ps=p(kr),sn=r(kr,"SPAN",{});var oc=s(sn);Cs=i(oc,"WhisperTokenizer"),oc.forEach(o),kr.forEach(o),nr=p(t),M=r(t,"DIV",{class:!0});var I=s(M);w(mt.$$.fragment,I),js=p(I),an=r(I,"P",{});var nc=s(an);Ss=i(nc,"Construct an Whisper tokenizer."),nc.forEach(o),As=p(I),ut=r(I,"P",{});var wr=s(ut);Ns=i(wr,"This tokenizer inherits from "),vo=r(wr,"A",{href:!0});var rc=s(vo);Is=i(rc,"PreTrainedTokenizer"),rc.forEach(o),Ls=i(wr,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),wr.forEach(o),Ds=p(I),bo=r(I,"DIV",{class:!0});var sc=s(bo);w(ft.$$.fragment,sc),sc.forEach(o),Gs=p(I),Te=r(I,"DIV",{class:!0});var yr=s(Te);w(_t.$$.fragment,yr),Os=p(yr),ie=r(yr,"P",{});var Go=s(ie);Vs=i(Go,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),dn=r(Go,"CODE",{});var ac=s(dn);Hs=i(ac,"prepare_for_model"),ac.forEach(o),Rs=i(Go," or "),cn=r(Go,"CODE",{});var ic=s(cn);Us=i(ic,"encode_plus"),ic.forEach(o),Bs=i(Go," methods."),Go.forEach(o),yr.forEach(o),Ks=p(I),X=r(I,"DIV",{class:!0});var Oo=s(X);w(gt.$$.fragment,Oo),Js=p(Oo),ko=r(Oo,"P",{});var Cd=s(ko);Zs=i(Cd,"Create the token type IDs corresponding to the sequences passed. "),wo=r(Cd,"A",{href:!0});var dc=s(wo);Qs=i(dc,`What are token type
IDs?`),dc.forEach(o),Cd.forEach(o),Xs=p(Oo),ln=r(Oo,"P",{});var cc=s(ln);Ys=i(cc,"Should be overridden in a subclass if the model has a special way of building those."),cc.forEach(o),Oo.forEach(o),ea=p(I),yo=r(I,"DIV",{class:!0});var lc=s(yo);w(vt.$$.fragment,lc),lc.forEach(o),I.forEach(o),rr=p(t),de=r(t,"H2",{class:!0});var Tr=s(de);$e=r(Tr,"A",{id:!0,class:!0,href:!0});var hc=s($e);hn=r(hc,"SPAN",{});var pc=s(hn);w(bt.$$.fragment,pc),pc.forEach(o),hc.forEach(o),ta=p(Tr),pn=r(Tr,"SPAN",{});var mc=s(pn);oa=i(mc,"WhisperFeatureExtractor"),mc.forEach(o),Tr.forEach(o),sr=p(t),S=r(t,"DIV",{class:!0});var te=s(S);w(kt.$$.fragment,te),na=p(te),mn=r(te,"P",{});var uc=s(mn);ra=i(uc,"Constructs a Whisper feature extractor."),uc.forEach(o),sa=p(te),wt=r(te,"P",{});var $r=s(wt);aa=i($r,"This feature extractor inherits from "),To=r($r,"A",{href:!0});var fc=s(To);ia=i(fc,"WhisperFeatureExtractor"),fc.forEach(o),da=i($r,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),$r.forEach(o),ca=p(te),ce=r(te,"P",{});var Vo=s(ce);la=i(Vo,"This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),un=r(Vo,"CODE",{});var _c=s(un);ha=i(_c,"Short Time Fourier Transform"),_c.forEach(o),pa=i(Vo," which should match pytorch\u2019s "),fn=r(Vo,"CODE",{});var gc=s(fn);ma=i(gc,"torch.stft"),gc.forEach(o),ua=i(Vo," equivalent."),Vo.forEach(o),fa=p(te),We=r(te,"DIV",{class:!0});var Wr=s(We);w(yt.$$.fragment,Wr),_a=p(Wr),_n=r(Wr,"P",{});var vc=s(_n);ga=i(vc,"Main method to featurize and prepare for the model one or several sequence(s)."),vc.forEach(o),Wr.forEach(o),te.forEach(o),ar=p(t),le=r(t,"H2",{class:!0});var xr=s(le);xe=r(xr,"A",{id:!0,class:!0,href:!0});var bc=s(xe);gn=r(bc,"SPAN",{});var kc=s(gn);w(Tt.$$.fragment,kc),kc.forEach(o),bc.forEach(o),va=p(xr),vn=r(xr,"SPAN",{});var wc=s(vn);ba=i(wc,"WhisperProcessor"),wc.forEach(o),xr.forEach(o),ir=p(t),q=r(t,"DIV",{class:!0});var P=s(q);w($t.$$.fragment,P),ka=p(P),bn=r(P,"P",{});var yc=s(bn);wa=i(yc,`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),yc.forEach(o),ya=p(P),N=r(P,"P",{});var Q=s(N);$o=r(Q,"A",{href:!0});var Tc=s($o);Ta=i(Tc,"WhisperProcessor"),Tc.forEach(o),$a=i(Q," offers all the functionalities of "),Wo=r(Q,"A",{href:!0});var $c=s(Wo);Wa=i($c,"WhisperFeatureExtractor"),$c.forEach(o),xa=i(Q," and "),xo=r(Q,"A",{href:!0});var Wc=s(xo);Fa=i(Wc,"WhisperTokenizer"),Wc.forEach(o),za=i(Q,`. See
the `),Wt=r(Q,"A",{href:!0});var jd=s(Wt);kn=r(jd,"STRONG",{});var xc=s(kn);Ea=i(xc,"call"),xc.forEach(o),qa=i(jd,"()"),jd.forEach(o),Ma=i(Q," and "),Fo=r(Q,"A",{href:!0});var Fc=s(Fo);Pa=i(Fc,"decode()"),Fc.forEach(o),Ca=i(Q," for more information."),Q.forEach(o),ja=p(P),Fe=r(P,"DIV",{class:!0});var Fr=s(Fe);w(xt.$$.fragment,Fr),Sa=p(Fr),Z=r(Fr,"P",{});var Be=s(Z);Aa=i(Be,`When used in normal mode, this method forwards all its arguments to WhisperFeatureExtractor\u2019s
`),Ft=r(Be,"A",{href:!0});var Sd=s(Ft);wn=r(Sd,"STRONG",{});var zc=s(wn);Na=i(zc,"call"),zc.forEach(o),Ia=i(Sd,"()"),Sd.forEach(o),La=i(Be,` and returns its output. If used in the context
`),yn=r(Be,"CODE",{});var Ec=s(yn);Da=i(Ec,"~WhisperProcessor.as_target_processor"),Ec.forEach(o),Ga=i(Be,` this method forwards all its arguments to WhisperTokenizer\u2019s
`),zt=r(Be,"A",{href:!0});var Ad=s(zt);Tn=r(Ad,"STRONG",{});var qc=s(Tn);Oa=i(qc,"call"),qc.forEach(o),Va=i(Ad,"()"),Ad.forEach(o),Ha=i(Be,". Please refer to the doctsring of the above two methods for more information."),Be.forEach(o),Fr.forEach(o),Ra=p(P),Y=r(P,"DIV",{class:!0});var Ho=s(Y);w(Et.$$.fragment,Ho),Ua=p(Ho),$n=r(Ho,"P",{});var Mc=s($n);Ba=i(Mc,"Instantiate a processor associated with a pretrained model."),Mc.forEach(o),Ka=p(Ho),w(ze.$$.fragment,Ho),Ho.forEach(o),Ja=p(P),ee=r(P,"DIV",{class:!0});var Ro=s(ee);w(qt.$$.fragment,Ro),Za=p(Ro),Mt=r(Ro,"P",{});var zr=s(Mt);Qa=i(zr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zo=r(zr,"A",{href:!0});var Pc=s(zo);Xa=i(Pc,"from_pretrained()"),Pc.forEach(o),Ya=i(zr," method."),zr.forEach(o),ei=p(Ro),w(Ee.$$.fragment,Ro),Ro.forEach(o),ti=p(P),qe=r(P,"DIV",{class:!0});var Er=s(qe);w(Pt.$$.fragment,Er),oi=p(Er),Ct=r(Er,"P",{});var qr=s(Ct);ni=i(qr,"This method forwards all its arguments to WhisperTokenizer\u2019s "),Eo=r(qr,"A",{href:!0});var Cc=s(Eo);ri=i(Cc,"batch_decode()"),Cc.forEach(o),si=i(qr,`. Please
refer to the docstring of this method for more information.`),qr.forEach(o),Er.forEach(o),ai=p(P),Me=r(P,"DIV",{class:!0});var Mr=s(Me);w(jt.$$.fragment,Mr),ii=p(Mr),St=r(Mr,"P",{});var Pr=s(St);di=i(Pr,"This method forwards all its arguments to WhisperTokenizer\u2019s "),qo=r(Pr,"A",{href:!0});var jc=s(qo);ci=i(jc,"decode()"),jc.forEach(o),li=i(Pr,`. Please refer to
the docstring of this method for more information.`),Pr.forEach(o),Mr.forEach(o),P.forEach(o),dr=p(t),he=r(t,"H2",{class:!0});var Cr=s(he);Pe=r(Cr,"A",{id:!0,class:!0,href:!0});var Sc=s(Pe);Wn=r(Sc,"SPAN",{});var Ac=s(Wn);w(At.$$.fragment,Ac),Ac.forEach(o),Sc.forEach(o),hi=p(Cr),xn=r(Cr,"SPAN",{});var Nc=s(xn);pi=i(Nc,"WhisperModel"),Nc.forEach(o),Cr.forEach(o),cr=p(t),D=r(t,"DIV",{class:!0});var Ke=s(D);w(Nt.$$.fragment,Ke),mi=p(Ke),It=r(Ke,"P",{});var jr=s(It);ui=i(jr,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Mo=r(jr,"A",{href:!0});var Ic=s(Mo);fi=i(Ic,"PreTrainedModel"),Ic.forEach(o),_i=i(jr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jr.forEach(o),gi=p(Ke),Lt=r(Ke,"P",{});var Sr=s(Lt);vi=i(Sr,"This model is also a PyTorch "),Dt=r(Sr,"A",{href:!0,rel:!0});var Lc=s(Dt);bi=i(Lc,"torch.nn.Module"),Lc.forEach(o),ki=i(Sr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sr.forEach(o),wi=p(Ke),U=r(Ke,"DIV",{class:!0});var Je=s(U);w(Gt.$$.fragment,Je),yi=p(Je),pe=r(Je,"P",{});var Uo=s(pe);Ti=i(Uo,"The "),Po=r(Uo,"A",{href:!0});var Dc=s(Po);$i=i(Dc,"WhisperModel"),Dc.forEach(o),Wi=i(Uo," forward method, overrides the "),Fn=r(Uo,"CODE",{});var Gc=s(Fn);xi=i(Gc,"__call__"),Gc.forEach(o),Fi=i(Uo," special method."),Uo.forEach(o),zi=p(Je),w(Ce.$$.fragment,Je),Ei=p(Je),w(je.$$.fragment,Je),Je.forEach(o),Ke.forEach(o),lr=p(t),me=r(t,"H2",{class:!0});var Ar=s(me);Se=r(Ar,"A",{id:!0,class:!0,href:!0});var Oc=s(Se);zn=r(Oc,"SPAN",{});var Vc=s(zn);w(Ot.$$.fragment,Vc),Vc.forEach(o),Oc.forEach(o),qi=p(Ar),En=r(Ar,"SPAN",{});var Hc=s(En);Mi=i(Hc,"WhisperForConditionalGeneration"),Hc.forEach(o),Ar.forEach(o),hr=p(t),G=r(t,"DIV",{class:!0});var Ze=s(G);w(Vt.$$.fragment,Ze),Pi=p(Ze),Ht=r(Ze,"P",{});var Nr=s(Ht);Ci=i(Nr,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Co=r(Nr,"A",{href:!0});var Rc=s(Co);ji=i(Rc,"PreTrainedModel"),Rc.forEach(o),Si=i(Nr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nr.forEach(o),Ai=p(Ze),Rt=r(Ze,"P",{});var Ir=s(Rt);Ni=i(Ir,"This model is also a PyTorch "),Ut=r(Ir,"A",{href:!0,rel:!0});var Uc=s(Ut);Ii=i(Uc,"torch.nn.Module"),Uc.forEach(o),Li=i(Ir,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ir.forEach(o),Di=p(Ze),B=r(Ze,"DIV",{class:!0});var Qe=s(B);w(Bt.$$.fragment,Qe),Gi=p(Qe),ue=r(Qe,"P",{});var Bo=s(ue);Oi=i(Bo,"The "),jo=r(Bo,"A",{href:!0});var Bc=s(jo);Vi=i(Bc,"WhisperForConditionalGeneration"),Bc.forEach(o),Hi=i(Bo," forward method, overrides the "),qn=r(Bo,"CODE",{});var Kc=s(qn);Ri=i(Kc,"__call__"),Kc.forEach(o),Ui=i(Bo," special method."),Bo.forEach(o),Bi=p(Qe),w(Ae.$$.fragment,Qe),Ki=p(Qe),w(Ne.$$.fragment,Qe),Qe.forEach(o),Ze.forEach(o),pr=p(t),fe=r(t,"H2",{class:!0});var Lr=s(fe);Ie=r(Lr,"A",{id:!0,class:!0,href:!0});var Jc=s(Ie);Mn=r(Jc,"SPAN",{});var Zc=s(Mn);w(Kt.$$.fragment,Zc),Zc.forEach(o),Jc.forEach(o),Ji=p(Lr),Pn=r(Lr,"SPAN",{});var Qc=s(Pn);Zi=i(Qc,"TFWhisperModel"),Qc.forEach(o),Lr.forEach(o),mr=p(t),O=r(t,"DIV",{class:!0});var Xe=s(O);w(Jt.$$.fragment,Xe),Qi=p(Xe),Zt=r(Xe,"P",{});var Dr=s(Zt);Xi=i(Dr,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),So=r(Dr,"A",{href:!0});var Xc=s(So);Yi=i(Xc,"TFPreTrainedModel"),Xc.forEach(o),ed=i(Dr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dr.forEach(o),td=p(Xe),Qt=r(Xe,"P",{});var Gr=s(Qt);od=i(Gr,"This model is also a "),Xt=r(Gr,"A",{href:!0,rel:!0});var Yc=s(Xt);nd=i(Yc,"tf.keras.Model"),Yc.forEach(o),rd=i(Gr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gr.forEach(o),sd=p(Xe),K=r(Xe,"DIV",{class:!0});var Ye=s(K);w(Yt.$$.fragment,Ye),ad=p(Ye),_e=r(Ye,"P",{});var Ko=s(_e);id=i(Ko,"The "),Ao=r(Ko,"A",{href:!0});var el=s(Ao);dd=i(el,"TFWhisperModel"),el.forEach(o),cd=i(Ko," forward method, overrides the "),Cn=r(Ko,"CODE",{});var tl=s(Cn);ld=i(tl,"__call__"),tl.forEach(o),hd=i(Ko," special method."),Ko.forEach(o),pd=p(Ye),w(Le.$$.fragment,Ye),md=p(Ye),w(De.$$.fragment,Ye),Ye.forEach(o),Xe.forEach(o),ur=p(t),ge=r(t,"H2",{class:!0});var Or=s(ge);Ge=r(Or,"A",{id:!0,class:!0,href:!0});var ol=s(Ge);jn=r(ol,"SPAN",{});var nl=s(jn);w(eo.$$.fragment,nl),nl.forEach(o),ol.forEach(o),ud=p(Or),Sn=r(Or,"SPAN",{});var rl=s(Sn);fd=i(rl,"TFWhisperForConditionalGeneration"),rl.forEach(o),Or.forEach(o),fr=p(t),V=r(t,"DIV",{class:!0});var et=s(V);w(to.$$.fragment,et),_d=p(et),oo=r(et,"P",{});var Vr=s(oo);gd=i(Vr,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),No=r(Vr,"A",{href:!0});var sl=s(No);vd=i(sl,"TFPreTrainedModel"),sl.forEach(o),bd=i(Vr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vr.forEach(o),kd=p(et),no=r(et,"P",{});var Hr=s(no);wd=i(Hr,"This model is also a "),ro=r(Hr,"A",{href:!0,rel:!0});var al=s(ro);yd=i(al,"tf.keras.Model"),al.forEach(o),Td=i(Hr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hr.forEach(o),$d=p(et),J=r(et,"DIV",{class:!0});var tt=s(J);w(so.$$.fragment,tt),Wd=p(tt),ve=r(tt,"P",{});var Jo=s(ve);xd=i(Jo,"The "),Io=r(Jo,"A",{href:!0});var il=s(Io);Fd=i(il,"TFWhisperForConditionalGeneration"),il.forEach(o),zd=i(Jo," forward method, overrides the "),An=r(Jo,"CODE",{});var dl=s(An);Ed=i(dl,"__call__"),dl.forEach(o),qd=i(Jo," special method."),Jo.forEach(o),Md=p(tt),w(Oe.$$.fragment,tt),Pd=p(tt),w(Ve.$$.fragment,tt),tt.forEach(o),et.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(xl)),c(_,"id","whisper"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#whisper"),c(f,"class","relative group"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(j,"class","relative group"),c(nt,"href","https://cdn.openai.com/papers/whisper.pdf"),c(nt,"rel","nofollow"),c(mo,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(uo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor"),c(at,"href","https://huggingface.co/ArthurZ"),c(at,"rel","nofollow"),c(it,"href","https://huggingface.co/amyeroberts"),c(it,"rel","nofollow"),c(dt,"href","https://github.com/openai/whisper"),c(dt,"rel","nofollow"),c(ke,"id","transformers.WhisperConfig"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#transformers.WhisperConfig"),c(ne,"class","relative group"),c(fo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel"),c(ht,"href","https://huggingface.co/openai/whisper-tiny"),c(ht,"rel","nofollow"),c(_o,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(go,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ye,"id","transformers.WhisperTokenizer"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.WhisperTokenizer"),c(ae,"class","relative group"),c(vo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"href","../glossary#token-type-ids"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($e,"id","transformers.WhisperFeatureExtractor"),c($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($e,"href","#transformers.WhisperFeatureExtractor"),c(de,"class","relative group"),c(To,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"id","transformers.WhisperProcessor"),c(xe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xe,"href","#transformers.WhisperProcessor"),c(le,"class","relative group"),c($o,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor"),c(Wo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(xo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer"),c(Wt,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.__call__"),c(Fo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.decode"),c(Ft,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"),c(zt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zo,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Eo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"id","transformers.WhisperModel"),c(Pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Pe,"href","#transformers.WhisperModel"),c(he,"class","relative group"),c(Mo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Dt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Dt,"rel","nofollow"),c(Po,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"id","transformers.WhisperForConditionalGeneration"),c(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Se,"href","#transformers.WhisperForConditionalGeneration"),c(me,"class","relative group"),c(Co,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ut,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ut,"rel","nofollow"),c(jo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperForConditionalGeneration"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.TFWhisperModel"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.TFWhisperModel"),c(fe,"class","relative group"),c(So,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xt,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xt,"rel","nofollow"),c(Ao,"href","/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperModel"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.TFWhisperForConditionalGeneration"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.TFWhisperForConditionalGeneration"),c(ge,"class","relative group"),c(No,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(ro,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ro,"rel","nofollow"),c(Io,"href","/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperForConditionalGeneration"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,l),g(t,b,u),g(t,f,u),e(f,_),e(_,v),y(d,v,null),e(f,m),e(f,x),e(x,C),g(t,z,u),g(t,j,u),e(j,A),e(A,Qo),y(ot,Qo,null),e(j,Rr),e(j,Xo),e(Xo,Ur),g(t,Kn,u),g(t,be,u),e(be,Br),e(be,nt),e(nt,Kr),e(be,Jr),g(t,Jn,u),g(t,lo,u),e(lo,Zr),g(t,Zn,u),g(t,ho,u),e(ho,Yo),e(Yo,Qr),g(t,Qn,u),g(t,po,u),e(po,Xr),g(t,Xn,u),g(t,H,u),e(H,en),e(en,Yr),e(H,es),e(H,rt),e(rt,ts),e(rt,mo),e(mo,os),e(rt,ns),e(H,rs),e(H,tn),e(tn,ss),e(H,as),e(H,st),e(st,is),e(st,uo),e(uo,ds),e(st,cs),g(t,Yn,u),g(t,R,u),e(R,ls),e(R,at),e(at,hs),e(R,ps),e(R,it),e(it,ms),e(R,us),e(R,dt),e(dt,fs),e(R,_s),g(t,er,u),g(t,ne,u),e(ne,ke),e(ke,on),y(ct,on,null),e(ne,gs),e(ne,nn),e(nn,vs),g(t,tr,u),g(t,L,u),y(lt,L,null),e(L,bs),e(L,re),e(re,ks),e(re,fo),e(fo,ws),e(re,ys),e(re,ht),e(ht,Ts),e(re,$s),e(L,Ws),e(L,se),e(se,xs),e(se,_o),e(_o,Fs),e(se,zs),e(se,go),e(go,Es),e(se,qs),e(L,Ms),y(we,L,null),g(t,or,u),g(t,ae,u),e(ae,ye),e(ye,rn),y(pt,rn,null),e(ae,Ps),e(ae,sn),e(sn,Cs),g(t,nr,u),g(t,M,u),y(mt,M,null),e(M,js),e(M,an),e(an,Ss),e(M,As),e(M,ut),e(ut,Ns),e(ut,vo),e(vo,Is),e(ut,Ls),e(M,Ds),e(M,bo),y(ft,bo,null),e(M,Gs),e(M,Te),y(_t,Te,null),e(Te,Os),e(Te,ie),e(ie,Vs),e(ie,dn),e(dn,Hs),e(ie,Rs),e(ie,cn),e(cn,Us),e(ie,Bs),e(M,Ks),e(M,X),y(gt,X,null),e(X,Js),e(X,ko),e(ko,Zs),e(ko,wo),e(wo,Qs),e(X,Xs),e(X,ln),e(ln,Ys),e(M,ea),e(M,yo),y(vt,yo,null),g(t,rr,u),g(t,de,u),e(de,$e),e($e,hn),y(bt,hn,null),e(de,ta),e(de,pn),e(pn,oa),g(t,sr,u),g(t,S,u),y(kt,S,null),e(S,na),e(S,mn),e(mn,ra),e(S,sa),e(S,wt),e(wt,aa),e(wt,To),e(To,ia),e(wt,da),e(S,ca),e(S,ce),e(ce,la),e(ce,un),e(un,ha),e(ce,pa),e(ce,fn),e(fn,ma),e(ce,ua),e(S,fa),e(S,We),y(yt,We,null),e(We,_a),e(We,_n),e(_n,ga),g(t,ar,u),g(t,le,u),e(le,xe),e(xe,gn),y(Tt,gn,null),e(le,va),e(le,vn),e(vn,ba),g(t,ir,u),g(t,q,u),y($t,q,null),e(q,ka),e(q,bn),e(bn,wa),e(q,ya),e(q,N),e(N,$o),e($o,Ta),e(N,$a),e(N,Wo),e(Wo,Wa),e(N,xa),e(N,xo),e(xo,Fa),e(N,za),e(N,Wt),e(Wt,kn),e(kn,Ea),e(Wt,qa),e(N,Ma),e(N,Fo),e(Fo,Pa),e(N,Ca),e(q,ja),e(q,Fe),y(xt,Fe,null),e(Fe,Sa),e(Fe,Z),e(Z,Aa),e(Z,Ft),e(Ft,wn),e(wn,Na),e(Ft,Ia),e(Z,La),e(Z,yn),e(yn,Da),e(Z,Ga),e(Z,zt),e(zt,Tn),e(Tn,Oa),e(zt,Va),e(Z,Ha),e(q,Ra),e(q,Y),y(Et,Y,null),e(Y,Ua),e(Y,$n),e($n,Ba),e(Y,Ka),y(ze,Y,null),e(q,Ja),e(q,ee),y(qt,ee,null),e(ee,Za),e(ee,Mt),e(Mt,Qa),e(Mt,zo),e(zo,Xa),e(Mt,Ya),e(ee,ei),y(Ee,ee,null),e(q,ti),e(q,qe),y(Pt,qe,null),e(qe,oi),e(qe,Ct),e(Ct,ni),e(Ct,Eo),e(Eo,ri),e(Ct,si),e(q,ai),e(q,Me),y(jt,Me,null),e(Me,ii),e(Me,St),e(St,di),e(St,qo),e(qo,ci),e(St,li),g(t,dr,u),g(t,he,u),e(he,Pe),e(Pe,Wn),y(At,Wn,null),e(he,hi),e(he,xn),e(xn,pi),g(t,cr,u),g(t,D,u),y(Nt,D,null),e(D,mi),e(D,It),e(It,ui),e(It,Mo),e(Mo,fi),e(It,_i),e(D,gi),e(D,Lt),e(Lt,vi),e(Lt,Dt),e(Dt,bi),e(Lt,ki),e(D,wi),e(D,U),y(Gt,U,null),e(U,yi),e(U,pe),e(pe,Ti),e(pe,Po),e(Po,$i),e(pe,Wi),e(pe,Fn),e(Fn,xi),e(pe,Fi),e(U,zi),y(Ce,U,null),e(U,Ei),y(je,U,null),g(t,lr,u),g(t,me,u),e(me,Se),e(Se,zn),y(Ot,zn,null),e(me,qi),e(me,En),e(En,Mi),g(t,hr,u),g(t,G,u),y(Vt,G,null),e(G,Pi),e(G,Ht),e(Ht,Ci),e(Ht,Co),e(Co,ji),e(Ht,Si),e(G,Ai),e(G,Rt),e(Rt,Ni),e(Rt,Ut),e(Ut,Ii),e(Rt,Li),e(G,Di),e(G,B),y(Bt,B,null),e(B,Gi),e(B,ue),e(ue,Oi),e(ue,jo),e(jo,Vi),e(ue,Hi),e(ue,qn),e(qn,Ri),e(ue,Ui),e(B,Bi),y(Ae,B,null),e(B,Ki),y(Ne,B,null),g(t,pr,u),g(t,fe,u),e(fe,Ie),e(Ie,Mn),y(Kt,Mn,null),e(fe,Ji),e(fe,Pn),e(Pn,Zi),g(t,mr,u),g(t,O,u),y(Jt,O,null),e(O,Qi),e(O,Zt),e(Zt,Xi),e(Zt,So),e(So,Yi),e(Zt,ed),e(O,td),e(O,Qt),e(Qt,od),e(Qt,Xt),e(Xt,nd),e(Qt,rd),e(O,sd),e(O,K),y(Yt,K,null),e(K,ad),e(K,_e),e(_e,id),e(_e,Ao),e(Ao,dd),e(_e,cd),e(_e,Cn),e(Cn,ld),e(_e,hd),e(K,pd),y(Le,K,null),e(K,md),y(De,K,null),g(t,ur,u),g(t,ge,u),e(ge,Ge),e(Ge,jn),y(eo,jn,null),e(ge,ud),e(ge,Sn),e(Sn,fd),g(t,fr,u),g(t,V,u),y(to,V,null),e(V,_d),e(V,oo),e(oo,gd),e(oo,No),e(No,vd),e(oo,bd),e(V,kd),e(V,no),e(no,wd),e(no,ro),e(ro,yd),e(no,Td),e(V,$d),e(V,J),y(so,J,null),e(J,Wd),e(J,ve),e(ve,xd),e(ve,Io),e(Io,Fd),e(ve,zd),e(ve,An),e(An,Ed),e(ve,qd),e(J,Md),y(Oe,J,null),e(J,Pd),y(Ve,J,null),_r=!0},p(t,[u]){const ao={};u&2&&(ao.$$scope={dirty:u,ctx:t}),we.$set(ao);const Nn={};u&2&&(Nn.$$scope={dirty:u,ctx:t}),ze.$set(Nn);const In={};u&2&&(In.$$scope={dirty:u,ctx:t}),Ee.$set(In);const Ln={};u&2&&(Ln.$$scope={dirty:u,ctx:t}),Ce.$set(Ln);const io={};u&2&&(io.$$scope={dirty:u,ctx:t}),je.$set(io);const Dn={};u&2&&(Dn.$$scope={dirty:u,ctx:t}),Ae.$set(Dn);const Gn={};u&2&&(Gn.$$scope={dirty:u,ctx:t}),Ne.$set(Gn);const On={};u&2&&(On.$$scope={dirty:u,ctx:t}),Le.$set(On);const co={};u&2&&(co.$$scope={dirty:u,ctx:t}),De.$set(co);const Vn={};u&2&&(Vn.$$scope={dirty:u,ctx:t}),Oe.$set(Vn);const Hn={};u&2&&(Hn.$$scope={dirty:u,ctx:t}),Ve.$set(Hn)},i(t){_r||(T(d.$$.fragment,t),T(ot.$$.fragment,t),T(ct.$$.fragment,t),T(lt.$$.fragment,t),T(we.$$.fragment,t),T(pt.$$.fragment,t),T(mt.$$.fragment,t),T(ft.$$.fragment,t),T(_t.$$.fragment,t),T(gt.$$.fragment,t),T(vt.$$.fragment,t),T(bt.$$.fragment,t),T(kt.$$.fragment,t),T(yt.$$.fragment,t),T(Tt.$$.fragment,t),T($t.$$.fragment,t),T(xt.$$.fragment,t),T(Et.$$.fragment,t),T(ze.$$.fragment,t),T(qt.$$.fragment,t),T(Ee.$$.fragment,t),T(Pt.$$.fragment,t),T(jt.$$.fragment,t),T(At.$$.fragment,t),T(Nt.$$.fragment,t),T(Gt.$$.fragment,t),T(Ce.$$.fragment,t),T(je.$$.fragment,t),T(Ot.$$.fragment,t),T(Vt.$$.fragment,t),T(Bt.$$.fragment,t),T(Ae.$$.fragment,t),T(Ne.$$.fragment,t),T(Kt.$$.fragment,t),T(Jt.$$.fragment,t),T(Yt.$$.fragment,t),T(Le.$$.fragment,t),T(De.$$.fragment,t),T(eo.$$.fragment,t),T(to.$$.fragment,t),T(so.$$.fragment,t),T(Oe.$$.fragment,t),T(Ve.$$.fragment,t),_r=!0)},o(t){$(d.$$.fragment,t),$(ot.$$.fragment,t),$(ct.$$.fragment,t),$(lt.$$.fragment,t),$(we.$$.fragment,t),$(pt.$$.fragment,t),$(mt.$$.fragment,t),$(ft.$$.fragment,t),$(_t.$$.fragment,t),$(gt.$$.fragment,t),$(vt.$$.fragment,t),$(bt.$$.fragment,t),$(kt.$$.fragment,t),$(yt.$$.fragment,t),$(Tt.$$.fragment,t),$($t.$$.fragment,t),$(xt.$$.fragment,t),$(Et.$$.fragment,t),$(ze.$$.fragment,t),$(qt.$$.fragment,t),$(Ee.$$.fragment,t),$(Pt.$$.fragment,t),$(jt.$$.fragment,t),$(At.$$.fragment,t),$(Nt.$$.fragment,t),$(Gt.$$.fragment,t),$(Ce.$$.fragment,t),$(je.$$.fragment,t),$(Ot.$$.fragment,t),$(Vt.$$.fragment,t),$(Bt.$$.fragment,t),$(Ae.$$.fragment,t),$(Ne.$$.fragment,t),$(Kt.$$.fragment,t),$(Jt.$$.fragment,t),$(Yt.$$.fragment,t),$(Le.$$.fragment,t),$(De.$$.fragment,t),$(eo.$$.fragment,t),$(to.$$.fragment,t),$(so.$$.fragment,t),$(Oe.$$.fragment,t),$(Ve.$$.fragment,t),_r=!1},d(t){o(l),t&&o(b),t&&o(f),W(d),t&&o(z),t&&o(j),W(ot),t&&o(Kn),t&&o(be),t&&o(Jn),t&&o(lo),t&&o(Zn),t&&o(ho),t&&o(Qn),t&&o(po),t&&o(Xn),t&&o(H),t&&o(Yn),t&&o(R),t&&o(er),t&&o(ne),W(ct),t&&o(tr),t&&o(L),W(lt),W(we),t&&o(or),t&&o(ae),W(pt),t&&o(nr),t&&o(M),W(mt),W(ft),W(_t),W(gt),W(vt),t&&o(rr),t&&o(de),W(bt),t&&o(sr),t&&o(S),W(kt),W(yt),t&&o(ar),t&&o(le),W(Tt),t&&o(ir),t&&o(q),W($t),W(xt),W(Et),W(ze),W(qt),W(Ee),W(Pt),W(jt),t&&o(dr),t&&o(he),W(At),t&&o(cr),t&&o(D),W(Nt),W(Gt),W(Ce),W(je),t&&o(lr),t&&o(me),W(Ot),t&&o(hr),t&&o(G),W(Vt),W(Bt),W(Ae),W(Ne),t&&o(pr),t&&o(fe),W(Kt),t&&o(mr),t&&o(O),W(Jt),W(Yt),W(Le),W(De),t&&o(ur),t&&o(ge),W(eo),t&&o(fr),t&&o(V),W(to),W(so),W(Oe),W(Ve)}}}const xl={local:"whisper",sections:[{local:"overview",title:"Overview"},{local:"transformers.WhisperConfig",title:"WhisperConfig"},{local:"transformers.WhisperTokenizer",title:"WhisperTokenizer"},{local:"transformers.WhisperFeatureExtractor",title:"WhisperFeatureExtractor"},{local:"transformers.WhisperProcessor",title:"WhisperProcessor"},{local:"transformers.WhisperModel",title:"WhisperModel"},{local:"transformers.WhisperForConditionalGeneration",title:"WhisperForConditionalGeneration"},{local:"transformers.TFWhisperModel",title:"TFWhisperModel"},{local:"transformers.TFWhisperForConditionalGeneration",title:"TFWhisperForConditionalGeneration"}],title:"Whisper"};function Fl(F){return ml(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jl extends cl{constructor(l){super();ll(this,l,Fl,Wl,hl,{})}}export{jl as default,xl as metadata};
