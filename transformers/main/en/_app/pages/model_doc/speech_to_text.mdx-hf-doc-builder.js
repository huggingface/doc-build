import{S as Op,i as Gp,s as Up,e as a,k as p,w as y,t as n,M as Wp,c as r,d as t,m as h,a as i,x,h as s,b as l,G as e,g as u,y as k,q as w,o as S,B as $,v as Rp,L as la}from"../../chunks/vendor-hf-doc-builder.js";import{T as bo}from"../../chunks/Tip-hf-doc-builder.js";import{D as G}from"../../chunks/Docstring-hf-doc-builder.js";import{C as En}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as st}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as da}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Vp(P){let c,b,_,g,v;return g=new En({props:{code:`from transformers import Speech2TextModel, Speech2TextConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){c=a("p"),b=n("Example:"),_=p(),y(g.$$.fragment)},l(d){c=r(d,"P",{});var m=i(c);b=s(m,"Example:"),m.forEach(t),_=h(d),x(g.$$.fragment,d)},m(d,m){u(d,c,m),e(c,b),u(d,_,m),k(g,d,m),v=!0},p:la,i(d){v||(w(g.$$.fragment,d),v=!0)},o(d){S(g.$$.fragment,d),v=!1},d(d){d&&t(c),d&&t(_),$(g,d)}}}function Hp(P){let c,b,_,g,v,d,m,q;return{c(){c=a("p"),b=n(`This class method is simply calling the feature extractor
`),_=a("a"),g=n("from_pretrained()"),v=n(` and the tokenizer
`),d=a("code"),m=n("from_pretrained"),q=n(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(D){c=r(D,"P",{});var j=i(c);b=s(j,`This class method is simply calling the feature extractor
`),_=r(j,"A",{href:!0});var M=i(_);g=s(M,"from_pretrained()"),M.forEach(t),v=s(j,` and the tokenizer
`),d=r(j,"CODE",{});var I=i(d);m=s(I,"from_pretrained"),I.forEach(t),q=s(j,` methods. Please refer to the docstrings of the
methods above for more information.`),j.forEach(t),this.h()},h(){l(_,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(D,j){u(D,c,j),e(c,b),e(c,_),e(_,g),e(c,v),e(c,d),e(d,m),e(c,q)},d(D){D&&t(c)}}}function Bp(P){let c,b,_,g,v,d,m,q;return{c(){c=a("p"),b=n("This class method is simply calling "),_=a("a"),g=n("save_pretrained()"),v=n(` and
`),d=a("code"),m=n("save_pretrained"),q=n(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(D){c=r(D,"P",{});var j=i(c);b=s(j,"This class method is simply calling "),_=r(j,"A",{href:!0});var M=i(_);g=s(M,"save_pretrained()"),M.forEach(t),v=s(j,` and
`),d=r(j,"CODE",{});var I=i(d);m=s(I,"save_pretrained"),I.forEach(t),q=s(j,`. Please refer to the docstrings of the methods
above for more information.`),j.forEach(t),this.h()},h(){l(_,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(D,j){u(D,c,j),e(c,b),e(c,_),e(_,g),e(c,v),e(c,d),e(d,m),e(c,q)},d(D){D&&t(c)}}}function Kp(P){let c,b,_,g,v;return{c(){c=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=r(d,"P",{});var m=i(c);b=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var q=i(_);g=s(q,"Module"),q.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){u(d,c,m),e(c,b),e(c,_),e(_,g),e(c,v)},d(d){d&&t(c)}}}function Jp(P){let c,b,_,g,v;return g=new En({props:{code:`import torch
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
[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">256</span>]`}}),{c(){c=a("p"),b=n("Example:"),_=p(),y(g.$$.fragment)},l(d){c=r(d,"P",{});var m=i(c);b=s(m,"Example:"),m.forEach(t),_=h(d),x(g.$$.fragment,d)},m(d,m){u(d,c,m),e(c,b),u(d,_,m),k(g,d,m),v=!0},p:la,i(d){v||(w(g.$$.fragment,d),v=!0)},o(d){S(g.$$.fragment,d),v=!1},d(d){d&&t(c),d&&t(_),$(g,d)}}}function Yp(P){let c,b,_,g,v;return{c(){c=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=r(d,"P",{});var m=i(c);b=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var q=i(_);g=s(q,"Module"),q.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){u(d,c,m),e(c,b),e(c,_),e(_,g),e(c,v)},d(d){d&&t(c)}}}function Xp(P){let c,b,_,g,v;return g=new En({props:{code:`import torch
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
<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>`}}),{c(){c=a("p"),b=n("Example:"),_=p(),y(g.$$.fragment)},l(d){c=r(d,"P",{});var m=i(c);b=s(m,"Example:"),m.forEach(t),_=h(d),x(g.$$.fragment,d)},m(d,m){u(d,c,m),e(c,b),u(d,_,m),k(g,d,m),v=!0},p:la,i(d){v||(w(g.$$.fragment,d),v=!0)},o(d){S(g.$$.fragment,d),v=!1},d(d){d&&t(c),d&&t(_),$(g,d)}}}function Qp(P){let c,b,_,g,v,d,m,q,D,j,M,I,ne,E,Ge,Q,Ue,je,A,We,se,ae,Re,re,ie,Ve,de,le,He,ce,Se,N,L,Y,pe,he,Be,me,ue,Ke,U,Pe,W,ee,$e,K,Je,Ee,Z,Me,H,Ye,fe,R,Xe,B,O,Qe;return{c(){c=a("p"),b=n("TensorFlow models and layers in "),_=a("code"),g=n("transformers"),v=n(" accept two formats as input:"),d=p(),m=a("ul"),q=a("li"),D=n("having all inputs as keyword arguments (like PyTorch models), or"),j=p(),M=a("li"),I=n("having all inputs as a list, tuple or dict in the first positional argument."),ne=p(),E=a("p"),Ge=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),Ue=n("model.fit()"),je=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),We=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=a("code"),Re=n("fit()"),re=n(" and "),ie=a("code"),Ve=n("predict()"),de=n(`, such as when creating your own layers or models with
the Keras `),le=a("code"),He=n("Functional"),ce=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Se=p(),N=a("ul"),L=a("li"),Y=n("a single Tensor with "),pe=a("code"),he=n("input_ids"),Be=n(" only and nothing else: "),me=a("code"),ue=n("model(input_ids)"),Ke=p(),U=a("li"),Pe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ee=n("model([input_ids, attention_mask])"),$e=n(" or "),K=a("code"),Je=n("model([input_ids, attention_mask, token_type_ids])"),Ee=p(),Z=a("li"),Me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a("code"),Ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),fe=p(),R=a("p"),Xe=n(`Note that when creating models and layers with
`),B=a("a"),O=n("subclassing"),Qe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(T){c=r(T,"P",{});var F=i(c);b=s(F,"TensorFlow models and layers in "),_=r(F,"CODE",{});var ht=i(_);g=s(ht,"transformers"),ht.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=h(T),m=r(T,"UL",{});var te=i(m);q=r(te,"LI",{});var mt=i(q);D=s(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),j=h(te),M=r(te,"LI",{});var ut=i(M);I=s(ut,"having all inputs as a list, tuple or dict in the first positional argument."),ut.forEach(t),te.forEach(t),ne=h(T),E=r(T,"P",{});var z=i(E);Ge=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(z,"CODE",{});var ft=i(Q);Ue=s(ft,"model.fit()"),ft.forEach(t),je=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var _t=i(A);We=s(_t,"model.fit()"),_t.forEach(t),se=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=r(z,"CODE",{});var Ae=i(ae);Re=s(Ae,"fit()"),Ae.forEach(t),re=s(z," and "),ie=r(z,"CODE",{});var gt=i(ie);Ve=s(gt,"predict()"),gt.forEach(t),de=s(z,`, such as when creating your own layers or models with
the Keras `),le=r(z,"CODE",{});var Tt=i(le);He=s(Tt,"Functional"),Tt.forEach(t),ce=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),Se=h(T),N=r(T,"UL",{});var X=i(N);L=r(X,"LI",{});var C=i(L);Y=s(C,"a single Tensor with "),pe=r(C,"CODE",{});var vt=i(pe);he=s(vt,"input_ids"),vt.forEach(t),Be=s(C," only and nothing else: "),me=r(C,"CODE",{});var Ze=i(me);ue=s(Ze,"model(input_ids)"),Ze.forEach(t),C.forEach(t),Ke=h(X),U=r(X,"LI",{});var _e=i(U);Pe=s(_e,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(_e,"CODE",{});var bt=i(W);ee=s(bt,"model([input_ids, attention_mask])"),bt.forEach(t),$e=s(_e," or "),K=r(_e,"CODE",{});var et=i(K);Je=s(et,"model([input_ids, attention_mask, token_type_ids])"),et.forEach(t),_e.forEach(t),Ee=h(X),Z=r(X,"LI",{});var tt=i(Z);Me=s(tt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=r(tt,"CODE",{});var yt=i(H);Ye=s(yt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),yt.forEach(t),tt.forEach(t),X.forEach(t),fe=h(T),R=r(T,"P",{});var ge=i(R);Xe=s(ge,`Note that when creating models and layers with
`),B=r(ge,"A",{href:!0,rel:!0});var xt=i(B);O=s(xt,"subclassing"),xt.forEach(t),Qe=s(ge,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ge.forEach(t),this.h()},h(){l(B,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),l(B,"rel","nofollow")},m(T,F){u(T,c,F),e(c,b),e(c,_),e(_,g),e(c,v),u(T,d,F),u(T,m,F),e(m,q),e(q,D),e(m,j),e(m,M),e(M,I),u(T,ne,F),u(T,E,F),e(E,Ge),e(E,Q),e(Q,Ue),e(E,je),e(E,A),e(A,We),e(E,se),e(E,ae),e(ae,Re),e(E,re),e(E,ie),e(ie,Ve),e(E,de),e(E,le),e(le,He),e(E,ce),u(T,Se,F),u(T,N,F),e(N,L),e(L,Y),e(L,pe),e(pe,he),e(L,Be),e(L,me),e(me,ue),e(N,Ke),e(N,U),e(U,Pe),e(U,W),e(W,ee),e(U,$e),e(U,K),e(K,Je),e(N,Ee),e(N,Z),e(Z,Me),e(Z,H),e(H,Ye),u(T,fe,F),u(T,R,F),e(R,Xe),e(R,B),e(B,O),e(R,Qe)},d(T){T&&t(c),T&&t(d),T&&t(m),T&&t(ne),T&&t(E),T&&t(Se),T&&t(N),T&&t(fe),T&&t(R)}}}function Zp(P){let c,b,_,g,v;return{c(){c=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=r(d,"P",{});var m=i(c);b=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var q=i(_);g=s(q,"Module"),q.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){u(d,c,m),e(c,b),e(c,_),e(_,g),e(c,v)},d(d){d&&t(c)}}}function eh(P){let c,b,_,g,v;return g=new En({props:{code:`from transformers import Speech2TextTokenizer, TFSpeech2TextModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){c=a("p"),b=n("Example:"),_=p(),y(g.$$.fragment)},l(d){c=r(d,"P",{});var m=i(c);b=s(m,"Example:"),m.forEach(t),_=h(d),x(g.$$.fragment,d)},m(d,m){u(d,c,m),e(c,b),u(d,_,m),k(g,d,m),v=!0},p:la,i(d){v||(w(g.$$.fragment,d),v=!0)},o(d){S(g.$$.fragment,d),v=!1},d(d){d&&t(c),d&&t(_),$(g,d)}}}function th(P){let c,b,_,g,v,d,m,q,D,j,M,I,ne,E,Ge,Q,Ue,je,A,We,se,ae,Re,re,ie,Ve,de,le,He,ce,Se,N,L,Y,pe,he,Be,me,ue,Ke,U,Pe,W,ee,$e,K,Je,Ee,Z,Me,H,Ye,fe,R,Xe,B,O,Qe;return{c(){c=a("p"),b=n("TensorFlow models and layers in "),_=a("code"),g=n("transformers"),v=n(" accept two formats as input:"),d=p(),m=a("ul"),q=a("li"),D=n("having all inputs as keyword arguments (like PyTorch models), or"),j=p(),M=a("li"),I=n("having all inputs as a list, tuple or dict in the first positional argument."),ne=p(),E=a("p"),Ge=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),Ue=n("model.fit()"),je=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=a("code"),We=n("model.fit()"),se=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=a("code"),Re=n("fit()"),re=n(" and "),ie=a("code"),Ve=n("predict()"),de=n(`, such as when creating your own layers or models with
the Keras `),le=a("code"),He=n("Functional"),ce=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Se=p(),N=a("ul"),L=a("li"),Y=n("a single Tensor with "),pe=a("code"),he=n("input_ids"),Be=n(" only and nothing else: "),me=a("code"),ue=n("model(input_ids)"),Ke=p(),U=a("li"),Pe=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ee=n("model([input_ids, attention_mask])"),$e=n(" or "),K=a("code"),Je=n("model([input_ids, attention_mask, token_type_ids])"),Ee=p(),Z=a("li"),Me=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=a("code"),Ye=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),fe=p(),R=a("p"),Xe=n(`Note that when creating models and layers with
`),B=a("a"),O=n("subclassing"),Qe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(T){c=r(T,"P",{});var F=i(c);b=s(F,"TensorFlow models and layers in "),_=r(F,"CODE",{});var ht=i(_);g=s(ht,"transformers"),ht.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=h(T),m=r(T,"UL",{});var te=i(m);q=r(te,"LI",{});var mt=i(q);D=s(mt,"having all inputs as keyword arguments (like PyTorch models), or"),mt.forEach(t),j=h(te),M=r(te,"LI",{});var ut=i(M);I=s(ut,"having all inputs as a list, tuple or dict in the first positional argument."),ut.forEach(t),te.forEach(t),ne=h(T),E=r(T,"P",{});var z=i(E);Ge=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(z,"CODE",{});var ft=i(Q);Ue=s(ft,"model.fit()"),ft.forEach(t),je=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),A=r(z,"CODE",{});var _t=i(A);We=s(_t,"model.fit()"),_t.forEach(t),se=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),ae=r(z,"CODE",{});var Ae=i(ae);Re=s(Ae,"fit()"),Ae.forEach(t),re=s(z," and "),ie=r(z,"CODE",{});var gt=i(ie);Ve=s(gt,"predict()"),gt.forEach(t),de=s(z,`, such as when creating your own layers or models with
the Keras `),le=r(z,"CODE",{});var Tt=i(le);He=s(Tt,"Functional"),Tt.forEach(t),ce=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),Se=h(T),N=r(T,"UL",{});var X=i(N);L=r(X,"LI",{});var C=i(L);Y=s(C,"a single Tensor with "),pe=r(C,"CODE",{});var vt=i(pe);he=s(vt,"input_ids"),vt.forEach(t),Be=s(C," only and nothing else: "),me=r(C,"CODE",{});var Ze=i(me);ue=s(Ze,"model(input_ids)"),Ze.forEach(t),C.forEach(t),Ke=h(X),U=r(X,"LI",{});var _e=i(U);Pe=s(_e,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(_e,"CODE",{});var bt=i(W);ee=s(bt,"model([input_ids, attention_mask])"),bt.forEach(t),$e=s(_e," or "),K=r(_e,"CODE",{});var et=i(K);Je=s(et,"model([input_ids, attention_mask, token_type_ids])"),et.forEach(t),_e.forEach(t),Ee=h(X),Z=r(X,"LI",{});var tt=i(Z);Me=s(tt,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),H=r(tt,"CODE",{});var yt=i(H);Ye=s(yt,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),yt.forEach(t),tt.forEach(t),X.forEach(t),fe=h(T),R=r(T,"P",{});var ge=i(R);Xe=s(ge,`Note that when creating models and layers with
`),B=r(ge,"A",{href:!0,rel:!0});var xt=i(B);O=s(xt,"subclassing"),xt.forEach(t),Qe=s(ge,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ge.forEach(t),this.h()},h(){l(B,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),l(B,"rel","nofollow")},m(T,F){u(T,c,F),e(c,b),e(c,_),e(_,g),e(c,v),u(T,d,F),u(T,m,F),e(m,q),e(q,D),e(m,j),e(m,M),e(M,I),u(T,ne,F),u(T,E,F),e(E,Ge),e(E,Q),e(Q,Ue),e(E,je),e(E,A),e(A,We),e(E,se),e(E,ae),e(ae,Re),e(E,re),e(E,ie),e(ie,Ve),e(E,de),e(E,le),e(le,He),e(E,ce),u(T,Se,F),u(T,N,F),e(N,L),e(L,Y),e(L,pe),e(pe,he),e(L,Be),e(L,me),e(me,ue),e(N,Ke),e(N,U),e(U,Pe),e(U,W),e(W,ee),e(U,$e),e(U,K),e(K,Je),e(N,Ee),e(N,Z),e(Z,Me),e(Z,H),e(H,Ye),u(T,fe,F),u(T,R,F),e(R,Xe),e(R,B),e(B,O),e(R,Qe)},d(T){T&&t(c),T&&t(d),T&&t(m),T&&t(ne),T&&t(E),T&&t(Se),T&&t(N),T&&t(fe),T&&t(R)}}}function oh(P){let c,b,_,g,v;return{c(){c=a("p"),b=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),_=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){c=r(d,"P",{});var m=i(c);b=s(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),_=r(m,"CODE",{});var q=i(_);g=s(q,"Module"),q.forEach(t),v=s(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){u(d,c,m),e(c,b),e(c,_),e(_,g),e(c,v)},d(d){d&&t(c)}}}function nh(P){let c,b,_,g,v;return g=new En({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),{c(){c=a("p"),b=n("Example:"),_=p(),y(g.$$.fragment)},l(d){c=r(d,"P",{});var m=i(c);b=s(m,"Example:"),m.forEach(t),_=h(d),x(g.$$.fragment,d)},m(d,m){u(d,c,m),e(c,b),u(d,_,m),k(g,d,m),v=!0},p:la,i(d){v||(w(g.$$.fragment,d),v=!0)},o(d){S(g.$$.fragment,d),v=!1},d(d){d&&t(c),d&&t(_),$(g,d)}}}function sh(P){let c,b,_,g,v,d,m,q,D,j,M,I,ne,E,Ge,Q,Ue,je,A,We,se,ae,Re,re,ie,Ve,de,le,He,ce,Se,N,L,Y,pe,he,Be,me,ue,Ke,U,Pe,W,ee,$e,K,Je,Ee,Z,Me,H,Ye,fe,R,Xe,B,O,Qe,T,F,ht,te,mt,ut,z,ft,_t,Ae,gt,Tt,X,C,vt,Ze,_e,bt,et,tt,yt,ge,xt,cr,ls,pr,hr,cs,mr,ur,yo,fr,_r,ps,gr,ca,qn,hs,Tr,pa,xo,ha,Fn,ko,ms,vr,br,Te,yr,us,xr,kr,fs,wr,Sr,_s,$r,Er,gs,qr,Fr,Ts,zr,Cr,ma,wo,ua,Dt,jr,So,Pr,Mr,fa,kt,It,vs,$o,Ar,bs,Nr,_a,qe,Eo,Dr,wt,Ir,zn,Lr,Or,qo,Gr,Ur,Wr,St,Rr,Cn,Vr,Hr,jn,Br,Kr,Jr,Lt,ga,$t,Ot,ys,Fo,Yr,xs,Xr,Ta,J,zo,Qr,ks,Zr,ei,Co,ti,Pn,oi,ni,si,Gt,jo,ai,ws,ri,ii,Ut,Po,di,Mo,li,Ss,ci,pi,hi,at,Ao,mi,Mn,ui,An,fi,_i,$s,gi,Ti,Nn,No,va,Et,Wt,Es,Do,vi,qs,bi,ba,ve,Io,yi,Fs,xi,ki,Lo,wi,Dn,Si,$i,Ei,zs,qi,Fi,Rt,Oo,zi,Cs,Ci,ya,qt,Vt,js,Go,ji,Ps,Pi,xa,V,Uo,Mi,Ms,Ai,Ni,ke,In,Di,Ii,Ln,Li,Oi,On,Gi,Ui,Wo,As,Wi,Ri,Vi,Gn,Hi,Bi,Ki,Ht,Ro,Ji,ot,Yi,Vo,Ns,Xi,Qi,Zi,Ds,ed,td,Ho,Is,od,nd,sd,ad,rt,Bo,rd,Ls,id,dd,Bt,ld,it,Ko,cd,Jo,pd,Un,hd,md,ud,Kt,fd,Jt,Yo,_d,Xo,gd,Wn,Td,vd,bd,Yt,Qo,yd,Zo,xd,Rn,kd,wd,ka,Ft,Xt,Os,en,Sd,Gs,$d,wa,Fe,tn,Ed,on,qd,Vn,Fd,zd,Cd,nn,jd,sn,Pd,Md,Ad,Ne,an,Nd,zt,Dd,Hn,Id,Ld,Us,Od,Gd,Ud,Qt,Wd,Zt,Sa,Ct,eo,Ws,rn,Rd,Rs,Vd,$a,ze,dn,Hd,ln,Bd,Bn,Kd,Jd,Yd,cn,Xd,pn,Qd,Zd,el,De,hn,tl,jt,ol,Kn,nl,sl,Vs,al,rl,il,to,dl,oo,Ea,Pt,no,Hs,mn,ll,Bs,cl,qa,be,un,pl,fn,hl,Jn,ml,ul,fl,_n,_l,gn,gl,Tl,vl,so,bl,Ie,Tn,yl,Mt,xl,Yn,kl,wl,Ks,Sl,$l,El,ao,ql,ro,Fa,At,io,Js,vn,Fl,Ys,zl,za,ye,bn,Cl,yn,jl,Xn,Pl,Ml,Al,xn,Nl,kn,Dl,Il,Ll,lo,Ol,Le,wn,Gl,Nt,Ul,Qn,Wl,Rl,Xs,Vl,Hl,Bl,co,Kl,po,Ca;return d=new st({}),E=new st({}),K=new st({}),xo=new En({props:{code:`import torch
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
[<span class="hljs-string">&#x27;mister quilter is the apostle of the middle classes and we are glad to welcome his gospel&#x27;</span>]`}}),wo=new En({props:{code:`import torch
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
[<span class="hljs-string">&quot;&lt;lang:fr&gt; (Vid\xE9o) Si M. Kilder est l&#x27;apossible des classes moyennes, et nous sommes heureux d&#x27;\xEAtre accueillis dans son \xE9vangile.&quot;</span>]`}}),$o=new st({}),Eo=new G({props:{name:"class transformers.Speech2TextConfig",anchor:"transformers.Speech2TextConfig",parameters:[{name:"vocab_size",val:" = 10000"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 4"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"num_conv_layers",val:" = 2"},{name:"conv_kernel_sizes",val:" = (5, 5)"},{name:"conv_channels",val:" = 1024"},{name:"input_feat_per_channel",val:" = 80"},{name:"input_channels",val:" = 1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
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
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.Speech2TextConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.Speech2TextConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.Speech2TextConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
An integer specifying number of input channels of the input feature vector.`,name:"input_channels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/configuration_speech_to_text.py#L31"}}),Lt=new da({props:{anchor:"transformers.Speech2TextConfig.example",$$slots:{default:[Vp]},$$scope:{ctx:P}}}),Fo=new st({}),zo=new G({props:{name:"class transformers.Speech2TextTokenizer",anchor:"transformers.Speech2TextTokenizer",parameters:[{name:"vocab_file",val:""},{name:"spm_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_upper_case",val:" = False"},{name:"do_lower_case",val:" = False"},{name:"tgt_lang",val:" = None"},{name:"lang_codes",val:" = None"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L59"}}),jo=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.Speech2TextTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L199"}}),Po=new G({props:{name:"get_special_tokens_mask",anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.Speech2TextTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L206",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ao=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.Speech2TextTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/tokenization_utils_base.py#L2983",returnDescription:`
<p>The token type ids.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),No=new G({props:{name:"save_vocabulary",anchor:"transformers.Speech2TextTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/tokenization_speech_to_text.py#L255"}}),Do=new st({}),Io=new G({props:{name:"class transformers.Speech2TextFeatureExtractor",anchor:"transformers.Speech2TextFeatureExtractor",parameters:[{name:"feature_size",val:" = 80"},{name:"sampling_rate",val:" = 16000"},{name:"num_mel_bins",val:" = 80"},{name:"padding_value",val:" = 0.0"},{name:"do_ceptral_normalize",val:" = True"},{name:"normalize_means",val:" = True"},{name:"normalize_vars",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.feature_size",description:`<strong>feature_size</strong> (<code>int</code>, defaults to 80) &#x2014;
The feature dimension of the extracted features.`,name:"feature_size"},{anchor:"transformers.Speech2TextFeatureExtractor.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, defaults to 16000) &#x2014;
The sampling rate at which the audio files should be digitalized expressed in Hertz per second (Hz).`,name:"sampling_rate"},{anchor:"transformers.Speech2TextFeatureExtractor.num_mel_bins",description:`<strong>num_mel_bins</strong> (<code>int</code>, defaults to 80) &#x2014;
Number of Mel-frequency bins.`,name:"num_mel_bins"},{anchor:"transformers.Speech2TextFeatureExtractor.padding_value",description:`<strong>padding_value</strong> (<code>float</code>, defaults to 0.0) &#x2014;
The value that is used to fill the padding vectors.`,name:"padding_value"},{anchor:"transformers.Speech2TextFeatureExtractor.do_ceptral_normalize",description:`<strong>do_ceptral_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply utterance-level cepstral mean and variance normalization to extracted features.`,name:"do_ceptral_normalize"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_means",description:`<strong>normalize_means</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to zero-mean normalize the extracted features.`,name:"normalize_means"},{anchor:"transformers.Speech2TextFeatureExtractor.normalize_vars",description:`<strong>normalize_vars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to unit-variance normalize the extracted features.`,name:"normalize_vars"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L33"}}),Oo=new G({props:{name:"__call__",anchor:"transformers.Speech2TextFeatureExtractor.__call__",parameters:[{name:"raw_speech",val:": typing.Union[numpy.ndarray, typing.List[float], typing.List[numpy.ndarray], typing.List[typing.List[float]]]"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"truncation",val:": bool = False"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"sampling_rate",val:": typing.Optional[int] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextFeatureExtractor.__call__.raw_speech",description:`<strong>raw_speech</strong> (<code>np.ndarray</code>, <code>List[float]</code>, <code>List[np.ndarray]</code>, <code>List[List[float]]</code>) &#x2014;
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
The value that is used to fill the padding values / vectors.`,name:"padding_value"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/feature_extraction_speech_to_text.py#L126"}}),Go=new st({}),Uo=new G({props:{name:"class transformers.Speech2TextProcessor",anchor:"transformers.Speech2TextProcessor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>Speech2TextFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor">Speech2TextFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2TextProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2TextTokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L24"}}),Ro=new G({props:{name:"__call__",anchor:"transformers.Speech2TextProcessor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L47"}}),Bo=new G({props:{name:"from_pretrained",anchor:"transformers.Speech2TextProcessor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L152"}}),Bt=new bo({props:{$$slots:{default:[Hp]},$$scope:{ctx:P}}}),Ko=new G({props:{name:"save_pretrained",anchor:"transformers.Speech2TextProcessor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2TextProcessor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2TextProcessor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).
kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/processing_utils.py#L94"}}),Kt=new bo({props:{$$slots:{default:[Bp]},$$scope:{ctx:P}}}),Yo=new G({props:{name:"batch_decode",anchor:"transformers.Speech2TextProcessor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L85"}}),Qo=new G({props:{name:"decode",anchor:"transformers.Speech2TextProcessor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/processing_speech_to_text.py#L92"}}),en=new st({}),tn=new G({props:{name:"class transformers.Speech2TextModel",anchor:"transformers.Speech2TextModel",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1121"}}),an=new G({props:{name:"forward",anchor:"transformers.Speech2TextModel.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextModel.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
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
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Qt=new bo({props:{$$slots:{default:[Kp]},$$scope:{ctx:P}}}),Zt=new da({props:{anchor:"transformers.Speech2TextModel.forward.example",$$slots:{default:[Jp]},$$scope:{ctx:P}}}),rn=new st({}),dn=new G({props:{name:"class transformers.Speech2TextForConditionalGeneration",anchor:"transformers.Speech2TextForConditionalGeneration",parameters:[{name:"config",val:": Speech2TextConfig"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_speech_to_text.py#L1252"}}),hn=new G({props:{name:"forward",anchor:"transformers.Speech2TextForConditionalGeneration.forward",parameters:[{name:"input_features",val:" = None"},{name:"attention_mask",val:" = None"},{name:"decoder_input_ids",val:" = None"},{name:"decoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"decoder_head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"encoder_outputs",val:" = None"},{name:"past_key_values",val:" = None"},{name:"decoder_inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2TextForConditionalGeneration.forward.input_features",description:`<strong>input_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
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
<p>Indices can be obtained using <code>SpeechToTextTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),to=new bo({props:{$$slots:{default:[Yp]},$$scope:{ctx:P}}}),oo=new da({props:{anchor:"transformers.Speech2TextForConditionalGeneration.forward.example",$$slots:{default:[Xp]},$$scope:{ctx:P}}}),mn=new st({}),un=new G({props:{name:"class transformers.TFSpeech2TextModel",anchor:"transformers.TFSpeech2TextModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1236"}}),so=new bo({props:{$$slots:{default:[Qp]},$$scope:{ctx:P}}}),Tn=new G({props:{name:"call",anchor:"transformers.TFSpeech2TextModel.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextModel.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1248",returnDescription:`
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
`}}),ao=new bo({props:{$$slots:{default:[Zp]},$$scope:{ctx:P}}}),ro=new da({props:{anchor:"transformers.TFSpeech2TextModel.call.example",$$slots:{default:[eh]},$$scope:{ctx:P}}}),vn=new st({}),bn=new G({props:{name:"class transformers.TFSpeech2TextForConditionalGeneration",anchor:"transformers.TFSpeech2TextForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextConfig">Speech2TextConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1319"}}),lo=new bo({props:{$$slots:{default:[th]},$$scope:{ctx:P}}}),wn=new G({props:{name:"call",anchor:"transformers.TFSpeech2TextForConditionalGeneration.call",parameters:[{name:"input_features",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"decoder_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cross_attn_head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_outputs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"decoder_inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.input_features",description:`<strong>input_features</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, feature_size)</code>) &#x2014;
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
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer">Speech2TextTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/speech_to_text/modeling_tf_speech_to_text.py#L1343",returnDescription:`
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
`}}),co=new bo({props:{$$slots:{default:[oh]},$$scope:{ctx:P}}}),po=new da({props:{anchor:"transformers.TFSpeech2TextForConditionalGeneration.call.example",$$slots:{default:[nh]},$$scope:{ctx:P}}}),{c(){c=a("meta"),b=p(),_=a("h1"),g=a("a"),v=a("span"),y(d.$$.fragment),m=p(),q=a("span"),D=n("Speech2Text"),j=p(),M=a("h2"),I=a("a"),ne=a("span"),y(E.$$.fragment),Ge=p(),Q=a("span"),Ue=n("Overview"),je=p(),A=a("p"),We=n("The Speech2Text model was proposed in "),se=a("a"),ae=n("fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),Re=n(` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),re=a("a"),ie=n("LibriSpeech"),Ve=n(", "),de=a("a"),le=n("CoVoST 2"),He=n(", "),ce=a("a"),Se=n("MuST-C"),N=n("."),L=p(),Y=a("p"),pe=n("This model was contributed by "),he=a("a"),Be=n("valhalla"),me=n(". The original code can be found "),ue=a("a"),Ke=n("here"),U=n("."),Pe=p(),W=a("h2"),ee=a("a"),$e=a("span"),y(K.$$.fragment),Je=p(),Ee=a("span"),Z=n("Inference"),Me=p(),H=a("p"),Ye=n(`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),fe=a("code"),R=n("generate()"),Xe=n(" method can be used for inference."),B=p(),O=a("p"),Qe=n("The "),T=a("a"),F=n("Speech2TextFeatureExtractor"),ht=n(` class is responsible for extracting the log-mel filter-bank
features. The `),te=a("a"),mt=n("Speech2TextProcessor"),ut=n(" wraps "),z=a("a"),ft=n("Speech2TextFeatureExtractor"),_t=n(` and
`),Ae=a("a"),gt=n("Speech2TextTokenizer"),Tt=n(` into a single instance to both extract the input features and decode the
predicted token ids.`),X=p(),C=a("p"),vt=n("The feature extractor depends on "),Ze=a("code"),_e=n("torchaudio"),bt=n(" and the tokenizer depends on "),et=a("code"),tt=n("sentencepiece"),yt=n(` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),ge=a("code"),xt=n('pip install transformers"[speech, sentencepiece]"'),cr=n(" or install the packages separately with "),ls=a("code"),pr=n("pip install torchaudio sentencepiece"),hr=n(". Also "),cs=a("code"),mr=n("torchaudio"),ur=n(" requires the development version of the "),yo=a("a"),fr=n("libsndfile"),_r=n(` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ps=a("code"),gr=n("apt install libsndfile1-dev"),ca=p(),qn=a("ul"),hs=a("li"),Tr=n("ASR and Speech Translation"),pa=p(),y(xo.$$.fragment),ha=p(),Fn=a("ul"),ko=a("li"),ms=a("p"),vr=n("Multilingual speech translation"),br=p(),Te=a("p"),yr=n("For multilingual speech translation models, "),us=a("code"),xr=n("eos_token_id"),kr=n(" is used as the "),fs=a("code"),wr=n("decoder_start_token_id"),Sr=n(` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),_s=a("code"),$r=n("forced_bos_token_id"),Er=n(" parameter to the "),gs=a("code"),qr=n("generate()"),Fr=n(` method. The following
example shows how to transate English speech to French text using the `),Ts=a("em"),zr=n("facebook/s2t-medium-mustc-multilingual-st"),Cr=n(`
checkpoint.`),ma=p(),y(wo.$$.fragment),ua=p(),Dt=a("p"),jr=n("See the "),So=a("a"),Pr=n("model hub"),Mr=n(" to look for Speech2Text checkpoints."),fa=p(),kt=a("h2"),It=a("a"),vs=a("span"),y($o.$$.fragment),Ar=p(),bs=a("span"),Nr=n("Speech2TextConfig"),_a=p(),qe=a("div"),y(Eo.$$.fragment),Dr=p(),wt=a("p"),Ir=n("This is the configuration class to store the configuration of a "),zn=a("a"),Lr=n("Speech2TextModel"),Or=n(`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),qo=a("a"),Gr=n("facebook/s2t-small-librispeech-asr"),Ur=n(" architecture."),Wr=p(),St=a("p"),Rr=n("Configuration objects inherit from "),Cn=a("a"),Vr=n("PretrainedConfig"),Hr=n(` and can be used to control the model outputs. Read the
documentation from `),jn=a("a"),Br=n("PretrainedConfig"),Kr=n(" for more information."),Jr=p(),y(Lt.$$.fragment),ga=p(),$t=a("h2"),Ot=a("a"),ys=a("span"),y(Fo.$$.fragment),Yr=p(),xs=a("span"),Xr=n("Speech2TextTokenizer"),Ta=p(),J=a("div"),y(zo.$$.fragment),Qr=p(),ks=a("p"),Zr=n("Construct an Speech2Text tokenizer."),ei=p(),Co=a("p"),ti=n("This tokenizer inherits from "),Pn=a("a"),oi=n("PreTrainedTokenizer"),ni=n(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),si=p(),Gt=a("div"),y(jo.$$.fragment),ai=p(),ws=a("p"),ri=n("Build model inputs from a sequence by appending eos_token_id."),ii=p(),Ut=a("div"),y(Po.$$.fragment),di=p(),Mo=a("p"),li=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ss=a("code"),ci=n("prepare_for_model"),pi=n(" method."),hi=p(),at=a("div"),y(Ao.$$.fragment),mi=p(),Mn=a("p"),ui=n("Create the token type IDs corresponding to the sequences passed. "),An=a("a"),fi=n(`What are token type
IDs?`),_i=p(),$s=a("p"),gi=n("Should be overridden in a subclass if the model has a special way of building those."),Ti=p(),Nn=a("div"),y(No.$$.fragment),va=p(),Et=a("h2"),Wt=a("a"),Es=a("span"),y(Do.$$.fragment),vi=p(),qs=a("span"),bi=n("Speech2TextFeatureExtractor"),ba=p(),ve=a("div"),y(Io.$$.fragment),yi=p(),Fs=a("p"),xi=n("Constructs a Speech2Text feature extractor."),ki=p(),Lo=a("p"),wi=n("This feature extractor inherits from "),Dn=a("a"),Si=n("Speech2TextFeatureExtractor"),$i=n(` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Ei=p(),zs=a("p"),qi=n(`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Fi=p(),Rt=a("div"),y(Oo.$$.fragment),zi=p(),Cs=a("p"),Ci=n("Main method to featurize and prepare for the model one or several sequence(s)."),ya=p(),qt=a("h2"),Vt=a("a"),js=a("span"),y(Go.$$.fragment),ji=p(),Ps=a("span"),Pi=n("Speech2TextProcessor"),xa=p(),V=a("div"),y(Uo.$$.fragment),Mi=p(),Ms=a("p"),Ai=n(`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Ni=p(),ke=a("p"),In=a("a"),Di=n("Speech2TextProcessor"),Ii=n(" offers all the functionalities of "),Ln=a("a"),Li=n("Speech2TextFeatureExtractor"),Oi=n(` and
`),On=a("a"),Gi=n("Speech2TextTokenizer"),Ui=n(". See the "),Wo=a("a"),As=a("strong"),Wi=n("call"),Ri=n("()"),Vi=n(" and "),Gn=a("a"),Hi=n("decode()"),Bi=n(` for more
information.`),Ki=p(),Ht=a("div"),y(Ro.$$.fragment),Ji=p(),ot=a("p"),Yi=n(`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),Vo=a("a"),Ns=a("strong"),Xi=n("call"),Qi=n("()"),Zi=n(` and returns its output. If used in the context
`),Ds=a("code"),ed=n("as_target_processor()"),td=n(` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),Ho=a("a"),Is=a("strong"),od=n("call"),nd=n("()"),sd=n(`. Please refer to the doctsring of the above two methods for more
information.`),ad=p(),rt=a("div"),y(Bo.$$.fragment),rd=p(),Ls=a("p"),id=n("Instantiate a processor associated with a pretrained model."),dd=p(),y(Bt.$$.fragment),ld=p(),it=a("div"),y(Ko.$$.fragment),cd=p(),Jo=a("p"),pd=n(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Un=a("a"),hd=n("from_pretrained()"),md=n(" method."),ud=p(),y(Kt.$$.fragment),fd=p(),Jt=a("div"),y(Yo.$$.fragment),_d=p(),Xo=a("p"),gd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Wn=a("a"),Td=n("batch_decode()"),vd=n(`. Please
refer to the docstring of this method for more information.`),bd=p(),Yt=a("div"),y(Qo.$$.fragment),yd=p(),Zo=a("p"),xd=n("This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Rn=a("a"),kd=n("decode()"),wd=n(`. Please refer
to the docstring of this method for more information.`),ka=p(),Ft=a("h2"),Xt=a("a"),Os=a("span"),y(en.$$.fragment),Sd=p(),Gs=a("span"),$d=n("Speech2TextModel"),wa=p(),Fe=a("div"),y(tn.$$.fragment),Ed=p(),on=a("p"),qd=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Vn=a("a"),Fd=n("PreTrainedModel"),zd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd=p(),nn=a("p"),jd=n("This model is also a PyTorch "),sn=a("a"),Pd=n("torch.nn.Module"),Md=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ad=p(),Ne=a("div"),y(an.$$.fragment),Nd=p(),zt=a("p"),Dd=n("The "),Hn=a("a"),Id=n("Speech2TextModel"),Ld=n(" forward method, overrides the "),Us=a("code"),Od=n("__call__"),Gd=n(" special method."),Ud=p(),y(Qt.$$.fragment),Wd=p(),y(Zt.$$.fragment),Sa=p(),Ct=a("h2"),eo=a("a"),Ws=a("span"),y(rn.$$.fragment),Rd=p(),Rs=a("span"),Vd=n("Speech2TextForConditionalGeneration"),$a=p(),ze=a("div"),y(dn.$$.fragment),Hd=p(),ln=a("p"),Bd=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bn=a("a"),Kd=n("PreTrainedModel"),Jd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yd=p(),cn=a("p"),Xd=n("This model is also a PyTorch "),pn=a("a"),Qd=n("torch.nn.Module"),Zd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),el=p(),De=a("div"),y(hn.$$.fragment),tl=p(),jt=a("p"),ol=n("The "),Kn=a("a"),nl=n("Speech2TextForConditionalGeneration"),sl=n(" forward method, overrides the "),Vs=a("code"),al=n("__call__"),rl=n(" special method."),il=p(),y(to.$$.fragment),dl=p(),y(oo.$$.fragment),Ea=p(),Pt=a("h2"),no=a("a"),Hs=a("span"),y(mn.$$.fragment),ll=p(),Bs=a("span"),cl=n("TFSpeech2TextModel"),qa=p(),be=a("div"),y(un.$$.fragment),pl=p(),fn=a("p"),hl=n(`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Jn=a("a"),ml=n("TFPreTrainedModel"),ul=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fl=p(),_n=a("p"),_l=n("This model is also a "),gn=a("a"),gl=n("tf.keras.Model"),Tl=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl=p(),y(so.$$.fragment),bl=p(),Ie=a("div"),y(Tn.$$.fragment),yl=p(),Mt=a("p"),xl=n("The "),Yn=a("a"),kl=n("TFSpeech2TextModel"),wl=n(" forward method, overrides the "),Ks=a("code"),Sl=n("__call__"),$l=n(" special method."),El=p(),y(ao.$$.fragment),ql=p(),y(ro.$$.fragment),Fa=p(),At=a("h2"),io=a("a"),Js=a("span"),y(vn.$$.fragment),Fl=p(),Ys=a("span"),zl=n("TFSpeech2TextForConditionalGeneration"),za=p(),ye=a("div"),y(bn.$$.fragment),Cl=p(),yn=a("p"),jl=n(`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Xn=a("a"),Pl=n("TFPreTrainedModel"),Ml=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al=p(),xn=a("p"),Nl=n("This model is also a "),kn=a("a"),Dl=n("tf.keras.Model"),Il=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ll=p(),y(lo.$$.fragment),Ol=p(),Le=a("div"),y(wn.$$.fragment),Gl=p(),Nt=a("p"),Ul=n("The "),Qn=a("a"),Wl=n("TFSpeech2TextForConditionalGeneration"),Rl=n(" forward method, overrides the "),Xs=a("code"),Vl=n("__call__"),Hl=n(" special method."),Bl=p(),y(co.$$.fragment),Kl=p(),y(po.$$.fragment),this.h()},l(o){const f=Wp('[data-svelte="svelte-1phssyn"]',document.head);c=r(f,"META",{name:!0,content:!0}),f.forEach(t),b=h(o),_=r(o,"H1",{class:!0});var Sn=i(_);g=r(Sn,"A",{id:!0,class:!0,href:!0});var Qs=i(g);v=r(Qs,"SPAN",{});var Zs=i(v);x(d.$$.fragment,Zs),Zs.forEach(t),Qs.forEach(t),m=h(Sn),q=r(Sn,"SPAN",{});var ea=i(q);D=s(ea,"Speech2Text"),ea.forEach(t),Sn.forEach(t),j=h(o),M=r(o,"H2",{class:!0});var $n=i(M);I=r($n,"A",{id:!0,class:!0,href:!0});var ta=i(I);ne=r(ta,"SPAN",{});var oa=i(ne);x(E.$$.fragment,oa),oa.forEach(t),ta.forEach(t),Ge=h($n),Q=r($n,"SPAN",{});var na=i(Q);Ue=s(na,"Overview"),na.forEach(t),$n.forEach(t),je=h(o),A=r(o,"P",{});var Ce=i(A);We=s(Ce,"The Speech2Text model was proposed in "),se=r(Ce,"A",{href:!0,rel:!0});var sa=i(se);ae=s(sa,"fairseq S2T: Fast Speech-to-Text Modeling with fairseq"),sa.forEach(t),Re=s(Ce,` by Changhan Wang, Yun Tang, Xutai Ma, Anne Wu, Dmytro Okhonko, Juan Pino. It\u2019s a
transformer-based seq2seq (encoder-decoder) model designed for end-to-end Automatic Speech Recognition (ASR) and Speech
Translation (ST). It uses a convolutional downsampler to reduce the length of speech inputs by 3/4th before they are
fed into the encoder. The model is trained with standard autoregressive cross-entropy loss and generates the
transcripts/translations autoregressively. Speech2Text has been fine-tuned on several datasets for ASR and ST:
`),re=r(Ce,"A",{href:!0,rel:!0});var aa=i(re);ie=s(aa,"LibriSpeech"),aa.forEach(t),Ve=s(Ce,", "),de=r(Ce,"A",{href:!0,rel:!0});var ra=i(de);le=s(ra,"CoVoST 2"),ra.forEach(t),He=s(Ce,", "),ce=r(Ce,"A",{href:!0,rel:!0});var ia=i(ce);Se=s(ia,"MuST-C"),ia.forEach(t),N=s(Ce,"."),Ce.forEach(t),L=h(o),Y=r(o,"P",{});var Zn=i(Y);pe=s(Zn,"This model was contributed by "),he=r(Zn,"A",{href:!0,rel:!0});var Zl=i(he);Be=s(Zl,"valhalla"),Zl.forEach(t),me=s(Zn,". The original code can be found "),ue=r(Zn,"A",{href:!0,rel:!0});var ec=i(ue);Ke=s(ec,"here"),ec.forEach(t),U=s(Zn,"."),Zn.forEach(t),Pe=h(o),W=r(o,"H2",{class:!0});var ja=i(W);ee=r(ja,"A",{id:!0,class:!0,href:!0});var tc=i(ee);$e=r(tc,"SPAN",{});var oc=i($e);x(K.$$.fragment,oc),oc.forEach(t),tc.forEach(t),Je=h(ja),Ee=r(ja,"SPAN",{});var nc=i(Ee);Z=s(nc,"Inference"),nc.forEach(t),ja.forEach(t),Me=h(o),H=r(o,"P",{});var Pa=i(H);Ye=s(Pa,`Speech2Text is a speech model that accepts a float tensor of log-mel filter-bank features extracted from the speech
signal. It\u2019s a transformer-based seq2seq model, so the transcripts/translations are generated autoregressively. The
`),fe=r(Pa,"CODE",{});var sc=i(fe);R=s(sc,"generate()"),sc.forEach(t),Xe=s(Pa," method can be used for inference."),Pa.forEach(t),B=h(o),O=r(o,"P",{});var dt=i(O);Qe=s(dt,"The "),T=r(dt,"A",{href:!0});var ac=i(T);F=s(ac,"Speech2TextFeatureExtractor"),ac.forEach(t),ht=s(dt,` class is responsible for extracting the log-mel filter-bank
features. The `),te=r(dt,"A",{href:!0});var rc=i(te);mt=s(rc,"Speech2TextProcessor"),rc.forEach(t),ut=s(dt," wraps "),z=r(dt,"A",{href:!0});var ic=i(z);ft=s(ic,"Speech2TextFeatureExtractor"),ic.forEach(t),_t=s(dt,` and
`),Ae=r(dt,"A",{href:!0});var dc=i(Ae);gt=s(dc,"Speech2TextTokenizer"),dc.forEach(t),Tt=s(dt,` into a single instance to both extract the input features and decode the
predicted token ids.`),dt.forEach(t),X=h(o),C=r(o,"P",{});var xe=i(C);vt=s(xe,"The feature extractor depends on "),Ze=r(xe,"CODE",{});var lc=i(Ze);_e=s(lc,"torchaudio"),lc.forEach(t),bt=s(xe," and the tokenizer depends on "),et=r(xe,"CODE",{});var cc=i(et);tt=s(cc,"sentencepiece"),cc.forEach(t),yt=s(xe,` so be sure to
install those packages before running the examples. You could either install those as extra speech dependencies with
`),ge=r(xe,"CODE",{});var pc=i(ge);xt=s(pc,'pip install transformers"[speech, sentencepiece]"'),pc.forEach(t),cr=s(xe," or install the packages separately with "),ls=r(xe,"CODE",{});var hc=i(ls);pr=s(hc,"pip install torchaudio sentencepiece"),hc.forEach(t),hr=s(xe,". Also "),cs=r(xe,"CODE",{});var mc=i(cs);mr=s(mc,"torchaudio"),mc.forEach(t),ur=s(xe," requires the development version of the "),yo=r(xe,"A",{href:!0,rel:!0});var uc=i(yo);fr=s(uc,"libsndfile"),uc.forEach(t),_r=s(xe,` package which can be installed via a system package manager. On Ubuntu it can
be installed as follows: `),ps=r(xe,"CODE",{});var fc=i(ps);gr=s(fc,"apt install libsndfile1-dev"),fc.forEach(t),xe.forEach(t),ca=h(o),qn=r(o,"UL",{});var _c=i(qn);hs=r(_c,"LI",{});var gc=i(hs);Tr=s(gc,"ASR and Speech Translation"),gc.forEach(t),_c.forEach(t),pa=h(o),x(xo.$$.fragment,o),ha=h(o),Fn=r(o,"UL",{});var Tc=i(Fn);ko=r(Tc,"LI",{});var Ma=i(ko);ms=r(Ma,"P",{});var vc=i(ms);vr=s(vc,"Multilingual speech translation"),vc.forEach(t),br=h(Ma),Te=r(Ma,"P",{});var Oe=i(Te);yr=s(Oe,"For multilingual speech translation models, "),us=r(Oe,"CODE",{});var bc=i(us);xr=s(bc,"eos_token_id"),bc.forEach(t),kr=s(Oe," is used as the "),fs=r(Oe,"CODE",{});var yc=i(fs);wr=s(yc,"decoder_start_token_id"),yc.forEach(t),Sr=s(Oe,` and
the target language id is forced as the first generated token. To force the target language id as the first
generated token, pass the `),_s=r(Oe,"CODE",{});var xc=i(_s);$r=s(xc,"forced_bos_token_id"),xc.forEach(t),Er=s(Oe," parameter to the "),gs=r(Oe,"CODE",{});var kc=i(gs);qr=s(kc,"generate()"),kc.forEach(t),Fr=s(Oe,` method. The following
example shows how to transate English speech to French text using the `),Ts=r(Oe,"EM",{});var wc=i(Ts);zr=s(wc,"facebook/s2t-medium-mustc-multilingual-st"),wc.forEach(t),Cr=s(Oe,`
checkpoint.`),Oe.forEach(t),Ma.forEach(t),Tc.forEach(t),ma=h(o),x(wo.$$.fragment,o),ua=h(o),Dt=r(o,"P",{});var Aa=i(Dt);jr=s(Aa,"See the "),So=r(Aa,"A",{href:!0,rel:!0});var Sc=i(So);Pr=s(Sc,"model hub"),Sc.forEach(t),Mr=s(Aa," to look for Speech2Text checkpoints."),Aa.forEach(t),fa=h(o),kt=r(o,"H2",{class:!0});var Na=i(kt);It=r(Na,"A",{id:!0,class:!0,href:!0});var $c=i(It);vs=r($c,"SPAN",{});var Ec=i(vs);x($o.$$.fragment,Ec),Ec.forEach(t),$c.forEach(t),Ar=h(Na),bs=r(Na,"SPAN",{});var qc=i(bs);Nr=s(qc,"Speech2TextConfig"),qc.forEach(t),Na.forEach(t),_a=h(o),qe=r(o,"DIV",{class:!0});var ho=i(qe);x(Eo.$$.fragment,ho),Dr=h(ho),wt=r(ho,"P",{});var es=i(wt);Ir=s(es,"This is the configuration class to store the configuration of a "),zn=r(es,"A",{href:!0});var Fc=i(zn);Lr=s(Fc,"Speech2TextModel"),Fc.forEach(t),Or=s(es,`. It is used to instantiate an
Speech2Text model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Speech2Text
`),qo=r(es,"A",{href:!0,rel:!0});var zc=i(qo);Gr=s(zc,"facebook/s2t-small-librispeech-asr"),zc.forEach(t),Ur=s(es," architecture."),es.forEach(t),Wr=h(ho),St=r(ho,"P",{});var ts=i(St);Rr=s(ts,"Configuration objects inherit from "),Cn=r(ts,"A",{href:!0});var Cc=i(Cn);Vr=s(Cc,"PretrainedConfig"),Cc.forEach(t),Hr=s(ts,` and can be used to control the model outputs. Read the
documentation from `),jn=r(ts,"A",{href:!0});var jc=i(jn);Br=s(jc,"PretrainedConfig"),jc.forEach(t),Kr=s(ts," for more information."),ts.forEach(t),Jr=h(ho),x(Lt.$$.fragment,ho),ho.forEach(t),ga=h(o),$t=r(o,"H2",{class:!0});var Da=i($t);Ot=r(Da,"A",{id:!0,class:!0,href:!0});var Pc=i(Ot);ys=r(Pc,"SPAN",{});var Mc=i(ys);x(Fo.$$.fragment,Mc),Mc.forEach(t),Pc.forEach(t),Yr=h(Da),xs=r(Da,"SPAN",{});var Ac=i(xs);Xr=s(Ac,"Speech2TextTokenizer"),Ac.forEach(t),Da.forEach(t),Ta=h(o),J=r(o,"DIV",{class:!0});var we=i(J);x(zo.$$.fragment,we),Qr=h(we),ks=r(we,"P",{});var Nc=i(ks);Zr=s(Nc,"Construct an Speech2Text tokenizer."),Nc.forEach(t),ei=h(we),Co=r(we,"P",{});var Ia=i(Co);ti=s(Ia,"This tokenizer inherits from "),Pn=r(Ia,"A",{href:!0});var Dc=i(Pn);oi=s(Dc,"PreTrainedTokenizer"),Dc.forEach(t),ni=s(Ia,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),Ia.forEach(t),si=h(we),Gt=r(we,"DIV",{class:!0});var La=i(Gt);x(jo.$$.fragment,La),ai=h(La),ws=r(La,"P",{});var Ic=i(ws);ri=s(Ic,"Build model inputs from a sequence by appending eos_token_id."),Ic.forEach(t),La.forEach(t),ii=h(we),Ut=r(we,"DIV",{class:!0});var Oa=i(Ut);x(Po.$$.fragment,Oa),di=h(Oa),Mo=r(Oa,"P",{});var Ga=i(Mo);li=s(Ga,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ss=r(Ga,"CODE",{});var Lc=i(Ss);ci=s(Lc,"prepare_for_model"),Lc.forEach(t),pi=s(Ga," method."),Ga.forEach(t),Oa.forEach(t),hi=h(we),at=r(we,"DIV",{class:!0});var os=i(at);x(Ao.$$.fragment,os),mi=h(os),Mn=r(os,"P",{});var Jl=i(Mn);ui=s(Jl,"Create the token type IDs corresponding to the sequences passed. "),An=r(Jl,"A",{href:!0});var Oc=i(An);fi=s(Oc,`What are token type
IDs?`),Oc.forEach(t),Jl.forEach(t),_i=h(os),$s=r(os,"P",{});var Gc=i($s);gi=s(Gc,"Should be overridden in a subclass if the model has a special way of building those."),Gc.forEach(t),os.forEach(t),Ti=h(we),Nn=r(we,"DIV",{class:!0});var Uc=i(Nn);x(No.$$.fragment,Uc),Uc.forEach(t),we.forEach(t),va=h(o),Et=r(o,"H2",{class:!0});var Ua=i(Et);Wt=r(Ua,"A",{id:!0,class:!0,href:!0});var Wc=i(Wt);Es=r(Wc,"SPAN",{});var Rc=i(Es);x(Do.$$.fragment,Rc),Rc.forEach(t),Wc.forEach(t),vi=h(Ua),qs=r(Ua,"SPAN",{});var Vc=i(qs);bi=s(Vc,"Speech2TextFeatureExtractor"),Vc.forEach(t),Ua.forEach(t),ba=h(o),ve=r(o,"DIV",{class:!0});var lt=i(ve);x(Io.$$.fragment,lt),yi=h(lt),Fs=r(lt,"P",{});var Hc=i(Fs);xi=s(Hc,"Constructs a Speech2Text feature extractor."),Hc.forEach(t),ki=h(lt),Lo=r(lt,"P",{});var Wa=i(Lo);wi=s(Wa,"This feature extractor inherits from "),Dn=r(Wa,"A",{href:!0});var Bc=i(Dn);Si=s(Bc,"Speech2TextFeatureExtractor"),Bc.forEach(t),$i=s(Wa,` which contains most of the main methods. Users
should refer to this superclass for more information regarding those methods.`),Wa.forEach(t),Ei=h(lt),zs=r(lt,"P",{});var Kc=i(zs);qi=s(Kc,`This class extracts mel-filter bank features from raw speech using TorchAudio and applies utterance-level cepstral
mean and variance normalization to the extracted features.`),Kc.forEach(t),Fi=h(lt),Rt=r(lt,"DIV",{class:!0});var Ra=i(Rt);x(Oo.$$.fragment,Ra),zi=h(Ra),Cs=r(Ra,"P",{});var Jc=i(Cs);Ci=s(Jc,"Main method to featurize and prepare for the model one or several sequence(s)."),Jc.forEach(t),Ra.forEach(t),lt.forEach(t),ya=h(o),qt=r(o,"H2",{class:!0});var Va=i(qt);Vt=r(Va,"A",{id:!0,class:!0,href:!0});var Yc=i(Vt);js=r(Yc,"SPAN",{});var Xc=i(js);x(Go.$$.fragment,Xc),Xc.forEach(t),Yc.forEach(t),ji=h(Va),Ps=r(Va,"SPAN",{});var Qc=i(Ps);Pi=s(Qc,"Speech2TextProcessor"),Qc.forEach(t),Va.forEach(t),xa=h(o),V=r(o,"DIV",{class:!0});var oe=i(V);x(Uo.$$.fragment,oe),Mi=h(oe),Ms=r(oe,"P",{});var Zc=i(Ms);Ai=s(Zc,`Constructs a Speech2Text processor which wraps a Speech2Text feature extractor and a Speech2Text tokenizer into a
single processor.`),Zc.forEach(t),Ni=h(oe),ke=r(oe,"P",{});var nt=i(ke);In=r(nt,"A",{href:!0});var ep=i(In);Di=s(ep,"Speech2TextProcessor"),ep.forEach(t),Ii=s(nt," offers all the functionalities of "),Ln=r(nt,"A",{href:!0});var tp=i(Ln);Li=s(tp,"Speech2TextFeatureExtractor"),tp.forEach(t),Oi=s(nt,` and
`),On=r(nt,"A",{href:!0});var op=i(On);Gi=s(op,"Speech2TextTokenizer"),op.forEach(t),Ui=s(nt,". See the "),Wo=r(nt,"A",{href:!0});var Yl=i(Wo);As=r(Yl,"STRONG",{});var np=i(As);Wi=s(np,"call"),np.forEach(t),Ri=s(Yl,"()"),Yl.forEach(t),Vi=s(nt," and "),Gn=r(nt,"A",{href:!0});var sp=i(Gn);Hi=s(sp,"decode()"),sp.forEach(t),Bi=s(nt,` for more
information.`),nt.forEach(t),Ki=h(oe),Ht=r(oe,"DIV",{class:!0});var Ha=i(Ht);x(Ro.$$.fragment,Ha),Ji=h(Ha),ot=r(Ha,"P",{});var mo=i(ot);Yi=s(mo,`When used in normal mode, this method forwards all its arguments to Speech2TextFeatureExtractor\u2019s
`),Vo=r(mo,"A",{href:!0});var Xl=i(Vo);Ns=r(Xl,"STRONG",{});var ap=i(Ns);Xi=s(ap,"call"),ap.forEach(t),Qi=s(Xl,"()"),Xl.forEach(t),Zi=s(mo,` and returns its output. If used in the context
`),Ds=r(mo,"CODE",{});var rp=i(Ds);ed=s(rp,"as_target_processor()"),rp.forEach(t),td=s(mo,` this method forwards all its arguments to Speech2TextTokenizer\u2019s
`),Ho=r(mo,"A",{href:!0});var Ql=i(Ho);Is=r(Ql,"STRONG",{});var ip=i(Is);od=s(ip,"call"),ip.forEach(t),nd=s(Ql,"()"),Ql.forEach(t),sd=s(mo,`. Please refer to the doctsring of the above two methods for more
information.`),mo.forEach(t),Ha.forEach(t),ad=h(oe),rt=r(oe,"DIV",{class:!0});var ns=i(rt);x(Bo.$$.fragment,ns),rd=h(ns),Ls=r(ns,"P",{});var dp=i(Ls);id=s(dp,"Instantiate a processor associated with a pretrained model."),dp.forEach(t),dd=h(ns),x(Bt.$$.fragment,ns),ns.forEach(t),ld=h(oe),it=r(oe,"DIV",{class:!0});var ss=i(it);x(Ko.$$.fragment,ss),cd=h(ss),Jo=r(ss,"P",{});var Ba=i(Jo);pd=s(Ba,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Un=r(Ba,"A",{href:!0});var lp=i(Un);hd=s(lp,"from_pretrained()"),lp.forEach(t),md=s(Ba," method."),Ba.forEach(t),ud=h(ss),x(Kt.$$.fragment,ss),ss.forEach(t),fd=h(oe),Jt=r(oe,"DIV",{class:!0});var Ka=i(Jt);x(Yo.$$.fragment,Ka),_d=h(Ka),Xo=r(Ka,"P",{});var Ja=i(Xo);gd=s(Ja,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Wn=r(Ja,"A",{href:!0});var cp=i(Wn);Td=s(cp,"batch_decode()"),cp.forEach(t),vd=s(Ja,`. Please
refer to the docstring of this method for more information.`),Ja.forEach(t),Ka.forEach(t),bd=h(oe),Yt=r(oe,"DIV",{class:!0});var Ya=i(Yt);x(Qo.$$.fragment,Ya),yd=h(Ya),Zo=r(Ya,"P",{});var Xa=i(Zo);xd=s(Xa,"This method forwards all its arguments to Speech2TextTokenizer\u2019s "),Rn=r(Xa,"A",{href:!0});var pp=i(Rn);kd=s(pp,"decode()"),pp.forEach(t),wd=s(Xa,`. Please refer
to the docstring of this method for more information.`),Xa.forEach(t),Ya.forEach(t),oe.forEach(t),ka=h(o),Ft=r(o,"H2",{class:!0});var Qa=i(Ft);Xt=r(Qa,"A",{id:!0,class:!0,href:!0});var hp=i(Xt);Os=r(hp,"SPAN",{});var mp=i(Os);x(en.$$.fragment,mp),mp.forEach(t),hp.forEach(t),Sd=h(Qa),Gs=r(Qa,"SPAN",{});var up=i(Gs);$d=s(up,"Speech2TextModel"),up.forEach(t),Qa.forEach(t),wa=h(o),Fe=r(o,"DIV",{class:!0});var uo=i(Fe);x(tn.$$.fragment,uo),Ed=h(uo),on=r(uo,"P",{});var Za=i(on);qd=s(Za,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Vn=r(Za,"A",{href:!0});var fp=i(Vn);Fd=s(fp,"PreTrainedModel"),fp.forEach(t),zd=s(Za,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Za.forEach(t),Cd=h(uo),nn=r(uo,"P",{});var er=i(nn);jd=s(er,"This model is also a PyTorch "),sn=r(er,"A",{href:!0,rel:!0});var _p=i(sn);Pd=s(_p,"torch.nn.Module"),_p.forEach(t),Md=s(er,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),er.forEach(t),Ad=h(uo),Ne=r(uo,"DIV",{class:!0});var fo=i(Ne);x(an.$$.fragment,fo),Nd=h(fo),zt=r(fo,"P",{});var as=i(zt);Dd=s(as,"The "),Hn=r(as,"A",{href:!0});var gp=i(Hn);Id=s(gp,"Speech2TextModel"),gp.forEach(t),Ld=s(as," forward method, overrides the "),Us=r(as,"CODE",{});var Tp=i(Us);Od=s(Tp,"__call__"),Tp.forEach(t),Gd=s(as," special method."),as.forEach(t),Ud=h(fo),x(Qt.$$.fragment,fo),Wd=h(fo),x(Zt.$$.fragment,fo),fo.forEach(t),uo.forEach(t),Sa=h(o),Ct=r(o,"H2",{class:!0});var tr=i(Ct);eo=r(tr,"A",{id:!0,class:!0,href:!0});var vp=i(eo);Ws=r(vp,"SPAN",{});var bp=i(Ws);x(rn.$$.fragment,bp),bp.forEach(t),vp.forEach(t),Rd=h(tr),Rs=r(tr,"SPAN",{});var yp=i(Rs);Vd=s(yp,"Speech2TextForConditionalGeneration"),yp.forEach(t),tr.forEach(t),$a=h(o),ze=r(o,"DIV",{class:!0});var _o=i(ze);x(dn.$$.fragment,_o),Hd=h(_o),ln=r(_o,"P",{});var or=i(ln);Bd=s(or,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Bn=r(or,"A",{href:!0});var xp=i(Bn);Kd=s(xp,"PreTrainedModel"),xp.forEach(t),Jd=s(or,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),or.forEach(t),Yd=h(_o),cn=r(_o,"P",{});var nr=i(cn);Xd=s(nr,"This model is also a PyTorch "),pn=r(nr,"A",{href:!0,rel:!0});var kp=i(pn);Qd=s(kp,"torch.nn.Module"),kp.forEach(t),Zd=s(nr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nr.forEach(t),el=h(_o),De=r(_o,"DIV",{class:!0});var go=i(De);x(hn.$$.fragment,go),tl=h(go),jt=r(go,"P",{});var rs=i(jt);ol=s(rs,"The "),Kn=r(rs,"A",{href:!0});var wp=i(Kn);nl=s(wp,"Speech2TextForConditionalGeneration"),wp.forEach(t),sl=s(rs," forward method, overrides the "),Vs=r(rs,"CODE",{});var Sp=i(Vs);al=s(Sp,"__call__"),Sp.forEach(t),rl=s(rs," special method."),rs.forEach(t),il=h(go),x(to.$$.fragment,go),dl=h(go),x(oo.$$.fragment,go),go.forEach(t),_o.forEach(t),Ea=h(o),Pt=r(o,"H2",{class:!0});var sr=i(Pt);no=r(sr,"A",{id:!0,class:!0,href:!0});var $p=i(no);Hs=r($p,"SPAN",{});var Ep=i(Hs);x(mn.$$.fragment,Ep),Ep.forEach(t),$p.forEach(t),ll=h(sr),Bs=r(sr,"SPAN",{});var qp=i(Bs);cl=s(qp,"TFSpeech2TextModel"),qp.forEach(t),sr.forEach(t),qa=h(o),be=r(o,"DIV",{class:!0});var ct=i(be);x(un.$$.fragment,ct),pl=h(ct),fn=r(ct,"P",{});var ar=i(fn);hl=s(ar,`The bare Speech2Text Model outputting raw hidden-states without any specific head on top.
This model inherits from `),Jn=r(ar,"A",{href:!0});var Fp=i(Jn);ml=s(Fp,"TFPreTrainedModel"),Fp.forEach(t),ul=s(ar,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ar.forEach(t),fl=h(ct),_n=r(ct,"P",{});var rr=i(_n);_l=s(rr,"This model is also a "),gn=r(rr,"A",{href:!0,rel:!0});var zp=i(gn);gl=s(zp,"tf.keras.Model"),zp.forEach(t),Tl=s(rr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rr.forEach(t),vl=h(ct),x(so.$$.fragment,ct),bl=h(ct),Ie=r(ct,"DIV",{class:!0});var To=i(Ie);x(Tn.$$.fragment,To),yl=h(To),Mt=r(To,"P",{});var is=i(Mt);xl=s(is,"The "),Yn=r(is,"A",{href:!0});var Cp=i(Yn);kl=s(Cp,"TFSpeech2TextModel"),Cp.forEach(t),wl=s(is," forward method, overrides the "),Ks=r(is,"CODE",{});var jp=i(Ks);Sl=s(jp,"__call__"),jp.forEach(t),$l=s(is," special method."),is.forEach(t),El=h(To),x(ao.$$.fragment,To),ql=h(To),x(ro.$$.fragment,To),To.forEach(t),ct.forEach(t),Fa=h(o),At=r(o,"H2",{class:!0});var ir=i(At);io=r(ir,"A",{id:!0,class:!0,href:!0});var Pp=i(io);Js=r(Pp,"SPAN",{});var Mp=i(Js);x(vn.$$.fragment,Mp),Mp.forEach(t),Pp.forEach(t),Fl=h(ir),Ys=r(ir,"SPAN",{});var Ap=i(Ys);zl=s(Ap,"TFSpeech2TextForConditionalGeneration"),Ap.forEach(t),ir.forEach(t),za=h(o),ye=r(o,"DIV",{class:!0});var pt=i(ye);x(bn.$$.fragment,pt),Cl=h(pt),yn=r(pt,"P",{});var dr=i(yn);jl=s(dr,`The Speech2Text Model with a language modeling head. Can be used for summarization.
This model inherits from `),Xn=r(dr,"A",{href:!0});var Np=i(Xn);Pl=s(Np,"TFPreTrainedModel"),Np.forEach(t),Ml=s(dr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dr.forEach(t),Al=h(pt),xn=r(pt,"P",{});var lr=i(xn);Nl=s(lr,"This model is also a "),kn=r(lr,"A",{href:!0,rel:!0});var Dp=i(kn);Dl=s(Dp,"tf.keras.Model"),Dp.forEach(t),Il=s(lr,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lr.forEach(t),Ll=h(pt),x(lo.$$.fragment,pt),Ol=h(pt),Le=r(pt,"DIV",{class:!0});var vo=i(Le);x(wn.$$.fragment,vo),Gl=h(vo),Nt=r(vo,"P",{});var ds=i(Nt);Ul=s(ds,"The "),Qn=r(ds,"A",{href:!0});var Ip=i(Qn);Wl=s(Ip,"TFSpeech2TextForConditionalGeneration"),Ip.forEach(t),Rl=s(ds," forward method, overrides the "),Xs=r(ds,"CODE",{});var Lp=i(Xs);Vl=s(Lp,"__call__"),Lp.forEach(t),Hl=s(ds," special method."),ds.forEach(t),Bl=h(vo),x(co.$$.fragment,vo),Kl=h(vo),x(po.$$.fragment,vo),vo.forEach(t),pt.forEach(t),this.h()},h(){l(c,"name","hf:doc:metadata"),l(c,"content",JSON.stringify(ah)),l(g,"id","speech2text"),l(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(g,"href","#speech2text"),l(_,"class","relative group"),l(I,"id","overview"),l(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(I,"href","#overview"),l(M,"class","relative group"),l(se,"href","https://arxiv.org/abs/2010.05171"),l(se,"rel","nofollow"),l(re,"href","http://www.openslr.org/12"),l(re,"rel","nofollow"),l(de,"href","https://github.com/facebookresearch/covost"),l(de,"rel","nofollow"),l(ce,"href","https://ict.fbk.eu/must-c/"),l(ce,"rel","nofollow"),l(he,"href","https://huggingface.co/valhalla"),l(he,"rel","nofollow"),l(ue,"href","https://github.com/pytorch/fairseq/tree/master/examples/speech_to_text"),l(ue,"rel","nofollow"),l(ee,"id","inference"),l(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(ee,"href","#inference"),l(W,"class","relative group"),l(T,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),l(te,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),l(z,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),l(Ae,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),l(yo,"href","http://www.mega-nerd.com/libsndfile/"),l(yo,"rel","nofollow"),l(So,"href","https://huggingface.co/models?filter=speech_to_text"),l(So,"rel","nofollow"),l(It,"id","transformers.Speech2TextConfig"),l(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(It,"href","#transformers.Speech2TextConfig"),l(kt,"class","relative group"),l(zn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel"),l(qo,"href","https://huggingface.co/facebook/s2t-small-librispeech-asr"),l(qo,"rel","nofollow"),l(Cn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(jn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),l(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ot,"id","transformers.Speech2TextTokenizer"),l(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Ot,"href","#transformers.Speech2TextTokenizer"),l($t,"class","relative group"),l(Pn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),l(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(An,"href","../glossary#token-type-ids"),l(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Wt,"id","transformers.Speech2TextFeatureExtractor"),l(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Wt,"href","#transformers.Speech2TextFeatureExtractor"),l(Et,"class","relative group"),l(Dn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),l(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Vt,"id","transformers.Speech2TextProcessor"),l(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Vt,"href","#transformers.Speech2TextProcessor"),l(qt,"class","relative group"),l(In,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor"),l(Ln,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor"),l(On,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextTokenizer"),l(Wo,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.__call__"),l(Gn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.decode"),l(Vo,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextFeatureExtractor.__call__"),l(Ho,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__"),l(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Un,"href","/docs/transformers/main/en/model_doc/trocr#transformers.TrOCRProcessor.from_pretrained"),l(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Wn,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_decode"),l(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Rn,"href","/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.decode"),l(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Xt,"id","transformers.Speech2TextModel"),l(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(Xt,"href","#transformers.Speech2TextModel"),l(Ft,"class","relative group"),l(Vn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(sn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(sn,"rel","nofollow"),l(Hn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel"),l(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(eo,"id","transformers.Speech2TextForConditionalGeneration"),l(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(eo,"href","#transformers.Speech2TextForConditionalGeneration"),l(Ct,"class","relative group"),l(Bn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),l(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),l(pn,"rel","nofollow"),l(Kn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextForConditionalGeneration"),l(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(no,"id","transformers.TFSpeech2TextModel"),l(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(no,"href","#transformers.TFSpeech2TextModel"),l(Pt,"class","relative group"),l(Jn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(gn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(gn,"rel","nofollow"),l(Yn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.TFSpeech2TextModel"),l(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(io,"id","transformers.TFSpeech2TextForConditionalGeneration"),l(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(io,"href","#transformers.TFSpeech2TextForConditionalGeneration"),l(At,"class","relative group"),l(Xn,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),l(kn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),l(kn,"rel","nofollow"),l(Qn,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.TFSpeech2TextForConditionalGeneration"),l(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),l(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,c),u(o,b,f),u(o,_,f),e(_,g),e(g,v),k(d,v,null),e(_,m),e(_,q),e(q,D),u(o,j,f),u(o,M,f),e(M,I),e(I,ne),k(E,ne,null),e(M,Ge),e(M,Q),e(Q,Ue),u(o,je,f),u(o,A,f),e(A,We),e(A,se),e(se,ae),e(A,Re),e(A,re),e(re,ie),e(A,Ve),e(A,de),e(de,le),e(A,He),e(A,ce),e(ce,Se),e(A,N),u(o,L,f),u(o,Y,f),e(Y,pe),e(Y,he),e(he,Be),e(Y,me),e(Y,ue),e(ue,Ke),e(Y,U),u(o,Pe,f),u(o,W,f),e(W,ee),e(ee,$e),k(K,$e,null),e(W,Je),e(W,Ee),e(Ee,Z),u(o,Me,f),u(o,H,f),e(H,Ye),e(H,fe),e(fe,R),e(H,Xe),u(o,B,f),u(o,O,f),e(O,Qe),e(O,T),e(T,F),e(O,ht),e(O,te),e(te,mt),e(O,ut),e(O,z),e(z,ft),e(O,_t),e(O,Ae),e(Ae,gt),e(O,Tt),u(o,X,f),u(o,C,f),e(C,vt),e(C,Ze),e(Ze,_e),e(C,bt),e(C,et),e(et,tt),e(C,yt),e(C,ge),e(ge,xt),e(C,cr),e(C,ls),e(ls,pr),e(C,hr),e(C,cs),e(cs,mr),e(C,ur),e(C,yo),e(yo,fr),e(C,_r),e(C,ps),e(ps,gr),u(o,ca,f),u(o,qn,f),e(qn,hs),e(hs,Tr),u(o,pa,f),k(xo,o,f),u(o,ha,f),u(o,Fn,f),e(Fn,ko),e(ko,ms),e(ms,vr),e(ko,br),e(ko,Te),e(Te,yr),e(Te,us),e(us,xr),e(Te,kr),e(Te,fs),e(fs,wr),e(Te,Sr),e(Te,_s),e(_s,$r),e(Te,Er),e(Te,gs),e(gs,qr),e(Te,Fr),e(Te,Ts),e(Ts,zr),e(Te,Cr),u(o,ma,f),k(wo,o,f),u(o,ua,f),u(o,Dt,f),e(Dt,jr),e(Dt,So),e(So,Pr),e(Dt,Mr),u(o,fa,f),u(o,kt,f),e(kt,It),e(It,vs),k($o,vs,null),e(kt,Ar),e(kt,bs),e(bs,Nr),u(o,_a,f),u(o,qe,f),k(Eo,qe,null),e(qe,Dr),e(qe,wt),e(wt,Ir),e(wt,zn),e(zn,Lr),e(wt,Or),e(wt,qo),e(qo,Gr),e(wt,Ur),e(qe,Wr),e(qe,St),e(St,Rr),e(St,Cn),e(Cn,Vr),e(St,Hr),e(St,jn),e(jn,Br),e(St,Kr),e(qe,Jr),k(Lt,qe,null),u(o,ga,f),u(o,$t,f),e($t,Ot),e(Ot,ys),k(Fo,ys,null),e($t,Yr),e($t,xs),e(xs,Xr),u(o,Ta,f),u(o,J,f),k(zo,J,null),e(J,Qr),e(J,ks),e(ks,Zr),e(J,ei),e(J,Co),e(Co,ti),e(Co,Pn),e(Pn,oi),e(Co,ni),e(J,si),e(J,Gt),k(jo,Gt,null),e(Gt,ai),e(Gt,ws),e(ws,ri),e(J,ii),e(J,Ut),k(Po,Ut,null),e(Ut,di),e(Ut,Mo),e(Mo,li),e(Mo,Ss),e(Ss,ci),e(Mo,pi),e(J,hi),e(J,at),k(Ao,at,null),e(at,mi),e(at,Mn),e(Mn,ui),e(Mn,An),e(An,fi),e(at,_i),e(at,$s),e($s,gi),e(J,Ti),e(J,Nn),k(No,Nn,null),u(o,va,f),u(o,Et,f),e(Et,Wt),e(Wt,Es),k(Do,Es,null),e(Et,vi),e(Et,qs),e(qs,bi),u(o,ba,f),u(o,ve,f),k(Io,ve,null),e(ve,yi),e(ve,Fs),e(Fs,xi),e(ve,ki),e(ve,Lo),e(Lo,wi),e(Lo,Dn),e(Dn,Si),e(Lo,$i),e(ve,Ei),e(ve,zs),e(zs,qi),e(ve,Fi),e(ve,Rt),k(Oo,Rt,null),e(Rt,zi),e(Rt,Cs),e(Cs,Ci),u(o,ya,f),u(o,qt,f),e(qt,Vt),e(Vt,js),k(Go,js,null),e(qt,ji),e(qt,Ps),e(Ps,Pi),u(o,xa,f),u(o,V,f),k(Uo,V,null),e(V,Mi),e(V,Ms),e(Ms,Ai),e(V,Ni),e(V,ke),e(ke,In),e(In,Di),e(ke,Ii),e(ke,Ln),e(Ln,Li),e(ke,Oi),e(ke,On),e(On,Gi),e(ke,Ui),e(ke,Wo),e(Wo,As),e(As,Wi),e(Wo,Ri),e(ke,Vi),e(ke,Gn),e(Gn,Hi),e(ke,Bi),e(V,Ki),e(V,Ht),k(Ro,Ht,null),e(Ht,Ji),e(Ht,ot),e(ot,Yi),e(ot,Vo),e(Vo,Ns),e(Ns,Xi),e(Vo,Qi),e(ot,Zi),e(ot,Ds),e(Ds,ed),e(ot,td),e(ot,Ho),e(Ho,Is),e(Is,od),e(Ho,nd),e(ot,sd),e(V,ad),e(V,rt),k(Bo,rt,null),e(rt,rd),e(rt,Ls),e(Ls,id),e(rt,dd),k(Bt,rt,null),e(V,ld),e(V,it),k(Ko,it,null),e(it,cd),e(it,Jo),e(Jo,pd),e(Jo,Un),e(Un,hd),e(Jo,md),e(it,ud),k(Kt,it,null),e(V,fd),e(V,Jt),k(Yo,Jt,null),e(Jt,_d),e(Jt,Xo),e(Xo,gd),e(Xo,Wn),e(Wn,Td),e(Xo,vd),e(V,bd),e(V,Yt),k(Qo,Yt,null),e(Yt,yd),e(Yt,Zo),e(Zo,xd),e(Zo,Rn),e(Rn,kd),e(Zo,wd),u(o,ka,f),u(o,Ft,f),e(Ft,Xt),e(Xt,Os),k(en,Os,null),e(Ft,Sd),e(Ft,Gs),e(Gs,$d),u(o,wa,f),u(o,Fe,f),k(tn,Fe,null),e(Fe,Ed),e(Fe,on),e(on,qd),e(on,Vn),e(Vn,Fd),e(on,zd),e(Fe,Cd),e(Fe,nn),e(nn,jd),e(nn,sn),e(sn,Pd),e(nn,Md),e(Fe,Ad),e(Fe,Ne),k(an,Ne,null),e(Ne,Nd),e(Ne,zt),e(zt,Dd),e(zt,Hn),e(Hn,Id),e(zt,Ld),e(zt,Us),e(Us,Od),e(zt,Gd),e(Ne,Ud),k(Qt,Ne,null),e(Ne,Wd),k(Zt,Ne,null),u(o,Sa,f),u(o,Ct,f),e(Ct,eo),e(eo,Ws),k(rn,Ws,null),e(Ct,Rd),e(Ct,Rs),e(Rs,Vd),u(o,$a,f),u(o,ze,f),k(dn,ze,null),e(ze,Hd),e(ze,ln),e(ln,Bd),e(ln,Bn),e(Bn,Kd),e(ln,Jd),e(ze,Yd),e(ze,cn),e(cn,Xd),e(cn,pn),e(pn,Qd),e(cn,Zd),e(ze,el),e(ze,De),k(hn,De,null),e(De,tl),e(De,jt),e(jt,ol),e(jt,Kn),e(Kn,nl),e(jt,sl),e(jt,Vs),e(Vs,al),e(jt,rl),e(De,il),k(to,De,null),e(De,dl),k(oo,De,null),u(o,Ea,f),u(o,Pt,f),e(Pt,no),e(no,Hs),k(mn,Hs,null),e(Pt,ll),e(Pt,Bs),e(Bs,cl),u(o,qa,f),u(o,be,f),k(un,be,null),e(be,pl),e(be,fn),e(fn,hl),e(fn,Jn),e(Jn,ml),e(fn,ul),e(be,fl),e(be,_n),e(_n,_l),e(_n,gn),e(gn,gl),e(_n,Tl),e(be,vl),k(so,be,null),e(be,bl),e(be,Ie),k(Tn,Ie,null),e(Ie,yl),e(Ie,Mt),e(Mt,xl),e(Mt,Yn),e(Yn,kl),e(Mt,wl),e(Mt,Ks),e(Ks,Sl),e(Mt,$l),e(Ie,El),k(ao,Ie,null),e(Ie,ql),k(ro,Ie,null),u(o,Fa,f),u(o,At,f),e(At,io),e(io,Js),k(vn,Js,null),e(At,Fl),e(At,Ys),e(Ys,zl),u(o,za,f),u(o,ye,f),k(bn,ye,null),e(ye,Cl),e(ye,yn),e(yn,jl),e(yn,Xn),e(Xn,Pl),e(yn,Ml),e(ye,Al),e(ye,xn),e(xn,Nl),e(xn,kn),e(kn,Dl),e(xn,Il),e(ye,Ll),k(lo,ye,null),e(ye,Ol),e(ye,Le),k(wn,Le,null),e(Le,Gl),e(Le,Nt),e(Nt,Ul),e(Nt,Qn),e(Qn,Wl),e(Nt,Rl),e(Nt,Xs),e(Xs,Vl),e(Nt,Hl),e(Le,Bl),k(co,Le,null),e(Le,Kl),k(po,Le,null),Ca=!0},p(o,[f]){const Sn={};f&2&&(Sn.$$scope={dirty:f,ctx:o}),Lt.$set(Sn);const Qs={};f&2&&(Qs.$$scope={dirty:f,ctx:o}),Bt.$set(Qs);const Zs={};f&2&&(Zs.$$scope={dirty:f,ctx:o}),Kt.$set(Zs);const ea={};f&2&&(ea.$$scope={dirty:f,ctx:o}),Qt.$set(ea);const $n={};f&2&&($n.$$scope={dirty:f,ctx:o}),Zt.$set($n);const ta={};f&2&&(ta.$$scope={dirty:f,ctx:o}),to.$set(ta);const oa={};f&2&&(oa.$$scope={dirty:f,ctx:o}),oo.$set(oa);const na={};f&2&&(na.$$scope={dirty:f,ctx:o}),so.$set(na);const Ce={};f&2&&(Ce.$$scope={dirty:f,ctx:o}),ao.$set(Ce);const sa={};f&2&&(sa.$$scope={dirty:f,ctx:o}),ro.$set(sa);const aa={};f&2&&(aa.$$scope={dirty:f,ctx:o}),lo.$set(aa);const ra={};f&2&&(ra.$$scope={dirty:f,ctx:o}),co.$set(ra);const ia={};f&2&&(ia.$$scope={dirty:f,ctx:o}),po.$set(ia)},i(o){Ca||(w(d.$$.fragment,o),w(E.$$.fragment,o),w(K.$$.fragment,o),w(xo.$$.fragment,o),w(wo.$$.fragment,o),w($o.$$.fragment,o),w(Eo.$$.fragment,o),w(Lt.$$.fragment,o),w(Fo.$$.fragment,o),w(zo.$$.fragment,o),w(jo.$$.fragment,o),w(Po.$$.fragment,o),w(Ao.$$.fragment,o),w(No.$$.fragment,o),w(Do.$$.fragment,o),w(Io.$$.fragment,o),w(Oo.$$.fragment,o),w(Go.$$.fragment,o),w(Uo.$$.fragment,o),w(Ro.$$.fragment,o),w(Bo.$$.fragment,o),w(Bt.$$.fragment,o),w(Ko.$$.fragment,o),w(Kt.$$.fragment,o),w(Yo.$$.fragment,o),w(Qo.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(an.$$.fragment,o),w(Qt.$$.fragment,o),w(Zt.$$.fragment,o),w(rn.$$.fragment,o),w(dn.$$.fragment,o),w(hn.$$.fragment,o),w(to.$$.fragment,o),w(oo.$$.fragment,o),w(mn.$$.fragment,o),w(un.$$.fragment,o),w(so.$$.fragment,o),w(Tn.$$.fragment,o),w(ao.$$.fragment,o),w(ro.$$.fragment,o),w(vn.$$.fragment,o),w(bn.$$.fragment,o),w(lo.$$.fragment,o),w(wn.$$.fragment,o),w(co.$$.fragment,o),w(po.$$.fragment,o),Ca=!0)},o(o){S(d.$$.fragment,o),S(E.$$.fragment,o),S(K.$$.fragment,o),S(xo.$$.fragment,o),S(wo.$$.fragment,o),S($o.$$.fragment,o),S(Eo.$$.fragment,o),S(Lt.$$.fragment,o),S(Fo.$$.fragment,o),S(zo.$$.fragment,o),S(jo.$$.fragment,o),S(Po.$$.fragment,o),S(Ao.$$.fragment,o),S(No.$$.fragment,o),S(Do.$$.fragment,o),S(Io.$$.fragment,o),S(Oo.$$.fragment,o),S(Go.$$.fragment,o),S(Uo.$$.fragment,o),S(Ro.$$.fragment,o),S(Bo.$$.fragment,o),S(Bt.$$.fragment,o),S(Ko.$$.fragment,o),S(Kt.$$.fragment,o),S(Yo.$$.fragment,o),S(Qo.$$.fragment,o),S(en.$$.fragment,o),S(tn.$$.fragment,o),S(an.$$.fragment,o),S(Qt.$$.fragment,o),S(Zt.$$.fragment,o),S(rn.$$.fragment,o),S(dn.$$.fragment,o),S(hn.$$.fragment,o),S(to.$$.fragment,o),S(oo.$$.fragment,o),S(mn.$$.fragment,o),S(un.$$.fragment,o),S(so.$$.fragment,o),S(Tn.$$.fragment,o),S(ao.$$.fragment,o),S(ro.$$.fragment,o),S(vn.$$.fragment,o),S(bn.$$.fragment,o),S(lo.$$.fragment,o),S(wn.$$.fragment,o),S(co.$$.fragment,o),S(po.$$.fragment,o),Ca=!1},d(o){t(c),o&&t(b),o&&t(_),$(d),o&&t(j),o&&t(M),$(E),o&&t(je),o&&t(A),o&&t(L),o&&t(Y),o&&t(Pe),o&&t(W),$(K),o&&t(Me),o&&t(H),o&&t(B),o&&t(O),o&&t(X),o&&t(C),o&&t(ca),o&&t(qn),o&&t(pa),$(xo,o),o&&t(ha),o&&t(Fn),o&&t(ma),$(wo,o),o&&t(ua),o&&t(Dt),o&&t(fa),o&&t(kt),$($o),o&&t(_a),o&&t(qe),$(Eo),$(Lt),o&&t(ga),o&&t($t),$(Fo),o&&t(Ta),o&&t(J),$(zo),$(jo),$(Po),$(Ao),$(No),o&&t(va),o&&t(Et),$(Do),o&&t(ba),o&&t(ve),$(Io),$(Oo),o&&t(ya),o&&t(qt),$(Go),o&&t(xa),o&&t(V),$(Uo),$(Ro),$(Bo),$(Bt),$(Ko),$(Kt),$(Yo),$(Qo),o&&t(ka),o&&t(Ft),$(en),o&&t(wa),o&&t(Fe),$(tn),$(an),$(Qt),$(Zt),o&&t(Sa),o&&t(Ct),$(rn),o&&t($a),o&&t(ze),$(dn),$(hn),$(to),$(oo),o&&t(Ea),o&&t(Pt),$(mn),o&&t(qa),o&&t(be),$(un),$(so),$(Tn),$(ao),$(ro),o&&t(Fa),o&&t(At),$(vn),o&&t(za),o&&t(ye),$(bn),$(lo),$(wn),$(co),$(po)}}}const ah={local:"speech2text",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2TextConfig",title:"Speech2TextConfig"},{local:"transformers.Speech2TextTokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2TextFeatureExtractor",title:"Speech2TextFeatureExtractor"},{local:"transformers.Speech2TextProcessor",title:"Speech2TextProcessor"},{local:"transformers.Speech2TextModel",title:"Speech2TextModel"},{local:"transformers.Speech2TextForConditionalGeneration",title:"Speech2TextForConditionalGeneration"},{local:"transformers.TFSpeech2TextModel",title:"TFSpeech2TextModel"},{local:"transformers.TFSpeech2TextForConditionalGeneration",title:"TFSpeech2TextForConditionalGeneration"}],title:"Speech2Text"};function rh(P){return Rp(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class mh extends Op{constructor(c){super();Gp(this,c,rh,sh,Up,{})}}export{mh as default,ah as metadata};
