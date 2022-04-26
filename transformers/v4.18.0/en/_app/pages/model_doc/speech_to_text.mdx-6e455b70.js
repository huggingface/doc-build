import{S as Jp,i as Kp,s as Yp,e as a,k as l,w as x,t as n,M as Xp,c as r,d as t,m as p,a as i,x as k,h as s,b as c,F as e,g as u,y,q as w,o as S,B as $,v as Qp,L as Zs}from"../../chunks/vendor-6b77c823.js";import{T as to}from"../../chunks/Tip-39098574.js";import{D as N}from"../../chunks/Docstring-1088f2fb.js";import{C as ln}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ve}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Qs}from"../../chunks/ExampleCodeBlock-5212b321.js";function Zp(C){let h,b,_,m,T;return m=new ln({props:{code:`from transformers import Speech2TextModel, Speech2TextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){h=a("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){u(d,h,g),e(h,b),u(d,_,g),y(m,d,g),T=!0},p:Zs,i(d){T||(w(m.$$.fragment,d),T=!0)},o(d){S(m.$$.fragment,d),T=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function eh(C){let h,b,_,m,T,d,g,E;return{c(){h=a("p"),b=n(`This class method is simply calling the feature extractor
`),_=a("a"),m=n("from_pretrained()"),T=n(` and the tokenizer
`),d=a("code"),g=n("from_pretrained"),E=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(I){h=r(I,"P",{});var z=i(h);b=s(z,`This class method is simply calling the feature extractor
`),_=r(z,"A",{href:!0});var q=i(_);m=s(q,"from_pretrained()"),q.forEach(t),T=s(z,` and the tokenizer
`),d=r(z,"CODE",{});var L=i(d);g=s(L,"from_pretrained"),L.forEach(t),E=s(z,` methods. Please refer to the docstrings of the
methods above for more information.`),z.forEach(t),this.h()},h(){c(_,"href","/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(I,z){u(I,h,z),e(h,b),e(h,_),e(_,m),e(h,T),e(h,d),e(d,g),e(h,E)},d(I){I&&t(h)}}}function th(C){let h,b,_,m,T,d,g,E;return{c(){h=a("p"),b=n("This class method is simply calling "),_=a("a"),m=n("save_pretrained()"),T=n(` and
`),d=a("code"),g=n("save_pretrained"),E=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(I){h=r(I,"P",{});var z=i(h);b=s(z,"This class method is simply calling "),_=r(z,"A",{href:!0});var q=i(_);m=s(q,"save_pretrained()"),q.forEach(t),T=s(z,` and
`),d=r(z,"CODE",{});var L=i(d);g=s(L,"save_pretrained"),L.forEach(t),E=s(z,`. Please refer to the docstrings of the methods
above for more information.`),z.forEach(t),this.h()},h(){c(_,"href","/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(I,z){u(I,h,z),e(h,b),e(h,_),e(_,m),e(h,T),e(h,d),e(d,g),e(h,E)},d(I){I&&t(h)}}}function oh(C){let h,b,_,m,T;return{c(){h=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var g=i(h);b=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),T=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){u(d,h,g),e(h,b),e(h,_),e(_,m),e(h,T)},d(d){d&&t(h)}}}function nh(C){let h,b,_,m,T;return m=new ln({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">256</span>]`}}),{c(){h=a("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){u(d,h,g),e(h,b),u(d,_,g),y(m,d,g),T=!0},p:Zs,i(d){T||(w(m.$$.fragment,d),T=!0)},o(d){S(m.$$.fragment,d),T=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function sh(C){let h,b,_,m,T;return{c(){h=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var g=i(h);b=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),T=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){u(d,h,g),e(h,b),e(h,_),e(_,m),e(h,T)},d(d){d&&t(h)}}}function ah(C){let h,b,_,m,T;return m=new ln({props:{code:`import torch
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
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),{c(){h=a("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){u(d,h,g),e(h,b),u(d,_,g),y(m,d,g),T=!0},p:Zs,i(d){T||(w(m.$$.fragment,d),T=!0)},o(d){S(m.$$.fragment,d),T=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function rh(C){let h,b,_,m,T,d,g,E,I,z,q,L,H,ee,Ce,B,Pe,ye,A,J,te,ve,j,M,je,oe,ne,Me,se,ae,Ae,G,we,O,Ie,re,ie,De,de,K,Ne,Z,Y;return{c(){h=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),_=l(),m=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),E=a("li"),I=n("having all inputs as a list, tuple or dict in the first positional arguments."),z=l(),q=a("p"),L=n("This second option is useful when using "),H=a("code"),ee=n("tf.keras.Model.fit"),Ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),Pe=n("model(inputs)"),ye=n("."),A=l(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve=l(),j=a("ul"),M=a("li"),je=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Me=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Ae=l(),G=a("li"),we=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),Ie=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),De=n("model([input_ids, attention_mask, token_type_ids])"),de=l(),K=a("li"),Ne=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){h=r(v,"P",{});var F=i(h);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),_=p(v),m=r(v,"UL",{});var X=i(m);T=r(X,"LI",{});var Ze=i(T);d=s(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),g=p(X),E=r(X,"LI",{});var Le=i(E);I=s(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),X.forEach(t),z=p(v),q=r(v,"P",{});var Q=i(q);L=s(Q,"This second option is useful when using "),H=r(Q,"CODE",{});var Ue=i(H);ee=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Ce=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(Q,"CODE",{});var fe=i(B);Pe=s(fe,"model(inputs)"),fe.forEach(t),ye=s(Q,"."),Q.forEach(t),A=p(v),J=r(v,"P",{});var et=i(J);te=s(et,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),et.forEach(t),ve=p(v),j=r(v,"UL",{});var W=i(j);M=r(W,"LI",{});var ce=i(M);je=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var tt=i(oe);ne=s(tt,"input_ids"),tt.forEach(t),Me=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Re=i(se);ae=s(Re,"model(input_ids)"),Re.forEach(t),ce.forEach(t),Ae=p(W),G=r(W,"LI",{});var P=i(G);we=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(P,"CODE",{});var ot=i(O);Ie=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),re=s(P," or "),ie=r(P,"CODE",{});var Se=i(ie);De=s(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),P.forEach(t),de=p(W),K=r(W,"LI",{});var Oe=i(K);Ne=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Oe,"CODE",{});var nt=i(Z);Y=s(nt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),nt.forEach(t),Oe.forEach(t),W.forEach(t)},m(v,F){u(v,h,F),e(h,b),u(v,_,F),u(v,m,F),e(m,T),e(T,d),e(m,g),e(m,E),e(E,I),u(v,z,F),u(v,q,F),e(q,L),e(q,H),e(H,ee),e(q,Ce),e(q,B),e(B,Pe),e(q,ye),u(v,A,F),u(v,J,F),e(J,te),u(v,ve,F),u(v,j,F),e(j,M),e(M,je),e(M,oe),e(oe,ne),e(M,Me),e(M,se),e(se,ae),e(j,Ae),e(j,G),e(G,we),e(G,O),e(O,Ie),e(G,re),e(G,ie),e(ie,De),e(j,de),e(j,K),e(K,Ne),e(K,Z),e(Z,Y)},d(v){v&&t(h),v&&t(_),v&&t(m),v&&t(z),v&&t(q),v&&t(A),v&&t(J),v&&t(ve),v&&t(j)}}}function ih(C){let h,b,_,m,T;return{c(){h=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var g=i(h);b=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),T=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){u(d,h,g),e(h,b),e(h,_),e(_,m),e(h,T)},d(d){d&&t(h)}}}function dh(C){let h,b,_,m,T;return m=new ln({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){h=a("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){u(d,h,g),e(h,b),u(d,_,g),y(m,d,g),T=!0},p:Zs,i(d){T||(w(m.$$.fragment,d),T=!0)},o(d){S(m.$$.fragment,d),T=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function ch(C){let h,b,_,m,T,d,g,E,I,z,q,L,H,ee,Ce,B,Pe,ye,A,J,te,ve,j,M,je,oe,ne,Me,se,ae,Ae,G,we,O,Ie,re,ie,De,de,K,Ne,Z,Y;return{c(){h=a("p"),b=n("TF 2.0 models accepts two formats as inputs:"),_=l(),m=a("ul"),T=a("li"),d=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),E=a("li"),I=n("having all inputs as a list, tuple or dict in the first positional arguments."),z=l(),q=a("p"),L=n("This second option is useful when using "),H=a("code"),ee=n("tf.keras.Model.fit"),Ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),Pe=n("model(inputs)"),ye=n("."),A=l(),J=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve=l(),j=a("ul"),M=a("li"),je=n("a single Tensor with "),oe=a("code"),ne=n("input_ids"),Me=n(" only and nothing else: "),se=a("code"),ae=n("model(input_ids)"),Ae=l(),G=a("li"),we=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=a("code"),Ie=n("model([input_ids, attention_mask])"),re=n(" or "),ie=a("code"),De=n("model([input_ids, attention_mask, token_type_ids])"),de=l(),K=a("li"),Ne=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),Y=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){h=r(v,"P",{});var F=i(h);b=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),_=p(v),m=r(v,"UL",{});var X=i(m);T=r(X,"LI",{});var Ze=i(T);d=s(Ze,"having all inputs as keyword arguments (like PyTorch models), or"),Ze.forEach(t),g=p(X),E=r(X,"LI",{});var Le=i(E);I=s(Le,"having all inputs as a list, tuple or dict in the first positional arguments."),Le.forEach(t),X.forEach(t),z=p(v),q=r(v,"P",{});var Q=i(q);L=s(Q,"This second option is useful when using "),H=r(Q,"CODE",{});var Ue=i(H);ee=s(Ue,"tf.keras.Model.fit"),Ue.forEach(t),Ce=s(Q,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(Q,"CODE",{});var fe=i(B);Pe=s(fe,"model(inputs)"),fe.forEach(t),ye=s(Q,"."),Q.forEach(t),A=p(v),J=r(v,"P",{});var et=i(J);te=s(et,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),et.forEach(t),ve=p(v),j=r(v,"UL",{});var W=i(j);M=r(W,"LI",{});var ce=i(M);je=s(ce,"a single Tensor with "),oe=r(ce,"CODE",{});var tt=i(oe);ne=s(tt,"input_ids"),tt.forEach(t),Me=s(ce," only and nothing else: "),se=r(ce,"CODE",{});var Re=i(se);ae=s(Re,"model(input_ids)"),Re.forEach(t),ce.forEach(t),Ae=p(W),G=r(W,"LI",{});var P=i(G);we=s(P,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),O=r(P,"CODE",{});var ot=i(O);Ie=s(ot,"model([input_ids, attention_mask])"),ot.forEach(t),re=s(P," or "),ie=r(P,"CODE",{});var Se=i(ie);De=s(Se,"model([input_ids, attention_mask, token_type_ids])"),Se.forEach(t),P.forEach(t),de=p(W),K=r(W,"LI",{});var Oe=i(K);Ne=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Oe,"CODE",{});var nt=i(Z);Y=s(nt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),nt.forEach(t),Oe.forEach(t),W.forEach(t)},m(v,F){u(v,h,F),e(h,b),u(v,_,F),u(v,m,F),e(m,T),e(T,d),e(m,g),e(m,E),e(E,I),u(v,z,F),u(v,q,F),e(q,L),e(q,H),e(H,ee),e(q,Ce),e(q,B),e(B,Pe),e(q,ye),u(v,A,F),u(v,J,F),e(J,te),u(v,ve,F),u(v,j,F),e(j,M),e(M,je),e(M,oe),e(oe,ne),e(M,Me),e(M,se),e(se,ae),e(j,Ae),e(j,G),e(G,we),e(G,O),e(O,Ie),e(G,re),e(G,ie),e(ie,De),e(j,de),e(j,K),e(K,Ne),e(K,Z),e(Z,Y)},d(v){v&&t(h),v&&t(_),v&&t(m),v&&t(z),v&&t(q),v&&t(A),v&&t(J),v&&t(ve),v&&t(j)}}}function lh(C){let h,b,_,m,T;return{c(){h=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),m=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){h=r(d,"P",{});var g=i(h);b=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(g,"CODE",{});var E=i(_);m=s(E,"Module"),E.forEach(t),T=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(d,g){u(d,h,g),e(h,b),e(h,_),e(_,m),e(h,T)},d(d){d&&t(h)}}}function ph(C){let h,b,_,m,T;return m=new ln({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>).input_features  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(input_features)

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){h=a("p"),b=n("Example:"),_=l(),x(m.$$.fragment)},l(d){h=r(d,"P",{});var g=i(h);b=s(g,"Example:"),g.forEach(t),_=p(d),k(m.$$.fragment,d)},m(d,g){u(d,h,g),e(h,b),u(d,_,g),y(m,d,g),T=!0},p:Zs,i(d){T||(w(m.$$.fragment,d),T=!0)},o(d){S(m.$$.fragment,d),T=!1},d(d){d&&t(h),d&&t(_),$(m,d)}}}function hh(C){let h,b,_,m,T,d,g,E,I,z,q,L,H,ee,Ce,B,Pe,ye,A,J,te,ve,j,M,je,oe,ne,Me,se,ae,Ae,G,we,O,Ie,re,ie,De,de,K,Ne,Z,Y,v,F,X,Ze,Le,Q,Ue,fe,et,W,ce,tt,Re,P,ot,Se,Oe,nt,pn,or,nr,hn,sr,ar,mn,rr,ir,ea,V,dr,Yn,cr,lr,Xn,pr,hr,Qn,mr,ur,Zn,fr,_r,es,gr,vr,oo,Tr,br,ts,xr,ta,un,os,kr,oa,no,na,fn,so,ns,yr,wr,le,Sr,ss,$r,Er,as,qr,zr,rs,Fr,Cr,is,Pr,jr,ds,Mr,Ar,sa,ao,aa,vt,Ir,ro,Dr,Nr,ra,st,Tt,cs,io,Lr,ls,Or,ia,Te,co,Gr,at,Wr,_n,Vr,Ur,lo,Rr,Hr,Br,rt,Jr,gn,Kr,Yr,vn,Xr,Qr,Zr,bt,da,it,xt,ps,po,ei,hs,ti,ca,U,ho,oi,ms,ni,si,mo,ai,Tn,ri,ii,di,kt,uo,ci,us,li,pi,yt,fo,hi,_o,mi,fs,ui,fi,_i,He,go,gi,bn,vi,xn,Ti,bi,_s,xi,ki,kn,vo,la,dt,wt,gs,To,yi,vs,wi,pa,pe,bo,Si,Ts,$i,Ei,xo,qi,yn,zi,Fi,Ci,bs,Pi,ji,St,ko,Mi,xs,Ai,ha,ct,$t,ks,yo,Ii,ys,Di,ma,D,wo,Ni,ws,Li,Oi,_e,wn,Gi,Wi,Sn,Vi,Ui,$n,Ri,Hi,So,Ss,Bi,Ji,Ki,En,Yi,Xi,Qi,Et,$o,Zi,Ge,ed,Eo,$s,td,od,nd,qn,sd,ad,qo,Es,rd,id,dd,cd,Be,zo,ld,qs,pd,hd,qt,md,Je,Fo,ud,Co,fd,zn,_d,gd,vd,zt,Td,Ft,Po,bd,jo,xd,Fn,kd,yd,wd,Ct,Mo,Sd,Ao,$d,Cn,Ed,qd,zd,Pt,Io,Fd,zs,Cd,ua,lt,jt,Fs,Do,Pd,Cs,jd,fa,be,No,Md,Lo,Ad,Pn,Id,Dd,Nd,Oo,Ld,Go,Od,Gd,Wd,$e,Wo,Vd,pt,Ud,jn,Rd,Hd,Ps,Bd,Jd,Kd,Mt,Yd,At,_a,ht,It,js,Vo,Xd,Ms,Qd,ga,xe,Uo,Zd,Ro,ec,Mn,tc,oc,nc,Ho,sc,Bo,ac,rc,ic,Ee,Jo,dc,mt,cc,An,lc,pc,As,hc,mc,uc,Dt,fc,Nt,va,ut,Lt,Is,Ko,_c,Ds,gc,Ta,he,Yo,vc,Xo,Tc,In,bc,xc,kc,Qo,yc,Zo,wc,Sc,$c,Ot,Ec,qe,en,qc,ft,zc,Dn,Fc,Cc,Ns,Pc,jc,Mc,Gt,Ac,Wt,ba,_t,Vt,Ls,tn,Ic,Os,Dc,xa,me,on,Nc,nn,Lc,Nn,Oc,Gc,Wc,sn,Vc,an,Uc,Rc,Hc,Ut,Bc,ze,rn,Jc,gt,Kc,Ln,Yc,Xc,Gs,Qc,Zc,el,Rt,tl,Ht,ka;return d=new Ve({}),ee=new Ve({}),X=new Ve({}),no=new ln({props:{code:`import torch
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
[<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>]`}}),ao=new ln({props:{code:`import torch
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
[<span class="hljs-string">&quot;&lt;lang:fr&gt; (Vid\xE9o) Si M. Kilder est l&#x27;apossible des classes moyennes, et nous sommes heureux d&#x27;\xEAtre accueillis dans son \xE9vangile.&quot;</span>]`}}),io=new Ve({}),co=new N({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2TextConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
An integer specifying number of input channels of the input feature vector.`,name:"input_channels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L29"}}),bt=new Qs({props:{anchor:"transformers.Speech2TextConfig.example",$$slots:{default:[Zp]},$$scope:{ctx:C}}}),po=new Ve({}),ho=new N({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional keyword arguments passed along to <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L55"}}),uo=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L195"}}),fo=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L202",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),go=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/tokenization_utils_base.py#L2856",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),vo=new N({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L251"}}),To=new Ve({}),bo=new N({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L33"}}),ko=new N({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
The sequence or batch of sequences to be padded. Each sequence can be a numpy array, a list of float
values, a list of numpy arrays or a list of list of float values.`,name:"raw_speech"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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

					</div>`,name:"return_attention_mask"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.18.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The sampling rate at which the <code>raw_speech</code> input was sampled. It is strongly recommended to pass
<code>sampling_rate</code> at the forward call to prevent silent errors.`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.__call__.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L126"}}),yo=new Ve({}),wo=new N({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L23"}}),$o=new N({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L45"}}),zo=new N({props:{name:"from_pretrained",anchor:"transformers.Speech2TextProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/v4.18.0/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/processing_utils.py#L156"}}),qt=new to({props:{$$slots:{default:[eh]},$$scope:{ctx:C}}}),Fo=new N({props:{name:"save_pretrained",anchor:"transformers.Speech2TextProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2TextProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/processing_utils.py#L94"}}),zt=new to({props:{$$slots:{default:[th]},$$scope:{ctx:C}}}),Po=new N({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L55"}}),Mo=new N({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L62"}}),Io=new N({props:{name:"as_target_processor",anchor:"transformers.Speech2TextProcessor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/processing_speech_to_text.py#L69"}}),Do=new Ve({}),No=new N({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1116"}}),Wo=new N({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_speech_to_text._prepare_decoder_inputs</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1138",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mt=new to({props:{$$slots:{default:[oh]},$$scope:{ctx:C}}}),At=new Qs({props:{anchor:"transformers.Speech2TextModel.forward.example",$$slots:{default:[nh]},$$scope:{ctx:C}}}),Vo=new Ve({}),Uo=new N({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1247"}}),Jo=new N({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of type <code>torch.FloatTensor</code>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>SpeechToText uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_speech_to_text._prepare_decoder_inputs</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Speech2TextForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code>
or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored (masked), the loss is
only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1284",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dt=new to({props:{$$slots:{default:[sh]},$$scope:{ctx:C}}}),Nt=new Qs({props:{anchor:"transformers.Speech2TextForConditionalGeneration.forward.example",$$slots:{default:[ah]},$$scope:{ctx:C}}}),Ko=new Ve({}),Yo=new N({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1226"}}),Ot=new to({props:{$$slots:{default:[rh]},$$scope:{ctx:C}}}),en=new N({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1238",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gt=new to({props:{$$slots:{default:[ih]},$$scope:{ctx:C}}}),Wt=new Qs({props:{anchor:"transformers.TFSpeech2TextModel.call.example",$$slots:{default:[dh]},$$scope:{ctx:C}}}),tn=new Ve({}),on=new N({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1309"}}),Ut=new to({props:{$$slots:{default:[ch]},$$scope:{ctx:C}}}),rn=new N({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
Float values of fbank features extracted from the raw speech waveform. Raw speech waveform can be obtained
by loading a <code>.flac</code> or <code>.wav</code> audio file into an array of type <code>List[float]</code> or a <code>numpy.ndarray</code>, <em>e.g.</em>
via the soundfile library (<code>pip install soundfile</code>). To prepare the array into <code>input_features</code>, the
<a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a> should be used for extracting the fbank features, padding and conversion into a
tensor of floats. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"><strong>call</strong>()</a>`,name:"input_features"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1331",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Rt=new to({props:{$$slots:{default:[lh]},$$scope:{ctx:C}}}),Ht=new Qs({props:{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.example",$$slots:{default:[ph]},$$scope:{ctx:C}}}),{c(){h=a("meta"),b=l(),_=a("h1"),m=a("a"),T=a("span"),x(d.$$.fragment),g=l(),E=a("span"),I=n("Speech2Text"),z=l(),q=a("h2"),L=a("a"),H=a("span"),x(ee.$$.fragment),Ce=l(),B=a("span"),Pe=n("Overview"),ye=l(),A=a("p"),J=n("The Speech2Text model was proposed in "),te=a("a"),ve=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),j=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),M=a("a"),je=n("LibriSpeech"),oe=n(", "),ne=a("a"),Me=n("CoVoST 2"),se=n(", "),ae=a("a"),Ae=n("MuST-C"),G=n("."),we=l(),O=a("p"),Ie=n("This model was contributed by "),re=a("a"),ie=n("valhalla"),De=n(". The original code can be found "),de=a("a"),K=n("here"),Ne=n("."),Z=l(),Y=a("h2"),v=a("a"),F=a("span"),x(X.$$.fragment),Ze=l(),Le=a("span"),Q=n("Inference"),Ue=l(),fe=a("p"),et=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),W=a("code"),ce=n("generate()"),tt=n(" method can be used for inference."),Re=l(),P=a("p"),ot=n("The "),Se=a("a"),Oe=n("Speech2TextFeatureExtractor"),nt=n(` class is responsible for extracting the log-mel filter-bank
features. The `),pn=a("a"),or=n("Speech2TextProcessor"),nr=n(" wraps "),hn=a("a"),sr=n("Speech2TextFeatureExtractor"),ar=n(` and
`),mn=a("a"),rr=n("Speech2TextTokenizer"),ir=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),ea=l(),V=a("p"),dr=n("The feature extractor depends on "),Yn=a("code"),cr=n("torchaudio"),lr=n(" and the tokenizer depends on "),Xn=a("code"),pr=n("sentencepiece"),hr=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=a("code"),mr=n('pip install transformers"[speech, sentencepiece]"'),ur=n(" or install the packages seperately with "),Zn=a("code"),fr=n("pip install torchaudio sentencepiece"),_r=n(". Also "),es=a("code"),gr=n("torchaudio"),vr=n(" requires the development version of the "),oo=a("a"),Tr=n("libsndfile"),br=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=a("code"),xr=n("apt install libsndfile1-dev"),ta=l(),un=a("ul"),os=a("li"),kr=n("ASR and Speech Translation"),oa=l(),x(no.$$.fragment),na=l(),fn=a("ul"),so=a("li"),ns=a("p"),yr=n("Multilingual speech translation"),wr=l(),le=a("p"),Sr=n("For multilingual speech translation models, "),ss=a("code"),$r=n("eos_token_id"),Er=n(" is used as the "),as=a("code"),qr=n("decoder_start_token_id"),zr=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=a("code"),Fr=n("forced_bos_token_id"),Cr=n(" parameter to the "),is=a("code"),Pr=n("generate()"),jr=n(` method. The following
example shows how to transate English speech to French text using the `),ds=a("em"),Mr=n("facebook/s2t-medium-mustc-multilingual-st"),Ar=n(`
checkpoint.`),sa=l(),x(ao.$$.fragment),aa=l(),vt=a("p"),Ir=n("See the "),ro=a("a"),Dr=n("model hub"),Nr=n(" to look for Speech2Text checkpoints."),ra=l(),st=a("h2"),Tt=a("a"),cs=a("span"),x(io.$$.fragment),Lr=l(),ls=a("span"),Or=n("Speech2TextConfig"),ia=l(),Te=a("div"),x(co.$$.fragment),Gr=l(),at=a("p"),Wr=n("This is the configuration class to store the configuration of a "),_n=a("a"),Vr=n("Speech2TextModel"),Ur=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),lo=a("a"),Rr=n("facebook/s2t-small-librispeech-asr"),Hr=n(" architecture."),Br=l(),rt=a("p"),Jr=n("Configuration objects inherit from "),gn=a("a"),Kr=n("PretrainedConfig"),Yr=n(` and can be used to control the model outputs. Read the
documentation from `),vn=a("a"),Xr=n("PretrainedConfig"),Qr=n(" for more information."),Zr=l(),x(bt.$$.fragment),da=l(),it=a("h2"),xt=a("a"),ps=a("span"),x(po.$$.fragment),ei=l(),hs=a("span"),ti=n("Speech2TextTokenizer"),ca=l(),U=a("div"),x(ho.$$.fragment),oi=l(),ms=a("p"),ni=n("Construct an Speech2Text tokenizer."),si=l(),mo=a("p"),ai=n("This tokenizer inherits from "),Tn=a("a"),ri=n("PreTrainedTokenizer"),ii=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),di=l(),kt=a("div"),x(uo.$$.fragment),ci=l(),us=a("p"),li=n("Build model inputs from a sequence by appending eos_token_id."),pi=l(),yt=a("div"),x(fo.$$.fragment),hi=l(),_o=a("p"),mi=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fs=a("code"),ui=n("prepare_for_model"),fi=n(" method."),_i=l(),He=a("div"),x(go.$$.fragment),gi=l(),bn=a("p"),vi=n("Create the token type IDs corresponding to the sequences passed. "),xn=a("a"),Ti=n(`What are token type
IDs?`),bi=l(),_s=a("p"),xi=n("Should be overridden in a subclass if the model has a special way of building those."),ki=l(),kn=a("div"),x(vo.$$.fragment),la=l(),dt=a("h2"),wt=a("a"),gs=a("span"),x(To.$$.fragment),yi=l(),vs=a("span"),wi=n("Speech2TextFeatureExtractor"),pa=l(),pe=a("div"),x(bo.$$.fragment),Si=l(),Ts=a("p"),$i=n("Constructs a Speech2Text feature extractor."),Ei=l(),xo=a("p"),qi=n("This feature extractor inherits from "),yn=a("a"),zi=n("Speech2TextFeatureExtractor"),Fi=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ci=l(),bs=a("p"),Pi=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),ji=l(),St=a("div"),x(ko.$$.fragment),Mi=l(),xs=a("p"),Ai=n("Main method to featurize and prepare for the model one or several sequence(s). sequences."),ha=l(),ct=a("h2"),$t=a("a"),ks=a("span"),x(yo.$$.fragment),Ii=l(),ys=a("span"),Di=n("Speech2TextProcessor"),ma=l(),D=a("div"),x(wo.$$.fragment),Ni=l(),ws=a("p"),Li=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Oi=l(),_e=a("p"),wn=a("a"),Gi=n("Speech2TextProcessor"),Wi=n(" offers all the functionalities of "),Sn=a("a"),Vi=n("Speech2TextFeatureExtractor"),Ui=n(` and
`),$n=a("a"),Ri=n("Speech2TextTokenizer"),Hi=n(". See the "),So=a("a"),Ss=a("strong"),Bi=n("call"),Ji=n("()"),Ki=n(" and "),En=a("a"),Yi=n("decode()"),Xi=n(` for more
information.`),Qi=l(),Et=a("div"),x($o.$$.fragment),Zi=l(),Ge=a("p"),ed=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),Eo=a("a"),$s=a("strong"),td=n("call"),od=n("()"),nd=n(` and returns its output. If used in the context
`),qn=a("a"),sd=n("as_target_processor()"),ad=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),qo=a("a"),Es=a("strong"),rd=n("call"),id=n("()"),dd=n(`. Please refer to the doctsring of the above two methods for more
information.`),cd=l(),Be=a("div"),x(zo.$$.fragment),ld=l(),qs=a("p"),pd=n("Instantiate a processor associated with a pretrained model."),hd=l(),x(qt.$$.fragment),md=l(),Je=a("div"),x(Fo.$$.fragment),ud=l(),Co=a("p"),fd=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zn=a("a"),_d=n("from_pretrained()"),gd=n(" method."),vd=l(),x(zt.$$.fragment),Td=l(),Ft=a("div"),x(Po.$$.fragment),bd=l(),jo=a("p"),xd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=a("a"),kd=n("batch_decode()"),yd=n(`. Please
refer to the docstring of this method for more information.`),wd=l(),Ct=a("div"),x(Mo.$$.fragment),Sd=l(),Ao=a("p"),$d=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Cn=a("a"),Ed=n("decode()"),qd=n(`. Please refer
to the docstring of this method for more information.`),zd=l(),Pt=a("div"),x(Io.$$.fragment),Fd=l(),zs=a("p"),Cd=n(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),ua=l(),lt=a("h2"),jt=a("a"),Fs=a("span"),x(Do.$$.fragment),Pd=l(),Cs=a("span"),jd=n("Speech2TextModel"),fa=l(),be=a("div"),x(No.$$.fragment),Md=l(),Lo=a("p"),Ad=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=a("a"),Id=n("PreTrainedModel"),Dd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nd=l(),Oo=a("p"),Ld=n("This model is also a PyTorch "),Go=a("a"),Od=n("torch.nn.Module"),Gd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wd=l(),$e=a("div"),x(Wo.$$.fragment),Vd=l(),pt=a("p"),Ud=n("The "),jn=a("a"),Rd=n("Speech2TextModel"),Hd=n(" forward method, overrides the "),Ps=a("code"),Bd=n("__call__"),Jd=n(" special method."),Kd=l(),x(Mt.$$.fragment),Yd=l(),x(At.$$.fragment),_a=l(),ht=a("h2"),It=a("a"),js=a("span"),x(Vo.$$.fragment),Xd=l(),Ms=a("span"),Qd=n("Speech2TextForConditionalGeneration"),ga=l(),xe=a("div"),x(Uo.$$.fragment),Zd=l(),Ro=a("p"),ec=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=a("a"),tc=n("PreTrainedModel"),oc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nc=l(),Ho=a("p"),sc=n("This model is also a PyTorch "),Bo=a("a"),ac=n("torch.nn.Module"),rc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ic=l(),Ee=a("div"),x(Jo.$$.fragment),dc=l(),mt=a("p"),cc=n("The "),An=a("a"),lc=n("Speech2TextForConditionalGeneration"),pc=n(" forward method, overrides the "),As=a("code"),hc=n("__call__"),mc=n(" special method."),uc=l(),x(Dt.$$.fragment),fc=l(),x(Nt.$$.fragment),va=l(),ut=a("h2"),Lt=a("a"),Is=a("span"),x(Ko.$$.fragment),_c=l(),Ds=a("span"),gc=n("TFSpeech2TextModel"),Ta=l(),he=a("div"),x(Yo.$$.fragment),vc=l(),Xo=a("p"),Tc=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),In=a("a"),bc=n("TFPreTrainedModel"),xc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kc=l(),Qo=a("p"),yc=n("This model is also a "),Zo=a("a"),wc=n("tf.keras.Model"),Sc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$c=l(),x(Ot.$$.fragment),Ec=l(),qe=a("div"),x(en.$$.fragment),qc=l(),ft=a("p"),zc=n("The "),Dn=a("a"),Fc=n("TFSpeech2TextModel"),Cc=n(" forward method, overrides the "),Ns=a("code"),Pc=n("__call__"),jc=n(" special method."),Mc=l(),x(Gt.$$.fragment),Ac=l(),x(Wt.$$.fragment),ba=l(),_t=a("h2"),Vt=a("a"),Ls=a("span"),x(tn.$$.fragment),Ic=l(),Os=a("span"),Dc=n("TFSpeech2TextForConditionalGeneration"),xa=l(),me=a("div"),x(on.$$.fragment),Nc=l(),nn=a("p"),Lc=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=a("a"),Oc=n("TFPreTrainedModel"),Gc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc=l(),sn=a("p"),Vc=n("This model is also a "),an=a("a"),Uc=n("tf.keras.Model"),Rc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hc=l(),x(Ut.$$.fragment),Bc=l(),ze=a("div"),x(rn.$$.fragment),Jc=l(),gt=a("p"),Kc=n("The "),Ln=a("a"),Yc=n("TFSpeech2TextForConditionalGeneration"),Xc=n(" forward method, overrides the "),Gs=a("code"),Qc=n("__call__"),Zc=n(" special method."),el=l(),x(Rt.$$.fragment),tl=l(),x(Ht.$$.fragment),this.h()},l(o){const f=Xp('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),b=p(o),_=r(o,"H1",{class:!0});var dn=i(_);m=r(dn,"A",{id:!0,class:!0,href:!0});var Ws=i(m);T=r(Ws,"SPAN",{});var Vs=i(T);k(d.$$.fragment,Vs),Vs.forEach(t),Ws.forEach(t),g=p(dn),E=r(dn,"SPAN",{});var Us=i(E);I=s(Us,"Speech2Text"),Us.forEach(t),dn.forEach(t),z=p(o),q=r(o,"H2",{class:!0});var cn=i(q);L=r(cn,"A",{id:!0,class:!0,href:!0});var Rs=i(L);H=r(Rs,"SPAN",{});var Hs=i(H);k(ee.$$.fragment,Hs),Hs.forEach(t),Rs.forEach(t),Ce=p(cn),B=r(cn,"SPAN",{});var Bs=i(B);Pe=s(Bs,"Overview"),Bs.forEach(t),cn.forEach(t),ye=p(o),A=r(o,"P",{});var ke=i(A);J=s(ke,"The Speech2Text model was proposed in "),te=r(ke,"A",{href:!0,rel:!0});var Js=i(te);ve=s(Js,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),Js.forEach(t),j=s(ke,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),M=r(ke,"A",{href:!0,rel:!0});var Ks=i(M);je=s(Ks,"LibriSpeech"),Ks.forEach(t),oe=s(ke,", "),ne=r(ke,"A",{href:!0,rel:!0});var Ys=i(ne);Me=s(Ys,"CoVoST 2"),Ys.forEach(t),se=s(ke,", "),ae=r(ke,"A",{href:!0,rel:!0});var Xs=i(ae);Ae=s(Xs,"MuST-C"),Xs.forEach(t),G=s(ke,"."),ke.forEach(t),we=p(o),O=r(o,"P",{});var On=i(O);Ie=s(On,"This model was contributed by "),re=r(On,"A",{href:!0,rel:!0});var rl=i(re);ie=s(rl,"valhalla"),rl.forEach(t),De=s(On,". The original code can be found "),de=r(On,"A",{href:!0,rel:!0});var il=i(de);K=s(il,"here"),il.forEach(t),Ne=s(On,"."),On.forEach(t),Z=p(o),Y=r(o,"H2",{class:!0});var ya=i(Y);v=r(ya,"A",{id:!0,class:!0,href:!0});var dl=i(v);F=r(dl,"SPAN",{});var cl=i(F);k(X.$$.fragment,cl),cl.forEach(t),dl.forEach(t),Ze=p(ya),Le=r(ya,"SPAN",{});var ll=i(Le);Q=s(ll,"Inference"),ll.forEach(t),ya.forEach(t),Ue=p(o),fe=r(o,"P",{});var wa=i(fe);et=s(wa,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),W=r(wa,"CODE",{});var pl=i(W);ce=s(pl,"generate()"),pl.forEach(t),tt=s(wa," method can be used for inference."),wa.forEach(t),Re=p(o),P=r(o,"P",{});var Ke=i(P);ot=s(Ke,"The "),Se=r(Ke,"A",{href:!0});var hl=i(Se);Oe=s(hl,"Speech2TextFeatureExtractor"),hl.forEach(t),nt=s(Ke,` class is responsible for extracting the log-mel filter-bank
features. The `),pn=r(Ke,"A",{href:!0});var ml=i(pn);or=s(ml,"Speech2TextProcessor"),ml.forEach(t),nr=s(Ke," wraps "),hn=r(Ke,"A",{href:!0});var ul=i(hn);sr=s(ul,"Speech2TextFeatureExtractor"),ul.forEach(t),ar=s(Ke,` and
`),mn=r(Ke,"A",{href:!0});var fl=i(mn);rr=s(fl,"Speech2TextTokenizer"),fl.forEach(t),ir=s(Ke,` into a single instance to both extract the input features and decode the
predicted token ids.`),Ke.forEach(t),ea=p(o),V=r(o,"P",{});var ue=i(V);dr=s(ue,"The feature extractor depends on "),Yn=r(ue,"CODE",{});var _l=i(Yn);cr=s(_l,"torchaudio"),_l.forEach(t),lr=s(ue," and the tokenizer depends on "),Xn=r(ue,"CODE",{});var gl=i(Xn);pr=s(gl,"sentencepiece"),gl.forEach(t),hr=s(ue,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),Qn=r(ue,"CODE",{});var vl=i(Qn);mr=s(vl,'pip install transformers"[speech, sentencepiece]"'),vl.forEach(t),ur=s(ue," or install the packages seperately with "),Zn=r(ue,"CODE",{});var Tl=i(Zn);fr=s(Tl,"pip install torchaudio sentencepiece"),Tl.forEach(t),_r=s(ue,". Also "),es=r(ue,"CODE",{});var bl=i(es);gr=s(bl,"torchaudio"),bl.forEach(t),vr=s(ue," requires the development version of the "),oo=r(ue,"A",{href:!0,rel:!0});var xl=i(oo);Tr=s(xl,"libsndfile"),xl.forEach(t),br=s(ue,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ts=r(ue,"CODE",{});var kl=i(ts);xr=s(kl,"apt install libsndfile1-dev"),kl.forEach(t),ue.forEach(t),ta=p(o),un=r(o,"UL",{});var yl=i(un);os=r(yl,"LI",{});var wl=i(os);kr=s(wl,"ASR and Speech Translation"),wl.forEach(t),yl.forEach(t),oa=p(o),k(no.$$.fragment,o),na=p(o),fn=r(o,"UL",{});var Sl=i(fn);so=r(Sl,"LI",{});var Sa=i(so);ns=r(Sa,"P",{});var $l=i(ns);yr=s($l,"Multilingual speech translation"),$l.forEach(t),wr=p(Sa),le=r(Sa,"P",{});var Fe=i(le);Sr=s(Fe,"For multilingual speech translation models, "),ss=r(Fe,"CODE",{});var El=i(ss);$r=s(El,"eos_token_id"),El.forEach(t),Er=s(Fe," is used as the "),as=r(Fe,"CODE",{});var ql=i(as);qr=s(ql,"decoder_start_token_id"),ql.forEach(t),zr=s(Fe,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),rs=r(Fe,"CODE",{});var zl=i(rs);Fr=s(zl,"forced_bos_token_id"),zl.forEach(t),Cr=s(Fe," parameter to the "),is=r(Fe,"CODE",{});var Fl=i(is);Pr=s(Fl,"generate()"),Fl.forEach(t),jr=s(Fe,` method. The following
example shows how to transate English speech to French text using the `),ds=r(Fe,"EM",{});var Cl=i(ds);Mr=s(Cl,"facebook/s2t-medium-mustc-multilingual-st"),Cl.forEach(t),Ar=s(Fe,`
checkpoint.`),Fe.forEach(t),Sa.forEach(t),Sl.forEach(t),sa=p(o),k(ao.$$.fragment,o),aa=p(o),vt=r(o,"P",{});var $a=i(vt);Ir=s($a,"See the "),ro=r($a,"A",{href:!0,rel:!0});var Pl=i(ro);Dr=s(Pl,"model hub"),Pl.forEach(t),Nr=s($a," to look for Speech2Text checkpoints."),$a.forEach(t),ra=p(o),st=r(o,"H2",{class:!0});var Ea=i(st);Tt=r(Ea,"A",{id:!0,class:!0,href:!0});var jl=i(Tt);cs=r(jl,"SPAN",{});var Ml=i(cs);k(io.$$.fragment,Ml),Ml.forEach(t),jl.forEach(t),Lr=p(Ea),ls=r(Ea,"SPAN",{});var Al=i(ls);Or=s(Al,"Speech2TextConfig"),Al.forEach(t),Ea.forEach(t),ia=p(o),Te=r(o,"DIV",{class:!0});var Bt=i(Te);k(co.$$.fragment,Bt),Gr=p(Bt),at=r(Bt,"P",{});var Gn=i(at);Wr=s(Gn,"This is the configuration class to store the configuration of a "),_n=r(Gn,"A",{href:!0});var Il=i(_n);Vr=s(Il,"Speech2TextModel"),Il.forEach(t),Ur=s(Gn,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),lo=r(Gn,"A",{href:!0,rel:!0});var Dl=i(lo);Rr=s(Dl,"facebook/s2t-small-librispeech-asr"),Dl.forEach(t),Hr=s(Gn," architecture."),Gn.forEach(t),Br=p(Bt),rt=r(Bt,"P",{});var Wn=i(rt);Jr=s(Wn,"Configuration objects inherit from "),gn=r(Wn,"A",{href:!0});var Nl=i(gn);Kr=s(Nl,"PretrainedConfig"),Nl.forEach(t),Yr=s(Wn,` and can be used to control the model outputs. Read the
documentation from `),vn=r(Wn,"A",{href:!0});var Ll=i(vn);Xr=s(Ll,"PretrainedConfig"),Ll.forEach(t),Qr=s(Wn," for more information."),Wn.forEach(t),Zr=p(Bt),k(bt.$$.fragment,Bt),Bt.forEach(t),da=p(o),it=r(o,"H2",{class:!0});var qa=i(it);xt=r(qa,"A",{id:!0,class:!0,href:!0});var Ol=i(xt);ps=r(Ol,"SPAN",{});var Gl=i(ps);k(po.$$.fragment,Gl),Gl.forEach(t),Ol.forEach(t),ei=p(qa),hs=r(qa,"SPAN",{});var Wl=i(hs);ti=s(Wl,"Speech2TextTokenizer"),Wl.forEach(t),qa.forEach(t),ca=p(o),U=r(o,"DIV",{class:!0});var ge=i(U);k(ho.$$.fragment,ge),oi=p(ge),ms=r(ge,"P",{});var Vl=i(ms);ni=s(Vl,"Construct an Speech2Text tokenizer."),Vl.forEach(t),si=p(ge),mo=r(ge,"P",{});var za=i(mo);ai=s(za,"This tokenizer inherits from "),Tn=r(za,"A",{href:!0});var Ul=i(Tn);ri=s(Ul,"PreTrainedTokenizer"),Ul.forEach(t),ii=s(za,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),za.forEach(t),di=p(ge),kt=r(ge,"DIV",{class:!0});var Fa=i(kt);k(uo.$$.fragment,Fa),ci=p(Fa),us=r(Fa,"P",{});var Rl=i(us);li=s(Rl,"Build model inputs from a sequence by appending eos_token_id."),Rl.forEach(t),Fa.forEach(t),pi=p(ge),yt=r(ge,"DIV",{class:!0});var Ca=i(yt);k(fo.$$.fragment,Ca),hi=p(Ca),_o=r(Ca,"P",{});var Pa=i(_o);mi=s(Pa,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fs=r(Pa,"CODE",{});var Hl=i(fs);ui=s(Hl,"prepare_for_model"),Hl.forEach(t),fi=s(Pa," method."),Pa.forEach(t),Ca.forEach(t),_i=p(ge),He=r(ge,"DIV",{class:!0});var Vn=i(He);k(go.$$.fragment,Vn),gi=p(Vn),bn=r(Vn,"P",{});var ol=i(bn);vi=s(ol,"Create the token type IDs corresponding to the sequences passed. "),xn=r(ol,"A",{href:!0});var Bl=i(xn);Ti=s(Bl,`What are token type
IDs?`),Bl.forEach(t),ol.forEach(t),bi=p(Vn),_s=r(Vn,"P",{});var Jl=i(_s);xi=s(Jl,"Should be overridden in a subclass if the model has a special way of building those."),Jl.forEach(t),Vn.forEach(t),ki=p(ge),kn=r(ge,"DIV",{class:!0});var Kl=i(kn);k(vo.$$.fragment,Kl),Kl.forEach(t),ge.forEach(t),la=p(o),dt=r(o,"H2",{class:!0});var ja=i(dt);wt=r(ja,"A",{id:!0,class:!0,href:!0});var Yl=i(wt);gs=r(Yl,"SPAN",{});var Xl=i(gs);k(To.$$.fragment,Xl),Xl.forEach(t),Yl.forEach(t),yi=p(ja),vs=r(ja,"SPAN",{});var Ql=i(vs);wi=s(Ql,"Speech2TextFeatureExtractor"),Ql.forEach(t),ja.forEach(t),pa=p(o),pe=r(o,"DIV",{class:!0});var Ye=i(pe);k(bo.$$.fragment,Ye),Si=p(Ye),Ts=r(Ye,"P",{});var Zl=i(Ts);$i=s(Zl,"Constructs a Speech2Text feature extractor."),Zl.forEach(t),Ei=p(Ye),xo=r(Ye,"P",{});var Ma=i(xo);qi=s(Ma,"This feature extractor inherits from "),yn=r(Ma,"A",{href:!0});var ep=i(yn);zi=s(ep,"Speech2TextFeatureExtractor"),ep.forEach(t),Fi=s(Ma,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ma.forEach(t),Ci=p(Ye),bs=r(Ye,"P",{});var tp=i(bs);Pi=s(tp,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),tp.forEach(t),ji=p(Ye),St=r(Ye,"DIV",{class:!0});var Aa=i(St);k(ko.$$.fragment,Aa),Mi=p(Aa),xs=r(Aa,"P",{});var op=i(xs);Ai=s(op,"Main method to featurize and prepare for the model one or several sequence(s). sequences."),op.forEach(t),Aa.forEach(t),Ye.forEach(t),ha=p(o),ct=r(o,"H2",{class:!0});var Ia=i(ct);$t=r(Ia,"A",{id:!0,class:!0,href:!0});var np=i($t);ks=r(np,"SPAN",{});var sp=i(ks);k(yo.$$.fragment,sp),sp.forEach(t),np.forEach(t),Ii=p(Ia),ys=r(Ia,"SPAN",{});var ap=i(ys);Di=s(ap,"Speech2TextProcessor"),ap.forEach(t),Ia.forEach(t),ma=p(o),D=r(o,"DIV",{class:!0});var R=i(D);k(wo.$$.fragment,R),Ni=p(R),ws=r(R,"P",{});var rp=i(ws);Li=s(rp,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),rp.forEach(t),Oi=p(R),_e=r(R,"P",{});var We=i(_e);wn=r(We,"A",{href:!0});var ip=i(wn);Gi=s(ip,"Speech2TextProcessor"),ip.forEach(t),Wi=s(We," offers all the functionalities of "),Sn=r(We,"A",{href:!0});var dp=i(Sn);Vi=s(dp,"Speech2TextFeatureExtractor"),dp.forEach(t),Ui=s(We,` and
`),$n=r(We,"A",{href:!0});var cp=i($n);Ri=s(cp,"Speech2TextTokenizer"),cp.forEach(t),Hi=s(We,". See the "),So=r(We,"A",{href:!0});var nl=i(So);Ss=r(nl,"STRONG",{});var lp=i(Ss);Bi=s(lp,"call"),lp.forEach(t),Ji=s(nl,"()"),nl.forEach(t),Ki=s(We," and "),En=r(We,"A",{href:!0});var pp=i(En);Yi=s(pp,"decode()"),pp.forEach(t),Xi=s(We,` for more
information.`),We.forEach(t),Qi=p(R),Et=r(R,"DIV",{class:!0});var Da=i(Et);k($o.$$.fragment,Da),Zi=p(Da),Ge=r(Da,"P",{});var Jt=i(Ge);ed=s(Jt,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),Eo=r(Jt,"A",{href:!0});var sl=i(Eo);$s=r(sl,"STRONG",{});var hp=i($s);td=s(hp,"call"),hp.forEach(t),od=s(sl,"()"),sl.forEach(t),nd=s(Jt,` and returns its output. If used in the context
`),qn=r(Jt,"A",{href:!0});var mp=i(qn);sd=s(mp,"as_target_processor()"),mp.forEach(t),ad=s(Jt,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),qo=r(Jt,"A",{href:!0});var al=i(qo);Es=r(al,"STRONG",{});var up=i(Es);rd=s(up,"call"),up.forEach(t),id=s(al,"()"),al.forEach(t),dd=s(Jt,`. Please refer to the doctsring of the above two methods for more
information.`),Jt.forEach(t),Da.forEach(t),cd=p(R),Be=r(R,"DIV",{class:!0});var Un=i(Be);k(zo.$$.fragment,Un),ld=p(Un),qs=r(Un,"P",{});var fp=i(qs);pd=s(fp,"Instantiate a processor associated with a pretrained model."),fp.forEach(t),hd=p(Un),k(qt.$$.fragment,Un),Un.forEach(t),md=p(R),Je=r(R,"DIV",{class:!0});var Rn=i(Je);k(Fo.$$.fragment,Rn),ud=p(Rn),Co=r(Rn,"P",{});var Na=i(Co);fd=s(Na,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),zn=r(Na,"A",{href:!0});var _p=i(zn);_d=s(_p,"from_pretrained()"),_p.forEach(t),gd=s(Na," method."),Na.forEach(t),vd=p(Rn),k(zt.$$.fragment,Rn),Rn.forEach(t),Td=p(R),Ft=r(R,"DIV",{class:!0});var La=i(Ft);k(Po.$$.fragment,La),bd=p(La),jo=r(La,"P",{});var Oa=i(jo);xd=s(Oa,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Fn=r(Oa,"A",{href:!0});var gp=i(Fn);kd=s(gp,"batch_decode()"),gp.forEach(t),yd=s(Oa,`. Please
refer to the docstring of this method for more information.`),Oa.forEach(t),La.forEach(t),wd=p(R),Ct=r(R,"DIV",{class:!0});var Ga=i(Ct);k(Mo.$$.fragment,Ga),Sd=p(Ga),Ao=r(Ga,"P",{});var Wa=i(Ao);$d=s(Wa,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Cn=r(Wa,"A",{href:!0});var vp=i(Cn);Ed=s(vp,"decode()"),vp.forEach(t),qd=s(Wa,`. Please refer
to the docstring of this method for more information.`),Wa.forEach(t),Ga.forEach(t),zd=p(R),Pt=r(R,"DIV",{class:!0});var Va=i(Pt);k(Io.$$.fragment,Va),Fd=p(Va),zs=r(Va,"P",{});var Tp=i(zs);Cd=s(Tp,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text.`),Tp.forEach(t),Va.forEach(t),R.forEach(t),ua=p(o),lt=r(o,"H2",{class:!0});var Ua=i(lt);jt=r(Ua,"A",{id:!0,class:!0,href:!0});var bp=i(jt);Fs=r(bp,"SPAN",{});var xp=i(Fs);k(Do.$$.fragment,xp),xp.forEach(t),bp.forEach(t),Pd=p(Ua),Cs=r(Ua,"SPAN",{});var kp=i(Cs);jd=s(kp,"Speech2TextModel"),kp.forEach(t),Ua.forEach(t),fa=p(o),be=r(o,"DIV",{class:!0});var Kt=i(be);k(No.$$.fragment,Kt),Md=p(Kt),Lo=r(Kt,"P",{});var Ra=i(Lo);Ad=s(Ra,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Pn=r(Ra,"A",{href:!0});var yp=i(Pn);Id=s(yp,"PreTrainedModel"),yp.forEach(t),Dd=s(Ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ra.forEach(t),Nd=p(Kt),Oo=r(Kt,"P",{});var Ha=i(Oo);Ld=s(Ha,"This model is also a PyTorch "),Go=r(Ha,"A",{href:!0,rel:!0});var wp=i(Go);Od=s(wp,"torch.nn.Module"),wp.forEach(t),Gd=s(Ha,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ha.forEach(t),Wd=p(Kt),$e=r(Kt,"DIV",{class:!0});var Yt=i($e);k(Wo.$$.fragment,Yt),Vd=p(Yt),pt=r(Yt,"P",{});var Hn=i(pt);Ud=s(Hn,"The "),jn=r(Hn,"A",{href:!0});var Sp=i(jn);Rd=s(Sp,"Speech2TextModel"),Sp.forEach(t),Hd=s(Hn," forward method, overrides the "),Ps=r(Hn,"CODE",{});var $p=i(Ps);Bd=s($p,"__call__"),$p.forEach(t),Jd=s(Hn," special method."),Hn.forEach(t),Kd=p(Yt),k(Mt.$$.fragment,Yt),Yd=p(Yt),k(At.$$.fragment,Yt),Yt.forEach(t),Kt.forEach(t),_a=p(o),ht=r(o,"H2",{class:!0});var Ba=i(ht);It=r(Ba,"A",{id:!0,class:!0,href:!0});var Ep=i(It);js=r(Ep,"SPAN",{});var qp=i(js);k(Vo.$$.fragment,qp),qp.forEach(t),Ep.forEach(t),Xd=p(Ba),Ms=r(Ba,"SPAN",{});var zp=i(Ms);Qd=s(zp,"Speech2TextForConditionalGeneration"),zp.forEach(t),Ba.forEach(t),ga=p(o),xe=r(o,"DIV",{class:!0});var Xt=i(xe);k(Uo.$$.fragment,Xt),Zd=p(Xt),Ro=r(Xt,"P",{});var Ja=i(Ro);ec=s(Ja,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Mn=r(Ja,"A",{href:!0});var Fp=i(Mn);tc=s(Fp,"PreTrainedModel"),Fp.forEach(t),oc=s(Ja,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ja.forEach(t),nc=p(Xt),Ho=r(Xt,"P",{});var Ka=i(Ho);sc=s(Ka,"This model is also a PyTorch "),Bo=r(Ka,"A",{href:!0,rel:!0});var Cp=i(Bo);ac=s(Cp,"torch.nn.Module"),Cp.forEach(t),rc=s(Ka,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ka.forEach(t),ic=p(Xt),Ee=r(Xt,"DIV",{class:!0});var Qt=i(Ee);k(Jo.$$.fragment,Qt),dc=p(Qt),mt=r(Qt,"P",{});var Bn=i(mt);cc=s(Bn,"The "),An=r(Bn,"A",{href:!0});var Pp=i(An);lc=s(Pp,"Speech2TextForConditionalGeneration"),Pp.forEach(t),pc=s(Bn," forward method, overrides the "),As=r(Bn,"CODE",{});var jp=i(As);hc=s(jp,"__call__"),jp.forEach(t),mc=s(Bn," special method."),Bn.forEach(t),uc=p(Qt),k(Dt.$$.fragment,Qt),fc=p(Qt),k(Nt.$$.fragment,Qt),Qt.forEach(t),Xt.forEach(t),va=p(o),ut=r(o,"H2",{class:!0});var Ya=i(ut);Lt=r(Ya,"A",{id:!0,class:!0,href:!0});var Mp=i(Lt);Is=r(Mp,"SPAN",{});var Ap=i(Is);k(Ko.$$.fragment,Ap),Ap.forEach(t),Mp.forEach(t),_c=p(Ya),Ds=r(Ya,"SPAN",{});var Ip=i(Ds);gc=s(Ip,"TFSpeech2TextModel"),Ip.forEach(t),Ya.forEach(t),Ta=p(o),he=r(o,"DIV",{class:!0});var Xe=i(he);k(Yo.$$.fragment,Xe),vc=p(Xe),Xo=r(Xe,"P",{});var Xa=i(Xo);Tc=s(Xa,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),In=r(Xa,"A",{href:!0});var Dp=i(In);bc=s(Dp,"TFPreTrainedModel"),Dp.forEach(t),xc=s(Xa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xa.forEach(t),kc=p(Xe),Qo=r(Xe,"P",{});var Qa=i(Qo);yc=s(Qa,"This model is also a "),Zo=r(Qa,"A",{href:!0,rel:!0});var Np=i(Zo);wc=s(Np,"tf.keras.Model"),Np.forEach(t),Sc=s(Qa,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qa.forEach(t),$c=p(Xe),k(Ot.$$.fragment,Xe),Ec=p(Xe),qe=r(Xe,"DIV",{class:!0});var Zt=i(qe);k(en.$$.fragment,Zt),qc=p(Zt),ft=r(Zt,"P",{});var Jn=i(ft);zc=s(Jn,"The "),Dn=r(Jn,"A",{href:!0});var Lp=i(Dn);Fc=s(Lp,"TFSpeech2TextModel"),Lp.forEach(t),Cc=s(Jn," forward method, overrides the "),Ns=r(Jn,"CODE",{});var Op=i(Ns);Pc=s(Op,"__call__"),Op.forEach(t),jc=s(Jn," special method."),Jn.forEach(t),Mc=p(Zt),k(Gt.$$.fragment,Zt),Ac=p(Zt),k(Wt.$$.fragment,Zt),Zt.forEach(t),Xe.forEach(t),ba=p(o),_t=r(o,"H2",{class:!0});var Za=i(_t);Vt=r(Za,"A",{id:!0,class:!0,href:!0});var Gp=i(Vt);Ls=r(Gp,"SPAN",{});var Wp=i(Ls);k(tn.$$.fragment,Wp),Wp.forEach(t),Gp.forEach(t),Ic=p(Za),Os=r(Za,"SPAN",{});var Vp=i(Os);Dc=s(Vp,"TFSpeech2TextForConditionalGeneration"),Vp.forEach(t),Za.forEach(t),xa=p(o),me=r(o,"DIV",{class:!0});var Qe=i(me);k(on.$$.fragment,Qe),Nc=p(Qe),nn=r(Qe,"P",{});var er=i(nn);Lc=s(er,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Nn=r(er,"A",{href:!0});var Up=i(Nn);Oc=s(Up,"TFPreTrainedModel"),Up.forEach(t),Gc=s(er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),er.forEach(t),Wc=p(Qe),sn=r(Qe,"P",{});var tr=i(sn);Vc=s(tr,"This model is also a "),an=r(tr,"A",{href:!0,rel:!0});var Rp=i(an);Uc=s(Rp,"tf.keras.Model"),Rp.forEach(t),Rc=s(tr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tr.forEach(t),Hc=p(Qe),k(Ut.$$.fragment,Qe),Bc=p(Qe),ze=r(Qe,"DIV",{class:!0});var eo=i(ze);k(rn.$$.fragment,eo),Jc=p(eo),gt=r(eo,"P",{});var Kn=i(gt);Kc=s(Kn,"The "),Ln=r(Kn,"A",{href:!0});var Hp=i(Ln);Yc=s(Hp,"TFSpeech2TextForConditionalGeneration"),Hp.forEach(t),Xc=s(Kn," forward method, overrides the "),Gs=r(Kn,"CODE",{});var Bp=i(Gs);Qc=s(Bp,"__call__"),Bp.forEach(t),Zc=s(Kn," special method."),Kn.forEach(t),el=p(eo),k(Rt.$$.fragment,eo),tl=p(eo),k(Ht.$$.fragment,eo),eo.forEach(t),Qe.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(mh)),c(m,"id","speech2text"),c(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(m,"href","#speech2text"),c(_,"class","relative group"),c(L,"id","overview"),c(L,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(L,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2010.05171"),c(te,"rel","nofollow"),c(M,"href","http://www.openslr.org/12"),c(M,"rel","nofollow"),c(ne,"href","https://github.com/facebookresearch/covost"),c(ne,"rel","nofollow"),c(ae,"href","https://ict.fbk.eu/must-c/"),c(ae,"rel","nofollow"),c(re,"href","https://huggingface.co/valhalla"),c(re,"rel","nofollow"),c(de,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),c(de,"rel","nofollow"),c(v,"id","inference"),c(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(v,"href","#inference"),c(Y,"class","relative group"),c(Se,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(pn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),c(hn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(mn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),c(oo,"href","http://www.mega-nerd.com/libsndfile/"),c(oo,"rel","nofollow"),c(ro,"href","https://huggingface.co/models?filter=speech_to_text"),c(ro,"rel","nofollow"),c(Tt,"id","transformers.Speech2TextConfig"),c(Tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Tt,"href","#transformers.Speech2TextConfig"),c(st,"class","relative group"),c(_n,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextModel"),c(lo,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),c(lo,"rel","nofollow"),c(gn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(vn,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xt,"id","transformers.Speech2TextTokenizer"),c(xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xt,"href","#transformers.Speech2TextTokenizer"),c(it,"class","relative group"),c(Tn,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xn,"href","../glossary#token-type-ids"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(kn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wt,"id","transformers.Speech2TextFeatureExtractor"),c(wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wt,"href","#transformers.Speech2TextFeatureExtractor"),c(dt,"class","relative group"),c(yn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($t,"id","transformers.Speech2TextProcessor"),c($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($t,"href","#transformers.Speech2TextProcessor"),c(ct,"class","relative group"),c(wn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),c(Sn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),c($n,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),c(So,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),c(En,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),c(Eo,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),c(qn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.as_target_processor"),c(qo,"href","/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),c(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.from_pretrained"),c(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Fn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),c(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Cn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),c(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(jt,"id","transformers.Speech2TextModel"),c(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(jt,"href","#transformers.Speech2TextModel"),c(lt,"class","relative group"),c(Pn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Go,"rel","nofollow"),c(jn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextModel"),c($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(It,"id","transformers.Speech2TextForConditionalGeneration"),c(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(It,"href","#transformers.Speech2TextForConditionalGeneration"),c(ht,"class","relative group"),c(Mn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),c(Bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Bo,"rel","nofollow"),c(An,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),c(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Lt,"id","transformers.TFSpeech2TextModel"),c(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Lt,"href","#transformers.TFSpeech2TextModel"),c(ut,"class","relative group"),c(In,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(Zo,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Zo,"rel","nofollow"),c(Dn,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vt,"id","transformers.TFSpeech2TextForConditionalGeneration"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.TFSpeech2TextForConditionalGeneration"),c(_t,"class","relative group"),c(Nn,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),c(an,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(an,"rel","nofollow"),c(Ln,"href","/docs/transformers/v4.18.0/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,h),u(o,b,f),u(o,_,f),e(_,m),e(m,T),y(d,T,null),e(_,g),e(_,E),e(E,I),u(o,z,f),u(o,q,f),e(q,L),e(L,H),y(ee,H,null),e(q,Ce),e(q,B),e(B,Pe),u(o,ye,f),u(o,A,f),e(A,J),e(A,te),e(te,ve),e(A,j),e(A,M),e(M,je),e(A,oe),e(A,ne),e(ne,Me),e(A,se),e(A,ae),e(ae,Ae),e(A,G),u(o,we,f),u(o,O,f),e(O,Ie),e(O,re),e(re,ie),e(O,De),e(O,de),e(de,K),e(O,Ne),u(o,Z,f),u(o,Y,f),e(Y,v),e(v,F),y(X,F,null),e(Y,Ze),e(Y,Le),e(Le,Q),u(o,Ue,f),u(o,fe,f),e(fe,et),e(fe,W),e(W,ce),e(fe,tt),u(o,Re,f),u(o,P,f),e(P,ot),e(P,Se),e(Se,Oe),e(P,nt),e(P,pn),e(pn,or),e(P,nr),e(P,hn),e(hn,sr),e(P,ar),e(P,mn),e(mn,rr),e(P,ir),u(o,ea,f),u(o,V,f),e(V,dr),e(V,Yn),e(Yn,cr),e(V,lr),e(V,Xn),e(Xn,pr),e(V,hr),e(V,Qn),e(Qn,mr),e(V,ur),e(V,Zn),e(Zn,fr),e(V,_r),e(V,es),e(es,gr),e(V,vr),e(V,oo),e(oo,Tr),e(V,br),e(V,ts),e(ts,xr),u(o,ta,f),u(o,un,f),e(un,os),e(os,kr),u(o,oa,f),y(no,o,f),u(o,na,f),u(o,fn,f),e(fn,so),e(so,ns),e(ns,yr),e(so,wr),e(so,le),e(le,Sr),e(le,ss),e(ss,$r),e(le,Er),e(le,as),e(as,qr),e(le,zr),e(le,rs),e(rs,Fr),e(le,Cr),e(le,is),e(is,Pr),e(le,jr),e(le,ds),e(ds,Mr),e(le,Ar),u(o,sa,f),y(ao,o,f),u(o,aa,f),u(o,vt,f),e(vt,Ir),e(vt,ro),e(ro,Dr),e(vt,Nr),u(o,ra,f),u(o,st,f),e(st,Tt),e(Tt,cs),y(io,cs,null),e(st,Lr),e(st,ls),e(ls,Or),u(o,ia,f),u(o,Te,f),y(co,Te,null),e(Te,Gr),e(Te,at),e(at,Wr),e(at,_n),e(_n,Vr),e(at,Ur),e(at,lo),e(lo,Rr),e(at,Hr),e(Te,Br),e(Te,rt),e(rt,Jr),e(rt,gn),e(gn,Kr),e(rt,Yr),e(rt,vn),e(vn,Xr),e(rt,Qr),e(Te,Zr),y(bt,Te,null),u(o,da,f),u(o,it,f),e(it,xt),e(xt,ps),y(po,ps,null),e(it,ei),e(it,hs),e(hs,ti),u(o,ca,f),u(o,U,f),y(ho,U,null),e(U,oi),e(U,ms),e(ms,ni),e(U,si),e(U,mo),e(mo,ai),e(mo,Tn),e(Tn,ri),e(mo,ii),e(U,di),e(U,kt),y(uo,kt,null),e(kt,ci),e(kt,us),e(us,li),e(U,pi),e(U,yt),y(fo,yt,null),e(yt,hi),e(yt,_o),e(_o,mi),e(_o,fs),e(fs,ui),e(_o,fi),e(U,_i),e(U,He),y(go,He,null),e(He,gi),e(He,bn),e(bn,vi),e(bn,xn),e(xn,Ti),e(He,bi),e(He,_s),e(_s,xi),e(U,ki),e(U,kn),y(vo,kn,null),u(o,la,f),u(o,dt,f),e(dt,wt),e(wt,gs),y(To,gs,null),e(dt,yi),e(dt,vs),e(vs,wi),u(o,pa,f),u(o,pe,f),y(bo,pe,null),e(pe,Si),e(pe,Ts),e(Ts,$i),e(pe,Ei),e(pe,xo),e(xo,qi),e(xo,yn),e(yn,zi),e(xo,Fi),e(pe,Ci),e(pe,bs),e(bs,Pi),e(pe,ji),e(pe,St),y(ko,St,null),e(St,Mi),e(St,xs),e(xs,Ai),u(o,ha,f),u(o,ct,f),e(ct,$t),e($t,ks),y(yo,ks,null),e(ct,Ii),e(ct,ys),e(ys,Di),u(o,ma,f),u(o,D,f),y(wo,D,null),e(D,Ni),e(D,ws),e(ws,Li),e(D,Oi),e(D,_e),e(_e,wn),e(wn,Gi),e(_e,Wi),e(_e,Sn),e(Sn,Vi),e(_e,Ui),e(_e,$n),e($n,Ri),e(_e,Hi),e(_e,So),e(So,Ss),e(Ss,Bi),e(So,Ji),e(_e,Ki),e(_e,En),e(En,Yi),e(_e,Xi),e(D,Qi),e(D,Et),y($o,Et,null),e(Et,Zi),e(Et,Ge),e(Ge,ed),e(Ge,Eo),e(Eo,$s),e($s,td),e(Eo,od),e(Ge,nd),e(Ge,qn),e(qn,sd),e(Ge,ad),e(Ge,qo),e(qo,Es),e(Es,rd),e(qo,id),e(Ge,dd),e(D,cd),e(D,Be),y(zo,Be,null),e(Be,ld),e(Be,qs),e(qs,pd),e(Be,hd),y(qt,Be,null),e(D,md),e(D,Je),y(Fo,Je,null),e(Je,ud),e(Je,Co),e(Co,fd),e(Co,zn),e(zn,_d),e(Co,gd),e(Je,vd),y(zt,Je,null),e(D,Td),e(D,Ft),y(Po,Ft,null),e(Ft,bd),e(Ft,jo),e(jo,xd),e(jo,Fn),e(Fn,kd),e(jo,yd),e(D,wd),e(D,Ct),y(Mo,Ct,null),e(Ct,Sd),e(Ct,Ao),e(Ao,$d),e(Ao,Cn),e(Cn,Ed),e(Ao,qd),e(D,zd),e(D,Pt),y(Io,Pt,null),e(Pt,Fd),e(Pt,zs),e(zs,Cd),u(o,ua,f),u(o,lt,f),e(lt,jt),e(jt,Fs),y(Do,Fs,null),e(lt,Pd),e(lt,Cs),e(Cs,jd),u(o,fa,f),u(o,be,f),y(No,be,null),e(be,Md),e(be,Lo),e(Lo,Ad),e(Lo,Pn),e(Pn,Id),e(Lo,Dd),e(be,Nd),e(be,Oo),e(Oo,Ld),e(Oo,Go),e(Go,Od),e(Oo,Gd),e(be,Wd),e(be,$e),y(Wo,$e,null),e($e,Vd),e($e,pt),e(pt,Ud),e(pt,jn),e(jn,Rd),e(pt,Hd),e(pt,Ps),e(Ps,Bd),e(pt,Jd),e($e,Kd),y(Mt,$e,null),e($e,Yd),y(At,$e,null),u(o,_a,f),u(o,ht,f),e(ht,It),e(It,js),y(Vo,js,null),e(ht,Xd),e(ht,Ms),e(Ms,Qd),u(o,ga,f),u(o,xe,f),y(Uo,xe,null),e(xe,Zd),e(xe,Ro),e(Ro,ec),e(Ro,Mn),e(Mn,tc),e(Ro,oc),e(xe,nc),e(xe,Ho),e(Ho,sc),e(Ho,Bo),e(Bo,ac),e(Ho,rc),e(xe,ic),e(xe,Ee),y(Jo,Ee,null),e(Ee,dc),e(Ee,mt),e(mt,cc),e(mt,An),e(An,lc),e(mt,pc),e(mt,As),e(As,hc),e(mt,mc),e(Ee,uc),y(Dt,Ee,null),e(Ee,fc),y(Nt,Ee,null),u(o,va,f),u(o,ut,f),e(ut,Lt),e(Lt,Is),y(Ko,Is,null),e(ut,_c),e(ut,Ds),e(Ds,gc),u(o,Ta,f),u(o,he,f),y(Yo,he,null),e(he,vc),e(he,Xo),e(Xo,Tc),e(Xo,In),e(In,bc),e(Xo,xc),e(he,kc),e(he,Qo),e(Qo,yc),e(Qo,Zo),e(Zo,wc),e(Qo,Sc),e(he,$c),y(Ot,he,null),e(he,Ec),e(he,qe),y(en,qe,null),e(qe,qc),e(qe,ft),e(ft,zc),e(ft,Dn),e(Dn,Fc),e(ft,Cc),e(ft,Ns),e(Ns,Pc),e(ft,jc),e(qe,Mc),y(Gt,qe,null),e(qe,Ac),y(Wt,qe,null),u(o,ba,f),u(o,_t,f),e(_t,Vt),e(Vt,Ls),y(tn,Ls,null),e(_t,Ic),e(_t,Os),e(Os,Dc),u(o,xa,f),u(o,me,f),y(on,me,null),e(me,Nc),e(me,nn),e(nn,Lc),e(nn,Nn),e(Nn,Oc),e(nn,Gc),e(me,Wc),e(me,sn),e(sn,Vc),e(sn,an),e(an,Uc),e(sn,Rc),e(me,Hc),y(Ut,me,null),e(me,Bc),e(me,ze),y(rn,ze,null),e(ze,Jc),e(ze,gt),e(gt,Kc),e(gt,Ln),e(Ln,Yc),e(gt,Xc),e(gt,Gs),e(Gs,Qc),e(gt,Zc),e(ze,el),y(Rt,ze,null),e(ze,tl),y(Ht,ze,null),ka=!0},p(o,[f]){const dn={};f&2&&(dn.$$scope={dirty:f,ctx:o}),bt.$set(dn);const Ws={};f&2&&(Ws.$$scope={dirty:f,ctx:o}),qt.$set(Ws);const Vs={};f&2&&(Vs.$$scope={dirty:f,ctx:o}),zt.$set(Vs);const Us={};f&2&&(Us.$$scope={dirty:f,ctx:o}),Mt.$set(Us);const cn={};f&2&&(cn.$$scope={dirty:f,ctx:o}),At.$set(cn);const Rs={};f&2&&(Rs.$$scope={dirty:f,ctx:o}),Dt.$set(Rs);const Hs={};f&2&&(Hs.$$scope={dirty:f,ctx:o}),Nt.$set(Hs);const Bs={};f&2&&(Bs.$$scope={dirty:f,ctx:o}),Ot.$set(Bs);const ke={};f&2&&(ke.$$scope={dirty:f,ctx:o}),Gt.$set(ke);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:o}),Wt.$set(Js);const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:o}),Ut.$set(Ks);const Ys={};f&2&&(Ys.$$scope={dirty:f,ctx:o}),Rt.$set(Ys);const Xs={};f&2&&(Xs.$$scope={dirty:f,ctx:o}),Ht.$set(Xs)},i(o){ka||(w(d.$$.fragment,o),w(ee.$$.fragment,o),w(X.$$.fragment,o),w(no.$$.fragment,o),w(ao.$$.fragment,o),w(io.$$.fragment,o),w(co.$$.fragment,o),w(bt.$$.fragment,o),w(po.$$.fragment,o),w(ho.$$.fragment,o),w(uo.$$.fragment,o),w(fo.$$.fragment,o),w(go.$$.fragment,o),w(vo.$$.fragment,o),w(To.$$.fragment,o),w(bo.$$.fragment,o),w(ko.$$.fragment,o),w(yo.$$.fragment,o),w(wo.$$.fragment,o),w($o.$$.fragment,o),w(zo.$$.fragment,o),w(qt.$$.fragment,o),w(Fo.$$.fragment,o),w(zt.$$.fragment,o),w(Po.$$.fragment,o),w(Mo.$$.fragment,o),w(Io.$$.fragment,o),w(Do.$$.fragment,o),w(No.$$.fragment,o),w(Wo.$$.fragment,o),w(Mt.$$.fragment,o),w(At.$$.fragment,o),w(Vo.$$.fragment,o),w(Uo.$$.fragment,o),w(Jo.$$.fragment,o),w(Dt.$$.fragment,o),w(Nt.$$.fragment,o),w(Ko.$$.fragment,o),w(Yo.$$.fragment,o),w(Ot.$$.fragment,o),w(en.$$.fragment,o),w(Gt.$$.fragment,o),w(Wt.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(Ut.$$.fragment,o),w(rn.$$.fragment,o),w(Rt.$$.fragment,o),w(Ht.$$.fragment,o),ka=!0)},o(o){S(d.$$.fragment,o),S(ee.$$.fragment,o),S(X.$$.fragment,o),S(no.$$.fragment,o),S(ao.$$.fragment,o),S(io.$$.fragment,o),S(co.$$.fragment,o),S(bt.$$.fragment,o),S(po.$$.fragment,o),S(ho.$$.fragment,o),S(uo.$$.fragment,o),S(fo.$$.fragment,o),S(go.$$.fragment,o),S(vo.$$.fragment,o),S(To.$$.fragment,o),S(bo.$$.fragment,o),S(ko.$$.fragment,o),S(yo.$$.fragment,o),S(wo.$$.fragment,o),S($o.$$.fragment,o),S(zo.$$.fragment,o),S(qt.$$.fragment,o),S(Fo.$$.fragment,o),S(zt.$$.fragment,o),S(Po.$$.fragment,o),S(Mo.$$.fragment,o),S(Io.$$.fragment,o),S(Do.$$.fragment,o),S(No.$$.fragment,o),S(Wo.$$.fragment,o),S(Mt.$$.fragment,o),S(At.$$.fragment,o),S(Vo.$$.fragment,o),S(Uo.$$.fragment,o),S(Jo.$$.fragment,o),S(Dt.$$.fragment,o),S(Nt.$$.fragment,o),S(Ko.$$.fragment,o),S(Yo.$$.fragment,o),S(Ot.$$.fragment,o),S(en.$$.fragment,o),S(Gt.$$.fragment,o),S(Wt.$$.fragment,o),S(tn.$$.fragment,o),S(on.$$.fragment,o),S(Ut.$$.fragment,o),S(rn.$$.fragment,o),S(Rt.$$.fragment,o),S(Ht.$$.fragment,o),ka=!1},d(o){t(h),o&&t(b),o&&t(_),$(d),o&&t(z),o&&t(q),$(ee),o&&t(ye),o&&t(A),o&&t(we),o&&t(O),o&&t(Z),o&&t(Y),$(X),o&&t(Ue),o&&t(fe),o&&t(Re),o&&t(P),o&&t(ea),o&&t(V),o&&t(ta),o&&t(un),o&&t(oa),$(no,o),o&&t(na),o&&t(fn),o&&t(sa),$(ao,o),o&&t(aa),o&&t(vt),o&&t(ra),o&&t(st),$(io),o&&t(ia),o&&t(Te),$(co),$(bt),o&&t(da),o&&t(it),$(po),o&&t(ca),o&&t(U),$(ho),$(uo),$(fo),$(go),$(vo),o&&t(la),o&&t(dt),$(To),o&&t(pa),o&&t(pe),$(bo),$(ko),o&&t(ha),o&&t(ct),$(yo),o&&t(ma),o&&t(D),$(wo),$($o),$(zo),$(qt),$(Fo),$(zt),$(Po),$(Mo),$(Io),o&&t(ua),o&&t(lt),$(Do),o&&t(fa),o&&t(be),$(No),$(Wo),$(Mt),$(At),o&&t(_a),o&&t(ht),$(Vo),o&&t(ga),o&&t(xe),$(Uo),$(Jo),$(Dt),$(Nt),o&&t(va),o&&t(ut),$(Ko),o&&t(Ta),o&&t(he),$(Yo),$(Ot),$(en),$(Gt),$(Wt),o&&t(ba),o&&t(_t),$(tn),o&&t(xa),o&&t(me),$(on),$(Ut),$(rn),$(Rt),$(Ht)}}}const mh={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function uh(C){return Qp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xh extends Jp{constructor(h){super();Kp(this,h,uh,hh,Yp,{})}}export{xh as default,mh as metadata};
