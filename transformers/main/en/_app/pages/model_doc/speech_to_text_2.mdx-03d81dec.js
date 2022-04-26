import{S as tc,i as oc,s as rc,e as a,k as l,w as g,t as r,M as sc,c as n,d as o,m as d,a as i,x as v,h as s,b as c,F as e,g as h,y as x,q as T,o as b,B as k,v as ac,L as ec}from"../../chunks/vendor-6b77c823.js";import{T as Yi}from"../../chunks/Tip-39098574.js";import{D}from"../../chunks/Docstring-1088f2fb.js";import{C as Pr}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as gt}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Zi}from"../../chunks/ExampleCodeBlock-5212b321.js";function nc(B){let f,E,u,_,w;return _=new Pr({props:{code:`from transformers import Speech2Text2ForCausalLM, Speech2Text2Config

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){f=a("p"),E=r("Example:"),u=l(),g(_.$$.fragment)},l(m){f=n(m,"P",{});var S=i(f);E=s(S,"Example:"),S.forEach(o),u=d(m),v(_.$$.fragment,m)},m(m,S){h(m,f,S),e(f,E),h(m,u,S),x(_,m,S),w=!0},p:ec,i(m){w||(T(_.$$.fragment,m),w=!0)},o(m){b(_.$$.fragment,m),w=!1},d(m){m&&o(f),m&&o(u),k(_,m)}}}function ic(B){let f,E,u,_,w,m,S,W;return{c(){f=a("p"),E=r(`This class method is simply calling the feature extractor
`),u=a("a"),_=r("from_pretrained()"),w=r(` and the tokenizer
`),m=a("code"),S=r("from_pretrained"),W=r(` methods. Please refer to the docstrings of the
methods above for more information.`),this.h()},l(q){f=n(q,"P",{});var y=i(f);E=s(y,`This class method is simply calling the feature extractor
`),u=n(y,"A",{href:!0});var F=i(u);_=s(F,"from_pretrained()"),F.forEach(o),w=s(y,` and the tokenizer
`),m=n(y,"CODE",{});var M=i(m);S=s(M,"from_pretrained"),M.forEach(o),W=s(y,` methods. Please refer to the docstrings of the
methods above for more information.`),y.forEach(o),this.h()},h(){c(u,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.from_pretrained")},m(q,y){h(q,f,y),e(f,E),e(f,u),e(u,_),e(f,w),e(f,m),e(m,S),e(f,W)},d(q){q&&o(f)}}}function cc(B){let f,E,u,_,w,m,S,W;return{c(){f=a("p"),E=r("This class method is simply calling "),u=a("a"),_=r("save_pretrained()"),w=r(` and
`),m=a("code"),S=r("save_pretrained"),W=r(`. Please refer to the docstrings of the methods
above for more information.`),this.h()},l(q){f=n(q,"P",{});var y=i(f);E=s(y,"This class method is simply calling "),u=n(y,"A",{href:!0});var F=i(u);_=s(F,"save_pretrained()"),F.forEach(o),w=s(y,` and
`),m=n(y,"CODE",{});var M=i(m);S=s(M,"save_pretrained"),M.forEach(o),W=s(y,`. Please refer to the docstrings of the methods
above for more information.`),y.forEach(o),this.h()},h(){c(u,"href","/docs/transformers/main/en/main_classes/feature_extractor#transformers.FeatureExtractionMixin.save_pretrained")},m(q,y){h(q,f,y),e(f,E),e(f,u),e(u,_),e(f,w),e(f,m),e(m,S),e(f,W)},d(q){q&&o(f)}}}function lc(B){let f,E,u,_,w;return _=new Pr({props:{code:`from transformers import (
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){f=a("p"),E=r("Example:"),u=l(),g(_.$$.fragment)},l(m){f=n(m,"P",{});var S=i(f);E=s(S,"Example:"),S.forEach(o),u=d(m),v(_.$$.fragment,m)},m(m,S){h(m,f,S),e(f,E),h(m,u,S),x(_,m,S),w=!0},p:ec,i(m){w||(T(_.$$.fragment,m),w=!0)},o(m){b(_.$$.fragment,m),w=!1},d(m){m&&o(f),m&&o(u),k(_,m)}}}function dc(B){let f,E,u,_,w,m,S,W,q,y,F,M,oo,ze,jr,ro,Cr,Ao,J,qr,vt,Fr,Mr,Pe,Ar,Lr,Lo,z,Dr,so,Wr,Ir,ao,Vr,Nr,xt,Or,Ur,Tt,Rr,Hr,bt,Br,Jr,no,Gr,Kr,Do,ne,Qr,je,Xr,Yr,Wo,ie,Zr,Ce,es,ts,Io,kt,os,Vo,G,qe,rs,Fe,ss,as,ns,Me,is,St,cs,ls,ds,Ae,ps,Le,hs,ms,No,Z,ce,io,De,fs,co,us,Oo,K,_s,wt,gs,vs,$t,xs,Ts,Uo,C,bs,yt,ks,Ss,Et,ws,$s,zt,ys,Es,Pt,zs,Ps,jt,js,Cs,Ro,Ct,lo,qs,Ho,We,Bo,qt,Ie,po,Fs,Ms,ho,As,Jo,Ve,Go,le,Ls,Ne,Ds,Ws,Ko,ee,de,mo,Oe,Is,fo,Vs,Qo,I,Ue,Ns,te,Os,Ft,Us,Rs,Re,Hs,Bs,Js,oe,Gs,Mt,Ks,Qs,At,Xs,Ys,Zs,pe,Xo,re,he,uo,He,ea,_o,ta,Yo,j,Be,oa,go,ra,sa,Je,aa,Lt,na,ia,ca,me,Ge,la,vo,da,pa,Q,Ke,ha,xo,ma,fa,Qe,ua,To,_a,ga,va,Dt,Xe,Zo,se,fe,bo,Ye,xa,ko,Ta,er,$,Ze,ba,So,ka,Sa,A,Wt,wa,$a,It,ya,Ea,Vt,za,Pa,et,wo,ja,Ca,qa,Nt,Fa,Ma,Aa,ue,tt,La,U,Da,$o,Wa,Ia,Ot,Va,Na,ot,yo,Oa,Ua,Ra,Ha,X,rt,Ba,Eo,Ja,Ga,_e,Ka,Y,st,Qa,at,Xa,Ut,Ya,Za,en,ge,tn,ve,nt,on,it,rn,Rt,sn,an,nn,xe,ct,cn,lt,ln,Ht,dn,pn,hn,Te,dt,mn,zo,fn,tr,ae,be,Po,pt,un,jo,_n,or,V,ht,gn,R,vn,Bt,xn,Tn,Co,bn,kn,Jt,Sn,wn,$n,mt,yn,ft,En,zn,Pn,ke,ut,jn,Se,rr;return m=new gt({}),ze=new gt({}),De=new gt({}),We=new Pr({props:{code:`import torch
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
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextModel">Speech2TextModel</a>`,name:"vocab_size"},{anchor:"transformers.Speech2Text2Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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
just in case (e.g., 512 or 1024 or 2048).`,name:"max_source_positions"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/configuration_speech_to_text_2.py#L29"}}),pe=new Zi({props:{anchor:"transformers.Speech2Text2Config.example",$$slots:{default:[nc]},$$scope:{ctx:B}}}),He=new gt({}),Be=new D({props:{name:"class transformers.Speech2Text2Tokenizer",anchor:"transformers.Speech2Text2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"do_lower_case",val:" = False"},{name:"merges_file",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Speech2Text2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Speech2Text2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Speech2Text2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Speech2Text2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"pad_token"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L67"}}),Ge=new D({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Tokenizer.batch_decode",parameters:[{name:"sequences",val:": typing.Union[typing.List[int], typing.List[typing.List[int]], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/tokenization_utils_base.py#L3245",returnDescription:`
<p>The list of decoded sentences.</p>
`,returnType:`
<p><code>List[str]</code></p>
`}}),Ke=new D({props:{name:"decode",anchor:"transformers.Speech2Text2Tokenizer.decode",parameters:[{name:"token_ids",val:": typing.Union[int, typing.List[int], ForwardRef('np.ndarray'), ForwardRef('torch.Tensor'), ForwardRef('tf.Tensor')]"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Tokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Speech2Text2Tokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Speech2Text2Tokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Speech2Text2Tokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/tokenization_utils_base.py#L3278",returnDescription:`
<p>The decoded sentence.</p>
`,returnType:`
<p><code>str</code></p>
`}}),Xe=new D({props:{name:"save_vocabulary",anchor:"transformers.Speech2Text2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/tokenization_speech_to_text_2.py#L235"}}),Ye=new gt({}),Ze=new D({props:{name:"class transformers.Speech2Text2Processor",anchor:"transformers.Speech2Text2Processor",parameters:[{name:"feature_extractor",val:""},{name:"tokenizer",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.feature_extractor",description:`<strong>feature_extractor</strong> (<code>AutoFeatureExtractor</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor">AutoFeatureExtractor</a>. The feature extractor is a required input.`,name:"feature_extractor"},{anchor:"transformers.Speech2Text2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>Speech2Text2Tokenizer</code>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L23"}}),tt=new D({props:{name:"__call__",anchor:"transformers.Speech2Text2Processor.__call__",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L44"}}),rt=new D({props:{name:"from_pretrained",anchor:"transformers.Speech2Text2Processor.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
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
</ul>`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/processing_utils.py#L156"}}),_e=new Yi({props:{$$slots:{default:[ic]},$$scope:{ctx:B}}}),st=new D({props:{name:"save_pretrained",anchor:"transformers.Speech2Text2Processor.save_pretrained",parameters:[{name:"save_directory",val:""},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2Processor.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the feature extractor JSON file and the tokenizer files will be saved (directory will
be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.Speech2Text2Processor.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your processor to the Hugging Face model hub after saving it.</p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p>Using <code>push_to_hub=True</code> will synchronize the repository you are pushing to with <code>save_directory</code>,
which requires <code>save_directory</code> to be a local clone of the repo you are pushing to if it&#x2019;s an existing
folder. Pass along <code>temp_dir=True</code> to use a temporary directory instead.</p>

					</div>
<p>kwargs &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"push_to_hub"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/processing_utils.py#L94"}}),ge=new Yi({props:{$$slots:{default:[cc]},$$scope:{ctx:B}}}),nt=new D({props:{name:"batch_decode",anchor:"transformers.Speech2Text2Processor.batch_decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L54"}}),ct=new D({props:{name:"decode",anchor:"transformers.Speech2Text2Processor.decode",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L61"}}),dt=new D({props:{name:"as_target_processor",anchor:"transformers.Speech2Text2Processor.as_target_processor",parameters:[],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/processing_speech_to_text_2.py#L68"}}),pt=new gt({}),ht=new D({props:{name:"class transformers.Speech2Text2ForCausalLM",anchor:"transformers.Speech2Text2ForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config">Speech2Text2Config</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L741"}}),ut=new D({props:{name:"forward",anchor:"transformers.Speech2Text2ForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"cross_attn_head_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.Speech2Text2ForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer">Speech2Text2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/vmain/src/transformers/models/speech_to_text_2/modeling_speech_to_text_2.py#L772",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Config"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new Zi({props:{anchor:"transformers.Speech2Text2ForCausalLM.forward.example",$$slots:{default:[lc]},$$scope:{ctx:B}}}),{c(){f=a("meta"),E=l(),u=a("h1"),_=a("a"),w=a("span"),g(m.$$.fragment),S=l(),W=a("span"),q=r("Speech2Text2"),y=l(),F=a("h2"),M=a("a"),oo=a("span"),g(ze.$$.fragment),jr=l(),ro=a("span"),Cr=r("Overview"),Ao=l(),J=a("p"),qr=r("The Speech2Text2 model is used together with "),vt=a("a"),Fr=r("Wav2Vec2"),Mr=r(` for Speech Translation models proposed in
`),Pe=a("a"),Ar=r("Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Lr=r(` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Lo=l(),z=a("p"),Dr=r("Speech2Text2 is a "),so=a("em"),Wr=r("decoder-only"),Ir=r(" transformer model that can be used with any speech "),ao=a("em"),Vr=r("encoder-only"),Nr=r(`, such as
`),xt=a("a"),Or=r("Wav2Vec2"),Ur=r(" or "),Tt=a("a"),Rr=r("HuBERT"),Hr=r(` for Speech-to-Text tasks. Please refer to the
`),bt=a("a"),Br=r("SpeechEncoderDecoder"),Jr=r(" class on how to combine Speech2Text2 with any speech "),no=a("em"),Gr=r("encoder-only"),Kr=r(`
model.`),Do=l(),ne=a("p"),Qr=r("This model was contributed by "),je=a("a"),Xr=r("Patrick von Platen"),Yr=r("."),Wo=l(),ie=a("p"),Zr=r("The original code can be found "),Ce=a("a"),es=r("here"),ts=r("."),Io=l(),kt=a("p"),os=r("Tips:"),Vo=l(),G=a("ul"),qe=a("li"),rs=r(`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),Fe=a("a"),ss=r("official models"),as=r(" ."),ns=l(),Me=a("li"),is=r("Speech2Text2 is always used within the "),St=a("a"),cs=r("SpeechEncoderDecoder"),ls=r(" framework."),ds=l(),Ae=a("li"),ps=r("Speech2Text2\u2019s tokenizer is based on "),Le=a("a"),hs=r("fastBPE"),ms=r("."),No=l(),Z=a("h2"),ce=a("a"),io=a("span"),g(De.$$.fragment),fs=l(),co=a("span"),us=r("Inference"),Oo=l(),K=a("p"),_s=r("Speech2Text2\u2019s "),wt=a("a"),gs=r("SpeechEncoderDecoderModel"),vs=r(` model accepts raw waveform input values from speech and
makes use of `),$t=a("a"),xs=r("generate()"),Ts=r(` to translate the input speech
autoregressively to the target language.`),Uo=l(),C=a("p"),bs=r("The "),yt=a("a"),ks=r("Wav2Vec2FeatureExtractor"),Ss=r(` class is responsible for preprocessing the input speech and
`),Et=a("a"),ws=r("Speech2Text2Tokenizer"),$s=r(` decodes the generated target tokens to the target string. The
`),zt=a("a"),ys=r("Speech2Text2Processor"),Es=r(" wraps "),Pt=a("a"),zs=r("Wav2Vec2FeatureExtractor"),Ps=r(` and
`),jt=a("a"),js=r("Speech2Text2Tokenizer"),Cs=r(` into a single instance to both extract the input features and decode the
predicted token ids.`),Ro=l(),Ct=a("ul"),lo=a("li"),qs=r("Step-by-step Speech Translation"),Ho=l(),g(We.$$.fragment),Bo=l(),qt=a("ul"),Ie=a("li"),po=a("p"),Fs=r("Speech Translation via Pipelines"),Ms=l(),ho=a("p"),As=r("The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),Jo=l(),g(Ve.$$.fragment),Go=l(),le=a("p"),Ls=r("See "),Ne=a("a"),Ds=r("model hub"),Ws=r(" to look for Speech2Text2 checkpoints."),Ko=l(),ee=a("h2"),de=a("a"),mo=a("span"),g(Oe.$$.fragment),Is=l(),fo=a("span"),Vs=r("Speech2Text2Config"),Qo=l(),I=a("div"),g(Ue.$$.fragment),Ns=l(),te=a("p"),Os=r("This is the configuration class to store the configuration of a "),Ft=a("a"),Us=r("Speech2Text2ForCausalLM"),Rs=r(`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Re=a("a"),Hs=r("facebook/s2t-wav2vec2-large-en-de"),Bs=r(" architecture."),Js=l(),oe=a("p"),Gs=r("Configuration objects inherit from "),Mt=a("a"),Ks=r("PretrainedConfig"),Qs=r(` and can be used to control the model outputs. Read the
documentation from `),At=a("a"),Xs=r("PretrainedConfig"),Ys=r(" for more information."),Zs=l(),g(pe.$$.fragment),Xo=l(),re=a("h2"),he=a("a"),uo=a("span"),g(He.$$.fragment),ea=l(),_o=a("span"),ta=r("Speech2TextTokenizer"),Yo=l(),j=a("div"),g(Be.$$.fragment),oa=l(),go=a("p"),ra=r("Constructs a Speech2Text2Tokenizer."),sa=l(),Je=a("p"),aa=r("This tokenizer inherits from "),Lt=a("a"),na=r("PreTrainedTokenizer"),ia=r(` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),ca=l(),me=a("div"),g(Ge.$$.fragment),la=l(),vo=a("p"),da=r("Convert a list of lists of token ids into a list of strings by calling decode."),pa=l(),Q=a("div"),g(Ke.$$.fragment),ha=l(),xo=a("p"),ma=r(`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),fa=l(),Qe=a("p"),ua=r("Similar to doing "),To=a("code"),_a=r("self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),ga=r("."),va=l(),Dt=a("div"),g(Xe.$$.fragment),Zo=l(),se=a("h2"),fe=a("a"),bo=a("span"),g(Ye.$$.fragment),xa=l(),ko=a("span"),Ta=r("Speech2Text2Processor"),er=l(),$=a("div"),g(Ze.$$.fragment),ba=l(),So=a("p"),ka=r(`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Sa=l(),A=a("p"),Wt=a("a"),wa=r("Speech2Text2Processor"),$a=r(" offers all the functionalities of "),It=a("a"),ya=r("AutoFeatureExtractor"),Ea=r(" and "),Vt=a("a"),za=r("Speech2Text2Tokenizer"),Pa=r(`.
See the `),et=a("a"),wo=a("strong"),ja=r("call"),Ca=r("()"),qa=r(" and "),Nt=a("a"),Fa=r("decode()"),Ma=r(" for more information."),Aa=l(),ue=a("div"),g(tt.$$.fragment),La=l(),U=a("p"),Da=r(`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),$o=a("code"),Wa=r("__call__()"),Ia=r(` and returns its output. If used in the context
`),Ot=a("a"),Va=r("as_target_processor()"),Na=r(` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),ot=a("a"),yo=a("strong"),Oa=r("call"),Ua=r("()"),Ra=r(`. Please refer to the doctsring of the above two
methods for more information.`),Ha=l(),X=a("div"),g(rt.$$.fragment),Ba=l(),Eo=a("p"),Ja=r("Instantiate a processor associated with a pretrained model."),Ga=l(),g(_e.$$.fragment),Ka=l(),Y=a("div"),g(st.$$.fragment),Qa=l(),at=a("p"),Xa=r(`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=a("a"),Ya=r("from_pretrained()"),Za=r(" method."),en=l(),g(ge.$$.fragment),tn=l(),ve=a("div"),g(nt.$$.fragment),on=l(),it=a("p"),rn=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=a("a"),sn=r("batch_decode()"),an=r(`. Please
refer to the docstring of this method for more information.`),nn=l(),xe=a("div"),g(ct.$$.fragment),cn=l(),lt=a("p"),ln=r("This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=a("a"),dn=r("decode()"),pn=r(`. Please refer
to the docstring of this method for more information.`),hn=l(),Te=a("div"),g(dt.$$.fragment),mn=l(),zo=a("p"),fn=r(`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),tr=l(),ae=a("h2"),be=a("a"),Po=a("span"),g(pt.$$.fragment),un=l(),jo=a("span"),_n=r("Speech2Text2ForCausalLM"),or=l(),V=a("div"),g(ht.$$.fragment),gn=l(),R=a("p"),vn=r("The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=a("a"),xn=r("EncoderDecoderModel"),Tn=r(" and "),Co=a("code"),bn=r("SpeechEncoderDecoder"),kn=r(`.
This model inherits from `),Jt=a("a"),Sn=r("PreTrainedModel"),wn=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$n=l(),mt=a("p"),yn=r("This model is also a PyTorch "),ft=a("a"),En=r("torch.nn.Module"),zn=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pn=l(),ke=a("div"),g(ut.$$.fragment),jn=l(),g(Se.$$.fragment),this.h()},l(t){const p=sc('[data-svelte="svelte-1phssyn"]',document.head);f=n(p,"META",{name:!0,content:!0}),p.forEach(o),E=d(t),u=n(t,"H1",{class:!0});var _t=i(u);_=n(_t,"A",{id:!0,class:!0,href:!0});var qo=i(_);w=n(qo,"SPAN",{});var Fo=i(w);v(m.$$.fragment,Fo),Fo.forEach(o),qo.forEach(o),S=d(_t),W=n(_t,"SPAN",{});var Mo=i(W);q=s(Mo,"Speech2Text2"),Mo.forEach(o),_t.forEach(o),y=d(t),F=n(t,"H2",{class:!0});var sr=i(F);M=n(sr,"A",{id:!0,class:!0,href:!0});var Fn=i(M);oo=n(Fn,"SPAN",{});var Mn=i(oo);v(ze.$$.fragment,Mn),Mn.forEach(o),Fn.forEach(o),jr=d(sr),ro=n(sr,"SPAN",{});var An=i(ro);Cr=s(An,"Overview"),An.forEach(o),sr.forEach(o),Ao=d(t),J=n(t,"P",{});var Gt=i(J);qr=s(Gt,"The Speech2Text2 model is used together with "),vt=n(Gt,"A",{href:!0});var Ln=i(vt);Fr=s(Ln,"Wav2Vec2"),Ln.forEach(o),Mr=s(Gt,` for Speech Translation models proposed in
`),Pe=n(Gt,"A",{href:!0,rel:!0});var Dn=i(Pe);Ar=s(Dn,"Large-Scale Self- and Semi-Supervised Learning for Speech Translation"),Dn.forEach(o),Lr=s(Gt,` by
Changhan Wang, Anne Wu, Juan Pino, Alexei Baevski, Michael Auli, Alexis Conneau.`),Gt.forEach(o),Lo=d(t),z=n(t,"P",{});var L=i(z);Dr=s(L,"Speech2Text2 is a "),so=n(L,"EM",{});var Wn=i(so);Wr=s(Wn,"decoder-only"),Wn.forEach(o),Ir=s(L," transformer model that can be used with any speech "),ao=n(L,"EM",{});var In=i(ao);Vr=s(In,"encoder-only"),In.forEach(o),Nr=s(L,`, such as
`),xt=n(L,"A",{href:!0});var Vn=i(xt);Or=s(Vn,"Wav2Vec2"),Vn.forEach(o),Ur=s(L," or "),Tt=n(L,"A",{href:!0});var Nn=i(Tt);Rr=s(Nn,"HuBERT"),Nn.forEach(o),Hr=s(L,` for Speech-to-Text tasks. Please refer to the
`),bt=n(L,"A",{href:!0});var On=i(bt);Br=s(On,"SpeechEncoderDecoder"),On.forEach(o),Jr=s(L," class on how to combine Speech2Text2 with any speech "),no=n(L,"EM",{});var Un=i(no);Gr=s(Un,"encoder-only"),Un.forEach(o),Kr=s(L,`
model.`),L.forEach(o),Do=d(t),ne=n(t,"P",{});var ar=i(ne);Qr=s(ar,"This model was contributed by "),je=n(ar,"A",{href:!0,rel:!0});var Rn=i(je);Xr=s(Rn,"Patrick von Platen"),Rn.forEach(o),Yr=s(ar,"."),ar.forEach(o),Wo=d(t),ie=n(t,"P",{});var nr=i(ie);Zr=s(nr,"The original code can be found "),Ce=n(nr,"A",{href:!0,rel:!0});var Hn=i(Ce);es=s(Hn,"here"),Hn.forEach(o),ts=s(nr,"."),nr.forEach(o),Io=d(t),kt=n(t,"P",{});var Bn=i(kt);os=s(Bn,"Tips:"),Bn.forEach(o),Vo=d(t),G=n(t,"UL",{});var Kt=i(G);qe=n(Kt,"LI",{});var ir=i(qe);rs=s(ir,`Speech2Text2 achieves state-of-the-art results on the CoVoST Speech Translation dataset. For more information, see
the `),Fe=n(ir,"A",{href:!0,rel:!0});var Jn=i(Fe);ss=s(Jn,"official models"),Jn.forEach(o),as=s(ir," ."),ir.forEach(o),ns=d(Kt),Me=n(Kt,"LI",{});var cr=i(Me);is=s(cr,"Speech2Text2 is always used within the "),St=n(cr,"A",{href:!0});var Gn=i(St);cs=s(Gn,"SpeechEncoderDecoder"),Gn.forEach(o),ls=s(cr," framework."),cr.forEach(o),ds=d(Kt),Ae=n(Kt,"LI",{});var lr=i(Ae);ps=s(lr,"Speech2Text2\u2019s tokenizer is based on "),Le=n(lr,"A",{href:!0,rel:!0});var Kn=i(Le);hs=s(Kn,"fastBPE"),Kn.forEach(o),ms=s(lr,"."),lr.forEach(o),Kt.forEach(o),No=d(t),Z=n(t,"H2",{class:!0});var dr=i(Z);ce=n(dr,"A",{id:!0,class:!0,href:!0});var Qn=i(ce);io=n(Qn,"SPAN",{});var Xn=i(io);v(De.$$.fragment,Xn),Xn.forEach(o),Qn.forEach(o),fs=d(dr),co=n(dr,"SPAN",{});var Yn=i(co);us=s(Yn,"Inference"),Yn.forEach(o),dr.forEach(o),Oo=d(t),K=n(t,"P",{});var Qt=i(K);_s=s(Qt,"Speech2Text2\u2019s "),wt=n(Qt,"A",{href:!0});var Zn=i(wt);gs=s(Zn,"SpeechEncoderDecoderModel"),Zn.forEach(o),vs=s(Qt,` model accepts raw waveform input values from speech and
makes use of `),$t=n(Qt,"A",{href:!0});var ei=i($t);xs=s(ei,"generate()"),ei.forEach(o),Ts=s(Qt,` to translate the input speech
autoregressively to the target language.`),Qt.forEach(o),Uo=d(t),C=n(t,"P",{});var N=i(C);bs=s(N,"The "),yt=n(N,"A",{href:!0});var ti=i(yt);ks=s(ti,"Wav2Vec2FeatureExtractor"),ti.forEach(o),Ss=s(N,` class is responsible for preprocessing the input speech and
`),Et=n(N,"A",{href:!0});var oi=i(Et);ws=s(oi,"Speech2Text2Tokenizer"),oi.forEach(o),$s=s(N,` decodes the generated target tokens to the target string. The
`),zt=n(N,"A",{href:!0});var ri=i(zt);ys=s(ri,"Speech2Text2Processor"),ri.forEach(o),Es=s(N," wraps "),Pt=n(N,"A",{href:!0});var si=i(Pt);zs=s(si,"Wav2Vec2FeatureExtractor"),si.forEach(o),Ps=s(N,` and
`),jt=n(N,"A",{href:!0});var ai=i(jt);js=s(ai,"Speech2Text2Tokenizer"),ai.forEach(o),Cs=s(N,` into a single instance to both extract the input features and decode the
predicted token ids.`),N.forEach(o),Ro=d(t),Ct=n(t,"UL",{});var ni=i(Ct);lo=n(ni,"LI",{});var ii=i(lo);qs=s(ii,"Step-by-step Speech Translation"),ii.forEach(o),ni.forEach(o),Ho=d(t),v(We.$$.fragment,t),Bo=d(t),qt=n(t,"UL",{});var ci=i(qt);Ie=n(ci,"LI",{});var pr=i(Ie);po=n(pr,"P",{});var li=i(po);Fs=s(li,"Speech Translation via Pipelines"),li.forEach(o),Ms=d(pr),ho=n(pr,"P",{});var di=i(ho);As=s(di,"The automatic speech recognition pipeline can also be used to translate speech in just a couple lines of code"),di.forEach(o),pr.forEach(o),ci.forEach(o),Jo=d(t),v(Ve.$$.fragment,t),Go=d(t),le=n(t,"P",{});var hr=i(le);Ls=s(hr,"See "),Ne=n(hr,"A",{href:!0,rel:!0});var pi=i(Ne);Ds=s(pi,"model hub"),pi.forEach(o),Ws=s(hr," to look for Speech2Text2 checkpoints."),hr.forEach(o),Ko=d(t),ee=n(t,"H2",{class:!0});var mr=i(ee);de=n(mr,"A",{id:!0,class:!0,href:!0});var hi=i(de);mo=n(hi,"SPAN",{});var mi=i(mo);v(Oe.$$.fragment,mi),mi.forEach(o),hi.forEach(o),Is=d(mr),fo=n(mr,"SPAN",{});var fi=i(fo);Vs=s(fi,"Speech2Text2Config"),fi.forEach(o),mr.forEach(o),Qo=d(t),I=n(t,"DIV",{class:!0});var we=i(I);v(Ue.$$.fragment,we),Ns=d(we),te=n(we,"P",{});var Xt=i(te);Os=s(Xt,"This is the configuration class to store the configuration of a "),Ft=n(Xt,"A",{href:!0});var ui=i(Ft);Us=s(ui,"Speech2Text2ForCausalLM"),ui.forEach(o),Rs=s(Xt,`. It is used to
instantiate an Speech2Text2 model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Speech2Text2
`),Re=n(Xt,"A",{href:!0,rel:!0});var _i=i(Re);Hs=s(_i,"facebook/s2t-wav2vec2-large-en-de"),_i.forEach(o),Bs=s(Xt," architecture."),Xt.forEach(o),Js=d(we),oe=n(we,"P",{});var Yt=i(oe);Gs=s(Yt,"Configuration objects inherit from "),Mt=n(Yt,"A",{href:!0});var gi=i(Mt);Ks=s(gi,"PretrainedConfig"),gi.forEach(o),Qs=s(Yt,` and can be used to control the model outputs. Read the
documentation from `),At=n(Yt,"A",{href:!0});var vi=i(At);Xs=s(vi,"PretrainedConfig"),vi.forEach(o),Ys=s(Yt," for more information."),Yt.forEach(o),Zs=d(we),v(pe.$$.fragment,we),we.forEach(o),Xo=d(t),re=n(t,"H2",{class:!0});var fr=i(re);he=n(fr,"A",{id:!0,class:!0,href:!0});var xi=i(he);uo=n(xi,"SPAN",{});var Ti=i(uo);v(He.$$.fragment,Ti),Ti.forEach(o),xi.forEach(o),ea=d(fr),_o=n(fr,"SPAN",{});var bi=i(_o);ta=s(bi,"Speech2TextTokenizer"),bi.forEach(o),fr.forEach(o),Yo=d(t),j=n(t,"DIV",{class:!0});var O=i(j);v(Be.$$.fragment,O),oa=d(O),go=n(O,"P",{});var ki=i(go);ra=s(ki,"Constructs a Speech2Text2Tokenizer."),ki.forEach(o),sa=d(O),Je=n(O,"P",{});var ur=i(Je);aa=s(ur,"This tokenizer inherits from "),Lt=n(ur,"A",{href:!0});var Si=i(Lt);na=s(Si,"PreTrainedTokenizer"),Si.forEach(o),ia=s(ur,` which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`),ur.forEach(o),ca=d(O),me=n(O,"DIV",{class:!0});var _r=i(me);v(Ge.$$.fragment,_r),la=d(_r),vo=n(_r,"P",{});var wi=i(vo);da=s(wi,"Convert a list of lists of token ids into a list of strings by calling decode."),wi.forEach(o),_r.forEach(o),pa=d(O),Q=n(O,"DIV",{class:!0});var Zt=i(Q);v(Ke.$$.fragment,Zt),ha=d(Zt),xo=n(Zt,"P",{});var $i=i(xo);ma=s($i,`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`),$i.forEach(o),fa=d(Zt),Qe=n(Zt,"P",{});var gr=i(Qe);ua=s(gr,"Similar to doing "),To=n(gr,"CODE",{});var yi=i(To);_a=s(yi,"self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))"),yi.forEach(o),ga=s(gr,"."),gr.forEach(o),Zt.forEach(o),va=d(O),Dt=n(O,"DIV",{class:!0});var Ei=i(Dt);v(Xe.$$.fragment,Ei),Ei.forEach(o),O.forEach(o),Zo=d(t),se=n(t,"H2",{class:!0});var vr=i(se);fe=n(vr,"A",{id:!0,class:!0,href:!0});var zi=i(fe);bo=n(zi,"SPAN",{});var Pi=i(bo);v(Ye.$$.fragment,Pi),Pi.forEach(o),zi.forEach(o),xa=d(vr),ko=n(vr,"SPAN",{});var ji=i(ko);Ta=s(ji,"Speech2Text2Processor"),ji.forEach(o),vr.forEach(o),er=d(t),$=n(t,"DIV",{class:!0});var P=i($);v(Ze.$$.fragment,P),ba=d(P),So=n(P,"P",{});var Ci=i(So);ka=s(Ci,`Constructs a Speech2Text2 processor which wraps a Speech2Text2 feature extractor and a Speech2Text2 tokenizer into
a single processor.`),Ci.forEach(o),Sa=d(P),A=n(P,"P",{});var H=i(A);Wt=n(H,"A",{href:!0});var qi=i(Wt);wa=s(qi,"Speech2Text2Processor"),qi.forEach(o),$a=s(H," offers all the functionalities of "),It=n(H,"A",{href:!0});var Fi=i(It);ya=s(Fi,"AutoFeatureExtractor"),Fi.forEach(o),Ea=s(H," and "),Vt=n(H,"A",{href:!0});var Mi=i(Vt);za=s(Mi,"Speech2Text2Tokenizer"),Mi.forEach(o),Pa=s(H,`.
See the `),et=n(H,"A",{href:!0});var Cn=i(et);wo=n(Cn,"STRONG",{});var Ai=i(wo);ja=s(Ai,"call"),Ai.forEach(o),Ca=s(Cn,"()"),Cn.forEach(o),qa=s(H," and "),Nt=n(H,"A",{href:!0});var Li=i(Nt);Fa=s(Li,"decode()"),Li.forEach(o),Ma=s(H," for more information."),H.forEach(o),Aa=d(P),ue=n(P,"DIV",{class:!0});var xr=i(ue);v(tt.$$.fragment,xr),La=d(xr),U=n(xr,"P",{});var $e=i(U);Da=s($e,`When used in normal mode, this method forwards all its arguments to AutoFeatureExtractor\u2019s
`),$o=n($e,"CODE",{});var Di=i($o);Wa=s(Di,"__call__()"),Di.forEach(o),Ia=s($e,` and returns its output. If used in the context
`),Ot=n($e,"A",{href:!0});var Wi=i(Ot);Va=s(Wi,"as_target_processor()"),Wi.forEach(o),Na=s($e,` this method forwards all its arguments to
Speech2Text2Tokenizer\u2019s `),ot=n($e,"A",{href:!0});var qn=i(ot);yo=n(qn,"STRONG",{});var Ii=i(yo);Oa=s(Ii,"call"),Ii.forEach(o),Ua=s(qn,"()"),qn.forEach(o),Ra=s($e,`. Please refer to the doctsring of the above two
methods for more information.`),$e.forEach(o),xr.forEach(o),Ha=d(P),X=n(P,"DIV",{class:!0});var eo=i(X);v(rt.$$.fragment,eo),Ba=d(eo),Eo=n(eo,"P",{});var Vi=i(Eo);Ja=s(Vi,"Instantiate a processor associated with a pretrained model."),Vi.forEach(o),Ga=d(eo),v(_e.$$.fragment,eo),eo.forEach(o),Ka=d(P),Y=n(P,"DIV",{class:!0});var to=i(Y);v(st.$$.fragment,to),Qa=d(to),at=n(to,"P",{});var Tr=i(at);Xa=s(Tr,`Saves the attributes of this processor (feature extractor, tokenizer\u2026) in the specified directory so that it
can be reloaded using the `),Ut=n(Tr,"A",{href:!0});var Ni=i(Ut);Ya=s(Ni,"from_pretrained()"),Ni.forEach(o),Za=s(Tr," method."),Tr.forEach(o),en=d(to),v(ge.$$.fragment,to),to.forEach(o),tn=d(P),ve=n(P,"DIV",{class:!0});var br=i(ve);v(nt.$$.fragment,br),on=d(br),it=n(br,"P",{});var kr=i(it);rn=s(kr,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Rt=n(kr,"A",{href:!0});var Oi=i(Rt);sn=s(Oi,"batch_decode()"),Oi.forEach(o),an=s(kr,`. Please
refer to the docstring of this method for more information.`),kr.forEach(o),br.forEach(o),nn=d(P),xe=n(P,"DIV",{class:!0});var Sr=i(xe);v(ct.$$.fragment,Sr),cn=d(Sr),lt=n(Sr,"P",{});var wr=i(lt);ln=s(wr,"This method forwards all its arguments to Speech2Text2Tokenizer\u2019s "),Ht=n(wr,"A",{href:!0});var Ui=i(Ht);dn=s(Ui,"decode()"),Ui.forEach(o),pn=s(wr,`. Please refer
to the docstring of this method for more information.`),wr.forEach(o),Sr.forEach(o),hn=d(P),Te=n(P,"DIV",{class:!0});var $r=i(Te);v(dt.$$.fragment,$r),mn=d($r),zo=n($r,"P",{});var Ri=i(zo);fn=s(Ri,`Temporarily sets the tokenizer for processing the input. Useful for encoding the labels when fine-tuning
Speech2Text2.`),Ri.forEach(o),$r.forEach(o),P.forEach(o),tr=d(t),ae=n(t,"H2",{class:!0});var yr=i(ae);be=n(yr,"A",{id:!0,class:!0,href:!0});var Hi=i(be);Po=n(Hi,"SPAN",{});var Bi=i(Po);v(pt.$$.fragment,Bi),Bi.forEach(o),Hi.forEach(o),un=d(yr),jo=n(yr,"SPAN",{});var Ji=i(jo);_n=s(Ji,"Speech2Text2ForCausalLM"),Ji.forEach(o),yr.forEach(o),or=d(t),V=n(t,"DIV",{class:!0});var ye=i(V);v(ht.$$.fragment,ye),gn=d(ye),R=n(ye,"P",{});var Ee=i(R);vn=s(Ee,"The Speech2Text2 Decoder with a language modeling head. Can be used as the decoder part of "),Bt=n(Ee,"A",{href:!0});var Gi=i(Bt);xn=s(Gi,"EncoderDecoderModel"),Gi.forEach(o),Tn=s(Ee," and "),Co=n(Ee,"CODE",{});var Ki=i(Co);bn=s(Ki,"SpeechEncoderDecoder"),Ki.forEach(o),kn=s(Ee,`.
This model inherits from `),Jt=n(Ee,"A",{href:!0});var Qi=i(Jt);Sn=s(Qi,"PreTrainedModel"),Qi.forEach(o),wn=s(Ee,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ee.forEach(o),$n=d(ye),mt=n(ye,"P",{});var Er=i(mt);yn=s(Er,"This model is also a PyTorch "),ft=n(Er,"A",{href:!0,rel:!0});var Xi=i(ft);En=s(Xi,"torch.nn.Module"),Xi.forEach(o),zn=s(Er,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Er.forEach(o),Pn=d(ye),ke=n(ye,"DIV",{class:!0});var zr=i(ke);v(ut.$$.fragment,zr),jn=d(zr),v(Se.$$.fragment,zr),zr.forEach(o),ye.forEach(o),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(pc)),c(_,"id","speech2text2"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#speech2text2"),c(u,"class","relative group"),c(M,"id","overview"),c(M,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(M,"href","#overview"),c(F,"class","relative group"),c(vt,"href","wav2vec2"),c(Pe,"href","https://arxiv.org/abs/2104.06678"),c(Pe,"rel","nofollow"),c(xt,"href","wav2vec2"),c(Tt,"href","hubert"),c(bt,"href","speech-encoder-decoder"),c(je,"href","https://huggingface.co/patrickvonplaten"),c(je,"rel","nofollow"),c(Ce,"href","https://github.com/pytorch/fairseq/blob/1f7ef9ed1e1061f8c7f88f8b94c7186834398690/fairseq/models/wav2vec/wav2vec2_asr.py#L266"),c(Ce,"rel","nofollow"),c(Fe,"href","https://huggingface.co/models?other=speech2text2"),c(Fe,"rel","nofollow"),c(St,"href","speech-encoder-decoder"),c(Le,"href","https://github.com/glample/fastBPE"),c(Le,"rel","nofollow"),c(ce,"id","inference"),c(ce,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ce,"href","#inference"),c(Z,"class","relative group"),c(wt,"href","/docs/transformers/main/en/model_doc/speech-encoder-decoder#transformers.SpeechEncoderDecoderModel"),c($t,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(yt,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),c(Et,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),c(zt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),c(Pt,"href","/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2FeatureExtractor"),c(jt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),c(Ne,"href","https://huggingface.co/models?filter=speech2text2"),c(Ne,"rel","nofollow"),c(de,"id","transformers.Speech2Text2Config"),c(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(de,"href","#transformers.Speech2Text2Config"),c(ee,"class","relative group"),c(Ft,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2ForCausalLM"),c(Re,"href","https://huggingface.co/facebook/s2t-wav2vec2-large-en-de"),c(Re,"rel","nofollow"),c(Mt,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(At,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(he,"id","transformers.Speech2Text2Tokenizer"),c(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(he,"href","#transformers.Speech2Text2Tokenizer"),c(re,"class","relative group"),c(Lt,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fe,"id","transformers.Speech2Text2Processor"),c(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fe,"href","#transformers.Speech2Text2Processor"),c(se,"class","relative group"),c(Wt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor"),c(It,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoFeatureExtractor"),c(Vt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer"),c(et,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.__call__"),c(Nt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.decode"),c(Ot,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Processor.as_target_processor"),c(ot,"href","/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__"),c(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ut,"href","/docs/transformers/main/en/model_doc/speech_to_text#transformers.Speech2TextProcessor.from_pretrained"),c(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Rt,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.batch_decode"),c(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ht,"href","/docs/transformers/main/en/model_doc/speech_to_text_2#transformers.Speech2Text2Tokenizer.decode"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(be,"id","transformers.Speech2Text2ForCausalLM"),c(be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(be,"href","#transformers.Speech2Text2ForCausalLM"),c(ae,"class","relative group"),c(Bt,"href","/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderModel"),c(Jt,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(ft,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ft,"rel","nofollow"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){e(document.head,f),h(t,E,p),h(t,u,p),e(u,_),e(_,w),x(m,w,null),e(u,S),e(u,W),e(W,q),h(t,y,p),h(t,F,p),e(F,M),e(M,oo),x(ze,oo,null),e(F,jr),e(F,ro),e(ro,Cr),h(t,Ao,p),h(t,J,p),e(J,qr),e(J,vt),e(vt,Fr),e(J,Mr),e(J,Pe),e(Pe,Ar),e(J,Lr),h(t,Lo,p),h(t,z,p),e(z,Dr),e(z,so),e(so,Wr),e(z,Ir),e(z,ao),e(ao,Vr),e(z,Nr),e(z,xt),e(xt,Or),e(z,Ur),e(z,Tt),e(Tt,Rr),e(z,Hr),e(z,bt),e(bt,Br),e(z,Jr),e(z,no),e(no,Gr),e(z,Kr),h(t,Do,p),h(t,ne,p),e(ne,Qr),e(ne,je),e(je,Xr),e(ne,Yr),h(t,Wo,p),h(t,ie,p),e(ie,Zr),e(ie,Ce),e(Ce,es),e(ie,ts),h(t,Io,p),h(t,kt,p),e(kt,os),h(t,Vo,p),h(t,G,p),e(G,qe),e(qe,rs),e(qe,Fe),e(Fe,ss),e(qe,as),e(G,ns),e(G,Me),e(Me,is),e(Me,St),e(St,cs),e(Me,ls),e(G,ds),e(G,Ae),e(Ae,ps),e(Ae,Le),e(Le,hs),e(Ae,ms),h(t,No,p),h(t,Z,p),e(Z,ce),e(ce,io),x(De,io,null),e(Z,fs),e(Z,co),e(co,us),h(t,Oo,p),h(t,K,p),e(K,_s),e(K,wt),e(wt,gs),e(K,vs),e(K,$t),e($t,xs),e(K,Ts),h(t,Uo,p),h(t,C,p),e(C,bs),e(C,yt),e(yt,ks),e(C,Ss),e(C,Et),e(Et,ws),e(C,$s),e(C,zt),e(zt,ys),e(C,Es),e(C,Pt),e(Pt,zs),e(C,Ps),e(C,jt),e(jt,js),e(C,Cs),h(t,Ro,p),h(t,Ct,p),e(Ct,lo),e(lo,qs),h(t,Ho,p),x(We,t,p),h(t,Bo,p),h(t,qt,p),e(qt,Ie),e(Ie,po),e(po,Fs),e(Ie,Ms),e(Ie,ho),e(ho,As),h(t,Jo,p),x(Ve,t,p),h(t,Go,p),h(t,le,p),e(le,Ls),e(le,Ne),e(Ne,Ds),e(le,Ws),h(t,Ko,p),h(t,ee,p),e(ee,de),e(de,mo),x(Oe,mo,null),e(ee,Is),e(ee,fo),e(fo,Vs),h(t,Qo,p),h(t,I,p),x(Ue,I,null),e(I,Ns),e(I,te),e(te,Os),e(te,Ft),e(Ft,Us),e(te,Rs),e(te,Re),e(Re,Hs),e(te,Bs),e(I,Js),e(I,oe),e(oe,Gs),e(oe,Mt),e(Mt,Ks),e(oe,Qs),e(oe,At),e(At,Xs),e(oe,Ys),e(I,Zs),x(pe,I,null),h(t,Xo,p),h(t,re,p),e(re,he),e(he,uo),x(He,uo,null),e(re,ea),e(re,_o),e(_o,ta),h(t,Yo,p),h(t,j,p),x(Be,j,null),e(j,oa),e(j,go),e(go,ra),e(j,sa),e(j,Je),e(Je,aa),e(Je,Lt),e(Lt,na),e(Je,ia),e(j,ca),e(j,me),x(Ge,me,null),e(me,la),e(me,vo),e(vo,da),e(j,pa),e(j,Q),x(Ke,Q,null),e(Q,ha),e(Q,xo),e(xo,ma),e(Q,fa),e(Q,Qe),e(Qe,ua),e(Qe,To),e(To,_a),e(Qe,ga),e(j,va),e(j,Dt),x(Xe,Dt,null),h(t,Zo,p),h(t,se,p),e(se,fe),e(fe,bo),x(Ye,bo,null),e(se,xa),e(se,ko),e(ko,Ta),h(t,er,p),h(t,$,p),x(Ze,$,null),e($,ba),e($,So),e(So,ka),e($,Sa),e($,A),e(A,Wt),e(Wt,wa),e(A,$a),e(A,It),e(It,ya),e(A,Ea),e(A,Vt),e(Vt,za),e(A,Pa),e(A,et),e(et,wo),e(wo,ja),e(et,Ca),e(A,qa),e(A,Nt),e(Nt,Fa),e(A,Ma),e($,Aa),e($,ue),x(tt,ue,null),e(ue,La),e(ue,U),e(U,Da),e(U,$o),e($o,Wa),e(U,Ia),e(U,Ot),e(Ot,Va),e(U,Na),e(U,ot),e(ot,yo),e(yo,Oa),e(ot,Ua),e(U,Ra),e($,Ha),e($,X),x(rt,X,null),e(X,Ba),e(X,Eo),e(Eo,Ja),e(X,Ga),x(_e,X,null),e($,Ka),e($,Y),x(st,Y,null),e(Y,Qa),e(Y,at),e(at,Xa),e(at,Ut),e(Ut,Ya),e(at,Za),e(Y,en),x(ge,Y,null),e($,tn),e($,ve),x(nt,ve,null),e(ve,on),e(ve,it),e(it,rn),e(it,Rt),e(Rt,sn),e(it,an),e($,nn),e($,xe),x(ct,xe,null),e(xe,cn),e(xe,lt),e(lt,ln),e(lt,Ht),e(Ht,dn),e(lt,pn),e($,hn),e($,Te),x(dt,Te,null),e(Te,mn),e(Te,zo),e(zo,fn),h(t,tr,p),h(t,ae,p),e(ae,be),e(be,Po),x(pt,Po,null),e(ae,un),e(ae,jo),e(jo,_n),h(t,or,p),h(t,V,p),x(ht,V,null),e(V,gn),e(V,R),e(R,vn),e(R,Bt),e(Bt,xn),e(R,Tn),e(R,Co),e(Co,bn),e(R,kn),e(R,Jt),e(Jt,Sn),e(R,wn),e(V,$n),e(V,mt),e(mt,yn),e(mt,ft),e(ft,En),e(mt,zn),e(V,Pn),e(V,ke),x(ut,ke,null),e(ke,jn),x(Se,ke,null),rr=!0},p(t,[p]){const _t={};p&2&&(_t.$$scope={dirty:p,ctx:t}),pe.$set(_t);const qo={};p&2&&(qo.$$scope={dirty:p,ctx:t}),_e.$set(qo);const Fo={};p&2&&(Fo.$$scope={dirty:p,ctx:t}),ge.$set(Fo);const Mo={};p&2&&(Mo.$$scope={dirty:p,ctx:t}),Se.$set(Mo)},i(t){rr||(T(m.$$.fragment,t),T(ze.$$.fragment,t),T(De.$$.fragment,t),T(We.$$.fragment,t),T(Ve.$$.fragment,t),T(Oe.$$.fragment,t),T(Ue.$$.fragment,t),T(pe.$$.fragment,t),T(He.$$.fragment,t),T(Be.$$.fragment,t),T(Ge.$$.fragment,t),T(Ke.$$.fragment,t),T(Xe.$$.fragment,t),T(Ye.$$.fragment,t),T(Ze.$$.fragment,t),T(tt.$$.fragment,t),T(rt.$$.fragment,t),T(_e.$$.fragment,t),T(st.$$.fragment,t),T(ge.$$.fragment,t),T(nt.$$.fragment,t),T(ct.$$.fragment,t),T(dt.$$.fragment,t),T(pt.$$.fragment,t),T(ht.$$.fragment,t),T(ut.$$.fragment,t),T(Se.$$.fragment,t),rr=!0)},o(t){b(m.$$.fragment,t),b(ze.$$.fragment,t),b(De.$$.fragment,t),b(We.$$.fragment,t),b(Ve.$$.fragment,t),b(Oe.$$.fragment,t),b(Ue.$$.fragment,t),b(pe.$$.fragment,t),b(He.$$.fragment,t),b(Be.$$.fragment,t),b(Ge.$$.fragment,t),b(Ke.$$.fragment,t),b(Xe.$$.fragment,t),b(Ye.$$.fragment,t),b(Ze.$$.fragment,t),b(tt.$$.fragment,t),b(rt.$$.fragment,t),b(_e.$$.fragment,t),b(st.$$.fragment,t),b(ge.$$.fragment,t),b(nt.$$.fragment,t),b(ct.$$.fragment,t),b(dt.$$.fragment,t),b(pt.$$.fragment,t),b(ht.$$.fragment,t),b(ut.$$.fragment,t),b(Se.$$.fragment,t),rr=!1},d(t){o(f),t&&o(E),t&&o(u),k(m),t&&o(y),t&&o(F),k(ze),t&&o(Ao),t&&o(J),t&&o(Lo),t&&o(z),t&&o(Do),t&&o(ne),t&&o(Wo),t&&o(ie),t&&o(Io),t&&o(kt),t&&o(Vo),t&&o(G),t&&o(No),t&&o(Z),k(De),t&&o(Oo),t&&o(K),t&&o(Uo),t&&o(C),t&&o(Ro),t&&o(Ct),t&&o(Ho),k(We,t),t&&o(Bo),t&&o(qt),t&&o(Jo),k(Ve,t),t&&o(Go),t&&o(le),t&&o(Ko),t&&o(ee),k(Oe),t&&o(Qo),t&&o(I),k(Ue),k(pe),t&&o(Xo),t&&o(re),k(He),t&&o(Yo),t&&o(j),k(Be),k(Ge),k(Ke),k(Xe),t&&o(Zo),t&&o(se),k(Ye),t&&o(er),t&&o($),k(Ze),k(tt),k(rt),k(_e),k(st),k(ge),k(nt),k(ct),k(dt),t&&o(tr),t&&o(ae),k(pt),t&&o(or),t&&o(V),k(ht),k(ut),k(Se)}}}const pc={local:"speech2text2",sections:[{local:"overview",title:"Overview"},{local:"inference",title:"Inference"},{local:"transformers.Speech2Text2Config",title:"Speech2Text2Config"},{local:"transformers.Speech2Text2Tokenizer",title:"Speech2TextTokenizer"},{local:"transformers.Speech2Text2Processor",title:"Speech2Text2Processor"},{local:"transformers.Speech2Text2ForCausalLM",title:"Speech2Text2ForCausalLM"}],title:"Speech2Text2"};function hc(B){return ac(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xc extends tc{constructor(f){super();oc(this,f,hc,dc,rc,{})}}export{xc as default,pc as metadata};
