import{S as Tl,i as $l,s as Wl,e as n,k as p,w as k,t as a,M as xl,c as r,d as o,m as h,a as s,x as y,h as i,b as c,G as e,g,y as w,q as T,o as $,B as W,v as Fl,L as tn}from"../../chunks/vendor-hf-doc-builder.js";import{T as Yo}from"../../chunks/Tip-hf-doc-builder.js";import{D as z}from"../../chunks/Docstring-hf-doc-builder.js";import{C as on}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as re}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as en}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function zl(x){let l,b,f,u,v;return u=new on({props:{code:`from transformers import WhisperConfig, WhisperModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),b=a("Example:"),f=p(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=h(d),y(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),w(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function ql(x){let l,b,f,u,v;return u=new on({props:{code:`# instantiate the tokenizer and set the prefix token to Spanish
tokenizer = WhisperTokenizer.from_pretrained("openai/whisper-tiny", language="spanish")
# now switch the prefix token from Spanish to French
tokenizer.set_prefix_tokens(language="french")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate the tokenizer and set the prefix token to Spanish</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = WhisperTokenizer.from_pretrained(<span class="hljs-string">&quot;openai/whisper-tiny&quot;</span>, language=<span class="hljs-string">&quot;spanish&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># now switch the prefix token from Spanish to French</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.set_prefix_tokens(language=<span class="hljs-string">&quot;french&quot;</span>)`}}),{c(){l=n("p"),b=a("update the prefix tokens as required when fine-tuning. Example:"),f=p(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"update the prefix tokens as required when fine-tuning. Example:"),m.forEach(o),f=h(d),y(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),w(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function El(x){let l,b,f,u,v,d,m,F;return{c(){l=n("p"),b=a(`This class method is simply calling the feature extractor
`),f=n("a"),u=a("from_pretrained()"),v=a(` and the tokenizer
`),d=n("code"),m=a("~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),F=a(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(j){l=r(j,"P",{});var q=s(l);b=i(q,`This class method is simply calling the feature extractor
`),f=r(q,"A",{href:!0});var S=s(f);u=i(S,"from_pretrained()"),S.forEach(o),v=i(q,` and the tokenizer
`),d=r(q,"CODE",{});var A=s(d);m=i(A,"~tokenization_utils_base.PreTrainedTokenizer.from_pretrained"),A.forEach(o),F=i(q,` methods. Please refer to the docstrings of the
methods above for more information.`),q.forEach(o),this.h()},h(){c(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(j,q){g(j,l,q),e(l,b),e(l,f),e(f,u),e(l,v),e(l,d),e(d,m),e(l,F)},d(j){j&&o(l)}}}function Ml(x){let l,b,f,u,v,d,m,F;return{c(){l=n("p"),b=a("This class method is simply calling "),f=n("a"),u=a("save_pretrained()"),v=a(` and
`),d=n("a"),m=a("save_pretrained()"),F=a(`. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(j){l=r(j,"P",{});var q=s(l);b=i(q,"This class method is simply calling "),f=r(q,"A",{href:!0});var S=s(f);u=i(S,"save_pretrained()"),S.forEach(o),v=i(q,` and
`),d=r(q,"A",{href:!0});var A=s(d);m=i(A,"save_pretrained()"),A.forEach(o),F=i(q,`. Please refer to the docstrings of the
methods above for more information.`),q.forEach(o),this.h()},h(){c(f,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained"),c(d,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.save_pretrained")},m(j,q){g(j,l,q),e(l,b),e(l,f),e(f,u),e(l,v),e(l,d),e(d,m),e(l,F)},d(j){j&&o(l)}}}function Pl(x){let l,b,f,u,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var F=s(f);u=i(F,"Module"),F.forEach(o),v=i(m,`
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),f=p(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=h(d),y(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),w(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function jl(x){let l,b,f,u,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var F=s(f);u=i(F,"Module"),F.forEach(o),v=i(m,`
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),f=p(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=h(d),y(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),w(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function Nl(x){let l,b,f,u,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var F=s(f);u=i(F,"Module"),F.forEach(o),v=i(m,`
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">512</span>]`}}),{c(){l=n("p"),b=a("Example:"),f=p(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=h(d),y(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),w(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function Il(x){let l,b,f,u,v;return{c(){l=n("p"),b=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),u=a("Module"),v=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(m,"CODE",{});var F=s(f);u=i(F,"Module"),F.forEach(o),v=i(m,`
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
<span class="hljs-string">&#x27; Mr. Quilter is the apostle of the middle classes, and we are glad to welcome his gospel.&#x27;</span>`}}),{c(){l=n("p"),b=a("Example:"),f=p(),k(u.$$.fragment)},l(d){l=r(d,"P",{});var m=s(l);b=i(m,"Example:"),m.forEach(o),f=h(d),y(u.$$.fragment,d)},m(d,m){g(d,l,m),e(l,b),g(d,f,m),w(u,d,m),v=!0},p:tn,i(d){v||(T(u.$$.fragment,d),v=!0)},o(d){$(u.$$.fragment,d),v=!1},d(d){d&&o(l),d&&o(f),W(u,d)}}}function Ol(x){let l,b,f,u,v,d,m,F,j,q,S,A,nn,rt,Yr,rn,es,er,ke,ts,st,os,ns,tr,uo,rs,or,fo,sn,ss,nr,_o,as,rr,R,an,is,ds,at,cs,go,ls,ps,hs,dn,ms,us,it,fs,vo,_s,gs,sr,U,vs,dt,bs,ks,ct,ys,ws,lt,Ts,$s,ar,se,ye,cn,pt,Ws,ln,xs,ir,L,ht,Fs,ae,zs,bo,qs,Es,mt,Ms,Ps,Cs,ie,js,ko,Ss,Ns,yo,As,Is,Ls,we,dr,de,Te,pn,ut,Os,hn,Ds,cr,E,ft,Gs,mn,Vs,Hs,_t,Rs,wo,Us,Bs,Ks,X,gt,Js,un,Zs,Qs,$e,Xs,We,vt,Ys,fn,ea,ta,xe,bt,oa,kt,na,_n,ra,sa,aa,Y,yt,ia,To,da,$o,ca,la,gn,pa,ha,Wo,wt,lr,ce,Fe,vn,Tt,ma,bn,ua,pr,N,$t,fa,kn,_a,ga,Wt,va,xo,ba,ka,ya,le,wa,yn,Ta,$a,wn,Wa,xa,Fa,ze,xt,za,Tn,qa,hr,pe,qe,$n,Ft,Ea,Wn,Ma,mr,M,zt,Pa,xn,Ca,ja,I,Fo,Sa,Na,zo,Aa,Ia,qo,La,Oa,qt,Fn,Da,Ga,Va,Eo,Ha,Ra,Ua,Ee,Et,Ba,O,Ka,zn,Ja,Za,Mt,qn,Qa,Xa,Ya,En,ei,ti,Pt,Mn,oi,ni,ri,si,ee,Ct,ai,Pn,ii,di,Me,ci,te,jt,li,St,pi,Mo,hi,mi,ui,Pe,fi,Ce,Nt,_i,At,gi,Po,vi,bi,ki,je,It,yi,Lt,wi,Co,Ti,$i,ur,he,Se,Cn,Ot,Wi,jn,xi,fr,D,Dt,Fi,Gt,zi,jo,qi,Ei,Mi,Vt,Pi,Ht,Ci,ji,Si,B,Rt,Ni,me,Ai,So,Ii,Li,Sn,Oi,Di,Gi,Ne,Vi,Ae,_r,ue,Ie,Nn,Ut,Hi,An,Ri,gr,G,Bt,Ui,Kt,Bi,No,Ki,Ji,Zi,Jt,Qi,Zt,Xi,Yi,ed,K,Qt,td,fe,od,Ao,nd,rd,In,sd,ad,id,Le,dd,Oe,vr,_e,De,Ln,Xt,cd,On,ld,br,V,Yt,pd,eo,hd,Io,md,ud,fd,to,_d,oo,gd,vd,bd,J,no,kd,ge,yd,Lo,wd,Td,Dn,$d,Wd,xd,Ge,Fd,Ve,kr,ve,He,Gn,ro,zd,Vn,qd,yr,H,so,Ed,ao,Md,Oo,Pd,Cd,jd,io,Sd,co,Nd,Ad,Id,Z,lo,Ld,be,Od,Do,Dd,Gd,Hn,Vd,Hd,Rd,Re,Ud,Ue,wr;return d=new re({}),rt=new re({}),pt=new re({}),ht=new z({props:{name:"class transformers.WhisperConfig",anchor:"transformers.WhisperConfig",parameters:[{name:"vocab_size",val:" = 51865"},{name:"num_mel_bins",val:" = 80"},{name:"encoder_layers",val:" = 6"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_ffn_dim",val:" = 1536"},{name:"encoder_ffn_dim",val:" = 1536"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"decoder_start_token_id",val:" = 50257"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"scale_embedding",val:" = False"},{name:"max_source_positions",val:" = 1500"},{name:"max_target_positions",val:" = 448"},{name:"pad_token_id",val:" = 50256"},{name:"bos_token_id",val:" = 50257"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = True"},{name:"suppress_tokens",val:" = None"},{name:"begin_suppress_tokens",val:" = [220, 50256]"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 51865) &#x2014;
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
the token for <code>&quot; &quot;</code> (<code>blank_token_id</code>) and the <code>eos_token_id</code>`,name:"begin_suppress_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/configuration_whisper.py#L62"}}),we=new en({props:{anchor:"transformers.WhisperConfig.example",$$slots:{default:[zl]},$$scope:{ctx:x}}}),ut=new re({}),ft=new z({props:{name:"class transformers.WhisperTokenizer",anchor:"transformers.WhisperTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"normalizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|startoftranscript|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"language",val:" = None"},{name:"task",val:" = None"},{name:"predict_timestamps",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L213"}}),gt=new z({props:{name:"set_prefix_tokens",anchor:"transformers.WhisperTokenizer.set_prefix_tokens",parameters:[{name:"language",val:": str = None"},{name:"task",val:": str = None"},{name:"predict_timestamps",val:": bool = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
The language of the transcription text.`,name:"language"},{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Task identifier to append at the start of sequence (if any).`,name:"task"},{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.predict_timestamps",description:`<strong>predict_timestamps</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Whether to omit the <code>&lt;|notimestamps|&gt;</code> token at the start of the sequence.`,name:"predict_timestamps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L365"}}),$e=new en({props:{anchor:"transformers.WhisperTokenizer.set_prefix_tokens.example",$$slots:{default:[ql]},$$scope:{ctx:x}}}),vt=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.WhisperTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L421"}}),bt=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.WhisperTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.WhisperTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L429",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yt=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.WhisperTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2987",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wt=new z({props:{name:"save_vocabulary",anchor:"transformers.WhisperTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/tokenization_whisper.py#L527"}}),Tt=new re({}),$t=new z({props:{name:"class transformers.WhisperFeatureExtractor",anchor:"transformers.WhisperFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"hop_length",val:" = 160"},{name:"chunk_length",val:" = 30"},{name:"n_fft",val:" = 400"},{name:"padding_value",val:" = 0.0"},{name:"return_attention_mask",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.WhisperFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.WhisperFeatureExtractor.hop_length",description:`<strong>hop_length</strong> (<code>int</code>, defaults to 160) &#x2014;
Length of the overlaping windows for the STFT used to obtain the Mel Frequency coefficients.`,name:"hop_length"},{anchor:"transformers.WhisperFeatureExtractor.chunk_length",description:`<strong>chunk_length</strong> (<code>int</code>, defaults to 30) &#x2014;
The maximum number of chuncks of <code>sampling_rate</code> samples used to trim and pad longer or shorter audio
sequences.`,name:"chunk_length"},{anchor:"transformers.WhisperFeatureExtractor.n_fft",description:`<strong>n_fft</strong> (<code>int</code>, defaults to 400) &#x2014;
Size of the Fourier transform.`,name:"n_fft"},{anchor:"transformers.WhisperFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Padding value used to pad the audio. Should correspond to silences.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L32"}}),xt=new z({props:{name:"__call__",anchor:"transformers.WhisperFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"truncation",val:": bool = True"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"padding",val:": typing.Optional[str] = 'max_length'"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
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
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/feature_extraction_whisper.py#L218"}}),Ft=new re({}),zt=new z({props:{name:"class transformers.WhisperProcessor",anchor:"transformers.WhisperProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>WhisperFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor">WhisperFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.WhisperProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>WhisperTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer">WhisperTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L22"}}),Et=new z({props:{name:"__call__",anchor:"transformers.WhisperProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L77"}}),Ct=new z({props:{name:"from_pretrained",anchor:"transformers.WhisperProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L153"}}),Me=new Yo({props:{$$slots:{default:[El]},$$scope:{ctx:x}}}),jt=new z({props:{name:"save_pretrained",anchor:"transformers.WhisperProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.WhisperProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.WhisperProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/internal/image_processing_utils#transformers.ImageProcessingMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L95"}}),Pe=new Yo({props:{$$slots:{default:[Ml]},$$scope:{ctx:x}}}),Nt=new z({props:{name:"batch_decode",anchor:"transformers.WhisperProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L111"}}),It=new z({props:{name:"decode",anchor:"transformers.WhisperProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/processing_whisper.py#L118"}}),Ot=new re({}),Dt=new z({props:{name:"class transformers.WhisperModel",anchor:"transformers.WhisperModel",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L973"}}),Rt=new z({props:{name:"forward",anchor:"transformers.WhisperModel.forward",parameters:[{name:"input_features",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.WhisperModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1003",returnDescription:`
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
`}}),Ne=new Yo({props:{$$slots:{default:[Pl]},$$scope:{ctx:x}}}),Ae=new en({props:{anchor:"transformers.WhisperModel.forward.example",$$slots:{default:[Cl]},$$scope:{ctx:x}}}),Ut=new re({}),Bt=new z({props:{name:"class transformers.WhisperForConditionalGeneration",anchor:"transformers.WhisperForConditionalGeneration",parameters:[{name:"config",val:": WhisperConfig"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1097"}}),Qt=new z({props:{name:"forward",anchor:"transformers.WhisperForConditionalGeneration.forward",parameters:[{name:"input_features",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"decoder_attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"decoder_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"cross_attn_head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_outputs",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"decoder_inputs_embeds",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.WhisperForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
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
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_whisper.py#L1139",returnDescription:`
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
`}}),Le=new Yo({props:{$$slots:{default:[jl]},$$scope:{ctx:x}}}),Oe=new en({props:{anchor:"transformers.WhisperForConditionalGeneration.forward.example",$$slots:{default:[Sl]},$$scope:{ctx:x}}}),Xt=new re({}),Yt=new z({props:{name:"class transformers.TFWhisperModel",anchor:"transformers.TFWhisperModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1103"}}),no=new z({props:{name:"call",anchor:"transformers.TFWhisperModel.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
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
`}}),Ge=new Yo({props:{$$slots:{default:[Nl]},$$scope:{ctx:x}}}),Ve=new en({props:{anchor:"transformers.TFWhisperModel.call.example",$$slots:{default:[Al]},$$scope:{ctx:x}}}),ro=new re({}),so=new z({props:{name:"class transformers.TFWhisperForConditionalGeneration",anchor:"transformers.TFWhisperForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/whisper#transformers.WhisperConfig">WhisperConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/whisper/modeling_tf_whisper.py#L1211"}}),lo=new z({props:{name:"call",anchor:"transformers.TFWhisperForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"decoder_position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFWhisperForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, feature_size, sequence_length)</code>) &#x2014;
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
`}}),Re=new Yo({props:{$$slots:{default:[Il]},$$scope:{ctx:x}}}),Ue=new en({props:{anchor:"transformers.TFWhisperForConditionalGeneration.call.example",$$slots:{default:[Ll]},$$scope:{ctx:x}}}),{c(){l=n("meta"),b=p(),f=n("h1"),u=n("a"),v=n("span"),k(d.$$.fragment),m=p(),F=n("span"),j=a("Whisper"),q=p(),S=n("h2"),A=n("a"),nn=n("span"),k(rt.$$.fragment),Yr=p(),rn=n("span"),es=a("Overview"),er=p(),ke=n("p"),ts=a("The Whisper model was proposed in "),st=n("a"),os=a("Robust Speech Recognition via Large-Scale Weak Supervision"),ns=a(" by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),tr=p(),uo=n("p"),rs=a("The abstract from the paper is the following:"),or=p(),fo=n("p"),sn=n("em"),ss=a("We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),nr=p(),_o=n("p"),as=a("Tips:"),rr=p(),R=n("ul"),an=n("li"),is=a("The model usually performs well without requiring any finetuning."),ds=p(),at=n("li"),cs=a("The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),go=n("a"),ls=a("generate()"),ps=a(" function for inference."),hs=p(),dn=n("li"),ms=a("Inference is currently only implemented for short-form i.e. audio is pre-segmented into <=30s segments. Long-form (including timestamps) will be implemented in a future release."),us=p(),it=n("li"),fs=a("One can use "),vo=n("a"),_s=a("WhisperProcessor"),gs=a(" to prepare audio for the model, and decode the predicted ID\u2019s back into text."),sr=p(),U=n("p"),vs=a("This model was contributed by "),dt=n("a"),bs=a("Arthur Zucker"),ks=a(". The Tensorflow version of this model was contributed by "),ct=n("a"),ys=a("amyeroberts"),ws=a(`.
The original code can be found `),lt=n("a"),Ts=a("here"),$s=a("."),ar=p(),se=n("h2"),ye=n("a"),cn=n("span"),k(pt.$$.fragment),Ws=p(),ln=n("span"),xs=a("WhisperConfig"),ir=p(),L=n("div"),k(ht.$$.fragment),Fs=p(),ae=n("p"),zs=a("This is the configuration class to store the configuration of a "),bo=n("a"),qs=a("WhisperModel"),Es=a(`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),mt=n("a"),Ms=a("openai/whisper-tiny"),Ps=a(" architecture."),Cs=p(),ie=n("p"),js=a("Configuration objects inherit from "),ko=n("a"),Ss=a("PretrainedConfig"),Ns=a(` and can be used to control the model outputs. Read the
documentation from `),yo=n("a"),As=a("PretrainedConfig"),Is=a(" for more information."),Ls=p(),k(we.$$.fragment),dr=p(),de=n("h2"),Te=n("a"),pn=n("span"),k(ut.$$.fragment),Os=p(),hn=n("span"),Ds=a("WhisperTokenizer"),cr=p(),E=n("div"),k(ft.$$.fragment),Gs=p(),mn=n("p"),Vs=a("Construct a Whisper tokenizer."),Hs=p(),_t=n("p"),Rs=a("This tokenizer inherits from "),wo=n("a"),Us=a("PreTrainedTokenizer"),Bs=a(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Ks=p(),X=n("div"),k(gt.$$.fragment),Js=p(),un=n("p"),Zs=a("Override the prefix tokens appended to the start of the label sequence. This method can be used standalone to"),Qs=p(),k($e.$$.fragment),Xs=p(),We=n("div"),k(vt.$$.fragment),Ys=p(),fn=n("p"),ea=a("Build model inputs from a sequence by appending eos_token_id."),ta=p(),xe=n("div"),k(bt.$$.fragment),oa=p(),kt=n("p"),na=a(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_n=n("code"),ra=a("prepare_for_model"),sa=a(" method."),aa=p(),Y=n("div"),k(yt.$$.fragment),ia=p(),To=n("p"),da=a("Create the token type IDs corresponding to the sequences passed. "),$o=n("a"),ca=a(`What are token type
IDs?`),la=p(),gn=n("p"),pa=a("Should be overridden in a subclass if the model has a special way of building those."),ha=p(),Wo=n("div"),k(wt.$$.fragment),lr=p(),ce=n("h2"),Fe=n("a"),vn=n("span"),k(Tt.$$.fragment),ma=p(),bn=n("span"),ua=a("WhisperFeatureExtractor"),pr=p(),N=n("div"),k($t.$$.fragment),fa=p(),kn=n("p"),_a=a("Constructs a Whisper feature extractor."),ga=p(),Wt=n("p"),va=a("This feature extractor inherits from "),xo=n("a"),ba=a("WhisperFeatureExtractor"),ka=a(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),ya=p(),le=n("p"),wa=a("This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),yn=n("code"),Ta=a("Short Time Fourier Transform"),$a=a(" which should match pytorch\u2019s "),wn=n("code"),Wa=a("torch.stft"),xa=a(" equivalent."),Fa=p(),ze=n("div"),k(xt.$$.fragment),za=p(),Tn=n("p"),qa=a("Main method to featurize and prepare for the model one or several sequence(s)."),hr=p(),pe=n("h2"),qe=n("a"),$n=n("span"),k(Ft.$$.fragment),Ea=p(),Wn=n("span"),Ma=a("WhisperProcessor"),mr=p(),M=n("div"),k(zt.$$.fragment),Pa=p(),xn=n("p"),Ca=a(`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),ja=p(),I=n("p"),Fo=n("a"),Sa=a("WhisperProcessor"),Na=a(" offers all the functionalities of "),zo=n("a"),Aa=a("WhisperFeatureExtractor"),Ia=a(" and "),qo=n("a"),La=a("WhisperTokenizer"),Oa=a(`. See
the `),qt=n("a"),Fn=n("strong"),Da=a("call"),Ga=a("()"),Va=a(" and "),Eo=n("a"),Ha=a("decode()"),Ra=a(" for more information."),Ua=p(),Ee=n("div"),k(Et.$$.fragment),Ba=p(),O=n("p"),Ka=a("Forwards the "),zn=n("code"),Ja=a("audio"),Za=a(" argument to WhisperFeatureExtractor\u2019s "),Mt=n("a"),qn=n("strong"),Qa=a("call"),Xa=a("()"),Ya=a(" and the "),En=n("code"),ei=a("text"),ti=a(`
argument to `),Pt=n("a"),Mn=n("strong"),oi=a("call"),ni=a("()"),ri=a(`. Please refer to the doctsring of the above two methods for more
information.`),si=p(),ee=n("div"),k(Ct.$$.fragment),ai=p(),Pn=n("p"),ii=a("Instantiate a processor associated with a pretrained model."),di=p(),k(Me.$$.fragment),ci=p(),te=n("div"),k(jt.$$.fragment),li=p(),St=n("p"),pi=a(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Mo=n("a"),hi=a("from_pretrained()"),mi=a(" method."),ui=p(),k(Pe.$$.fragment),fi=p(),Ce=n("div"),k(Nt.$$.fragment),_i=p(),At=n("p"),gi=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),Po=n("a"),vi=a("batch_decode()"),bi=a(`. Please
refer to the docstring of this method for more information.`),ki=p(),je=n("div"),k(It.$$.fragment),yi=p(),Lt=n("p"),wi=a("This method forwards all its arguments to WhisperTokenizer\u2019s "),Co=n("a"),Ti=a("decode()"),$i=a(`. Please refer to
the docstring of this method for more information.`),ur=p(),he=n("h2"),Se=n("a"),Cn=n("span"),k(Ot.$$.fragment),Wi=p(),jn=n("span"),xi=a("WhisperModel"),fr=p(),D=n("div"),k(Dt.$$.fragment),Fi=p(),Gt=n("p"),zi=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jo=n("a"),qi=a("PreTrainedModel"),Ei=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mi=p(),Vt=n("p"),Pi=a("This model is also a PyTorch "),Ht=n("a"),Ci=a("torch.nn.Module"),ji=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Si=p(),B=n("div"),k(Rt.$$.fragment),Ni=p(),me=n("p"),Ai=a("The "),So=n("a"),Ii=a("WhisperModel"),Li=a(" forward method, overrides the "),Sn=n("code"),Oi=a("__call__"),Di=a(" special method."),Gi=p(),k(Ne.$$.fragment),Vi=p(),k(Ae.$$.fragment),_r=p(),ue=n("h2"),Ie=n("a"),Nn=n("span"),k(Ut.$$.fragment),Hi=p(),An=n("span"),Ri=a("WhisperForConditionalGeneration"),gr=p(),G=n("div"),k(Bt.$$.fragment),Ui=p(),Kt=n("p"),Bi=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),No=n("a"),Ki=a("PreTrainedModel"),Ji=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zi=p(),Jt=n("p"),Qi=a("This model is also a PyTorch "),Zt=n("a"),Xi=a("torch.nn.Module"),Yi=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ed=p(),K=n("div"),k(Qt.$$.fragment),td=p(),fe=n("p"),od=a("The "),Ao=n("a"),nd=a("WhisperForConditionalGeneration"),rd=a(" forward method, overrides the "),In=n("code"),sd=a("__call__"),ad=a(" special method."),id=p(),k(Le.$$.fragment),dd=p(),k(Oe.$$.fragment),vr=p(),_e=n("h2"),De=n("a"),Ln=n("span"),k(Xt.$$.fragment),cd=p(),On=n("span"),ld=a("TFWhisperModel"),br=p(),V=n("div"),k(Yt.$$.fragment),pd=p(),eo=n("p"),hd=a(`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Io=n("a"),md=a("TFPreTrainedModel"),ud=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd=p(),to=n("p"),_d=a("This model is also a "),oo=n("a"),gd=a("tf.keras.Model"),vd=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bd=p(),J=n("div"),k(no.$$.fragment),kd=p(),ge=n("p"),yd=a("The "),Lo=n("a"),wd=a("TFWhisperModel"),Td=a(" forward method, overrides the "),Dn=n("code"),$d=a("__call__"),Wd=a(" special method."),xd=p(),k(Ge.$$.fragment),Fd=p(),k(Ve.$$.fragment),kr=p(),ve=n("h2"),He=n("a"),Gn=n("span"),k(ro.$$.fragment),zd=p(),Vn=n("span"),qd=a("TFWhisperForConditionalGeneration"),yr=p(),H=n("div"),k(so.$$.fragment),Ed=p(),ao=n("p"),Md=a(`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Oo=n("a"),Pd=a("TFPreTrainedModel"),Cd=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd=p(),io=n("p"),Sd=a("This model is also a "),co=n("a"),Nd=a("tf.keras.Model"),Ad=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Id=p(),Z=n("div"),k(lo.$$.fragment),Ld=p(),be=n("p"),Od=a("The "),Do=n("a"),Dd=a("TFWhisperForConditionalGeneration"),Gd=a(" forward method, overrides the "),Hn=n("code"),Vd=a("__call__"),Hd=a(" special method."),Rd=p(),k(Re.$$.fragment),Ud=p(),k(Ue.$$.fragment),this.h()},l(t){const _=xl('[data-svelte="svelte-1phssyn"]',document.head);l=r(_,"META",{name:!0,content:!0}),_.forEach(o),b=h(t),f=r(t,"H1",{class:!0});var po=s(f);u=r(po,"A",{id:!0,class:!0,href:!0});var Rn=s(u);v=r(Rn,"SPAN",{});var Un=s(v);y(d.$$.fragment,Un),Un.forEach(o),Rn.forEach(o),m=h(po),F=r(po,"SPAN",{});var Bn=s(F);j=i(Bn,"Whisper"),Bn.forEach(o),po.forEach(o),q=h(t),S=r(t,"H2",{class:!0});var ho=s(S);A=r(ho,"A",{id:!0,class:!0,href:!0});var Kn=s(A);nn=r(Kn,"SPAN",{});var Jn=s(nn);y(rt.$$.fragment,Jn),Jn.forEach(o),Kn.forEach(o),Yr=h(ho),rn=r(ho,"SPAN",{});var Zn=s(rn);es=i(Zn,"Overview"),Zn.forEach(o),ho.forEach(o),er=h(t),ke=r(t,"P",{});var mo=s(ke);ts=i(mo,"The Whisper model was proposed in "),st=r(mo,"A",{href:!0,rel:!0});var Qn=s(st);os=i(Qn,"Robust Speech Recognition via Large-Scale Weak Supervision"),Qn.forEach(o),ns=i(mo," by Alec Radford, Jong Wook Kim, Tao Xu, Greg Brockman, Christine McLeavey, Ilya Sutskever."),mo.forEach(o),tr=h(t),uo=r(t,"P",{});var Xn=s(uo);rs=i(Xn,"The abstract from the paper is the following:"),Xn.forEach(o),or=h(t),fo=r(t,"P",{});var Yn=s(fo);sn=r(Yn,"EM",{});var Qd=s(sn);ss=i(Qd,"We study the capabilities of speech processing systems trained simply to predict large amounts of transcripts of audio on the internet. When scaled to 680,000 hours of multilingual and multitask supervision, the resulting models generalize well to standard benchmarks and are often competitive with prior fully supervised results but in a zeroshot transfer setting without the need for any finetuning. When compared to humans, the models approach their accuracy and robustness. We are releasing models and inference code to serve as a foundation for further work on robust speech processing."),Qd.forEach(o),Yn.forEach(o),nr=h(t),_o=r(t,"P",{});var Xd=s(_o);as=i(Xd,"Tips:"),Xd.forEach(o),rr=h(t),R=r(t,"UL",{});var Be=s(R);an=r(Be,"LI",{});var Yd=s(an);is=i(Yd,"The model usually performs well without requiring any finetuning."),Yd.forEach(o),ds=h(Be),at=r(Be,"LI",{});var Tr=s(at);cs=i(Tr,"The architecture follows a classic encoder-decoder architecture, which means that it relies on the "),go=r(Tr,"A",{href:!0});var ec=s(go);ls=i(ec,"generate()"),ec.forEach(o),ps=i(Tr," function for inference."),Tr.forEach(o),hs=h(Be),dn=r(Be,"LI",{});var tc=s(dn);ms=i(tc,"Inference is currently only implemented for short-form i.e. audio is pre-segmented into <=30s segments. Long-form (including timestamps) will be implemented in a future release."),tc.forEach(o),us=h(Be),it=r(Be,"LI",{});var $r=s(it);fs=i($r,"One can use "),vo=r($r,"A",{href:!0});var oc=s(vo);_s=i(oc,"WhisperProcessor"),oc.forEach(o),gs=i($r," to prepare audio for the model, and decode the predicted ID\u2019s back into text."),$r.forEach(o),Be.forEach(o),sr=h(t),U=r(t,"P",{});var Ke=s(U);vs=i(Ke,"This model was contributed by "),dt=r(Ke,"A",{href:!0,rel:!0});var nc=s(dt);bs=i(nc,"Arthur Zucker"),nc.forEach(o),ks=i(Ke,". The Tensorflow version of this model was contributed by "),ct=r(Ke,"A",{href:!0,rel:!0});var rc=s(ct);ys=i(rc,"amyeroberts"),rc.forEach(o),ws=i(Ke,`.
The original code can be found `),lt=r(Ke,"A",{href:!0,rel:!0});var sc=s(lt);Ts=i(sc,"here"),sc.forEach(o),$s=i(Ke,"."),Ke.forEach(o),ar=h(t),se=r(t,"H2",{class:!0});var Wr=s(se);ye=r(Wr,"A",{id:!0,class:!0,href:!0});var ac=s(ye);cn=r(ac,"SPAN",{});var ic=s(cn);y(pt.$$.fragment,ic),ic.forEach(o),ac.forEach(o),Ws=h(Wr),ln=r(Wr,"SPAN",{});var dc=s(ln);xs=i(dc,"WhisperConfig"),dc.forEach(o),Wr.forEach(o),ir=h(t),L=r(t,"DIV",{class:!0});var Je=s(L);y(ht.$$.fragment,Je),Fs=h(Je),ae=r(Je,"P",{});var Go=s(ae);zs=i(Go,"This is the configuration class to store the configuration of a "),bo=r(Go,"A",{href:!0});var cc=s(bo);qs=i(cc,"WhisperModel"),cc.forEach(o),Es=i(Go,`. It is used to instantiate a
Whisper model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Whisper
`),mt=r(Go,"A",{href:!0,rel:!0});var lc=s(mt);Ms=i(lc,"openai/whisper-tiny"),lc.forEach(o),Ps=i(Go," architecture."),Go.forEach(o),Cs=h(Je),ie=r(Je,"P",{});var Vo=s(ie);js=i(Vo,"Configuration objects inherit from "),ko=r(Vo,"A",{href:!0});var pc=s(ko);Ss=i(pc,"PretrainedConfig"),pc.forEach(o),Ns=i(Vo,` and can be used to control the model outputs. Read the
documentation from `),yo=r(Vo,"A",{href:!0});var hc=s(yo);As=i(hc,"PretrainedConfig"),hc.forEach(o),Is=i(Vo," for more information."),Vo.forEach(o),Ls=h(Je),y(we.$$.fragment,Je),Je.forEach(o),dr=h(t),de=r(t,"H2",{class:!0});var xr=s(de);Te=r(xr,"A",{id:!0,class:!0,href:!0});var mc=s(Te);pn=r(mc,"SPAN",{});var uc=s(pn);y(ut.$$.fragment,uc),uc.forEach(o),mc.forEach(o),Os=h(xr),hn=r(xr,"SPAN",{});var fc=s(hn);Ds=i(fc,"WhisperTokenizer"),fc.forEach(o),xr.forEach(o),cr=h(t),E=r(t,"DIV",{class:!0});var P=s(E);y(ft.$$.fragment,P),Gs=h(P),mn=r(P,"P",{});var _c=s(mn);Vs=i(_c,"Construct a Whisper tokenizer."),_c.forEach(o),Hs=h(P),_t=r(P,"P",{});var Fr=s(_t);Rs=i(Fr,"This tokenizer inherits from "),wo=r(Fr,"A",{href:!0});var gc=s(wo);Us=i(gc,"PreTrainedTokenizer"),gc.forEach(o),Bs=i(Fr,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Fr.forEach(o),Ks=h(P),X=r(P,"DIV",{class:!0});var Ho=s(X);y(gt.$$.fragment,Ho),Js=h(Ho),un=r(Ho,"P",{});var vc=s(un);Zs=i(vc,"Override the prefix tokens appended to the start of the label sequence. This method can be used standalone to"),vc.forEach(o),Qs=h(Ho),y($e.$$.fragment,Ho),Ho.forEach(o),Xs=h(P),We=r(P,"DIV",{class:!0});var zr=s(We);y(vt.$$.fragment,zr),Ys=h(zr),fn=r(zr,"P",{});var bc=s(fn);ea=i(bc,"Build model inputs from a sequence by appending eos_token_id."),bc.forEach(o),zr.forEach(o),ta=h(P),xe=r(P,"DIV",{class:!0});var qr=s(xe);y(bt.$$.fragment,qr),oa=h(qr),kt=r(qr,"P",{});var Er=s(kt);na=i(Er,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_n=r(Er,"CODE",{});var kc=s(_n);ra=i(kc,"prepare_for_model"),kc.forEach(o),sa=i(Er," method."),Er.forEach(o),qr.forEach(o),aa=h(P),Y=r(P,"DIV",{class:!0});var Ro=s(Y);y(yt.$$.fragment,Ro),ia=h(Ro),To=r(Ro,"P",{});var Bd=s(To);da=i(Bd,"Create the token type IDs corresponding to the sequences passed. "),$o=r(Bd,"A",{href:!0});var yc=s($o);ca=i(yc,`What are token type
IDs?`),yc.forEach(o),Bd.forEach(o),la=h(Ro),gn=r(Ro,"P",{});var wc=s(gn);pa=i(wc,"Should be overridden in a subclass if the model has a special way of building those."),wc.forEach(o),Ro.forEach(o),ha=h(P),Wo=r(P,"DIV",{class:!0});var Tc=s(Wo);y(wt.$$.fragment,Tc),Tc.forEach(o),P.forEach(o),lr=h(t),ce=r(t,"H2",{class:!0});var Mr=s(ce);Fe=r(Mr,"A",{id:!0,class:!0,href:!0});var $c=s(Fe);vn=r($c,"SPAN",{});var Wc=s(vn);y(Tt.$$.fragment,Wc),Wc.forEach(o),$c.forEach(o),ma=h(Mr),bn=r(Mr,"SPAN",{});var xc=s(bn);ua=i(xc,"WhisperFeatureExtractor"),xc.forEach(o),Mr.forEach(o),pr=h(t),N=r(t,"DIV",{class:!0});var oe=s(N);y($t.$$.fragment,oe),fa=h(oe),kn=r(oe,"P",{});var Fc=s(kn);_a=i(Fc,"Constructs a Whisper feature extractor."),Fc.forEach(o),ga=h(oe),Wt=r(oe,"P",{});var Pr=s(Wt);va=i(Pr,"This feature extractor inherits from "),xo=r(Pr,"A",{href:!0});var zc=s(xo);ba=i(zc,"WhisperFeatureExtractor"),zc.forEach(o),ka=i(Pr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pr.forEach(o),ya=h(oe),le=r(oe,"P",{});var Uo=s(le);wa=i(Uo,"This class extracts mel-filter bank features from raw speech using a custom numpy implementation of the "),yn=r(Uo,"CODE",{});var qc=s(yn);Ta=i(qc,"Short Time Fourier Transform"),qc.forEach(o),$a=i(Uo," which should match pytorch\u2019s "),wn=r(Uo,"CODE",{});var Ec=s(wn);Wa=i(Ec,"torch.stft"),Ec.forEach(o),xa=i(Uo," equivalent."),Uo.forEach(o),Fa=h(oe),ze=r(oe,"DIV",{class:!0});var Cr=s(ze);y(xt.$$.fragment,Cr),za=h(Cr),Tn=r(Cr,"P",{});var Mc=s(Tn);qa=i(Mc,"Main method to featurize and prepare for the model one or several sequence(s)."),Mc.forEach(o),Cr.forEach(o),oe.forEach(o),hr=h(t),pe=r(t,"H2",{class:!0});var jr=s(pe);qe=r(jr,"A",{id:!0,class:!0,href:!0});var Pc=s(qe);$n=r(Pc,"SPAN",{});var Cc=s($n);y(Ft.$$.fragment,Cc),Cc.forEach(o),Pc.forEach(o),Ea=h(jr),Wn=r(jr,"SPAN",{});var jc=s(Wn);Ma=i(jc,"WhisperProcessor"),jc.forEach(o),jr.forEach(o),mr=h(t),M=r(t,"DIV",{class:!0});var C=s(M);y(zt.$$.fragment,C),Pa=h(C),xn=r(C,"P",{});var Sc=s(xn);Ca=i(Sc,`Constructs a Whisper processor which wraps a Whisper feature extractor and a Whisper tokenizer into a single
processor.`),Sc.forEach(o),ja=h(C),I=r(C,"P",{});var Q=s(I);Fo=r(Q,"A",{href:!0});var Nc=s(Fo);Sa=i(Nc,"WhisperProcessor"),Nc.forEach(o),Na=i(Q," offers all the functionalities of "),zo=r(Q,"A",{href:!0});var Ac=s(zo);Aa=i(Ac,"WhisperFeatureExtractor"),Ac.forEach(o),Ia=i(Q," and "),qo=r(Q,"A",{href:!0});var Ic=s(qo);La=i(Ic,"WhisperTokenizer"),Ic.forEach(o),Oa=i(Q,`. See
the `),qt=r(Q,"A",{href:!0});var Kd=s(qt);Fn=r(Kd,"STRONG",{});var Lc=s(Fn);Da=i(Lc,"call"),Lc.forEach(o),Ga=i(Kd,"()"),Kd.forEach(o),Va=i(Q," and "),Eo=r(Q,"A",{href:!0});var Oc=s(Eo);Ha=i(Oc,"decode()"),Oc.forEach(o),Ra=i(Q," for more information."),Q.forEach(o),Ua=h(C),Ee=r(C,"DIV",{class:!0});var Sr=s(Ee);y(Et.$$.fragment,Sr),Ba=h(Sr),O=r(Sr,"P",{});var ne=s(O);Ka=i(ne,"Forwards the "),zn=r(ne,"CODE",{});var Dc=s(zn);Ja=i(Dc,"audio"),Dc.forEach(o),Za=i(ne," argument to WhisperFeatureExtractor\u2019s "),Mt=r(ne,"A",{href:!0});var Jd=s(Mt);qn=r(Jd,"STRONG",{});var Gc=s(qn);Qa=i(Gc,"call"),Gc.forEach(o),Xa=i(Jd,"()"),Jd.forEach(o),Ya=i(ne," and the "),En=r(ne,"CODE",{});var Vc=s(En);ei=i(Vc,"text"),Vc.forEach(o),ti=i(ne,`
argument to `),Pt=r(ne,"A",{href:!0});var Zd=s(Pt);Mn=r(Zd,"STRONG",{});var Hc=s(Mn);oi=i(Hc,"call"),Hc.forEach(o),ni=i(Zd,"()"),Zd.forEach(o),ri=i(ne,`. Please refer to the doctsring of the above two methods for more
information.`),ne.forEach(o),Sr.forEach(o),si=h(C),ee=r(C,"DIV",{class:!0});var Bo=s(ee);y(Ct.$$.fragment,Bo),ai=h(Bo),Pn=r(Bo,"P",{});var Rc=s(Pn);ii=i(Rc,"Instantiate a processor associated with a pretrained model."),Rc.forEach(o),di=h(Bo),y(Me.$$.fragment,Bo),Bo.forEach(o),ci=h(C),te=r(C,"DIV",{class:!0});var Ko=s(te);y(jt.$$.fragment,Ko),li=h(Ko),St=r(Ko,"P",{});var Nr=s(St);pi=i(Nr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Mo=r(Nr,"A",{href:!0});var Uc=s(Mo);hi=i(Uc,"from_pretrained()"),Uc.forEach(o),mi=i(Nr," method."),Nr.forEach(o),ui=h(Ko),y(Pe.$$.fragment,Ko),Ko.forEach(o),fi=h(C),Ce=r(C,"DIV",{class:!0});var Ar=s(Ce);y(Nt.$$.fragment,Ar),_i=h(Ar),At=r(Ar,"P",{});var Ir=s(At);gi=i(Ir,"This method forwards all its arguments to WhisperTokenizer\u2019s "),Po=r(Ir,"A",{href:!0});var Bc=s(Po);vi=i(Bc,"batch_decode()"),Bc.forEach(o),bi=i(Ir,`. Please
refer to the docstring of this method for more information.`),Ir.forEach(o),Ar.forEach(o),ki=h(C),je=r(C,"DIV",{class:!0});var Lr=s(je);y(It.$$.fragment,Lr),yi=h(Lr),Lt=r(Lr,"P",{});var Or=s(Lt);wi=i(Or,"This method forwards all its arguments to WhisperTokenizer\u2019s "),Co=r(Or,"A",{href:!0});var Kc=s(Co);Ti=i(Kc,"decode()"),Kc.forEach(o),$i=i(Or,`. Please refer to
the docstring of this method for more information.`),Or.forEach(o),Lr.forEach(o),C.forEach(o),ur=h(t),he=r(t,"H2",{class:!0});var Dr=s(he);Se=r(Dr,"A",{id:!0,class:!0,href:!0});var Jc=s(Se);Cn=r(Jc,"SPAN",{});var Zc=s(Cn);y(Ot.$$.fragment,Zc),Zc.forEach(o),Jc.forEach(o),Wi=h(Dr),jn=r(Dr,"SPAN",{});var Qc=s(jn);xi=i(Qc,"WhisperModel"),Qc.forEach(o),Dr.forEach(o),fr=h(t),D=r(t,"DIV",{class:!0});var Ze=s(D);y(Dt.$$.fragment,Ze),Fi=h(Ze),Gt=r(Ze,"P",{});var Gr=s(Gt);zi=i(Gr,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jo=r(Gr,"A",{href:!0});var Xc=s(jo);qi=i(Xc,"PreTrainedModel"),Xc.forEach(o),Ei=i(Gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gr.forEach(o),Mi=h(Ze),Vt=r(Ze,"P",{});var Vr=s(Vt);Pi=i(Vr,"This model is also a PyTorch "),Ht=r(Vr,"A",{href:!0,rel:!0});var Yc=s(Ht);Ci=i(Yc,"torch.nn.Module"),Yc.forEach(o),ji=i(Vr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vr.forEach(o),Si=h(Ze),B=r(Ze,"DIV",{class:!0});var Qe=s(B);y(Rt.$$.fragment,Qe),Ni=h(Qe),me=r(Qe,"P",{});var Jo=s(me);Ai=i(Jo,"The "),So=r(Jo,"A",{href:!0});var el=s(So);Ii=i(el,"WhisperModel"),el.forEach(o),Li=i(Jo," forward method, overrides the "),Sn=r(Jo,"CODE",{});var tl=s(Sn);Oi=i(tl,"__call__"),tl.forEach(o),Di=i(Jo," special method."),Jo.forEach(o),Gi=h(Qe),y(Ne.$$.fragment,Qe),Vi=h(Qe),y(Ae.$$.fragment,Qe),Qe.forEach(o),Ze.forEach(o),_r=h(t),ue=r(t,"H2",{class:!0});var Hr=s(ue);Ie=r(Hr,"A",{id:!0,class:!0,href:!0});var ol=s(Ie);Nn=r(ol,"SPAN",{});var nl=s(Nn);y(Ut.$$.fragment,nl),nl.forEach(o),ol.forEach(o),Hi=h(Hr),An=r(Hr,"SPAN",{});var rl=s(An);Ri=i(rl,"WhisperForConditionalGeneration"),rl.forEach(o),Hr.forEach(o),gr=h(t),G=r(t,"DIV",{class:!0});var Xe=s(G);y(Bt.$$.fragment,Xe),Ui=h(Xe),Kt=r(Xe,"P",{});var Rr=s(Kt);Bi=i(Rr,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),No=r(Rr,"A",{href:!0});var sl=s(No);Ki=i(sl,"PreTrainedModel"),sl.forEach(o),Ji=i(Rr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr.forEach(o),Zi=h(Xe),Jt=r(Xe,"P",{});var Ur=s(Jt);Qi=i(Ur,"This model is also a PyTorch "),Zt=r(Ur,"A",{href:!0,rel:!0});var al=s(Zt);Xi=i(al,"torch.nn.Module"),al.forEach(o),Yi=i(Ur,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ur.forEach(o),ed=h(Xe),K=r(Xe,"DIV",{class:!0});var Ye=s(K);y(Qt.$$.fragment,Ye),td=h(Ye),fe=r(Ye,"P",{});var Zo=s(fe);od=i(Zo,"The "),Ao=r(Zo,"A",{href:!0});var il=s(Ao);nd=i(il,"WhisperForConditionalGeneration"),il.forEach(o),rd=i(Zo," forward method, overrides the "),In=r(Zo,"CODE",{});var dl=s(In);sd=i(dl,"__call__"),dl.forEach(o),ad=i(Zo," special method."),Zo.forEach(o),id=h(Ye),y(Le.$$.fragment,Ye),dd=h(Ye),y(Oe.$$.fragment,Ye),Ye.forEach(o),Xe.forEach(o),vr=h(t),_e=r(t,"H2",{class:!0});var Br=s(_e);De=r(Br,"A",{id:!0,class:!0,href:!0});var cl=s(De);Ln=r(cl,"SPAN",{});var ll=s(Ln);y(Xt.$$.fragment,ll),ll.forEach(o),cl.forEach(o),cd=h(Br),On=r(Br,"SPAN",{});var pl=s(On);ld=i(pl,"TFWhisperModel"),pl.forEach(o),Br.forEach(o),br=h(t),V=r(t,"DIV",{class:!0});var et=s(V);y(Yt.$$.fragment,et),pd=h(et),eo=r(et,"P",{});var Kr=s(eo);hd=i(Kr,`The bare Whisper Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Io=r(Kr,"A",{href:!0});var hl=s(Io);md=i(hl,"TFPreTrainedModel"),hl.forEach(o),ud=i(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(o),fd=h(et),to=r(et,"P",{});var Jr=s(to);_d=i(Jr,"This model is also a "),oo=r(Jr,"A",{href:!0,rel:!0});var ml=s(oo);gd=i(ml,"tf.keras.Model"),ml.forEach(o),vd=i(Jr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jr.forEach(o),bd=h(et),J=r(et,"DIV",{class:!0});var tt=s(J);y(no.$$.fragment,tt),kd=h(tt),ge=r(tt,"P",{});var Qo=s(ge);yd=i(Qo,"The "),Lo=r(Qo,"A",{href:!0});var ul=s(Lo);wd=i(ul,"TFWhisperModel"),ul.forEach(o),Td=i(Qo," forward method, overrides the "),Dn=r(Qo,"CODE",{});var fl=s(Dn);$d=i(fl,"__call__"),fl.forEach(o),Wd=i(Qo," special method."),Qo.forEach(o),xd=h(tt),y(Ge.$$.fragment,tt),Fd=h(tt),y(Ve.$$.fragment,tt),tt.forEach(o),et.forEach(o),kr=h(t),ve=r(t,"H2",{class:!0});var Zr=s(ve);He=r(Zr,"A",{id:!0,class:!0,href:!0});var _l=s(He);Gn=r(_l,"SPAN",{});var gl=s(Gn);y(ro.$$.fragment,gl),gl.forEach(o),_l.forEach(o),zd=h(Zr),Vn=r(Zr,"SPAN",{});var vl=s(Vn);qd=i(vl,"TFWhisperForConditionalGeneration"),vl.forEach(o),Zr.forEach(o),yr=h(t),H=r(t,"DIV",{class:!0});var ot=s(H);y(so.$$.fragment,ot),Ed=h(ot),ao=r(ot,"P",{});var Qr=s(ao);Md=i(Qr,`The Whisper Model with a language modeling head. Can be used for automatic speech recognition.
This model inherits from `),Oo=r(Qr,"A",{href:!0});var bl=s(Oo);Pd=i(bl,"TFPreTrainedModel"),bl.forEach(o),Cd=i(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(o),jd=h(ot),io=r(ot,"P",{});var Xr=s(io);Sd=i(Xr,"This model is also a "),co=r(Xr,"A",{href:!0,rel:!0});var kl=s(co);Nd=i(kl,"tf.keras.Model"),kl.forEach(o),Ad=i(Xr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xr.forEach(o),Id=h(ot),Z=r(ot,"DIV",{class:!0});var nt=s(Z);y(lo.$$.fragment,nt),Ld=h(nt),be=r(nt,"P",{});var Xo=s(be);Od=i(Xo,"The "),Do=r(Xo,"A",{href:!0});var yl=s(Do);Dd=i(yl,"TFWhisperForConditionalGeneration"),yl.forEach(o),Gd=i(Xo," forward method, overrides the "),Hn=r(Xo,"CODE",{});var wl=s(Hn);Vd=i(wl,"__call__"),wl.forEach(o),Hd=i(Xo," special method."),Xo.forEach(o),Rd=h(nt),y(Re.$$.fragment,nt),Ud=h(nt),y(Ue.$$.fragment,nt),nt.forEach(o),ot.forEach(o),this.h()},h(){c(l,"name","hf:doc:metadata"),c(l,"content",JSON.stringify(Dl)),c(u,"id","whisper"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#whisper"),c(f,"class","relative group"),c(A,"id","overview"),c(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(A,"href","#overview"),c(S,"class","relative group"),c(st,"href","https://cdn.openai.com/papers/whisper.pdf"),c(st,"rel","nofollow"),c(go,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.generate"),c(vo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor"),c(dt,"href","https://huggingface.co/ArthurZ"),c(dt,"rel","nofollow"),c(ct,"href","https://huggingface.co/amyeroberts"),c(ct,"rel","nofollow"),c(lt,"href","https://github.com/openai/whisper"),c(lt,"rel","nofollow"),c(ye,"id","transformers.WhisperConfig"),c(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ye,"href","#transformers.WhisperConfig"),c(se,"class","relative group"),c(bo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel"),c(mt,"href","https://huggingface.co/openai/whisper-tiny"),c(mt,"rel","nofollow"),c(ko,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(yo,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"id","transformers.WhisperTokenizer"),c(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Te,"href","#transformers.WhisperTokenizer"),c(de,"class","relative group"),c(wo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($o,"href","../glossary#token-type-ids"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fe,"id","transformers.WhisperFeatureExtractor"),c(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fe,"href","#transformers.WhisperFeatureExtractor"),c(ce,"class","relative group"),c(xo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qe,"id","transformers.WhisperProcessor"),c(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qe,"href","#transformers.WhisperProcessor"),c(pe,"class","relative group"),c(Fo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor"),c(zo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor"),c(qo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperTokenizer"),c(qt,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.__call__"),c(Eo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperProcessor.decode"),c(Mt,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperFeatureExtractor.__call__"),c(Pt,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mo,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),c(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Co,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Se,"id","transformers.WhisperModel"),c(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Se,"href","#transformers.WhisperModel"),c(he,"class","relative group"),c(jo,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Ht,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ht,"rel","nofollow"),c(So,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperModel"),c(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ie,"id","transformers.WhisperForConditionalGeneration"),c(Ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ie,"href","#transformers.WhisperForConditionalGeneration"),c(ue,"class","relative group"),c(No,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Zt,"rel","nofollow"),c(Ao,"href","/docs/transformers/main/en/model_doc/whisper#transformers.WhisperForConditionalGeneration"),c(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(De,"id","transformers.TFWhisperModel"),c(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(De,"href","#transformers.TFWhisperModel"),c(_e,"class","relative group"),c(Io,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(oo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(oo,"rel","nofollow"),c(Lo,"href","/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperModel"),c(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"id","transformers.TFWhisperForConditionalGeneration"),c(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(He,"href","#transformers.TFWhisperForConditionalGeneration"),c(ve,"class","relative group"),c(Oo,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(co,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(co,"rel","nofollow"),c(Do,"href","/docs/transformers/main/en/model_doc/whisper#transformers.TFWhisperForConditionalGeneration"),c(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,_){e(document.head,l),g(t,b,_),g(t,f,_),e(f,u),e(u,v),w(d,v,null),e(f,m),e(f,F),e(F,j),g(t,q,_),g(t,S,_),e(S,A),e(A,nn),w(rt,nn,null),e(S,Yr),e(S,rn),e(rn,es),g(t,er,_),g(t,ke,_),e(ke,ts),e(ke,st),e(st,os),e(ke,ns),g(t,tr,_),g(t,uo,_),e(uo,rs),g(t,or,_),g(t,fo,_),e(fo,sn),e(sn,ss),g(t,nr,_),g(t,_o,_),e(_o,as),g(t,rr,_),g(t,R,_),e(R,an),e(an,is),e(R,ds),e(R,at),e(at,cs),e(at,go),e(go,ls),e(at,ps),e(R,hs),e(R,dn),e(dn,ms),e(R,us),e(R,it),e(it,fs),e(it,vo),e(vo,_s),e(it,gs),g(t,sr,_),g(t,U,_),e(U,vs),e(U,dt),e(dt,bs),e(U,ks),e(U,ct),e(ct,ys),e(U,ws),e(U,lt),e(lt,Ts),e(U,$s),g(t,ar,_),g(t,se,_),e(se,ye),e(ye,cn),w(pt,cn,null),e(se,Ws),e(se,ln),e(ln,xs),g(t,ir,_),g(t,L,_),w(ht,L,null),e(L,Fs),e(L,ae),e(ae,zs),e(ae,bo),e(bo,qs),e(ae,Es),e(ae,mt),e(mt,Ms),e(ae,Ps),e(L,Cs),e(L,ie),e(ie,js),e(ie,ko),e(ko,Ss),e(ie,Ns),e(ie,yo),e(yo,As),e(ie,Is),e(L,Ls),w(we,L,null),g(t,dr,_),g(t,de,_),e(de,Te),e(Te,pn),w(ut,pn,null),e(de,Os),e(de,hn),e(hn,Ds),g(t,cr,_),g(t,E,_),w(ft,E,null),e(E,Gs),e(E,mn),e(mn,Vs),e(E,Hs),e(E,_t),e(_t,Rs),e(_t,wo),e(wo,Us),e(_t,Bs),e(E,Ks),e(E,X),w(gt,X,null),e(X,Js),e(X,un),e(un,Zs),e(X,Qs),w($e,X,null),e(E,Xs),e(E,We),w(vt,We,null),e(We,Ys),e(We,fn),e(fn,ea),e(E,ta),e(E,xe),w(bt,xe,null),e(xe,oa),e(xe,kt),e(kt,na),e(kt,_n),e(_n,ra),e(kt,sa),e(E,aa),e(E,Y),w(yt,Y,null),e(Y,ia),e(Y,To),e(To,da),e(To,$o),e($o,ca),e(Y,la),e(Y,gn),e(gn,pa),e(E,ha),e(E,Wo),w(wt,Wo,null),g(t,lr,_),g(t,ce,_),e(ce,Fe),e(Fe,vn),w(Tt,vn,null),e(ce,ma),e(ce,bn),e(bn,ua),g(t,pr,_),g(t,N,_),w($t,N,null),e(N,fa),e(N,kn),e(kn,_a),e(N,ga),e(N,Wt),e(Wt,va),e(Wt,xo),e(xo,ba),e(Wt,ka),e(N,ya),e(N,le),e(le,wa),e(le,yn),e(yn,Ta),e(le,$a),e(le,wn),e(wn,Wa),e(le,xa),e(N,Fa),e(N,ze),w(xt,ze,null),e(ze,za),e(ze,Tn),e(Tn,qa),g(t,hr,_),g(t,pe,_),e(pe,qe),e(qe,$n),w(Ft,$n,null),e(pe,Ea),e(pe,Wn),e(Wn,Ma),g(t,mr,_),g(t,M,_),w(zt,M,null),e(M,Pa),e(M,xn),e(xn,Ca),e(M,ja),e(M,I),e(I,Fo),e(Fo,Sa),e(I,Na),e(I,zo),e(zo,Aa),e(I,Ia),e(I,qo),e(qo,La),e(I,Oa),e(I,qt),e(qt,Fn),e(Fn,Da),e(qt,Ga),e(I,Va),e(I,Eo),e(Eo,Ha),e(I,Ra),e(M,Ua),e(M,Ee),w(Et,Ee,null),e(Ee,Ba),e(Ee,O),e(O,Ka),e(O,zn),e(zn,Ja),e(O,Za),e(O,Mt),e(Mt,qn),e(qn,Qa),e(Mt,Xa),e(O,Ya),e(O,En),e(En,ei),e(O,ti),e(O,Pt),e(Pt,Mn),e(Mn,oi),e(Pt,ni),e(O,ri),e(M,si),e(M,ee),w(Ct,ee,null),e(ee,ai),e(ee,Pn),e(Pn,ii),e(ee,di),w(Me,ee,null),e(M,ci),e(M,te),w(jt,te,null),e(te,li),e(te,St),e(St,pi),e(St,Mo),e(Mo,hi),e(St,mi),e(te,ui),w(Pe,te,null),e(M,fi),e(M,Ce),w(Nt,Ce,null),e(Ce,_i),e(Ce,At),e(At,gi),e(At,Po),e(Po,vi),e(At,bi),e(M,ki),e(M,je),w(It,je,null),e(je,yi),e(je,Lt),e(Lt,wi),e(Lt,Co),e(Co,Ti),e(Lt,$i),g(t,ur,_),g(t,he,_),e(he,Se),e(Se,Cn),w(Ot,Cn,null),e(he,Wi),e(he,jn),e(jn,xi),g(t,fr,_),g(t,D,_),w(Dt,D,null),e(D,Fi),e(D,Gt),e(Gt,zi),e(Gt,jo),e(jo,qi),e(Gt,Ei),e(D,Mi),e(D,Vt),e(Vt,Pi),e(Vt,Ht),e(Ht,Ci),e(Vt,ji),e(D,Si),e(D,B),w(Rt,B,null),e(B,Ni),e(B,me),e(me,Ai),e(me,So),e(So,Ii),e(me,Li),e(me,Sn),e(Sn,Oi),e(me,Di),e(B,Gi),w(Ne,B,null),e(B,Vi),w(Ae,B,null),g(t,_r,_),g(t,ue,_),e(ue,Ie),e(Ie,Nn),w(Ut,Nn,null),e(ue,Hi),e(ue,An),e(An,Ri),g(t,gr,_),g(t,G,_),w(Bt,G,null),e(G,Ui),e(G,Kt),e(Kt,Bi),e(Kt,No),e(No,Ki),e(Kt,Ji),e(G,Zi),e(G,Jt),e(Jt,Qi),e(Jt,Zt),e(Zt,Xi),e(Jt,Yi),e(G,ed),e(G,K),w(Qt,K,null),e(K,td),e(K,fe),e(fe,od),e(fe,Ao),e(Ao,nd),e(fe,rd),e(fe,In),e(In,sd),e(fe,ad),e(K,id),w(Le,K,null),e(K,dd),w(Oe,K,null),g(t,vr,_),g(t,_e,_),e(_e,De),e(De,Ln),w(Xt,Ln,null),e(_e,cd),e(_e,On),e(On,ld),g(t,br,_),g(t,V,_),w(Yt,V,null),e(V,pd),e(V,eo),e(eo,hd),e(eo,Io),e(Io,md),e(eo,ud),e(V,fd),e(V,to),e(to,_d),e(to,oo),e(oo,gd),e(to,vd),e(V,bd),e(V,J),w(no,J,null),e(J,kd),e(J,ge),e(ge,yd),e(ge,Lo),e(Lo,wd),e(ge,Td),e(ge,Dn),e(Dn,$d),e(ge,Wd),e(J,xd),w(Ge,J,null),e(J,Fd),w(Ve,J,null),g(t,kr,_),g(t,ve,_),e(ve,He),e(He,Gn),w(ro,Gn,null),e(ve,zd),e(ve,Vn),e(Vn,qd),g(t,yr,_),g(t,H,_),w(so,H,null),e(H,Ed),e(H,ao),e(ao,Md),e(ao,Oo),e(Oo,Pd),e(ao,Cd),e(H,jd),e(H,io),e(io,Sd),e(io,co),e(co,Nd),e(io,Ad),e(H,Id),e(H,Z),w(lo,Z,null),e(Z,Ld),e(Z,be),e(be,Od),e(be,Do),e(Do,Dd),e(be,Gd),e(be,Hn),e(Hn,Vd),e(be,Hd),e(Z,Rd),w(Re,Z,null),e(Z,Ud),w(Ue,Z,null),wr=!0},p(t,[_]){const po={};_&2&&(po.$$scope={dirty:_,ctx:t}),we.$set(po);const Rn={};_&2&&(Rn.$$scope={dirty:_,ctx:t}),$e.$set(Rn);const Un={};_&2&&(Un.$$scope={dirty:_,ctx:t}),Me.$set(Un);const Bn={};_&2&&(Bn.$$scope={dirty:_,ctx:t}),Pe.$set(Bn);const ho={};_&2&&(ho.$$scope={dirty:_,ctx:t}),Ne.$set(ho);const Kn={};_&2&&(Kn.$$scope={dirty:_,ctx:t}),Ae.$set(Kn);const Jn={};_&2&&(Jn.$$scope={dirty:_,ctx:t}),Le.$set(Jn);const Zn={};_&2&&(Zn.$$scope={dirty:_,ctx:t}),Oe.$set(Zn);const mo={};_&2&&(mo.$$scope={dirty:_,ctx:t}),Ge.$set(mo);const Qn={};_&2&&(Qn.$$scope={dirty:_,ctx:t}),Ve.$set(Qn);const Xn={};_&2&&(Xn.$$scope={dirty:_,ctx:t}),Re.$set(Xn);const Yn={};_&2&&(Yn.$$scope={dirty:_,ctx:t}),Ue.$set(Yn)},i(t){wr||(T(d.$$.fragment,t),T(rt.$$.fragment,t),T(pt.$$.fragment,t),T(ht.$$.fragment,t),T(we.$$.fragment,t),T(ut.$$.fragment,t),T(ft.$$.fragment,t),T(gt.$$.fragment,t),T($e.$$.fragment,t),T(vt.$$.fragment,t),T(bt.$$.fragment,t),T(yt.$$.fragment,t),T(wt.$$.fragment,t),T(Tt.$$.fragment,t),T($t.$$.fragment,t),T(xt.$$.fragment,t),T(Ft.$$.fragment,t),T(zt.$$.fragment,t),T(Et.$$.fragment,t),T(Ct.$$.fragment,t),T(Me.$$.fragment,t),T(jt.$$.fragment,t),T(Pe.$$.fragment,t),T(Nt.$$.fragment,t),T(It.$$.fragment,t),T(Ot.$$.fragment,t),T(Dt.$$.fragment,t),T(Rt.$$.fragment,t),T(Ne.$$.fragment,t),T(Ae.$$.fragment,t),T(Ut.$$.fragment,t),T(Bt.$$.fragment,t),T(Qt.$$.fragment,t),T(Le.$$.fragment,t),T(Oe.$$.fragment,t),T(Xt.$$.fragment,t),T(Yt.$$.fragment,t),T(no.$$.fragment,t),T(Ge.$$.fragment,t),T(Ve.$$.fragment,t),T(ro.$$.fragment,t),T(so.$$.fragment,t),T(lo.$$.fragment,t),T(Re.$$.fragment,t),T(Ue.$$.fragment,t),wr=!0)},o(t){$(d.$$.fragment,t),$(rt.$$.fragment,t),$(pt.$$.fragment,t),$(ht.$$.fragment,t),$(we.$$.fragment,t),$(ut.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$($e.$$.fragment,t),$(vt.$$.fragment,t),$(bt.$$.fragment,t),$(yt.$$.fragment,t),$(wt.$$.fragment,t),$(Tt.$$.fragment,t),$($t.$$.fragment,t),$(xt.$$.fragment,t),$(Ft.$$.fragment,t),$(zt.$$.fragment,t),$(Et.$$.fragment,t),$(Ct.$$.fragment,t),$(Me.$$.fragment,t),$(jt.$$.fragment,t),$(Pe.$$.fragment,t),$(Nt.$$.fragment,t),$(It.$$.fragment,t),$(Ot.$$.fragment,t),$(Dt.$$.fragment,t),$(Rt.$$.fragment,t),$(Ne.$$.fragment,t),$(Ae.$$.fragment,t),$(Ut.$$.fragment,t),$(Bt.$$.fragment,t),$(Qt.$$.fragment,t),$(Le.$$.fragment,t),$(Oe.$$.fragment,t),$(Xt.$$.fragment,t),$(Yt.$$.fragment,t),$(no.$$.fragment,t),$(Ge.$$.fragment,t),$(Ve.$$.fragment,t),$(ro.$$.fragment,t),$(so.$$.fragment,t),$(lo.$$.fragment,t),$(Re.$$.fragment,t),$(Ue.$$.fragment,t),wr=!1},d(t){o(l),t&&o(b),t&&o(f),W(d),t&&o(q),t&&o(S),W(rt),t&&o(er),t&&o(ke),t&&o(tr),t&&o(uo),t&&o(or),t&&o(fo),t&&o(nr),t&&o(_o),t&&o(rr),t&&o(R),t&&o(sr),t&&o(U),t&&o(ar),t&&o(se),W(pt),t&&o(ir),t&&o(L),W(ht),W(we),t&&o(dr),t&&o(de),W(ut),t&&o(cr),t&&o(E),W(ft),W(gt),W($e),W(vt),W(bt),W(yt),W(wt),t&&o(lr),t&&o(ce),W(Tt),t&&o(pr),t&&o(N),W($t),W(xt),t&&o(hr),t&&o(pe),W(Ft),t&&o(mr),t&&o(M),W(zt),W(Et),W(Ct),W(Me),W(jt),W(Pe),W(Nt),W(It),t&&o(ur),t&&o(he),W(Ot),t&&o(fr),t&&o(D),W(Dt),W(Rt),W(Ne),W(Ae),t&&o(_r),t&&o(ue),W(Ut),t&&o(gr),t&&o(G),W(Bt),W(Qt),W(Le),W(Oe),t&&o(vr),t&&o(_e),W(Xt),t&&o(br),t&&o(V),W(Yt),W(no),W(Ge),W(Ve),t&&o(kr),t&&o(ve),W(ro),t&&o(yr),t&&o(H),W(so),W(lo),W(Re),W(Ue)}}}const Dl={local:"whisper",sections:[{local:"overview",title:"Overview"},{local:"transformers.WhisperConfig",title:"WhisperConfig"},{local:"transformers.WhisperTokenizer",title:"WhisperTokenizer"},{local:"transformers.WhisperFeatureExtractor",title:"WhisperFeatureExtractor"},{local:"transformers.WhisperProcessor",title:"WhisperProcessor"},{local:"transformers.WhisperModel",title:"WhisperModel"},{local:"transformers.WhisperForConditionalGeneration",title:"WhisperForConditionalGeneration"},{local:"transformers.TFWhisperModel",title:"TFWhisperModel"},{local:"transformers.TFWhisperForConditionalGeneration",title:"TFWhisperForConditionalGeneration"}],title:"Whisper"};function Gl(x){return Fl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Jl extends Tl{constructor(l){super();$l(this,l,Gl,Ol,Wl,{})}}export{Jl as default,Dl as metadata};
