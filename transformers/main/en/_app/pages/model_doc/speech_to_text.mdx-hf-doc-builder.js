import{S as Op,i as Gp,s as Up,e as a,k as l,w as b,t as n,M as Wp,c as r,d as t,m as p,a as i,x as k,h as s,b as c,G as e,g as f,y,q as w,o as S,B as $,v as Rp,L as Ys}from"../../chunks/vendor-hf-doc-builder.js";import{T as eo}from"../../chunks/Tip-hf-doc-builder.js";import{D as L}from"../../chunks/Docstring-hf-doc-builder.js";import{C as dn}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Js}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Vp(P){let h,x,_,m,v;return m=new dn({props:{code:`from transformers import Speech2TextModel, Speech2TextConfig

# Initializing a Speech2Text s2t_transformer_s style configuration
configuration = Speech2TextConfig()

# Initializing a model from the s2t_transformer_s style configuration
model = Speech2TextModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextModel, Speech2TextConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Speech2Text s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Speech2TextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);x=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,x),f(d,_,g),y(m,d,g),v=!0},p:Ys,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function Hp(P){let h,x,_,m,v,d,g,E;return{c(){h=a("p"),x=n(`This class method is simply calling the feature extractor
`),_=a("a"),m=n("from_pretrained()"),v=n(` and the tokenizer
`),d=a("code"),g=n("from_pretrained"),E=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(A){h=r(A,"P",{});var F=i(h);x=s(F,`This class method is simply calling the feature extractor
`),_=r(F,"A",{href:!0});var q=i(_);m=s(q,"from_pretrained()"),q.forEach(t),v=s(F,` and the tokenizer
`),d=r(F,"CODE",{});var D=i(d);g=s(D,"from_pretrained"),D.forEach(t),E=s(F,` methods. Please refer to the docstrings of the
methods above for more information.`),F.forEach(t),this.h()},h(){c(_,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(A,F){f(A,h,F),e(h,x),e(h,_),e(_,m),e(h,v),e(h,d),e(d,g),e(h,E)},d(A){A&&t(h)}}}function Bp(P){let h,x,_,m,v,d,g,E;return{c(){h=a("p"),x=n("This class method is simply calling "),_=a("a"),m=n("save_pretrained()"),v=n(` and
`),d=a("code"),g=n("save_pretrained"),E=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(A){h=r(A,"P",{});var F=i(h);x=s(F,"This class method is simply calling "),_=r(F,"A",{href:!0});var q=i(_);m=s(q,"save_pretrained()"),q.forEach(t),v=s(F,` and
`),d=r(F,"CODE",{});var D=i(d);g=s(D,"save_pretrained"),D.forEach(t),E=s(F,`. Please refer to the docstrings of the methods
above for more information.`),F.forEach(t),this.h()},h(){c(_,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(A,F){f(A,h,F),e(h,x),e(h,_),e(_,m),e(h,v),e(h,d),e(d,g),e(h,E)},d(A){A&&t(h)}}}function Kp(P){let h,x,_,m,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var g=i(h);x=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){f(d,h,g),e(h,x),e(h,_),e(_,m),e(h,v)},d(d){d&&t(h)}}}function Jp(P){let h,x,_,m,v;return m=new dn({props:{code:`import torch
from transformers import Speech2TextModel, Speech2TextFeatureExtractor
from datasets import load_dataset

model = Speech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")
feature_extractor = Speech2TextFeatureExtractor.from_pretrained("facebook/s2t-small-librispeech-asr")
ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
inputs = feature_extractor(
    ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt"
)
input_features = inputs.input_features
decoder_input_ids = torch.tensor([[1, 1]]) * model.config.decoder_start_token_id
last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
list(last_hidden_state.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextModel, Speech2TextFeatureExtractor
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Speech2TextFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]]) * model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = model(input_features, decoder_input_ids=decoder_input_ids).last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_state.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">256</span>]`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);x=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,x),f(d,_,g),y(m,d,g),v=!0},p:Ys,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function Yp(P){let h,x,_,m,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var g=i(h);x=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){f(d,h,g),e(h,x),e(h,_),e(_,m),e(h,v)},d(d){d&&t(h)}}}function Xp(P){let h,x,_,m,v;return m=new dn({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-small-librispeech-asr")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")

inputs = processor(
    ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt"
)
input_features = inputs.input_features

generated_ids = model.generate(inputs=input_features)

transcription = processor.batch_decode(generated_ids)[0]
transcription`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = inputs.input_features

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);x=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,x),f(d,_,g),y(m,d,g),v=!0},p:Ys,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function Qp(P){let h,x,_,m,v,d,g,E,A,F,q,D,V,ee,Pe,H,Ce,ye,N,B,te,Te,j,M,je,oe,ne,Me,se,ae,Ne,O,we,I,Ae,re,ie,De,de,K,Ie,Q,J;return{c(){h=a("p"),x=n("TF 2.0 models accepts two formats as inputs:"),_=l(),m=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),E=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),F=l(),q=a("p"),D=n("This second option is useful when using "),V=a("code"),ee=n("tf.keras.Model.fit"),Pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),Ce=n("model(inputs)"),ye=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te=l(),j=a("ul"),M=a("li"),je=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Me=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Ne=l(),O=a("li"),we=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),De=n("model([input_ids, attention_mask, token_type_ids])"),de=l(),K=a("li"),Ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),J=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){h=r(T,"P",{});var z=i(h);x=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),_=p(T),m=r(T,"UL",{});var Y=i(m);v=r(Y,"LI",{});var Ze=i(v);d=s(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),g=p(Y),E=r(Y,"LI",{});var Le=i(E);A=s(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),Y.forEach(t),F=p(T),q=r(T,"P",{});var X=i(q);D=s(X,"This second option is useful when using "),V=r(X,"CODE",{});var Re=i(V);ee=s(Re,"tf.keras.Model.fit"),Re.forEach(t),Pe=s(X,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(X,"CODE",{});var ue=i(H);Ce=s(ue,"model(inputs)"),ue.forEach(t),ye=s(X,"."),X.forEach(t),N=p(T),B=r(T,"P",{});var et=i(B);te=s(et,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),et.forEach(t),Te=p(T),j=r(T,"UL",{});var U=i(j);M=r(U,"LI",{});var ce=i(M);je=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var tt=i(oe);ne=s(tt,"input_ids"),tt.forEach(t),Me=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Ve=i(se);ae=s(Ve,"model(input_ids)"),Ve.forEach(t),ce.forEach(t),Ne=p(U),O=r(U,"LI",{});var C=i(O);we=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r(C,"CODE",{});var ot=i(I);Ae=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),re=s(C," or "),ie=r(C,"CODE",{});var Se=i(ie);De=s(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),C.forEach(t),de=p(U),K=r(U,"LI",{});var Oe=i(K);Ie=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(Oe,"CODE",{});var nt=i(Q);J=s(nt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),nt.forEach(t),Oe.forEach(t),U.forEach(t)},m(T,z){f(T,h,z),e(h,x),f(T,_,z),f(T,m,z),e(m,v),e(v,d),e(m,g),e(m,E),e(E,A),f(T,F,z),f(T,q,z),e(q,D),e(q,V),e(V,ee),e(q,Pe),e(q,H),e(H,Ce),e(q,ye),f(T,N,z),f(T,B,z),e(B,te),f(T,Te,z),f(T,j,z),e(j,M),e(M,je),e(M,oe),e(oe,ne),e(M,Me),e(M,se),e(se,ae),e(j,Ne),e(j,O),e(O,we),e(O,I),e(I,Ae),e(O,re),e(O,ie),e(ie,De),e(j,de),e(j,K),e(K,Ie),e(K,Q),e(Q,J)},d(T){T&&t(h),T&&t(_),T&&t(m),T&&t(F),T&&t(q),T&&t(N),T&&t(B),T&&t(Te),T&&t(j)}}}function Zp(P){let h,x,_,m,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var g=i(h);x=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){f(d,h,g),e(h,x),e(h,_),e(_,m),e(h,v)},d(d){d&&t(h)}}}function eh(P){let h,x,_,m,v;return m=new dn({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
import tensorflow as tf

tokenizer = Speech2TextTokenizer.from_pretrained("facebook/s2t-small-librispeech-asr")
model = TFSpeech2TextModel.from_pretrained("facebook/s2t-small-librispeech-asr")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextTokenizer, TFSpeech2TextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Speech2TextTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);x=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,x),f(d,_,g),y(m,d,g),v=!0},p:Ys,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function th(P){let h,x,_,m,v,d,g,E,A,F,q,D,V,ee,Pe,H,Ce,ye,N,B,te,Te,j,M,je,oe,ne,Me,se,ae,Ne,O,we,I,Ae,re,ie,De,de,K,Ie,Q,J;return{c(){h=a("p"),x=n("TF 2.0 models accepts two formats as inputs:"),_=l(),m=a("ul"),v=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),E=a("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),F=l(),q=a("p"),D=n("This second option is useful when using "),V=a("code"),ee=n("tf.keras.Model.fit"),Pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),H=a("code"),Ce=n("model(inputs)"),ye=n("."),N=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te=l(),j=a("ul"),M=a("li"),je=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Me=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Ne=l(),O=a("li"),we=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a("code"),Ae=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),De=n("model([input_ids, attention_mask, token_type_ids])"),de=l(),K=a("li"),Ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),J=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){h=r(T,"P",{});var z=i(h);x=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),_=p(T),m=r(T,"UL",{});var Y=i(m);v=r(Y,"LI",{});var Ze=i(v);d=s(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),g=p(Y),E=r(Y,"LI",{});var Le=i(E);A=s(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),Y.forEach(t),F=p(T),q=r(T,"P",{});var X=i(q);D=s(X,"This second option is useful when using "),V=r(X,"CODE",{});var Re=i(V);ee=s(Re,"tf.keras.Model.fit"),Re.forEach(t),Pe=s(X,` method which currently requires having all the
tensors in the first argument of the model call function: `),H=r(X,"CODE",{});var ue=i(H);Ce=s(ue,"model(inputs)"),ue.forEach(t),ye=s(X,"."),X.forEach(t),N=p(T),B=r(T,"P",{});var et=i(B);te=s(et,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),et.forEach(t),Te=p(T),j=r(T,"UL",{});var U=i(j);M=r(U,"LI",{});var ce=i(M);je=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var tt=i(oe);ne=s(tt,"input_ids"),tt.forEach(t),Me=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Ve=i(se);ae=s(Ve,"model(input_ids)"),Ve.forEach(t),ce.forEach(t),Ne=p(U),O=r(U,"LI",{});var C=i(O);we=s(C,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r(C,"CODE",{});var ot=i(I);Ae=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),re=s(C," or "),ie=r(C,"CODE",{});var Se=i(ie);De=s(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),C.forEach(t),de=p(U),K=r(U,"LI",{});var Oe=i(K);Ie=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(Oe,"CODE",{});var nt=i(Q);J=s(nt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),nt.forEach(t),Oe.forEach(t),U.forEach(t)},m(T,z){f(T,h,z),e(h,x),f(T,_,z),f(T,m,z),e(m,v),e(v,d),e(m,g),e(m,E),e(E,A),f(T,F,z),f(T,q,z),e(q,D),e(q,V),e(V,ee),e(q,Pe),e(q,H),e(H,Ce),e(q,ye),f(T,N,z),f(T,B,z),e(B,te),f(T,Te,z),f(T,j,z),e(j,M),e(M,je),e(M,oe),e(oe,ne),e(M,Me),e(M,se),e(se,ae),e(j,Ne),e(j,O),e(O,we),e(O,I),e(I,Ae),e(O,re),e(O,ie),e(ie,De),e(j,de),e(j,K),e(K,Ie),e(K,Q),e(Q,J)},d(T){T&&t(h),T&&t(_),T&&t(m),T&&t(F),T&&t(q),T&&t(N),T&&t(B),T&&t(Te),T&&t(j)}}}function oh(P){let h,x,_,m,v;return{c(){h=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var g=i(h);x=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){f(d,h,g),e(h,x),e(h,_),e(_,m),e(h,v)},d(d){d&&t(h)}}}function nh(P){let h,x,_,m,v;return m=new dn({props:{code:`import tensorflow as tf
from transformers import Speech2TextProcessor, TFSpeech2TextForConditionalGeneration
from datasets import load_dataset
import soundfile as sf

model = TFSpeech2TextForConditionalGeneration.from_pretrained(
    "facebook/s2t-small-librispeech-asr", from_pt=True
)
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)
ds.set_format(type="tf")

input_features = processor(
    ds["speech"][0], sampling_rate=16000, return_tensors="tf"
).input_features  # Batch size 1
generated_ids = model.generate(input_features)

transcription = processor.batch_decode(generated_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, TFSpeech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSpeech2TextForConditionalGeneration.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>, from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds.set_format(<span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_features = processor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16000</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>).input_features  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){h=a("p"),x=n("Example:"),_=l(),b(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);x=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,x),f(d,_,g),y(m,d,g),v=!0},p:Ys,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function sh(P){let h,x,_,m,v,d,g,E,A,F,q,D,V,ee,Pe,H,Ce,ye,N,B,te,Te,j,M,je,oe,ne,Me,se,ae,Ne,O,we,I,Ae,re,ie,De,de,K,Ie,Q,J,T,z,Y,Ze,Le,X,Re,ue,et,U,ce,tt,Ve,C,ot,Se,Oe,nt,cn,Qa,Za,ln,er,tr,pn,or,nr,Xs,W,sr,Bn,ar,rr,Kn,ir,dr,Jn,cr,lr,Yn,pr,hr,Xn,mr,fr,to,ur,_r,Qn,gr,Qs,hn,Zn,Tr,Zs,oo,ea,mn,no,es,vr,xr,le,br,ts,kr,yr,os,wr,Sr,ns,$r,Er,ss,qr,Fr,as,zr,Pr,ta,so,oa,Tt,Cr,ao,jr,Mr,na,st,vt,rs,ro,Nr,is,Ar,sa,ve,io,Dr,at,Ir,fn,Lr,Or,co,Gr,Ur,Wr,rt,Rr,un,Vr,Hr,_n,Br,Kr,Jr,xt,aa,it,bt,ds,lo,Yr,cs,Xr,ra,R,po,Qr,ls,Zr,ei,ho,ti,gn,oi,ni,si,kt,mo,ai,ps,ri,ii,yt,fo,di,uo,ci,hs,li,pi,hi,He,_o,mi,Tn,fi,vn,ui,_i,ms,gi,Ti,xn,go,ia,dt,wt,fs,To,vi,us,xi,da,pe,vo,bi,_s,ki,yi,xo,wi,bn,Si,$i,Ei,gs,qi,Fi,St,bo,zi,Ts,Pi,ca,ct,$t,vs,ko,Ci,xs,ji,la,G,yo,Mi,bs,Ni,Ai,_e,kn,Di,Ii,yn,Li,Oi,wn,Gi,Ui,wo,ks,Wi,Ri,Vi,Sn,Hi,Bi,Ki,Et,So,Ji,Ge,Yi,$o,ys,Xi,Qi,Zi,ws,ed,td,Eo,Ss,od,nd,sd,ad,Be,qo,rd,$s,id,dd,qt,cd,Ke,Fo,ld,zo,pd,$n,hd,md,fd,Ft,ud,zt,Po,_d,Co,gd,En,Td,vd,xd,Pt,jo,bd,Mo,kd,qn,yd,wd,pa,lt,Ct,Es,No,Sd,qs,$d,ha,xe,Ao,Ed,Do,qd,Fn,Fd,zd,Pd,Io,Cd,Lo,jd,Md,Nd,$e,Oo,Ad,pt,Dd,zn,Id,Ld,Fs,Od,Gd,Ud,jt,Wd,Mt,ma,ht,Nt,zs,Go,Rd,Ps,Vd,fa,be,Uo,Hd,Wo,Bd,Pn,Kd,Jd,Yd,Ro,Xd,Vo,Qd,Zd,ec,Ee,Ho,tc,mt,oc,Cn,nc,sc,Cs,ac,rc,ic,At,dc,Dt,ua,ft,It,js,Bo,cc,Ms,lc,_a,he,Ko,pc,Jo,hc,jn,mc,fc,uc,Yo,_c,Xo,gc,Tc,vc,Lt,xc,qe,Qo,bc,ut,kc,Mn,yc,wc,Ns,Sc,$c,Ec,Ot,qc,Gt,ga,_t,Ut,As,Zo,Fc,Ds,zc,Ta,me,en,Pc,tn,Cc,Nn,jc,Mc,Nc,on,Ac,nn,Dc,Ic,Lc,Wt,Oc,Fe,sn,Gc,gt,Uc,An,Wc,Rc,Is,Vc,Hc,Bc,Rt,Kc,Vt,va;return d=new We({}),ee=new We({}),Y=new We({}),oo=new dn({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-small-librispeech-asr")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-small-librispeech-asr")


ds = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")

inputs = processor(ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt")
generated_ids = model.generate(inputs["input_features"], attention_mask=inputs["attention_mask"])

transcription = processor.batch_decode(generated_ids)
transcription`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-small-librispeech-asr&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs[<span class="hljs-string">&quot;input_features&quot;</span>], attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription
[<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>]`}}),so=new dn({props:{code:`import torch
from transformers import Speech2TextProcessor, Speech2TextForConditionalGeneration
from datasets import load_dataset

model = Speech2TextForConditionalGeneration.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")
processor = Speech2TextProcessor.from_pretrained("facebook/s2t-medium-mustc-multilingual-st")

ds = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")

inputs = processor(ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt")
generated_ids = model.generate(
    inputs["input_features"],
    attention_mask=inputs["attention_mask"],
    forced_bos_token_id=processor.tokenizer.lang_code_to_id["fr"],
)

translation = processor.batch_decode(generated_ids)
translation`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2TextProcessor, Speech2TextForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2TextForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2TextProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-medium-mustc-multilingual-st&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;input_features&quot;</span>],
<span class="hljs-meta">... </span>    attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    forced_bos_token_id=processor.tokenizer.lang_code_to_id[<span class="hljs-string">&quot;fr&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>translation = processor.batch_decode(generated_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>translation
[<span class="hljs-string">&quot;&lt;lang:fr&gt; (Vid\xE9o) Si M. Kilder est l&#x27;apossible des classes moyennes, et nous sommes heureux d&#x27;\xEAtre accueillis dans son \xE9vangile.&quot;</span>]`}}),ro=new We({}),io=new L({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.Speech2TextConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.Speech2TextConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.Speech2TextConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.Speech2TextConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.Speech2TextConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.Speech2TextConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.Speech2TextConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.Speech2TextConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.Speech2TextConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Speech2TextConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.Speech2TextConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.Speech2TextConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
encoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.
decoder_layerdrop &#x2014; (<code>float</code>, <em>optional</em>, defaults to 0.0):
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"init_std"},{anchor:"transformers.Speech2TextConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.Speech2TextConfig.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 6000) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.`,name:"max_source_positions"},{anchor:"transformers.Speech2TextConfig.max_target_positions",description:`<strong>max_target_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_target_positions"},{anchor:"transformers.Speech2TextConfig.num_conv_layers",description:`<strong>num_conv_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of 1D convolutional layers in the conv module.`,name:"num_conv_layers"},{anchor:"transformers.Speech2TextConfig.conv_kernel_sizes",description:`<strong>conv_kernel_sizes</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>(5, 5)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the conv module. The length
of <code>conv_kernel_sizes</code> has to match <code>num_conv_layers</code>.`,name:"conv_kernel_sizes"},{anchor:"transformers.Speech2TextConfig.conv_channels",description:`<strong>conv_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
An integer defining the number of output channels of each convolution layers except the final one in the
conv module.`,name:"conv_channels"},{anchor:"transformers.Speech2TextConfig.input_feat_per_channel",description:`<strong>input_feat_per_channel</strong> (<code>int</code>, <em>optional</em>, defaults to 80) &#x2014;
An integer specifying the size of feature vector. This is also the dimensions of log-mel filter-bank
features.`,name:"input_feat_per_channel"},{anchor:"transformers.Speech2TextConfig.input_channels",description:`<strong>input_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
An integer specifying number of input channels of the input feature vector.`,name:"input_channels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L31"}}),xt=new Js({props:{anchor:"transformers.Speech2TextConfig.example",$$slots:{default:[Vp]},$$scope:{ctx:P}}}),lo=new We({}),po=new L({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2TextTokenizer.spm_file",description:`<strong>spm_file</strong> (<code>str</code>) &#x2014;
Path to the <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> model file`,name:"spm_file"},{anchor:"transformers.Speech2TextTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2TextTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2TextTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2TextTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Speech2TextTokenizer.do_upper_case",description:`<strong>do_upper_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to uppercase the output when decoding.`,name:"do_upper_case"},{anchor:"transformers.Speech2TextTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.Speech2TextTokenizer.tgt_lang",description:`<strong>tgt_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"tgt_lang"},{anchor:"transformers.Speech2TextTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L59"}}),mo=new L({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L199"}}),fo=new L({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L206",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),_o=new L({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2951",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),go=new L({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L255"}}),To=new We({}),vo=new L({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L33"}}),bo=new L({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding
index) among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>) &#x2014;
Activates truncation to cut input sequences longer than <em>max_length</em> to <em>max_length</em>.`,name:"truncation"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability</p>
<blockquote>
<p>= 7.5 (Volta), or on TPUs which benefit from having sequence lengths be a multiple of 128.</p>
</blockquote>`,name:"pad_to_multiple_of"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific feature_extractor&#x2019;s default.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For Speech2TextTransoformer models, <code>attention_mask</code> should alwys be passed for batched inference, to
avoid subtle bugs.</p>

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L126"}}),ko=new We({}),yo=new L({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L24"}}),So=new L({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L47"}}),qo=new L({props:{name:"from_pretrained",anchor:"transformers.Speech2TextProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L152"}}),qt=new eo({props:{$$slots:{default:[Hp]},$$scope:{ctx:P}}}),Fo=new L({props:{name:"save_pretrained",anchor:"transformers.Speech2TextProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2TextProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94"}}),Ft=new eo({props:{$$slots:{default:[Bp]},$$scope:{ctx:P}}}),Po=new L({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L85"}}),jo=new L({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L92"}}),No=new We({}),Ao=new L({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1121"}}),Oo=new L({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_speech_to_text._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.Speech2TextModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2TextModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.Speech2TextModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1143",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
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
`}}),jt=new eo({props:{$$slots:{default:[Kp]},$$scope:{ctx:P}}}),Mt=new Js({props:{anchor:"transformers.Speech2TextModel.forward.example",$$slots:{default:[Jp]},$$scope:{ctx:P}}}),Go=new We({}),Uo=new L({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1252"}}),Ho=new L({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read
<code>modeling_speech_to_text._prepare_decoder_attention_mask</code> and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
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
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1289",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
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
`}}),At=new eo({props:{$$slots:{default:[Yp]},$$scope:{ctx:P}}}),Dt=new Js({props:{anchor:"transformers.Speech2TextForConditionalGeneration.forward.example",$$slots:{default:[Xp]},$$scope:{ctx:P}}}),Bo=new We({}),Ko=new L({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1235"}}),Lt=new eo({props:{$$slots:{default:[Qp]},$$scope:{ctx:P}}}),Qo=new L({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of floats. See <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFSpeech2TextModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFSpeech2TextModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFSpeech2TextModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFSpeech2TextModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFSpeech2TextModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1247",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ot=new eo({props:{$$slots:{default:[Zp]},$$scope:{ctx:P}}}),Gt=new Js({props:{anchor:"transformers.TFSpeech2TextModel.call.example",$$slots:{default:[eh]},$$scope:{ctx:P}}}),Zo=new We({}),en=new L({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1318"}}),Wt=new eo({props:{$$slots:{default:[th]},$$scope:{ctx:P}}}),sn=new L({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of floats. See <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Bart uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1342",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
>Speech2TextConfig</a>) and inputs.</p>
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
`}}),Rt=new eo({props:{$$slots:{default:[oh]},$$scope:{ctx:P}}}),Vt=new Js({props:{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.example",$$slots:{default:[nh]},$$scope:{ctx:P}}}),{c(){h=a("meta"),x=l(),_=a("h1"),m=a("a"),v=a("span"),b(d.$$.fragment),g=l(),E=a("span"),A=n("Speech2Text"),F=l(),q=a("h2"),D=a("a"),V=a("span"),b(ee.$$.fragment),Pe=l(),H=a("span"),Ce=n("Overview"),ye=l(),N=a("p"),B=n("The Speech2Text model was proposed in "),te=a("a"),Te=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),j=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),M=a("a"),je=n("LibriSpeech"),oe=n(", "),ne=a("a"),Me=n("CoVoST 2"),se=n(", "),ae=a("a"),Ne=n("MuST-C"),O=n("."),we=l(),I=a("p"),Ae=n("This model was contributed by "),re=a("a"),ie=n("valhalla"),De=n(". The original code can be found "),de=a("a"),K=n("here"),Ie=n("."),Q=l(),J=a("h2"),T=a("a"),z=a("span"),b(Y.$$.fragment),Ze=l(),Le=a("span"),X=n("Inference"),Re=l(),ue=a("p"),et=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),U=a("code"),ce=n("generate()"),tt=n(" method can be used for inference."),Ve=l(),C=a("p"),ot=n("The "),Se=a("a"),Oe=n("Speech2TextFeatureExtractor"),nt=n(` class is responsible for extracting the log-mel filter-bank
features. The `),cn=a("a"),Qa=n("Speech2TextProcessor"),Za=n(" wraps "),ln=a("a"),er=n("Speech2TextFeatureExtractor"),tr=n(` and
`),pn=a("a"),or=n("Speech2TextTokenizer"),nr=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),Xs=l(),W=a("p"),sr=n("The feature extractor depends on "),Bn=a("code"),ar=n("torchaudio"),rr=n(" and the tokenizer depends on "),Kn=a("code"),ir=n("sentencepiece"),dr=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Jn=a("code"),cr=n('pip install transformers"[speech, sentencepiece]"'),lr=n(" or install the packages separately with "),Yn=a("code"),pr=n("pip install torchaudio sentencepiece"),hr=n(". Also "),Xn=a("code"),mr=n("torchaudio"),fr=n(" requires the development version of the "),to=a("a"),ur=n("libsndfile"),_r=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),Qn=a("code"),gr=n("apt install libsndfile1-dev"),Qs=l(),hn=a("ul"),Zn=a("li"),Tr=n("ASR and Speech Translation"),Zs=l(),b(oo.$$.fragment),ea=l(),mn=a("ul"),no=a("li"),es=a("p"),vr=n("Multilingual speech translation"),xr=l(),le=a("p"),br=n("For multilingual speech translation models, "),ts=a("code"),kr=n("eos_token_id"),yr=n(" is used as the "),os=a("code"),wr=n("decoder_start_token_id"),Sr=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),ns=a("code"),$r=n("forced_bos_token_id"),Er=n(" parameter to the "),ss=a("code"),qr=n("generate()"),Fr=n(` method. The following
example shows how to transate English speech to French text using the `),as=a("em"),zr=n("facebook/s2t-medium-mustc-multilingual-st"),Pr=n(`
checkpoint.`),ta=l(),b(so.$$.fragment),oa=l(),Tt=a("p"),Cr=n("See the "),ao=a("a"),jr=n("model hub"),Mr=n(" to look for Speech2Text checkpoints."),na=l(),st=a("h2"),vt=a("a"),rs=a("span"),b(ro.$$.fragment),Nr=l(),is=a("span"),Ar=n("Speech2TextConfig"),sa=l(),ve=a("div"),b(io.$$.fragment),Dr=l(),at=a("p"),Ir=n("This is the configuration class to store the configuration of a "),fn=a("a"),Lr=n("Speech2TextModel"),Or=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),co=a("a"),Gr=n("facebook/s2t-small-librispeech-asr"),Ur=n(" architecture."),Wr=l(),rt=a("p"),Rr=n("Configuration objects inherit from "),un=a("a"),Vr=n("PretrainedConfig"),Hr=n(` and can be used to control the model outputs. Read the
documentation from `),_n=a("a"),Br=n("PretrainedConfig"),Kr=n(" for more information."),Jr=l(),b(xt.$$.fragment),aa=l(),it=a("h2"),bt=a("a"),ds=a("span"),b(lo.$$.fragment),Yr=l(),cs=a("span"),Xr=n("Speech2TextTokenizer"),ra=l(),R=a("div"),b(po.$$.fragment),Qr=l(),ls=a("p"),Zr=n("Construct an Speech2Text tokenizer."),ei=l(),ho=a("p"),ti=n("This tokenizer inherits from "),gn=a("a"),oi=n("PreTrainedTokenizer"),ni=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),si=l(),kt=a("div"),b(mo.$$.fragment),ai=l(),ps=a("p"),ri=n("Build model inputs from a sequence by appending eos_token_id."),ii=l(),yt=a("div"),b(fo.$$.fragment),di=l(),uo=a("p"),ci=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hs=a("code"),li=n("prepare_for_model"),pi=n(" method."),hi=l(),He=a("div"),b(_o.$$.fragment),mi=l(),Tn=a("p"),fi=n("Create the token type IDs corresponding to the sequences passed. "),vn=a("a"),ui=n(`What are token type
IDs?`),_i=l(),ms=a("p"),gi=n("Should be overridden in a subclass if the model has a special way of building those."),Ti=l(),xn=a("div"),b(go.$$.fragment),ia=l(),dt=a("h2"),wt=a("a"),fs=a("span"),b(To.$$.fragment),vi=l(),us=a("span"),xi=n("Speech2TextFeatureExtractor"),da=l(),pe=a("div"),b(vo.$$.fragment),bi=l(),_s=a("p"),ki=n("Constructs a Speech2Text feature extractor."),yi=l(),xo=a("p"),wi=n("This feature extractor inherits from "),bn=a("a"),Si=n("Speech2TextFeatureExtractor"),$i=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ei=l(),gs=a("p"),qi=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Fi=l(),St=a("div"),b(bo.$$.fragment),zi=l(),Ts=a("p"),Pi=n("Main method to featurize and prepare for the model one or several sequence(s). sequences."),ca=l(),ct=a("h2"),$t=a("a"),vs=a("span"),b(ko.$$.fragment),Ci=l(),xs=a("span"),ji=n("Speech2TextProcessor"),la=l(),G=a("div"),b(yo.$$.fragment),Mi=l(),bs=a("p"),Ni=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Ai=l(),_e=a("p"),kn=a("a"),Di=n("Speech2TextProcessor"),Ii=n(" offers all the functionalities of "),yn=a("a"),Li=n("Speech2TextFeatureExtractor"),Oi=n(` and
`),wn=a("a"),Gi=n("Speech2TextTokenizer"),Ui=n(". See the "),wo=a("a"),ks=a("strong"),Wi=n("call"),Ri=n("()"),Vi=n(" and "),Sn=a("a"),Hi=n("decode()"),Bi=n(` for more
information.`),Ki=l(),Et=a("div"),b(So.$$.fragment),Ji=l(),Ge=a("p"),Yi=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),$o=a("a"),ys=a("strong"),Xi=n("call"),Qi=n("()"),Zi=n(` and returns its output. If used in the context
`),ws=a("code"),ed=n("as_target_processor()"),td=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),Eo=a("a"),Ss=a("strong"),od=n("call"),nd=n("()"),sd=n(`. Please refer to the doctsring of the above two methods for more
information.`),ad=l(),Be=a("div"),b(qo.$$.fragment),rd=l(),$s=a("p"),id=n("Instantiate a processor associated with a pretrained model."),dd=l(),b(qt.$$.fragment),cd=l(),Ke=a("div"),b(Fo.$$.fragment),ld=l(),zo=a("p"),pd=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),$n=a("a"),hd=n("from_pretrained()"),md=n(" method."),fd=l(),b(Ft.$$.fragment),ud=l(),zt=a("div"),b(Po.$$.fragment),_d=l(),Co=a("p"),gd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),En=a("a"),Td=n("batch_decode()"),vd=n(`. Please
refer to the docstring of this method for more information.`),xd=l(),Pt=a("div"),b(jo.$$.fragment),bd=l(),Mo=a("p"),kd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),qn=a("a"),yd=n("decode()"),wd=n(`. Please refer
to the docstring of this method for more information.`),pa=l(),lt=a("h2"),Ct=a("a"),Es=a("span"),b(No.$$.fragment),Sd=l(),qs=a("span"),$d=n("Speech2TextModel"),ha=l(),xe=a("div"),b(Ao.$$.fragment),Ed=l(),Do=a("p"),qd=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fn=a("a"),Fd=n("PreTrainedModel"),zd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pd=l(),Io=a("p"),Cd=n("This model is also a PyTorch "),Lo=a("a"),jd=n("torch.nn.Module"),Md=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nd=l(),$e=a("div"),b(Oo.$$.fragment),Ad=l(),pt=a("p"),Dd=n("The "),zn=a("a"),Id=n("Speech2TextModel"),Ld=n(" forward method, overrides the "),Fs=a("code"),Od=n("__call__"),Gd=n(" special method."),Ud=l(),b(jt.$$.fragment),Wd=l(),b(Mt.$$.fragment),ma=l(),ht=a("h2"),Nt=a("a"),zs=a("span"),b(Go.$$.fragment),Rd=l(),Ps=a("span"),Vd=n("Speech2TextForConditionalGeneration"),fa=l(),be=a("div"),b(Uo.$$.fragment),Hd=l(),Wo=a("p"),Bd=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pn=a("a"),Kd=n("PreTrainedModel"),Jd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd=l(),Ro=a("p"),Xd=n("This model is also a PyTorch "),Vo=a("a"),Qd=n("torch.nn.Module"),Zd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ec=l(),Ee=a("div"),b(Ho.$$.fragment),tc=l(),mt=a("p"),oc=n("The "),Cn=a("a"),nc=n("Speech2TextForConditionalGeneration"),sc=n(" forward method, overrides the "),Cs=a("code"),ac=n("__call__"),rc=n(" special method."),ic=l(),b(At.$$.fragment),dc=l(),b(Dt.$$.fragment),ua=l(),ft=a("h2"),It=a("a"),js=a("span"),b(Bo.$$.fragment),cc=l(),Ms=a("span"),lc=n("TFSpeech2TextModel"),_a=l(),he=a("div"),b(Ko.$$.fragment),pc=l(),Jo=a("p"),hc=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=a("a"),mc=n("TFPreTrainedModel"),fc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uc=l(),Yo=a("p"),_c=n("This model is also a "),Xo=a("a"),gc=n("tf.keras.Model"),Tc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vc=l(),b(Lt.$$.fragment),xc=l(),qe=a("div"),b(Qo.$$.fragment),bc=l(),ut=a("p"),kc=n("The "),Mn=a("a"),yc=n("TFSpeech2TextModel"),wc=n(" forward method, overrides the "),Ns=a("code"),Sc=n("__call__"),$c=n(" special method."),Ec=l(),b(Ot.$$.fragment),qc=l(),b(Gt.$$.fragment),ga=l(),_t=a("h2"),Ut=a("a"),As=a("span"),b(Zo.$$.fragment),Fc=l(),Ds=a("span"),zc=n("TFSpeech2TextForConditionalGeneration"),Ta=l(),me=a("div"),b(en.$$.fragment),Pc=l(),tn=a("p"),Cc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=a("a"),jc=n("TFPreTrainedModel"),Mc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nc=l(),on=a("p"),Ac=n("This model is also a "),nn=a("a"),Dc=n("tf.keras.Model"),Ic=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lc=l(),b(Wt.$$.fragment),Oc=l(),Fe=a("div"),b(sn.$$.fragment),Gc=l(),gt=a("p"),Uc=n("The "),An=a("a"),Wc=n("TFSpeech2TextForConditionalGeneration"),Rc=n(" forward method, overrides the "),Is=a("code"),Vc=n("__call__"),Hc=n(" special method."),Bc=l(),b(Rt.$$.fragment),Kc=l(),b(Vt.$$.fragment),this.h()},l(o){const u=Wp('[data-svelte="svelte-1phssyn"]',document.head);h=r(u,"META",{name:!0,content:!0}),u.forEach(t),x=p(o),_=r(o,"H1",{class:!0});var an=i(_);m=r(an,"A",{id:!0,class:!0,href:!0});var Ls=i(m);v=r(Ls,"SPAN",{});var Os=i(v);k(d.$$.fragment,Os),Os.forEach(t),Ls.forEach(t),g=p(an),E=r(an,"SPAN",{});var Gs=i(E);A=s(Gs,"Speech2Text"),Gs.forEach(t),an.forEach(t),F=p(o),q=r(o,"H2",{class:!0});var rn=i(q);D=r(rn,"A",{id:!0,class:!0,href:!0});var Us=i(D);V=r(Us,"SPAN",{});var Ws=i(V);k(ee.$$.fragment,Ws),Ws.forEach(t),Us.forEach(t),Pe=p(rn),H=r(rn,"SPAN",{});var Rs=i(H);Ce=s(Rs,"Overview"),Rs.forEach(t),rn.forEach(t),ye=p(o),N=r(o,"P",{});var ke=i(N);B=s(ke,"The Speech2Text model was proposed in "),te=r(ke,"A",{href:!0,rel:!0});var Vs=i(te);Te=s(Vs,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),Vs.forEach(t),j=s(ke,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),M=r(ke,"A",{href:!0,rel:!0});var Hs=i(M);je=s(Hs,"LibriSpeech"),Hs.forEach(t),oe=s(ke,", "),ne=r(ke,"A",{href:!0,rel:!0});var Bs=i(ne);Me=s(Bs,"CoVoST 2"),Bs.forEach(t),se=s(ke,", "),ae=r(ke,"A",{href:!0,rel:!0});var Ks=i(ae);Ne=s(Ks,"MuST-C"),Ks.forEach(t),O=s(ke,"."),ke.forEach(t),we=p(o),I=r(o,"P",{});var Dn=i(I);Ae=s(Dn,"This model was contributed by "),re=r(Dn,"A",{href:!0,rel:!0});var Zc=i(re);ie=s(Zc,"valhalla"),Zc.forEach(t),De=s(Dn,". The original code can be found "),de=r(Dn,"A",{href:!0,rel:!0});var el=i(de);K=s(el,"here"),el.forEach(t),Ie=s(Dn,"."),Dn.forEach(t),Q=p(o),J=r(o,"H2",{class:!0});var xa=i(J);T=r(xa,"A",{id:!0,class:!0,href:!0});var tl=i(T);z=r(tl,"SPAN",{});var ol=i(z);k(Y.$$.fragment,ol),ol.forEach(t),tl.forEach(t),Ze=p(xa),Le=r(xa,"SPAN",{});var nl=i(Le);X=s(nl,"Inference"),nl.forEach(t),xa.forEach(t),Re=p(o),ue=r(o,"P",{});var ba=i(ue);et=s(ba,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),U=r(ba,"CODE",{});var sl=i(U);ce=s(sl,"generate()"),sl.forEach(t),tt=s(ba," method can be used for inference."),ba.forEach(t),Ve=p(o),C=r(o,"P",{});var Je=i(C);ot=s(Je,"The "),Se=r(Je,"A",{href:!0});var al=i(Se);Oe=s(al,"Speech2TextFeatureExtractor"),al.forEach(t),nt=s(Je,` class is responsible for extracting the log-mel filter-bank
features. The `),cn=r(Je,"A",{href:!0});var rl=i(cn);Qa=s(rl,"Speech2TextProcessor"),rl.forEach(t),Za=s(Je," wraps "),ln=r(Je,"A",{href:!0});var il=i(ln);er=s(il,"Speech2TextFeatureExtractor"),il.forEach(t),tr=s(Je,` and
`),pn=r(Je,"A",{href:!0});var dl=i(pn);or=s(dl,"Speech2TextTokenizer"),dl.forEach(t),nr=s(Je,` into a single instance to both extract the input features and decode the
predicted token ids.`),Je.forEach(t),Xs=p(o),W=r(o,"P",{});var fe=i(W);sr=s(fe,"The feature extractor depends on "),Bn=r(fe,"CODE",{});var cl=i(Bn);ar=s(cl,"torchaudio"),cl.forEach(t),rr=s(fe," and the tokenizer depends on "),Kn=r(fe,"CODE",{});var ll=i(Kn);ir=s(ll,"sentencepiece"),ll.forEach(t),dr=s(fe,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Jn=r(fe,"CODE",{});var pl=i(Jn);cr=s(pl,'pip install transformers"[speech, sentencepiece]"'),pl.forEach(t),lr=s(fe," or install the packages separately with "),Yn=r(fe,"CODE",{});var hl=i(Yn);pr=s(hl,"pip install torchaudio sentencepiece"),hl.forEach(t),hr=s(fe,". Also "),Xn=r(fe,"CODE",{});var ml=i(Xn);mr=s(ml,"torchaudio"),ml.forEach(t),fr=s(fe," requires the development version of the "),to=r(fe,"A",{href:!0,rel:!0});var fl=i(to);ur=s(fl,"libsndfile"),fl.forEach(t),_r=s(fe,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),Qn=r(fe,"CODE",{});var ul=i(Qn);gr=s(ul,"apt install libsndfile1-dev"),ul.forEach(t),fe.forEach(t),Qs=p(o),hn=r(o,"UL",{});var _l=i(hn);Zn=r(_l,"LI",{});var gl=i(Zn);Tr=s(gl,"ASR and Speech Translation"),gl.forEach(t),_l.forEach(t),Zs=p(o),k(oo.$$.fragment,o),ea=p(o),mn=r(o,"UL",{});var Tl=i(mn);no=r(Tl,"LI",{});var ka=i(no);es=r(ka,"P",{});var vl=i(es);vr=s(vl,"Multilingual speech translation"),vl.forEach(t),xr=p(ka),le=r(ka,"P",{});var ze=i(le);br=s(ze,"For multilingual speech translation models, "),ts=r(ze,"CODE",{});var xl=i(ts);kr=s(xl,"eos_token_id"),xl.forEach(t),yr=s(ze," is used as the "),os=r(ze,"CODE",{});var bl=i(os);wr=s(bl,"decoder_start_token_id"),bl.forEach(t),Sr=s(ze,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),ns=r(ze,"CODE",{});var kl=i(ns);$r=s(kl,"forced_bos_token_id"),kl.forEach(t),Er=s(ze," parameter to the "),ss=r(ze,"CODE",{});var yl=i(ss);qr=s(yl,"generate()"),yl.forEach(t),Fr=s(ze,` method. The following
example shows how to transate English speech to French text using the `),as=r(ze,"EM",{});var wl=i(as);zr=s(wl,"facebook/s2t-medium-mustc-multilingual-st"),wl.forEach(t),Pr=s(ze,`
checkpoint.`),ze.forEach(t),ka.forEach(t),Tl.forEach(t),ta=p(o),k(so.$$.fragment,o),oa=p(o),Tt=r(o,"P",{});var ya=i(Tt);Cr=s(ya,"See the "),ao=r(ya,"A",{href:!0,rel:!0});var Sl=i(ao);jr=s(Sl,"model hub"),Sl.forEach(t),Mr=s(ya," to look for Speech2Text checkpoints."),ya.forEach(t),na=p(o),st=r(o,"H2",{class:!0});var wa=i(st);vt=r(wa,"A",{id:!0,class:!0,href:!0});var $l=i(vt);rs=r($l,"SPAN",{});var El=i(rs);k(ro.$$.fragment,El),El.forEach(t),$l.forEach(t),Nr=p(wa),is=r(wa,"SPAN",{});var ql=i(is);Ar=s(ql,"Speech2TextConfig"),ql.forEach(t),wa.forEach(t),sa=p(o),ve=r(o,"DIV",{class:!0});var Ht=i(ve);k(io.$$.fragment,Ht),Dr=p(Ht),at=r(Ht,"P",{});var In=i(at);Ir=s(In,"This is the configuration class to store the configuration of a "),fn=r(In,"A",{href:!0});var Fl=i(fn);Lr=s(Fl,"Speech2TextModel"),Fl.forEach(t),Or=s(In,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),co=r(In,"A",{href:!0,rel:!0});var zl=i(co);Gr=s(zl,"facebook/s2t-small-librispeech-asr"),zl.forEach(t),Ur=s(In," architecture."),In.forEach(t),Wr=p(Ht),rt=r(Ht,"P",{});var Ln=i(rt);Rr=s(Ln,"Configuration objects inherit from "),un=r(Ln,"A",{href:!0});var Pl=i(un);Vr=s(Pl,"PretrainedConfig"),Pl.forEach(t),Hr=s(Ln,` and can be used to control the model outputs. Read the
documentation from `),_n=r(Ln,"A",{href:!0});var Cl=i(_n);Br=s(Cl,"PretrainedConfig"),Cl.forEach(t),Kr=s(Ln," for more information."),Ln.forEach(t),Jr=p(Ht),k(xt.$$.fragment,Ht),Ht.forEach(t),aa=p(o),it=r(o,"H2",{class:!0});var Sa=i(it);bt=r(Sa,"A",{id:!0,class:!0,href:!0});var jl=i(bt);ds=r(jl,"SPAN",{});var Ml=i(ds);k(lo.$$.fragment,Ml),Ml.forEach(t),jl.forEach(t),Yr=p(Sa),cs=r(Sa,"SPAN",{});var Nl=i(cs);Xr=s(Nl,"Speech2TextTokenizer"),Nl.forEach(t),Sa.forEach(t),ra=p(o),R=r(o,"DIV",{class:!0});var ge=i(R);k(po.$$.fragment,ge),Qr=p(ge),ls=r(ge,"P",{});var Al=i(ls);Zr=s(Al,"Construct an Speech2Text tokenizer."),Al.forEach(t),ei=p(ge),ho=r(ge,"P",{});var $a=i(ho);ti=s($a,"This tokenizer inherits from "),gn=r($a,"A",{href:!0});var Dl=i(gn);oi=s(Dl,"PreTrainedTokenizer"),Dl.forEach(t),ni=s($a,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),$a.forEach(t),si=p(ge),kt=r(ge,"DIV",{class:!0});var Ea=i(kt);k(mo.$$.fragment,Ea),ai=p(Ea),ps=r(Ea,"P",{});var Il=i(ps);ri=s(Il,"Build model inputs from a sequence by appending eos_token_id."),Il.forEach(t),Ea.forEach(t),ii=p(ge),yt=r(ge,"DIV",{class:!0});var qa=i(yt);k(fo.$$.fragment,qa),di=p(qa),uo=r(qa,"P",{});var Fa=i(uo);ci=s(Fa,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hs=r(Fa,"CODE",{});var Ll=i(hs);li=s(Ll,"prepare_for_model"),Ll.forEach(t),pi=s(Fa," method."),Fa.forEach(t),qa.forEach(t),hi=p(ge),He=r(ge,"DIV",{class:!0});var On=i(He);k(_o.$$.fragment,On),mi=p(On),Tn=r(On,"P",{});var Jc=i(Tn);fi=s(Jc,"Create the token type IDs corresponding to the sequences passed. "),vn=r(Jc,"A",{href:!0});var Ol=i(vn);ui=s(Ol,`What are token type
IDs?`),Ol.forEach(t),Jc.forEach(t),_i=p(On),ms=r(On,"P",{});var Gl=i(ms);gi=s(Gl,"Should be overridden in a subclass if the model has a special way of building those."),Gl.forEach(t),On.forEach(t),Ti=p(ge),xn=r(ge,"DIV",{class:!0});var Ul=i(xn);k(go.$$.fragment,Ul),Ul.forEach(t),ge.forEach(t),ia=p(o),dt=r(o,"H2",{class:!0});var za=i(dt);wt=r(za,"A",{id:!0,class:!0,href:!0});var Wl=i(wt);fs=r(Wl,"SPAN",{});var Rl=i(fs);k(To.$$.fragment,Rl),Rl.forEach(t),Wl.forEach(t),vi=p(za),us=r(za,"SPAN",{});var Vl=i(us);xi=s(Vl,"Speech2TextFeatureExtractor"),Vl.forEach(t),za.forEach(t),da=p(o),pe=r(o,"DIV",{class:!0});var Ye=i(pe);k(vo.$$.fragment,Ye),bi=p(Ye),_s=r(Ye,"P",{});var Hl=i(_s);ki=s(Hl,"Constructs a Speech2Text feature extractor."),Hl.forEach(t),yi=p(Ye),xo=r(Ye,"P",{});var Pa=i(xo);wi=s(Pa,"This feature extractor inherits from "),bn=r(Pa,"A",{href:!0});var Bl=i(bn);Si=s(Bl,"Speech2TextFeatureExtractor"),Bl.forEach(t),$i=s(Pa,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Pa.forEach(t),Ei=p(Ye),gs=r(Ye,"P",{});var Kl=i(gs);qi=s(Kl,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Kl.forEach(t),Fi=p(Ye),St=r(Ye,"DIV",{class:!0});var Ca=i(St);k(bo.$$.fragment,Ca),zi=p(Ca),Ts=r(Ca,"P",{});var Jl=i(Ts);Pi=s(Jl,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),Jl.forEach(t),Ca.forEach(t),Ye.forEach(t),ca=p(o),ct=r(o,"H2",{class:!0});var ja=i(ct);$t=r(ja,"A",{id:!0,class:!0,href:!0});var Yl=i($t);vs=r(Yl,"SPAN",{});var Xl=i(vs);k(ko.$$.fragment,Xl),Xl.forEach(t),Yl.forEach(t),Ci=p(ja),xs=r(ja,"SPAN",{});var Ql=i(xs);ji=s(Ql,"Speech2TextProcessor"),Ql.forEach(t),ja.forEach(t),la=p(o),G=r(o,"DIV",{class:!0});var Z=i(G);k(yo.$$.fragment,Z),Mi=p(Z),bs=r(Z,"P",{});var Zl=i(bs);Ni=s(Zl,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Zl.forEach(t),Ai=p(Z),_e=r(Z,"P",{});var Ue=i(_e);kn=r(Ue,"A",{href:!0});var ep=i(kn);Di=s(ep,"Speech2TextProcessor"),ep.forEach(t),Ii=s(Ue," offers all the functionalities of "),yn=r(Ue,"A",{href:!0});var tp=i(yn);Li=s(tp,"Speech2TextFeatureExtractor"),tp.forEach(t),Oi=s(Ue,` and
`),wn=r(Ue,"A",{href:!0});var op=i(wn);Gi=s(op,"Speech2TextTokenizer"),op.forEach(t),Ui=s(Ue,". See the "),wo=r(Ue,"A",{href:!0});var Yc=i(wo);ks=r(Yc,"STRONG",{});var np=i(ks);Wi=s(np,"call"),np.forEach(t),Ri=s(Yc,"()"),Yc.forEach(t),Vi=s(Ue," and "),Sn=r(Ue,"A",{href:!0});var sp=i(Sn);Hi=s(sp,"decode()"),sp.forEach(t),Bi=s(Ue,` for more
information.`),Ue.forEach(t),Ki=p(Z),Et=r(Z,"DIV",{class:!0});var Ma=i(Et);k(So.$$.fragment,Ma),Ji=p(Ma),Ge=r(Ma,"P",{});var Bt=i(Ge);Yi=s(Bt,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),$o=r(Bt,"A",{href:!0});var Xc=i($o);ys=r(Xc,"STRONG",{});var ap=i(ys);Xi=s(ap,"call"),ap.forEach(t),Qi=s(Xc,"()"),Xc.forEach(t),Zi=s(Bt,` and returns its output. If used in the context
`),ws=r(Bt,"CODE",{});var rp=i(ws);ed=s(rp,"as_target_processor()"),rp.forEach(t),td=s(Bt,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),Eo=r(Bt,"A",{href:!0});var Qc=i(Eo);Ss=r(Qc,"STRONG",{});var ip=i(Ss);od=s(ip,"call"),ip.forEach(t),nd=s(Qc,"()"),Qc.forEach(t),sd=s(Bt,`. Please refer to the doctsring of the above two methods for more
information.`),Bt.forEach(t),Ma.forEach(t),ad=p(Z),Be=r(Z,"DIV",{class:!0});var Gn=i(Be);k(qo.$$.fragment,Gn),rd=p(Gn),$s=r(Gn,"P",{});var dp=i($s);id=s(dp,"Instantiate a processor associated with a pretrained model."),dp.forEach(t),dd=p(Gn),k(qt.$$.fragment,Gn),Gn.forEach(t),cd=p(Z),Ke=r(Z,"DIV",{class:!0});var Un=i(Ke);k(Fo.$$.fragment,Un),ld=p(Un),zo=r(Un,"P",{});var Na=i(zo);pd=s(Na,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),$n=r(Na,"A",{href:!0});var cp=i($n);hd=s(cp,"from_pretrained()"),cp.forEach(t),md=s(Na," method."),Na.forEach(t),fd=p(Un),k(Ft.$$.fragment,Un),Un.forEach(t),ud=p(Z),zt=r(Z,"DIV",{class:!0});var Aa=i(zt);k(Po.$$.fragment,Aa),_d=p(Aa),Co=r(Aa,"P",{});var Da=i(Co);gd=s(Da,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),En=r(Da,"A",{href:!0});var lp=i(En);Td=s(lp,"batch_decode()"),lp.forEach(t),vd=s(Da,`. Please
refer to the docstring of this method for more information.`),Da.forEach(t),Aa.forEach(t),xd=p(Z),Pt=r(Z,"DIV",{class:!0});var Ia=i(Pt);k(jo.$$.fragment,Ia),bd=p(Ia),Mo=r(Ia,"P",{});var La=i(Mo);kd=s(La,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),qn=r(La,"A",{href:!0});var pp=i(qn);yd=s(pp,"decode()"),pp.forEach(t),wd=s(La,`. Please refer
to the docstring of this method for more information.`),La.forEach(t),Ia.forEach(t),Z.forEach(t),pa=p(o),lt=r(o,"H2",{class:!0});var Oa=i(lt);Ct=r(Oa,"A",{id:!0,class:!0,href:!0});var hp=i(Ct);Es=r(hp,"SPAN",{});var mp=i(Es);k(No.$$.fragment,mp),mp.forEach(t),hp.forEach(t),Sd=p(Oa),qs=r(Oa,"SPAN",{});var fp=i(qs);$d=s(fp,"Speech2TextModel"),fp.forEach(t),Oa.forEach(t),ha=p(o),xe=r(o,"DIV",{class:!0});var Kt=i(xe);k(Ao.$$.fragment,Kt),Ed=p(Kt),Do=r(Kt,"P",{});var Ga=i(Do);qd=s(Ga,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Fn=r(Ga,"A",{href:!0});var up=i(Fn);Fd=s(up,"PreTrainedModel"),up.forEach(t),zd=s(Ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ga.forEach(t),Pd=p(Kt),Io=r(Kt,"P",{});var Ua=i(Io);Cd=s(Ua,"This model is also a PyTorch "),Lo=r(Ua,"A",{href:!0,rel:!0});var _p=i(Lo);jd=s(_p,"torch.nn.Module"),_p.forEach(t),Md=s(Ua,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ua.forEach(t),Nd=p(Kt),$e=r(Kt,"DIV",{class:!0});var Jt=i($e);k(Oo.$$.fragment,Jt),Ad=p(Jt),pt=r(Jt,"P",{});var Wn=i(pt);Dd=s(Wn,"The "),zn=r(Wn,"A",{href:!0});var gp=i(zn);Id=s(gp,"Speech2TextModel"),gp.forEach(t),Ld=s(Wn," forward method, overrides the "),Fs=r(Wn,"CODE",{});var Tp=i(Fs);Od=s(Tp,"__call__"),Tp.forEach(t),Gd=s(Wn," special method."),Wn.forEach(t),Ud=p(Jt),k(jt.$$.fragment,Jt),Wd=p(Jt),k(Mt.$$.fragment,Jt),Jt.forEach(t),Kt.forEach(t),ma=p(o),ht=r(o,"H2",{class:!0});var Wa=i(ht);Nt=r(Wa,"A",{id:!0,class:!0,href:!0});var vp=i(Nt);zs=r(vp,"SPAN",{});var xp=i(zs);k(Go.$$.fragment,xp),xp.forEach(t),vp.forEach(t),Rd=p(Wa),Ps=r(Wa,"SPAN",{});var bp=i(Ps);Vd=s(bp,"Speech2TextForConditionalGeneration"),bp.forEach(t),Wa.forEach(t),fa=p(o),be=r(o,"DIV",{class:!0});var Yt=i(be);k(Uo.$$.fragment,Yt),Hd=p(Yt),Wo=r(Yt,"P",{});var Ra=i(Wo);Bd=s(Ra,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Pn=r(Ra,"A",{href:!0});var kp=i(Pn);Kd=s(kp,"PreTrainedModel"),kp.forEach(t),Jd=s(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra.forEach(t),Yd=p(Yt),Ro=r(Yt,"P",{});var Va=i(Ro);Xd=s(Va,"This model is also a PyTorch "),Vo=r(Va,"A",{href:!0,rel:!0});var yp=i(Vo);Qd=s(yp,"torch.nn.Module"),yp.forEach(t),Zd=s(Va,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Va.forEach(t),ec=p(Yt),Ee=r(Yt,"DIV",{class:!0});var Xt=i(Ee);k(Ho.$$.fragment,Xt),tc=p(Xt),mt=r(Xt,"P",{});var Rn=i(mt);oc=s(Rn,"The "),Cn=r(Rn,"A",{href:!0});var wp=i(Cn);nc=s(wp,"Speech2TextForConditionalGeneration"),wp.forEach(t),sc=s(Rn," forward method, overrides the "),Cs=r(Rn,"CODE",{});var Sp=i(Cs);ac=s(Sp,"__call__"),Sp.forEach(t),rc=s(Rn," special method."),Rn.forEach(t),ic=p(Xt),k(At.$$.fragment,Xt),dc=p(Xt),k(Dt.$$.fragment,Xt),Xt.forEach(t),Yt.forEach(t),ua=p(o),ft=r(o,"H2",{class:!0});var Ha=i(ft);It=r(Ha,"A",{id:!0,class:!0,href:!0});var $p=i(It);js=r($p,"SPAN",{});var Ep=i(js);k(Bo.$$.fragment,Ep),Ep.forEach(t),$p.forEach(t),cc=p(Ha),Ms=r(Ha,"SPAN",{});var qp=i(Ms);lc=s(qp,"TFSpeech2TextModel"),qp.forEach(t),Ha.forEach(t),_a=p(o),he=r(o,"DIV",{class:!0});var Xe=i(he);k(Ko.$$.fragment,Xe),pc=p(Xe),Jo=r(Xe,"P",{});var Ba=i(Jo);hc=s(Ba,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),jn=r(Ba,"A",{href:!0});var Fp=i(jn);mc=s(Fp,"TFPreTrainedModel"),Fp.forEach(t),fc=s(Ba,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ba.forEach(t),uc=p(Xe),Yo=r(Xe,"P",{});var Ka=i(Yo);_c=s(Ka,"This model is also a "),Xo=r(Ka,"A",{href:!0,rel:!0});var zp=i(Xo);gc=s(zp,"tf.keras.Model"),zp.forEach(t),Tc=s(Ka,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ka.forEach(t),vc=p(Xe),k(Lt.$$.fragment,Xe),xc=p(Xe),qe=r(Xe,"DIV",{class:!0});var Qt=i(qe);k(Qo.$$.fragment,Qt),bc=p(Qt),ut=r(Qt,"P",{});var Vn=i(ut);kc=s(Vn,"The "),Mn=r(Vn,"A",{href:!0});var Pp=i(Mn);yc=s(Pp,"TFSpeech2TextModel"),Pp.forEach(t),wc=s(Vn," forward method, overrides the "),Ns=r(Vn,"CODE",{});var Cp=i(Ns);Sc=s(Cp,"__call__"),Cp.forEach(t),$c=s(Vn," special method."),Vn.forEach(t),Ec=p(Qt),k(Ot.$$.fragment,Qt),qc=p(Qt),k(Gt.$$.fragment,Qt),Qt.forEach(t),Xe.forEach(t),ga=p(o),_t=r(o,"H2",{class:!0});var Ja=i(_t);Ut=r(Ja,"A",{id:!0,class:!0,href:!0});var jp=i(Ut);As=r(jp,"SPAN",{});var Mp=i(As);k(Zo.$$.fragment,Mp),Mp.forEach(t),jp.forEach(t),Fc=p(Ja),Ds=r(Ja,"SPAN",{});var Np=i(Ds);zc=s(Np,"TFSpeech2TextForConditionalGeneration"),Np.forEach(t),Ja.forEach(t),Ta=p(o),me=r(o,"DIV",{class:!0});var Qe=i(me);k(en.$$.fragment,Qe),Pc=p(Qe),tn=r(Qe,"P",{});var Ya=i(tn);Cc=s(Ya,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=r(Ya,"A",{href:!0});var Ap=i(Nn);jc=s(Ap,"TFPreTrainedModel"),Ap.forEach(t),Mc=s(Ya,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ya.forEach(t),Nc=p(Qe),on=r(Qe,"P",{});var Xa=i(on);Ac=s(Xa,"This model is also a "),nn=r(Xa,"A",{href:!0,rel:!0});var Dp=i(nn);Dc=s(Dp,"tf.keras.Model"),Dp.forEach(t),Ic=s(Xa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xa.forEach(t),Lc=p(Qe),k(Wt.$$.fragment,Qe),Oc=p(Qe),Fe=r(Qe,"DIV",{class:!0});var Zt=i(Fe);k(sn.$$.fragment,Zt),Gc=p(Zt),gt=r(Zt,"P",{});var Hn=i(gt);Uc=s(Hn,"The "),An=r(Hn,"A",{href:!0});var Ip=i(An);Wc=s(Ip,"TFSpeech2TextForConditionalGeneration"),Ip.forEach(t),Rc=s(Hn," forward method, overrides the "),Is=r(Hn,"CODE",{});var Lp=i(Is);Vc=s(Lp,"__call__"),Lp.forEach(t),Hc=s(Hn," special method."),Hn.forEach(t),Bc=p(Zt),k(Rt.$$.fragment,Zt),Kc=p(Zt),k(Vt.$$.fragment,Zt),Zt.forEach(t),Qe.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(ah)),c(m,"id","speech2text"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#speech2text"),c(_,"class","relative group"),c(D,"id","overview"),c(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(D,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2010.05171"),c(te,"rel","nofollow"),c(M,"href","http://www.openslr.org/12"),c(M,"rel","nofollow"),c(ne,"href","https://github.com/facebookresearch/covost"),c(ne,"rel","nofollow"),c(ae,"href","https://ict.fbk.eu/must-c/"),c(ae,"rel","nofollow"),c(re,"href","https://huggingface.co/valhalla"),c(re,"rel","nofollow"),c(de,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),c(de,"rel","nofollow"),c(T,"id","inference"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#inference"),c(J,"class","relative group"),c(Se,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(cn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),c(ln,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(pn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),c(to,"href","http://www.mega-nerd.com/libsndfile/"),c(to,"rel","nofollow"),c(ao,"href","https://huggingface.co/models?filter=speech_to_text"),c(ao,"rel","nofollow"),c(vt,"id","transformers.Speech2TextConfig"),c(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vt,"href","#transformers.Speech2TextConfig"),c(st,"class","relative group"),c(fn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel"),c(co,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),c(co,"rel","nofollow"),c(un,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(_n,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bt,"id","transformers.Speech2TextTokenizer"),c(bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bt,"href","#transformers.Speech2TextTokenizer"),c(it,"class","relative group"),c(gn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vn,"href","../glossary#token-type-ids"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wt,"id","transformers.Speech2TextFeatureExtractor"),c(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wt,"href","#transformers.Speech2TextFeatureExtractor"),c(dt,"class","relative group"),c(bn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($t,"id","transformers.Speech2TextProcessor"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.Speech2TextProcessor"),c(ct,"class","relative group"),c(kn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),c(yn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(wn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),c(wo,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),c(Sn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),c($o,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),c(Eo,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),c(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($n,"href","/docs/transformers/main/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),c(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(En,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),c(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(qn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),c(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ct,"id","transformers.Speech2TextModel"),c(Ct,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ct,"href","#transformers.Speech2TextModel"),c(lt,"class","relative group"),c(Fn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Lo,"rel","nofollow"),c(zn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Nt,"id","transformers.Speech2TextForConditionalGeneration"),c(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Nt,"href","#transformers.Speech2TextForConditionalGeneration"),c(ht,"class","relative group"),c(Pn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Vo,"rel","nofollow"),c(Cn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(It,"id","transformers.TFSpeech2TextModel"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.TFSpeech2TextModel"),c(ft,"class","relative group"),c(jn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Xo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Xo,"rel","nofollow"),c(Mn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ut,"id","transformers.TFSpeech2TextForConditionalGeneration"),c(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ut,"href","#transformers.TFSpeech2TextForConditionalGeneration"),c(_t,"class","relative group"),c(Nn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(nn,"rel","nofollow"),c(An,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,h),f(o,x,u),f(o,_,u),e(_,m),e(m,v),y(d,v,null),e(_,g),e(_,E),e(E,A),f(o,F,u),f(o,q,u),e(q,D),e(D,V),y(ee,V,null),e(q,Pe),e(q,H),e(H,Ce),f(o,ye,u),f(o,N,u),e(N,B),e(N,te),e(te,Te),e(N,j),e(N,M),e(M,je),e(N,oe),e(N,ne),e(ne,Me),e(N,se),e(N,ae),e(ae,Ne),e(N,O),f(o,we,u),f(o,I,u),e(I,Ae),e(I,re),e(re,ie),e(I,De),e(I,de),e(de,K),e(I,Ie),f(o,Q,u),f(o,J,u),e(J,T),e(T,z),y(Y,z,null),e(J,Ze),e(J,Le),e(Le,X),f(o,Re,u),f(o,ue,u),e(ue,et),e(ue,U),e(U,ce),e(ue,tt),f(o,Ve,u),f(o,C,u),e(C,ot),e(C,Se),e(Se,Oe),e(C,nt),e(C,cn),e(cn,Qa),e(C,Za),e(C,ln),e(ln,er),e(C,tr),e(C,pn),e(pn,or),e(C,nr),f(o,Xs,u),f(o,W,u),e(W,sr),e(W,Bn),e(Bn,ar),e(W,rr),e(W,Kn),e(Kn,ir),e(W,dr),e(W,Jn),e(Jn,cr),e(W,lr),e(W,Yn),e(Yn,pr),e(W,hr),e(W,Xn),e(Xn,mr),e(W,fr),e(W,to),e(to,ur),e(W,_r),e(W,Qn),e(Qn,gr),f(o,Qs,u),f(o,hn,u),e(hn,Zn),e(Zn,Tr),f(o,Zs,u),y(oo,o,u),f(o,ea,u),f(o,mn,u),e(mn,no),e(no,es),e(es,vr),e(no,xr),e(no,le),e(le,br),e(le,ts),e(ts,kr),e(le,yr),e(le,os),e(os,wr),e(le,Sr),e(le,ns),e(ns,$r),e(le,Er),e(le,ss),e(ss,qr),e(le,Fr),e(le,as),e(as,zr),e(le,Pr),f(o,ta,u),y(so,o,u),f(o,oa,u),f(o,Tt,u),e(Tt,Cr),e(Tt,ao),e(ao,jr),e(Tt,Mr),f(o,na,u),f(o,st,u),e(st,vt),e(vt,rs),y(ro,rs,null),e(st,Nr),e(st,is),e(is,Ar),f(o,sa,u),f(o,ve,u),y(io,ve,null),e(ve,Dr),e(ve,at),e(at,Ir),e(at,fn),e(fn,Lr),e(at,Or),e(at,co),e(co,Gr),e(at,Ur),e(ve,Wr),e(ve,rt),e(rt,Rr),e(rt,un),e(un,Vr),e(rt,Hr),e(rt,_n),e(_n,Br),e(rt,Kr),e(ve,Jr),y(xt,ve,null),f(o,aa,u),f(o,it,u),e(it,bt),e(bt,ds),y(lo,ds,null),e(it,Yr),e(it,cs),e(cs,Xr),f(o,ra,u),f(o,R,u),y(po,R,null),e(R,Qr),e(R,ls),e(ls,Zr),e(R,ei),e(R,ho),e(ho,ti),e(ho,gn),e(gn,oi),e(ho,ni),e(R,si),e(R,kt),y(mo,kt,null),e(kt,ai),e(kt,ps),e(ps,ri),e(R,ii),e(R,yt),y(fo,yt,null),e(yt,di),e(yt,uo),e(uo,ci),e(uo,hs),e(hs,li),e(uo,pi),e(R,hi),e(R,He),y(_o,He,null),e(He,mi),e(He,Tn),e(Tn,fi),e(Tn,vn),e(vn,ui),e(He,_i),e(He,ms),e(ms,gi),e(R,Ti),e(R,xn),y(go,xn,null),f(o,ia,u),f(o,dt,u),e(dt,wt),e(wt,fs),y(To,fs,null),e(dt,vi),e(dt,us),e(us,xi),f(o,da,u),f(o,pe,u),y(vo,pe,null),e(pe,bi),e(pe,_s),e(_s,ki),e(pe,yi),e(pe,xo),e(xo,wi),e(xo,bn),e(bn,Si),e(xo,$i),e(pe,Ei),e(pe,gs),e(gs,qi),e(pe,Fi),e(pe,St),y(bo,St,null),e(St,zi),e(St,Ts),e(Ts,Pi),f(o,ca,u),f(o,ct,u),e(ct,$t),e($t,vs),y(ko,vs,null),e(ct,Ci),e(ct,xs),e(xs,ji),f(o,la,u),f(o,G,u),y(yo,G,null),e(G,Mi),e(G,bs),e(bs,Ni),e(G,Ai),e(G,_e),e(_e,kn),e(kn,Di),e(_e,Ii),e(_e,yn),e(yn,Li),e(_e,Oi),e(_e,wn),e(wn,Gi),e(_e,Ui),e(_e,wo),e(wo,ks),e(ks,Wi),e(wo,Ri),e(_e,Vi),e(_e,Sn),e(Sn,Hi),e(_e,Bi),e(G,Ki),e(G,Et),y(So,Et,null),e(Et,Ji),e(Et,Ge),e(Ge,Yi),e(Ge,$o),e($o,ys),e(ys,Xi),e($o,Qi),e(Ge,Zi),e(Ge,ws),e(ws,ed),e(Ge,td),e(Ge,Eo),e(Eo,Ss),e(Ss,od),e(Eo,nd),e(Ge,sd),e(G,ad),e(G,Be),y(qo,Be,null),e(Be,rd),e(Be,$s),e($s,id),e(Be,dd),y(qt,Be,null),e(G,cd),e(G,Ke),y(Fo,Ke,null),e(Ke,ld),e(Ke,zo),e(zo,pd),e(zo,$n),e($n,hd),e(zo,md),e(Ke,fd),y(Ft,Ke,null),e(G,ud),e(G,zt),y(Po,zt,null),e(zt,_d),e(zt,Co),e(Co,gd),e(Co,En),e(En,Td),e(Co,vd),e(G,xd),e(G,Pt),y(jo,Pt,null),e(Pt,bd),e(Pt,Mo),e(Mo,kd),e(Mo,qn),e(qn,yd),e(Mo,wd),f(o,pa,u),f(o,lt,u),e(lt,Ct),e(Ct,Es),y(No,Es,null),e(lt,Sd),e(lt,qs),e(qs,$d),f(o,ha,u),f(o,xe,u),y(Ao,xe,null),e(xe,Ed),e(xe,Do),e(Do,qd),e(Do,Fn),e(Fn,Fd),e(Do,zd),e(xe,Pd),e(xe,Io),e(Io,Cd),e(Io,Lo),e(Lo,jd),e(Io,Md),e(xe,Nd),e(xe,$e),y(Oo,$e,null),e($e,Ad),e($e,pt),e(pt,Dd),e(pt,zn),e(zn,Id),e(pt,Ld),e(pt,Fs),e(Fs,Od),e(pt,Gd),e($e,Ud),y(jt,$e,null),e($e,Wd),y(Mt,$e,null),f(o,ma,u),f(o,ht,u),e(ht,Nt),e(Nt,zs),y(Go,zs,null),e(ht,Rd),e(ht,Ps),e(Ps,Vd),f(o,fa,u),f(o,be,u),y(Uo,be,null),e(be,Hd),e(be,Wo),e(Wo,Bd),e(Wo,Pn),e(Pn,Kd),e(Wo,Jd),e(be,Yd),e(be,Ro),e(Ro,Xd),e(Ro,Vo),e(Vo,Qd),e(Ro,Zd),e(be,ec),e(be,Ee),y(Ho,Ee,null),e(Ee,tc),e(Ee,mt),e(mt,oc),e(mt,Cn),e(Cn,nc),e(mt,sc),e(mt,Cs),e(Cs,ac),e(mt,rc),e(Ee,ic),y(At,Ee,null),e(Ee,dc),y(Dt,Ee,null),f(o,ua,u),f(o,ft,u),e(ft,It),e(It,js),y(Bo,js,null),e(ft,cc),e(ft,Ms),e(Ms,lc),f(o,_a,u),f(o,he,u),y(Ko,he,null),e(he,pc),e(he,Jo),e(Jo,hc),e(Jo,jn),e(jn,mc),e(Jo,fc),e(he,uc),e(he,Yo),e(Yo,_c),e(Yo,Xo),e(Xo,gc),e(Yo,Tc),e(he,vc),y(Lt,he,null),e(he,xc),e(he,qe),y(Qo,qe,null),e(qe,bc),e(qe,ut),e(ut,kc),e(ut,Mn),e(Mn,yc),e(ut,wc),e(ut,Ns),e(Ns,Sc),e(ut,$c),e(qe,Ec),y(Ot,qe,null),e(qe,qc),y(Gt,qe,null),f(o,ga,u),f(o,_t,u),e(_t,Ut),e(Ut,As),y(Zo,As,null),e(_t,Fc),e(_t,Ds),e(Ds,zc),f(o,Ta,u),f(o,me,u),y(en,me,null),e(me,Pc),e(me,tn),e(tn,Cc),e(tn,Nn),e(Nn,jc),e(tn,Mc),e(me,Nc),e(me,on),e(on,Ac),e(on,nn),e(nn,Dc),e(on,Ic),e(me,Lc),y(Wt,me,null),e(me,Oc),e(me,Fe),y(sn,Fe,null),e(Fe,Gc),e(Fe,gt),e(gt,Uc),e(gt,An),e(An,Wc),e(gt,Rc),e(gt,Is),e(Is,Vc),e(gt,Hc),e(Fe,Bc),y(Rt,Fe,null),e(Fe,Kc),y(Vt,Fe,null),va=!0},p(o,[u]){const an={};u&2&&(an.$$scope={dirty:u,ctx:o}),xt.$set(an);const Ls={};u&2&&(Ls.$$scope={dirty:u,ctx:o}),qt.$set(Ls);const Os={};u&2&&(Os.$$scope={dirty:u,ctx:o}),Ft.$set(Os);const Gs={};u&2&&(Gs.$$scope={dirty:u,ctx:o}),jt.$set(Gs);const rn={};u&2&&(rn.$$scope={dirty:u,ctx:o}),Mt.$set(rn);const Us={};u&2&&(Us.$$scope={dirty:u,ctx:o}),At.$set(Us);const Ws={};u&2&&(Ws.$$scope={dirty:u,ctx:o}),Dt.$set(Ws);const Rs={};u&2&&(Rs.$$scope={dirty:u,ctx:o}),Lt.$set(Rs);const ke={};u&2&&(ke.$$scope={dirty:u,ctx:o}),Ot.$set(ke);const Vs={};u&2&&(Vs.$$scope={dirty:u,ctx:o}),Gt.$set(Vs);const Hs={};u&2&&(Hs.$$scope={dirty:u,ctx:o}),Wt.$set(Hs);const Bs={};u&2&&(Bs.$$scope={dirty:u,ctx:o}),Rt.$set(Bs);const Ks={};u&2&&(Ks.$$scope={dirty:u,ctx:o}),Vt.$set(Ks)},i(o){va||(w(d.$$.fragment,o),w(ee.$$.fragment,o),w(Y.$$.fragment,o),w(oo.$$.fragment,o),w(so.$$.fragment,o),w(ro.$$.fragment,o),w(io.$$.fragment,o),w(xt.$$.fragment,o),w(lo.$$.fragment,o),w(po.$$.fragment,o),w(mo.$$.fragment,o),w(fo.$$.fragment,o),w(_o.$$.fragment,o),w(go.$$.fragment,o),w(To.$$.fragment,o),w(vo.$$.fragment,o),w(bo.$$.fragment,o),w(ko.$$.fragment,o),w(yo.$$.fragment,o),w(So.$$.fragment,o),w(qo.$$.fragment,o),w(qt.$$.fragment,o),w(Fo.$$.fragment,o),w(Ft.$$.fragment,o),w(Po.$$.fragment,o),w(jo.$$.fragment,o),w(No.$$.fragment,o),w(Ao.$$.fragment,o),w(Oo.$$.fragment,o),w(jt.$$.fragment,o),w(Mt.$$.fragment,o),w(Go.$$.fragment,o),w(Uo.$$.fragment,o),w(Ho.$$.fragment,o),w(At.$$.fragment,o),w(Dt.$$.fragment,o),w(Bo.$$.fragment,o),w(Ko.$$.fragment,o),w(Lt.$$.fragment,o),w(Qo.$$.fragment,o),w(Ot.$$.fragment,o),w(Gt.$$.fragment,o),w(Zo.$$.fragment,o),w(en.$$.fragment,o),w(Wt.$$.fragment,o),w(sn.$$.fragment,o),w(Rt.$$.fragment,o),w(Vt.$$.fragment,o),va=!0)},o(o){S(d.$$.fragment,o),S(ee.$$.fragment,o),S(Y.$$.fragment,o),S(oo.$$.fragment,o),S(so.$$.fragment,o),S(ro.$$.fragment,o),S(io.$$.fragment,o),S(xt.$$.fragment,o),S(lo.$$.fragment,o),S(po.$$.fragment,o),S(mo.$$.fragment,o),S(fo.$$.fragment,o),S(_o.$$.fragment,o),S(go.$$.fragment,o),S(To.$$.fragment,o),S(vo.$$.fragment,o),S(bo.$$.fragment,o),S(ko.$$.fragment,o),S(yo.$$.fragment,o),S(So.$$.fragment,o),S(qo.$$.fragment,o),S(qt.$$.fragment,o),S(Fo.$$.fragment,o),S(Ft.$$.fragment,o),S(Po.$$.fragment,o),S(jo.$$.fragment,o),S(No.$$.fragment,o),S(Ao.$$.fragment,o),S(Oo.$$.fragment,o),S(jt.$$.fragment,o),S(Mt.$$.fragment,o),S(Go.$$.fragment,o),S(Uo.$$.fragment,o),S(Ho.$$.fragment,o),S(At.$$.fragment,o),S(Dt.$$.fragment,o),S(Bo.$$.fragment,o),S(Ko.$$.fragment,o),S(Lt.$$.fragment,o),S(Qo.$$.fragment,o),S(Ot.$$.fragment,o),S(Gt.$$.fragment,o),S(Zo.$$.fragment,o),S(en.$$.fragment,o),S(Wt.$$.fragment,o),S(sn.$$.fragment,o),S(Rt.$$.fragment,o),S(Vt.$$.fragment,o),va=!1},d(o){t(h),o&&t(x),o&&t(_),$(d),o&&t(F),o&&t(q),$(ee),o&&t(ye),o&&t(N),o&&t(we),o&&t(I),o&&t(Q),o&&t(J),$(Y),o&&t(Re),o&&t(ue),o&&t(Ve),o&&t(C),o&&t(Xs),o&&t(W),o&&t(Qs),o&&t(hn),o&&t(Zs),$(oo,o),o&&t(ea),o&&t(mn),o&&t(ta),$(so,o),o&&t(oa),o&&t(Tt),o&&t(na),o&&t(st),$(ro),o&&t(sa),o&&t(ve),$(io),$(xt),o&&t(aa),o&&t(it),$(lo),o&&t(ra),o&&t(R),$(po),$(mo),$(fo),$(_o),$(go),o&&t(ia),o&&t(dt),$(To),o&&t(da),o&&t(pe),$(vo),$(bo),o&&t(ca),o&&t(ct),$(ko),o&&t(la),o&&t(G),$(yo),$(So),$(qo),$(qt),$(Fo),$(Ft),$(Po),$(jo),o&&t(pa),o&&t(lt),$(No),o&&t(ha),o&&t(xe),$(Ao),$(Oo),$(jt),$(Mt),o&&t(ma),o&&t(ht),$(Go),o&&t(fa),o&&t(be),$(Uo),$(Ho),$(At),$(Dt),o&&t(ua),o&&t(ft),$(Bo),o&&t(_a),o&&t(he),$(Ko),$(Lt),$(Qo),$(Ot),$(Gt),o&&t(ga),o&&t(_t),$(Zo),o&&t(Ta),o&&t(me),$(en),$(Wt),$(sn),$(Rt),$(Vt)}}}const ah={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function rh(P){return Rp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mh extends Op{constructor(h){super();Gp(this,h,rh,sh,Up,{})}}export{mh as default,ah as metadata};
