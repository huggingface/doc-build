import{S as ti,i as oi,s as ri,e as a,k as l,w as g,t as r,M as si,c as n,d as o,m as d,a as c,x as v,h as s,b as i,G as e,g as h,y as T,q as x,o as k,B as b,v as ai,L as ei}from"../../chunks/vendor-hf-doc-builder.js";import{T as Yc}from"../../chunks/Tip-hf-doc-builder.js";import{D}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Pr}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as gt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Zc}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ni(B){let m,E,u,_,w;return _=new Pr({props:{code:`from transformers import Speech2Text2ForCausalLM, Speech2Text2Config

# Initializing a Speech2Text2 s2t_transformer_s style configuration
configuration = Speech2Text2Config()

# Initializing a model from the s2t_transformer_s style configuration
model = Speech2Text2ForCausalLM(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2Text2ForCausalLM, Speech2Text2Config

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Speech2Text2 s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Speech2Text2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the s2t_transformer_s style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Speech2Text2ForCausalLM(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){m=a("p"),E=r("Example:"),u=l(),g(_.$$.fragment)},l(f){m=n(f,"P",{});var S=c(m);E=s(S,"Example:"),S.forEach(o),u=d(f),v(_.$$.fragment,f)},m(f,S){h(f,m,S),e(m,E),h(f,u,S),T(_,f,S),w=!0},p:ei,i(f){w||(x(_.$$.fragment,f),w=!0)},o(f){k(_.$$.fragment,f),w=!1},d(f){f&&o(m),f&&o(u),b(_,f)}}}function ci(B){let m,E,u,_,w,f,S,I;return{c(){m=a("p"),E=r(`This class method is simply calling the feature extractor
`),u=a("a"),_=r("from_pretrained()"),w=r(` and the tokenizer
`),f=a("code"),S=r("from_pretrained"),I=r(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(q){m=n(q,"P",{});var y=c(m);E=s(y,`This class method is simply calling the feature extractor
`),u=n(y,"A",{href:!0});var F=c(u);_=s(F,"from_pretrained()"),F.forEach(o),w=s(y,` and the tokenizer
`),f=n(y,"CODE",{});var M=c(f);S=s(M,"from_pretrained"),M.forEach(o),I=s(y,` methods. Please refer to the docstrings of the
methods above for more information.`),y.forEach(o),this.h()},h(){i(u,"href","/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(q,y){h(q,m,y),e(m,E),e(m,u),e(u,_),e(m,w),e(m,f),e(f,S),e(m,I)},d(q){q&&o(m)}}}function ii(B){let m,E,u,_,w,f,S,I;return{c(){m=a("p"),E=r("This class method is simply calling "),u=a("a"),_=r("save_pretrained()"),w=r(` and
`),f=a("code"),S=r("save_pretrained"),I=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(q){m=n(q,"P",{});var y=c(m);E=s(y,"This class method is simply calling "),u=n(y,"A",{href:!0});var F=c(u);_=s(F,"save_pretrained()"),F.forEach(o),w=s(y,` and
`),f=n(y,"CODE",{});var M=c(f);S=s(M,"save_pretrained"),M.forEach(o),I=s(y,`. Please refer to the docstrings of the methods
above for more information.`),y.forEach(o),this.h()},h(){i(u,"href","/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(q,y){h(q,m,y),e(m,E),e(m,u),e(u,_),e(m,w),e(m,f),e(f,S),e(m,I)},d(q){q&&o(m)}}}function li(B){let m,E,u,_,w;return _=new Pr({props:{code:`from transformers import (
    SpeechEncoderDecoderModel,
    Speech2Text2ForCausalLM,
    Wav2Vec2Model,
    Speech2Text2Config,
    Wav2Vec2Config,
    Wav2Vec2FeatureExtractor,
    Speech2Text2Tokenizer,
)
from datasets import load_dataset

feature_extractor = Wav2Vec2FeatureExtractor()
tokenizer = Speech2Text2Tokenizer.from_pretrained("facebook/s2t-wav2vec2-large-en-de")

encoder = Wav2Vec2Model(Wav2Vec2Config())
decoder = Speech2Text2ForCausalLM(Speech2Text2Config())
# init random speech2text model

model = SpeechEncoderDecoderModel(encoder=encoder, decoder=decoder)
model.config.pad_token_id = tokenizer.pad_token_id
model.config.decoder_start_token_id = tokenizer.bos_token_id
# pre-process inputs and labels

ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
inputs = feature_extractor(
    ds[0]["audio"]["array"], sampling_rate=ds[0]["audio"]["sampling_rate"], return_tensors="pt"
)
input_values = inputs.input_values
decoder_input_ids = tokenizer(ds[0]["text"], return_tensors="pt").input_ids
# compute loss

loss = model(inputs=input_values, labels=decoder_input_ids).loss
# backprop loss

loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    SpeechEncoderDecoderModel,
<span class="hljs-meta">... </span>    Speech2Text2ForCausalLM,
<span class="hljs-meta">... </span>    Wav2Vec2Model,
<span class="hljs-meta">... </span>    Speech2Text2Config,
<span class="hljs-meta">... </span>    Wav2Vec2Config,
<span class="hljs-meta">... </span>    Wav2Vec2FeatureExtractor,
<span class="hljs-meta">... </span>    Speech2Text2Tokenizer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = Wav2Vec2FeatureExtractor()
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = Speech2Text2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder = Wav2Vec2Model(Wav2Vec2Config())
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder = Speech2Text2ForCausalLM(Speech2Text2Config())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># init random speech2text model</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel(encoder=encoder, decoder=decoder)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = tokenizer.pad_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.decoder_start_token_id = tokenizer.bos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># pre-process inputs and labels</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;sampling_rate&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_values = inputs.input_values
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(ds[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(inputs=input_values, labels=decoder_input_ids).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># backprop loss</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){m=a("p"),E=r("Example:"),u=l(),g(_.$$.fragment)},l(f){m=n(f,"P",{});var S=c(m);E=s(S,"Example:"),S.forEach(o),u=d(f),v(_.$$.fragment,f)},m(f,S){h(f,m,S),e(m,E),h(f,u,S),T(_,f,S),w=!0},p:ei,i(f){w||(x(_.$$.fragment,f),w=!0)},o(f){k(_.$$.fragment,f),w=!1},d(f){f&&o(m),f&&o(u),b(_,f)}}}function di(B){let m,E,u,_,w,f,S,I,q,y,F,M,oo,ze,jr,ro,Cr,Ao,J,qr,vt,Fr,Mr,Pe,Ar,Lr,Lo,z,Dr,so,Ir,Wr,ao,Vr,Nr,Tt,Or,Ur,xt,Rr,Hr,kt,Br,Jr,no,Gr,Kr,Do,ne,Qr,je,Xr,Yr,Io,ce,Zr,Ce,es,ts,Wo,bt,os,Vo,G,qe,rs,Fe,ss,as,ns,Me,cs,St,is,ls,ds,Ae,ps,Le,hs,fs,No,Z,ie,co,De,ms,io,us,Oo,K,_s,wt,gs,vs,$t,Ts,xs,Uo,C,ks,yt,bs,Ss,Et,ws,$s,zt,ys,Es,Pt,zs,Ps,jt,js,Cs,Ro,Ct,lo,qs,Ho,Ie,Bo,qt,We,po,Fs,Ms,ho,As,Jo,Ve,Go,le,Ls,Ne,Ds,Is,Ko,ee,de,fo,Oe,Ws,mo,Vs,Qo,W,Ue,Ns,te,Os,Ft,Us,Rs,Re,Hs,Bs,Js,oe,Gs,Mt,Ks,Qs,At,Xs,Ys,Zs,pe,Xo,re,he,uo,He,ea,_o,ta,Yo,j,Be,oa,go,ra,sa,Je,aa,Lt,na,ca,ia,fe,Ge,la,vo,da,pa,Q,Ke,ha,To,fa,ma,Qe,ua,xo,_a,ga,va,Dt,Xe,Zo,se,me,ko,Ye,Ta,bo,xa,er,$,Ze,ka,So,ba,Sa,A,It,wa,$a,Wt,ya,Ea,Vt,za,Pa,et,wo,ja,Ca,qa,Nt,Fa,Ma,Aa,ue,tt,La,U,Da,$o,Ia,Wa,Ot,Va,Na,ot,yo,Oa,Ua,Ra,Ha,X,rt,Ba,Eo,Ja,Ga,_e,Ka,Y,st,Qa,at,Xa,Ut,Ya,Za,en,ge,tn,ve,nt,on,ct,rn,Rt,sn,an,nn,Te,it,cn,lt,ln,Ht,dn,pn,hn,xe,dt,fn,zo,mn,tr,ae,ke,Po,pt,un,jo,_n,or,V,ht,gn,R,vn,Bt,Tn,xn,Co,kn,bn,Jt,Sn,wn,$n,ft,yn,mt,En,zn,Pn,be,ut,jn,Se,rr;return f=new gt({}),ze=new gt({}),De=new gt({}),Ie=new Pr({props:{code:`import torch
from transformers import Speech2Text2Processor, SpeechEncoderDecoderModel
from datasets import load_dataset
import soundfile as sf

model = SpeechEncoderDecoderModel.from_pretrained("facebook/s2t-wav2vec2-large-en-de")
processor = Speech2Text2Processor.from_pretrained("facebook/s2t-wav2vec2-large-en-de")


def map_to_array(batch):
    speech, _ = sf.read(batch["file"])
    batch["speech"] = speech
    return batch


ds = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
ds = ds.map(map_to_array)

inputs = processor(ds["speech"][0], sampling_rate=16_000, return_tensors="pt")
generated_ids = model.generate(inputs=inputs["input_values"], attention_mask=inputs["attention_mask"])

transcription = processor.batch_decode(generated_ids)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Speech2Text2Processor, SpeechEncoderDecoderModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> soundfile <span class="hljs-keyword">as</span> sf

<span class="hljs-meta">&gt;&gt;&gt; </span>model = SpeechEncoderDecoderModel.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = Speech2Text2Processor.from_pretrained(<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">map_to_array</span>(<span class="hljs-params">batch</span>):
<span class="hljs-meta">... </span>    speech, _ = sf.read(batch[<span class="hljs-string">&quot;file&quot;</span>])
<span class="hljs-meta">... </span>    batch[<span class="hljs-string">&quot;speech&quot;</span>] = speech
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> batch


<span class="hljs-meta">&gt;&gt;&gt; </span>ds = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = ds.<span class="hljs-built_in">map</span>(map_to_array)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(ds[<span class="hljs-string">&quot;speech&quot;</span>][<span class="hljs-number">0</span>], sampling_rate=<span class="hljs-number">16_000</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(inputs=inputs[<span class="hljs-string">&quot;input_values&quot;</span>], attention_mask=inputs[<span class="hljs-string">&quot;attention_mask&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(generated_ids)`}}),Ve=new Pr({props:{code:`from datasets import load_dataset
from transformers import pipeline

librispeech_en = load_dataset("hf-internal-testing/librispeech_asr_dummy", "clean", split="validation")
asr = pipeline(
    "automatic-speech-recognition",
    model="facebook/s2t-wav2vec2-large-en-de",
    feature_extractor="facebook/s2t-wav2vec2-large-en-de",
)

translation_de = asr(librispeech_en[0]["file"])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>librispeech_en = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_dummy&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>asr = pipeline(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;automatic-speech-recognition&quot;</span>,
<span class="hljs-meta">... </span>    model=<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>,
<span class="hljs-meta">... </span>    feature_extractor=<span class="hljs-string">&quot;facebook/s2t-wav2vec2-large-en-de&quot;</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>translation_de = asr(librispeech_en[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>])`}}),Oe=new gt({}),Ue=new D({props:{name:"class transformers.Speech2Text2Config",anchor:"transformers.Speech2Text2Config",parameters:[{name:"vocab_size",val:" = 10000"},{name:"decoder_layers",val:" = 6"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 4"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"activation_function",val:" = 'relu'"},{name:"d_model",val:" = 256"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"max_source_positions",val:" = 6000"},{name:"max_target_positions",val:" = 1024"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the Speech2Text model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2Text2Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.Speech2Text2Config.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.Speech2Text2Config.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.Speech2Text2Config.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.Speech2Text2Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the pooler. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.Speech2Text2Config.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, and pooler.`,name:"dropout"},{anchor:"transformers.Speech2Text2Config.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Speech2Text2Config.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.Speech2Text2Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.Speech2Text2Config.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.
<a href="https://arxiv.org/abs/1909.11556%3E%60" rel="nofollow">https://arxiv.org/abs/1909.11556&gt;\`</a>__ for more details. decoder_layerdrop: (<code>float</code>, <em>optional</em>, defaults to
0.0): The LayerDrop probability for the decoder. See the [LayerDrop paper](see
<a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more details.`,name:"init_std"},{anchor:"transformers.Speech2Text2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.Speech2Text2Config.max_source_positions",description:`<strong>max_source_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 6000) &#x2014;
The maximum sequence length of log-mel filter-bank features that this model might ever be used with.
max_target_positions &#x2014; (<code>int</code>, <em>optional</em>, defaults to 1024):
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_source_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/configuration_speech_to_text_2.py#L31"}}),pe=new Zc({props:{anchor:"transformers.Speech2Text2Config.example",$$slots:{default:[ni]},$$scope:{ctx:B}}}),He=new gt({}),Be=new D({props:{name:"class transformers.Speech2Text2Tokenizer",anchor:"transformers.Speech2Text2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_lower_case",val:" = False"},{name:"merges_file",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2Text2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2Text2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2Text2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2Text2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L73"}}),Ge=new D({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Tokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/tokenization_utils_base.py#L3305",returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ke=new D({props:{name:"decode",anchor:"transformers.Speech2Text2Tokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Speech2Text2Tokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/tokenization_utils_base.py#L3338",returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Xe=new D({props:{name:"save_vocabulary",anchor:"transformers.Speech2Text2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L241"}}),Ye=new gt({}),Ze=new D({props:{name:"class transformers.Speech2Text2Processor",anchor:"transformers.Speech2Text2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>AutoFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.1/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2Text2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2Text2Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L23"}}),tt=new D({props:{name:"__call__",anchor:"transformers.Speech2Text2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L44"}}),rt=new D({props:{name:"from_pretrained",anchor:"transformers.Speech2Text2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained feature_extractor hosted inside a model repo on
huggingface.co. Valid model ids can be located at the root-level, like <code>bert-base-uncased</code>, or
namespaced under a user or organization name, like <code>dbmdz/bert-base-german-cased</code>.</li>
<li>a path to a <em>directory</em> containing a feature extractor file saved using the
<a href="/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
<li>a path or url to a saved feature extractor JSON <em>file</em>, e.g.,
<code>./my_model_directory/preprocessor_config.json</code>.
**kwargs &#x2014;
Additional keyword arguments passed along to both
<a href="/docs/transformers/v4.21.1/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained">from_pretrained()</a> and
<code>from_pretrained</code>.</li>
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/processing_utils.py#L156"}}),_e=new Yc({props:{$$slots:{default:[ci]},$$scope:{ctx:B}}}),st=new D({props:{name:"save_pretrained",anchor:"transformers.Speech2Text2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2Text2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/processing_utils.py#L94"}}),ge=new Yc({props:{$$slots:{default:[ii]},$$scope:{ctx:B}}}),nt=new D({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L54"}}),it=new D({props:{name:"decode",anchor:"transformers.Speech2Text2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L61"}}),dt=new D({props:{name:"as_target_processor",anchor:"transformers.Speech2Text2Processor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L68"}}),pt=new gt({}),ht=new D({props:{name:"class transformers.Speech2Text2ForCausalLM",anchor:"transformers.Speech2Text2ForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config">Speech2Text2Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L747"}}),ut=new D({props:{name:"forward",anchor:"transformers.Speech2Text2ForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.Speech2Text2ForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L778",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config"
>Speech2Text2Config</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new Zc({props:{anchor:"transformers.Speech2Text2ForCausalLM.forward.example",$$slots:{default:[li]},$$scope:{ctx:B}}}),{c(){m=a("meta"),E=l(),u=a("h1"),_=a("a"),w=a("span"),g(f.$$.fragment),S=l(),I=a("span"),q=r("Speech2Text2"),y=l(),F=a("h2"),M=a("a"),oo=a("span"),g(ze.$$.fragment),jr=l(),ro=a("span"),Cr=r("Overview"),Ao=l(),J=a("p"),qr=r("The Speech2Text2 model is used together with "),vt=a("a"),Fr=r("Wav2Vec2"),Mr=r(` for Speech Translation models proposed in
`),Pe=a("a"),Ar=r("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Lr=r(` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Lo=l(),z=a("p"),Dr=r("Speech2Text2 is a "),so=a("em"),Ir=r("decoder-only"),Wr=r(" transformer model that can be used with any speech "),ao=a("em"),Vr=r("encoder-only"),Nr=r(`, such as
`),Tt=a("a"),Or=r("Wav2Vec2"),Ur=r(" or "),xt=a("a"),Rr=r("HuBERT"),Hr=r(` for Speech-to-Text tasks. Please refer to the
`),kt=a("a"),Br=r("SpeechEncoderDecoder"),Jr=r(" class on how to combine Speech2Text2 with any speech "),no=a("em"),Gr=r("encoder-only"),Kr=r(`
model.`),Do=l(),ne=a("p"),Qr=r("This model was contributed by "),je=a("a"),Xr=r("Patrick von Platen"),Yr=r("."),Io=l(),ce=a("p"),Zr=r("The original code can be found "),Ce=a("a"),es=r("here"),ts=r("."),Wo=l(),bt=a("p"),os=r("Tips:"),Vo=l(),G=a("ul"),qe=a("li"),rs=r(`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),Fe=a("a"),ss=r("official models"),as=r(" ."),ns=l(),Me=a("li"),cs=r("Speech2Text2 is always used within the "),St=a("a"),is=r("SpeechEncoderDecoder"),ls=r(" framework."),ds=l(),Ae=a("li"),ps=r("Speech2Text2\u2019s tokenizer is based on "),Le=a("a"),hs=r("fastBPE"),fs=r("."),No=l(),Z=a("h2"),ie=a("a"),co=a("span"),g(De.$$.fragment),ms=l(),io=a("span"),us=r("Inference"),Oo=l(),K=a("p"),_s=r("Speech2Text2\u2019s "),wt=a("a"),gs=r("SpeechEncoderDecoderModel"),vs=r(` model accepts raw waveform input values from speech and
makes use of `),$t=a("a"),Ts=r("generate()"),xs=r(` to translate the input speech
autoregressively to the target language.`),Uo=l(),C=a("p"),ks=r("The "),yt=a("a"),bs=r("Wav2Vec2FeatureExtractor"),Ss=r(` class is responsible for preprocessing the input speech and
`),Et=a("a"),ws=r("Speech2Text2Tokenizer"),$s=r(` decodes the generated target tokens to the target string. The
`),zt=a("a"),ys=r("Speech2Text2Processor"),Es=r(" wraps "),Pt=a("a"),zs=r("Wav2Vec2FeatureExtractor"),Ps=r(` and
`),jt=a("a"),js=r("Speech2Text2Tokenizer"),Cs=r(` into a single instance to both extract the input features and decode the
predicted token ids.`),Ro=l(),Ct=a("ul"),lo=a("li"),qs=r("Step-by-step Speech Translation"),Ho=l(),g(Ie.$$.fragment),Bo=l(),qt=a("ul"),We=a("li"),po=a("p"),Fs=r("Speech Translation via Pipelines"),Ms=l(),ho=a("p"),As=r("The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),Jo=l(),g(Ve.$$.fragment),Go=l(),le=a("p"),Ls=r("See "),Ne=a("a"),Ds=r("model hub"),Is=r(" to look for Speech2Text2 checkpoints."),Ko=l(),ee=a("h2"),de=a("a"),fo=a("span"),g(Oe.$$.fragment),Ws=l(),mo=a("span"),Vs=r("Speech2Text2Config"),Qo=l(),W=a("div"),g(Ue.$$.fragment),Ns=l(),te=a("p"),Os=r("This is the configuration class to store the configuration of a "),Ft=a("a"),Us=r("Speech2Text2ForCausalLM"),Rs=r(`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Re=a("a"),Hs=r("facebook/s2t-wav2vec2-large-en-de"),Bs=r(" architecture."),Js=l(),oe=a("p"),Gs=r("Configuration objects inherit from "),Mt=a("a"),Ks=r("PretrainedConfig"),Qs=r(` and can be used to control the model outputs. Read the
documentation from `),At=a("a"),Xs=r("PretrainedConfig"),Ys=r(" for more information."),Zs=l(),g(pe.$$.fragment),Xo=l(),re=a("h2"),he=a("a"),uo=a("span"),g(He.$$.fragment),ea=l(),_o=a("span"),ta=r("Speech2TextTokenizer"),Yo=l(),j=a("div"),g(Be.$$.fragment),oa=l(),go=a("p"),ra=r("Constructs a Speech2Text2Tokenizer."),sa=l(),Je=a("p"),aa=r("This tokenizer inherits from "),Lt=a("a"),na=r("PreTrainedTokenizer"),ca=r(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),ia=l(),fe=a("div"),g(Ge.$$.fragment),la=l(),vo=a("p"),da=r("Convert a list of lists of token ids into a list of strings by calling decode."),pa=l(),Q=a("div"),g(Ke.$$.fragment),ha=l(),To=a("p"),fa=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),ma=l(),Qe=a("p"),ua=r("Similar to doing "),xo=a("code"),_a=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),ga=r("."),va=l(),Dt=a("div"),g(Xe.$$.fragment),Zo=l(),se=a("h2"),me=a("a"),ko=a("span"),g(Ye.$$.fragment),Ta=l(),bo=a("span"),xa=r("Speech2Text2Processor"),er=l(),$=a("div"),g(Ze.$$.fragment),ka=l(),So=a("p"),ba=r(`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Sa=l(),A=a("p"),It=a("a"),wa=r("Speech2Text2Processor"),$a=r(" offers all the functionalities of "),Wt=a("a"),ya=r("AutoFeatureExtractor"),Ea=r(" and "),Vt=a("a"),za=r("Speech2Text2Tokenizer"),Pa=r(`.
See the `),et=a("a"),wo=a("strong"),ja=r("call"),Ca=r("()"),qa=r(" and "),Nt=a("a"),Fa=r("decode()"),Ma=r(" for more information."),Aa=l(),ue=a("div"),g(tt.$$.fragment),La=l(),U=a("p"),Da=r(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),$o=a("code"),Ia=r("__call__()"),Wa=r(` and returns its output. If used in the context
`),Ot=a("a"),Va=r("as_target_processor()"),Na=r(` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),ot=a("a"),yo=a("strong"),Oa=r("call"),Ua=r("()"),Ra=r(`. Please refer to the doctsring of the above two
methods for more information.`),Ha=l(),X=a("div"),g(rt.$$.fragment),Ba=l(),Eo=a("p"),Ja=r("Instantiate a processor associated with a pretrained model."),Ga=l(),g(_e.$$.fragment),Ka=l(),Y=a("div"),g(st.$$.fragment),Qa=l(),at=a("p"),Xa=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=a("a"),Ya=r("from_pretrained()"),Za=r(" method."),en=l(),g(ge.$$.fragment),tn=l(),ve=a("div"),g(nt.$$.fragment),on=l(),ct=a("p"),rn=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=a("a"),sn=r("batch_decode()"),an=r(`. Please
refer to the docstring of this method for more information.`),nn=l(),Te=a("div"),g(it.$$.fragment),cn=l(),lt=a("p"),ln=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=a("a"),dn=r("decode()"),pn=r(`. Please refer
to the docstring of this method for more information.`),hn=l(),xe=a("div"),g(dt.$$.fragment),fn=l(),zo=a("p"),mn=r(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),tr=l(),ae=a("h2"),ke=a("a"),Po=a("span"),g(pt.$$.fragment),un=l(),jo=a("span"),_n=r("Speech2Text2ForCausalLM"),or=l(),V=a("div"),g(ht.$$.fragment),gn=l(),R=a("p"),vn=r("The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=a("a"),Tn=r("EncoderDecoderModel"),xn=r(" and "),Co=a("code"),kn=r("SpeechEncoderDecoder"),bn=r(`.
This model inherits from `),Jt=a("a"),Sn=r("PreTrainedModel"),wn=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$n=l(),ft=a("p"),yn=r("This model is also a PyTorch "),mt=a("a"),En=r("torch.nn.Module"),zn=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pn=l(),be=a("div"),g(ut.$$.fragment),jn=l(),g(Se.$$.fragment),this.h()},l(t){const p=si('[data-svelte="svelte-1phssyn"]',document.head);m=n(p,"META",{name:!0,content:!0}),p.forEach(o),E=d(t),u=n(t,"H1",{class:!0});var _t=c(u);_=n(_t,"A",{id:!0,class:!0,href:!0});var qo=c(_);w=n(qo,"SPAN",{});var Fo=c(w);v(f.$$.fragment,Fo),Fo.forEach(o),qo.forEach(o),S=d(_t),I=n(_t,"SPAN",{});var Mo=c(I);q=s(Mo,"Speech2Text2"),Mo.forEach(o),_t.forEach(o),y=d(t),F=n(t,"H2",{class:!0});var sr=c(F);M=n(sr,"A",{id:!0,class:!0,href:!0});var Fn=c(M);oo=n(Fn,"SPAN",{});var Mn=c(oo);v(ze.$$.fragment,Mn),Mn.forEach(o),Fn.forEach(o),jr=d(sr),ro=n(sr,"SPAN",{});var An=c(ro);Cr=s(An,"Overview"),An.forEach(o),sr.forEach(o),Ao=d(t),J=n(t,"P",{});var Gt=c(J);qr=s(Gt,"The Speech2Text2 model is used together with "),vt=n(Gt,"A",{href:!0});var Ln=c(vt);Fr=s(Ln,"Wav2Vec2"),Ln.forEach(o),Mr=s(Gt,` for Speech Translation models proposed in
`),Pe=n(Gt,"A",{href:!0,rel:!0});var Dn=c(Pe);Ar=s(Dn,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Dn.forEach(o),Lr=s(Gt,` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Gt.forEach(o),Lo=d(t),z=n(t,"P",{});var L=c(z);Dr=s(L,"Speech2Text2 is a "),so=n(L,"EM",{});var In=c(so);Ir=s(In,"decoder-only"),In.forEach(o),Wr=s(L," transformer model that can be used with any speech "),ao=n(L,"EM",{});var Wn=c(ao);Vr=s(Wn,"encoder-only"),Wn.forEach(o),Nr=s(L,`, such as
`),Tt=n(L,"A",{href:!0});var Vn=c(Tt);Or=s(Vn,"Wav2Vec2"),Vn.forEach(o),Ur=s(L," or "),xt=n(L,"A",{href:!0});var Nn=c(xt);Rr=s(Nn,"HuBERT"),Nn.forEach(o),Hr=s(L,` for Speech-to-Text tasks. Please refer to the
`),kt=n(L,"A",{href:!0});var On=c(kt);Br=s(On,"SpeechEncoderDecoder"),On.forEach(o),Jr=s(L," class on how to combine Speech2Text2 with any speech "),no=n(L,"EM",{});var Un=c(no);Gr=s(Un,"encoder-only"),Un.forEach(o),Kr=s(L,`
model.`),L.forEach(o),Do=d(t),ne=n(t,"P",{});var ar=c(ne);Qr=s(ar,"This model was contributed by "),je=n(ar,"A",{href:!0,rel:!0});var Rn=c(je);Xr=s(Rn,"Patrick von Platen"),Rn.forEach(o),Yr=s(ar,"."),ar.forEach(o),Io=d(t),ce=n(t,"P",{});var nr=c(ce);Zr=s(nr,"The original code can be found "),Ce=n(nr,"A",{href:!0,rel:!0});var Hn=c(Ce);es=s(Hn,"here"),Hn.forEach(o),ts=s(nr,"."),nr.forEach(o),Wo=d(t),bt=n(t,"P",{});var Bn=c(bt);os=s(Bn,"Tips:"),Bn.forEach(o),Vo=d(t),G=n(t,"UL",{});var Kt=c(G);qe=n(Kt,"LI",{});var cr=c(qe);rs=s(cr,`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),Fe=n(cr,"A",{href:!0,rel:!0});var Jn=c(Fe);ss=s(Jn,"official models"),Jn.forEach(o),as=s(cr," ."),cr.forEach(o),ns=d(Kt),Me=n(Kt,"LI",{});var ir=c(Me);cs=s(ir,"Speech2Text2 is always used within the "),St=n(ir,"A",{href:!0});var Gn=c(St);is=s(Gn,"SpeechEncoderDecoder"),Gn.forEach(o),ls=s(ir," framework."),ir.forEach(o),ds=d(Kt),Ae=n(Kt,"LI",{});var lr=c(Ae);ps=s(lr,"Speech2Text2\u2019s tokenizer is based on "),Le=n(lr,"A",{href:!0,rel:!0});var Kn=c(Le);hs=s(Kn,"fastBPE"),Kn.forEach(o),fs=s(lr,"."),lr.forEach(o),Kt.forEach(o),No=d(t),Z=n(t,"H2",{class:!0});var dr=c(Z);ie=n(dr,"A",{id:!0,class:!0,href:!0});var Qn=c(ie);co=n(Qn,"SPAN",{});var Xn=c(co);v(De.$$.fragment,Xn),Xn.forEach(o),Qn.forEach(o),ms=d(dr),io=n(dr,"SPAN",{});var Yn=c(io);us=s(Yn,"Inference"),Yn.forEach(o),dr.forEach(o),Oo=d(t),K=n(t,"P",{});var Qt=c(K);_s=s(Qt,"Speech2Text2\u2019s "),wt=n(Qt,"A",{href:!0});var Zn=c(wt);gs=s(Zn,"SpeechEncoderDecoderModel"),Zn.forEach(o),vs=s(Qt,` model accepts raw waveform input values from speech and
makes use of `),$t=n(Qt,"A",{href:!0});var ec=c($t);Ts=s(ec,"generate()"),ec.forEach(o),xs=s(Qt,` to translate the input speech
autoregressively to the target language.`),Qt.forEach(o),Uo=d(t),C=n(t,"P",{});var N=c(C);ks=s(N,"The "),yt=n(N,"A",{href:!0});var tc=c(yt);bs=s(tc,"Wav2Vec2FeatureExtractor"),tc.forEach(o),Ss=s(N,` class is responsible for preprocessing the input speech and
`),Et=n(N,"A",{href:!0});var oc=c(Et);ws=s(oc,"Speech2Text2Tokenizer"),oc.forEach(o),$s=s(N,` decodes the generated target tokens to the target string. The
`),zt=n(N,"A",{href:!0});var rc=c(zt);ys=s(rc,"Speech2Text2Processor"),rc.forEach(o),Es=s(N," wraps "),Pt=n(N,"A",{href:!0});var sc=c(Pt);zs=s(sc,"Wav2Vec2FeatureExtractor"),sc.forEach(o),Ps=s(N,` and
`),jt=n(N,"A",{href:!0});var ac=c(jt);js=s(ac,"Speech2Text2Tokenizer"),ac.forEach(o),Cs=s(N,` into a single instance to both extract the input features and decode the
predicted token ids.`),N.forEach(o),Ro=d(t),Ct=n(t,"UL",{});var nc=c(Ct);lo=n(nc,"LI",{});var cc=c(lo);qs=s(cc,"Step-by-step Speech Translation"),cc.forEach(o),nc.forEach(o),Ho=d(t),v(Ie.$$.fragment,t),Bo=d(t),qt=n(t,"UL",{});var ic=c(qt);We=n(ic,"LI",{});var pr=c(We);po=n(pr,"P",{});var lc=c(po);Fs=s(lc,"Speech Translation via Pipelines"),lc.forEach(o),Ms=d(pr),ho=n(pr,"P",{});var dc=c(ho);As=s(dc,"The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),dc.forEach(o),pr.forEach(o),ic.forEach(o),Jo=d(t),v(Ve.$$.fragment,t),Go=d(t),le=n(t,"P",{});var hr=c(le);Ls=s(hr,"See "),Ne=n(hr,"A",{href:!0,rel:!0});var pc=c(Ne);Ds=s(pc,"model hub"),pc.forEach(o),Is=s(hr," to look for Speech2Text2 checkpoints."),hr.forEach(o),Ko=d(t),ee=n(t,"H2",{class:!0});var fr=c(ee);de=n(fr,"A",{id:!0,class:!0,href:!0});var hc=c(de);fo=n(hc,"SPAN",{});var fc=c(fo);v(Oe.$$.fragment,fc),fc.forEach(o),hc.forEach(o),Ws=d(fr),mo=n(fr,"SPAN",{});var mc=c(mo);Vs=s(mc,"Speech2Text2Config"),mc.forEach(o),fr.forEach(o),Qo=d(t),W=n(t,"DIV",{class:!0});var we=c(W);v(Ue.$$.fragment,we),Ns=d(we),te=n(we,"P",{});var Xt=c(te);Os=s(Xt,"This is the configuration class to store the configuration of a "),Ft=n(Xt,"A",{href:!0});var uc=c(Ft);Us=s(uc,"Speech2Text2ForCausalLM"),uc.forEach(o),Rs=s(Xt,`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Re=n(Xt,"A",{href:!0,rel:!0});var _c=c(Re);Hs=s(_c,"facebook/s2t-wav2vec2-large-en-de"),_c.forEach(o),Bs=s(Xt," architecture."),Xt.forEach(o),Js=d(we),oe=n(we,"P",{});var Yt=c(oe);Gs=s(Yt,"Configuration objects inherit from "),Mt=n(Yt,"A",{href:!0});var gc=c(Mt);Ks=s(gc,"PretrainedConfig"),gc.forEach(o),Qs=s(Yt,` and can be used to control the model outputs. Read the
documentation from `),At=n(Yt,"A",{href:!0});var vc=c(At);Xs=s(vc,"PretrainedConfig"),vc.forEach(o),Ys=s(Yt," for more information."),Yt.forEach(o),Zs=d(we),v(pe.$$.fragment,we),we.forEach(o),Xo=d(t),re=n(t,"H2",{class:!0});var mr=c(re);he=n(mr,"A",{id:!0,class:!0,href:!0});var Tc=c(he);uo=n(Tc,"SPAN",{});var xc=c(uo);v(He.$$.fragment,xc),xc.forEach(o),Tc.forEach(o),ea=d(mr),_o=n(mr,"SPAN",{});var kc=c(_o);ta=s(kc,"Speech2TextTokenizer"),kc.forEach(o),mr.forEach(o),Yo=d(t),j=n(t,"DIV",{class:!0});var O=c(j);v(Be.$$.fragment,O),oa=d(O),go=n(O,"P",{});var bc=c(go);ra=s(bc,"Constructs a Speech2Text2Tokenizer."),bc.forEach(o),sa=d(O),Je=n(O,"P",{});var ur=c(Je);aa=s(ur,"This tokenizer inherits from "),Lt=n(ur,"A",{href:!0});var Sc=c(Lt);na=s(Sc,"PreTrainedTokenizer"),Sc.forEach(o),ca=s(ur,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),ur.forEach(o),ia=d(O),fe=n(O,"DIV",{class:!0});var _r=c(fe);v(Ge.$$.fragment,_r),la=d(_r),vo=n(_r,"P",{});var wc=c(vo);da=s(wc,"Convert a list of lists of token ids into a list of strings by calling decode."),wc.forEach(o),_r.forEach(o),pa=d(O),Q=n(O,"DIV",{class:!0});var Zt=c(Q);v(Ke.$$.fragment,Zt),ha=d(Zt),To=n(Zt,"P",{});var $c=c(To);fa=s($c,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),$c.forEach(o),ma=d(Zt),Qe=n(Zt,"P",{});var gr=c(Qe);ua=s(gr,"Similar to doing "),xo=n(gr,"CODE",{});var yc=c(xo);_a=s(yc,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),yc.forEach(o),ga=s(gr,"."),gr.forEach(o),Zt.forEach(o),va=d(O),Dt=n(O,"DIV",{class:!0});var Ec=c(Dt);v(Xe.$$.fragment,Ec),Ec.forEach(o),O.forEach(o),Zo=d(t),se=n(t,"H2",{class:!0});var vr=c(se);me=n(vr,"A",{id:!0,class:!0,href:!0});var zc=c(me);ko=n(zc,"SPAN",{});var Pc=c(ko);v(Ye.$$.fragment,Pc),Pc.forEach(o),zc.forEach(o),Ta=d(vr),bo=n(vr,"SPAN",{});var jc=c(bo);xa=s(jc,"Speech2Text2Processor"),jc.forEach(o),vr.forEach(o),er=d(t),$=n(t,"DIV",{class:!0});var P=c($);v(Ze.$$.fragment,P),ka=d(P),So=n(P,"P",{});var Cc=c(So);ba=s(Cc,`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Cc.forEach(o),Sa=d(P),A=n(P,"P",{});var H=c(A);It=n(H,"A",{href:!0});var qc=c(It);wa=s(qc,"Speech2Text2Processor"),qc.forEach(o),$a=s(H," offers all the functionalities of "),Wt=n(H,"A",{href:!0});var Fc=c(Wt);ya=s(Fc,"AutoFeatureExtractor"),Fc.forEach(o),Ea=s(H," and "),Vt=n(H,"A",{href:!0});var Mc=c(Vt);za=s(Mc,"Speech2Text2Tokenizer"),Mc.forEach(o),Pa=s(H,`.
See the `),et=n(H,"A",{href:!0});var Cn=c(et);wo=n(Cn,"STRONG",{});var Ac=c(wo);ja=s(Ac,"call"),Ac.forEach(o),Ca=s(Cn,"()"),Cn.forEach(o),qa=s(H," and "),Nt=n(H,"A",{href:!0});var Lc=c(Nt);Fa=s(Lc,"decode()"),Lc.forEach(o),Ma=s(H," for more information."),H.forEach(o),Aa=d(P),ue=n(P,"DIV",{class:!0});var Tr=c(ue);v(tt.$$.fragment,Tr),La=d(Tr),U=n(Tr,"P",{});var $e=c(U);Da=s($e,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),$o=n($e,"CODE",{});var Dc=c($o);Ia=s(Dc,"__call__()"),Dc.forEach(o),Wa=s($e,` and returns its output. If used in the context
`),Ot=n($e,"A",{href:!0});var Ic=c(Ot);Va=s(Ic,"as_target_processor()"),Ic.forEach(o),Na=s($e,` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),ot=n($e,"A",{href:!0});var qn=c(ot);yo=n(qn,"STRONG",{});var Wc=c(yo);Oa=s(Wc,"call"),Wc.forEach(o),Ua=s(qn,"()"),qn.forEach(o),Ra=s($e,`. Please refer to the doctsring of the above two
methods for more information.`),$e.forEach(o),Tr.forEach(o),Ha=d(P),X=n(P,"DIV",{class:!0});var eo=c(X);v(rt.$$.fragment,eo),Ba=d(eo),Eo=n(eo,"P",{});var Vc=c(Eo);Ja=s(Vc,"Instantiate a processor associated with a pretrained model."),Vc.forEach(o),Ga=d(eo),v(_e.$$.fragment,eo),eo.forEach(o),Ka=d(P),Y=n(P,"DIV",{class:!0});var to=c(Y);v(st.$$.fragment,to),Qa=d(to),at=n(to,"P",{});var xr=c(at);Xa=s(xr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=n(xr,"A",{href:!0});var Nc=c(Ut);Ya=s(Nc,"from_pretrained()"),Nc.forEach(o),Za=s(xr," method."),xr.forEach(o),en=d(to),v(ge.$$.fragment,to),to.forEach(o),tn=d(P),ve=n(P,"DIV",{class:!0});var kr=c(ve);v(nt.$$.fragment,kr),on=d(kr),ct=n(kr,"P",{});var br=c(ct);rn=s(br,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=n(br,"A",{href:!0});var Oc=c(Rt);sn=s(Oc,"batch_decode()"),Oc.forEach(o),an=s(br,`. Please
refer to the docstring of this method for more information.`),br.forEach(o),kr.forEach(o),nn=d(P),Te=n(P,"DIV",{class:!0});var Sr=c(Te);v(it.$$.fragment,Sr),cn=d(Sr),lt=n(Sr,"P",{});var wr=c(lt);ln=s(wr,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=n(wr,"A",{href:!0});var Uc=c(Ht);dn=s(Uc,"decode()"),Uc.forEach(o),pn=s(wr,`. Please refer
to the docstring of this method for more information.`),wr.forEach(o),Sr.forEach(o),hn=d(P),xe=n(P,"DIV",{class:!0});var $r=c(xe);v(dt.$$.fragment,$r),fn=d($r),zo=n($r,"P",{});var Rc=c(zo);mn=s(Rc,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),Rc.forEach(o),$r.forEach(o),P.forEach(o),tr=d(t),ae=n(t,"H2",{class:!0});var yr=c(ae);ke=n(yr,"A",{id:!0,class:!0,href:!0});var Hc=c(ke);Po=n(Hc,"SPAN",{});var Bc=c(Po);v(pt.$$.fragment,Bc),Bc.forEach(o),Hc.forEach(o),un=d(yr),jo=n(yr,"SPAN",{});var Jc=c(jo);_n=s(Jc,"Speech2Text2ForCausalLM"),Jc.forEach(o),yr.forEach(o),or=d(t),V=n(t,"DIV",{class:!0});var ye=c(V);v(ht.$$.fragment,ye),gn=d(ye),R=n(ye,"P",{});var Ee=c(R);vn=s(Ee,"The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=n(Ee,"A",{href:!0});var Gc=c(Bt);Tn=s(Gc,"EncoderDecoderModel"),Gc.forEach(o),xn=s(Ee," and "),Co=n(Ee,"CODE",{});var Kc=c(Co);kn=s(Kc,"SpeechEncoderDecoder"),Kc.forEach(o),bn=s(Ee,`.
This model inherits from `),Jt=n(Ee,"A",{href:!0});var Qc=c(Jt);Sn=s(Qc,"PreTrainedModel"),Qc.forEach(o),wn=s(Ee,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ee.forEach(o),$n=d(ye),ft=n(ye,"P",{});var Er=c(ft);yn=s(Er,"This model is also a PyTorch "),mt=n(Er,"A",{href:!0,rel:!0});var Xc=c(mt);En=s(Xc,"torch.nn.Module"),Xc.forEach(o),zn=s(Er,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Er.forEach(o),Pn=d(ye),be=n(ye,"DIV",{class:!0});var zr=c(be);v(ut.$$.fragment,zr),jn=d(zr),v(Se.$$.fragment,zr),zr.forEach(o),ye.forEach(o),this.h()},h(){i(m,"name","hf:doc:metadata"),i(m,"content",JSON.stringify(pi)),i(_,"id","speech2text2"),i(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(_,"href","#speech2text2"),i(u,"class","relative group"),i(M,"id","overview"),i(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(M,"href","#overview"),i(F,"class","relative group"),i(vt,"href","wav2vec2"),i(Pe,"href","https://arxiv.org/abs/2104.06678"),i(Pe,"rel","nofollow"),i(Tt,"href","wav2vec2"),i(xt,"href","hubert"),i(kt,"href","speech-encoder-decoder"),i(je,"href","https://huggingface.co/patrickvonplaten"),i(je,"rel","nofollow"),i(Ce,"href","https://github.com/pytorch/fairseq/blob/1f7ef9ed1e1061f8c7f88f8b94c7186834398690/fairseq/models/wav2vec/wav2vec2_asr.py#L266"),i(Ce,"rel","nofollow"),i(Fe,"href","https://huggingface.co/models?other=speech2text2"),i(Fe,"rel","nofollow"),i(St,"href","speech-encoder-decoder"),i(Le,"href","https://github.com/glample/fastBPE"),i(Le,"rel","nofollow"),i(ie,"id","inference"),i(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ie,"href","#inference"),i(Z,"class","relative group"),i(wt,"href","/docs/transformers/v4.21.1/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),i($t,"href","/docs/transformers/v4.21.1/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),i(yt,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i(Et,"href","/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(zt,"href","/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Pt,"href","/docs/transformers/v4.21.1/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),i(jt,"href","/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(Ne,"href","https://huggingface.co/models?filter=speech2text2"),i(Ne,"rel","nofollow"),i(de,"id","transformers.Speech2Text2Config"),i(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(de,"href","#transformers.Speech2Text2Config"),i(ee,"class","relative group"),i(Ft,"href","/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2ForCausalLM"),i(Re,"href","https://huggingface.co/facebook/s2t-wav2vec2-large-en-de"),i(Re,"rel","nofollow"),i(Mt,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),i(At,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),i(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(he,"id","transformers.Speech2Text2Tokenizer"),i(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(he,"href","#transformers.Speech2Text2Tokenizer"),i(re,"class","relative group"),i(Lt,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),i(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(me,"id","transformers.Speech2Text2Processor"),i(me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(me,"href","#transformers.Speech2Text2Processor"),i(se,"class","relative group"),i(It,"href","/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),i(Wt,"href","/docs/transformers/v4.21.1/en/model_doc/auto#transformers.AutoFeatureExtractor"),i(Vt,"href","/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),i(et,"href","/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.__call__"),i(Nt,"href","/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.decode"),i(Ot,"href","/docs/transformers/v4.21.1/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.as_target_processor"),i(ot,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"),i(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Ut,"href","/docs/transformers/v4.21.1/en/main_classes/processors#transformers.ProcessorMixin.from_pretrained"),i(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Rt,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.batch_decode"),i(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(Ht,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.decode"),i(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(ke,"id","transformers.Speech2Text2ForCausalLM"),i(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),i(ke,"href","#transformers.Speech2Text2ForCausalLM"),i(ae,"class","relative group"),i(Bt,"href","/docs/transformers/v4.21.1/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),i(Jt,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),i(mt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),i(mt,"rel","nofollow"),i(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),i(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,m),h(t,E,p),h(t,u,p),e(u,_),e(_,w),T(f,w,null),e(u,S),e(u,I),e(I,q),h(t,y,p),h(t,F,p),e(F,M),e(M,oo),T(ze,oo,null),e(F,jr),e(F,ro),e(ro,Cr),h(t,Ao,p),h(t,J,p),e(J,qr),e(J,vt),e(vt,Fr),e(J,Mr),e(J,Pe),e(Pe,Ar),e(J,Lr),h(t,Lo,p),h(t,z,p),e(z,Dr),e(z,so),e(so,Ir),e(z,Wr),e(z,ao),e(ao,Vr),e(z,Nr),e(z,Tt),e(Tt,Or),e(z,Ur),e(z,xt),e(xt,Rr),e(z,Hr),e(z,kt),e(kt,Br),e(z,Jr),e(z,no),e(no,Gr),e(z,Kr),h(t,Do,p),h(t,ne,p),e(ne,Qr),e(ne,je),e(je,Xr),e(ne,Yr),h(t,Io,p),h(t,ce,p),e(ce,Zr),e(ce,Ce),e(Ce,es),e(ce,ts),h(t,Wo,p),h(t,bt,p),e(bt,os),h(t,Vo,p),h(t,G,p),e(G,qe),e(qe,rs),e(qe,Fe),e(Fe,ss),e(qe,as),e(G,ns),e(G,Me),e(Me,cs),e(Me,St),e(St,is),e(Me,ls),e(G,ds),e(G,Ae),e(Ae,ps),e(Ae,Le),e(Le,hs),e(Ae,fs),h(t,No,p),h(t,Z,p),e(Z,ie),e(ie,co),T(De,co,null),e(Z,ms),e(Z,io),e(io,us),h(t,Oo,p),h(t,K,p),e(K,_s),e(K,wt),e(wt,gs),e(K,vs),e(K,$t),e($t,Ts),e(K,xs),h(t,Uo,p),h(t,C,p),e(C,ks),e(C,yt),e(yt,bs),e(C,Ss),e(C,Et),e(Et,ws),e(C,$s),e(C,zt),e(zt,ys),e(C,Es),e(C,Pt),e(Pt,zs),e(C,Ps),e(C,jt),e(jt,js),e(C,Cs),h(t,Ro,p),h(t,Ct,p),e(Ct,lo),e(lo,qs),h(t,Ho,p),T(Ie,t,p),h(t,Bo,p),h(t,qt,p),e(qt,We),e(We,po),e(po,Fs),e(We,Ms),e(We,ho),e(ho,As),h(t,Jo,p),T(Ve,t,p),h(t,Go,p),h(t,le,p),e(le,Ls),e(le,Ne),e(Ne,Ds),e(le,Is),h(t,Ko,p),h(t,ee,p),e(ee,de),e(de,fo),T(Oe,fo,null),e(ee,Ws),e(ee,mo),e(mo,Vs),h(t,Qo,p),h(t,W,p),T(Ue,W,null),e(W,Ns),e(W,te),e(te,Os),e(te,Ft),e(Ft,Us),e(te,Rs),e(te,Re),e(Re,Hs),e(te,Bs),e(W,Js),e(W,oe),e(oe,Gs),e(oe,Mt),e(Mt,Ks),e(oe,Qs),e(oe,At),e(At,Xs),e(oe,Ys),e(W,Zs),T(pe,W,null),h(t,Xo,p),h(t,re,p),e(re,he),e(he,uo),T(He,uo,null),e(re,ea),e(re,_o),e(_o,ta),h(t,Yo,p),h(t,j,p),T(Be,j,null),e(j,oa),e(j,go),e(go,ra),e(j,sa),e(j,Je),e(Je,aa),e(Je,Lt),e(Lt,na),e(Je,ca),e(j,ia),e(j,fe),T(Ge,fe,null),e(fe,la),e(fe,vo),e(vo,da),e(j,pa),e(j,Q),T(Ke,Q,null),e(Q,ha),e(Q,To),e(To,fa),e(Q,ma),e(Q,Qe),e(Qe,ua),e(Qe,xo),e(xo,_a),e(Qe,ga),e(j,va),e(j,Dt),T(Xe,Dt,null),h(t,Zo,p),h(t,se,p),e(se,me),e(me,ko),T(Ye,ko,null),e(se,Ta),e(se,bo),e(bo,xa),h(t,er,p),h(t,$,p),T(Ze,$,null),e($,ka),e($,So),e(So,ba),e($,Sa),e($,A),e(A,It),e(It,wa),e(A,$a),e(A,Wt),e(Wt,ya),e(A,Ea),e(A,Vt),e(Vt,za),e(A,Pa),e(A,et),e(et,wo),e(wo,ja),e(et,Ca),e(A,qa),e(A,Nt),e(Nt,Fa),e(A,Ma),e($,Aa),e($,ue),T(tt,ue,null),e(ue,La),e(ue,U),e(U,Da),e(U,$o),e($o,Ia),e(U,Wa),e(U,Ot),e(Ot,Va),e(U,Na),e(U,ot),e(ot,yo),e(yo,Oa),e(ot,Ua),e(U,Ra),e($,Ha),e($,X),T(rt,X,null),e(X,Ba),e(X,Eo),e(Eo,Ja),e(X,Ga),T(_e,X,null),e($,Ka),e($,Y),T(st,Y,null),e(Y,Qa),e(Y,at),e(at,Xa),e(at,Ut),e(Ut,Ya),e(at,Za),e(Y,en),T(ge,Y,null),e($,tn),e($,ve),T(nt,ve,null),e(ve,on),e(ve,ct),e(ct,rn),e(ct,Rt),e(Rt,sn),e(ct,an),e($,nn),e($,Te),T(it,Te,null),e(Te,cn),e(Te,lt),e(lt,ln),e(lt,Ht),e(Ht,dn),e(lt,pn),e($,hn),e($,xe),T(dt,xe,null),e(xe,fn),e(xe,zo),e(zo,mn),h(t,tr,p),h(t,ae,p),e(ae,ke),e(ke,Po),T(pt,Po,null),e(ae,un),e(ae,jo),e(jo,_n),h(t,or,p),h(t,V,p),T(ht,V,null),e(V,gn),e(V,R),e(R,vn),e(R,Bt),e(Bt,Tn),e(R,xn),e(R,Co),e(Co,kn),e(R,bn),e(R,Jt),e(Jt,Sn),e(R,wn),e(V,$n),e(V,ft),e(ft,yn),e(ft,mt),e(mt,En),e(ft,zn),e(V,Pn),e(V,be),T(ut,be,null),e(be,jn),T(Se,be,null),rr=!0},p(t,[p]){const _t={};p&2&&(_t.$$scope={dirty:p,ctx:t}),pe.$set(_t);const qo={};p&2&&(qo.$$scope={dirty:p,ctx:t}),_e.$set(qo);const Fo={};p&2&&(Fo.$$scope={dirty:p,ctx:t}),ge.$set(Fo);const Mo={};p&2&&(Mo.$$scope={dirty:p,ctx:t}),Se.$set(Mo)},i(t){rr||(x(f.$$.fragment,t),x(ze.$$.fragment,t),x(De.$$.fragment,t),x(Ie.$$.fragment,t),x(Ve.$$.fragment,t),x(Oe.$$.fragment,t),x(Ue.$$.fragment,t),x(pe.$$.fragment,t),x(He.$$.fragment,t),x(Be.$$.fragment,t),x(Ge.$$.fragment,t),x(Ke.$$.fragment,t),x(Xe.$$.fragment,t),x(Ye.$$.fragment,t),x(Ze.$$.fragment,t),x(tt.$$.fragment,t),x(rt.$$.fragment,t),x(_e.$$.fragment,t),x(st.$$.fragment,t),x(ge.$$.fragment,t),x(nt.$$.fragment,t),x(it.$$.fragment,t),x(dt.$$.fragment,t),x(pt.$$.fragment,t),x(ht.$$.fragment,t),x(ut.$$.fragment,t),x(Se.$$.fragment,t),rr=!0)},o(t){k(f.$$.fragment,t),k(ze.$$.fragment,t),k(De.$$.fragment,t),k(Ie.$$.fragment,t),k(Ve.$$.fragment,t),k(Oe.$$.fragment,t),k(Ue.$$.fragment,t),k(pe.$$.fragment,t),k(He.$$.fragment,t),k(Be.$$.fragment,t),k(Ge.$$.fragment,t),k(Ke.$$.fragment,t),k(Xe.$$.fragment,t),k(Ye.$$.fragment,t),k(Ze.$$.fragment,t),k(tt.$$.fragment,t),k(rt.$$.fragment,t),k(_e.$$.fragment,t),k(st.$$.fragment,t),k(ge.$$.fragment,t),k(nt.$$.fragment,t),k(it.$$.fragment,t),k(dt.$$.fragment,t),k(pt.$$.fragment,t),k(ht.$$.fragment,t),k(ut.$$.fragment,t),k(Se.$$.fragment,t),rr=!1},d(t){o(m),t&&o(E),t&&o(u),b(f),t&&o(y),t&&o(F),b(ze),t&&o(Ao),t&&o(J),t&&o(Lo),t&&o(z),t&&o(Do),t&&o(ne),t&&o(Io),t&&o(ce),t&&o(Wo),t&&o(bt),t&&o(Vo),t&&o(G),t&&o(No),t&&o(Z),b(De),t&&o(Oo),t&&o(K),t&&o(Uo),t&&o(C),t&&o(Ro),t&&o(Ct),t&&o(Ho),b(Ie,t),t&&o(Bo),t&&o(qt),t&&o(Jo),b(Ve,t),t&&o(Go),t&&o(le),t&&o(Ko),t&&o(ee),b(Oe),t&&o(Qo),t&&o(W),b(Ue),b(pe),t&&o(Xo),t&&o(re),b(He),t&&o(Yo),t&&o(j),b(Be),b(Ge),b(Ke),b(Xe),t&&o(Zo),t&&o(se),b(Ye),t&&o(er),t&&o($),b(Ze),b(tt),b(rt),b(_e),b(st),b(ge),b(nt),b(it),b(dt),t&&o(tr),t&&o(ae),b(pt),t&&o(or),t&&o(V),b(ht),b(ut),b(Se)}}}const pi={local:"speech2text2",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2Text2Config",title:"Speech2Text2Config"},{local:"transformers.Speech2Text2Tokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2Text2Processor",title:"Speech2Text2Processor"},{local:"transformers.Speech2Text2ForCausalLM",title:"Speech2Text2ForCausalLM"}],title:"Speech2Text2"};function hi(B){return ai(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ti extends ti{constructor(m){super();oi(this,m,hi,di,ri,{})}}export{Ti as default,pi as metadata};
