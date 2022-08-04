import{S as ls,i as ds,s as cs,e as a,k as h,w,t as i,M as ps,c as s,d as o,m as u,a as r,x as y,h as l,b as p,G as e,g as _,y as E,q as $,o as S,B as W,v as ms,L as _t}from"../../chunks/vendor-hf-doc-builder.js";import{T as wa}from"../../chunks/Tip-hf-doc-builder.js";import{D as Qe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as vt}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ut}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as gt}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function fs(D){let d,v,c,m,b;return m=new vt({props:{code:`from transformers import SEWDModel, SEWDConfig

# Initializing a SEW-D asapp/sew-d-tiny-100k style configuration
configuration = SEWDConfig()

# Initializing a model from the asapp/sew-d-tiny-100k style configuration
model = SEWDModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SEWDModel, SEWDConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a SEW-D asapp/sew-d-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SEWDConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the asapp/sew-d-tiny-100k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),v=i("Example:"),c=h(),w(m.$$.fragment)},l(n){d=s(n,"P",{});var g=r(d);v=l(g,"Example:"),g.forEach(o),c=u(n),y(m.$$.fragment,n)},m(n,g){_(n,d,g),e(d,v),_(n,c,g),E(m,n,g),b=!0},p:_t,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){S(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),W(m,n)}}}function hs(D){let d,v,c,m,b;return{c(){d=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var g=r(d);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(g,"CODE",{});var x=r(c);m=l(x,"Module"),x.forEach(o),b=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){_(n,d,g),e(d,v),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function us(D){let d,v,c,m,b;return m=new vt({props:{code:`from transformers import Wav2Vec2Processor, SEWDModel
import torch
from datasets import load_dataset

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("asapp/sew-d-tiny-100k-ft-ls100h")
model = SEWDModel.from_pretrained("asapp/sew-d-tiny-100k-ft-ls100h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state
list(last_hidden_states.shape)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;asapp/sew-d-tiny-100k-ft-ls100h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDModel.from_pretrained(<span class="hljs-string">&quot;asapp/sew-d-tiny-100k-ft-ls100h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">384</span>]`}}),{c(){d=a("p"),v=i("Example:"),c=h(),w(m.$$.fragment)},l(n){d=s(n,"P",{});var g=r(d);v=l(g,"Example:"),g.forEach(o),c=u(n),y(m.$$.fragment,n)},m(n,g){_(n,d,g),e(d,v),_(n,c,g),E(m,n,g),b=!0},p:_t,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){S(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),W(m,n)}}}function gs(D){let d,v,c,m,b;return{c(){d=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var g=r(d);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(g,"CODE",{});var x=r(c);m=l(x,"Module"),x.forEach(o),b=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){_(n,d,g),e(d,v),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function _s(D){let d,v,c,m,b;return m=new vt({props:{code:`from transformers import Wav2Vec2Processor, SEWDForCTC
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

processor = Wav2Vec2Processor.from_pretrained("asapp/sew-d-tiny-100k-ft-ls100h")
model = SEWDForCTC.from_pretrained("asapp/sew-d-tiny-100k-ft-ls100h")

# audio file is decoded on the fly
inputs = processor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")
with torch.no_grad():
    logits = model(**inputs).logits
predicted_ids = torch.argmax(logits, dim=-1)

# transcribe speech
transcription = processor.batch_decode(predicted_ids)
transcription[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2Processor, SEWDForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Wav2Vec2Processor.from_pretrained(<span class="hljs-string">&quot;asapp/sew-d-tiny-100k-ft-ls100h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDForCTC.from_pretrained(<span class="hljs-string">&quot;asapp/sew-d-tiny-100k-ft-ls100h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTIL OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>`}}),{c(){d=a("p"),v=i("Example:"),c=h(),w(m.$$.fragment)},l(n){d=s(n,"P",{});var g=r(d);v=l(g,"Example:"),g.forEach(o),c=u(n),y(m.$$.fragment,n)},m(n,g){_(n,d,g),e(d,v),_(n,c,g),E(m,n,g),b=!0},p:_t,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){S(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),W(m,n)}}}function vs(D){let d,v;return d=new vt({props:{code:`with processor.as_target_processor():
    inputs["labels"] = processor(dataset[0]["text"], return_tensors="pt").input_ids

# compute loss
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> processor.as_target_processor():
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.21</span>`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){E(d,c,m),v=!0},p:_t,i(c){v||($(d.$$.fragment,c),v=!0)},o(c){S(d.$$.fragment,c),v=!1},d(c){W(d,c)}}}function bs(D){let d,v,c,m,b;return{c(){d=a("p"),v=i("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=i("Module"),b=i(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(n){d=s(n,"P",{});var g=r(d);v=l(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(g,"CODE",{});var x=r(c);m=l(x,"Module"),x.forEach(o),b=l(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(o)},m(n,g){_(n,d,g),e(d,v),e(d,c),e(c,m),e(d,b)},d(n){n&&o(d)}}}function ws(D){let d,v,c,m,b;return m=new vt({props:{code:`from transformers import Wav2Vec2FeatureExtractor, SEWDForSequenceClassification
from datasets import load_dataset
import torch

dataset = load_dataset("hf-internal-testing/librispeech_asr_demo", "clean", split="validation")
dataset = dataset.sort("id")
sampling_rate = dataset.features["audio"].sampling_rate

feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained("anton-l/sew-d-mid-400k-ft-keyword-spotting")
model = SEWDForSequenceClassification.from_pretrained("anton-l/sew-d-mid-400k-ft-keyword-spotting")

# audio file is decoded on the fly
inputs = feature_extractor(dataset[0]["audio"]["array"], sampling_rate=sampling_rate, return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_ids = torch.argmax(logits, dim=-1).item()
predicted_label = model.config.id2label[predicted_class_ids]
predicted_label`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Wav2Vec2FeatureExtractor, SEWDForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor.from_pretrained(<span class="hljs-string">&quot;anton-l/sew-d-mid-400k-ft-keyword-spotting&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SEWDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;anton-l/sew-d-mid-400k-ft-keyword-spotting&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label
<span class="hljs-string">&#x27;_unknown_&#x27;</span>`}}),{c(){d=a("p"),v=i("Example:"),c=h(),w(m.$$.fragment)},l(n){d=s(n,"P",{});var g=r(d);v=l(g,"Example:"),g.forEach(o),c=u(n),y(m.$$.fragment,n)},m(n,g){_(n,d,g),e(d,v),_(n,c,g),E(m,n,g),b=!0},p:_t,i(n){b||($(m.$$.fragment,n),b=!0)},o(n){S(m.$$.fragment,n),b=!1},d(n){n&&o(d),n&&o(c),W(m,n)}}}function ys(D){let d,v;return d=new vt({props:{code:`# compute loss - target_label is e.g. "down"
target_label = model.config.id2label[0]
inputs["labels"] = torch.tensor([model.config.label2id[target_label]])
loss = model(**inputs).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.16</span>`}}),{c(){w(d.$$.fragment)},l(c){y(d.$$.fragment,c)},m(c,m){E(d,c,m),v=!0},p:_t,i(c){v||($(d.$$.fragment,c),v=!0)},o(c){S(d.$$.fragment,c),v=!1},d(c){W(d,c)}}}function Es(D){let d,v,c,m,b,n,g,x,wo,Nt,V,G,bt,ge,yo,wt,Eo,Kt,X,$o,_e,So,Wo,Ht,Ye,Do,Rt,Ge,yt,ko,Ut,Xe,Co,Bt,Z,Et,To,xo,ve,qo,Ze,jo,Po,Jt,ee,Fo,be,Mo,zo,Qt,I,te,$t,we,Ao,St,Oo,Yt,P,ye,Lo,N,Vo,et,Io,No,Ee,Ko,Ho,Ro,K,Uo,tt,Bo,Jo,ot,Qo,Yo,Go,oe,Gt,H,ne,Wt,$e,Xo,Dt,Zo,Xt,C,Se,en,We,tn,De,on,nn,an,ke,sn,nt,rn,ln,dn,Ce,cn,Te,pn,mn,fn,F,xe,hn,R,un,at,gn,_n,kt,vn,bn,wn,ae,yn,se,Zt,U,re,Ct,qe,En,Tt,$n,eo,T,je,Sn,B,Wn,xt,Dn,kn,Pe,Cn,Tn,xn,Fe,qn,st,jn,Pn,Fn,Me,Mn,ze,zn,An,On,q,Ae,Ln,J,Vn,rt,In,Nn,qt,Kn,Hn,Rn,ie,Un,le,Bn,de,to,Q,ce,jt,Oe,Jn,Pt,Qn,oo,k,Le,Yn,Ft,Gn,Xn,Ve,Zn,Ie,ea,ta,oa,Ne,na,it,aa,sa,ra,Ke,ia,He,la,da,ca,j,Re,pa,Y,ma,lt,fa,ha,Mt,ua,ga,_a,pe,va,me,ba,fe,no;return n=new ut({}),ge=new ut({}),we=new ut({}),ye=new Qe({props:{name:"class transformers.SEWDConfig",anchor:"transformers.SEWDConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"squeeze_factor",val:" = 2"},{name:"max_position_embeddings",val:" = 512"},{name:"position_buckets",val:" = 256"},{name:"share_att_key",val:" = True"},{name:"relative_attention",val:" = True"},{name:"position_biased_input",val:" = False"},{name:"pos_att_type",val:" = ('p2c', 'c2p')"},{name:"norm_rel_ebd",val:" = 'layer_norm'"},{name:"hidden_act",val:" = 'gelu_python'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"feature_layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_norm",val:" = 'group'"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)"},{name:"conv_kernel",val:" = (10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embeddings",val:" = 128"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"apply_spec_augment",val:" = True"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'mean'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SEWDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the SEW-D model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <code>SEWD</code>.`,name:"vocab_size"},{anchor:"transformers.SEWDConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.SEWDConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.SEWDConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.SEWDConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.SEWDConfig.squeeze_factor",description:`<strong>squeeze_factor</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Sequence length downsampling factor after the encoder and upsampling factor after the transformer.`,name:"squeeze_factor"},{anchor:"transformers.SEWDConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.SEWDConfig.position_buckets",description:`<strong>position_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum size of relative position embeddings.`,name:"position_buckets"},{anchor:"transformers.SEWDConfig.share_att_key",description:`<strong>share_att_key</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to share attention key with c2p and p2c.`,name:"share_att_key"},{anchor:"transformers.SEWDConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.SEWDConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.SEWDConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>Tuple[str]</code>, <em>optional</em>, defaults to <code>(&quot;p2c&quot;, &quot;c2p&quot;)</code>) &#x2014;
The type of relative position attention, it can be a combination of <code>(&quot;p2c&quot;, &quot;c2p&quot;)</code>, e.g. <code>(&quot;p2c&quot;)</code>,
<code>(&quot;p2c&quot;, &quot;c2p&quot;)</code>, <code>(&quot;p2c&quot;, &quot;c2p&quot;)</code>.`,name:"pos_att_type"},{anchor:"transformers.SEWDConfig.norm_rel_ebd",description:`<strong>norm_rel_ebd</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;layer_norm&quot;</code>) &#x2014;
Whether to use layer norm in relative embedding (<code>&quot;layer_norm&quot;</code> if yes)`,name:"norm_rel_ebd"},{anchor:"transformers.SEWDConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_python&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code>, <code>&quot;gelu_python&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SEWDConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.SEWDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.SEWDConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDForCTC">SEWDForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.SEWDConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SEWDConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers in the transformer encoder.`,name:"layer_norm_eps"},{anchor:"transformers.SEWDConfig.feature_layer_norm_eps",description:`<strong>feature_layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon used by the layer normalization after the feature encoder.`,name:"feature_layer_norm_eps"},{anchor:"transformers.SEWDConfig.feat_extract_norm",description:`<strong>feat_extract_norm</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;group&quot;</code>) &#x2014;
The norm to be applied to 1D convolutional layers in feature encoder. One of <code>&quot;group&quot;</code> for group
normalization of only the first 1D convolutional layer or <code>&quot;layer&quot;</code> for layer normalization of all 1D
convolutional layers.`,name:"feat_extract_norm"},{anchor:"transformers.SEWDConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.SEWDConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.SEWDConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(64, 128, 128, 128, 128, 256, 256, 256, 256, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.SEWDConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.SEWDConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 1, 3, 1, 3, 1, 3, 1, 2, 1, 2, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.SEWDConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.SEWDConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.SEWDConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.SEWDConfig.apply_spec_augment",description:`<strong>apply_spec_augment</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply <em>SpecAugment</em> data augmentation to the outputs of the feature encoder. For reference see
<a href="https://arxiv.org/abs/1904.08779" rel="nofollow">SpecAugment: A Simple Data Augmentation Method for Automatic Speech
Recognition</a>.`,name:"apply_spec_augment"},{anchor:"transformers.SEWDConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is True\`.`,name:"mask_time_prob"},{anchor:"transformers.SEWDConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.SEWDConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.SEWDConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.SEWDConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.SEWDConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.SEWDConfig.diversity_loss_weight",description:`<strong>diversity_loss_weight</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The weight of the codebook diversity loss component.`,name:"diversity_loss_weight"},{anchor:"transformers.SEWDConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDForCTC">SEWDForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.SEWDConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDForCTC">SEWDForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.SEWDConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2ForSequenceClassification">Wav2Vec2ForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.SEWDConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/sew_d/configuration_sew_d.py#L32"}}),oe=new gt({props:{anchor:"transformers.SEWDConfig.example",$$slots:{default:[fs]},$$scope:{ctx:D}}}),$e=new ut({}),Se=new Qe({props:{name:"class transformers.SEWDModel",anchor:"transformers.SEWDModel",parameters:[{name:"config",val:": SEWDConfig"}],parametersDescription:[{anchor:"transformers.SEWDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDConfig">SEWDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/sew_d/modeling_sew_d.py#L1354"}}),xe=new Qe({props:{name:"forward",anchor:"transformers.SEWDModel.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mask_time_indices",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.SEWDModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWDModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWDModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWDModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/sew_d/modeling_sew_d.py#L1421",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDConfig"
>SEWDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new wa({props:{$$slots:{default:[hs]},$$scope:{ctx:D}}}),se=new gt({props:{anchor:"transformers.SEWDModel.forward.example",$$slots:{default:[us]},$$scope:{ctx:D}}}),qe=new ut({}),je=new Qe({props:{name:"class transformers.SEWDForCTC",anchor:"transformers.SEWDForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SEWDForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDConfig">SEWDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/sew_d/modeling_sew_d.py#L1484"}}),Ae=new Qe({props:{name:"forward",anchor:"transformers.SEWDForCTC.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.SEWDForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWDForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWDForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWDForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWDForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWDForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/sew_d/modeling_sew_d.py#L1525",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDConfig"
>SEWDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ie=new wa({props:{$$slots:{default:[gs]},$$scope:{ctx:D}}}),le=new gt({props:{anchor:"transformers.SEWDForCTC.forward.example",$$slots:{default:[_s]},$$scope:{ctx:D}}}),de=new gt({props:{anchor:"transformers.SEWDForCTC.forward.example-2",$$slots:{default:[vs]},$$scope:{ctx:D}}}),Oe=new ut({}),Le=new Qe({props:{name:"class transformers.SEWDForSequenceClassification",anchor:"transformers.SEWDForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SEWDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDConfig">SEWDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/sew_d/modeling_sew_d.py#L1615"}}),Re=new Qe({props:{name:"forward",anchor:"transformers.SEWDForSequenceClassification.forward",parameters:[{name:"input_values",val:": typing.Optional[torch.Tensor]"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"}],parametersDescription:[{anchor:"transformers.SEWDForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor">Wav2Vec2Processor</a> should be used for padding
and conversion into a tensor of type <em>torch.FloatTensor</em>. See <a href="/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2Processor.__call__">Wav2Vec2Processor.<strong>call</strong>()</a> for details.`,name:"input_values"},{anchor:"transformers.SEWDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.SEWDForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SEWDForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SEWDForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SEWDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/sew_d/modeling_sew_d.py#L1660",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDConfig"
>SEWDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new wa({props:{$$slots:{default:[bs]},$$scope:{ctx:D}}}),me=new gt({props:{anchor:"transformers.SEWDForSequenceClassification.forward.example",$$slots:{default:[ws]},$$scope:{ctx:D}}}),fe=new gt({props:{anchor:"transformers.SEWDForSequenceClassification.forward.example-2",$$slots:{default:[ys]},$$scope:{ctx:D}}}),{c(){d=a("meta"),v=h(),c=a("h1"),m=a("a"),b=a("span"),w(n.$$.fragment),g=h(),x=a("span"),wo=i("SEW-D"),Nt=h(),V=a("h2"),G=a("a"),bt=a("span"),w(ge.$$.fragment),yo=h(),wt=a("span"),Eo=i("Overview"),Kt=h(),X=a("p"),$o=i("SEW-D (Squeezed and Efficient Wav2Vec with Disentangled attention) was proposed in "),_e=a("a"),So=i(`Performance-Efficiency Trade-offs
in Unsupervised Pre-training for Speech Recognition`),Wo=i(` by Felix Wu, Kwangyoun Kim,
Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi.`),Ht=h(),Ye=a("p"),Do=i("The abstract from the paper is the following:"),Rt=h(),Ge=a("p"),yt=a("em"),ko=i(`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Ut=h(),Xe=a("p"),Co=i("Tips:"),Bt=h(),Z=a("ul"),Et=a("li"),To=i("SEW-D is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),xo=h(),ve=a("li"),qo=i(`SEWDForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ze=a("a"),jo=i("Wav2Vec2CTCTokenizer"),Po=i("."),Jt=h(),ee=a("p"),Fo=i("This model was contributed by "),be=a("a"),Mo=i("anton-l"),zo=i("."),Qt=h(),I=a("h2"),te=a("a"),$t=a("span"),w(we.$$.fragment),Ao=h(),St=a("span"),Oo=i("SEWDConfig"),Yt=h(),P=a("div"),w(ye.$$.fragment),Lo=h(),N=a("p"),Vo=i("This is the configuration class to store the configuration of a "),et=a("a"),Io=i("SEWDModel"),No=i(`. It is used to instantiate a SEW-D
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW-D
`),Ee=a("a"),Ko=i("asapp/sew-d-tiny-100k"),Ho=i(" architecture."),Ro=h(),K=a("p"),Uo=i("Configuration objects inherit from "),tt=a("a"),Bo=i("PretrainedConfig"),Jo=i(` and can be used to control the model outputs. Read the
documentation from `),ot=a("a"),Qo=i("PretrainedConfig"),Yo=i(" for more information."),Go=h(),w(oe.$$.fragment),Gt=h(),H=a("h2"),ne=a("a"),Wt=a("span"),w($e.$$.fragment),Xo=h(),Dt=a("span"),Zo=i("SEWDModel"),Xt=h(),C=a("div"),w(Se.$$.fragment),en=h(),We=a("p"),tn=i(`The bare SEW-D Model transformer outputting raw hidden-states without any specific head on top.
SEW-D was proposed in `),De=a("a"),on=i(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),nn=i(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),an=h(),ke=a("p"),sn=i("This model inherits from "),nt=a("a"),rn=i("PreTrainedModel"),ln=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),dn=h(),Ce=a("p"),cn=i("This model is a PyTorch "),Te=a("a"),pn=i("torch.nn.Module"),mn=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fn=h(),F=a("div"),w(xe.$$.fragment),hn=h(),R=a("p"),un=i("The "),at=a("a"),gn=i("SEWDModel"),_n=i(" forward method, overrides the "),kt=a("code"),vn=i("__call__"),bn=i(" special method."),wn=h(),w(ae.$$.fragment),yn=h(),w(se.$$.fragment),Zt=h(),U=a("h2"),re=a("a"),Ct=a("span"),w(qe.$$.fragment),En=h(),Tt=a("span"),$n=i("SEWDForCTC"),eo=h(),T=a("div"),w(je.$$.fragment),Sn=h(),B=a("p"),Wn=i("SEW-D Model with a "),xt=a("code"),Dn=i("language modeling"),kn=i(` head on top for Connectionist Temporal Classification (CTC).
SEW-D was proposed in `),Pe=a("a"),Cn=i(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),Tn=i(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),xn=h(),Fe=a("p"),qn=i("This model inherits from "),st=a("a"),jn=i("PreTrainedModel"),Pn=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),Fn=h(),Me=a("p"),Mn=i("This model is a PyTorch "),ze=a("a"),zn=i("torch.nn.Module"),An=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),On=h(),q=a("div"),w(Ae.$$.fragment),Ln=h(),J=a("p"),Vn=i("The "),rt=a("a"),In=i("SEWDForCTC"),Nn=i(" forward method, overrides the "),qt=a("code"),Kn=i("__call__"),Hn=i(" special method."),Rn=h(),w(ie.$$.fragment),Un=h(),w(le.$$.fragment),Bn=h(),w(de.$$.fragment),to=h(),Q=a("h2"),ce=a("a"),jt=a("span"),w(Oe.$$.fragment),Jn=h(),Pt=a("span"),Qn=i("SEWDForSequenceClassification"),oo=h(),k=a("div"),w(Le.$$.fragment),Yn=h(),Ft=a("p"),Gn=i(`SEWD Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),Xn=h(),Ve=a("p"),Zn=i("SEW-D was proposed in "),Ie=a("a"),ea=i(`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),ta=i(` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),oa=h(),Ne=a("p"),na=i("This model inherits from "),it=a("a"),aa=i("PreTrainedModel"),sa=i(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ra=h(),Ke=a("p"),ia=i("This model is a PyTorch "),He=a("a"),la=i("torch.nn.Module"),da=i(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ca=h(),j=a("div"),w(Re.$$.fragment),pa=h(),Y=a("p"),ma=i("The "),lt=a("a"),fa=i("SEWDForSequenceClassification"),ha=i(" forward method, overrides the "),Mt=a("code"),ua=i("__call__"),ga=i(" special method."),_a=h(),w(pe.$$.fragment),va=h(),w(me.$$.fragment),ba=h(),w(fe.$$.fragment),this.h()},l(t){const f=ps('[data-svelte="svelte-1phssyn"]',document.head);d=s(f,"META",{name:!0,content:!0}),f.forEach(o),v=u(t),c=s(t,"H1",{class:!0});var Ue=r(c);m=s(Ue,"A",{id:!0,class:!0,href:!0});var zt=r(m);b=s(zt,"SPAN",{});var At=r(b);y(n.$$.fragment,At),At.forEach(o),zt.forEach(o),g=u(Ue),x=s(Ue,"SPAN",{});var Ot=r(x);wo=l(Ot,"SEW-D"),Ot.forEach(o),Ue.forEach(o),Nt=u(t),V=s(t,"H2",{class:!0});var Be=r(V);G=s(Be,"A",{id:!0,class:!0,href:!0});var Lt=r(G);bt=s(Lt,"SPAN",{});var Vt=r(bt);y(ge.$$.fragment,Vt),Vt.forEach(o),Lt.forEach(o),yo=u(Be),wt=s(Be,"SPAN",{});var It=r(wt);Eo=l(It,"Overview"),It.forEach(o),Be.forEach(o),Kt=u(t),X=s(t,"P",{});var Je=r(X);$o=l(Je,"SEW-D (Squeezed and Efficient Wav2Vec with Disentangled attention) was proposed in "),_e=s(Je,"A",{href:!0,rel:!0});var ya=r(_e);So=l(ya,`Performance-Efficiency Trade-offs
in Unsupervised Pre-training for Speech Recognition`),ya.forEach(o),Wo=l(Je,` by Felix Wu, Kwangyoun Kim,
Jing Pan, Kyu Han, Kilian Q. Weinberger, Yoav Artzi.`),Je.forEach(o),Ht=u(t),Ye=s(t,"P",{});var Ea=r(Ye);Do=l(Ea,"The abstract from the paper is the following:"),Ea.forEach(o),Rt=u(t),Ge=s(t,"P",{});var $a=r(Ge);yt=s($a,"EM",{});var Sa=r(yt);ko=l(Sa,`This paper is a study of performance-efficiency trade-offs in pre-trained models for automatic speech recognition
(ASR). We focus on wav2vec 2.0, and formalize several architecture designs that influence both the model performance
and its efficiency. Putting together all our observations, we introduce SEW (Squeezed and Efficient Wav2vec), a
pre-trained model architecture with significant improvements along both performance and efficiency dimensions across a
variety of training setups. For example, under the 100h-960h semi-supervised setup on LibriSpeech, SEW achieves a 1.9x
inference speedup compared to wav2vec 2.0, with a 13.5% relative reduction in word error rate. With a similar inference
time, SEW reduces word error rate by 25-50% across different model sizes.`),Sa.forEach(o),$a.forEach(o),Ut=u(t),Xe=s(t,"P",{});var Wa=r(Xe);Co=l(Wa,"Tips:"),Wa.forEach(o),Bt=u(t),Z=s(t,"UL",{});var ao=r(Z);Et=s(ao,"LI",{});var Da=r(Et);To=l(Da,"SEW-D is a speech model that accepts a float array corresponding to the raw waveform of the speech signal."),Da.forEach(o),xo=u(ao),ve=s(ao,"LI",{});var so=r(ve);qo=l(so,`SEWDForCTC is fine-tuned using connectionist temporal classification (CTC) so the model output has to be decoded
using `),Ze=s(so,"A",{href:!0});var ka=r(Ze);jo=l(ka,"Wav2Vec2CTCTokenizer"),ka.forEach(o),Po=l(so,"."),so.forEach(o),ao.forEach(o),Jt=u(t),ee=s(t,"P",{});var ro=r(ee);Fo=l(ro,"This model was contributed by "),be=s(ro,"A",{href:!0,rel:!0});var Ca=r(be);Mo=l(Ca,"anton-l"),Ca.forEach(o),zo=l(ro,"."),ro.forEach(o),Qt=u(t),I=s(t,"H2",{class:!0});var io=r(I);te=s(io,"A",{id:!0,class:!0,href:!0});var Ta=r(te);$t=s(Ta,"SPAN",{});var xa=r($t);y(we.$$.fragment,xa),xa.forEach(o),Ta.forEach(o),Ao=u(io),St=s(io,"SPAN",{});var qa=r(St);Oo=l(qa,"SEWDConfig"),qa.forEach(o),io.forEach(o),Yt=u(t),P=s(t,"DIV",{class:!0});var he=r(P);y(ye.$$.fragment,he),Lo=u(he),N=s(he,"P",{});var dt=r(N);Vo=l(dt,"This is the configuration class to store the configuration of a "),et=s(dt,"A",{href:!0});var ja=r(et);Io=l(ja,"SEWDModel"),ja.forEach(o),No=l(dt,`. It is used to instantiate a SEW-D
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the SEW-D
`),Ee=s(dt,"A",{href:!0,rel:!0});var Pa=r(Ee);Ko=l(Pa,"asapp/sew-d-tiny-100k"),Pa.forEach(o),Ho=l(dt," architecture."),dt.forEach(o),Ro=u(he),K=s(he,"P",{});var ct=r(K);Uo=l(ct,"Configuration objects inherit from "),tt=s(ct,"A",{href:!0});var Fa=r(tt);Bo=l(Fa,"PretrainedConfig"),Fa.forEach(o),Jo=l(ct,` and can be used to control the model outputs. Read the
documentation from `),ot=s(ct,"A",{href:!0});var Ma=r(ot);Qo=l(Ma,"PretrainedConfig"),Ma.forEach(o),Yo=l(ct," for more information."),ct.forEach(o),Go=u(he),y(oe.$$.fragment,he),he.forEach(o),Gt=u(t),H=s(t,"H2",{class:!0});var lo=r(H);ne=s(lo,"A",{id:!0,class:!0,href:!0});var za=r(ne);Wt=s(za,"SPAN",{});var Aa=r(Wt);y($e.$$.fragment,Aa),Aa.forEach(o),za.forEach(o),Xo=u(lo),Dt=s(lo,"SPAN",{});var Oa=r(Dt);Zo=l(Oa,"SEWDModel"),Oa.forEach(o),lo.forEach(o),Xt=u(t),C=s(t,"DIV",{class:!0});var z=r(C);y(Se.$$.fragment,z),en=u(z),We=s(z,"P",{});var co=r(We);tn=l(co,`The bare SEW-D Model transformer outputting raw hidden-states without any specific head on top.
SEW-D was proposed in `),De=s(co,"A",{href:!0,rel:!0});var La=r(De);on=l(La,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),La.forEach(o),nn=l(co,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),co.forEach(o),an=u(z),ke=s(z,"P",{});var po=r(ke);sn=l(po,"This model inherits from "),nt=s(po,"A",{href:!0});var Va=r(nt);rn=l(Va,"PreTrainedModel"),Va.forEach(o),ln=l(po,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),po.forEach(o),dn=u(z),Ce=s(z,"P",{});var mo=r(Ce);cn=l(mo,"This model is a PyTorch "),Te=s(mo,"A",{href:!0,rel:!0});var Ia=r(Te);pn=l(Ia,"torch.nn.Module"),Ia.forEach(o),mn=l(mo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mo.forEach(o),fn=u(z),F=s(z,"DIV",{class:!0});var ue=r(F);y(xe.$$.fragment,ue),hn=u(ue),R=s(ue,"P",{});var pt=r(R);un=l(pt,"The "),at=s(pt,"A",{href:!0});var Na=r(at);gn=l(Na,"SEWDModel"),Na.forEach(o),_n=l(pt," forward method, overrides the "),kt=s(pt,"CODE",{});var Ka=r(kt);vn=l(Ka,"__call__"),Ka.forEach(o),bn=l(pt," special method."),pt.forEach(o),wn=u(ue),y(ae.$$.fragment,ue),yn=u(ue),y(se.$$.fragment,ue),ue.forEach(o),z.forEach(o),Zt=u(t),U=s(t,"H2",{class:!0});var fo=r(U);re=s(fo,"A",{id:!0,class:!0,href:!0});var Ha=r(re);Ct=s(Ha,"SPAN",{});var Ra=r(Ct);y(qe.$$.fragment,Ra),Ra.forEach(o),Ha.forEach(o),En=u(fo),Tt=s(fo,"SPAN",{});var Ua=r(Tt);$n=l(Ua,"SEWDForCTC"),Ua.forEach(o),fo.forEach(o),eo=u(t),T=s(t,"DIV",{class:!0});var A=r(T);y(je.$$.fragment,A),Sn=u(A),B=s(A,"P",{});var mt=r(B);Wn=l(mt,"SEW-D Model with a "),xt=s(mt,"CODE",{});var Ba=r(xt);Dn=l(Ba,"language modeling"),Ba.forEach(o),kn=l(mt,` head on top for Connectionist Temporal Classification (CTC).
SEW-D was proposed in `),Pe=s(mt,"A",{href:!0,rel:!0});var Ja=r(Pe);Cn=l(Ja,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),Ja.forEach(o),Tn=l(mt,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),mt.forEach(o),xn=u(A),Fe=s(A,"P",{});var ho=r(Fe);qn=l(ho,"This model inherits from "),st=s(ho,"A",{href:!0});var Qa=r(st);jn=l(Qa,"PreTrainedModel"),Qa.forEach(o),Pn=l(ho,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),ho.forEach(o),Fn=u(A),Me=s(A,"P",{});var uo=r(Me);Mn=l(uo,"This model is a PyTorch "),ze=s(uo,"A",{href:!0,rel:!0});var Ya=r(ze);zn=l(Ya,"torch.nn.Module"),Ya.forEach(o),An=l(uo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uo.forEach(o),On=u(A),q=s(A,"DIV",{class:!0});var O=r(q);y(Ae.$$.fragment,O),Ln=u(O),J=s(O,"P",{});var ft=r(J);Vn=l(ft,"The "),rt=s(ft,"A",{href:!0});var Ga=r(rt);In=l(Ga,"SEWDForCTC"),Ga.forEach(o),Nn=l(ft," forward method, overrides the "),qt=s(ft,"CODE",{});var Xa=r(qt);Kn=l(Xa,"__call__"),Xa.forEach(o),Hn=l(ft," special method."),ft.forEach(o),Rn=u(O),y(ie.$$.fragment,O),Un=u(O),y(le.$$.fragment,O),Bn=u(O),y(de.$$.fragment,O),O.forEach(o),A.forEach(o),to=u(t),Q=s(t,"H2",{class:!0});var go=r(Q);ce=s(go,"A",{id:!0,class:!0,href:!0});var Za=r(ce);jt=s(Za,"SPAN",{});var es=r(jt);y(Oe.$$.fragment,es),es.forEach(o),Za.forEach(o),Jn=u(go),Pt=s(go,"SPAN",{});var ts=r(Pt);Qn=l(ts,"SEWDForSequenceClassification"),ts.forEach(o),go.forEach(o),oo=u(t),k=s(t,"DIV",{class:!0});var M=r(k);y(Le.$$.fragment,M),Yn=u(M),Ft=s(M,"P",{});var os=r(Ft);Gn=l(os,`SEWD Model with a sequence classification head on top (a linear layer over the pooled output) for tasks like SUPERB
Keyword Spotting.`),os.forEach(o),Xn=u(M),Ve=s(M,"P",{});var _o=r(Ve);Zn=l(_o,"SEW-D was proposed in "),Ie=s(_o,"A",{href:!0,rel:!0});var ns=r(Ie);ea=l(ns,`Performance-Efficiency Trade-offs in Unsupervised Pre-training for Speech
Recognition`),ns.forEach(o),ta=l(_o,` by Felix Wu, Kwangyoun Kim, Jing Pan, Kyu Han, Kilian Q. Weinberger,
Yoav Artzi.`),_o.forEach(o),oa=u(M),Ne=s(M,"P",{});var vo=r(Ne);na=l(vo,"This model inherits from "),it=s(vo,"A",{href:!0});var as=r(it);aa=l(as,"PreTrainedModel"),as.forEach(o),sa=l(vo,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`),vo.forEach(o),ra=u(M),Ke=s(M,"P",{});var bo=r(Ke);ia=l(bo,"This model is a PyTorch "),He=s(bo,"A",{href:!0,rel:!0});var ss=r(He);la=l(ss,"torch.nn.Module"),ss.forEach(o),da=l(bo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bo.forEach(o),ca=u(M),j=s(M,"DIV",{class:!0});var L=r(j);y(Re.$$.fragment,L),pa=u(L),Y=s(L,"P",{});var ht=r(Y);ma=l(ht,"The "),lt=s(ht,"A",{href:!0});var rs=r(lt);fa=l(rs,"SEWDForSequenceClassification"),rs.forEach(o),ha=l(ht," forward method, overrides the "),Mt=s(ht,"CODE",{});var is=r(Mt);ua=l(is,"__call__"),is.forEach(o),ga=l(ht," special method."),ht.forEach(o),_a=u(L),y(pe.$$.fragment,L),va=u(L),y(me.$$.fragment,L),ba=u(L),y(fe.$$.fragment,L),L.forEach(o),M.forEach(o),this.h()},h(){p(d,"name","hf:doc:metadata"),p(d,"content",JSON.stringify($s)),p(m,"id","sewd"),p(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(m,"href","#sewd"),p(c,"class","relative group"),p(G,"id","overview"),p(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(G,"href","#overview"),p(V,"class","relative group"),p(_e,"href","https://arxiv.org/abs/2109.06870"),p(_e,"rel","nofollow"),p(Ze,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer"),p(be,"href","https://huggingface.co/anton-l"),p(be,"rel","nofollow"),p(te,"id","transformers.SEWDConfig"),p(te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(te,"href","#transformers.SEWDConfig"),p(I,"class","relative group"),p(et,"href","/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDModel"),p(Ee,"href","https://huggingface.co/asapp/sew-d-tiny-100k"),p(Ee,"rel","nofollow"),p(tt,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),p(ot,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),p(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ne,"id","transformers.SEWDModel"),p(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ne,"href","#transformers.SEWDModel"),p(H,"class","relative group"),p(De,"href","https://arxiv.org/abs/2109.06870"),p(De,"rel","nofollow"),p(nt,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),p(Te,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Te,"rel","nofollow"),p(at,"href","/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDModel"),p(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(re,"id","transformers.SEWDForCTC"),p(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(re,"href","#transformers.SEWDForCTC"),p(U,"class","relative group"),p(Pe,"href","https://arxiv.org/abs/2109.06870"),p(Pe,"rel","nofollow"),p(st,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),p(ze,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(ze,"rel","nofollow"),p(rt,"href","/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDForCTC"),p(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(ce,"id","transformers.SEWDForSequenceClassification"),p(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ce,"href","#transformers.SEWDForSequenceClassification"),p(Q,"class","relative group"),p(Ie,"href","https://arxiv.org/abs/2109.06870"),p(Ie,"rel","nofollow"),p(it,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),p(He,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(He,"rel","nofollow"),p(lt,"href","/docs/transformers/v4.21.1/en/model_doc/sew-d#transformers.SEWDForSequenceClassification"),p(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),p(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,f){e(document.head,d),_(t,v,f),_(t,c,f),e(c,m),e(m,b),E(n,b,null),e(c,g),e(c,x),e(x,wo),_(t,Nt,f),_(t,V,f),e(V,G),e(G,bt),E(ge,bt,null),e(V,yo),e(V,wt),e(wt,Eo),_(t,Kt,f),_(t,X,f),e(X,$o),e(X,_e),e(_e,So),e(X,Wo),_(t,Ht,f),_(t,Ye,f),e(Ye,Do),_(t,Rt,f),_(t,Ge,f),e(Ge,yt),e(yt,ko),_(t,Ut,f),_(t,Xe,f),e(Xe,Co),_(t,Bt,f),_(t,Z,f),e(Z,Et),e(Et,To),e(Z,xo),e(Z,ve),e(ve,qo),e(ve,Ze),e(Ze,jo),e(ve,Po),_(t,Jt,f),_(t,ee,f),e(ee,Fo),e(ee,be),e(be,Mo),e(ee,zo),_(t,Qt,f),_(t,I,f),e(I,te),e(te,$t),E(we,$t,null),e(I,Ao),e(I,St),e(St,Oo),_(t,Yt,f),_(t,P,f),E(ye,P,null),e(P,Lo),e(P,N),e(N,Vo),e(N,et),e(et,Io),e(N,No),e(N,Ee),e(Ee,Ko),e(N,Ho),e(P,Ro),e(P,K),e(K,Uo),e(K,tt),e(tt,Bo),e(K,Jo),e(K,ot),e(ot,Qo),e(K,Yo),e(P,Go),E(oe,P,null),_(t,Gt,f),_(t,H,f),e(H,ne),e(ne,Wt),E($e,Wt,null),e(H,Xo),e(H,Dt),e(Dt,Zo),_(t,Xt,f),_(t,C,f),E(Se,C,null),e(C,en),e(C,We),e(We,tn),e(We,De),e(De,on),e(We,nn),e(C,an),e(C,ke),e(ke,sn),e(ke,nt),e(nt,rn),e(ke,ln),e(C,dn),e(C,Ce),e(Ce,cn),e(Ce,Te),e(Te,pn),e(Ce,mn),e(C,fn),e(C,F),E(xe,F,null),e(F,hn),e(F,R),e(R,un),e(R,at),e(at,gn),e(R,_n),e(R,kt),e(kt,vn),e(R,bn),e(F,wn),E(ae,F,null),e(F,yn),E(se,F,null),_(t,Zt,f),_(t,U,f),e(U,re),e(re,Ct),E(qe,Ct,null),e(U,En),e(U,Tt),e(Tt,$n),_(t,eo,f),_(t,T,f),E(je,T,null),e(T,Sn),e(T,B),e(B,Wn),e(B,xt),e(xt,Dn),e(B,kn),e(B,Pe),e(Pe,Cn),e(B,Tn),e(T,xn),e(T,Fe),e(Fe,qn),e(Fe,st),e(st,jn),e(Fe,Pn),e(T,Fn),e(T,Me),e(Me,Mn),e(Me,ze),e(ze,zn),e(Me,An),e(T,On),e(T,q),E(Ae,q,null),e(q,Ln),e(q,J),e(J,Vn),e(J,rt),e(rt,In),e(J,Nn),e(J,qt),e(qt,Kn),e(J,Hn),e(q,Rn),E(ie,q,null),e(q,Un),E(le,q,null),e(q,Bn),E(de,q,null),_(t,to,f),_(t,Q,f),e(Q,ce),e(ce,jt),E(Oe,jt,null),e(Q,Jn),e(Q,Pt),e(Pt,Qn),_(t,oo,f),_(t,k,f),E(Le,k,null),e(k,Yn),e(k,Ft),e(Ft,Gn),e(k,Xn),e(k,Ve),e(Ve,Zn),e(Ve,Ie),e(Ie,ea),e(Ve,ta),e(k,oa),e(k,Ne),e(Ne,na),e(Ne,it),e(it,aa),e(Ne,sa),e(k,ra),e(k,Ke),e(Ke,ia),e(Ke,He),e(He,la),e(Ke,da),e(k,ca),e(k,j),E(Re,j,null),e(j,pa),e(j,Y),e(Y,ma),e(Y,lt),e(lt,fa),e(Y,ha),e(Y,Mt),e(Mt,ua),e(Y,ga),e(j,_a),E(pe,j,null),e(j,va),E(me,j,null),e(j,ba),E(fe,j,null),no=!0},p(t,[f]){const Ue={};f&2&&(Ue.$$scope={dirty:f,ctx:t}),oe.$set(Ue);const zt={};f&2&&(zt.$$scope={dirty:f,ctx:t}),ae.$set(zt);const At={};f&2&&(At.$$scope={dirty:f,ctx:t}),se.$set(At);const Ot={};f&2&&(Ot.$$scope={dirty:f,ctx:t}),ie.$set(Ot);const Be={};f&2&&(Be.$$scope={dirty:f,ctx:t}),le.$set(Be);const Lt={};f&2&&(Lt.$$scope={dirty:f,ctx:t}),de.$set(Lt);const Vt={};f&2&&(Vt.$$scope={dirty:f,ctx:t}),pe.$set(Vt);const It={};f&2&&(It.$$scope={dirty:f,ctx:t}),me.$set(It);const Je={};f&2&&(Je.$$scope={dirty:f,ctx:t}),fe.$set(Je)},i(t){no||($(n.$$.fragment,t),$(ge.$$.fragment,t),$(we.$$.fragment,t),$(ye.$$.fragment,t),$(oe.$$.fragment,t),$($e.$$.fragment,t),$(Se.$$.fragment,t),$(xe.$$.fragment,t),$(ae.$$.fragment,t),$(se.$$.fragment,t),$(qe.$$.fragment,t),$(je.$$.fragment,t),$(Ae.$$.fragment,t),$(ie.$$.fragment,t),$(le.$$.fragment,t),$(de.$$.fragment,t),$(Oe.$$.fragment,t),$(Le.$$.fragment,t),$(Re.$$.fragment,t),$(pe.$$.fragment,t),$(me.$$.fragment,t),$(fe.$$.fragment,t),no=!0)},o(t){S(n.$$.fragment,t),S(ge.$$.fragment,t),S(we.$$.fragment,t),S(ye.$$.fragment,t),S(oe.$$.fragment,t),S($e.$$.fragment,t),S(Se.$$.fragment,t),S(xe.$$.fragment,t),S(ae.$$.fragment,t),S(se.$$.fragment,t),S(qe.$$.fragment,t),S(je.$$.fragment,t),S(Ae.$$.fragment,t),S(ie.$$.fragment,t),S(le.$$.fragment,t),S(de.$$.fragment,t),S(Oe.$$.fragment,t),S(Le.$$.fragment,t),S(Re.$$.fragment,t),S(pe.$$.fragment,t),S(me.$$.fragment,t),S(fe.$$.fragment,t),no=!1},d(t){o(d),t&&o(v),t&&o(c),W(n),t&&o(Nt),t&&o(V),W(ge),t&&o(Kt),t&&o(X),t&&o(Ht),t&&o(Ye),t&&o(Rt),t&&o(Ge),t&&o(Ut),t&&o(Xe),t&&o(Bt),t&&o(Z),t&&o(Jt),t&&o(ee),t&&o(Qt),t&&o(I),W(we),t&&o(Yt),t&&o(P),W(ye),W(oe),t&&o(Gt),t&&o(H),W($e),t&&o(Xt),t&&o(C),W(Se),W(xe),W(ae),W(se),t&&o(Zt),t&&o(U),W(qe),t&&o(eo),t&&o(T),W(je),W(Ae),W(ie),W(le),W(de),t&&o(to),t&&o(Q),W(Oe),t&&o(oo),t&&o(k),W(Le),W(Re),W(pe),W(me),W(fe)}}}const $s={local:"sewd",sections:[{local:"overview",title:"Overview"},{local:"transformers.SEWDConfig",title:"SEWDConfig"},{local:"transformers.SEWDModel",title:"SEWDModel"},{local:"transformers.SEWDForCTC",title:"SEWDForCTC"},{local:"transformers.SEWDForSequenceClassification",title:"SEWDForSequenceClassification"}],title:"SEW-D"};function Ss(D){return ms(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class qs extends ls{constructor(d){super();ds(this,d,Ss,Es,cs,{})}}export{qs as default,$s as metadata};
