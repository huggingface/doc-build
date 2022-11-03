import{S as Tl,i as $l,s as Wl,e as n,k as h,w as k,t as a,M as xl,c as r,d as o,m as p,a as s,x as w,h as i,b as c,G as e,g,y,q as T,o as $,B as W,v as zl,L as tn}from"../../chunks/vendor-hf-doc-builder.js";import{T as Yo}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as on}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as en}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Fl(x){let l,b,f,u,v;return u=new on({props:{code:`from transformers import WhisperConfig, WhisperModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function ql(x){let l,b,f,u,v;return u=new on({props:{code:`# instantiate the tokenizer and set the prefix token to Spanish
tokenizer = WhisperTokenizer.from_pretrained("openai/whisper-tiny", language="spanish")
# now switch the prefix token from Spanish to French
tokenizer.set_prefix_tokens(language="french")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate the tokenizer and set the prefix token to Spanish</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = WhisperTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>, language=<span class="hljs-string">&quot;spanish&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># now switch the prefix token from Spanish to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.set_prefix_tokens(language=<span class="hljs-string">&quot;french&quot;</span>)`}}),{c(){l=n("p"),b=a("update the prefix tokens as required when fine-tuning. Example:"),f=h(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"update the prefix tokens as required when fine-tuning. Example:"),m.forEach(o),f=p(d),w(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function El(x){let l,b,f,u,v,d,m,z;return{c(){l=n("p"),b=a(`This class method is simply calling the feature extractor
`),f=n("a"),u=a("from_pretrained()"),v=a(` and the tokenizer
`),d=n("code"),m=a("~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),z=a(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(j){l=r(j,"P",{});var q=s(l);b=i(q,`This class method is simply calling the feature extractor
`),f=r(q,"A",{href:!0});var S=s(f);u=i(S,"from_pretrained()"),S.forEach(o),v=i(q,` and the tokenizer
`),d=r(q,"CODE",{});var A=s(d);m=i(A,"~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),A.forEach(o),z=i(q,` methods. Please refer to the docstrings of the
methods above for more information.`),q.forEach(o),this.h()},h(){c(f,"href","/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.from_pretrained")},m(j,q){g(j,l,q),e(l,b),e(l,f),e(f,u),e(l,v),e(l,d),e(d,m),e(l,z)},d(j){j&&o(l)}}}function Ml(x){let l,b,f,u,v,d,m,z;return{c(){l=n("p"),b=a("This class method is simply calling "),f=n("a"),u=a("save_pretrained()"),v=a(` and
`),d=n("a"),m=a("save_pretrained()"),z=a(`. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(j){l=r(j,"P",{});var q=s(l);b=i(q,"This class method is simply calling "),f=r(q,"A",{href:!0});var S=s(f);u=i(S,"save_pretrained()"),S.forEach(o),v=i(q,` and
`),d=r(q,"A",{href:!0});var A=s(d);m=i(A,"save_pretrained()"),A.forEach(o),z=i(q,`. Please refer to the docstrings of the
methods above for more information.`),q.forEach(o),this.h()},h(){c(f,"href","/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.save_pretrained"),c(d,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained")},m(j,q){g(j,l,q),e(l,b),e(l,f),e(f,u),e(l,v),e(l,d),e(d,m),e(l,z)},d(j){j&&o(l)}}}function Pl(x){let l,b,f,u,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var z=s(f);u=i(z,"Module"),z.forEach(o),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(d,m){g(d,l,m),e(l,b),e(l,f),e(f,u),e(l,v)},d(d){d&&o(l)}}}function Cl(x){let l,b,f,u,v;return u=new on({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function jl(x){let l,b,f,u,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var z=s(f);u=i(z,"Module"),z.forEach(o),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(d,m){g(d,l,m),e(l,b),e(l,f),e(f,u),e(l,v)},d(d){d&&o(l)}}}function Sl(x){let l,b,f,u,v;return u=new on({props:{code:`import torch
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function Nl(x){let l,b,f,u,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var z=s(f);u=i(z,"Module"),z.forEach(o),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(d,m){g(d,l,m),e(l,b),e(l,f),e(f,u),e(l,v)},d(d){d&&o(l)}}}function Al(x){let l,b,f,u,v;return u=new on({props:{code:`import tensorflow as tf
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function Il(x){let l,b,f,u,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var z=s(f);u=i(z,"Module"),z.forEach(o),v=i(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(o)},m(d,m){g(d,l,m),e(l,b),e(l,f),e(f,u),e(l,v)},d(d){d&&o(l)}}}function Ll(x){let l,b,f,u,v;return u=new on({props:{code:`import tensorflow as tf
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),f=h(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=p(d),w(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),y(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function Dl(x){let l,b,f,u,v,d,m,z,j,q,S,A,nn,rt,Yr,rn,es,er,ke,ts,st,os,ns,tr,uo,rs,or,fo,sn,ss,nr,_o,as,rr,R,an,is,ds,at,cs,go,ls,hs,ps,dn,ms,us,it,fs,vo,_s,gs,sr,U,vs,dt,bs,ks,ct,ws,ys,lt,Ts,$s,ar,se,we,cn,ht,Ws,ln,xs,ir,L,pt,zs,ae,Fs,bo,qs,Es,mt,Ms,Ps,Cs,ie,js,ko,Ss,Ns,wo,As,Is,Ls,ye,dr,de,Te,hn,ut,Ds,pn,Gs,cr,E,ft,Os,mn,Vs,Hs,_t,Rs,yo,Us,Bs,Ks,X,gt,Js,un,Zs,Qs,$e,Xs,We,vt,Ys,fn,ea,ta,xe,bt,oa,kt,na,_n,ra,sa,aa,Y,wt,ia,To,da,$o,ca,la,gn,ha,pa,Wo,yt,lr,ce,ze,vn,Tt,ma,bn,ua,hr,N,$t,fa,kn,_a,ga,Wt,va,xo,ba,ka,wa,le,ya,wn,Ta,$a,yn,Wa,xa,za,Fe,xt,Fa,Tn,qa,pr,he,qe,$n,zt,Ea,Wn,Ma,mr,M,Ft,Pa,xn,Ca,ja,I,zo,Sa,Na,Fo,Aa,Ia,qo,La,Da,qt,zn,Ga,Oa,Va,Eo,Ha,Ra,Ua,Ee,Et,Ba,D,Ka,Fn,Ja,Za,Mt,qn,Qa,Xa,Ya,En,ei,ti,Pt,Mn,oi,ni,ri,si,ee,Ct,ai,Pn,ii,di,Me,ci,te,jt,li,St,hi,Mo,pi,mi,ui,Pe,fi,Ce,Nt,_i,At,gi,Po,vi,bi,ki,je,It,wi,Lt,yi,Co,Ti,$i,ur,pe,Se,Cn,Dt,Wi,jn,xi,fr,G,Gt,zi,Ot,Fi,jo,qi,Ei,Mi,Vt,Pi,Ht,Ci,ji,Si,B,Rt,Ni,me,Ai,So,Ii,Li,Sn,Di,Gi,Oi,Ne,Vi,Ae,_r,ue,Ie,Nn,Ut,Hi,An,Ri,gr,O,Bt,Ui,Kt,Bi,No,Ki,Ji,Zi,Jt,Qi,Zt,Xi,Yi,ed,K,Qt,td,fe,od,Ao,nd,rd,In,sd,ad,id,Le,dd,De,vr,_e,Ge,Ln,Xt,cd,Dn,ld,br,V,Yt,hd,eo,pd,Io,md,ud,fd,to,_d,oo,gd,vd,bd,J,no,kd,ge,wd,Lo,yd,Td,Gn,$d,Wd,xd,Oe,zd,Ve,kr,ve,He,On,ro,Fd,Vn,qd,wr,H,so,Ed,ao,Md,Do,Pd,Cd,jd,io,Sd,co,Nd,Ad,Id,Z,lo,Ld,be,Dd,Go,Gd,Od,Hn,Vd,Hd,Rd,Re,Ud,Ue,yr;return d=new re({}),rt=new re({}),ht=new re({}),pt=new F({props:{name:"class transformers.WhisperConfig",anchor:"transformers.WhisperConfig",parameters:[{name:"vocab_size",val:" = 51865"},{name:"num_mel_bins",val:" = 80"},{name:"encoder_layers",val:" = 6"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_ffn_dim",val:" = 1536"},{name:"encoder_ffn_dim",val:" = 1536"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 50257"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"max_source_positions",val:" = 1500"},{name:"max_target_positions",val:" = 448"},{name:"pad_token_id",val:" = 50256"},{name:"bos_token_id",val:" = 50257"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = True"},{name:"suppress_tokens",val:" = None"},{name:"begin_suppress_tokens",val:" = [220, 50256]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 51865) &#x2014;
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
the token for <code>&quot; &quot;</code> (<code>blank_token_id</code>) and the <code>eos_token_id</code>`,name:"begin_suppress_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/configuration_whisper.py#L62"}}),ye=new en({props:{anchor:"transformers.WhisperConfig.example",$$slots:{default:[Fl]},$$scope:{ctx:x}}}),ut=new re({}),ft=new F({props:{name:"class transformers.WhisperTokenizer",anchor:"transformers.WhisperTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftranscript|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"language",val:" = None"},{name:"task",val:" = None"},{name:"predict_timestamps",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.WhisperTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.WhisperTokenizer.normalizer_file",description:`<strong>normalizer_file</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Path to the normalizer_file file.`,name:"normalizer_file"},{anchor:"transformers.WhisperTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.WhisperTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.WhisperTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|startoftranscript|&gt;&quot;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.WhisperTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.WhisperTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word.`,name:"add_prefix_space"},{anchor:"transformers.WhisperTokenizer.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language of the transcription text. The corresponding language id token is appended to the start of the
sequence for multilingual speech recognition and speech translation tasks, e.g. for Spanish the token
<code>&quot;&lt;|es|&gt;&quot;</code> is appended to the start of sequence. This should be used for multilingual fine-tuning only.`,name:"language"},{anchor:"transformers.WhisperTokenizer.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Task identifier to append at the start of sequence (if any). This should be used for mulitlingual
fine-tuning, with <code>&quot;transcribe&quot;</code> for speech recognition and <code>&quot;translate&quot;</code> for speech translation.`,name:"task"},{anchor:"transformers.WhisperTokenizer.predict_timestamps",description:`<strong>predict_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L213"}}),gt=new F({props:{name:"set_prefix_tokens",anchor:"transformers.WhisperTokenizer.set_prefix_tokens",parameters:[{name:"language",val:": str = None"},{name:"task",val:": str = None"},{name:"predict_timestamps",val:": bool = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The language of the transcription text.`,name:"language"},{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Task identifier to append at the start of sequence (if any).`,name:"task"},{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.predict_timestamps",description:`<strong>predict_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L365"}}),$e=new en({props:{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.example",$$slots:{default:[ql]},$$scope:{ctx:x}}}),vt=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L421"}}),bt=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L429",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wt=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2987",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yt=new F({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L527"}}),Tt=new re({}),$t=new F({props:{name:"class transformers.WhisperFeatureExtractor",anchor:"transformers.WhisperFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"hop_length",val:" = 160"},{name:"chunk_length",val:" = 30"},{name:"n_fft",val:" = 400"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.WhisperFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 160) &#x2014;
Length of the overlaping windows for the STFT used to obtain the Mel Frequency coefficients.`,name:"hop_length"},{anchor:"transformers.WhisperFeatureExtractor.chunk_length",description:`<strong>chunk_length</strong> (<code>int</code>, defaults to 30) &#x2014;
The maximum number of chuncks of <code>sampling_rate</code> samples used to trim and pad longer or shorter audio
sequences.`,name:"chunk_length"},{anchor:"transformers.WhisperFeatureExtractor.n_fft",description:`<strong>n_fft</strong> (<code>int</code>, defaults to 400) &#x2014;
Size of the Fourier transform.`,name:"n_fft"},{anchor:"transformers.WhisperFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Padding value used to pad the audio. Should correspond to silences.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L32"}}),xt=new F({props:{name:"__call__",anchor:"transformers.WhisperFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"truncation",val:": bool = True"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"padding",val:": typing.Optional[str] = 'max_length'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
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
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L218"}}),zt=new re({}),Ft=new F({props:{name:"class transformers.WhisperProcessor",anchor:"transformers.WhisperProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>WhisperFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.WhisperProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>WhisperTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L22"}}),Et=new F({props:{name:"__call__",anchor:"transformers.WhisperProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L77"}}),Ct=new F({props:{name:"from_pretrained",anchor:"transformers.WhisperProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>~tokenization_utils_base.PreTrainedTokenizer.from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L152"}}),Me=new Yo({props:{$$slots:{default:[El]},$$scope:{ctx:x}}}),jt=new F({props:{name:"save_pretrained",anchor:"transformers.WhisperProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.WhisperProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/internal/image_processing_utils#transformers.FeatureExtractionMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94"}}),Pe=new Yo({props:{$$slots:{default:[Ml]},$$scope:{ctx:x}}}),Nt=new F({props:{name:"batch_decode",anchor:"transformers.WhisperProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L110"}}),It=new F({props:{name:"decode",anchor:"transformers.WhisperProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L117"}}),Dt=new re({}),Gt=new F({props:{name:"class transformers.WhisperModel",anchor:"transformers.WhisperModel",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L970"}}),Rt=new F({props:{name:"forward",anchor:"transformers.WhisperModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1000",returnDescription:`
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
`}}),Ne=new Yo({props:{$$slots:{default:[Pl]},$$scope:{ctx:x}}}),Ae=new en({props:{anchor:"transformers.WhisperModel.forward.example",$$slots:{default:[Cl]},$$scope:{ctx:x}}}),Ut=new re({}),Bt=new F({props:{name:"class transformers.WhisperForConditionalGeneration",anchor:"transformers.WhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1094"}}),Qt=new F({props:{name:"forward",anchor:"transformers.WhisperForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
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
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1136",returnDescription:`
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
`}}),Le=new Yo({props:{$$slots:{default:[jl]},$$scope:{ctx:x}}}),De=new en({props:{anchor:"transformers.WhisperForConditionalGeneration.forward.example",$$slots:{default:[Sl]},$$scope:{ctx:x}}}),Xt=new re({}),Yt=new F({props:{name:"class transformers.TFWhisperModel",anchor:"transformers.TFWhisperModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1103"}}),no=new F({props:{name:"call",anchor:"transformers.TFWhisperModel.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
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
`}}),Oe=new Yo({props:{$$slots:{default:[Nl]},$$scope:{ctx:x}}}),Ve=new en({props:{anchor:"transformers.TFWhisperModel.call.example",$$slots:{default:[Al]},$$scope:{ctx:x}}}),ro=new re({}),so=new F({props:{name:"class transformers.TFWhisperForConditionalGeneration",anchor:"transformers.TFWhisperForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1211"}}),lo=new F({props:{name:"call",anchor:"transformers.TFWhisperForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
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
`}}),Re=new Yo({props:{$$slots:{default:[Il]},$$scope:{ctx:x}}}),Ue=new en({props:{anchor:"transformers.TFWhisperForConditionalGeneration.call.example",$$slots:{default:[Ll]},$$scope:{ctx:x}}}),{c(){l=n("meta"),b=h(),f=n("h1"),u=n("a"),v=n("span"),k(d.$$.fragment),m=h(),z=n("span"),j=a("Whisper"),q=h(),S=n("h2"),A=n("a"),nn=n("span"),k(rt.$$.fragment),Yr=h(),rn=n("span"),es=a("Overview"),er=h(),ke=n("p"),ts=a("The Whisper model was proposed in "),st=n("a"),os=a("Robust Speech Recognition via Large-Scale Weak Supervision"),ns=a(" by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),tr=h(),uo=n("p"),rs=a("The abstract from the paper is the following:"),or=h(),fo=n("p"),sn=n("em"),ss=a("We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),nr=h(),_o=n("p"),as=a("Tips:"),rr=h(),R=n("ul"),an=n("li"),is=a("The model usually performs well without requiring any finetuning."),ds=h(),at=n("li"),cs=a("The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),go=n("a"),ls=a("generate()"),hs=a(" function for inference."),ps=h(),dn=n("li"),ms=a("Inference is currently only implemented for short-form i.e. audio is pre-segmented into <=30s segments. Long-form (including timestamps) will be implemented in a future release."),us=h(),it=n("li"),fs=a("One can use "),vo=n("a"),_s=a("WhisperProcessor"),gs=a(" to prepare audio for the model, and decode the predicted ID\u2019s back into text."),sr=h(),U=n("p"),vs=a("This model was contributed by "),dt=n("a"),bs=a("Arthur Zucker"),ks=a(". The Tensorflow version of this model was contributed by "),ct=n("a"),ws=a("amyeroberts"),ys=a(`.
The original code can be found `),lt=n("a"),Ts=a("here"),$s=a("."),ar=h(),se=n("h2"),we=n("a"),cn=n("span"),k(ht.$$.fragment),Ws=h(),ln=n("span"),xs=a("WhisperConfig"),ir=h(),L=n("div"),k(pt.$$.fragment),zs=h(),ae=n("p"),Fs=a("This is the configuration class to store the configuration of a "),bo=n("a"),qs=a("WhisperModel"),Es=a(`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),mt=n("a"),Ms=a("openai/whisper-tiny"),Ps=a(" architecture."),Cs=h(),ie=n("p"),js=a("Configuration objects inherit from "),ko=n("a"),Ss=a("PretrainedConfig"),Ns=a(` and can be used to control the model outputs. Read the
documentation from `),wo=n("a"),As=a("PretrainedConfig"),Is=a(" for more information."),Ls=h(),k(ye.$$.fragment),dr=h(),de=n("h2"),Te=n("a"),hn=n("span"),k(ut.$$.fragment),Ds=h(),pn=n("span"),Gs=a("WhisperTokenizer"),cr=h(),E=n("div"),k(ft.$$.fragment),Os=h(),mn=n("p"),Vs=a("Construct a Whisper tokenizer."),Hs=h(),_t=n("p"),Rs=a("This tokenizer inherits from "),yo=n("a"),Us=a("PreTrainedTokenizer"),Bs=a(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Ks=h(),X=n("div"),k(gt.$$.fragment),Js=h(),un=n("p"),Zs=a("Override the prefix tokens appended to the start of the label sequence. This method can be used standalone to"),Qs=h(),k($e.$$.fragment),Xs=h(),We=n("div"),k(vt.$$.fragment),Ys=h(),fn=n("p"),ea=a("Build model inputs from a sequence by appending eos_token_id."),ta=h(),xe=n("div"),k(bt.$$.fragment),oa=h(),kt=n("p"),na=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_n=n("code"),ra=a("prepare_for_model"),sa=a(" method."),aa=h(),Y=n("div"),k(wt.$$.fragment),ia=h(),To=n("p"),da=a("Create the token type IDs corresponding to the sequences passed. "),$o=n("a"),ca=a(`What are token type
IDs?`),la=h(),gn=n("p"),ha=a("Should be overridden in a subclass if the model has a special way of building those."),pa=h(),Wo=n("div"),k(yt.$$.fragment),lr=h(),ce=n("h2"),ze=n("a"),vn=n("span"),k(Tt.$$.fragment),ma=h(),bn=n("span"),ua=a("WhisperFeatureExtractor"),hr=h(),N=n("div"),k($t.$$.fragment),fa=h(),kn=n("p"),_a=a("Constructs a Whisper feature extractor."),ga=h(),Wt=n("p"),va=a("This feature extractor inherits from "),xo=n("a"),ba=a("WhisperFeatureExtractor"),ka=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),wa=h(),le=n("p"),ya=a("This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),wn=n("code"),Ta=a("Short Time Fourier Transform"),$a=a(" which should match pytorch\u2019s "),yn=n("code"),Wa=a("torch.stft"),xa=a(" equivalent."),za=h(),Fe=n("div"),k(xt.$$.fragment),Fa=h(),Tn=n("p"),qa=a("Main method to featurize and prepare for the model one or several sequence(s)."),pr=h(),he=n("h2"),qe=n("a"),$n=n("span"),k(zt.$$.fragment),Ea=h(),Wn=n("span"),Ma=a("WhisperProcessor"),mr=h(),M=n("div"),k(Ft.$$.fragment),Pa=h(),xn=n("p"),Ca=a(`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),ja=h(),I=n("p"),zo=n("a"),Sa=a("WhisperProcessor"),Na=a(" offers all the functionalities of "),Fo=n("a"),Aa=a("WhisperFeatureExtractor"),Ia=a(" and "),qo=n("a"),La=a("WhisperTokenizer"),Da=a(`. See
the `),qt=n("a"),zn=n("strong"),Ga=a("call"),Oa=a("()"),Va=a(" and "),Eo=n("a"),Ha=a("decode()"),Ra=a(" for more information."),Ua=h(),Ee=n("div"),k(Et.$$.fragment),Ba=h(),D=n("p"),Ka=a("Forwards the "),Fn=n("code"),Ja=a("audio"),Za=a(" argument to WhisperFeatureExtractor\u2019s "),Mt=n("a"),qn=n("strong"),Qa=a("call"),Xa=a("()"),Ya=a(" and the "),En=n("code"),ei=a("text"),ti=a(`
argument to `),Pt=n("a"),Mn=n("strong"),oi=a("call"),ni=a("()"),ri=a(`. Please refer to the doctsring of the above two methods for more
information.`),si=h(),ee=n("div"),k(Ct.$$.fragment),ai=h(),Pn=n("p"),ii=a("Instantiate a processor associated with a pretrained model."),di=h(),k(Me.$$.fragment),ci=h(),te=n("div"),k(jt.$$.fragment),li=h(),St=n("p"),hi=a(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Mo=n("a"),pi=a("from_pretrained()"),mi=a(" method."),ui=h(),k(Pe.$$.fragment),fi=h(),Ce=n("div"),k(Nt.$$.fragment),_i=h(),At=n("p"),gi=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),Po=n("a"),vi=a("batch_decode()"),bi=a(`. Please
refer to the docstring of this method for more information.`),ki=h(),je=n("div"),k(It.$$.fragment),wi=h(),Lt=n("p"),yi=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),Co=n("a"),Ti=a("decode()"),$i=a(`. Please refer to
the docstring of this method for more information.`),ur=h(),pe=n("h2"),Se=n("a"),Cn=n("span"),k(Dt.$$.fragment),Wi=h(),jn=n("span"),xi=a("WhisperModel"),fr=h(),G=n("div"),k(Gt.$$.fragment),zi=h(),Ot=n("p"),Fi=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jo=n("a"),qi=a("PreTrainedModel"),Ei=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi=h(),Vt=n("p"),Pi=a("This model is also a PyTorch "),Ht=n("a"),Ci=a("torch.nn.Module"),ji=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Si=h(),B=n("div"),k(Rt.$$.fragment),Ni=h(),me=n("p"),Ai=a("The "),So=n("a"),Ii=a("WhisperModel"),Li=a(" forward method, overrides the "),Sn=n("code"),Di=a("__call__"),Gi=a(" special method."),Oi=h(),k(Ne.$$.fragment),Vi=h(),k(Ae.$$.fragment),_r=h(),ue=n("h2"),Ie=n("a"),Nn=n("span"),k(Ut.$$.fragment),Hi=h(),An=n("span"),Ri=a("WhisperForConditionalGeneration"),gr=h(),O=n("div"),k(Bt.$$.fragment),Ui=h(),Kt=n("p"),Bi=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),No=n("a"),Ki=a("PreTrainedModel"),Ji=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zi=h(),Jt=n("p"),Qi=a("This model is also a PyTorch "),Zt=n("a"),Xi=a("torch.nn.Module"),Yi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ed=h(),K=n("div"),k(Qt.$$.fragment),td=h(),fe=n("p"),od=a("The "),Ao=n("a"),nd=a("WhisperForConditionalGeneration"),rd=a(" forward method, overrides the "),In=n("code"),sd=a("__call__"),ad=a(" special method."),id=h(),k(Le.$$.fragment),dd=h(),k(De.$$.fragment),vr=h(),_e=n("h2"),Ge=n("a"),Ln=n("span"),k(Xt.$$.fragment),cd=h(),Dn=n("span"),ld=a("TFWhisperModel"),br=h(),V=n("div"),k(Yt.$$.fragment),hd=h(),eo=n("p"),pd=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Io=n("a"),md=a("TFPreTrainedModel"),ud=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=h(),to=n("p"),_d=a("This model is also a "),oo=n("a"),gd=a("tf.keras.Model"),vd=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd=h(),J=n("div"),k(no.$$.fragment),kd=h(),ge=n("p"),wd=a("The "),Lo=n("a"),yd=a("TFWhisperModel"),Td=a(" forward method, overrides the "),Gn=n("code"),$d=a("__call__"),Wd=a(" special method."),xd=h(),k(Oe.$$.fragment),zd=h(),k(Ve.$$.fragment),kr=h(),ve=n("h2"),He=n("a"),On=n("span"),k(ro.$$.fragment),Fd=h(),Vn=n("span"),qd=a("TFWhisperForConditionalGeneration"),wr=h(),H=n("div"),k(so.$$.fragment),Ed=h(),ao=n("p"),Md=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Do=n("a"),Pd=a("TFPreTrainedModel"),Cd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd=h(),io=n("p"),Sd=a("This model is also a "),co=n("a"),Nd=a("tf.keras.Model"),Ad=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Id=h(),Z=n("div"),k(lo.$$.fragment),Ld=h(),be=n("p"),Dd=a("The "),Go=n("a"),Gd=a("TFWhisperForConditionalGeneration"),Od=a(" forward method, overrides the "),Hn=n("code"),Vd=a("__call__"),Hd=a(" special method."),Rd=h(),k(Re.$$.fragment),Ud=h(),k(Ue.$$.fragment),this.h()},l(t){const _=xl('[data-svelte="svelte-1phssyn"]',document.head);l=r(_,"META",{name:!0,content:!0}),_.forEach(o),b=p(t),f=r(t,"H1",{class:!0});var ho=s(f);u=r(ho,"A",{id:!0,class:!0,href:!0});var Rn=s(u);v=r(Rn,"SPAN",{});var Un=s(v);w(d.$$.fragment,Un),Un.forEach(o),Rn.forEach(o),m=p(ho),z=r(ho,"SPAN",{});var Bn=s(z);j=i(Bn,"Whisper"),Bn.forEach(o),ho.forEach(o),q=p(t),S=r(t,"H2",{class:!0});var po=s(S);A=r(po,"A",{id:!0,class:!0,href:!0});var Kn=s(A);nn=r(Kn,"SPAN",{});var Jn=s(nn);w(rt.$$.fragment,Jn),Jn.forEach(o),Kn.forEach(o),Yr=p(po),rn=r(po,"SPAN",{});var Zn=s(rn);es=i(Zn,"Overview"),Zn.forEach(o),po.forEach(o),er=p(t),ke=r(t,"P",{});var mo=s(ke);ts=i(mo,"The Whisper model was proposed in "),st=r(mo,"A",{href:!0,rel:!0});var Qn=s(st);os=i(Qn,"Robust Speech Recognition via Large-Scale Weak Supervision"),Qn.forEach(o),ns=i(mo," by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),mo.forEach(o),tr=p(t),uo=r(t,"P",{});var Xn=s(uo);rs=i(Xn,"The abstract from the paper is the following:"),Xn.forEach(o),or=p(t),fo=r(t,"P",{});var Yn=s(fo);sn=r(Yn,"EM",{});var Qd=s(sn);ss=i(Qd,"We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Qd.forEach(o),Yn.forEach(o),nr=p(t),_o=r(t,"P",{});var Xd=s(_o);as=i(Xd,"Tips:"),Xd.forEach(o),rr=p(t),R=r(t,"UL",{});var Be=s(R);an=r(Be,"LI",{});var Yd=s(an);is=i(Yd,"The model usually performs well without requiring any finetuning."),Yd.forEach(o),ds=p(Be),at=r(Be,"LI",{});var Tr=s(at);cs=i(Tr,"The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),go=r(Tr,"A",{href:!0});var ec=s(go);ls=i(ec,"generate()"),ec.forEach(o),hs=i(Tr," function for inference."),Tr.forEach(o),ps=p(Be),dn=r(Be,"LI",{});var tc=s(dn);ms=i(tc,"Inference is currently only implemented for short-form i.e. audio is pre-segmented into <=30s segments. Long-form (including timestamps) will be implemented in a future release."),tc.forEach(o),us=p(Be),it=r(Be,"LI",{});var $r=s(it);fs=i($r,"One can use "),vo=r($r,"A",{href:!0});var oc=s(vo);_s=i(oc,"WhisperProcessor"),oc.forEach(o),gs=i($r," to prepare audio for the model, and decode the predicted ID\u2019s back into text."),$r.forEach(o),Be.forEach(o),sr=p(t),U=r(t,"P",{});var Ke=s(U);vs=i(Ke,"This model was contributed by "),dt=r(Ke,"A",{href:!0,rel:!0});var nc=s(dt);bs=i(nc,"Arthur Zucker"),nc.forEach(o),ks=i(Ke,". The Tensorflow version of this model was contributed by "),ct=r(Ke,"A",{href:!0,rel:!0});var rc=s(ct);ws=i(rc,"amyeroberts"),rc.forEach(o),ys=i(Ke,`.
The original code can be found `),lt=r(Ke,"A",{href:!0,rel:!0});var sc=s(lt);Ts=i(sc,"here"),sc.forEach(o),$s=i(Ke,"."),Ke.forEach(o),ar=p(t),se=r(t,"H2",{class:!0});var Wr=s(se);we=r(Wr,"A",{id:!0,class:!0,href:!0});var ac=s(we);cn=r(ac,"SPAN",{});var ic=s(cn);w(ht.$$.fragment,ic),ic.forEach(o),ac.forEach(o),Ws=p(Wr),ln=r(Wr,"SPAN",{});var dc=s(ln);xs=i(dc,"WhisperConfig"),dc.forEach(o),Wr.forEach(o),ir=p(t),L=r(t,"DIV",{class:!0});var Je=s(L);w(pt.$$.fragment,Je),zs=p(Je),ae=r(Je,"P",{});var Oo=s(ae);Fs=i(Oo,"This is the configuration class to store the configuration of a "),bo=r(Oo,"A",{href:!0});var cc=s(bo);qs=i(cc,"WhisperModel"),cc.forEach(o),Es=i(Oo,`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),mt=r(Oo,"A",{href:!0,rel:!0});var lc=s(mt);Ms=i(lc,"openai/whisper-tiny"),lc.forEach(o),Ps=i(Oo," architecture."),Oo.forEach(o),Cs=p(Je),ie=r(Je,"P",{});var Vo=s(ie);js=i(Vo,"Configuration objects inherit from "),ko=r(Vo,"A",{href:!0});var hc=s(ko);Ss=i(hc,"PretrainedConfig"),hc.forEach(o),Ns=i(Vo,` and can be used to control the model outputs. Read the
documentation from `),wo=r(Vo,"A",{href:!0});var pc=s(wo);As=i(pc,"PretrainedConfig"),pc.forEach(o),Is=i(Vo," for more information."),Vo.forEach(o),Ls=p(Je),w(ye.$$.fragment,Je),Je.forEach(o),dr=p(t),de=r(t,"H2",{class:!0});var xr=s(de);Te=r(xr,"A",{id:!0,class:!0,href:!0});var mc=s(Te);hn=r(mc,"SPAN",{});var uc=s(hn);w(ut.$$.fragment,uc),uc.forEach(o),mc.forEach(o),Ds=p(xr),pn=r(xr,"SPAN",{});var fc=s(pn);Gs=i(fc,"WhisperTokenizer"),fc.forEach(o),xr.forEach(o),cr=p(t),E=r(t,"DIV",{class:!0});var P=s(E);w(ft.$$.fragment,P),Os=p(P),mn=r(P,"P",{});var _c=s(mn);Vs=i(_c,"Construct a Whisper tokenizer."),_c.forEach(o),Hs=p(P),_t=r(P,"P",{});var zr=s(_t);Rs=i(zr,"This tokenizer inherits from "),yo=r(zr,"A",{href:!0});var gc=s(yo);Us=i(gc,"PreTrainedTokenizer"),gc.forEach(o),Bs=i(zr,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),zr.forEach(o),Ks=p(P),X=r(P,"DIV",{class:!0});var Ho=s(X);w(gt.$$.fragment,Ho),Js=p(Ho),un=r(Ho,"P",{});var vc=s(un);Zs=i(vc,"Override the prefix tokens appended to the start of the label sequence. This method can be used standalone to"),vc.forEach(o),Qs=p(Ho),w($e.$$.fragment,Ho),Ho.forEach(o),Xs=p(P),We=r(P,"DIV",{class:!0});var Fr=s(We);w(vt.$$.fragment,Fr),Ys=p(Fr),fn=r(Fr,"P",{});var bc=s(fn);ea=i(bc,"Build model inputs from a sequence by appending eos_token_id."),bc.forEach(o),Fr.forEach(o),ta=p(P),xe=r(P,"DIV",{class:!0});var qr=s(xe);w(bt.$$.fragment,qr),oa=p(qr),kt=r(qr,"P",{});var Er=s(kt);na=i(Er,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_n=r(Er,"CODE",{});var kc=s(_n);ra=i(kc,"prepare_for_model"),kc.forEach(o),sa=i(Er," method."),Er.forEach(o),qr.forEach(o),aa=p(P),Y=r(P,"DIV",{class:!0});var Ro=s(Y);w(wt.$$.fragment,Ro),ia=p(Ro),To=r(Ro,"P",{});var Bd=s(To);da=i(Bd,"Create the token type IDs corresponding to the sequences passed. "),$o=r(Bd,"A",{href:!0});var wc=s($o);ca=i(wc,`What are token type
IDs?`),wc.forEach(o),Bd.forEach(o),la=p(Ro),gn=r(Ro,"P",{});var yc=s(gn);ha=i(yc,"Should be overridden in a subclass if the model has a special way of building those."),yc.forEach(o),Ro.forEach(o),pa=p(P),Wo=r(P,"DIV",{class:!0});var Tc=s(Wo);w(yt.$$.fragment,Tc),Tc.forEach(o),P.forEach(o),lr=p(t),ce=r(t,"H2",{class:!0});var Mr=s(ce);ze=r(Mr,"A",{id:!0,class:!0,href:!0});var $c=s(ze);vn=r($c,"SPAN",{});var Wc=s(vn);w(Tt.$$.fragment,Wc),Wc.forEach(o),$c.forEach(o),ma=p(Mr),bn=r(Mr,"SPAN",{});var xc=s(bn);ua=i(xc,"WhisperFeatureExtractor"),xc.forEach(o),Mr.forEach(o),hr=p(t),N=r(t,"DIV",{class:!0});var oe=s(N);w($t.$$.fragment,oe),fa=p(oe),kn=r(oe,"P",{});var zc=s(kn);_a=i(zc,"Constructs a Whisper feature extractor."),zc.forEach(o),ga=p(oe),Wt=r(oe,"P",{});var Pr=s(Wt);va=i(Pr,"This feature extractor inherits from "),xo=r(Pr,"A",{href:!0});var Fc=s(xo);ba=i(Fc,"WhisperFeatureExtractor"),Fc.forEach(o),ka=i(Pr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pr.forEach(o),wa=p(oe),le=r(oe,"P",{});var Uo=s(le);ya=i(Uo,"This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),wn=r(Uo,"CODE",{});var qc=s(wn);Ta=i(qc,"Short Time Fourier Transform"),qc.forEach(o),$a=i(Uo," which should match pytorch\u2019s "),yn=r(Uo,"CODE",{});var Ec=s(yn);Wa=i(Ec,"torch.stft"),Ec.forEach(o),xa=i(Uo," equivalent."),Uo.forEach(o),za=p(oe),Fe=r(oe,"DIV",{class:!0});var Cr=s(Fe);w(xt.$$.fragment,Cr),Fa=p(Cr),Tn=r(Cr,"P",{});var Mc=s(Tn);qa=i(Mc,"Main method to featurize and prepare for the model one or several sequence(s)."),Mc.forEach(o),Cr.forEach(o),oe.forEach(o),pr=p(t),he=r(t,"H2",{class:!0});var jr=s(he);qe=r(jr,"A",{id:!0,class:!0,href:!0});var Pc=s(qe);$n=r(Pc,"SPAN",{});var Cc=s($n);w(zt.$$.fragment,Cc),Cc.forEach(o),Pc.forEach(o),Ea=p(jr),Wn=r(jr,"SPAN",{});var jc=s(Wn);Ma=i(jc,"WhisperProcessor"),jc.forEach(o),jr.forEach(o),mr=p(t),M=r(t,"DIV",{class:!0});var C=s(M);w(Ft.$$.fragment,C),Pa=p(C),xn=r(C,"P",{});var Sc=s(xn);Ca=i(Sc,`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),Sc.forEach(o),ja=p(C),I=r(C,"P",{});var Q=s(I);zo=r(Q,"A",{href:!0});var Nc=s(zo);Sa=i(Nc,"WhisperProcessor"),Nc.forEach(o),Na=i(Q," offers all the functionalities of "),Fo=r(Q,"A",{href:!0});var Ac=s(Fo);Aa=i(Ac,"WhisperFeatureExtractor"),Ac.forEach(o),Ia=i(Q," and "),qo=r(Q,"A",{href:!0});var Ic=s(qo);La=i(Ic,"WhisperTokenizer"),Ic.forEach(o),Da=i(Q,`. See
the `),qt=r(Q,"A",{href:!0});var Kd=s(qt);zn=r(Kd,"STRONG",{});var Lc=s(zn);Ga=i(Lc,"call"),Lc.forEach(o),Oa=i(Kd,"()"),Kd.forEach(o),Va=i(Q," and "),Eo=r(Q,"A",{href:!0});var Dc=s(Eo);Ha=i(Dc,"decode()"),Dc.forEach(o),Ra=i(Q," for more information."),Q.forEach(o),Ua=p(C),Ee=r(C,"DIV",{class:!0});var Sr=s(Ee);w(Et.$$.fragment,Sr),Ba=p(Sr),D=r(Sr,"P",{});var ne=s(D);Ka=i(ne,"Forwards the "),Fn=r(ne,"CODE",{});var Gc=s(Fn);Ja=i(Gc,"audio"),Gc.forEach(o),Za=i(ne," argument to WhisperFeatureExtractor\u2019s "),Mt=r(ne,"A",{href:!0});var Jd=s(Mt);qn=r(Jd,"STRONG",{});var Oc=s(qn);Qa=i(Oc,"call"),Oc.forEach(o),Xa=i(Jd,"()"),Jd.forEach(o),Ya=i(ne," and the "),En=r(ne,"CODE",{});var Vc=s(En);ei=i(Vc,"text"),Vc.forEach(o),ti=i(ne,`
argument to `),Pt=r(ne,"A",{href:!0});var Zd=s(Pt);Mn=r(Zd,"STRONG",{});var Hc=s(Mn);oi=i(Hc,"call"),Hc.forEach(o),ni=i(Zd,"()"),Zd.forEach(o),ri=i(ne,`. Please refer to the doctsring of the above two methods for more
information.`),ne.forEach(o),Sr.forEach(o),si=p(C),ee=r(C,"DIV",{class:!0});var Bo=s(ee);w(Ct.$$.fragment,Bo),ai=p(Bo),Pn=r(Bo,"P",{});var Rc=s(Pn);ii=i(Rc,"Instantiate a processor associated with a pretrained model."),Rc.forEach(o),di=p(Bo),w(Me.$$.fragment,Bo),Bo.forEach(o),ci=p(C),te=r(C,"DIV",{class:!0});var Ko=s(te);w(jt.$$.fragment,Ko),li=p(Ko),St=r(Ko,"P",{});var Nr=s(St);hi=i(Nr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Mo=r(Nr,"A",{href:!0});var Uc=s(Mo);pi=i(Uc,"from_pretrained()"),Uc.forEach(o),mi=i(Nr," method."),Nr.forEach(o),ui=p(Ko),w(Pe.$$.fragment,Ko),Ko.forEach(o),fi=p(C),Ce=r(C,"DIV",{class:!0});var Ar=s(Ce);w(Nt.$$.fragment,Ar),_i=p(Ar),At=r(Ar,"P",{});var Ir=s(At);gi=i(Ir,"This method forwards all its arguments to WhisperTokenizer\u2019s "),Po=r(Ir,"A",{href:!0});var Bc=s(Po);vi=i(Bc,"batch_decode()"),Bc.forEach(o),bi=i(Ir,`. Please
refer to the docstring of this method for more information.`),Ir.forEach(o),Ar.forEach(o),ki=p(C),je=r(C,"DIV",{class:!0});var Lr=s(je);w(It.$$.fragment,Lr),wi=p(Lr),Lt=r(Lr,"P",{});var Dr=s(Lt);yi=i(Dr,"This method forwards all its arguments to WhisperTokenizer\u2019s "),Co=r(Dr,"A",{href:!0});var Kc=s(Co);Ti=i(Kc,"decode()"),Kc.forEach(o),$i=i(Dr,`. Please refer to
the docstring of this method for more information.`),Dr.forEach(o),Lr.forEach(o),C.forEach(o),ur=p(t),pe=r(t,"H2",{class:!0});var Gr=s(pe);Se=r(Gr,"A",{id:!0,class:!0,href:!0});var Jc=s(Se);Cn=r(Jc,"SPAN",{});var Zc=s(Cn);w(Dt.$$.fragment,Zc),Zc.forEach(o),Jc.forEach(o),Wi=p(Gr),jn=r(Gr,"SPAN",{});var Qc=s(jn);xi=i(Qc,"WhisperModel"),Qc.forEach(o),Gr.forEach(o),fr=p(t),G=r(t,"DIV",{class:!0});var Ze=s(G);w(Gt.$$.fragment,Ze),zi=p(Ze),Ot=r(Ze,"P",{});var Or=s(Ot);Fi=i(Or,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jo=r(Or,"A",{href:!0});var Xc=s(jo);qi=i(Xc,"PreTrainedModel"),Xc.forEach(o),Ei=i(Or,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Or.forEach(o),Mi=p(Ze),Vt=r(Ze,"P",{});var Vr=s(Vt);Pi=i(Vr,"This model is also a PyTorch "),Ht=r(Vr,"A",{href:!0,rel:!0});var Yc=s(Ht);Ci=i(Yc,"torch.nn.Module"),Yc.forEach(o),ji=i(Vr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vr.forEach(o),Si=p(Ze),B=r(Ze,"DIV",{class:!0});var Qe=s(B);w(Rt.$$.fragment,Qe),Ni=p(Qe),me=r(Qe,"P",{});var Jo=s(me);Ai=i(Jo,"The "),So=r(Jo,"A",{href:!0});var el=s(So);Ii=i(el,"WhisperModel"),el.forEach(o),Li=i(Jo," forward method, overrides the "),Sn=r(Jo,"CODE",{});var tl=s(Sn);Di=i(tl,"__call__"),tl.forEach(o),Gi=i(Jo," special method."),Jo.forEach(o),Oi=p(Qe),w(Ne.$$.fragment,Qe),Vi=p(Qe),w(Ae.$$.fragment,Qe),Qe.forEach(o),Ze.forEach(o),_r=p(t),ue=r(t,"H2",{class:!0});var Hr=s(ue);Ie=r(Hr,"A",{id:!0,class:!0,href:!0});var ol=s(Ie);Nn=r(ol,"SPAN",{});var nl=s(Nn);w(Ut.$$.fragment,nl),nl.forEach(o),ol.forEach(o),Hi=p(Hr),An=r(Hr,"SPAN",{});var rl=s(An);Ri=i(rl,"WhisperForConditionalGeneration"),rl.forEach(o),Hr.forEach(o),gr=p(t),O=r(t,"DIV",{class:!0});var Xe=s(O);w(Bt.$$.fragment,Xe),Ui=p(Xe),Kt=r(Xe,"P",{});var Rr=s(Kt);Bi=i(Rr,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),No=r(Rr,"A",{href:!0});var sl=s(No);Ki=i(sl,"PreTrainedModel"),sl.forEach(o),Ji=i(Rr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr.forEach(o),Zi=p(Xe),Jt=r(Xe,"P",{});var Ur=s(Jt);Qi=i(Ur,"This model is also a PyTorch "),Zt=r(Ur,"A",{href:!0,rel:!0});var al=s(Zt);Xi=i(al,"torch.nn.Module"),al.forEach(o),Yi=i(Ur,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ur.forEach(o),ed=p(Xe),K=r(Xe,"DIV",{class:!0});var Ye=s(K);w(Qt.$$.fragment,Ye),td=p(Ye),fe=r(Ye,"P",{});var Zo=s(fe);od=i(Zo,"The "),Ao=r(Zo,"A",{href:!0});var il=s(Ao);nd=i(il,"WhisperForConditionalGeneration"),il.forEach(o),rd=i(Zo," forward method, overrides the "),In=r(Zo,"CODE",{});var dl=s(In);sd=i(dl,"__call__"),dl.forEach(o),ad=i(Zo," special method."),Zo.forEach(o),id=p(Ye),w(Le.$$.fragment,Ye),dd=p(Ye),w(De.$$.fragment,Ye),Ye.forEach(o),Xe.forEach(o),vr=p(t),_e=r(t,"H2",{class:!0});var Br=s(_e);Ge=r(Br,"A",{id:!0,class:!0,href:!0});var cl=s(Ge);Ln=r(cl,"SPAN",{});var ll=s(Ln);w(Xt.$$.fragment,ll),ll.forEach(o),cl.forEach(o),cd=p(Br),Dn=r(Br,"SPAN",{});var hl=s(Dn);ld=i(hl,"TFWhisperModel"),hl.forEach(o),Br.forEach(o),br=p(t),V=r(t,"DIV",{class:!0});var et=s(V);w(Yt.$$.fragment,et),hd=p(et),eo=r(et,"P",{});var Kr=s(eo);pd=i(Kr,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Io=r(Kr,"A",{href:!0});var pl=s(Io);md=i(pl,"TFPreTrainedModel"),pl.forEach(o),ud=i(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(o),fd=p(et),to=r(et,"P",{});var Jr=s(to);_d=i(Jr,"This model is also a "),oo=r(Jr,"A",{href:!0,rel:!0});var ml=s(oo);gd=i(ml,"tf.keras.Model"),ml.forEach(o),vd=i(Jr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jr.forEach(o),bd=p(et),J=r(et,"DIV",{class:!0});var tt=s(J);w(no.$$.fragment,tt),kd=p(tt),ge=r(tt,"P",{});var Qo=s(ge);wd=i(Qo,"The "),Lo=r(Qo,"A",{href:!0});var ul=s(Lo);yd=i(ul,"TFWhisperModel"),ul.forEach(o),Td=i(Qo," forward method, overrides the "),Gn=r(Qo,"CODE",{});var fl=s(Gn);$d=i(fl,"__call__"),fl.forEach(o),Wd=i(Qo," special method."),Qo.forEach(o),xd=p(tt),w(Oe.$$.fragment,tt),zd=p(tt),w(Ve.$$.fragment,tt),tt.forEach(o),et.forEach(o),kr=p(t),ve=r(t,"H2",{class:!0});var Zr=s(ve);He=r(Zr,"A",{id:!0,class:!0,href:!0});var _l=s(He);On=r(_l,"SPAN",{});var gl=s(On);w(ro.$$.fragment,gl),gl.forEach(o),_l.forEach(o),Fd=p(Zr),Vn=r(Zr,"SPAN",{});var vl=s(Vn);qd=i(vl,"TFWhisperForConditionalGeneration"),vl.forEach(o),Zr.forEach(o),wr=p(t),H=r(t,"DIV",{class:!0});var ot=s(H);w(so.$$.fragment,ot),Ed=p(ot),ao=r(ot,"P",{});var Qr=s(ao);Md=i(Qr,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Do=r(Qr,"A",{href:!0});var bl=s(Do);Pd=i(bl,"TFPreTrainedModel"),bl.forEach(o),Cd=i(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(o),jd=p(ot),io=r(ot,"P",{});var Xr=s(io);Sd=i(Xr,"This model is also a "),co=r(Xr,"A",{href:!0,rel:!0});var kl=s(co);Nd=i(kl,"tf.keras.Model"),kl.forEach(o),Ad=i(Xr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xr.forEach(o),Id=p(ot),Z=r(ot,"DIV",{class:!0});var nt=s(Z);w(lo.$$.fragment,nt),Ld=p(nt),be=r(nt,"P",{});var Xo=s(be);Dd=i(Xo,"The "),Go=r(Xo,"A",{href:!0});var wl=s(Go);Gd=i(wl,"TFWhisperForConditionalGeneration"),wl.forEach(o),Od=i(Xo," forward method, overrides the "),Hn=r(Xo,"CODE",{});var yl=s(Hn);Vd=i(yl,"__call__"),yl.forEach(o),Hd=i(Xo," special method."),Xo.forEach(o),Rd=p(nt),w(Re.$$.fragment,nt),Ud=p(nt),w(Ue.$$.fragment,nt),nt.forEach(o),ot.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(Gl)),c(u,"id","whisper"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#whisper"),c(f,"class","relative group"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(S,"class","relative group"),c(st,"href","https://cdn.openai.com/papers/whisper.pdf"),c(st,"rel","nofollow"),c(go,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(vo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor"),c(dt,"href","https://huggingface.co/ArthurZ"),c(dt,"rel","nofollow"),c(ct,"href","https://huggingface.co/amyeroberts"),c(ct,"rel","nofollow"),c(lt,"href","https://github.com/openai/whisper"),c(lt,"rel","nofollow"),c(we,"id","transformers.WhisperConfig"),c(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(we,"href","#transformers.WhisperConfig"),c(se,"class","relative group"),c(bo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel"),c(mt,"href","https://huggingface.co/openai/whisper-tiny"),c(mt,"rel","nofollow"),c(ko,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(wo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.WhisperTokenizer"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.WhisperTokenizer"),c(de,"class","relative group"),c(yo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($o,"href","../glossary#token-type-ids"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"id","transformers.WhisperFeatureExtractor"),c(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ze,"href","#transformers.WhisperFeatureExtractor"),c(ce,"class","relative group"),c(xo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"id","transformers.WhisperProcessor"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#transformers.WhisperProcessor"),c(he,"class","relative group"),c(zo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor"),c(Fo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(qo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer"),c(qt,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.__call__"),c(Eo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.decode"),c(Mt,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"),c(Pt,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mo,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Co,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"id","transformers.WhisperModel"),c(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Se,"href","#transformers.WhisperModel"),c(pe,"class","relative group"),c(jo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ht,"rel","nofollow"),c(So,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.WhisperForConditionalGeneration"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.WhisperForConditionalGeneration"),c(ue,"class","relative group"),c(No,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Zt,"rel","nofollow"),c(Ao,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperForConditionalGeneration"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"id","transformers.TFWhisperModel"),c(Ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ge,"href","#transformers.TFWhisperModel"),c(_e,"class","relative group"),c(Io,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(oo,"rel","nofollow"),c(Lo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperModel"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.TFWhisperForConditionalGeneration"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.TFWhisperForConditionalGeneration"),c(ve,"class","relative group"),c(Do,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(co,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(co,"rel","nofollow"),c(Go,"href","/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperForConditionalGeneration"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,l),g(t,b,_),g(t,f,_),e(f,u),e(u,v),y(d,v,null),e(f,m),e(f,z),e(z,j),g(t,q,_),g(t,S,_),e(S,A),e(A,nn),y(rt,nn,null),e(S,Yr),e(S,rn),e(rn,es),g(t,er,_),g(t,ke,_),e(ke,ts),e(ke,st),e(st,os),e(ke,ns),g(t,tr,_),g(t,uo,_),e(uo,rs),g(t,or,_),g(t,fo,_),e(fo,sn),e(sn,ss),g(t,nr,_),g(t,_o,_),e(_o,as),g(t,rr,_),g(t,R,_),e(R,an),e(an,is),e(R,ds),e(R,at),e(at,cs),e(at,go),e(go,ls),e(at,hs),e(R,ps),e(R,dn),e(dn,ms),e(R,us),e(R,it),e(it,fs),e(it,vo),e(vo,_s),e(it,gs),g(t,sr,_),g(t,U,_),e(U,vs),e(U,dt),e(dt,bs),e(U,ks),e(U,ct),e(ct,ws),e(U,ys),e(U,lt),e(lt,Ts),e(U,$s),g(t,ar,_),g(t,se,_),e(se,we),e(we,cn),y(ht,cn,null),e(se,Ws),e(se,ln),e(ln,xs),g(t,ir,_),g(t,L,_),y(pt,L,null),e(L,zs),e(L,ae),e(ae,Fs),e(ae,bo),e(bo,qs),e(ae,Es),e(ae,mt),e(mt,Ms),e(ae,Ps),e(L,Cs),e(L,ie),e(ie,js),e(ie,ko),e(ko,Ss),e(ie,Ns),e(ie,wo),e(wo,As),e(ie,Is),e(L,Ls),y(ye,L,null),g(t,dr,_),g(t,de,_),e(de,Te),e(Te,hn),y(ut,hn,null),e(de,Ds),e(de,pn),e(pn,Gs),g(t,cr,_),g(t,E,_),y(ft,E,null),e(E,Os),e(E,mn),e(mn,Vs),e(E,Hs),e(E,_t),e(_t,Rs),e(_t,yo),e(yo,Us),e(_t,Bs),e(E,Ks),e(E,X),y(gt,X,null),e(X,Js),e(X,un),e(un,Zs),e(X,Qs),y($e,X,null),e(E,Xs),e(E,We),y(vt,We,null),e(We,Ys),e(We,fn),e(fn,ea),e(E,ta),e(E,xe),y(bt,xe,null),e(xe,oa),e(xe,kt),e(kt,na),e(kt,_n),e(_n,ra),e(kt,sa),e(E,aa),e(E,Y),y(wt,Y,null),e(Y,ia),e(Y,To),e(To,da),e(To,$o),e($o,ca),e(Y,la),e(Y,gn),e(gn,ha),e(E,pa),e(E,Wo),y(yt,Wo,null),g(t,lr,_),g(t,ce,_),e(ce,ze),e(ze,vn),y(Tt,vn,null),e(ce,ma),e(ce,bn),e(bn,ua),g(t,hr,_),g(t,N,_),y($t,N,null),e(N,fa),e(N,kn),e(kn,_a),e(N,ga),e(N,Wt),e(Wt,va),e(Wt,xo),e(xo,ba),e(Wt,ka),e(N,wa),e(N,le),e(le,ya),e(le,wn),e(wn,Ta),e(le,$a),e(le,yn),e(yn,Wa),e(le,xa),e(N,za),e(N,Fe),y(xt,Fe,null),e(Fe,Fa),e(Fe,Tn),e(Tn,qa),g(t,pr,_),g(t,he,_),e(he,qe),e(qe,$n),y(zt,$n,null),e(he,Ea),e(he,Wn),e(Wn,Ma),g(t,mr,_),g(t,M,_),y(Ft,M,null),e(M,Pa),e(M,xn),e(xn,Ca),e(M,ja),e(M,I),e(I,zo),e(zo,Sa),e(I,Na),e(I,Fo),e(Fo,Aa),e(I,Ia),e(I,qo),e(qo,La),e(I,Da),e(I,qt),e(qt,zn),e(zn,Ga),e(qt,Oa),e(I,Va),e(I,Eo),e(Eo,Ha),e(I,Ra),e(M,Ua),e(M,Ee),y(Et,Ee,null),e(Ee,Ba),e(Ee,D),e(D,Ka),e(D,Fn),e(Fn,Ja),e(D,Za),e(D,Mt),e(Mt,qn),e(qn,Qa),e(Mt,Xa),e(D,Ya),e(D,En),e(En,ei),e(D,ti),e(D,Pt),e(Pt,Mn),e(Mn,oi),e(Pt,ni),e(D,ri),e(M,si),e(M,ee),y(Ct,ee,null),e(ee,ai),e(ee,Pn),e(Pn,ii),e(ee,di),y(Me,ee,null),e(M,ci),e(M,te),y(jt,te,null),e(te,li),e(te,St),e(St,hi),e(St,Mo),e(Mo,pi),e(St,mi),e(te,ui),y(Pe,te,null),e(M,fi),e(M,Ce),y(Nt,Ce,null),e(Ce,_i),e(Ce,At),e(At,gi),e(At,Po),e(Po,vi),e(At,bi),e(M,ki),e(M,je),y(It,je,null),e(je,wi),e(je,Lt),e(Lt,yi),e(Lt,Co),e(Co,Ti),e(Lt,$i),g(t,ur,_),g(t,pe,_),e(pe,Se),e(Se,Cn),y(Dt,Cn,null),e(pe,Wi),e(pe,jn),e(jn,xi),g(t,fr,_),g(t,G,_),y(Gt,G,null),e(G,zi),e(G,Ot),e(Ot,Fi),e(Ot,jo),e(jo,qi),e(Ot,Ei),e(G,Mi),e(G,Vt),e(Vt,Pi),e(Vt,Ht),e(Ht,Ci),e(Vt,ji),e(G,Si),e(G,B),y(Rt,B,null),e(B,Ni),e(B,me),e(me,Ai),e(me,So),e(So,Ii),e(me,Li),e(me,Sn),e(Sn,Di),e(me,Gi),e(B,Oi),y(Ne,B,null),e(B,Vi),y(Ae,B,null),g(t,_r,_),g(t,ue,_),e(ue,Ie),e(Ie,Nn),y(Ut,Nn,null),e(ue,Hi),e(ue,An),e(An,Ri),g(t,gr,_),g(t,O,_),y(Bt,O,null),e(O,Ui),e(O,Kt),e(Kt,Bi),e(Kt,No),e(No,Ki),e(Kt,Ji),e(O,Zi),e(O,Jt),e(Jt,Qi),e(Jt,Zt),e(Zt,Xi),e(Jt,Yi),e(O,ed),e(O,K),y(Qt,K,null),e(K,td),e(K,fe),e(fe,od),e(fe,Ao),e(Ao,nd),e(fe,rd),e(fe,In),e(In,sd),e(fe,ad),e(K,id),y(Le,K,null),e(K,dd),y(De,K,null),g(t,vr,_),g(t,_e,_),e(_e,Ge),e(Ge,Ln),y(Xt,Ln,null),e(_e,cd),e(_e,Dn),e(Dn,ld),g(t,br,_),g(t,V,_),y(Yt,V,null),e(V,hd),e(V,eo),e(eo,pd),e(eo,Io),e(Io,md),e(eo,ud),e(V,fd),e(V,to),e(to,_d),e(to,oo),e(oo,gd),e(to,vd),e(V,bd),e(V,J),y(no,J,null),e(J,kd),e(J,ge),e(ge,wd),e(ge,Lo),e(Lo,yd),e(ge,Td),e(ge,Gn),e(Gn,$d),e(ge,Wd),e(J,xd),y(Oe,J,null),e(J,zd),y(Ve,J,null),g(t,kr,_),g(t,ve,_),e(ve,He),e(He,On),y(ro,On,null),e(ve,Fd),e(ve,Vn),e(Vn,qd),g(t,wr,_),g(t,H,_),y(so,H,null),e(H,Ed),e(H,ao),e(ao,Md),e(ao,Do),e(Do,Pd),e(ao,Cd),e(H,jd),e(H,io),e(io,Sd),e(io,co),e(co,Nd),e(io,Ad),e(H,Id),e(H,Z),y(lo,Z,null),e(Z,Ld),e(Z,be),e(be,Dd),e(be,Go),e(Go,Gd),e(be,Od),e(be,Hn),e(Hn,Vd),e(be,Hd),e(Z,Rd),y(Re,Z,null),e(Z,Ud),y(Ue,Z,null),yr=!0},p(t,[_]){const ho={};_&2&&(ho.$$scope={dirty:_,ctx:t}),ye.$set(ho);const Rn={};_&2&&(Rn.$$scope={dirty:_,ctx:t}),$e.$set(Rn);const Un={};_&2&&(Un.$$scope={dirty:_,ctx:t}),Me.$set(Un);const Bn={};_&2&&(Bn.$$scope={dirty:_,ctx:t}),Pe.$set(Bn);const po={};_&2&&(po.$$scope={dirty:_,ctx:t}),Ne.$set(po);const Kn={};_&2&&(Kn.$$scope={dirty:_,ctx:t}),Ae.$set(Kn);const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:t}),Le.$set(Jn);const Zn={};_&2&&(Zn.$$scope={dirty:_,ctx:t}),De.$set(Zn);const mo={};_&2&&(mo.$$scope={dirty:_,ctx:t}),Oe.$set(mo);const Qn={};_&2&&(Qn.$$scope={dirty:_,ctx:t}),Ve.$set(Qn);const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:t}),Re.$set(Xn);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:t}),Ue.$set(Yn)},i(t){yr||(T(d.$$.fragment,t),T(rt.$$.fragment,t),T(ht.$$.fragment,t),T(pt.$$.fragment,t),T(ye.$$.fragment,t),T(ut.$$.fragment,t),T(ft.$$.fragment,t),T(gt.$$.fragment,t),T($e.$$.fragment,t),T(vt.$$.fragment,t),T(bt.$$.fragment,t),T(wt.$$.fragment,t),T(yt.$$.fragment,t),T(Tt.$$.fragment,t),T($t.$$.fragment,t),T(xt.$$.fragment,t),T(zt.$$.fragment,t),T(Ft.$$.fragment,t),T(Et.$$.fragment,t),T(Ct.$$.fragment,t),T(Me.$$.fragment,t),T(jt.$$.fragment,t),T(Pe.$$.fragment,t),T(Nt.$$.fragment,t),T(It.$$.fragment,t),T(Dt.$$.fragment,t),T(Gt.$$.fragment,t),T(Rt.$$.fragment,t),T(Ne.$$.fragment,t),T(Ae.$$.fragment,t),T(Ut.$$.fragment,t),T(Bt.$$.fragment,t),T(Qt.$$.fragment,t),T(Le.$$.fragment,t),T(De.$$.fragment,t),T(Xt.$$.fragment,t),T(Yt.$$.fragment,t),T(no.$$.fragment,t),T(Oe.$$.fragment,t),T(Ve.$$.fragment,t),T(ro.$$.fragment,t),T(so.$$.fragment,t),T(lo.$$.fragment,t),T(Re.$$.fragment,t),T(Ue.$$.fragment,t),yr=!0)},o(t){$(d.$$.fragment,t),$(rt.$$.fragment,t),$(ht.$$.fragment,t),$(pt.$$.fragment,t),$(ye.$$.fragment,t),$(ut.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$($e.$$.fragment,t),$(vt.$$.fragment,t),$(bt.$$.fragment,t),$(wt.$$.fragment,t),$(yt.$$.fragment,t),$(Tt.$$.fragment,t),$($t.$$.fragment,t),$(xt.$$.fragment,t),$(zt.$$.fragment,t),$(Ft.$$.fragment,t),$(Et.$$.fragment,t),$(Ct.$$.fragment,t),$(Me.$$.fragment,t),$(jt.$$.fragment,t),$(Pe.$$.fragment,t),$(Nt.$$.fragment,t),$(It.$$.fragment,t),$(Dt.$$.fragment,t),$(Gt.$$.fragment,t),$(Rt.$$.fragment,t),$(Ne.$$.fragment,t),$(Ae.$$.fragment,t),$(Ut.$$.fragment,t),$(Bt.$$.fragment,t),$(Qt.$$.fragment,t),$(Le.$$.fragment,t),$(De.$$.fragment,t),$(Xt.$$.fragment,t),$(Yt.$$.fragment,t),$(no.$$.fragment,t),$(Oe.$$.fragment,t),$(Ve.$$.fragment,t),$(ro.$$.fragment,t),$(so.$$.fragment,t),$(lo.$$.fragment,t),$(Re.$$.fragment,t),$(Ue.$$.fragment,t),yr=!1},d(t){o(l),t&&o(b),t&&o(f),W(d),t&&o(q),t&&o(S),W(rt),t&&o(er),t&&o(ke),t&&o(tr),t&&o(uo),t&&o(or),t&&o(fo),t&&o(nr),t&&o(_o),t&&o(rr),t&&o(R),t&&o(sr),t&&o(U),t&&o(ar),t&&o(se),W(ht),t&&o(ir),t&&o(L),W(pt),W(ye),t&&o(dr),t&&o(de),W(ut),t&&o(cr),t&&o(E),W(ft),W(gt),W($e),W(vt),W(bt),W(wt),W(yt),t&&o(lr),t&&o(ce),W(Tt),t&&o(hr),t&&o(N),W($t),W(xt),t&&o(pr),t&&o(he),W(zt),t&&o(mr),t&&o(M),W(Ft),W(Et),W(Ct),W(Me),W(jt),W(Pe),W(Nt),W(It),t&&o(ur),t&&o(pe),W(Dt),t&&o(fr),t&&o(G),W(Gt),W(Rt),W(Ne),W(Ae),t&&o(_r),t&&o(ue),W(Ut),t&&o(gr),t&&o(O),W(Bt),W(Qt),W(Le),W(De),t&&o(vr),t&&o(_e),W(Xt),t&&o(br),t&&o(V),W(Yt),W(no),W(Oe),W(Ve),t&&o(kr),t&&o(ve),W(ro),t&&o(wr),t&&o(H),W(so),W(lo),W(Re),W(Ue)}}}const Gl={local:"whisper",sections:[{local:"overview",title:"Overview"},{local:"transformers.WhisperConfig",title:"WhisperConfig"},{local:"transformers.WhisperTokenizer",title:"WhisperTokenizer"},{local:"transformers.WhisperFeatureExtractor",title:"WhisperFeatureExtractor"},{local:"transformers.WhisperProcessor",title:"WhisperProcessor"},{local:"transformers.WhisperModel",title:"WhisperModel"},{local:"transformers.WhisperForConditionalGeneration",title:"WhisperForConditionalGeneration"},{local:"transformers.TFWhisperModel",title:"TFWhisperModel"},{local:"transformers.TFWhisperForConditionalGeneration",title:"TFWhisperForConditionalGeneration"}],title:"Whisper"};function Ol(x){return zl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jl extends Tl{constructor(l){super();$l(this,l,Ol,Dl,Wl,{})}}export{Jl as default,Gl as metadata};
