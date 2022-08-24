import{S as Kp,i as Jp,s as Yp,e as r,k as l,w as x,t as n,M as Xp,c as a,d as t,m as p,a as i,x as k,h as s,b as c,G as e,g as f,y,q as w,o as S,B as $,v as Qp,L as Zs}from"../../chunks/vendor-hf-doc-builder.js";import{T as to}from"../../chunks/Tip-hf-doc-builder.js";import{D as I}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ln}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Qs}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Zp(C){let h,b,_,m,v;return m=new ln({props:{code:`from transformers import Speech2TextModel, Speech2TextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=r("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=a(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,b),f(d,_,g),y(m,d,g),v=!0},p:Zs,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function eh(C){let h,b,_,m,v,d,g,E;return{c(){h=r("p"),b=n(`This class method is simply calling the feature extractor
`),_=r("a"),m=n("from_pretrained()"),v=n(` and the tokenizer
`),d=r("code"),g=n("from_pretrained"),E=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(A){h=a(A,"P",{});var F=i(h);b=s(F,`This class method is simply calling the feature extractor
`),_=a(F,"A",{href:!0});var q=i(_);m=s(q,"from_pretrained()"),q.forEach(t),v=s(F,` and the tokenizer
`),d=a(F,"CODE",{});var L=i(d);g=s(L,"from_pretrained"),L.forEach(t),E=s(F,` methods. Please refer to the docstrings of the
methods above for more information.`),F.forEach(t),this.h()},h(){c(_,"href","/docs/transformers/v4.21.2/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(A,F){f(A,h,F),e(h,b),e(h,_),e(_,m),e(h,v),e(h,d),e(d,g),e(h,E)},d(A){A&&t(h)}}}function th(C){let h,b,_,m,v,d,g,E;return{c(){h=r("p"),b=n("This class method is simply calling "),_=r("a"),m=n("save_pretrained()"),v=n(` and
`),d=r("code"),g=n("save_pretrained"),E=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(A){h=a(A,"P",{});var F=i(h);b=s(F,"This class method is simply calling "),_=a(F,"A",{href:!0});var q=i(_);m=s(q,"save_pretrained()"),q.forEach(t),v=s(F,` and
`),d=a(F,"CODE",{});var L=i(d);g=s(L,"save_pretrained"),L.forEach(t),E=s(F,`. Please refer to the docstrings of the methods
above for more information.`),F.forEach(t),this.h()},h(){c(_,"href","/docs/transformers/v4.21.2/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(A,F){f(A,h,F),e(h,b),e(h,_),e(_,m),e(h,v),e(h,d),e(d,g),e(h,E)},d(A){A&&t(h)}}}function oh(C){let h,b,_,m,v;return{c(){h=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=a(d,"P",{});var g=i(h);b=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){f(d,h,g),e(h,b),e(h,_),e(_,m),e(h,v)},d(d){d&&t(h)}}}function nh(C){let h,b,_,m,v;return m=new ln({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">256</span>]`}}),{c(){h=r("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=a(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,b),f(d,_,g),y(m,d,g),v=!0},p:Zs,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function sh(C){let h,b,_,m,v;return{c(){h=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=a(d,"P",{});var g=i(h);b=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){f(d,h,g),e(h,b),e(h,_),e(_,m),e(h,v)},d(d){d&&t(h)}}}function rh(C){let h,b,_,m,v;return m=new ln({props:{code:`import torch
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
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),{c(){h=r("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=a(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,b),f(d,_,g),y(m,d,g),v=!0},p:Zs,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function ah(C){let h,b,_,m,v,d,g,E,A,F,q,L,H,ee,Ce,B,Pe,ye,N,K,te,Te,j,M,je,oe,ne,Me,se,re,Ne,G,we,O,Ae,ae,ie,De,de,J,Ie,Z,Y;return{c(){h=r("p"),b=n("TF 2.0 models accepts two formats as inputs:"),_=l(),m=r("ul"),v=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),E=r("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),F=l(),q=r("p"),L=n("This second option is useful when using "),H=r("code"),ee=n("tf.keras.Model.fit"),Ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r("code"),Pe=n("model(inputs)"),ye=n("."),N=l(),K=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te=l(),j=r("ul"),M=r("li"),je=n("a single Tensor with "),oe=r("code"),ne=n("input_ids"),Me=n(" only and nothing else: "),se=r("code"),re=n("model(input_ids)"),Ne=l(),G=r("li"),we=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r("code"),Ae=n("model([input_ids, attention_mask])"),ae=n(" or "),ie=r("code"),De=n("model([input_ids, attention_mask, token_type_ids])"),de=l(),J=r("li"),Ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){h=a(T,"P",{});var z=i(h);b=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),_=p(T),m=a(T,"UL",{});var X=i(m);v=a(X,"LI",{});var Ze=i(v);d=s(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),g=p(X),E=a(X,"LI",{});var Le=i(E);A=s(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),X.forEach(t),F=p(T),q=a(T,"P",{});var Q=i(q);L=s(Q,"This second option is useful when using "),H=a(Q,"CODE",{});var Ve=i(H);ee=s(Ve,"tf.keras.Model.fit"),Ve.forEach(t),Ce=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a(Q,"CODE",{});var ue=i(B);Pe=s(ue,"model(inputs)"),ue.forEach(t),ye=s(Q,"."),Q.forEach(t),N=p(T),K=a(T,"P",{});var et=i(K);te=s(et,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),et.forEach(t),Te=p(T),j=a(T,"UL",{});var U=i(j);M=a(U,"LI",{});var ce=i(M);je=s(ce,"a single Tensor with "),oe=a(ce,"CODE",{});var tt=i(oe);ne=s(tt,"input_ids"),tt.forEach(t),Me=s(ce," only and nothing else: "),se=a(ce,"CODE",{});var Re=i(se);re=s(Re,"model(input_ids)"),Re.forEach(t),ce.forEach(t),Ne=p(U),G=a(U,"LI",{});var P=i(G);we=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a(P,"CODE",{});var ot=i(O);Ae=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),ae=s(P," or "),ie=a(P,"CODE",{});var Se=i(ie);De=s(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),P.forEach(t),de=p(U),J=a(U,"LI",{});var Oe=i(J);Ie=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(Oe,"CODE",{});var nt=i(Z);Y=s(nt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),nt.forEach(t),Oe.forEach(t),U.forEach(t)},m(T,z){f(T,h,z),e(h,b),f(T,_,z),f(T,m,z),e(m,v),e(v,d),e(m,g),e(m,E),e(E,A),f(T,F,z),f(T,q,z),e(q,L),e(q,H),e(H,ee),e(q,Ce),e(q,B),e(B,Pe),e(q,ye),f(T,N,z),f(T,K,z),e(K,te),f(T,Te,z),f(T,j,z),e(j,M),e(M,je),e(M,oe),e(oe,ne),e(M,Me),e(M,se),e(se,re),e(j,Ne),e(j,G),e(G,we),e(G,O),e(O,Ae),e(G,ae),e(G,ie),e(ie,De),e(j,de),e(j,J),e(J,Ie),e(J,Z),e(Z,Y)},d(T){T&&t(h),T&&t(_),T&&t(m),T&&t(F),T&&t(q),T&&t(N),T&&t(K),T&&t(Te),T&&t(j)}}}function ih(C){let h,b,_,m,v;return{c(){h=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=a(d,"P",{});var g=i(h);b=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){f(d,h,g),e(h,b),e(h,_),e(_,m),e(h,v)},d(d){d&&t(h)}}}function dh(C){let h,b,_,m,v;return m=new ln({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=r("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=a(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,b),f(d,_,g),y(m,d,g),v=!0},p:Zs,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function ch(C){let h,b,_,m,v,d,g,E,A,F,q,L,H,ee,Ce,B,Pe,ye,N,K,te,Te,j,M,je,oe,ne,Me,se,re,Ne,G,we,O,Ae,ae,ie,De,de,J,Ie,Z,Y;return{c(){h=r("p"),b=n("TF 2.0 models accepts two formats as inputs:"),_=l(),m=r("ul"),v=r("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),E=r("li"),A=n("having all inputs as a list, tuple or dict in the first positional arguments."),F=l(),q=r("p"),L=n("This second option is useful when using "),H=r("code"),ee=n("tf.keras.Model.fit"),Ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r("code"),Pe=n("model(inputs)"),ye=n("."),N=l(),K=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te=l(),j=r("ul"),M=r("li"),je=n("a single Tensor with "),oe=r("code"),ne=n("input_ids"),Me=n(" only and nothing else: "),se=r("code"),re=n("model(input_ids)"),Ne=l(),G=r("li"),we=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r("code"),Ae=n("model([input_ids, attention_mask])"),ae=n(" or "),ie=r("code"),De=n("model([input_ids, attention_mask, token_type_ids])"),de=l(),J=r("li"),Ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(T){h=a(T,"P",{});var z=i(h);b=s(z,"TF 2.0 models accepts two formats as inputs:"),z.forEach(t),_=p(T),m=a(T,"UL",{});var X=i(m);v=a(X,"LI",{});var Ze=i(v);d=s(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),g=p(X),E=a(X,"LI",{});var Le=i(E);A=s(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),X.forEach(t),F=p(T),q=a(T,"P",{});var Q=i(q);L=s(Q,"This second option is useful when using "),H=a(Q,"CODE",{});var Ve=i(H);ee=s(Ve,"tf.keras.Model.fit"),Ve.forEach(t),Ce=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a(Q,"CODE",{});var ue=i(B);Pe=s(ue,"model(inputs)"),ue.forEach(t),ye=s(Q,"."),Q.forEach(t),N=p(T),K=a(T,"P",{});var et=i(K);te=s(et,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),et.forEach(t),Te=p(T),j=a(T,"UL",{});var U=i(j);M=a(U,"LI",{});var ce=i(M);je=s(ce,"a single Tensor with "),oe=a(ce,"CODE",{});var tt=i(oe);ne=s(tt,"input_ids"),tt.forEach(t),Me=s(ce," only and nothing else: "),se=a(ce,"CODE",{});var Re=i(se);re=s(Re,"model(input_ids)"),Re.forEach(t),ce.forEach(t),Ne=p(U),G=a(U,"LI",{});var P=i(G);we=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a(P,"CODE",{});var ot=i(O);Ae=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),ae=s(P," or "),ie=a(P,"CODE",{});var Se=i(ie);De=s(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),P.forEach(t),de=p(U),J=a(U,"LI",{});var Oe=i(J);Ie=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a(Oe,"CODE",{});var nt=i(Z);Y=s(nt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),nt.forEach(t),Oe.forEach(t),U.forEach(t)},m(T,z){f(T,h,z),e(h,b),f(T,_,z),f(T,m,z),e(m,v),e(v,d),e(m,g),e(m,E),e(E,A),f(T,F,z),f(T,q,z),e(q,L),e(q,H),e(H,ee),e(q,Ce),e(q,B),e(B,Pe),e(q,ye),f(T,N,z),f(T,K,z),e(K,te),f(T,Te,z),f(T,j,z),e(j,M),e(M,je),e(M,oe),e(oe,ne),e(M,Me),e(M,se),e(se,re),e(j,Ne),e(j,G),e(G,we),e(G,O),e(O,Ae),e(G,ae),e(G,ie),e(ie,De),e(j,de),e(j,J),e(J,Ie),e(J,Z),e(Z,Y)},d(T){T&&t(h),T&&t(_),T&&t(m),T&&t(F),T&&t(q),T&&t(N),T&&t(K),T&&t(Te),T&&t(j)}}}function lh(C){let h,b,_,m,v;return{c(){h=r("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=a(d,"P",{});var g=i(h);b=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){f(d,h,g),e(h,b),e(h,_),e(_,m),e(h,v)},d(d){d&&t(h)}}}function ph(C){let h,b,_,m,v;return m=new ln({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){h=r("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=a(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){f(d,h,g),e(h,b),f(d,_,g),y(m,d,g),v=!0},p:Zs,i(d){v||(w(m.$$.fragment,d),v=!0)},o(d){S(m.$$.fragment,d),v=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function hh(C){let h,b,_,m,v,d,g,E,A,F,q,L,H,ee,Ce,B,Pe,ye,N,K,te,Te,j,M,je,oe,ne,Me,se,re,Ne,G,we,O,Ae,ae,ie,De,de,J,Ie,Z,Y,T,z,X,Ze,Le,Q,Ve,ue,et,U,ce,tt,Re,P,ot,Se,Oe,nt,pn,oa,na,hn,sa,ra,mn,aa,ia,er,W,da,Yn,ca,la,Xn,pa,ha,Qn,ma,fa,Zn,ua,_a,es,ga,Ta,oo,va,ba,ts,xa,tr,fn,os,ka,or,no,nr,un,so,ns,ya,wa,le,Sa,ss,$a,Ea,rs,qa,Fa,as,za,Ca,is,Pa,ja,ds,Ma,Na,sr,ro,rr,Tt,Aa,ao,Da,Ia,ar,st,vt,cs,io,La,ls,Oa,ir,ve,co,Ga,rt,Ua,_n,Wa,Va,lo,Ra,Ha,Ba,at,Ka,gn,Ja,Ya,Tn,Xa,Qa,Za,bt,dr,it,xt,ps,po,ei,hs,ti,cr,V,ho,oi,ms,ni,si,mo,ri,vn,ai,ii,di,kt,fo,ci,fs,li,pi,yt,uo,hi,_o,mi,us,fi,ui,_i,He,go,gi,bn,Ti,xn,vi,bi,_s,xi,ki,kn,To,lr,dt,wt,gs,vo,yi,Ts,wi,pr,pe,bo,Si,vs,$i,Ei,xo,qi,yn,Fi,zi,Ci,bs,Pi,ji,St,ko,Mi,xs,Ni,hr,ct,$t,ks,yo,Ai,ys,Di,mr,D,wo,Ii,ws,Li,Oi,_e,wn,Gi,Ui,Sn,Wi,Vi,$n,Ri,Hi,So,Ss,Bi,Ki,Ji,En,Yi,Xi,Qi,Et,$o,Zi,Ge,ed,Eo,$s,td,od,nd,qn,sd,rd,qo,Es,ad,id,dd,cd,Be,Fo,ld,qs,pd,hd,qt,md,Ke,zo,fd,Co,ud,Fn,_d,gd,Td,Ft,vd,zt,Po,bd,jo,xd,zn,kd,yd,wd,Ct,Mo,Sd,No,$d,Cn,Ed,qd,Fd,Pt,Ao,zd,Fs,Cd,fr,lt,jt,zs,Do,Pd,Cs,jd,ur,be,Io,Md,Lo,Nd,Pn,Ad,Dd,Id,Oo,Ld,Go,Od,Gd,Ud,$e,Uo,Wd,pt,Vd,jn,Rd,Hd,Ps,Bd,Kd,Jd,Mt,Yd,Nt,_r,ht,At,js,Wo,Xd,Ms,Qd,gr,xe,Vo,Zd,Ro,ec,Mn,tc,oc,nc,Ho,sc,Bo,rc,ac,ic,Ee,Ko,dc,mt,cc,Nn,lc,pc,Ns,hc,mc,fc,Dt,uc,It,Tr,ft,Lt,As,Jo,_c,Ds,gc,vr,he,Yo,Tc,Xo,vc,An,bc,xc,kc,Qo,yc,Zo,wc,Sc,$c,Ot,Ec,qe,en,qc,ut,Fc,Dn,zc,Cc,Is,Pc,jc,Mc,Gt,Nc,Ut,br,_t,Wt,Ls,tn,Ac,Os,Dc,xr,me,on,Ic,nn,Lc,In,Oc,Gc,Uc,sn,Wc,rn,Vc,Rc,Hc,Vt,Bc,Fe,an,Kc,gt,Jc,Ln,Yc,Xc,Gs,Qc,Zc,el,Rt,tl,Ht,kr;return d=new We({}),ee=new We({}),X=new We({}),no=new ln({props:{code:`import torch
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
[<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>]`}}),ro=new ln({props:{code:`import torch
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
[<span class="hljs-string">&quot;&lt;lang:fr&gt; (Vid\xE9o) Si M. Kilder est l&#x27;apossible des classes moyennes, et nous sommes heureux d&#x27;\xEAtre accueillis dans son \xE9vangile.&quot;</span>]`}}),io=new We({}),co=new I({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
An integer specifying number of input channels of the input feature vector.`,name:"input_channels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L31"}}),bt=new Qs({props:{anchor:"transformers.Speech2TextConfig.example",$$slots:{default:[Zp]},$$scope:{ctx:C}}}),po=new We({}),ho=new I({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional keyword arguments passed along to <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L59"}}),fo=new I({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L199"}}),uo=new I({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L206",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),go=new I({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/tokenization_utils_base.py#L2918",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),To=new I({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L255"}}),vo=new We({}),bo=new I({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L33"}}),ko=new I({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.21.2/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.21.2/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L126"}}),yo=new We({}),wo=new I({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/processing_speech_to_text.py#L23"}}),$o=new I({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/processing_speech_to_text.py#L45"}}),Fo=new I({props:{name:"from_pretrained",anchor:"transformers.Speech2TextProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.21.2/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/v4.21.2/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/processing_utils.py#L156"}}),qt=new to({props:{$$slots:{default:[eh]},$$scope:{ctx:C}}}),zo=new I({props:{name:"save_pretrained",anchor:"transformers.Speech2TextProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2TextProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/processing_utils.py#L94"}}),Ft=new to({props:{$$slots:{default:[th]},$$scope:{ctx:C}}}),Po=new I({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/processing_speech_to_text.py#L55"}}),Mo=new I({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/processing_speech_to_text.py#L62"}}),Ao=new I({props:{name:"as_target_processor",anchor:"transformers.Speech2TextProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/processing_speech_to_text.py#L69"}}),Do=new We({}),Io=new I({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1121"}}),Uo=new I({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. decoder_inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, target_sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>decoder_input_ids<code>you can choose to directly pass an embedded representation. If</code>past_key_values<code>is used, optionally only the last</code>decoder_inputs_embeds<code>have to be input (see</code>past_key_values<code>). This is useful if you want more control over how to convert </code>decoder_input_ids\` indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1143",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mt=new to({props:{$$slots:{default:[oh]},$$scope:{ctx:C}}}),Nt=new Qs({props:{anchor:"transformers.Speech2TextModel.forward.example",$$slots:{default:[nh]},$$scope:{ctx:C}}}),Wo=new We({}),Vo=new I({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1252"}}),Ko=new I({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
\`<code>decoder_input_ids\`\`\` of shape </code>(batch_size, sequence_length)<code>. decoder_inputs_embeds (</code>torch.FloatTensor<code>of shape</code>(batch_size, target_sequence_length, hidden_size)<code>, *optional*): Optionally, instead of passing </code>decoder_input_ids<code>you can choose to directly pass an embedded representation. If</code>past_key_values<code>is used, optionally only the last</code>decoder_inputs_embeds<code>have to be input (see</code>past_key_values<code>). This is useful if you want more control over how to convert </code>decoder_input_ids\` indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1289",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dt=new to({props:{$$slots:{default:[sh]},$$scope:{ctx:C}}}),It=new Qs({props:{anchor:"transformers.Speech2TextForConditionalGeneration.forward.example",$$slots:{default:[rh]},$$scope:{ctx:C}}}),Jo=new We({}),Yo=new I({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1235"}}),Ot=new to({props:{$$slots:{default:[ah]},$$scope:{ctx:C}}}),en=new I({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of floats. See <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1247",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gt=new to({props:{$$slots:{default:[ih]},$$scope:{ctx:C}}}),Ut=new Qs({props:{anchor:"transformers.TFSpeech2TextModel.call.example",$$slots:{default:[dh]},$$scope:{ctx:C}}}),tn=new We({}),on=new I({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1318"}}),Vt=new to({props:{$$slots:{default:[ch]},$$scope:{ctx:C}}}),an=new I({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a> should be used for extracting the fbank features, padding and conversion
into a tensor of floats. See <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.2/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1342",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/v4.21.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rt=new to({props:{$$slots:{default:[lh]},$$scope:{ctx:C}}}),Ht=new Qs({props:{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.example",$$slots:{default:[ph]},$$scope:{ctx:C}}}),{c(){h=r("meta"),b=l(),_=r("h1"),m=r("a"),v=r("span"),x(d.$$.fragment),g=l(),E=r("span"),A=n("Speech2Text"),F=l(),q=r("h2"),L=r("a"),H=r("span"),x(ee.$$.fragment),Ce=l(),B=r("span"),Pe=n("Overview"),ye=l(),N=r("p"),K=n("The Speech2Text model was proposed in "),te=r("a"),Te=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),j=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),M=r("a"),je=n("LibriSpeech"),oe=n(", "),ne=r("a"),Me=n("CoVoST 2"),se=n(", "),re=r("a"),Ne=n("MuST-C"),G=n("."),we=l(),O=r("p"),Ae=n("This model was contributed by "),ae=r("a"),ie=n("valhalla"),De=n(". The original code can be found "),de=r("a"),J=n("here"),Ie=n("."),Z=l(),Y=r("h2"),T=r("a"),z=r("span"),x(X.$$.fragment),Ze=l(),Le=r("span"),Q=n("Inference"),Ve=l(),ue=r("p"),et=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),U=r("code"),ce=n("generate()"),tt=n(" method can be used for inference."),Re=l(),P=r("p"),ot=n("The "),Se=r("a"),Oe=n("Speech2TextFeatureExtractor"),nt=n(` class is responsible for extracting the log-mel filter-bank
features. The `),pn=r("a"),oa=n("Speech2TextProcessor"),na=n(" wraps "),hn=r("a"),sa=n("Speech2TextFeatureExtractor"),ra=n(` and
`),mn=r("a"),aa=n("Speech2TextTokenizer"),ia=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),er=l(),W=r("p"),da=n("The feature extractor depends on "),Yn=r("code"),ca=n("torchaudio"),la=n(" and the tokenizer depends on "),Xn=r("code"),pa=n("sentencepiece"),ha=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=r("code"),ma=n('pip install transformers"[speech, sentencepiece]"'),fa=n(" or install the packages separately with "),Zn=r("code"),ua=n("pip install torchaudio sentencepiece"),_a=n(". Also "),es=r("code"),ga=n("torchaudio"),Ta=n(" requires the development version of the "),oo=r("a"),va=n("libsndfile"),ba=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=r("code"),xa=n("apt install libsndfile1-dev"),tr=l(),fn=r("ul"),os=r("li"),ka=n("ASR and Speech Translation"),or=l(),x(no.$$.fragment),nr=l(),un=r("ul"),so=r("li"),ns=r("p"),ya=n("Multilingual speech translation"),wa=l(),le=r("p"),Sa=n("For multilingual speech translation models, "),ss=r("code"),$a=n("eos_token_id"),Ea=n(" is used as the "),rs=r("code"),qa=n("decoder_start_token_id"),Fa=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),as=r("code"),za=n("forced_bos_token_id"),Ca=n(" parameter to the "),is=r("code"),Pa=n("generate()"),ja=n(` method. The following
example shows how to transate English speech to French text using the `),ds=r("em"),Ma=n("facebook/s2t-medium-mustc-multilingual-st"),Na=n(`
checkpoint.`),sr=l(),x(ro.$$.fragment),rr=l(),Tt=r("p"),Aa=n("See the "),ao=r("a"),Da=n("model hub"),Ia=n(" to look for Speech2Text checkpoints."),ar=l(),st=r("h2"),vt=r("a"),cs=r("span"),x(io.$$.fragment),La=l(),ls=r("span"),Oa=n("Speech2TextConfig"),ir=l(),ve=r("div"),x(co.$$.fragment),Ga=l(),rt=r("p"),Ua=n("This is the configuration class to store the configuration of a "),_n=r("a"),Wa=n("Speech2TextModel"),Va=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),lo=r("a"),Ra=n("facebook/s2t-small-librispeech-asr"),Ha=n(" architecture."),Ba=l(),at=r("p"),Ka=n("Configuration objects inherit from "),gn=r("a"),Ja=n("PretrainedConfig"),Ya=n(` and can be used to control the model outputs. Read the
documentation from `),Tn=r("a"),Xa=n("PretrainedConfig"),Qa=n(" for more information."),Za=l(),x(bt.$$.fragment),dr=l(),it=r("h2"),xt=r("a"),ps=r("span"),x(po.$$.fragment),ei=l(),hs=r("span"),ti=n("Speech2TextTokenizer"),cr=l(),V=r("div"),x(ho.$$.fragment),oi=l(),ms=r("p"),ni=n("Construct an Speech2Text tokenizer."),si=l(),mo=r("p"),ri=n("This tokenizer inherits from "),vn=r("a"),ai=n("PreTrainedTokenizer"),ii=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),di=l(),kt=r("div"),x(fo.$$.fragment),ci=l(),fs=r("p"),li=n("Build model inputs from a sequence by appending eos_token_id."),pi=l(),yt=r("div"),x(uo.$$.fragment),hi=l(),_o=r("p"),mi=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),us=r("code"),fi=n("prepare_for_model"),ui=n(" method."),_i=l(),He=r("div"),x(go.$$.fragment),gi=l(),bn=r("p"),Ti=n("Create the token type IDs corresponding to the sequences passed. "),xn=r("a"),vi=n(`What are token type
IDs?`),bi=l(),_s=r("p"),xi=n("Should be overridden in a subclass if the model has a special way of building those."),ki=l(),kn=r("div"),x(To.$$.fragment),lr=l(),dt=r("h2"),wt=r("a"),gs=r("span"),x(vo.$$.fragment),yi=l(),Ts=r("span"),wi=n("Speech2TextFeatureExtractor"),pr=l(),pe=r("div"),x(bo.$$.fragment),Si=l(),vs=r("p"),$i=n("Constructs a Speech2Text feature extractor."),Ei=l(),xo=r("p"),qi=n("This feature extractor inherits from "),yn=r("a"),Fi=n("Speech2TextFeatureExtractor"),zi=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ci=l(),bs=r("p"),Pi=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),ji=l(),St=r("div"),x(ko.$$.fragment),Mi=l(),xs=r("p"),Ni=n("Main method to featurize and prepare for the model one or several sequence(s). sequences."),hr=l(),ct=r("h2"),$t=r("a"),ks=r("span"),x(yo.$$.fragment),Ai=l(),ys=r("span"),Di=n("Speech2TextProcessor"),mr=l(),D=r("div"),x(wo.$$.fragment),Ii=l(),ws=r("p"),Li=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Oi=l(),_e=r("p"),wn=r("a"),Gi=n("Speech2TextProcessor"),Ui=n(" offers all the functionalities of "),Sn=r("a"),Wi=n("Speech2TextFeatureExtractor"),Vi=n(` and
`),$n=r("a"),Ri=n("Speech2TextTokenizer"),Hi=n(". See the "),So=r("a"),Ss=r("strong"),Bi=n("call"),Ki=n("()"),Ji=n(" and "),En=r("a"),Yi=n("decode()"),Xi=n(` for more
information.`),Qi=l(),Et=r("div"),x($o.$$.fragment),Zi=l(),Ge=r("p"),ed=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),Eo=r("a"),$s=r("strong"),td=n("call"),od=n("()"),nd=n(` and returns its output. If used in the context
`),qn=r("a"),sd=n("as_target_processor()"),rd=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),qo=r("a"),Es=r("strong"),ad=n("call"),id=n("()"),dd=n(`. Please refer to the doctsring of the above two methods for more
information.`),cd=l(),Be=r("div"),x(Fo.$$.fragment),ld=l(),qs=r("p"),pd=n("Instantiate a processor associated with a pretrained model."),hd=l(),x(qt.$$.fragment),md=l(),Ke=r("div"),x(zo.$$.fragment),fd=l(),Co=r("p"),ud=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Fn=r("a"),_d=n("from_pretrained()"),gd=n(" method."),Td=l(),x(Ft.$$.fragment),vd=l(),zt=r("div"),x(Po.$$.fragment),bd=l(),jo=r("p"),xd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),zn=r("a"),kd=n("batch_decode()"),yd=n(`. Please
refer to the docstring of this method for more information.`),wd=l(),Ct=r("div"),x(Mo.$$.fragment),Sd=l(),No=r("p"),$d=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Cn=r("a"),Ed=n("decode()"),qd=n(`. Please refer
to the docstring of this method for more information.`),Fd=l(),Pt=r("div"),x(Ao.$$.fragment),zd=l(),Fs=r("p"),Cd=n(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),fr=l(),lt=r("h2"),jt=r("a"),zs=r("span"),x(Do.$$.fragment),Pd=l(),Cs=r("span"),jd=n("Speech2TextModel"),ur=l(),be=r("div"),x(Io.$$.fragment),Md=l(),Lo=r("p"),Nd=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=r("a"),Ad=n("PreTrainedModel"),Dd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id=l(),Oo=r("p"),Ld=n("This model is also a PyTorch "),Go=r("a"),Od=n("torch.nn.Module"),Gd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ud=l(),$e=r("div"),x(Uo.$$.fragment),Wd=l(),pt=r("p"),Vd=n("The "),jn=r("a"),Rd=n("Speech2TextModel"),Hd=n(" forward method, overrides the "),Ps=r("code"),Bd=n("__call__"),Kd=n(" special method."),Jd=l(),x(Mt.$$.fragment),Yd=l(),x(Nt.$$.fragment),_r=l(),ht=r("h2"),At=r("a"),js=r("span"),x(Wo.$$.fragment),Xd=l(),Ms=r("span"),Qd=n("Speech2TextForConditionalGeneration"),gr=l(),xe=r("div"),x(Vo.$$.fragment),Zd=l(),Ro=r("p"),ec=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=r("a"),tc=n("PreTrainedModel"),oc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nc=l(),Ho=r("p"),sc=n("This model is also a PyTorch "),Bo=r("a"),rc=n("torch.nn.Module"),ac=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ic=l(),Ee=r("div"),x(Ko.$$.fragment),dc=l(),mt=r("p"),cc=n("The "),Nn=r("a"),lc=n("Speech2TextForConditionalGeneration"),pc=n(" forward method, overrides the "),Ns=r("code"),hc=n("__call__"),mc=n(" special method."),fc=l(),x(Dt.$$.fragment),uc=l(),x(It.$$.fragment),Tr=l(),ft=r("h2"),Lt=r("a"),As=r("span"),x(Jo.$$.fragment),_c=l(),Ds=r("span"),gc=n("TFSpeech2TextModel"),vr=l(),he=r("div"),x(Yo.$$.fragment),Tc=l(),Xo=r("p"),vc=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),An=r("a"),bc=n("TFPreTrainedModel"),xc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kc=l(),Qo=r("p"),yc=n("This model is also a "),Zo=r("a"),wc=n("tf.keras.Model"),Sc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$c=l(),x(Ot.$$.fragment),Ec=l(),qe=r("div"),x(en.$$.fragment),qc=l(),ut=r("p"),Fc=n("The "),Dn=r("a"),zc=n("TFSpeech2TextModel"),Cc=n(" forward method, overrides the "),Is=r("code"),Pc=n("__call__"),jc=n(" special method."),Mc=l(),x(Gt.$$.fragment),Nc=l(),x(Ut.$$.fragment),br=l(),_t=r("h2"),Wt=r("a"),Ls=r("span"),x(tn.$$.fragment),Ac=l(),Os=r("span"),Dc=n("TFSpeech2TextForConditionalGeneration"),xr=l(),me=r("div"),x(on.$$.fragment),Ic=l(),nn=r("p"),Lc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=r("a"),Oc=n("TFPreTrainedModel"),Gc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc=l(),sn=r("p"),Wc=n("This model is also a "),rn=r("a"),Vc=n("tf.keras.Model"),Rc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hc=l(),x(Vt.$$.fragment),Bc=l(),Fe=r("div"),x(an.$$.fragment),Kc=l(),gt=r("p"),Jc=n("The "),Ln=r("a"),Yc=n("TFSpeech2TextForConditionalGeneration"),Xc=n(" forward method, overrides the "),Gs=r("code"),Qc=n("__call__"),Zc=n(" special method."),el=l(),x(Rt.$$.fragment),tl=l(),x(Ht.$$.fragment),this.h()},l(o){const u=Xp('[data-svelte="svelte-1phssyn"]',document.head);h=a(u,"META",{name:!0,content:!0}),u.forEach(t),b=p(o),_=a(o,"H1",{class:!0});var dn=i(_);m=a(dn,"A",{id:!0,class:!0,href:!0});var Us=i(m);v=a(Us,"SPAN",{});var Ws=i(v);k(d.$$.fragment,Ws),Ws.forEach(t),Us.forEach(t),g=p(dn),E=a(dn,"SPAN",{});var Vs=i(E);A=s(Vs,"Speech2Text"),Vs.forEach(t),dn.forEach(t),F=p(o),q=a(o,"H2",{class:!0});var cn=i(q);L=a(cn,"A",{id:!0,class:!0,href:!0});var Rs=i(L);H=a(Rs,"SPAN",{});var Hs=i(H);k(ee.$$.fragment,Hs),Hs.forEach(t),Rs.forEach(t),Ce=p(cn),B=a(cn,"SPAN",{});var Bs=i(B);Pe=s(Bs,"Overview"),Bs.forEach(t),cn.forEach(t),ye=p(o),N=a(o,"P",{});var ke=i(N);K=s(ke,"The Speech2Text model was proposed in "),te=a(ke,"A",{href:!0,rel:!0});var Ks=i(te);Te=s(Ks,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),Ks.forEach(t),j=s(ke,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),M=a(ke,"A",{href:!0,rel:!0});var Js=i(M);je=s(Js,"LibriSpeech"),Js.forEach(t),oe=s(ke,", "),ne=a(ke,"A",{href:!0,rel:!0});var Ys=i(ne);Me=s(Ys,"CoVoST 2"),Ys.forEach(t),se=s(ke,", "),re=a(ke,"A",{href:!0,rel:!0});var Xs=i(re);Ne=s(Xs,"MuST-C"),Xs.forEach(t),G=s(ke,"."),ke.forEach(t),we=p(o),O=a(o,"P",{});var On=i(O);Ae=s(On,"This model was contributed by "),ae=a(On,"A",{href:!0,rel:!0});var al=i(ae);ie=s(al,"valhalla"),al.forEach(t),De=s(On,". The original code can be found "),de=a(On,"A",{href:!0,rel:!0});var il=i(de);J=s(il,"here"),il.forEach(t),Ie=s(On,"."),On.forEach(t),Z=p(o),Y=a(o,"H2",{class:!0});var yr=i(Y);T=a(yr,"A",{id:!0,class:!0,href:!0});var dl=i(T);z=a(dl,"SPAN",{});var cl=i(z);k(X.$$.fragment,cl),cl.forEach(t),dl.forEach(t),Ze=p(yr),Le=a(yr,"SPAN",{});var ll=i(Le);Q=s(ll,"Inference"),ll.forEach(t),yr.forEach(t),Ve=p(o),ue=a(o,"P",{});var wr=i(ue);et=s(wr,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),U=a(wr,"CODE",{});var pl=i(U);ce=s(pl,"generate()"),pl.forEach(t),tt=s(wr," method can be used for inference."),wr.forEach(t),Re=p(o),P=a(o,"P",{});var Je=i(P);ot=s(Je,"The "),Se=a(Je,"A",{href:!0});var hl=i(Se);Oe=s(hl,"Speech2TextFeatureExtractor"),hl.forEach(t),nt=s(Je,` class is responsible for extracting the log-mel filter-bank
features. The `),pn=a(Je,"A",{href:!0});var ml=i(pn);oa=s(ml,"Speech2TextProcessor"),ml.forEach(t),na=s(Je," wraps "),hn=a(Je,"A",{href:!0});var fl=i(hn);sa=s(fl,"Speech2TextFeatureExtractor"),fl.forEach(t),ra=s(Je,` and
`),mn=a(Je,"A",{href:!0});var ul=i(mn);aa=s(ul,"Speech2TextTokenizer"),ul.forEach(t),ia=s(Je,` into a single instance to both extract the input features and decode the
predicted token ids.`),Je.forEach(t),er=p(o),W=a(o,"P",{});var fe=i(W);da=s(fe,"The feature extractor depends on "),Yn=a(fe,"CODE",{});var _l=i(Yn);ca=s(_l,"torchaudio"),_l.forEach(t),la=s(fe," and the tokenizer depends on "),Xn=a(fe,"CODE",{});var gl=i(Xn);pa=s(gl,"sentencepiece"),gl.forEach(t),ha=s(fe,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=a(fe,"CODE",{});var Tl=i(Qn);ma=s(Tl,'pip install transformers"[speech, sentencepiece]"'),Tl.forEach(t),fa=s(fe," or install the packages separately with "),Zn=a(fe,"CODE",{});var vl=i(Zn);ua=s(vl,"pip install torchaudio sentencepiece"),vl.forEach(t),_a=s(fe,". Also "),es=a(fe,"CODE",{});var bl=i(es);ga=s(bl,"torchaudio"),bl.forEach(t),Ta=s(fe," requires the development version of the "),oo=a(fe,"A",{href:!0,rel:!0});var xl=i(oo);va=s(xl,"libsndfile"),xl.forEach(t),ba=s(fe,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=a(fe,"CODE",{});var kl=i(ts);xa=s(kl,"apt install libsndfile1-dev"),kl.forEach(t),fe.forEach(t),tr=p(o),fn=a(o,"UL",{});var yl=i(fn);os=a(yl,"LI",{});var wl=i(os);ka=s(wl,"ASR and Speech Translation"),wl.forEach(t),yl.forEach(t),or=p(o),k(no.$$.fragment,o),nr=p(o),un=a(o,"UL",{});var Sl=i(un);so=a(Sl,"LI",{});var Sr=i(so);ns=a(Sr,"P",{});var $l=i(ns);ya=s($l,"Multilingual speech translation"),$l.forEach(t),wa=p(Sr),le=a(Sr,"P",{});var ze=i(le);Sa=s(ze,"For multilingual speech translation models, "),ss=a(ze,"CODE",{});var El=i(ss);$a=s(El,"eos_token_id"),El.forEach(t),Ea=s(ze," is used as the "),rs=a(ze,"CODE",{});var ql=i(rs);qa=s(ql,"decoder_start_token_id"),ql.forEach(t),Fa=s(ze,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),as=a(ze,"CODE",{});var Fl=i(as);za=s(Fl,"forced_bos_token_id"),Fl.forEach(t),Ca=s(ze," parameter to the "),is=a(ze,"CODE",{});var zl=i(is);Pa=s(zl,"generate()"),zl.forEach(t),ja=s(ze,` method. The following
example shows how to transate English speech to French text using the `),ds=a(ze,"EM",{});var Cl=i(ds);Ma=s(Cl,"facebook/s2t-medium-mustc-multilingual-st"),Cl.forEach(t),Na=s(ze,`
checkpoint.`),ze.forEach(t),Sr.forEach(t),Sl.forEach(t),sr=p(o),k(ro.$$.fragment,o),rr=p(o),Tt=a(o,"P",{});var $r=i(Tt);Aa=s($r,"See the "),ao=a($r,"A",{href:!0,rel:!0});var Pl=i(ao);Da=s(Pl,"model hub"),Pl.forEach(t),Ia=s($r," to look for Speech2Text checkpoints."),$r.forEach(t),ar=p(o),st=a(o,"H2",{class:!0});var Er=i(st);vt=a(Er,"A",{id:!0,class:!0,href:!0});var jl=i(vt);cs=a(jl,"SPAN",{});var Ml=i(cs);k(io.$$.fragment,Ml),Ml.forEach(t),jl.forEach(t),La=p(Er),ls=a(Er,"SPAN",{});var Nl=i(ls);Oa=s(Nl,"Speech2TextConfig"),Nl.forEach(t),Er.forEach(t),ir=p(o),ve=a(o,"DIV",{class:!0});var Bt=i(ve);k(co.$$.fragment,Bt),Ga=p(Bt),rt=a(Bt,"P",{});var Gn=i(rt);Ua=s(Gn,"This is the configuration class to store the configuration of a "),_n=a(Gn,"A",{href:!0});var Al=i(_n);Wa=s(Al,"Speech2TextModel"),Al.forEach(t),Va=s(Gn,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),lo=a(Gn,"A",{href:!0,rel:!0});var Dl=i(lo);Ra=s(Dl,"facebook/s2t-small-librispeech-asr"),Dl.forEach(t),Ha=s(Gn," architecture."),Gn.forEach(t),Ba=p(Bt),at=a(Bt,"P",{});var Un=i(at);Ka=s(Un,"Configuration objects inherit from "),gn=a(Un,"A",{href:!0});var Il=i(gn);Ja=s(Il,"PretrainedConfig"),Il.forEach(t),Ya=s(Un,` and can be used to control the model outputs. Read the
documentation from `),Tn=a(Un,"A",{href:!0});var Ll=i(Tn);Xa=s(Ll,"PretrainedConfig"),Ll.forEach(t),Qa=s(Un," for more information."),Un.forEach(t),Za=p(Bt),k(bt.$$.fragment,Bt),Bt.forEach(t),dr=p(o),it=a(o,"H2",{class:!0});var qr=i(it);xt=a(qr,"A",{id:!0,class:!0,href:!0});var Ol=i(xt);ps=a(Ol,"SPAN",{});var Gl=i(ps);k(po.$$.fragment,Gl),Gl.forEach(t),Ol.forEach(t),ei=p(qr),hs=a(qr,"SPAN",{});var Ul=i(hs);ti=s(Ul,"Speech2TextTokenizer"),Ul.forEach(t),qr.forEach(t),cr=p(o),V=a(o,"DIV",{class:!0});var ge=i(V);k(ho.$$.fragment,ge),oi=p(ge),ms=a(ge,"P",{});var Wl=i(ms);ni=s(Wl,"Construct an Speech2Text tokenizer."),Wl.forEach(t),si=p(ge),mo=a(ge,"P",{});var Fr=i(mo);ri=s(Fr,"This tokenizer inherits from "),vn=a(Fr,"A",{href:!0});var Vl=i(vn);ai=s(Vl,"PreTrainedTokenizer"),Vl.forEach(t),ii=s(Fr,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Fr.forEach(t),di=p(ge),kt=a(ge,"DIV",{class:!0});var zr=i(kt);k(fo.$$.fragment,zr),ci=p(zr),fs=a(zr,"P",{});var Rl=i(fs);li=s(Rl,"Build model inputs from a sequence by appending eos_token_id."),Rl.forEach(t),zr.forEach(t),pi=p(ge),yt=a(ge,"DIV",{class:!0});var Cr=i(yt);k(uo.$$.fragment,Cr),hi=p(Cr),_o=a(Cr,"P",{});var Pr=i(_o);mi=s(Pr,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),us=a(Pr,"CODE",{});var Hl=i(us);fi=s(Hl,"prepare_for_model"),Hl.forEach(t),ui=s(Pr," method."),Pr.forEach(t),Cr.forEach(t),_i=p(ge),He=a(ge,"DIV",{class:!0});var Wn=i(He);k(go.$$.fragment,Wn),gi=p(Wn),bn=a(Wn,"P",{});var ol=i(bn);Ti=s(ol,"Create the token type IDs corresponding to the sequences passed. "),xn=a(ol,"A",{href:!0});var Bl=i(xn);vi=s(Bl,`What are token type
IDs?`),Bl.forEach(t),ol.forEach(t),bi=p(Wn),_s=a(Wn,"P",{});var Kl=i(_s);xi=s(Kl,"Should be overridden in a subclass if the model has a special way of building those."),Kl.forEach(t),Wn.forEach(t),ki=p(ge),kn=a(ge,"DIV",{class:!0});var Jl=i(kn);k(To.$$.fragment,Jl),Jl.forEach(t),ge.forEach(t),lr=p(o),dt=a(o,"H2",{class:!0});var jr=i(dt);wt=a(jr,"A",{id:!0,class:!0,href:!0});var Yl=i(wt);gs=a(Yl,"SPAN",{});var Xl=i(gs);k(vo.$$.fragment,Xl),Xl.forEach(t),Yl.forEach(t),yi=p(jr),Ts=a(jr,"SPAN",{});var Ql=i(Ts);wi=s(Ql,"Speech2TextFeatureExtractor"),Ql.forEach(t),jr.forEach(t),pr=p(o),pe=a(o,"DIV",{class:!0});var Ye=i(pe);k(bo.$$.fragment,Ye),Si=p(Ye),vs=a(Ye,"P",{});var Zl=i(vs);$i=s(Zl,"Constructs a Speech2Text feature extractor."),Zl.forEach(t),Ei=p(Ye),xo=a(Ye,"P",{});var Mr=i(xo);qi=s(Mr,"This feature extractor inherits from "),yn=a(Mr,"A",{href:!0});var ep=i(yn);Fi=s(ep,"Speech2TextFeatureExtractor"),ep.forEach(t),zi=s(Mr,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Mr.forEach(t),Ci=p(Ye),bs=a(Ye,"P",{});var tp=i(bs);Pi=s(tp,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),tp.forEach(t),ji=p(Ye),St=a(Ye,"DIV",{class:!0});var Nr=i(St);k(ko.$$.fragment,Nr),Mi=p(Nr),xs=a(Nr,"P",{});var op=i(xs);Ni=s(op,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),op.forEach(t),Nr.forEach(t),Ye.forEach(t),hr=p(o),ct=a(o,"H2",{class:!0});var Ar=i(ct);$t=a(Ar,"A",{id:!0,class:!0,href:!0});var np=i($t);ks=a(np,"SPAN",{});var sp=i(ks);k(yo.$$.fragment,sp),sp.forEach(t),np.forEach(t),Ai=p(Ar),ys=a(Ar,"SPAN",{});var rp=i(ys);Di=s(rp,"Speech2TextProcessor"),rp.forEach(t),Ar.forEach(t),mr=p(o),D=a(o,"DIV",{class:!0});var R=i(D);k(wo.$$.fragment,R),Ii=p(R),ws=a(R,"P",{});var ap=i(ws);Li=s(ap,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),ap.forEach(t),Oi=p(R),_e=a(R,"P",{});var Ue=i(_e);wn=a(Ue,"A",{href:!0});var ip=i(wn);Gi=s(ip,"Speech2TextProcessor"),ip.forEach(t),Ui=s(Ue," offers all the functionalities of "),Sn=a(Ue,"A",{href:!0});var dp=i(Sn);Wi=s(dp,"Speech2TextFeatureExtractor"),dp.forEach(t),Vi=s(Ue,` and
`),$n=a(Ue,"A",{href:!0});var cp=i($n);Ri=s(cp,"Speech2TextTokenizer"),cp.forEach(t),Hi=s(Ue,". See the "),So=a(Ue,"A",{href:!0});var nl=i(So);Ss=a(nl,"STRONG",{});var lp=i(Ss);Bi=s(lp,"call"),lp.forEach(t),Ki=s(nl,"()"),nl.forEach(t),Ji=s(Ue," and "),En=a(Ue,"A",{href:!0});var pp=i(En);Yi=s(pp,"decode()"),pp.forEach(t),Xi=s(Ue,` for more
information.`),Ue.forEach(t),Qi=p(R),Et=a(R,"DIV",{class:!0});var Dr=i(Et);k($o.$$.fragment,Dr),Zi=p(Dr),Ge=a(Dr,"P",{});var Kt=i(Ge);ed=s(Kt,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),Eo=a(Kt,"A",{href:!0});var sl=i(Eo);$s=a(sl,"STRONG",{});var hp=i($s);td=s(hp,"call"),hp.forEach(t),od=s(sl,"()"),sl.forEach(t),nd=s(Kt,` and returns its output. If used in the context
`),qn=a(Kt,"A",{href:!0});var mp=i(qn);sd=s(mp,"as_target_processor()"),mp.forEach(t),rd=s(Kt,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),qo=a(Kt,"A",{href:!0});var rl=i(qo);Es=a(rl,"STRONG",{});var fp=i(Es);ad=s(fp,"call"),fp.forEach(t),id=s(rl,"()"),rl.forEach(t),dd=s(Kt,`. Please refer to the doctsring of the above two methods for more
information.`),Kt.forEach(t),Dr.forEach(t),cd=p(R),Be=a(R,"DIV",{class:!0});var Vn=i(Be);k(Fo.$$.fragment,Vn),ld=p(Vn),qs=a(Vn,"P",{});var up=i(qs);pd=s(up,"Instantiate a processor associated with a pretrained model."),up.forEach(t),hd=p(Vn),k(qt.$$.fragment,Vn),Vn.forEach(t),md=p(R),Ke=a(R,"DIV",{class:!0});var Rn=i(Ke);k(zo.$$.fragment,Rn),fd=p(Rn),Co=a(Rn,"P",{});var Ir=i(Co);ud=s(Ir,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Fn=a(Ir,"A",{href:!0});var _p=i(Fn);_d=s(_p,"from_pretrained()"),_p.forEach(t),gd=s(Ir," method."),Ir.forEach(t),Td=p(Rn),k(Ft.$$.fragment,Rn),Rn.forEach(t),vd=p(R),zt=a(R,"DIV",{class:!0});var Lr=i(zt);k(Po.$$.fragment,Lr),bd=p(Lr),jo=a(Lr,"P",{});var Or=i(jo);xd=s(Or,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),zn=a(Or,"A",{href:!0});var gp=i(zn);kd=s(gp,"batch_decode()"),gp.forEach(t),yd=s(Or,`. Please
refer to the docstring of this method for more information.`),Or.forEach(t),Lr.forEach(t),wd=p(R),Ct=a(R,"DIV",{class:!0});var Gr=i(Ct);k(Mo.$$.fragment,Gr),Sd=p(Gr),No=a(Gr,"P",{});var Ur=i(No);$d=s(Ur,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Cn=a(Ur,"A",{href:!0});var Tp=i(Cn);Ed=s(Tp,"decode()"),Tp.forEach(t),qd=s(Ur,`. Please refer
to the docstring of this method for more information.`),Ur.forEach(t),Gr.forEach(t),Fd=p(R),Pt=a(R,"DIV",{class:!0});var Wr=i(Pt);k(Ao.$$.fragment,Wr),zd=p(Wr),Fs=a(Wr,"P",{});var vp=i(Fs);Cd=s(vp,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),vp.forEach(t),Wr.forEach(t),R.forEach(t),fr=p(o),lt=a(o,"H2",{class:!0});var Vr=i(lt);jt=a(Vr,"A",{id:!0,class:!0,href:!0});var bp=i(jt);zs=a(bp,"SPAN",{});var xp=i(zs);k(Do.$$.fragment,xp),xp.forEach(t),bp.forEach(t),Pd=p(Vr),Cs=a(Vr,"SPAN",{});var kp=i(Cs);jd=s(kp,"Speech2TextModel"),kp.forEach(t),Vr.forEach(t),ur=p(o),be=a(o,"DIV",{class:!0});var Jt=i(be);k(Io.$$.fragment,Jt),Md=p(Jt),Lo=a(Jt,"P",{});var Rr=i(Lo);Nd=s(Rr,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=a(Rr,"A",{href:!0});var yp=i(Pn);Ad=s(yp,"PreTrainedModel"),yp.forEach(t),Dd=s(Rr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rr.forEach(t),Id=p(Jt),Oo=a(Jt,"P",{});var Hr=i(Oo);Ld=s(Hr,"This model is also a PyTorch "),Go=a(Hr,"A",{href:!0,rel:!0});var wp=i(Go);Od=s(wp,"torch.nn.Module"),wp.forEach(t),Gd=s(Hr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hr.forEach(t),Ud=p(Jt),$e=a(Jt,"DIV",{class:!0});var Yt=i($e);k(Uo.$$.fragment,Yt),Wd=p(Yt),pt=a(Yt,"P",{});var Hn=i(pt);Vd=s(Hn,"The "),jn=a(Hn,"A",{href:!0});var Sp=i(jn);Rd=s(Sp,"Speech2TextModel"),Sp.forEach(t),Hd=s(Hn," forward method, overrides the "),Ps=a(Hn,"CODE",{});var $p=i(Ps);Bd=s($p,"__call__"),$p.forEach(t),Kd=s(Hn," special method."),Hn.forEach(t),Jd=p(Yt),k(Mt.$$.fragment,Yt),Yd=p(Yt),k(Nt.$$.fragment,Yt),Yt.forEach(t),Jt.forEach(t),_r=p(o),ht=a(o,"H2",{class:!0});var Br=i(ht);At=a(Br,"A",{id:!0,class:!0,href:!0});var Ep=i(At);js=a(Ep,"SPAN",{});var qp=i(js);k(Wo.$$.fragment,qp),qp.forEach(t),Ep.forEach(t),Xd=p(Br),Ms=a(Br,"SPAN",{});var Fp=i(Ms);Qd=s(Fp,"Speech2TextForConditionalGeneration"),Fp.forEach(t),Br.forEach(t),gr=p(o),xe=a(o,"DIV",{class:!0});var Xt=i(xe);k(Vo.$$.fragment,Xt),Zd=p(Xt),Ro=a(Xt,"P",{});var Kr=i(Ro);ec=s(Kr,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=a(Kr,"A",{href:!0});var zp=i(Mn);tc=s(zp,"PreTrainedModel"),zp.forEach(t),oc=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),nc=p(Xt),Ho=a(Xt,"P",{});var Jr=i(Ho);sc=s(Jr,"This model is also a PyTorch "),Bo=a(Jr,"A",{href:!0,rel:!0});var Cp=i(Bo);rc=s(Cp,"torch.nn.Module"),Cp.forEach(t),ac=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),ic=p(Xt),Ee=a(Xt,"DIV",{class:!0});var Qt=i(Ee);k(Ko.$$.fragment,Qt),dc=p(Qt),mt=a(Qt,"P",{});var Bn=i(mt);cc=s(Bn,"The "),Nn=a(Bn,"A",{href:!0});var Pp=i(Nn);lc=s(Pp,"Speech2TextForConditionalGeneration"),Pp.forEach(t),pc=s(Bn," forward method, overrides the "),Ns=a(Bn,"CODE",{});var jp=i(Ns);hc=s(jp,"__call__"),jp.forEach(t),mc=s(Bn," special method."),Bn.forEach(t),fc=p(Qt),k(Dt.$$.fragment,Qt),uc=p(Qt),k(It.$$.fragment,Qt),Qt.forEach(t),Xt.forEach(t),Tr=p(o),ft=a(o,"H2",{class:!0});var Yr=i(ft);Lt=a(Yr,"A",{id:!0,class:!0,href:!0});var Mp=i(Lt);As=a(Mp,"SPAN",{});var Np=i(As);k(Jo.$$.fragment,Np),Np.forEach(t),Mp.forEach(t),_c=p(Yr),Ds=a(Yr,"SPAN",{});var Ap=i(Ds);gc=s(Ap,"TFSpeech2TextModel"),Ap.forEach(t),Yr.forEach(t),vr=p(o),he=a(o,"DIV",{class:!0});var Xe=i(he);k(Yo.$$.fragment,Xe),Tc=p(Xe),Xo=a(Xe,"P",{});var Xr=i(Xo);vc=s(Xr,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),An=a(Xr,"A",{href:!0});var Dp=i(An);bc=s(Dp,"TFPreTrainedModel"),Dp.forEach(t),xc=s(Xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xr.forEach(t),kc=p(Xe),Qo=a(Xe,"P",{});var Qr=i(Qo);yc=s(Qr,"This model is also a "),Zo=a(Qr,"A",{href:!0,rel:!0});var Ip=i(Zo);wc=s(Ip,"tf.keras.Model"),Ip.forEach(t),Sc=s(Qr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qr.forEach(t),$c=p(Xe),k(Ot.$$.fragment,Xe),Ec=p(Xe),qe=a(Xe,"DIV",{class:!0});var Zt=i(qe);k(en.$$.fragment,Zt),qc=p(Zt),ut=a(Zt,"P",{});var Kn=i(ut);Fc=s(Kn,"The "),Dn=a(Kn,"A",{href:!0});var Lp=i(Dn);zc=s(Lp,"TFSpeech2TextModel"),Lp.forEach(t),Cc=s(Kn," forward method, overrides the "),Is=a(Kn,"CODE",{});var Op=i(Is);Pc=s(Op,"__call__"),Op.forEach(t),jc=s(Kn," special method."),Kn.forEach(t),Mc=p(Zt),k(Gt.$$.fragment,Zt),Nc=p(Zt),k(Ut.$$.fragment,Zt),Zt.forEach(t),Xe.forEach(t),br=p(o),_t=a(o,"H2",{class:!0});var Zr=i(_t);Wt=a(Zr,"A",{id:!0,class:!0,href:!0});var Gp=i(Wt);Ls=a(Gp,"SPAN",{});var Up=i(Ls);k(tn.$$.fragment,Up),Up.forEach(t),Gp.forEach(t),Ac=p(Zr),Os=a(Zr,"SPAN",{});var Wp=i(Os);Dc=s(Wp,"TFSpeech2TextForConditionalGeneration"),Wp.forEach(t),Zr.forEach(t),xr=p(o),me=a(o,"DIV",{class:!0});var Qe=i(me);k(on.$$.fragment,Qe),Ic=p(Qe),nn=a(Qe,"P",{});var ea=i(nn);Lc=s(ea,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),In=a(ea,"A",{href:!0});var Vp=i(In);Oc=s(Vp,"TFPreTrainedModel"),Vp.forEach(t),Gc=s(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(t),Uc=p(Qe),sn=a(Qe,"P",{});var ta=i(sn);Wc=s(ta,"This model is also a "),rn=a(ta,"A",{href:!0,rel:!0});var Rp=i(rn);Vc=s(Rp,"tf.keras.Model"),Rp.forEach(t),Rc=s(ta,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ta.forEach(t),Hc=p(Qe),k(Vt.$$.fragment,Qe),Bc=p(Qe),Fe=a(Qe,"DIV",{class:!0});var eo=i(Fe);k(an.$$.fragment,eo),Kc=p(eo),gt=a(eo,"P",{});var Jn=i(gt);Jc=s(Jn,"The "),Ln=a(Jn,"A",{href:!0});var Hp=i(Ln);Yc=s(Hp,"TFSpeech2TextForConditionalGeneration"),Hp.forEach(t),Xc=s(Jn," forward method, overrides the "),Gs=a(Jn,"CODE",{});var Bp=i(Gs);Qc=s(Bp,"__call__"),Bp.forEach(t),Zc=s(Jn," special method."),Jn.forEach(t),el=p(eo),k(Rt.$$.fragment,eo),tl=p(eo),k(Ht.$$.fragment,eo),eo.forEach(t),Qe.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(mh)),c(m,"id","speech2text"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#speech2text"),c(_,"class","relative group"),c(L,"id","overview"),c(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(L,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2010.05171"),c(te,"rel","nofollow"),c(M,"href","http://www.openslr.org/12"),c(M,"rel","nofollow"),c(ne,"href","https://github.com/facebookresearch/covost"),c(ne,"rel","nofollow"),c(re,"href","https://ict.fbk.eu/must-c/"),c(re,"rel","nofollow"),c(ae,"href","https://huggingface.co/valhalla"),c(ae,"rel","nofollow"),c(de,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),c(de,"rel","nofollow"),c(T,"id","inference"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#inference"),c(Y,"class","relative group"),c(Se,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(pn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),c(hn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(mn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),c(oo,"href","http://www.mega-nerd.com/libsndfile/"),c(oo,"rel","nofollow"),c(ao,"href","https://huggingface.co/models?filter=speech_to_text"),c(ao,"rel","nofollow"),c(vt,"id","transformers.Speech2TextConfig"),c(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vt,"href","#transformers.Speech2TextConfig"),c(st,"class","relative group"),c(_n,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextModel"),c(lo,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),c(lo,"rel","nofollow"),c(gn,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(Tn,"href","/docs/transformers/v4.21.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xt,"id","transformers.Speech2TextTokenizer"),c(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xt,"href","#transformers.Speech2TextTokenizer"),c(it,"class","relative group"),c(vn,"href","/docs/transformers/v4.21.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xn,"href","../glossary#token-type-ids"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wt,"id","transformers.Speech2TextFeatureExtractor"),c(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wt,"href","#transformers.Speech2TextFeatureExtractor"),c(dt,"class","relative group"),c(yn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($t,"id","transformers.Speech2TextProcessor"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.Speech2TextProcessor"),c(ct,"class","relative group"),c(wn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),c(Sn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c($n,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),c(So,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),c(En,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),c(Eo,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),c(qn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.as_target_processor"),c(qo,"href","/docs/transformers/v4.21.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),c(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.from_pretrained"),c(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),c(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Cn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),c(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(jt,"id","transformers.Speech2TextModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.Speech2TextModel"),c(lt,"class","relative group"),c(Pn,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),c(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Go,"rel","nofollow"),c(jn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextModel"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(At,"id","transformers.Speech2TextForConditionalGeneration"),c(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(At,"href","#transformers.Speech2TextForConditionalGeneration"),c(ht,"class","relative group"),c(Mn,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.PreTrainedModel"),c(Bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Bo,"rel","nofollow"),c(Nn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Lt,"id","transformers.TFSpeech2TextModel"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#transformers.TFSpeech2TextModel"),c(ft,"class","relative group"),c(An,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(Zo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Zo,"rel","nofollow"),c(Dn,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Wt,"id","transformers.TFSpeech2TextForConditionalGeneration"),c(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wt,"href","#transformers.TFSpeech2TextForConditionalGeneration"),c(_t,"class","relative group"),c(In,"href","/docs/transformers/v4.21.2/en/main_classes/model#transformers.TFPreTrainedModel"),c(rn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(rn,"rel","nofollow"),c(Ln,"href","/docs/transformers/v4.21.2/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),c(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,u){e(document.head,h),f(o,b,u),f(o,_,u),e(_,m),e(m,v),y(d,v,null),e(_,g),e(_,E),e(E,A),f(o,F,u),f(o,q,u),e(q,L),e(L,H),y(ee,H,null),e(q,Ce),e(q,B),e(B,Pe),f(o,ye,u),f(o,N,u),e(N,K),e(N,te),e(te,Te),e(N,j),e(N,M),e(M,je),e(N,oe),e(N,ne),e(ne,Me),e(N,se),e(N,re),e(re,Ne),e(N,G),f(o,we,u),f(o,O,u),e(O,Ae),e(O,ae),e(ae,ie),e(O,De),e(O,de),e(de,J),e(O,Ie),f(o,Z,u),f(o,Y,u),e(Y,T),e(T,z),y(X,z,null),e(Y,Ze),e(Y,Le),e(Le,Q),f(o,Ve,u),f(o,ue,u),e(ue,et),e(ue,U),e(U,ce),e(ue,tt),f(o,Re,u),f(o,P,u),e(P,ot),e(P,Se),e(Se,Oe),e(P,nt),e(P,pn),e(pn,oa),e(P,na),e(P,hn),e(hn,sa),e(P,ra),e(P,mn),e(mn,aa),e(P,ia),f(o,er,u),f(o,W,u),e(W,da),e(W,Yn),e(Yn,ca),e(W,la),e(W,Xn),e(Xn,pa),e(W,ha),e(W,Qn),e(Qn,ma),e(W,fa),e(W,Zn),e(Zn,ua),e(W,_a),e(W,es),e(es,ga),e(W,Ta),e(W,oo),e(oo,va),e(W,ba),e(W,ts),e(ts,xa),f(o,tr,u),f(o,fn,u),e(fn,os),e(os,ka),f(o,or,u),y(no,o,u),f(o,nr,u),f(o,un,u),e(un,so),e(so,ns),e(ns,ya),e(so,wa),e(so,le),e(le,Sa),e(le,ss),e(ss,$a),e(le,Ea),e(le,rs),e(rs,qa),e(le,Fa),e(le,as),e(as,za),e(le,Ca),e(le,is),e(is,Pa),e(le,ja),e(le,ds),e(ds,Ma),e(le,Na),f(o,sr,u),y(ro,o,u),f(o,rr,u),f(o,Tt,u),e(Tt,Aa),e(Tt,ao),e(ao,Da),e(Tt,Ia),f(o,ar,u),f(o,st,u),e(st,vt),e(vt,cs),y(io,cs,null),e(st,La),e(st,ls),e(ls,Oa),f(o,ir,u),f(o,ve,u),y(co,ve,null),e(ve,Ga),e(ve,rt),e(rt,Ua),e(rt,_n),e(_n,Wa),e(rt,Va),e(rt,lo),e(lo,Ra),e(rt,Ha),e(ve,Ba),e(ve,at),e(at,Ka),e(at,gn),e(gn,Ja),e(at,Ya),e(at,Tn),e(Tn,Xa),e(at,Qa),e(ve,Za),y(bt,ve,null),f(o,dr,u),f(o,it,u),e(it,xt),e(xt,ps),y(po,ps,null),e(it,ei),e(it,hs),e(hs,ti),f(o,cr,u),f(o,V,u),y(ho,V,null),e(V,oi),e(V,ms),e(ms,ni),e(V,si),e(V,mo),e(mo,ri),e(mo,vn),e(vn,ai),e(mo,ii),e(V,di),e(V,kt),y(fo,kt,null),e(kt,ci),e(kt,fs),e(fs,li),e(V,pi),e(V,yt),y(uo,yt,null),e(yt,hi),e(yt,_o),e(_o,mi),e(_o,us),e(us,fi),e(_o,ui),e(V,_i),e(V,He),y(go,He,null),e(He,gi),e(He,bn),e(bn,Ti),e(bn,xn),e(xn,vi),e(He,bi),e(He,_s),e(_s,xi),e(V,ki),e(V,kn),y(To,kn,null),f(o,lr,u),f(o,dt,u),e(dt,wt),e(wt,gs),y(vo,gs,null),e(dt,yi),e(dt,Ts),e(Ts,wi),f(o,pr,u),f(o,pe,u),y(bo,pe,null),e(pe,Si),e(pe,vs),e(vs,$i),e(pe,Ei),e(pe,xo),e(xo,qi),e(xo,yn),e(yn,Fi),e(xo,zi),e(pe,Ci),e(pe,bs),e(bs,Pi),e(pe,ji),e(pe,St),y(ko,St,null),e(St,Mi),e(St,xs),e(xs,Ni),f(o,hr,u),f(o,ct,u),e(ct,$t),e($t,ks),y(yo,ks,null),e(ct,Ai),e(ct,ys),e(ys,Di),f(o,mr,u),f(o,D,u),y(wo,D,null),e(D,Ii),e(D,ws),e(ws,Li),e(D,Oi),e(D,_e),e(_e,wn),e(wn,Gi),e(_e,Ui),e(_e,Sn),e(Sn,Wi),e(_e,Vi),e(_e,$n),e($n,Ri),e(_e,Hi),e(_e,So),e(So,Ss),e(Ss,Bi),e(So,Ki),e(_e,Ji),e(_e,En),e(En,Yi),e(_e,Xi),e(D,Qi),e(D,Et),y($o,Et,null),e(Et,Zi),e(Et,Ge),e(Ge,ed),e(Ge,Eo),e(Eo,$s),e($s,td),e(Eo,od),e(Ge,nd),e(Ge,qn),e(qn,sd),e(Ge,rd),e(Ge,qo),e(qo,Es),e(Es,ad),e(qo,id),e(Ge,dd),e(D,cd),e(D,Be),y(Fo,Be,null),e(Be,ld),e(Be,qs),e(qs,pd),e(Be,hd),y(qt,Be,null),e(D,md),e(D,Ke),y(zo,Ke,null),e(Ke,fd),e(Ke,Co),e(Co,ud),e(Co,Fn),e(Fn,_d),e(Co,gd),e(Ke,Td),y(Ft,Ke,null),e(D,vd),e(D,zt),y(Po,zt,null),e(zt,bd),e(zt,jo),e(jo,xd),e(jo,zn),e(zn,kd),e(jo,yd),e(D,wd),e(D,Ct),y(Mo,Ct,null),e(Ct,Sd),e(Ct,No),e(No,$d),e(No,Cn),e(Cn,Ed),e(No,qd),e(D,Fd),e(D,Pt),y(Ao,Pt,null),e(Pt,zd),e(Pt,Fs),e(Fs,Cd),f(o,fr,u),f(o,lt,u),e(lt,jt),e(jt,zs),y(Do,zs,null),e(lt,Pd),e(lt,Cs),e(Cs,jd),f(o,ur,u),f(o,be,u),y(Io,be,null),e(be,Md),e(be,Lo),e(Lo,Nd),e(Lo,Pn),e(Pn,Ad),e(Lo,Dd),e(be,Id),e(be,Oo),e(Oo,Ld),e(Oo,Go),e(Go,Od),e(Oo,Gd),e(be,Ud),e(be,$e),y(Uo,$e,null),e($e,Wd),e($e,pt),e(pt,Vd),e(pt,jn),e(jn,Rd),e(pt,Hd),e(pt,Ps),e(Ps,Bd),e(pt,Kd),e($e,Jd),y(Mt,$e,null),e($e,Yd),y(Nt,$e,null),f(o,_r,u),f(o,ht,u),e(ht,At),e(At,js),y(Wo,js,null),e(ht,Xd),e(ht,Ms),e(Ms,Qd),f(o,gr,u),f(o,xe,u),y(Vo,xe,null),e(xe,Zd),e(xe,Ro),e(Ro,ec),e(Ro,Mn),e(Mn,tc),e(Ro,oc),e(xe,nc),e(xe,Ho),e(Ho,sc),e(Ho,Bo),e(Bo,rc),e(Ho,ac),e(xe,ic),e(xe,Ee),y(Ko,Ee,null),e(Ee,dc),e(Ee,mt),e(mt,cc),e(mt,Nn),e(Nn,lc),e(mt,pc),e(mt,Ns),e(Ns,hc),e(mt,mc),e(Ee,fc),y(Dt,Ee,null),e(Ee,uc),y(It,Ee,null),f(o,Tr,u),f(o,ft,u),e(ft,Lt),e(Lt,As),y(Jo,As,null),e(ft,_c),e(ft,Ds),e(Ds,gc),f(o,vr,u),f(o,he,u),y(Yo,he,null),e(he,Tc),e(he,Xo),e(Xo,vc),e(Xo,An),e(An,bc),e(Xo,xc),e(he,kc),e(he,Qo),e(Qo,yc),e(Qo,Zo),e(Zo,wc),e(Qo,Sc),e(he,$c),y(Ot,he,null),e(he,Ec),e(he,qe),y(en,qe,null),e(qe,qc),e(qe,ut),e(ut,Fc),e(ut,Dn),e(Dn,zc),e(ut,Cc),e(ut,Is),e(Is,Pc),e(ut,jc),e(qe,Mc),y(Gt,qe,null),e(qe,Nc),y(Ut,qe,null),f(o,br,u),f(o,_t,u),e(_t,Wt),e(Wt,Ls),y(tn,Ls,null),e(_t,Ac),e(_t,Os),e(Os,Dc),f(o,xr,u),f(o,me,u),y(on,me,null),e(me,Ic),e(me,nn),e(nn,Lc),e(nn,In),e(In,Oc),e(nn,Gc),e(me,Uc),e(me,sn),e(sn,Wc),e(sn,rn),e(rn,Vc),e(sn,Rc),e(me,Hc),y(Vt,me,null),e(me,Bc),e(me,Fe),y(an,Fe,null),e(Fe,Kc),e(Fe,gt),e(gt,Jc),e(gt,Ln),e(Ln,Yc),e(gt,Xc),e(gt,Gs),e(Gs,Qc),e(gt,Zc),e(Fe,el),y(Rt,Fe,null),e(Fe,tl),y(Ht,Fe,null),kr=!0},p(o,[u]){const dn={};u&2&&(dn.$$scope={dirty:u,ctx:o}),bt.$set(dn);const Us={};u&2&&(Us.$$scope={dirty:u,ctx:o}),qt.$set(Us);const Ws={};u&2&&(Ws.$$scope={dirty:u,ctx:o}),Ft.$set(Ws);const Vs={};u&2&&(Vs.$$scope={dirty:u,ctx:o}),Mt.$set(Vs);const cn={};u&2&&(cn.$$scope={dirty:u,ctx:o}),Nt.$set(cn);const Rs={};u&2&&(Rs.$$scope={dirty:u,ctx:o}),Dt.$set(Rs);const Hs={};u&2&&(Hs.$$scope={dirty:u,ctx:o}),It.$set(Hs);const Bs={};u&2&&(Bs.$$scope={dirty:u,ctx:o}),Ot.$set(Bs);const ke={};u&2&&(ke.$$scope={dirty:u,ctx:o}),Gt.$set(ke);const Ks={};u&2&&(Ks.$$scope={dirty:u,ctx:o}),Ut.$set(Ks);const Js={};u&2&&(Js.$$scope={dirty:u,ctx:o}),Vt.$set(Js);const Ys={};u&2&&(Ys.$$scope={dirty:u,ctx:o}),Rt.$set(Ys);const Xs={};u&2&&(Xs.$$scope={dirty:u,ctx:o}),Ht.$set(Xs)},i(o){kr||(w(d.$$.fragment,o),w(ee.$$.fragment,o),w(X.$$.fragment,o),w(no.$$.fragment,o),w(ro.$$.fragment,o),w(io.$$.fragment,o),w(co.$$.fragment,o),w(bt.$$.fragment,o),w(po.$$.fragment,o),w(ho.$$.fragment,o),w(fo.$$.fragment,o),w(uo.$$.fragment,o),w(go.$$.fragment,o),w(To.$$.fragment,o),w(vo.$$.fragment,o),w(bo.$$.fragment,o),w(ko.$$.fragment,o),w(yo.$$.fragment,o),w(wo.$$.fragment,o),w($o.$$.fragment,o),w(Fo.$$.fragment,o),w(qt.$$.fragment,o),w(zo.$$.fragment,o),w(Ft.$$.fragment,o),w(Po.$$.fragment,o),w(Mo.$$.fragment,o),w(Ao.$$.fragment,o),w(Do.$$.fragment,o),w(Io.$$.fragment,o),w(Uo.$$.fragment,o),w(Mt.$$.fragment,o),w(Nt.$$.fragment,o),w(Wo.$$.fragment,o),w(Vo.$$.fragment,o),w(Ko.$$.fragment,o),w(Dt.$$.fragment,o),w(It.$$.fragment,o),w(Jo.$$.fragment,o),w(Yo.$$.fragment,o),w(Ot.$$.fragment,o),w(en.$$.fragment,o),w(Gt.$$.fragment,o),w(Ut.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(Vt.$$.fragment,o),w(an.$$.fragment,o),w(Rt.$$.fragment,o),w(Ht.$$.fragment,o),kr=!0)},o(o){S(d.$$.fragment,o),S(ee.$$.fragment,o),S(X.$$.fragment,o),S(no.$$.fragment,o),S(ro.$$.fragment,o),S(io.$$.fragment,o),S(co.$$.fragment,o),S(bt.$$.fragment,o),S(po.$$.fragment,o),S(ho.$$.fragment,o),S(fo.$$.fragment,o),S(uo.$$.fragment,o),S(go.$$.fragment,o),S(To.$$.fragment,o),S(vo.$$.fragment,o),S(bo.$$.fragment,o),S(ko.$$.fragment,o),S(yo.$$.fragment,o),S(wo.$$.fragment,o),S($o.$$.fragment,o),S(Fo.$$.fragment,o),S(qt.$$.fragment,o),S(zo.$$.fragment,o),S(Ft.$$.fragment,o),S(Po.$$.fragment,o),S(Mo.$$.fragment,o),S(Ao.$$.fragment,o),S(Do.$$.fragment,o),S(Io.$$.fragment,o),S(Uo.$$.fragment,o),S(Mt.$$.fragment,o),S(Nt.$$.fragment,o),S(Wo.$$.fragment,o),S(Vo.$$.fragment,o),S(Ko.$$.fragment,o),S(Dt.$$.fragment,o),S(It.$$.fragment,o),S(Jo.$$.fragment,o),S(Yo.$$.fragment,o),S(Ot.$$.fragment,o),S(en.$$.fragment,o),S(Gt.$$.fragment,o),S(Ut.$$.fragment,o),S(tn.$$.fragment,o),S(on.$$.fragment,o),S(Vt.$$.fragment,o),S(an.$$.fragment,o),S(Rt.$$.fragment,o),S(Ht.$$.fragment,o),kr=!1},d(o){t(h),o&&t(b),o&&t(_),$(d),o&&t(F),o&&t(q),$(ee),o&&t(ye),o&&t(N),o&&t(we),o&&t(O),o&&t(Z),o&&t(Y),$(X),o&&t(Ve),o&&t(ue),o&&t(Re),o&&t(P),o&&t(er),o&&t(W),o&&t(tr),o&&t(fn),o&&t(or),$(no,o),o&&t(nr),o&&t(un),o&&t(sr),$(ro,o),o&&t(rr),o&&t(Tt),o&&t(ar),o&&t(st),$(io),o&&t(ir),o&&t(ve),$(co),$(bt),o&&t(dr),o&&t(it),$(po),o&&t(cr),o&&t(V),$(ho),$(fo),$(uo),$(go),$(To),o&&t(lr),o&&t(dt),$(vo),o&&t(pr),o&&t(pe),$(bo),$(ko),o&&t(hr),o&&t(ct),$(yo),o&&t(mr),o&&t(D),$(wo),$($o),$(Fo),$(qt),$(zo),$(Ft),$(Po),$(Mo),$(Ao),o&&t(fr),o&&t(lt),$(Do),o&&t(ur),o&&t(be),$(Io),$(Uo),$(Mt),$(Nt),o&&t(_r),o&&t(ht),$(Wo),o&&t(gr),o&&t(xe),$(Vo),$(Ko),$(Dt),$(It),o&&t(Tr),o&&t(ft),$(Jo),o&&t(vr),o&&t(he),$(Yo),$(Ot),$(en),$(Gt),$(Ut),o&&t(br),o&&t(_t),$(tn),o&&t(xr),o&&t(me),$(on),$(Vt),$(an),$(Rt),$(Ht)}}}const mh={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function fh(C){return Qp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xh extends Kp{constructor(h){super();Jp(this,h,fh,hh,Yp,{})}}export{xh as default,mh as metadata};
